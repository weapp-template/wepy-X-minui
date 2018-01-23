'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'wepy-minui',
      usingComponents: {
        'wxc-dialog': '../minui/wxc-dialog/dist/index',
        'wxc-icon': '../minui/wxc-icon/dist/index'
      }
    }, _this.data = {
      components: [{
        title: '基础元件',
        list: ['avatar', 'badge', 'elip', 'label', 'loadmore', 'price', 'progress']
      }, {
        title: '功能组件',
        list: ['abnor', 'countdown', 'counter', 'loading', 'mask', 'steps', 'tab']
      }, {
        title: '提示反馈',
        list: ['dialog', 'popup', 'toast']
      }]
    }, _this.methods = {
      toComponent: function toComponent(name) {
        this.$navigate('./' + name + '/' + name);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJjb21wb25lbnRzIiwidGl0bGUiLCJsaXN0IiwibWV0aG9kcyIsInRvQ29tcG9uZW50IiwibmFtZSIsIiRuYXZpZ2F0ZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixZQURqQjtBQUVQQyx1QkFBaUI7QUFDZixzQkFBYyxnQ0FEQztBQUVmLG9CQUFZO0FBRkc7QUFGVixLLFFBUVRDLEksR0FBTztBQUNMQyxrQkFBWSxDQUFDO0FBQ1hDLGVBQU8sTUFESTtBQUVYQyxjQUFNLENBQUMsUUFBRCxFQUFXLE9BQVgsRUFBb0IsTUFBcEIsRUFBNEIsT0FBNUIsRUFBcUMsVUFBckMsRUFBaUQsT0FBakQsRUFBMEQsVUFBMUQ7QUFGSyxPQUFELEVBR1Q7QUFDREQsZUFBTyxNQUROO0FBRURDLGNBQU0sQ0FBQyxPQUFELEVBQVUsV0FBVixFQUF1QixTQUF2QixFQUFrQyxTQUFsQyxFQUE2QyxNQUE3QyxFQUFxRCxPQUFyRCxFQUE4RCxLQUE5RDtBQUZMLE9BSFMsRUFNVDtBQUNERCxlQUFPLE1BRE47QUFFREMsY0FBTSxDQUFDLFFBQUQsRUFBVyxPQUFYLEVBQW9CLE9BQXBCO0FBRkwsT0FOUztBQURQLEssUUFhUEMsTyxHQUFVO0FBQ1JDLGlCQURRLHVCQUNJQyxJQURKLEVBQ1U7QUFDaEIsYUFBS0MsU0FBTCxRQUFvQkQsSUFBcEIsU0FBNEJBLElBQTVCO0FBQ0Q7QUFITyxLOzs7Ozs2QkFNRCxDQUFFOzs7O0VBNUJzQixlQUFLRSxJOztrQkFBbkJaLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ3dlcHktbWludWknLFxuICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICd3eGMtZGlhbG9nJzogJy4uL21pbnVpL3d4Yy1kaWFsb2cvZGlzdC9pbmRleCcsXG4gICAgICAgICd3eGMtaWNvbic6ICcuLi9taW51aS93eGMtaWNvbi9kaXN0L2luZGV4J1xuICAgICAgfVxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBjb21wb25lbnRzOiBbe1xuICAgICAgICB0aXRsZTogJ+WfuuehgOWFg+S7ticsXG4gICAgICAgIGxpc3Q6IFsnYXZhdGFyJywgJ2JhZGdlJywgJ2VsaXAnLCAnbGFiZWwnLCAnbG9hZG1vcmUnLCAncHJpY2UnLCAncHJvZ3Jlc3MnXVxuICAgICAgfSwge1xuICAgICAgICB0aXRsZTogJ+WKn+iDvee7hOS7ticsXG4gICAgICAgIGxpc3Q6IFsnYWJub3InLCAnY291bnRkb3duJywgJ2NvdW50ZXInLCAnbG9hZGluZycsICdtYXNrJywgJ3N0ZXBzJywgJ3RhYiddXG4gICAgICB9LCB7XG4gICAgICAgIHRpdGxlOiAn5o+Q56S65Y+N6aaIJyxcbiAgICAgICAgbGlzdDogWydkaWFsb2cnLCAncG9wdXAnLCAndG9hc3QnXVxuICAgICAgfV1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgdG9Db21wb25lbnQobmFtZSkge1xuICAgICAgICB0aGlzLiRuYXZpZ2F0ZShgLi8ke25hbWV9LyR7bmFtZX1gKVxuICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9hZCgpIHt9XG4gIH1cbiJdfQ==