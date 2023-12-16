const express = require('express');
const {externalApiController, externalApiControllerAllFile} = require('../controlers/controlerApiexterna');

const router = express.Router();

router.get('/data', externalApiController.getData);
router.get('/data/allfiles', externalApiControllerAllFile.getDataAllFile);

module.exports = router;