webpackHotUpdate(0,{

/***/ 332:
/* no static exports found */
/* all exports used */
/*!******************************************!*\
  !*** ./frontend/components/PDFViewer.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ 24);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 4);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _index = __webpack_require__(/*! ../actions/index */ 330);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar PDFViewer = function (_Component) {\n    _inherits(PDFViewer, _Component);\n\n    function PDFViewer(props) {\n        _classCallCheck(this, PDFViewer);\n\n        var _this = _possibleConstructorReturn(this, (PDFViewer.__proto__ || Object.getPrototypeOf(PDFViewer)).call(this, props));\n\n        _this.state = {\n            page: 0\n        };\n        _this.goToPage = _this.goToPage.bind(_this);\n        return _this;\n    }\n\n    // shouldComponentUpdate(newProps) {\n    //     return this.props.page != newProps.page\n    // }\n\n    _createClass(PDFViewer, [{\n        key: 'goToPage',\n        value: function goToPage(page) {\n            var changePage = this.props.changePage;\n\n            this.setState({ page: page });\n            //changePage(page);\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            var page = this.state.page;\n\n            var src = \"map.pdf#page=\" + page;\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    'h1',\n                    null,\n                    'pdf page ',\n                    page\n                ),\n                _react2.default.createElement(\n                    'div',\n                    null,\n                    src\n                ),\n                _react2.default.createElement(\n                    'a',\n                    { href: 'map.pdf' },\n                    'Download PDF'\n                ),\n                _react2.default.createElement(\n                    'button',\n                    { onClick: function onClick() {\n                            return _this2.goToPage(page + 1);\n                        } },\n                    ' go to page 2'\n                ),\n                _react2.default.createElement('object', { data: src, type: 'application/pdf', width: '100%', height: '800px' })\n            );\n        }\n    }]);\n\n    return PDFViewer;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {};\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n    return {\n        changePage: function changePage(page) {\n            /**\n             * TODO (5)\n             *\n             * Uncomment this line and call your imported action creator here\n             */\n            dispatch((0, _index.changeHandbookPage)(page));\n        }\n    };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PDFViewer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzMyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvUERGVmlld2VyLmpzPzA1ODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY2hhbmdlSGFuZGJvb2tQYWdlIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbmNsYXNzIFBERlZpZXdlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcGFnZTogMFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ29Ub1BhZ2UgPSB0aGlzLmdvVG9QYWdlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgLy8gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5ld1Byb3BzKSB7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLnByb3BzLnBhZ2UgIT0gbmV3UHJvcHMucGFnZVxuICAgIC8vIH1cblxuICAgIGdvVG9QYWdlKHBhZ2UpIHtcbiAgICAgICAgY29uc3QgeyBjaGFuZ2VQYWdlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtwYWdlOiBwYWdlfSk7XG4gICAgICAgIC8vY2hhbmdlUGFnZShwYWdlKTtcblxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBwYWdlIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCBzcmMgPSBcIm1hcC5wZGYjcGFnZT1cIiArIHBhZ2U7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5wZGYgcGFnZSB7cGFnZX08L2gxPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIHtzcmN9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1hcC5wZGZcIj5Eb3dubG9hZCBQREY8L2E+XG4gICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuZ29Ub1BhZ2UocGFnZSArIDEpfT4gZ28gdG8gcGFnZSAyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPG9iamVjdCBkYXRhPXtzcmN9IHR5cGU9XCJhcHBsaWNhdGlvbi9wZGZcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCI4MDBweFwiPlxuICAgICAgICAgICAgICAgICAgICB7Lyo8aWZyYW1lIHNyYz1cIm1hcC5wZGYjcGFnZT00XCIgc3R5bGU9XCJib3JkZXI6IG5vbmU7XCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qVGhpcyBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgUERGcy4gUGxlYXNlIGRvd25sb2FkIHRoZSBQREYgdG8gdmlldyBpdDogPGEgaHJlZj1cIm1hcC5wZGZcIj5Eb3dubG9hZCBQREY8L2E+Ki99XG4gICAgICAgICAgICAgICAgICAgIHsvKjwvaWZyYW1lPiovfVxuICAgICAgICAgICAgICAgIDwvb2JqZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICk7fVxuXG59XG5cblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHt9O1xufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2hhbmdlUGFnZTogcGFnZSA9PiB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRPRE8gKDUpXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogVW5jb21tZW50IHRoaXMgbGluZSBhbmQgY2FsbCB5b3VyIGltcG9ydGVkIGFjdGlvbiBjcmVhdG9yIGhlcmVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZGlzcGF0Y2goY2hhbmdlSGFuZGJvb2tQYWdlKHBhZ2UpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUERGVmlld2VyKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvY29tcG9uZW50cy9QREZWaWV3ZXIuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQWVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///332\n");

/***/ })

})