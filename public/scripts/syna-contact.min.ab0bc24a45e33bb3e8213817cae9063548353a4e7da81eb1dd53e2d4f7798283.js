(function(e){var n={};function t(s){if(n[s])return n[s].exports;var o=n[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,s){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:s})},t.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(n&1&&(e=t(e)),n&8)return e;if(n&4&&typeof e=="object"&&e&&e.__esModule)return e;var o,s=Object.create(null);if(t.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),n&2&&typeof e!="string")for(o in e)t.d(s,o,function(t){return e[t]}.bind(null,o));return s},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s="./assets/js/contact.js")})({"./assets/js/contact.js":function(){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/jq-helpers */ "./assets/js/helpers/jq-helpers.js");
/* harmony import */ var form_validator_simple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! form-validator-simple */ "./node_modules/form-validator-simple/dist/bundle.js");
/* harmony import */ var form_validator_simple__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(form_validator_simple__WEBPACK_IMPORTED_MODULE_1__);



(function () {
  if (Object(_helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])('.g-recaptcha')) {
    checkReCaptcha();
  }
})();

var validatorConfig = {
  errorTemplate: '<span class="help-block form-error">%s</span>',
  onFormValidate: function onFormValidate(isFormValid, form) {
    form.querySelector('button.submit-btn').disabled = !isFormValid;
  },
  onError: function onError(e, form) {
    Object(_helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])("form[id=".concat(form.getAttribute('id'), "] .generic-error")).removeClass('d-none');
  },
  onSuccess: function onSuccess(e, form) {
    if (form.dataset.hasNetlify || form.dataset.hasFormspree) {
      return;
    }

    e.preventDefault();
    var id = form.getAttribute('id');
    var \$form = Object(_helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])("form[id=".concat(id, "]"));
    var action = \$form.attr('action');
    var genericSuccess = \$form.\$('.generic-success');
    var genericError = \$form.\$('.generic-error');
    genericSuccess.addClass('hidden');
    genericError.addClass('d-none');
    \$form.removeClass('error').removeClass('success');
    var serializedForm = Object(_helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])("#".concat(id)).serialize();

    if (typeof grecaptcha !== 'undefined' && grecaptcha.getResponse() === '') {
      grecaptcha.execute();
      return false;
    }

    \$form.\$('button.submit-btn').attr('disabled', true).addClass('disabled');
    _helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].post(action, serializedForm, {
      contentType: 'application/x-www-form-urlencoded'
    }).then(function () {
      genericSuccess.removeClass('hidden');
      \$form.addClass('success');
      \$form.\$('button.submit-btn').removeAttr('disabled').removeClass('disabled');
    })["catch"](function () {
      genericError.removeClass('d-none');
      \$form.addClass('error');
      \$form.\$('button.submit-btn').removeAttr('disabled').removeClass('disabled');
    });
    return false;
  }
};
document.querySelectorAll('form.contact').forEach(function (form) {
  new form_validator_simple__WEBPACK_IMPORTED_MODULE_1___default.a(Object.assign(validatorConfig, {
    form: form
  }));
  Object(_helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])(form).\$('#generic-success [data-action="return-form"]').on('click', function () {
    Object(_helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])(form).\$('#generic-success').addClass('hidden');
    Object(_helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])(form).removeClass('success');
  });
});

function checkReCaptcha() {
  if (document.querySelector('.g-recaptcha-container') && typeof grecaptcha === 'undefined') {
    Object(_helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])('.captcha-error').removeClass('d-none');
    setTimeout(checkReCaptcha, 200);
  } else if (document.querySelector('.g-recaptcha-container div div')) {
    Object(_helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])('.captcha-error').addClass('d-none');
    Object(_helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])('.g-recaptcha-filler').addClass('d-none');
    Object(_helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])('.g-recaptcha').attr('disabled', true);
  }
}

window.onContactCaptcha = function (\$form) {
  var customEvent = document.createEvent('Event');
  customEvent.initEvent('submit', true, true);
  document.querySelector('form.contact').dispatchEvent(customEvent);
};

