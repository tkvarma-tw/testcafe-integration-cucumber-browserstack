const testcafe = require('testcafe');
const hooks = require('../support/hooks');

exports.addErrorToController = function() {
    testController.executionChain
        .catch(function(result) {
            const errAdapter = new testcafe.embeddingUtils.TestRunErrorFormattableAdapter(result, {
                testRunPhase: testController.testRun.phase,
                userAgent: testController.testRun.browserConnection.browserInfo.userAgent,
            });
            return testController.testRun.errs.push(errAdapter);
        });
};

exports.ifErrorTakeScreenshot = function(resolvedTestController) {

    if (hooks.getIsTestCafeError() === true) {
        // console.log("The argument passed in command line "+ process.argv)
        // if (process.argv.includes('--format') || process.argv.includes('-f') || process.argv.includes('--format-options'))  {
            resolvedTestController.executionChain._state = "fulfilled"
            return resolvedTestController.takeScreenshot().then(function(path) {
                // console.log('==== expected')
                return hooks.getAttachScreenshotToReport(path);
            });
        // } else {
        //     console.log('==== not expected')
        //     return resolvedTestController.takeScreenshot();
        // }
    }
};
