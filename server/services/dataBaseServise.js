// TODO: Track SQL errors
const sqlite3 = require('sqlite3');
const bcrypt = require('bcrypt');
const { open } = require('sqlite') // for realize ASYNC
class dataBaseService {

    constructor() {
        open({
            filename: ':memory:',
            driver: sqlite3.Database
        }).then((_db) => {
            this.db = _db
            this.db.run('CREATE TABLE Users (id int AUTO_INCREMENT, name varchar(32), email varchar(64), password varchar(255));')
        }
        )
    }

    // TODO: Created for test async. Will be remove
    #sleep = (ms) => {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }

    // TODO: Check already register
    async registerUser({ email, name, password }) {

        let returnObj = {
            data: null,
            error: null
        }

        if (!this.db) {
            returnObj.error = 'Database not open'
            return returnObj
        }

        const { error } = await this.existUser({ email: email})
        
        if (!error) {
            returnObj.error = 'User already exist '+email
            return returnObj
        }

        const hash = bcrypt.hashSync(password, 6);

        try {
            //TODO: Remove sleep after testing ASYNC 
            await this.#sleep(2000)
            const res = await this.db.run(`INSERT INTO Users (name, email, password) VALUES ('${name}', '${email}', '${hash}');`);
            return returnObj
        } catch (error) {
            returnObj.error = error
            return returnObj
        }

    }

    async loginUser({ email, password }) {

        let returnObj = {
            data: null,
            error: null
        }

        if (!this.db) {
            returnObj.error = 'Database not open'
            return returnObj
        }

        const hash = bcrypt.hashSync(password, 6);

        try {

            //TODO: Remove sleep after testing ASYNC 
            await this.#sleep(2000)

            const res = await this.db.all(`SELECT name, password FROM Users WHERE email='${email}';`)

            if (!res || !res.length) {
                returnObj.error = 'User not found '+email
            } else if (!bcrypt.compareSync(password, res[0].password)) {
                returnObj.error = 'Wrong password '+email
            } else {
                returnObj.data = res[0]
            }

        } catch (error) {
            returnObj.error = error
        }

        return returnObj
    }

    async existUser({ email }) {

        let returnObj = {
            data: null,
            error: null
        }

        if (!this.db) {
            returnObj.error = 'Database not open'
            return returnObj
        }

        try {

            //TODO: Remove sleep after testing ASYNC 
            await this.#sleep(2000)

            const res = await this.db.all(`SELECT id,email FROM Users WHERE email='${email}';`)

            if (!res || !res.length) {
                returnObj.error = 'User not found '+email
            } else {
                returnObj.data = res[0]
            }

        } catch (error) {
            returnObj.error = error
        }

        return returnObj
    }    
}

module.exports = dataBaseService