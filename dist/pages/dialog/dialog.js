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

var Dialog = function (_wepy$page) {
  _inherits(Dialog, _wepy$page);

  function Dialog() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Dialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'dialog',
      usingComponents: {
        'wxc-dialog': '../../minui/wxc-dialog/dist/index'
      }
    }, _this.methods = {
      showDialog: function showDialog(index) {
        var dialogComponent = this.$wxpage.selectComponent('.wxc-dialog' + index);
        dialogComponent && dialogComponent.show();
      },
      onCancel: function onCancel(index) {
        var dialogComponent = this.$wxpage.selectComponent('.wxc-dialog' + index);
        dialogComponent && dialogComponent.hide();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Dialog, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log('onLoad');
    }
  }]);

  return Dialog;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Dialog , 'pages/dialog/dialog'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy5qcyJdLCJuYW1lcyI6WyJEaWFsb2ciLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwibWV0aG9kcyIsInNob3dEaWFsb2ciLCJpbmRleCIsImRpYWxvZ0NvbXBvbmVudCIsIiR3eHBhZ2UiLCJzZWxlY3RDb21wb25lbnQiLCJzaG93Iiwib25DYW5jZWwiLCJoaWRlIiwiY29uc29sZSIsImxvZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixRQURqQjtBQUVQQyx1QkFBaUI7QUFDZixzQkFBYztBQURDO0FBRlYsSyxRQU9UQyxPLEdBQVU7QUFDUkMsZ0JBRFEsc0JBQ0dDLEtBREgsRUFDVTtBQUNoQixZQUFJQyxrQkFBa0IsS0FBS0MsT0FBTCxDQUFhQyxlQUFiLENBQTZCLGdCQUFnQkgsS0FBN0MsQ0FBdEI7QUFDQUMsMkJBQW1CQSxnQkFBZ0JHLElBQWhCLEVBQW5CO0FBQ0QsT0FKTztBQUtSQyxjQUxRLG9CQUtDTCxLQUxELEVBS1E7QUFDZCxZQUFJQyxrQkFBa0IsS0FBS0MsT0FBTCxDQUFhQyxlQUFiLENBQTZCLGdCQUFnQkgsS0FBN0MsQ0FBdEI7QUFDQUMsMkJBQW1CQSxnQkFBZ0JLLElBQWhCLEVBQW5CO0FBQ0Q7QUFSTyxLOzs7Ozs2QkFXRDtBQUNQQyxjQUFRQyxHQUFSLENBQVksUUFBWjtBQUNEOzs7O0VBckJpQyxlQUFLQyxJOztrQkFBcEJmLE0iLCJmaWxlIjoiZGlhbG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlhbG9nIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnZGlhbG9nJyxcbiAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICAnd3hjLWRpYWxvZyc6ICcuLi8uLi9taW51aS93eGMtZGlhbG9nL2Rpc3QvaW5kZXgnXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHNob3dEaWFsb2coaW5kZXgpIHtcbiAgICAgICAgbGV0IGRpYWxvZ0NvbXBvbmVudCA9IHRoaXMuJHd4cGFnZS5zZWxlY3RDb21wb25lbnQoJy53eGMtZGlhbG9nJyArIGluZGV4KVxuICAgICAgICBkaWFsb2dDb21wb25lbnQgJiYgZGlhbG9nQ29tcG9uZW50LnNob3coKVxuICAgICAgfSxcbiAgICAgIG9uQ2FuY2VsKGluZGV4KSB7XG4gICAgICAgIGxldCBkaWFsb2dDb21wb25lbnQgPSB0aGlzLiR3eHBhZ2Uuc2VsZWN0Q29tcG9uZW50KCcud3hjLWRpYWxvZycgKyBpbmRleClcbiAgICAgICAgZGlhbG9nQ29tcG9uZW50ICYmIGRpYWxvZ0NvbXBvbmVudC5oaWRlKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICBjb25zb2xlLmxvZygnb25Mb2FkJylcbiAgICB9XG4gIH1cbiJdfQ==