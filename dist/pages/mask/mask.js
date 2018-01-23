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

var Mask = function (_wepy$page) {
  _inherits(Mask, _wepy$page);

  function Mask() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Mask);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Mask.__proto__ || Object.getPrototypeOf(Mask)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'mask',
      usingComponents: {
        'wxc-mask': '../../minui/wxc-mask/dist/index'
      }
    }, _this.data = {
      maskStatus: {
        0: 'hide',
        1: 'hide',
        2: 'hide',
        3: 'hide',
        4: 'hide',
        5: 'hide'
      }
    }, _this.methods = {
      showMask: function showMask(index) {
        this.maskStatus[index] = 'show';
      },
      hideMask: function hideMask() {
        this.maskStatus[5] = 'hide';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Mask, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log('onLoad');
    }
  }]);

  return Mask;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Mask , 'pages/mask/mask'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hc2suanMiXSwibmFtZXMiOlsiTWFzayIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJkYXRhIiwibWFza1N0YXR1cyIsIm1ldGhvZHMiLCJzaG93TWFzayIsImluZGV4IiwiaGlkZU1hc2siLCJjb25zb2xlIiwibG9nIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE1BRGpCO0FBRVBDLHVCQUFpQjtBQUNmLG9CQUFZO0FBREc7QUFGVixLLFFBT1RDLEksR0FBTztBQUNMQyxrQkFBWTtBQUNWLFdBQUcsTUFETztBQUVWLFdBQUcsTUFGTztBQUdWLFdBQUcsTUFITztBQUlWLFdBQUcsTUFKTztBQUtWLFdBQUcsTUFMTztBQU1WLFdBQUc7QUFOTztBQURQLEssUUFXUEMsTyxHQUFVO0FBQ1JDLGNBRFEsb0JBQ0NDLEtBREQsRUFDUTtBQUNkLGFBQUtILFVBQUwsQ0FBZ0JHLEtBQWhCLElBQXlCLE1BQXpCO0FBQ0QsT0FITztBQUlSQyxjQUpRLHNCQUlHO0FBQ1QsYUFBS0osVUFBTCxDQUFnQixDQUFoQixJQUFxQixNQUFyQjtBQUNEO0FBTk8sSzs7Ozs7NkJBU0Q7QUFDUEssY0FBUUMsR0FBUixDQUFZLFFBQVo7QUFDRDs7OztFQTlCK0IsZUFBS0MsSTs7a0JBQWxCWixJIiwiZmlsZSI6Im1hc2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBNYXNrIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnbWFzaycsXG4gICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgJ3d4Yy1tYXNrJzogJy4uLy4uL21pbnVpL3d4Yy1tYXNrL2Rpc3QvaW5kZXgnXG4gICAgICB9XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIG1hc2tTdGF0dXM6IHtcbiAgICAgICAgMDogJ2hpZGUnLFxuICAgICAgICAxOiAnaGlkZScsXG4gICAgICAgIDI6ICdoaWRlJyxcbiAgICAgICAgMzogJ2hpZGUnLFxuICAgICAgICA0OiAnaGlkZScsXG4gICAgICAgIDU6ICdoaWRlJ1xuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBzaG93TWFzayhpbmRleCkge1xuICAgICAgICB0aGlzLm1hc2tTdGF0dXNbaW5kZXhdID0gJ3Nob3cnXG4gICAgICB9LFxuICAgICAgaGlkZU1hc2soKSB7XG4gICAgICAgIHRoaXMubWFza1N0YXR1c1s1XSA9ICdoaWRlJ1xuICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdvbkxvYWQnKVxuICAgIH1cbiAgfVxuIl19