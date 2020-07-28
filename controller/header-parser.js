const headerParserRouter = require('express').Router();

headerParserRouter.get('/', (req, res, next) => {
    let myHeader = req.headers;
	/*console.log(myHeader);*/
    req.head = {
        ipaddress: myHeader.host,
        language: myHeader['accept-language'],
        software: myHeader['user-agent']
    };
    next();
}, (req, res) => {
    res.json(req.head);
});

module.exports = headerParserRouter;
