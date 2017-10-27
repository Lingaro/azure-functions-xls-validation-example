"use strict";

var S = require('string');
var forEach = require("for-each");

module.exports = validateCsv;

function validateCsv(csv, separator) {
    var errors = [];
    forEach(S(csv).lines(), function (row, index, array) {
        if(S(row).isEmpty()) {
            return;
        }
        var cells = row.split(separator);
        if(cells.length < 3 || S(cells[2]).isEmpty()) {
            errors.push("Line " + (index + 1) + ": value in column C cannot be empty.");
        }
    });
    return errors;
}
