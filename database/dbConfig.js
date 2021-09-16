const { getEnv, getConfig } = require("../configurations/envconfig") ;
const config = getConfig();


const sqlSIMS7Config = {
  user: config.SIMS7.user,
  password: config.SIMS7.password,
  database: config.SIMS7.database,
  server: config.SIMS7.server,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}

const sqlSIMSNGConfig = {
  user: config.SIMSNG.user,
  password: config.SIMSNG.password,
  database: config.SIMSNG.database,
  server: config.SIMSNG.server,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}



module.exports = {
  sqlSIMS7Config,
  sqlSIMSNGConfig
}