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

var Abnor = function (_wepy$page) {
  _inherits(Abnor, _wepy$page);

  function Abnor() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Abnor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Abnor.__proto__ || Object.getPrototypeOf(Abnor)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'abnor',
      usingComponents: {
        'wxc-abnor': '../../minui/wxc-abnor/dist/index'
      }
    }, _this.data = {
      image: 'https://s10.mogucdn.com/p2/161213/upload_76h1c5hjc8heecjehlfgekjdl2ki0_514x260.png',
      title: '自定义标题',
      tip: '自定义副标题',
      button: '点我'
    }, _this.methods = {
      showpopup: function showpopup(index) {
        var popupComponent = this.$wxpage.selectComponent('.wxc-popup' + index);
        popupComponent && popupComponent.show();
      },
      onCancel: function onCancel(index) {
        var popupComponent = this.$wxpage.selectComponent('.wxc-popup' + index);
        popupComponent && popupComponent.hide();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Abnor, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log('onLoad');
    }
  }]);

  return Abnor;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Abnor , 'pages/abnor/abnor'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFibm9yLmpzIl0sIm5hbWVzIjpbIkFibm9yIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJpbWFnZSIsInRpdGxlIiwidGlwIiwiYnV0dG9uIiwibWV0aG9kcyIsInNob3dwb3B1cCIsImluZGV4IiwicG9wdXBDb21wb25lbnQiLCIkd3hwYWdlIiwic2VsZWN0Q29tcG9uZW50Iiwic2hvdyIsIm9uQ2FuY2VsIiwiaGlkZSIsImNvbnNvbGUiLCJsb2ciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsT0FEakI7QUFFUEMsdUJBQWlCO0FBQ2YscUJBQWE7QUFERTtBQUZWLEssUUFPVEMsSSxHQUFPO0FBQ0xDLGFBQU8sb0ZBREY7QUFFTEMsYUFBTyxPQUZGO0FBR0xDLFdBQUssUUFIQTtBQUlMQyxjQUFRO0FBSkgsSyxRQU9QQyxPLEdBQVU7QUFDUkMsZUFEUSxxQkFDRUMsS0FERixFQUNTO0FBQ2YsWUFBSUMsaUJBQWlCLEtBQUtDLE9BQUwsQ0FBYUMsZUFBYixDQUE2QixlQUFlSCxLQUE1QyxDQUFyQjtBQUNBQywwQkFBa0JBLGVBQWVHLElBQWYsRUFBbEI7QUFDRCxPQUpPO0FBS1JDLGNBTFEsb0JBS0NMLEtBTEQsRUFLUTtBQUNkLFlBQUlDLGlCQUFpQixLQUFLQyxPQUFMLENBQWFDLGVBQWIsQ0FBNkIsZUFBZUgsS0FBNUMsQ0FBckI7QUFDQUMsMEJBQWtCQSxlQUFlSyxJQUFmLEVBQWxCO0FBQ0Q7QUFSTyxLOzs7Ozs2QkFXRDtBQUNQQyxjQUFRQyxHQUFSLENBQVksUUFBWjtBQUNEOzs7O0VBNUJnQyxlQUFLQyxJOztrQkFBbkJwQixLIiwiZmlsZSI6ImFibm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJub3IgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdhYm5vcicsXG4gICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgJ3d4Yy1hYm5vcic6ICcuLi8uLi9taW51aS93eGMtYWJub3IvZGlzdC9pbmRleCdcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgaW1hZ2U6ICdodHRwczovL3MxMC5tb2d1Y2RuLmNvbS9wMi8xNjEyMTMvdXBsb2FkXzc2aDFjNWhqYzhoZWVjamVobGZnZWtqZGwya2kwXzUxNHgyNjAucG5nJyxcbiAgICAgIHRpdGxlOiAn6Ieq5a6a5LmJ5qCH6aKYJyxcbiAgICAgIHRpcDogJ+iHquWumuS5ieWJr+agh+mimCcsXG4gICAgICBidXR0b246ICfngrnmiJEnXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHNob3dwb3B1cChpbmRleCkge1xuICAgICAgICBsZXQgcG9wdXBDb21wb25lbnQgPSB0aGlzLiR3eHBhZ2Uuc2VsZWN0Q29tcG9uZW50KCcud3hjLXBvcHVwJyArIGluZGV4KVxuICAgICAgICBwb3B1cENvbXBvbmVudCAmJiBwb3B1cENvbXBvbmVudC5zaG93KClcbiAgICAgIH0sXG4gICAgICBvbkNhbmNlbChpbmRleCkge1xuICAgICAgICBsZXQgcG9wdXBDb21wb25lbnQgPSB0aGlzLiR3eHBhZ2Uuc2VsZWN0Q29tcG9uZW50KCcud3hjLXBvcHVwJyArIGluZGV4KVxuICAgICAgICBwb3B1cENvbXBvbmVudCAmJiBwb3B1cENvbXBvbmVudC5oaWRlKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICBjb25zb2xlLmxvZygnb25Mb2FkJylcbiAgICB9XG4gIH1cblxuIl19