/**
 * Created by Seven on 2019/6/21.
 * project: Autumn
 * email: fighting20xx@126.com
 */
// https://github.com/mgcrea/node-xlsx


import xlsx from 'node-xlsx';
var fs = require('fs');

// Parse a buffer
const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(`${__dirname}/myFile.xlsx`));
// Parse a file
const workSheetsFromFile = xlsx.parse(`${__dirname}/myFile.xlsx`);