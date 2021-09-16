const fs = require('fs');
const createTestCafe = require('testcafe');
const testControllerHolder = require('../support/testControllerHolder');

const {AfterAll, setDefaultTimeout, Before, After, Status} = require('cucumber');
const errorHandling = require('../support/errorHandling');
const { dispose } = require('testcafe-browser-provider-browserstack');
const TIMEOUT = 50000;

let isTestCafeError = false;
let attachScreenshotToReport = null;
let cafeRunner = null;
let n = 0;

function createTestFile() {
    fs.writeFileSync(`${process.env.CUCUMBER_SLAVE_ID}_test.js`,
        'import errorHandling from "./features/support/errorHandling.js";\n' +
        'import testControllerHolder from "./features/support/testControllerHolder.js";\n\n' +

        'fixture("fixture")\n' +

        'test\n' +
        '("test", testControllerHolder.capture)')
}

function runTest(iteration, browser) {
    createTestCafe('localhost')
        .then(function(tc) {
            cafeRunner = tc;
            const runner = tc.createRunner();
            return runner
                .src(`./${process.env.CUCUMBER_SLAVE_ID}_test.js`)
                .screenshots('reports/screenshots/', true)
                .browsers(browser)
                .run()
                .catch(function(error) {
                    console.error(error);
                });
        })
        .then(function(report) {
        });
}

// function getScreenshotPath(){
//     return __dirname.replace("features/support","reports/screenshots/errors/1.png")
// }


setDefaultTimeout(TIMEOUT);

Before(function() {
     console.log("The Before function is started")

    runTest(n, this.setBrowser());
    createTestFile();
    n += 2;
    return this.waitForTestController.then(function(testController) {
        return testController.maximizeWindow();
    });
});

After(function() {
     console.log("The After function is started")
    fs.unlinkSync(`./${process.env.CUCUMBER_SLAVE_ID}_test.js`);
    testControllerHolder.free();
});

After(async function(testCase) {
     console.log("The After function with test case is started")
    if (testCase.result.status === Status.FAILED) {
        isTestCafeError = true;
        errorHandling.addErrorToController();
         if (!this.setBrowser().includes('browserstack') ){
        const world = this;
        attachScreenshotToReport = world.attachScreenshotToReport;
        await errorHandling.ifErrorTakeScreenshot(testController)
         }
    }
});

AfterAll(function() {
     let intervalId = null;
     console.log("The After function with All is started")

     function waitForTestCafe() {
        // console.log("Inside the waitForTestCafe function")
        intervalId = setInterval(checkLastResponse, 500);
    }
    
    async function checkLastResponse() {
        console.log("The testController.testRun value is : ",testController.testRun.lastDriverStatusResponse)
        if (testController.testRun.lastDriverStatusResponse === 'test-done-confirmation') {
            // console.log("Inside the CheckLastResponse function")
            // fs.unlinkSync(`./${process.env.CUCUMBER_SLAVE_ID}_test.js`);
            await cafeRunner.close();
            await process.exit();
            await clearInterval(intervalId);
        }
    }
    

    waitForTestCafe();
});

const getIsTestCafeError = function() {
    return isTestCafeError;
};

const getAttachScreenshotToReport = function(path) {
    return attachScreenshotToReport(path);
};

exports.getIsTestCafeError = getIsTestCafeError;
exports.getAttachScreenshotToReport = getAttachScreenshotToReport;
