/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const path = require("path")
require("dotenv").config({ path: path.resolve(process.cwd(), ".env.local") })

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  config.env.MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY
  config.env.MAILCHIMP_API_SERVER = process.env.MAILCHIMP_API_SERVER
  config.env.MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID

  return config
}
