webpackHotUpdate(0,{

/***/ 330:
false,

/***/ 332:
/* no static exports found */
/* all exports used */
/*!******************************************!*\
  !*** ./frontend/components/PDFViewer.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ 24);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 4);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar PDFViewer = function (_Component) {\n    _inherits(PDFViewer, _Component);\n\n    function PDFViewer(props) {\n        _classCallCheck(this, PDFViewer);\n\n        var _this = _possibleConstructorReturn(this, (PDFViewer.__proto__ || Object.getPrototypeOf(PDFViewer)).call(this, props));\n\n        _this.state = {\n            page: 0\n        };\n        _this.goToPage = _this.goToPage.bind(_this);\n        return _this;\n    }\n\n    _createClass(PDFViewer, [{\n        key: 'goToPage',\n        value: function goToPage(page) {\n            this.setState({ page: page });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            var page = this.state.page;\n\n            var src = \"map.pdf#page=\" + page;\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    'h1',\n                    null,\n                    'pdf page ',\n                    page\n                ),\n                _react2.default.createElement(\n                    'a',\n                    { href: 'map.pdf' },\n                    'Download PDF'\n                ),\n                _react2.default.createElement(\n                    'button',\n                    { onClick: function onClick() {\n                            return _this2.goToPage(1);\n                        } },\n                    ' go to page 1'\n                ),\n                _react2.default.createElement(\n                    'button',\n                    { onClick: function onClick() {\n                            return _this2.goToPage(2);\n                        } },\n                    ' go to page 2'\n                ),\n                _react2.default.createElement(\n                    'button',\n                    { onClick: function onClick() {\n                            return _this2.goToPage(3);\n                        } },\n                    ' go to page 3'\n                ),\n                _react2.default.createElement(\n                    'button',\n                    { onClick: function onClick() {\n                            return _this2.goToPage(4);\n                        } },\n                    ' go to page 4'\n                ),\n                _react2.default.createElement('object', { data: src, type: 'application/pdf', width: '100%', height: '800px' })\n            );\n        }\n    }]);\n\n    return PDFViewer;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {};\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n    return {\n        changePage: function changePage(page) {\n            /**\n             * TODO (5)\n             *\n             * Uncomment this line and call your imported action creator here\n             */\n            dispatch(changeHandbookPage(page));\n        }\n    };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PDFViewer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzMyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvUERGVmlld2VyLmpzPzA1ODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBQREZWaWV3ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHBhZ2U6IDBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdvVG9QYWdlID0gdGhpcy5nb1RvUGFnZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuXG4gICAgZ29Ub1BhZ2UocGFnZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtwYWdlOiBwYWdlfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHBhZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IHNyYyA9IFwibWFwLnBkZiNwYWdlPVwiICsgcGFnZTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPnBkZiBwYWdlIHtwYWdlfTwvaDE+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1hcC5wZGZcIj5Eb3dubG9hZCBQREY8L2E+XG4gICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuZ29Ub1BhZ2UoMSl9PiBnbyB0byBwYWdlIDE8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuZ29Ub1BhZ2UoMil9PiBnbyB0byBwYWdlIDI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuZ29Ub1BhZ2UoMyl9PiBnbyB0byBwYWdlIDM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuZ29Ub1BhZ2UoNCl9PiBnbyB0byBwYWdlIDQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8b2JqZWN0IGRhdGE9e3NyY30gdHlwZT1cImFwcGxpY2F0aW9uL3BkZlwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjgwMHB4XCI+XG4gICAgICAgICAgICAgICAgPC9vYmplY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgKTt9XG5cbn1cblxuXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgICByZXR1cm4ge307XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjaGFuZ2VQYWdlOiBwYWdlID0+IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVE9ETyAoNSlcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBVbmNvbW1lbnQgdGhpcyBsaW5lIGFuZCBjYWxsIHlvdXIgaW1wb3J0ZWQgYWN0aW9uIGNyZWF0b3IgaGVyZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBkaXNwYXRjaChjaGFuZ2VIYW5kYm9va1BhZ2UocGFnZSkpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShQREZWaWV3ZXIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9jb21wb25lbnRzL1BERlZpZXdlci5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEE7QUFNQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFZQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///332\n");

/***/ })

})