(function(e){var n={};function t(s){if(n[s])return n[s].exports;var o=n[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,s){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:s})},t.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(n&1&&(e=t(e)),n&8)return e;if(n&4&&typeof e=="object"&&e&&e.__esModule)return e;var o,s=Object.create(null);if(t.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),n&2&&typeof e!="string")for(o in e)t.d(s,o,function(t){return e[t]}.bind(null,o));return s},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s="./assets/js/index.js")})({"./assets/js/helpers/bootstrap-helper.js":function(){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jq_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jq-helpers */ "./assets/js/helpers/jq-helpers.js");
// Updated the script from https://stackoverflow.com/questions/43417452/animate-navbar-collapse-using-pure-js-css/43434017#43434017

var toggle = document.querySelectorAll('.navbar-toggler');
var collapse = document.querySelectorAll('.navbar-collapse');
var dropdowns = document.querySelectorAll('.dropdown') || [];

function toggleMenu(node) {
  var menu = document.querySelector(node.dataset.target);
  menu.classList.toggle('in');
}

function closeMenus() {
  Array.from(dropdowns || []).forEach(function (node) {
    node.querySelector('.dropdown-toggle').classList.remove('dropdown-open');
    node.classList.remove('open');
  });
}

function closeMenusOnResize() {
  if (document.body.clientWidth >= 768) {
    closeMenus();
    Array.from(collapse || []).forEach(function (node) {
      return node.classList.remove('in');
    });
  }
}

function toggleDropdown() {
  if (document.body.clientWidth < 768) {
    var open = this.classList.contains('open');
    closeMenus();

    if (!open) {
      this.querySelector('.dropdown-toggle').classList.toggle('dropdown-open');
      this.classList.toggle('open');
    }
  }
}

window.addEventListener('resize', closeMenusOnResize, false);
Array.from(dropdowns || []).forEach(function (node) {
  return node.addEventListener('click', toggleDropdown);
});
Array.from(toggle || []).forEach(function (node) {
  return node.addEventListener('click', function (e) {
    return toggleMenu(node);
  }, false);
});

//# sourceURL=webpack:///./assets/js/helpers/bootstrap-helper.js?`)},"./assets/js/helpers/jq-helpers.js":function(){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
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

//# sourceURL=webpack:///./assets/js/helpers/serialize.js?`)},"./assets/js/index.js":function(){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_bootstrap_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/bootstrap-helper */ "./assets/js/helpers/bootstrap-helper.js");
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroll */ "./assets/js/scroll.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ "./assets/js/modal.js");
/* harmony import */ var _helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/jq-helpers */ "./assets/js/helpers/jq-helpers.js");




Object(_helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_3__["default"])(document).on('click', '.btn-group-toggle .btn', function (e) {
  Object(_helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_3__["default"])(e.target.closest('.btn-group-toggle')).\$('label.btn.active').removeClass('active');
  Object(_helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_3__["default"])(e.target).addClass('active');
}).on('click', '.dropdown-toggle', function (e) {
  var parent = e.target.parentElement;
  var dropdowns = Object(_helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_3__["default"])(parent).\$('.dropdown-menu');

  if (parent.classList.contains('show')) {
    parent.classList.remove('show');
    dropdowns.removeClass('show');
  } else {
    parent.classList.add('show');
    dropdowns.addClass('show');
  }
}).on('click', '.dropdown-item', function (e) {
  var dropdown = e.target.parentElement;
  var button = Object(_helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_3__["default"])(dropdown.parentElement).\$('.dropdown-toggle');

  if (!button.\$nodes[0].classList.contains('nav-link')) {
    button.text(e.target.innerText);
    button.attr('data-value', e.target.dataset.value);
  }

  Object(_helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_3__["default"])(dropdown).removeClass('show');
  Object(_helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_3__["default"])(dropdown.parentElement).removeClass('show');
}).on('click', 'a[href*="event="], a[href*="e="]', function (e) {
  if (window.syna.stream._publishHashChange(e.target.href)) {
    e.preventDefault();
    return false;
  }
});

//# sourceURL=webpack:///./assets/js/index.js?`)},"./assets/js/modal.js":function(){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/jq-helpers */ "./assets/js/helpers/jq-helpers.js");
/* harmony import */ var _templates_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates/modal */ "./assets/js/templates/modal.js");


Object(_helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])('body').append(_templates_modal__WEBPACK_IMPORTED_MODULE_1__["default"]);

var setImage = function setImage(image, element) {
  if (image) {
    element.removeClass('hidden');
    element[0].src = image;
  } else {
    element.addClass('hidden');
  }
};

