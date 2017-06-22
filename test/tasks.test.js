const chai = require('chai')
chai.use(require('chai-http'))
const expect = chai.expect
const app = require('../app')
const db = require('../db')
const sendgrid = require('../lib/sendgrid')

sendgrid.sendEmail = false

describe("Tasks", () => {

})