window.syna.stream.subscribe('contact:update', function (_ref) {
  var name = _ref.name,
      email = _ref.email,
      phone = _ref.phone,
      message = _ref.message;
  var form = Object(_helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])('form.contact');
  form.\$('input[name=name]').attr('value', name || null)[0].focus(); // TODO: REVISIT: Remove the following line whenever firefox fixes center on focus

  form[0].scrollIntoView({
    behavior: 'instant',
    block: 'center'
  });
  form.\$('input[name=email]').attr('value', email || null);
  form.\$('input[name=phone]').attr('value', phone || null);
  form.\$('textarea[name=message]').\$nodes.forEach(function (node) {
    node.innerHTML = '';
    node.appendChild(document.createTextNode(message || ''));
  });
});

//# sourceURL=webpack:///./assets/js/contact.js?`)},"./assets/js/helpers/jq-helpers.js":function(){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _serialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./serialize */ "./assets/js/helpers/serialize.js");


function \$(selector) {
  var nodes = typeof selector === 'string' ? Array.from((this && Array.isArray(this) ? this[0] : document).querySelectorAll(selector)) : [selector];
  var _returnee = {
    \$nodes: nodes,
    \$: \$.bind(nodes),
    on: function on(event, selector, callback) {
      if (typeof callback === 'undefined') {
        callback = selector;
        selector = null;
      }

      if (selector) {
        nodes.forEach(function (node) {
          node.addEventListener(event, function (e) {
            if (e.target.matches(selector)) {
              callback.call(node, e);
            }
          });
        });
      } else {
        nodes.forEach(function (node) {
          return node["on".concat(event)] = callback.bind(node);
        });
      }

      return _returnee;
    },
    addClass: function addClass(className) {
      nodes.forEach(function (node) {
        return node.classList.add(className);
      });
      return _returnee;
    },
    removeClass: function removeClass(className) {
      nodes.forEach(function (node) {
        return node.classList.remove(className);
      });
      return _returnee;
    },
    attr: function attr(attribute, value) {
      if (value === undefined && nodes.length > 1) {
        throw new Error("Can't access value of several nodes' attributes");
      }

      if (value === undefined) {
        return nodes[0].getAttribute(attribute);
      } else if (value !== null) {
        nodes.forEach(function (node) {
          return node.setAttribute(attribute, value);
        });
      }

      return _returnee;
    },
    removeAttr: function removeAttr(attribute) {
      nodes.forEach(function (node) {
        return node.removeAttribute(attribute);
      });
      return _returnee;
    },
    append: function append(innerHTML) {
      nodes.forEach(function (node) {
        return node.insertAdjacentHTML('beforeend', innerHTML);
      });
      return _returnee;
    },
    html: function html(innerHTML) {
      if (innerHTML === undefined) {
        if (nodes.length > 1) {
          throw new Error("Can't get several nodes innerHTML at once");
        }

        return nodes[0].innerHTML;
      }

      nodes.forEach(function (node) {
        return node.innerHTML = innerHTML;
      });
      return _returnee;
    },
    text: function text(innerText) {
      if (innerText === undefined) {
        if (nodes.length > 1) {
          throw new Error("Can't get several nodes innerText at once");
        }

        return nodes[0].innerText;
      }

      if (innerText !== null) {
        nodes.forEach(function (node) {
          return node.innerText = innerText;
        });
      }

      return _returnee;
    },
    val: function val(value) {
      if (value === undefined) {
        if (nodes.length > 1) {
          throw new Error("Can't get several nodes value at once");
        }

        return nodes[0].value;
      }

      nodes.forEach(function (node) {
        return node.value = value;
      });
      return _returnee;
    },
    submit: function submit() {
      return nodes.forEach(function (node) {
        return node.submit();
      });
    },
    serialize: function serialize() {
      var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (nodes.length > 1) {
        throw new Error("Can't serialize multiple forms at once");
      }

      if (json) {
        return Object(_serialize__WEBPACK_IMPORTED_MODULE_0__["serializeJSON"])(nodes[0]);
      }

      return Object(_serialize__WEBPACK_IMPORTED_MODULE_0__["default"])(nodes[0]);
    },
    length: nodes.length
  };
  nodes.forEach(function (node, index) {
    return _returnee[index] = node;
  });
  return _returnee;
}

\$.scrollTo = function scrollTo(element, to, duration) {
  if (duration <= 0) return;
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;
  setTimeout(function () {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop === to) return;
    scrollTo(element, to, duration - 10);
  }, 10);
};

