'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      pages: ['pages/index', 'pages/avatar/avatar', 'pages/badge/badge', 'pages/elip/elip', 'pages/label/label', 'pages/loadmore/loadmore', 'pages/price/price', 'pages/progress/progress', 'pages/dialog/dialog', 'pages/popup/popup', 'pages/toast/toast', 'pages/abnor/abnor', 'pages/countdown/countdown', 'pages/counter/counter', 'pages/loading/loading', 'pages/mask/mask', 'pages/steps/steps', 'pages/tab/tab'],
      window: {
        navigationBarBackgroundColor: '#28B1B0',
        navigationBarTextStyle: 'light',
        navigationBarTitleText: 'minui',
        // enablePullDownRefresh: true,
        backgroundColor: '#eee',
        backgroundTextStyle: 'light'
        // tabBar: {
        //   color: '#8a8a8a',
        //   selectedColor: '#1F9948',
        //   borderStyle: 'white',
        //   backgroundColor: '#fff',
        //   list: [{
        //     text: '首页',
        //     pagePath: 'pages/index'
        //   }, {
        //     text: '我的',
        //     pagePath: 'pages/tab/tab'
        //   }]
        // }
      } }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      console.log('on launch');
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJjb25zb2xlIiwibG9nIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MExBR0VBLE0sR0FBUztBQUNQQyxhQUFPLENBQ0wsYUFESyxFQUVMLHFCQUZLLEVBR0wsbUJBSEssRUFJTCxpQkFKSyxFQUtMLG1CQUxLLEVBTUwseUJBTkssRUFPTCxtQkFQSyxFQVFMLHlCQVJLLEVBU0wscUJBVEssRUFVTCxtQkFWSyxFQVdMLG1CQVhLLEVBWUwsbUJBWkssRUFhTCwyQkFiSyxFQWNMLHVCQWRLLEVBZUwsdUJBZkssRUFnQkwsaUJBaEJLLEVBaUJMLG1CQWpCSyxFQWtCTCxlQWxCSyxDQURBO0FBcUJQQyxjQUFRO0FBQ05DLHNDQUE4QixTQUR4QjtBQUVOQyxnQ0FBd0IsT0FGbEI7QUFHTkMsZ0NBQXdCLE9BSGxCO0FBSU47QUFDQUMseUJBQWlCLE1BTFg7QUFNTkMsNkJBQXFCO0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJRLE9BckJELEU7Ozs7OytCQTRDRTtBQUNUQyxjQUFRQyxHQUFSLENBQVksV0FBWjtBQUNEOzs7O0VBL0MwQixlQUFLQyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIHBhZ2VzOiBbXG4gICAgICAgICdwYWdlcy9pbmRleCcsXG4gICAgICAgICdwYWdlcy9hdmF0YXIvYXZhdGFyJyxcbiAgICAgICAgJ3BhZ2VzL2JhZGdlL2JhZGdlJyxcbiAgICAgICAgJ3BhZ2VzL2VsaXAvZWxpcCcsXG4gICAgICAgICdwYWdlcy9sYWJlbC9sYWJlbCcsXG4gICAgICAgICdwYWdlcy9sb2FkbW9yZS9sb2FkbW9yZScsXG4gICAgICAgICdwYWdlcy9wcmljZS9wcmljZScsXG4gICAgICAgICdwYWdlcy9wcm9ncmVzcy9wcm9ncmVzcycsXG4gICAgICAgICdwYWdlcy9kaWFsb2cvZGlhbG9nJyxcbiAgICAgICAgJ3BhZ2VzL3BvcHVwL3BvcHVwJyxcbiAgICAgICAgJ3BhZ2VzL3RvYXN0L3RvYXN0JyxcbiAgICAgICAgJ3BhZ2VzL2Fibm9yL2Fibm9yJyxcbiAgICAgICAgJ3BhZ2VzL2NvdW50ZG93bi9jb3VudGRvd24nLFxuICAgICAgICAncGFnZXMvY291bnRlci9jb3VudGVyJyxcbiAgICAgICAgJ3BhZ2VzL2xvYWRpbmcvbG9hZGluZycsXG4gICAgICAgICdwYWdlcy9tYXNrL21hc2snLFxuICAgICAgICAncGFnZXMvc3RlcHMvc3RlcHMnLFxuICAgICAgICAncGFnZXMvdGFiL3RhYidcbiAgICAgIF0sXG4gICAgICB3aW5kb3c6IHtcbiAgICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyMyOEIxQjAnLFxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnbGlnaHQnLFxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnbWludWknLFxuICAgICAgICAvLyBlbmFibGVQdWxsRG93blJlZnJlc2g6IHRydWUsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlZWUnLFxuICAgICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnXG4gICAgICB9XG4gICAgICAvLyB0YWJCYXI6IHtcbiAgICAgIC8vICAgY29sb3I6ICcjOGE4YThhJyxcbiAgICAgIC8vICAgc2VsZWN0ZWRDb2xvcjogJyMxRjk5NDgnLFxuICAgICAgLy8gICBib3JkZXJTdHlsZTogJ3doaXRlJyxcbiAgICAgIC8vICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAvLyAgIGxpc3Q6IFt7XG4gICAgICAvLyAgICAgdGV4dDogJ+mmlumhtScsXG4gICAgICAvLyAgICAgcGFnZVBhdGg6ICdwYWdlcy9pbmRleCdcbiAgICAgIC8vICAgfSwge1xuICAgICAgLy8gICAgIHRleHQ6ICfmiJHnmoQnLFxuICAgICAgLy8gICAgIHBhZ2VQYXRoOiAncGFnZXMvdGFiL3RhYidcbiAgICAgIC8vICAgfV1cbiAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBvbkxhdW5jaCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdvbiBsYXVuY2gnKVxuICAgIH1cbiAgfVxuIl19