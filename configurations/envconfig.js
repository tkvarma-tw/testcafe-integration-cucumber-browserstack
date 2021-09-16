const { dirname } = require('path');

const environmentVariableName = 'testEnv';
const defaultEnvironmentName = 'dev';
const environmentConfigurationFileName = __dirname + '/env.json'


const getArgOrEnv = (argName, defaultValue) => {
  // console.log(process.env[argName])
  // let arg = process.argv.find(arg => arg.startsWith(`--${argName}=`));

  return process.env[argName] ?? defaultValue;
  // return arg?.split('=')[1] ?? process.env[environmentVariableName] ?? defaultValue;
};

const getEnv = () => getArgOrEnv(environmentVariableName, defaultEnvironmentName);

 const getConfig = () => {
  const fs = require('fs');
  const env = getEnv();
  return JSON.parse(fs.readFileSync(environmentConfigurationFileName, 'utf8'))[env];
};

module.exports = {
    getConfig,
    getEnv
}