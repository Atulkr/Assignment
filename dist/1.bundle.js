(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./components/Graph.js":
/*!*****************************!*\
  !*** ./components/Graph.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Recharts = __webpack_require__(/*! Recharts */ "../node_modules/Recharts/es6/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Graph = function Graph(props) {
    var _useState = (0, _react.useState)(JSON.parse(window.localStorage.getItem('upVoteData')).filter(function (point) {
        return !point.isHidden;
    })),
        _useState2 = _slicedToArray(_useState, 2),
        coordinates = _useState2[0],
        setCount = _useState2[1];

    (0, _react.useEffect)(function () {
        if (props.fetch && typeof window !== 'undefined') {
            var _coordinates = JSON.parse(window.localStorage.getItem('upVoteData')).filter(function (point) {
                return !point.isHidden;
            });
            setCount(_coordinates);
            props.toggleVoteFlag();
        }
    });
    return _react2.default.createElement(
        'div',
        { id: 'container', style: { boxSizing: ' border-box', padding: '10px', width: '100%', height: '800px', backgroundColor: '#fff' } },
        _react2.default.createElement(
            _Recharts.ResponsiveContainer,
            null,
            _react2.default.createElement(
                _Recharts.LineChart,
                { data: coordinates,
                    margin: { top: 5, right: 30, left: 20, bottom: 5 } },
                _react2.default.createElement(_Recharts.XAxis, { dataKey: 'feedId' }),
                _react2.default.createElement(_Recharts.YAxis, null),
                _react2.default.createElement(_Recharts.CartesianGrid, { strokeDasharray: '3 3' }),
                _react2.default.createElement(_Recharts.Tooltip, null),
                _react2.default.createElement(_Recharts.Legend, null),
                _react2.default.createElement(_Recharts.Line, { type: 'monotone', dataKey: 'voteCount', stroke: '#82ca9d' })
            )
        )
    );
};

exports.default = Graph;

/***/ })

}]);