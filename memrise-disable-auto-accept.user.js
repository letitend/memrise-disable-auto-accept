// ==UserScript==
// @description Memrise Disable Auto Accept.
// @downloadURL https://github.com/letitend/memrise-disable-auto-accept/raw/master/memrise-disable-auto-accept.user.js
// @grant       none
// @match       https://www.memrise.com/course/*/garden/*
// @match       https://www.memrise.com/garden/review/*
// @name        Memrise Disable Auto Accept
// @namespace   https://github.com/letitend
// @updateURL   https://github.com/letitend/memrise-disable-auto-accept/raw/master/memrise-disable-auto-accept.user.js
// @version     0.0.1
// ==/UserScript==

function wrap(obj, function_name, wrapper) {
    const orig = obj[function_name];
    obj[function_name] = function() {
        return wrapper.call(this, orig, arguments);
    };
}

wrap(MEMRISE.garden.box_mapping.typing.prototype,
    "bind",
    function(orig, args) {
        orig.apply(this, args);
        this.$input.onResponseChangedHandler = null;
    }
);
