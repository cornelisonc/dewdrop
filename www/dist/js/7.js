webpackJsonp([7],{140:function(e,t,a){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=a(1),c=a.n(n),o=function DeleteButton(){_classCallCheck(this,DeleteButton),c()(".btn-delete").on("click",function(e){var t=c()(this),a=t.data("message");e.preventDefault(),a||(a="Are you sure you want to delete this item?"),confirm(a)&&c.a.ajax(t.data("href"),{type:"POST",success:function(e){window.location.href=t.data("redirect")}})})};t.default=o}});
//# sourceMappingURL=7.js.map