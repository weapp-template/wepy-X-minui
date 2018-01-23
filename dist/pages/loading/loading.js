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

var Loading = function (_wepy$page) {
  _inherits(Loading, _wepy$page);

  function Loading() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Loading);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Loading.__proto__ || Object.getPrototypeOf(Loading)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'loading',
      usingComponents: {
        'wxc-loading': '../../minui/wxc-loading/dist/index'
      }
    }, _this.data = {}, _this.methods = {
      showLoading: function showLoading(index) {
        var loadingComponent = this.$wxpage.selectComponent('.wxc-loading' + index);
        loadingComponent && loadingComponent.show();

        setTimeout(function () {
          loadingComponent && loadingComponent.hide();
        }, 2000);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Loading, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log('onLoad');
    }
  }]);

  return Loading;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Loading , 'pages/loading/loading'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmcuanMiXSwibmFtZXMiOlsiTG9hZGluZyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJkYXRhIiwibWV0aG9kcyIsInNob3dMb2FkaW5nIiwiaW5kZXgiLCJsb2FkaW5nQ29tcG9uZW50IiwiJHd4cGFnZSIsInNlbGVjdENvbXBvbmVudCIsInNob3ciLCJzZXRUaW1lb3V0IiwiaGlkZSIsImNvbnNvbGUiLCJsb2ciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsU0FEakI7QUFFUEMsdUJBQWlCO0FBQ2YsdUJBQWU7QUFEQTtBQUZWLEssUUFPVEMsSSxHQUFPLEUsUUFFUEMsTyxHQUFVO0FBQ1JDLGlCQURRLHVCQUNJQyxLQURKLEVBQ1c7QUFDakIsWUFBSUMsbUJBQW1CLEtBQUtDLE9BQUwsQ0FBYUMsZUFBYixDQUE2QixpQkFBaUJILEtBQTlDLENBQXZCO0FBQ0FDLDRCQUFvQkEsaUJBQWlCRyxJQUFqQixFQUFwQjs7QUFFQUMsbUJBQVcsWUFBTTtBQUNmSiw4QkFBb0JBLGlCQUFpQkssSUFBakIsRUFBcEI7QUFDRCxTQUZELEVBRUcsSUFGSDtBQUdEO0FBUk8sSzs7Ozs7NkJBV0Q7QUFDUEMsY0FBUUMsR0FBUixDQUFZLFFBQVo7QUFDRDs7OztFQXZCa0MsZUFBS0MsSTs7a0JBQXJCaEIsTyIsImZpbGUiOiJsb2FkaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGluZyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ2xvYWRpbmcnLFxuICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICd3eGMtbG9hZGluZyc6ICcuLi8uLi9taW51aS93eGMtbG9hZGluZy9kaXN0L2luZGV4J1xuICAgICAgfVxuICAgIH1cblxuICAgIGRhdGEgPSB7fVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHNob3dMb2FkaW5nKGluZGV4KSB7XG4gICAgICAgIGxldCBsb2FkaW5nQ29tcG9uZW50ID0gdGhpcy4kd3hwYWdlLnNlbGVjdENvbXBvbmVudCgnLnd4Yy1sb2FkaW5nJyArIGluZGV4KVxuICAgICAgICBsb2FkaW5nQ29tcG9uZW50ICYmIGxvYWRpbmdDb21wb25lbnQuc2hvdygpXG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgbG9hZGluZ0NvbXBvbmVudCAmJiBsb2FkaW5nQ29tcG9uZW50LmhpZGUoKVxuICAgICAgICB9LCAyMDAwKVxuICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdvbkxvYWQnKVxuICAgIH1cbiAgfVxuIl19