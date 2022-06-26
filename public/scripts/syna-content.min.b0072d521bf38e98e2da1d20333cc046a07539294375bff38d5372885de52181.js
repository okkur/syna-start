(function(e){var n={};function t(s){if(n[s])return n[s].exports;var o=n[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,s){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:s})},t.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(n&1&&(e=t(e)),n&8)return e;if(n&4&&typeof e=="object"&&e&&e.__esModule)return e;var o,s=Object.create(null);if(t.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),n&2&&typeof e!="string")for(o in e)t.d(s,o,function(t){return e[t]}.bind(null,o));return s},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s="./assets/js/content.js")})({"./assets/js/content.js":function(){eval(`var sidebarContent = document.querySelector('.content-sidebar .sticky-top .content-sidebar-body');

if (sidebarContent) {
  var sidebarContentParent = sidebarContent.parentElement;
  var sidebarContentParentPadding = parseInt(getComputedStyle(sidebarContentParent).paddingTop, 10);
  var headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'), 10);
  document.addEventListener('scroll', function () {
    var sidebarTop = sidebarContentParent.getBoundingClientRect().top;
    var extraPadding = 0;

    if (sidebarTop <= headerHeight) {
      extraPadding = headerHeight;
    }

    sidebarContentParent.style.setProperty('padding-top', extraPadding + sidebarContentParentPadding + 'px', 'important');
  });
}

//# sourceURL=webpack:///./assets/js/content.js?`)}})