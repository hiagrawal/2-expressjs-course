const path = require('path');

//module.exports = path.dirname(process.mainModule.filename); //this is in older version
module.exports = path.dirname(require.main.filename); //this in updated version

//although currently both are working