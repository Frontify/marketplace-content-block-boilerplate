
            window.require = (moduleName) => {
                switch (moduleName) {
                    case "react":
                        return window["React"];
                    case "react-dom":
                        return window["ReactDOM"];
                    default:
                        throw new Error("Could not resolve module from Frontify, please install it locally: npm i", moduleName);
                }
            };
        
var DevCustomBlock = (function (exports) {
  'use strict';

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = ".style-module_underline__V7xuc {\n    text-decoration: underline;\n}\n";
  var style = {"underline":"style-module_underline__V7xuc"};
  styleInject(css_248z);

  function AnExampleBlock() {
    const customStyle = {
      color: "rgb(130, 95, 255)"
    };
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", {
      className: style.underline,
      style: customStyle
    }, "A custom block in violet and underlined"));
  }

  const settings = {
    main: [
      {
        id: "main-dropdown",
        type: "dropdown",
        defaultValue: "custom_block",
        size: "Large",
        disabled: true,
        choices: [
          {
            value: "custom_block",
            icon: "Snippet",
            label: "Custom Block"
          }
        ]
      }
    ]
  };

  exports.index = AnExampleBlock;
  exports.settings = settings;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});
