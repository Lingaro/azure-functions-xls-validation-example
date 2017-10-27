"use strict";

var xlsx = require('xlsx');

module.exports = xlsToCsv;

function xlsToCsv(blobData) {
    var workbook = xlsx.read(blobData, {type: 'array'});
    var sheet = workbook.Sheets[workbook.SheetNames[0]];
    return xlsx.utils.sheet_to_csv(sheet);
}
