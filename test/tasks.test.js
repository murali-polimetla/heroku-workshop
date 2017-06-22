const chai = require('chai')
chai.use(require('chai-http'))
const expect = chai.expect
const app = require('../app')
const db = require('../db')
const sendgrid = require('../lib/sendgrid')

sendgrid.sendEmail = false

describe("Tasks", () => {

  beforeEach(async () => {
    await db('tasks').delete()
  })

  describe("GET /", () => {
    it("displays a list of tasks", async () => {
      await db('tasks').insert({name: 'Do stuff'})

      const response = await chai.request(app).get('/')

      expect(response).to.have.status(200)
      expect(response.text).to.contain("Do stuff")
    })
  })

})
