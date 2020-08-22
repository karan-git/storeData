'use strict'

const form = {
    body: { type: 'object' },
    required: ['id', 'name', 'mobile_number', 'city', 'state'],
    properties: {
        id: {type: 'number'},
        name: {type: 'string'},
        mobile_number: {type: 'number'},
        city: {type: 'string'},
        state: {type: 'string'}
    },
    200: {
        type: 'object',
        required: [ 'userId' ],
        properties: {
          userId: { type: 'string' }
        },
        additionalProperties: false
      }
}

module.exports = form;