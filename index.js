"use strict";

var xlsToCsv = require('./xlsToCsv');
var validator = require('./validator');

module.exports = function (context, blobInput) {
    var csv = xlsToCsv(blobInput);
    var errors = validator(csv, ',');
    if(errors.length === 0) {
        context.bindings.validOutput = blobInput;
    } else {
        context.bindings.invalidOutput = blobInput;
        logError(context, errors);
    }
    context.done();
};

function logError(context, errors) {
    context.bindings.errorsOutput = errors.join('\n');
}