\$.ajax = function ajax(_ref) {
  var method = _ref.method,
      url = _ref.url,
      data = _ref.data,
      _ref\$options = _ref.options,
      options = _ref\$options === void 0 ? {
    contentType: 'application/json;charset=UTF-8'
  } : _ref\$options;
  var xhr = new XMLHttpRequest();
  xhr.open(method.toUpperCase(), url);
  xhr.setRequestHeader('Content-Type', options.contentType);
  xhr.send(data);
  return new Promise(function (resolve, reject) {
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          resolve(JSON.parse(xhr.responseXML || xhr.responseText));
        } else {
          reject(xhr.statusText);
        }
      }
    };
  });
};

\$.post = function (url, data, options) {
  return \$.ajax({
    method: 'post',
    url: url,
    data: data,
    options: options
  });
};

if (window && window.testingMode) {
  window.jqHelpers = \$;
}

/* harmony default export */ __webpack_exports__["default"] = (\$);

//# sourceURL=webpack:///./assets/js/helpers/jq-helpers.js?`)},"./assets/js/helpers/serialize.js":function(){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return serialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeJSON", function() { return serializeJSON; });
// From https://code.google.com/archive/p/form-serialize/
function serialize(form) {
  if (!form || form.nodeName !== 'FORM') {
    return;
  }

  var i,
      j,
      q = [];

  for (i = form.elements.length - 1; i >= 0; i = i - 1) {
    if (form.elements[i].name === '') {
      continue;
    }

    switch (form.elements[i].nodeName) {
      case 'INPUT':
        switch (form.elements[i].type) {
          case 'text':
          case 'hidden':
          case 'password':
          case 'button':
          case 'reset':
          case 'submit':
            q.push(form.elements[i].name + '=' + encodeURIComponent(form.elements[i].value));
            break;

          case 'checkbox':
          case 'radio':
            if (form.elements[i].checked) {
              q.push(form.elements[i].name + '=' + encodeURIComponent(form.elements[i].value));
            }

            break;

          case 'file':
            break;
        }

        break;

      case 'TEXTAREA':
        q.push(form.elements[i].name + '=' + encodeURIComponent(form.elements[i].value));
        break;

      case 'SELECT':
        switch (form.elements[i].type) {
          case 'select-one':
            q.push(form.elements[i].name + '=' + encodeURIComponent(form.elements[i].value));
            break;

          case 'select-multiple':
            for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {
              if (form.elements[i].options[j].selected) {
                q.push(form.elements[i].name + '=' + encodeURIComponent(form.elements[i].options[j].value));
              }
            }

            break;
        }

        break;

      case 'BUTTON':
        switch (form.elements[i].type) {
          case 'reset':
          case 'submit':
          case 'button':
            q.push(form.elements[i].name + '=' + encodeURIComponent(form.elements[i].value));
            break;
        }

        break;
    }
  }

  return q.join('&');
}
function serializeJSON(form) {
  var obj = {};
  var elements = form.querySelectorAll('input, select, textarea');

  for (var i = 0; i < elements.length; ++i) {
    var element = elements[i];
    var name = element.name;
    var value = element.value;

    if (name) {
      if (element.type === 'radio' || element.type === 'checkbox') {
        if (element.checked) {
          obj[name] = value;
        }
      } else if (element.type !== 'file') {
        obj[name] = value;
      }
    }
  }

  return JSON.stringify(obj);
}

