const Error = require("./errorModel");
const Event = require("./eventModel");

class MongoLogger {

    async storeError(err) {

        try{

            let error = new Error({

                date: new Date(),

                text: err.message,

                code: err.status,

                route: err.route,

            });

            await error.save();

        }catch(err) {

            console.log(err);

        }

    }

    async storeEvent(req) {

        try{

            let event = new Event({

                date: new Date(),

                method: req.method,

                body: req.body || null,

            });

            await event.save();

        }catch(err) {

            console.log(err);

        }
    }

}

module.exports = new MongoLogger();