'use strict'

class FormService {
    constructor(table_name, fastify){
        this.table_name = table_name
        this.fastify = fastify
    }
    async register(name){
        let data = "";
        try {
            await this.fastify.mysql.query(
                // "Insert into user_data values ('Karan')";
                "Insert into " +this.table_name+ "(name) values (" +name+ ")",
                function onResult (err, result) {
                    console.log(result);
                    data = result.data
                  console.log(err || result)
                }
              )
        }
        catch(e){
            console.log(e);
        }
        return data
    }

    async getName() {
        try{
            let name;
            await this.fastify.mysql.query(
                name = "Select * from " + this.table_name,
                function onResult (err, result) {
                    console.log(result)
                }
            )
            return name;
        }
        catch(e){
            console.log(e);
        }
    }
}

module.exports = FormService
