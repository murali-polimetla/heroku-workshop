const chai = require('chai')
chai.use(require('chai-http'))
const expect = chai.expect
const app = require('../app')
const db = require('../db')

describe("Todos", () => {

  beforeEach(async () => {
    await db('tasks').delete()
  })

  describe("GET /todos", () => {
    it("displays a list of todos", async () => {
      db('tasks').insert({name: 'Do stuff'})

      const response = await chai.request(app).get('/')

      expect(response).to.have.status(200)
      expect(response.text).to.contain("Heroku")
    })
  })

})
