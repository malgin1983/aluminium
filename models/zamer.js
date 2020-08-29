const fs = require('fs')
const path = require('path')
const uuid = require('uuid')

class Zamer {
    constructor(name, phone){
        this.name = name
        this.phone = phone
        this.id = uuid()
    }

    getDataWithForm(){
        return {
            name : this.name,
            phone: this.phone,
            id : this.id
        }
    }
    
    static getAll(){
        return new Promise((res, rej)=>{
            fs.readFile(
                path.join('__dirname', '..', 'data', 'zamer.json' ),
                'utf-8',
                (err, content) => {
                    if(err){
                        rej(err)
                    } else {
                        res(JSON.parse(content))
                    }
                }
            )
        })
    }

    async save(){
        const result = await Zamer.getAll()
        result.push(this.getDataWithForm())
        fs.writeFile(
            path.join('__dirname', '..', 'data', 'zamer.json'),
            JSON.stringify(result),
            err => console.error(err)
            
        )    
    }

    
}

module.exports = Zamer