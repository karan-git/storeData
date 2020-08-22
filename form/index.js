
const {form: formSchema} = require('./schema')
const FormService = require('./service')

module.exports = async (fastify) => {
    fastify.post('/', formHandler)

}

module.exports[Symbol.for('plugin-meta')] = {
    decorators: {
      fastify: [
        'formService',
      ]
    }
  }

async function formHandler(req, reply) {
    console.log(req.body)
    let getname = JSON.stringify(req.body);
    const userDetails = await this.formService.register(getname)
    console.log('ddddddddddddddddd', userDetails)
    return reply.send({name: userDetails.name})
}

