(function(e){var n={};function t(s){if(n[s])return n[s].exports;var o=n[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,s){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:s})},t.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(n&1&&(e=t(e)),n&8)return e;if(n&4&&typeof e=="object"&&e&&e.__esModule)return e;var o,s=Object.create(null);if(t.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),n&2&&typeof e!="string")for(o in e)t.d(s,o,function(t){return e[t]}.bind(null,o));return s},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s="./assets/js/head.js")})({"./assets/js/head.js":function(){eval(`function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array\$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Stream = /*#__PURE__*/function () {
  function Stream() {
    _classCallCheck(this, Stream);

    this._topics = {};
    this.subUid = -1;
    this._activeUrlEvent = null;

    this._updateActiveEvent(window.location.href);

    window.onhashchange = function (_ref) {
      var newURL = _ref.newURL;

      this._publishHashChange(newURL);
    };

    this.subscribe = this.subscribe.bind(this);
    this.publish = this.publish.bind(this);
    this.unsubscribe = this.unsubscribe.bind(this);
    this._publishHashChange = this._publishHashChange.bind(this);
    this._translateUrlQuery = this._translateUrlQuery.bind(this);
    this._updateActiveEvent = this._updateActiveEvent.bind(this);
  }

  _createClass(Stream, [{
    key: "subscribe",
    value: function subscribe(topic, func) {
      if (!this._topics[topic]) {
        this._topics[topic] = [];
      }

      var token = (++this.subUid).toString();

      this._topics[topic].push({
        token: token,
        func: func
      });

      if (this._activeUrlEvent && this._activeUrlEvent.event === topic) {
        func.call(null, this._activeUrlEvent.args);
      }

      return token;
    }
  }, {
    key: "publish",
    value: function publish(topic, argsText) {
      var _this = this;

      if (!this._topics[topic]) {
        return false;
      }

      setTimeout(function () {
        var subscribers = _this._topics[topic];
        var args = _typeof(argsText) === 'object' ? argsText : argsText.split(',').reduce(function (tmp, param) {
          var _param\$split = param.split(':'),
              _param\$split2 = _slicedToArray(_param\$split, 2),
              key = _param\$split2[0],
              value = _param\$split2[1];

          tmp[key] = value;
          return tmp;
        }, {});
        var len = subscribers ? subscribers.length : 0;

        while (len--) {
          subscribers[len].func.call(null, args);
        }
      }, 0);
      return true;
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(token) {
      for (var topic in this._topics) {
        if (this._topics[topic]) {
          for (var i = 0, j = this._topics[topic].length; i < j; i++) {
            if (this._topics[topic][i].token === token) {
              this._topics[topic].splice(i, 1);

              return token;
            }
          }
        }
      }

      return false;
    }
  }, {
    key: "_publishHashChange",
    value: function _publishHashChange(url) {
      var _this\$_updateActiveEv = this._updateActiveEvent(url),
          event = _this\$_updateActiveEv.event,
          args = _this\$_updateActiveEv.args;

      if (!event) {
        return false;
      }

      return this.publish(event, args);
    }
  }, {
    key: "_updateActiveEvent",
    value: function _updateActiveEvent(url) {
      var params = this._translateUrlQuery(url);

      var event = null;

      if (!params.e && window.syna.enabledUnsafeEvents && params.event) {
        event = params.event;
      } else if (params.e) {
        params = this._translateUrlQuery(atob(params.e));
        event = params.event;
      } else {
        return {};
      }

      delete params.event;
      this._activeUrlEvent = {
        event: event,
        args: params
      };
      return this._activeUrlEvent;
    }
  }, {
    key: "_translateUrlQuery",
    value: function _translateUrlQuery(url) {
      var query = url.slice(url.indexOf('?') + 1) || '';
      return query.split('&').reduce(function (tmp, pair) {
        var _pair\$split = pair.split('='),
            _pair\$split2 = _slicedToArray(_pair\$split, 2),
            key = _pair\$split2[0],
            value = _pair\$split2[1];

        tmp[decodeURIComponent(key)] = decodeURIComponent(value);
        return tmp;
      }, {});
    }
  }]);

  return Stream;
}();

var SynaAPI = /*#__PURE__*/function () {
  function SynaAPI() {
    _classCallCheck(this, SynaAPI);

    this._registry = {};
    this.register = this.register.bind(this);
    this.update = this.update.bind(this);
    this.get = this.get.bind(this);
    this.getScope = this.getScope.bind(this);
    this.toArray = this.toArray.bind(this);
  }

  _createClass(SynaAPI, [{
    key: "register",
    value: function register(scope, id, value) {
      if (!this._registry[scope]) {
        this._registry[scope] = {};
      }

      this._registry[scope][id] = value;
    }
  }, {
    key: "update",
    value: function update(scope, id, value) {
      if (!this._registry[scope] || !this._registry[scope][id]) {
        return null;
      }

      this._registry[scope][id] = value;
      return value;
    }
  }, {
    key: "get",
    value: function get(scope, id) {
      if (!this._registry[scope]) {
        return null;
      }

      return this._registry[scope][id];
    }
  }, {
    key: "getScope",
    value: function getScope(scope) {
      return this._registry[scope];
    }
  }, {
    key: "toArray",
    value: function toArray(scope) {
      if (!this._registry[scope]) {
        return null;
      }

      return Object.values(this._registry[scope]);
    }
  }, {
    key: "renderTemplate",
    value: function renderTemplate(templateString, data) {
      var conditionalMatches, conditionalPattern, copy;
      conditionalPattern = /\\\$\\{\\s*isset ([a-zA-Z]*) \\s*\\}(.*)\\\$\\{\\s*end\\s*}/g; //since loop below depends on re.lastInxdex, we use a copy to capture any manipulations whilst inside the loop

      copy = templateString;

      while ((conditionalMatches = conditionalPattern.exec(templateString)) !== null) {
        if (data[conditionalMatches[1]]) {
          //valid key, remove conditionals, leave contents.
          copy = copy.replace(conditionalMatches[0], conditionalMatches[2]);
        } else {
          //not valid, remove entire section
          copy = copy.replace(conditionalMatches[0], '');
        }
      }

      templateString = copy; //now any conditionals removed we can do simple substitution

      var key, find, re;

      for (key in data) {
        find = '\\\\\$\\\\{\\\\s*' + key + '\\\\s*\\\\}';
        re = new RegExp(find, 'g');
        templateString = templateString.replace(re, data[key]);
      }

      return templateString;
    }
  }]);

  return SynaAPI;
}();

window.syna = window.syna || {};
window.syna.api = new SynaAPI();
window.syna.stream = new Stream();
window.synaPortals = {};

//# sourceURL=webpack:///./assets/js/head.js?`)}})