setTimeout(function () {
  var modal = Object(_helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])('.modal');
  var dialog = Object(_helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])('.modal .modal-dialog');

  function closeDialog() {
    Object(_helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])('body').removeClass('modal-open');
    modal.removeClass('show');
  }

  Object(_helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-dismiss="modal"]').on('click', closeDialog);
  modal.on('click', function (e) {
    if (!dialog[0].contains(e.target)) {
      closeDialog();
    }
  });

  (window.syna || (window.syna = {})).showModal = function (_ref) {
    var title = _ref.title,
        subtitle = _ref.subtitle,
        background = _ref.background,
        image = _ref.image,
        icon = _ref.icon,
        content = _ref.content,
        labels = _ref.labels,
        _ref\$size = _ref.size,
        size = _ref\$size === void 0 ? '' : _ref\$size;
    Object(_helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])('body').addClass('modal-open');
    modal.addClass('show');
    dialog.\$('.title').html(title || '');
    dialog.\$('.subtitle').html(subtitle || '');
    setImage(image, dialog.\$('.modal-asset-image'));
    setImage(background, dialog.\$('.modal-background-image'));

    if (!background) {
      dialog.\$('.modal-asset-image').addClass('hidden');
      setImage(image, dialog.\$('.modal-background-image'));
    }

    if (labels) {
      dialog.\$('.badge-container').removeClass('hidden');
      dialog.\$('.badge-container').html(labels || '');
    } else {
      dialog.\$('.badge-container').addClass('hidden');
    }

    if (icon) {
      dialog.\$('.icon-container').removeClass('hidden');
      dialog.\$('.icon-container').html(icon.replace(/fa-inverse/g, ''));
    } else {
      dialog.\$('.icon-container').addClass('hidden');
    }

    if (content) {
      dialog.\$('.modal-body .content').html(content);
      dialog.\$('.modal-body .content').removeClass('hidden');
    } else {
      dialog.\$('.modal-body .content').addClass('hidden');
    }

    dialog.removeClass('md').removeClass('lg').addClass(size);
  };
}, 0);

//# sourceURL=webpack:///./assets/js/modal.js?`)},"./assets/js/scroll.js":function(){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/jq-helpers */ "./assets/js/helpers/jq-helpers.js");


(function () {
  handleScroll();
  window.onscroll = handleScroll;
  Object(_helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])('.scroll-to-top').on('click', scrollToTop);
})();

function handleScroll() {
  if (window.scrollY > window.innerHeight / 2) {
    Object(_helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])('.scroll-to-top').removeClass('d-none');
  } else {
    Object(_helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])('.scroll-to-top').addClass('d-none');
  }

  var headers = Object(_helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])('.content-fragment h1, .content-fragment h2, .content-fragment h3, .content-fragment h4, .content-fragment h5, .content-fragment h6, .fragment');

  for (var i = headers.length - 1; i >= 0; i--) {
    var bounds = headers[i].getBoundingClientRect();

    if (bounds.top < 64) {
      Object(_helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])('.scroll-spy a:not(.default-active)').removeClass('active');
      Object(_helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])('.toc #TableOfContents li a').removeClass('active');

      if (headers[i].id) {
        Object(_helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])(".toc #TableOfContents li a[href=\\"".concat(window.location.pathname, "#").concat(headers[i].id, "\\"]")).addClass('active');
        Object(_helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])(".scroll-spy a[href=\\"".concat(window.location.pathname, "#").concat(headers[i].id, "\\"]")).addClass('active');
      }

      break;
    }
  }
}

function scrollToTop() {
  _helpers_jq_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].scrollTo(document.scrollingElement, 0, 250);
}

//# sourceURL=webpack:///./assets/js/scroll.js?`)},"./assets/js/templates/modal.js":function(){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
var ModalTemplate = "\\n<div class=\\"modal fade\\" tabindex=\\"-1\\" role=\\"dialog\\" aria-hidden=\\"true\\">\\n  <div class=\\"modal-dialog\\" role=\\"document\\">\\n    <div class=\\"modal-content\\">\\n      <div class=\\"modal-header row mx-0\\">\\n        <div class=\\"modal-title col px-0\\">\\n          <h5 class=\\"title text-dark\\"></h5>\\n          <h6 class=\\"subtitle text-secondary\\"></h6>\\n        </div>\\n        <button type=\\"button\\" class=\\"close\\" data-dismiss=\\"modal\\" aria-label=\\"Close\\">\\n          <span aria-hidden=\\"true\\">&times;</span>\\n        </button>\\n      </div>\\n      <div class=\\"modal-background\\">\\n        <img src=\\"\\" alt=\\"\\" class=\\"img-fluid modal-background-image\\">\\n        <img src=\\"\\" alt=\\"\\" class=\\"img-fluid modal-asset-image\\">\\n        <div class=\\"modal-asset-icon icon-container pt-4\\"></div>\\n      </div>\\n      <div class=\\"modal-body p-3\\">\\n        <div class=\\"badge-container\\"></div>\\n        <div class=\\"content\\"></div>\\n      </div>\\n    </div>\\n  </div>\\n</div>\\n";
/* harmony default export */ __webpack_exports__["default"] = (ModalTemplate);

//# sourceURL=webpack:///./assets/js/templates/modal.js?`)}})