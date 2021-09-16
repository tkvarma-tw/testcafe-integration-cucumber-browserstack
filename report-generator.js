var reporter = require('cucumber-html-reporter');
const projectVersion = process.env.npm_package_version;
var date=new Date();
const reportGenerationTime=new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().replace(/T/, ' ').replace(/\..+/, '');  

const world = this;

var options = {
        theme: 'bootstrap',
        jsonFile: 'reports/report.json',
        output: 'reports/report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        storeScreenshots: true,
        launchReport: true,
        metadata: {
            "Project Name": "Take Register UI Tests Report",
            "Description": "UI Tests for Take Register",
            "Release": `${projectVersion}`,
            "Report Generation Time": `${reportGenerationTime}`,
            "Test Environment": `${process.env["testEnv"]}`
            //  ,"Browser": `${world.browser}`
        }
    };

    reporter.generate(options);