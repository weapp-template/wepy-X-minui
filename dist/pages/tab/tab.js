'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tab = function (_wepy$page) {
  _inherits(Tab, _wepy$page);

  function Tab() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tab.__proto__ || Object.getPrototypeOf(Tab)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'tab',
      usingComponents: {
        'wxc-tab': '../../minui/wxc-tab/dist/index',
        'wxc-tab-panel': '../../minui/wxc-tab/dist/panel'
      }
    }, _this.data = {
      tabs: [{
        title: '选项一',
        content: '内容一'
      }, {
        title: '选项二',
        content: '内容二'
      }, {
        title: '选项三',
        content: '内容三'
      }]
    }, _this.methods = {
      onClick: function onClick(e) {
        console.log('ComponentId:' + e.detail.componentId + ',you selected:' + e.detail.key);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tab, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log('onLoad');
    }
  }]);

  return Tab;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Tab , 'pages/tab/tab'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYi5qcyJdLCJuYW1lcyI6WyJUYWIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiZGF0YSIsInRhYnMiLCJ0aXRsZSIsImNvbnRlbnQiLCJtZXRob2RzIiwib25DbGljayIsImUiLCJjb25zb2xlIiwibG9nIiwiZGV0YWlsIiwiY29tcG9uZW50SWQiLCJrZXkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxHOzs7Ozs7Ozs7Ozs7OztnTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsS0FEakI7QUFFUEMsdUJBQWlCO0FBQ2YsbUJBQVcsZ0NBREk7QUFFZix5QkFBaUI7QUFGRjtBQUZWLEssUUFRVEMsSSxHQUFPO0FBQ0xDLFlBQU0sQ0FBQztBQUNMQyxlQUFPLEtBREY7QUFFTEMsaUJBQVM7QUFGSixPQUFELEVBR0g7QUFDREQsZUFBTyxLQUROO0FBRURDLGlCQUFTO0FBRlIsT0FIRyxFQU1IO0FBQ0RELGVBQU8sS0FETjtBQUVEQyxpQkFBUztBQUZSLE9BTkc7QUFERCxLLFFBYVBDLE8sR0FBVTtBQUNSQyxlQUFTLGlCQUFVQyxDQUFWLEVBQWE7QUFDcEJDLGdCQUFRQyxHQUFSLGtCQUEyQkYsRUFBRUcsTUFBRixDQUFTQyxXQUFwQyxzQkFBZ0VKLEVBQUVHLE1BQUYsQ0FBU0UsR0FBekU7QUFDRDtBQUhPLEs7Ozs7OzZCQU1EO0FBQ1BKLGNBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0Q7Ozs7RUE5QjhCLGVBQUtJLEk7O2tCQUFqQmhCLEciLCJmaWxlIjoidGFiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFiIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAndGFiJyxcbiAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICAnd3hjLXRhYic6ICcuLi8uLi9taW51aS93eGMtdGFiL2Rpc3QvaW5kZXgnLFxuICAgICAgICAnd3hjLXRhYi1wYW5lbCc6ICcuLi8uLi9taW51aS93eGMtdGFiL2Rpc3QvcGFuZWwnXG4gICAgICB9XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHRhYnM6IFt7XG4gICAgICAgIHRpdGxlOiAn6YCJ6aG55LiAJyxcbiAgICAgICAgY29udGVudDogJ+WGheWuueS4gCdcbiAgICAgIH0sIHtcbiAgICAgICAgdGl0bGU6ICfpgInpobnkuownLFxuICAgICAgICBjb250ZW50OiAn5YaF5a655LqMJ1xuICAgICAgfSwge1xuICAgICAgICB0aXRsZTogJ+mAiemhueS4iScsXG4gICAgICAgIGNvbnRlbnQ6ICflhoXlrrnkuIknXG4gICAgICB9XVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBvbkNsaWNrOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgQ29tcG9uZW50SWQ6JHtlLmRldGFpbC5jb21wb25lbnRJZH0seW91IHNlbGVjdGVkOiR7ZS5kZXRhaWwua2V5fWApXG4gICAgICB9XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgY29uc29sZS5sb2coJ29uTG9hZCcpXG4gICAgfVxuICB9XG4iXX0=