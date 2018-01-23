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

var Steps = function (_wepy$page) {
  _inherits(Steps, _wepy$page);

  function Steps() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Steps);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Steps.__proto__ || Object.getPrototypeOf(Steps)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'steps',
      usingComponents: {
        'wxc-steps': '../../minui/wxc-steps/dist/index'
      }
    }, _this.data = {
      steps: [{
        title: '步骤1',
        desc: '注册，登录'
      }, {
        title: '步骤2',
        desc: '进入详情页，点击立即购买'
      }, {
        title: '步骤3',
        desc: '支付成功'
      }],
      current: 1
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Steps, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log('onLoad');
    }
  }]);

  return Steps;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Steps , 'pages/steps/steps'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0ZXBzLmpzIl0sIm5hbWVzIjpbIlN0ZXBzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzdGVwcyIsInRpdGxlIiwiZGVzYyIsImN1cnJlbnQiLCJtZXRob2RzIiwiY29uc29sZSIsImxvZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixPQURqQjtBQUVQQyx1QkFBaUI7QUFDZixxQkFBYTtBQURFO0FBRlYsSyxRQU1UQyxJLEdBQU87QUFDTEMsYUFBTyxDQUFDO0FBQ05DLGVBQU8sS0FERDtBQUVOQyxjQUFNO0FBRkEsT0FBRCxFQUdKO0FBQ0RELGVBQU8sS0FETjtBQUVEQyxjQUFNO0FBRkwsT0FISSxFQU1KO0FBQ0RELGVBQU8sS0FETjtBQUVEQyxjQUFNO0FBRkwsT0FOSSxDQURGO0FBV0xDLGVBQVM7QUFYSixLLFFBYVBDLE8sR0FBVSxFOzs7Ozs2QkFDRDtBQUNQQyxjQUFRQyxHQUFSLENBQVksUUFBWjtBQUNEOzs7O0VBdkJnQyxlQUFLQyxJOztrQkFBbkJaLEsiLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBTdGVwcyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ3N0ZXBzJyxcbiAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICAnd3hjLXN0ZXBzJzogJy4uLy4uL21pbnVpL3d4Yy1zdGVwcy9kaXN0L2luZGV4J1xuICAgICAgfVxuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgc3RlcHM6IFt7XG4gICAgICAgIHRpdGxlOiAn5q2l6aqkMScsXG4gICAgICAgIGRlc2M6ICfms6jlhozvvIznmbvlvZUnXG4gICAgICB9LCB7XG4gICAgICAgIHRpdGxlOiAn5q2l6aqkMicsXG4gICAgICAgIGRlc2M6ICfov5vlhaXor6bmg4XpobXvvIzngrnlh7vnq4vljbPotK3kubAnXG4gICAgICB9LCB7XG4gICAgICAgIHRpdGxlOiAn5q2l6aqkMycsXG4gICAgICAgIGRlc2M6ICfmlK/ku5jmiJDlip8nXG4gICAgICB9XSxcbiAgICAgIGN1cnJlbnQ6IDFcbiAgICB9XG4gICAgbWV0aG9kcyA9IHt9XG4gICAgb25Mb2FkKCkge1xuICAgICAgY29uc29sZS5sb2coJ29uTG9hZCcpXG4gICAgfVxuICB9XG5cbiJdfQ==