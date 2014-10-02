// JavaScript source code
var SILLY = (function (module) {

    module.Go = function (resultObject) {
        resultObject.prepend(Date() + '<br/>');
    };

    return module;
}(SILLY || {}));