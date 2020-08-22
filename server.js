'use strict'

const FormService = require('./form/service')
const path = require('path')
const fp = require('fastify-plugin')

const fastify = require('fastify')({
    logger: true
})

fastify.register(require('fastify-cors'), {
    origin: '*',
    credentials: true
})
// //   fastify.register(require("mys)
fastify.register(require("fastify-mysql"), {
    connectionString: 'mysql://root:karanv7417@localhost:3306/fastifydatabase'
})

// fastify.register(require("./database"), {url: 'mysql://root@localhost:3306/'})

async function decorateFastifyInstance(fastify){
    let table_name = "user_data";
            fastify.mysql.query(
                `create table ${table_name} (name varchar(55))`,
              function onResult (err, result) {
                console.log(err || result)
              }
            )

        const formService = new FormService(table_name, fastify)
        fastify.decorate('formService', formService)

}
fastify.register(fp(decorateFastifyInstance))
fastify.register(require('./form'), {prefix: "/api/"})

fastify.register(require('fastify-static'), {
    root: path.join(__dirname, 'form', 'page'),
    prefix: '/'
})
const start = async () => {
    try {
        await fastify.listen(3000)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()