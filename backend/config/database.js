const mongoose = require('moongose')

require('dotenv').config();

const URI: 'mongodb+srv://ykperez276:<password>@cluster0.pmmmuez.mongodb.net/'

mongoose.connect(URI);

module.exports = mongoose;  