var fs = require("fs");


fs.appendFile("log.txt", process.argv[2], function (err) {

    if (err) {
        return console.log(err);
    }
    else {
        console.log("success!");
    }

});