//# sourceURL=webpack:///./assets/js/helpers/serialize.js?`)},"./node_modules/form-validator-simple/dist/bundle.js":function(){eval(`(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, (function () { 'use strict';

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var options = {
    errors: {
      email: 'Invalid email',
      default: 'Invalid value'
    },
    regexes: {
      email: /^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,4})\$/
    }
  };

  var Validator = function () {
    function Validator() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref\$regexes = _ref.regexes,
          regexes = _ref\$regexes === undefined ? {} : _ref\$regexes,
          _ref\$errors = _ref.errors,
          errors = _ref\$errors === undefined ? {} : _ref\$errors,
          onFormValidate = _ref.onFormValidate,
          onError = _ref.onError,
          onSuccess = _ref.onSuccess,
          _ref\$errorTemplate = _ref.errorTemplate,
          errorTemplate = _ref\$errorTemplate === undefined ? '' : _ref\$errorTemplate,
          form = _ref.form;

      _classCallCheck(this, Validator);

      this.regexes = _extends({}, options.regexes, regexes);
      this.errors = _extends({}, options.errors, errors);
      this.onError = onError;
      this.onSuccess = onSuccess;
      this.errorTemplate = errorTemplate;

      this._fieldTimers = {};

      if (onFormValidate) {
        this._onFormValidate = this._onFormValidate(onFormValidate);
      } else {
        this._onFormValidate = function () {};
      }

      if (form) {
        this.init(form);
      }

      this._validate = this._validate.bind(this);
      this.init = this.init.bind(this);
    }

    Validator.prototype.init = function init(form) {
      var _this = this;

      var fields = {};

      try {
        fields = form.querySelectorAll('[data-validation]');
      } catch (err) {
        throw new Error('Finding inputs in the form failed. Are you sure "form" is an HTML element?');
      }

      if (fields.length > 0) {
        form.onsubmit = this._handleSubmit(form);
      }

      fields.forEach(function (field) {
        field.setAttribute('data-validation-valid', _this._validateInput(field));

        var id = Math.random();
        field.addEventListener('input', _this._validate(field));
        field.addEventListener('focus', function () {
          _this._fieldTimers[id] = setInterval(_this._validate(field), 200);
        });
        field.addEventListener('blur', function () {
          clearInterval(_this._fieldTimers[id]);
          _this._fieldTimers[id] = null;
        });
      });

      var isFormValid = this._isFormValid(form);
      this._onFormValidate(isFormValid, form);
      form.setAttribute('data-validation-valid', isFormValid);
    };

    Validator.prototype._handleSubmit = function _handleSubmit(form) {
      var _this2 = this;

      return function (e) {
        if (form.getAttribute('data-validation-valid') === 'false') {
          e.preventDefault();
          e.stopPropagation();

          if (_this2.onError) {
            _this2.onError(e, form);
          }

          return false;
        } else if (_this2.onSuccess) {
          _this2.onSuccess(e, form);
        }
      };
    };

    Validator.prototype._isFormValid = function _isFormValid(form) {
      return !Array.from(form.querySelectorAll('[data-validation]')).some(function (field) {
        return field.getAttribute('data-validation-valid') === 'false';
      });
    };

    Validator.prototype._onFormValidate = function _onFormValidate(callback) {
      return function (validity, form) {
        callback(validity, form);
      };
    };

    Validator.prototype._validate = function _validate(field) {
      var _this3 = this;

      return function () {
        var form = field.closest('form');
        var errorContainer = field.closest('div').querySelector('[data-error]');
        var isFieldValid = _this3._validateInput(field);
        var isFormValid = isFieldValid ? _this3._isFormValid(form) : false;
        field.setAttribute('data-validation-valid', isFieldValid);

        if (isFieldValid) {
          form.setAttribute('data-validation-valid', isFormValid);
          field.classList.remove('error');
          field.classList.add('valid');
          _this3._hideError(field, errorContainer);
        } else {
          form.setAttribute('data-validation-valid', false);
          field.classList.add('error');
          field.classList.remove('valid');
          _this3._displayError(field, errorContainer);
        }

        _this3._onFormValidate(isFormValid, form);
      };
    };

    Validator.prototype._displayError = function _displayError(field, errorContainer) {
      if (errorContainer) {
        var errorMsg = field.getAttribute('data-validation-error-msg');
        errorContainer.innerHTML = this._formatError(errorMsg || this.errors[field.getAttribute('data-validation')] || this.errors.default);
        errorContainer.classList.add('has-error');
      }
    };

    Validator.prototype._hideError = function _hideError(field, errorContainer) {
      if (errorContainer) {
        errorContainer.innerHTML = '';
        errorContainer.classList.remove('has-error');
      }
    };

    Validator.prototype._validateInput = function _validateInput(field) {
      var value = field.value;
      var validation = field.getAttribute('data-validation');
      var regex = field.getAttribute('data-validation-regex');
      var required = field.required;

      switch (validation) {
        case '':
          return required ? !!value : true;

        case 'regex':
          return new RegExp(regex).test(value);

        default:
          return new RegExp(this.regexes[validation]).test(value);
      }
    };

    Validator.prototype._formatError = function _formatError(string) {
      return this.errorTemplate.replace('%s', string);
    };

    return Validator;
  }();

  return Validator;

})));
//# sourceMappingURL=bundle.js.map


//# sourceURL=webpack:///./node_modules/form-validator-simple/dist/bundle.js?`)}})