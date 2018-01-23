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

var Countdow = function (_wepy$page) {
  _inherits(Countdow, _wepy$page);

  function Countdow() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Countdow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Countdow.__proto__ || Object.getPrototypeOf(Countdow)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'countdown',
      usingComponents: {
        'wxc-countdown': '../../minui/wxc-countdown/dist/index'
      }
    }, _this.data = {
      countdown: 10000,
      format: 'hh:mm:ss',
      countdown2: 5,
      computeTime: 5,
      isEnd: false,
      numStyle: 'width: 48rpx; font-size: 28rpx; color: #ffffff; background: #000; text-align: center; border-radius: 8rpx; padding: 5rpx 0;',
      symbolStyle: 'font-size: 28rpx; color: #000; padding: 0 12rpx;'
    }, _this.methods = {
      onRunCount: function onRunCount(e) {
        var detail = e.detail;
        this.computeTime = detail.computeTime;
      },
      onEndCount: function onEndCount() {
        this.isEnd = true;
      },
      countAgain: function countAgain() {
        var countdown = this.countdown2 + 1;
        if (this.isEnd) {
          this.countdown2 = countdown;
          this.isEnd = false;
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Countdow, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log('onLoad');
    }
  }]);

  return Countdow;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Countdow , 'pages/countdown/countdown'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50ZG93bi5qcyJdLCJuYW1lcyI6WyJDb3VudGRvdyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJkYXRhIiwiY291bnRkb3duIiwiZm9ybWF0IiwiY291bnRkb3duMiIsImNvbXB1dGVUaW1lIiwiaXNFbmQiLCJudW1TdHlsZSIsInN5bWJvbFN0eWxlIiwibWV0aG9kcyIsIm9uUnVuQ291bnQiLCJlIiwiZGV0YWlsIiwib25FbmRDb3VudCIsImNvdW50QWdhaW4iLCJjb25zb2xlIiwibG9nIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLFdBRGpCO0FBRVBDLHVCQUFpQjtBQUNmLHlCQUFpQjtBQURGO0FBRlYsSyxRQU1UQyxJLEdBQU87QUFDTEMsaUJBQVcsS0FETjtBQUVMQyxjQUFRLFVBRkg7QUFHTEMsa0JBQVksQ0FIUDtBQUlMQyxtQkFBYSxDQUpSO0FBS0xDLGFBQU8sS0FMRjtBQU1MQyxnQkFBVSw2SEFOTDtBQU9MQyxtQkFBYTtBQVBSLEssUUFTUEMsTyxHQUFVO0FBQ1JDLGdCQURRLHNCQUNHQyxDQURILEVBQ007QUFDWixZQUFJQyxTQUFTRCxFQUFFQyxNQUFmO0FBQ0EsYUFBS1AsV0FBTCxHQUFtQk8sT0FBT1AsV0FBMUI7QUFDRCxPQUpPO0FBS1JRLGdCQUxRLHdCQUtLO0FBQ1gsYUFBS1AsS0FBTCxHQUFhLElBQWI7QUFDRCxPQVBPO0FBUVJRLGdCQVJRLHdCQVFLO0FBQ1gsWUFBSVosWUFBWSxLQUFLRSxVQUFMLEdBQWtCLENBQWxDO0FBQ0EsWUFBSSxLQUFLRSxLQUFULEVBQWdCO0FBQ2QsZUFBS0YsVUFBTCxHQUFrQkYsU0FBbEI7QUFDQSxlQUFLSSxLQUFMLEdBQWEsS0FBYjtBQUNEO0FBQ0Y7QUFkTyxLOzs7Ozs2QkFnQkQ7QUFDUFMsY0FBUUMsR0FBUixDQUFZLFFBQVo7QUFDRDs7OztFQWxDbUMsZUFBS0MsSTs7a0JBQXRCcEIsUSIsImZpbGUiOiJjb3VudGRvd24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDb3VudGRvdyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ2NvdW50ZG93bicsXG4gICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgJ3d4Yy1jb3VudGRvd24nOiAnLi4vLi4vbWludWkvd3hjLWNvdW50ZG93bi9kaXN0L2luZGV4J1xuICAgICAgfVxuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgY291bnRkb3duOiAxMDAwMCxcbiAgICAgIGZvcm1hdDogJ2hoOm1tOnNzJyxcbiAgICAgIGNvdW50ZG93bjI6IDUsXG4gICAgICBjb21wdXRlVGltZTogNSxcbiAgICAgIGlzRW5kOiBmYWxzZSxcbiAgICAgIG51bVN0eWxlOiAnd2lkdGg6IDQ4cnB4OyBmb250LXNpemU6IDI4cnB4OyBjb2xvcjogI2ZmZmZmZjsgYmFja2dyb3VuZDogIzAwMDsgdGV4dC1hbGlnbjogY2VudGVyOyBib3JkZXItcmFkaXVzOiA4cnB4OyBwYWRkaW5nOiA1cnB4IDA7JyxcbiAgICAgIHN5bWJvbFN0eWxlOiAnZm9udC1zaXplOiAyOHJweDsgY29sb3I6ICMwMDA7IHBhZGRpbmc6IDAgMTJycHg7J1xuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgb25SdW5Db3VudChlKSB7XG4gICAgICAgIGxldCBkZXRhaWwgPSBlLmRldGFpbFxuICAgICAgICB0aGlzLmNvbXB1dGVUaW1lID0gZGV0YWlsLmNvbXB1dGVUaW1lXG4gICAgICB9LFxuICAgICAgb25FbmRDb3VudCgpIHtcbiAgICAgICAgdGhpcy5pc0VuZCA9IHRydWVcbiAgICAgIH0sXG4gICAgICBjb3VudEFnYWluKCkge1xuICAgICAgICBsZXQgY291bnRkb3duID0gdGhpcy5jb3VudGRvd24yICsgMVxuICAgICAgICBpZiAodGhpcy5pc0VuZCkge1xuICAgICAgICAgIHRoaXMuY291bnRkb3duMiA9IGNvdW50ZG93blxuICAgICAgICAgIHRoaXMuaXNFbmQgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdvbkxvYWQnKVxuICAgIH1cbiAgfVxuIl19