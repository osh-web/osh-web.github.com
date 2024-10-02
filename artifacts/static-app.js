(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 51);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@material/react-layout-grid");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@material/react-typography");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@material/react-button");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@material/react-card");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SponsorBanner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function SponsorBanner(_ref) {
  var name = _ref.name,
      href = _ref.href,
      src = _ref.src,
      height = _ref.height;
  return href ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: href
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: src,
    alt: "".concat(name, " \u30D0\u30CA\u30FC"),
    style: {
      objectFit: 'contain',
      width: '100%',
      height: height + 'px'
    }
  })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: src,
    alt: "".concat(name, " \u30D0\u30CA\u30FC"),
    style: {
      objectFit: 'contain',
      width: '100%',
      height: height + 'px'
    }
  });
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/resources/seminarList.js
var seminarList = __webpack_require__(21);

// EXTERNAL MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/resources/color.js
var color = __webpack_require__(11);

// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/resources/2024/speakers.js
var seiud07 = {
  furi: '',
  name: '宇田 誠之朗',
  key: 'seiud07',
  title: [],
  description: '株式会社Skillnote インフラSRE/エンジニアリングマネージャー。\n' + '広島地場SIerにてインフラエンジニア10年、Webアプリ開発4年、技術営業4年を経て、2022年に広島からフルリモートで株式会社Skillnote(本社東京)へ入社。\n' + 'インフラ設計構築、スクラムチームのマネージャやスクラムマスター、コンプライアンス整備などを担当しています。',
  memberships: [],
  session: {
    name: 'プロダクトと開発を支えるSREの力',
    description: '品質に対する要求が厳しいエンタープライズにクラウドサービスを提供するには、サイトの信頼性は非常に重要です。\n' + 'またセールス、カスタマーサクセス、開発といった異なる目標を持つ部門が協力しビジネスを成長させていくためにも信頼性は欠かせない要素です。\n' + '本セッションではサイトの信頼性とSREの関わりについてSaas事業会社での実例を交えてお話します。'
  },
  twitter: ''
};
var plageoj = {
  furi: '',
  name: '菅原 政行',
  key: 'plageoj',
  title: [],
  description: '1998年広島県福山市生まれ。2019年合同会社Team IshiHaraを設立。\n' + 'ウェブサービス開発・運用支援を行うほか、向洋駅前でコワーキングスペースを運営。\n' + '2023年株式会社Faber Companyに新卒入社し、主に開発者体験の向上・パフォーマンス改善に取り組む。\n' + '2024年秋からベトナム・ホーチミンの子会社へ異動し、現地でのSRE組織立ち上げを目指して活動中。\n' + 'お好み焼きはうどん派。',
  memberships: [],
  session: {
    name: '野良SREが考えるひとりめの仕事、透明性の作り方',
    description: 'SREという役割がまだない会社で勝手にSREを名乗る、それが「野良」SREです。\n' + '肩書きがなくても文化は作れるという信念をもとに、日々奔走しています。\n' + 'SRE組織は後から立ち上がることが多く、立ち上げにあたって既存の会社文化とどう折り合いをつけていくかが課題になるでしょう。このときに必要となるのが取り組みの透明性です。\n' + '野良である自由さを活かしながら、ボトムアップでエンジニアの活躍を支援していくための試みをお伝えします。'
  },
  twitter: ''
};
var dyoshikawa = {
  furi: '',
  name: 'dyoshikawa',
  key: 'dyoshikawa',
  title: [],
  description: '広島市でリモート勤務するソフトウェアエンジニア。\n' + '現職では月間PV数1000万以上、会員数10万以上のエンジニア向け情報共有プラットフォームZennにおいてNext.jsやRuby on Railsを用いた開発業務に参画。\n' + 'それ以前は受託開発案件におけるテックリードとしてチーム開発を主導。\n' + 'バックエンドアプリケーション開発をメイン領域としながらも、ReactフロントエンドやAWSインフラの開発も行うT型的人材であり、Webアプリケーションの構成要素全体について技術選定、初期構築フェーズから対応している。\n' + 'OSS活動も行っており、aws-cdkやopenGraphScraperへのコミット経験がある。\n' + '保有資格は応用情報技術者、AWS認定 セキュリティ - 専門知識など。',
  memberships: [],
  session: {
    name: 'エンジニアのための情報共有コミュニティサービスZennの開発チームを支える自動化の仕組み',
    description: 'Zennはエンジニアのための新しい情報共有サービスです。\n' + '月間PV数1000万以上のWebサービスでありながら、エンジニア3人、デザイナー1人、ビジネス1人、オペレーター1人という少人数チームで企画や開発・運用、そして問い合わせ対応のすべてを担っており、あらゆる方面において自動化の仕組みによる開発の合理化・効率化が不可欠な状況にあります。\n' + '本セッションでは、ZennチームにおけるLinter/Formatterによるレビュー工数の削減、自動テストとCIによる品質の担保、デプロイ自動化による属人性の排除、そして生成AIの活用の取り組みなどを紹介します。開発・運用業務の生産性向上のヒントを得る一助となれば幸いに思います。'
  },
  twitter: ''
};
var kentahi = {
  furi: '',
  name: '菱田健太@トポタル',
  key: 'kentahi',
  title: [],
  description: 'Topotal COO/CFOをやっています。\n' + 'もう一度読むSREというPodcastの相槌兼編集担当、SRE NEXT 2023 Staff、SRE NEXT 2024 Co-Chairなどの活動をしています。',
  memberships: [],
  session: {
    name: '',
    description: ''
  },
  twitter: ''
};
var tomo = {
  furi: '',
  name: 'tomo',
  key: 'tomo',
  title: [],
  description: 'SIer→ECサイトのSRE&DBRE→PdMという変わった職歴のエンジニア。\n' + '過去の経験から「様々なバックグラウンドの方に、わかりやすく説明する」をモットーに、イベントに参加させていただきます！',
  memberships: [],
  session: {
    name: '信頼性を高めるって結局何だったの？\n',
    description: 'SREやDBRE、CRE…様々な「信頼性を高める」エンジニアリングがありますが、信頼性とは？信頼性を高めて何が嬉しいの？\n' + 'を、かみ砕いて説明します。'
  },
  twitter: ''
};
var speakers = [seiud07, plageoj, dyoshikawa, kentahi, tomo];
// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/resources/2024/staff.js
var kakenavi = {
  key: 'kakenavi',
  name: '山城戸 祐樹',
  twitter: 'kakenavi'
};
var mu2in = {
  key: 'mu2in',
  name: 'mu2in',
  twitter: 'mu2in',
  github: 'mu2in'
};
var m_ando_japan = {
  key: 'm_ando_japan',
  name: '安藤 光昭',
  twitter: 'm_ando_japan',
  facebook: 'ando.mitsuaki',
  uri: 'https://bitriver.jp/'
};
var nanarichi = {
  key: '7richi',
  name: '田中 靖也',
  twitter: '7richi',
  github: 'yasu7ri',
  facebook: 'yasu7ri'
};
var isabasi1484 = {
  key: 'isabasi1484',
  name: '石橋 伸介',
  twitter: 'isabisi1484',
  github: 'isabisi1484'
};
var nishimotz = {
  key: '24motz',
  name: '西本 卓也',
  twitter: '24motz',
  facebook: 'takuya.nishimoto',
  uri: 'https://shuaruta.com/'
};
var mmorito = {
  key: 'mmorito',
  name: 'mmorito',
  title: '実行委員長',
  twitter: 'mmorito_0318'
};
var hiroyuki = {
  key: 'hiroyuki',
  name: '前田 浩幸',
  twitter: 'hiroyukimaeda_3'
};
var naoyuki = {
  key: 'naoyuki',
  name: '濱田 直之',
  twitter: 'Naoyukisc2'
};
var mosugi = {
  key: 'mosugi',
  name: 'Masaki Osugi'
};
var yoshida = {
  key: 'yoshida',
  name: '吉田 豪'
};
var yamamoto = {
  key: 'yamamoto',
  name: '山本 直輝',
  twitter: 'ymnk4919',
  github: 'mtbk4919naoki',
  facebook: 'ymnk4919'
};
var ozaki = {
  key: 'ozaki',
  name: '尾崎 徳生',
  facebook: 'norio.ozaki.711'
};
var kaneyasu = {
  key: 'kaneyasu',
  name: '兼安 聡',
  twitter: 'satoshi256kbyte',
  github: 'satoshi256kbyte',
  facebook: 'kaneyasusatoshi'
};
var sugiyama = {
  key: 'sugiyama',
  name: '杉山 花代',
  twitter: 'Bluerose_87'
};
var staff = [mmorito, nishimotz, isabasi1484, kakenavi, m_ando_japan, nanarichi, mu2in, // mosugi,
hiroyuki, yoshida, yamamoto, ozaki, kaneyasu, sugiyama, naoyuki];
// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/resources/2024/sponsors.js
var shuaruta = {
  name: '株式会社シュアルタ',
  key: 'shuaruta',
  url: 'https://shuaruta.com/',
  banner: '/img/2024/shuaruta.svg',
  height: 120
};
var subthread = {
  name: '株式会社サブスレッド',
  key: 'subthread',
  url: 'https://www.subthread.co.jp/',
  banner: '/img/2024/subthread.png',
  height: 200
};
var eventHandler = {
  name: '株式会社イベントハンドラ',
  key: 'eventHandler',
  url: 'https://eventhandler.jp/',
  banner: '/img/2024/eventhandler.png',
  height: 120
};
var platinum = [subthread];
var gold = [];
var silver = [shuaruta];
var supporter = [eventHandler];
var sponsors = {
  platinum: platinum,
  gold: gold,
  silver: silver,
  supporter: supporter
};
// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/resources/index.js
/* unused concated harmony import event2013 */
/* unused concated harmony import event2014 */
/* unused concated harmony import event2015 */
/* unused concated harmony import event2016 */
/* unused concated harmony import event2017 */
/* unused concated harmony import event2018 */
/* unused concated harmony import event2019 */
/* unused concated harmony import event2020 */
/* unused concated harmony import event2022 */
/* unused concated harmony import event2023 */
/* concated harmony reexport seminarList */__webpack_require__.d(__webpack_exports__, "b", function() { return seminarList["a" /* seminarList */]; });
/* unused concated harmony import primary */
/* unused concated harmony import accent */
/* concated harmony reexport color */__webpack_require__.d(__webpack_exports__, "a", function() { return color["b" /* color */]; });
/* unused concated harmony import seiud07 */
/* unused concated harmony import plageoj */
/* unused concated harmony import dyoshikawa */
/* unused concated harmony import kentahi */
/* unused concated harmony import tomo */
/* concated harmony reexport speakers */__webpack_require__.d(__webpack_exports__, "c", function() { return speakers; });
/* concated harmony reexport staff */__webpack_require__.d(__webpack_exports__, "e", function() { return staff; });
/* unused concated harmony import shuaruta */
/* unused concated harmony import subthread */
/* unused concated harmony import eventHandler */
/* unused concated harmony import platinum */
/* unused concated harmony import gold */
/* unused concated harmony import silver */
/* unused concated harmony import supporter */
/* concated harmony reexport sponsors */__webpack_require__.d(__webpack_exports__, "d", function() { return sponsors; });






/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export primary */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return accent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return color; });
var primary = '#D84315';
var accent = '#C62828';
var color = {
  primary: primary,
  accent: accent
};

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);
/* harmony import */ var _material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_react_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50);
/* harmony import */ var _material_react_material_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_react_material_icon__WEBPACK_IMPORTED_MODULE_3__);




function AppBar(_ref) {
  var title = _ref.title,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    title: title,
    navigationIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_material_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
      icon: "chevron_left",
      onClick: function onClick() {
        return Object(_reach_router__WEBPACK_IMPORTED_MODULE_1__["navigate"])('/');
      }
    })
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_2__["TopAppBarFixedAdjust"], null, children));
}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/taggedTemplateLiteral");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("grid-styled");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(28);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(54);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(56);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(37);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(38);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _vm = __webpack_require__(57);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(29);

var _helpers = __webpack_require__(58);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, context, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props, context).then(function (mod) {
          var state = {
            mod: mod,
            props: props,
            context: context
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props,
            context: context
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props, context) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props,
            context: context
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (context.report) {
          context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod,
            context: context
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod,
          context: context
        }, context, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          context: context,
          props: props
        };
      }
    }], [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props, _this.context); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps, currentState.context);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextTypes = {
    store: _propTypes2["default"].object,
    report: _propTypes2["default"].func
  }, _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(27)(module)))

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_react_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _material_react_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_react_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);



var name = '© オープンセミナー広島';
/* harmony default export */ __webpack_exports__["a"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_button__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    style: {
      color: 'black'
    },
    onClick: function onClick() {
      return Object(_reach_router__WEBPACK_IMPORTED_MODULE_2__["navigate"])('/');
    }
  }, name);
});

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/organisms/AppBar.js
var AppBar = __webpack_require__(12);

// EXTERNAL MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/organisms/Footer.js
var Footer = __webpack_require__(17);

// EXTERNAL MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/organisms/Menu.js
var Menu = __webpack_require__(22);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material/react-button"
var react_button_ = __webpack_require__(3);
var react_button_default = /*#__PURE__*/__webpack_require__.n(react_button_);

// EXTERNAL MODULE: external "@material/react-typography"
var react_typography_ = __webpack_require__(2);

// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/organisms/2023/Hero.js



var Hero_Hero = function Hero() {
  return external_react_default.a.createElement(react_typography_["Headline1"], {
    style: headerStyle,
    tag: "h1"
  }, external_react_default.a.createElement("img", {
    style: {
      height: '300px'
    },
    src: "/img/logo.png"
  }), external_react_default.a.createElement("br", null), "\u30AA\u30FC\u30D7\u30F3\u30BB\u30DF\u30CA\u30FC2023@\u5E83\u5CF6", external_react_default.a.createElement("br", null), "\u300C\u751F\u6210AI\u3068\u306E\u3064\u304D\u3042\u3044\u65B9\u300D", external_react_default.a.createElement("br", null), "2023\u5E7411\u670811\u65E5(\u571F) 10:00 \uFF5E 17:00", external_react_default.a.createElement("br", null), external_react_default.a.createElement(react_button_default.a, {
    style: {
      color: '#7b5544'
    },
    href: "https://goo.gl/maps/xxWZx4DDw1EBtomy8"
  }, "\u5E83\u5CF6\u5E02\u897F\u533A\u6C11\u6587\u5316\u30BB\u30F3\u30BF\u30FC"), external_react_default.a.createElement("br", null), external_react_default.a.createElement(Hero_MainButton, null));
};
var headerStyle = {
  margin: 0,
  backgroundColor: '#F4EFAC',
  color: '#000000',
  fontSize: '22px',
  padding: '15% 0',
  lineHeight: 1.8,
  textAlign: 'center'
};

var Hero_MainButton = function MainButton() {
  return external_react_default.a.createElement(react_button_default.a, {
    href: "https://osh.connpass.com/event/283678/",
    raised: true,
    style: {
      padding: '20px 40px',
      margin: '20px 10px'
    }
  }, "\u53C2\u52A0\u7533\u3057\u8FBC\u307F\u3059\u308B");
};
// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(6);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// EXTERNAL MODULE: external "@material/react-card"
var react_card_ = __webpack_require__(4);
var react_card_default = /*#__PURE__*/__webpack_require__.n(react_card_);

// EXTERNAL MODULE: external "@material/react-layout-grid"
var react_layout_grid_ = __webpack_require__(1);

// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/organisms/2023/Speakers.js







var Speakers_Speaker = function Speaker(_ref) {
  var name = _ref.name,
      furi = _ref.furi,
      description = _ref.description,
      id = _ref.id,
      title = _ref.title,
      memberships = _ref.memberships,
      session = _ref.session;
  return external_react_default.a.createElement(react_card_default.a, {
    className: "mdc-elevation--z1",
    outlined: true
  }, external_react_default.a.createElement(react_card_["CardMedia"], {
    imageUrl: "/img/2023/".concat(id, ".jpg"),
    square: true
  }), external_react_default.a.createElement("div", {
    style: {
      padding: '0 16px'
    }
  }, external_react_default.a.createElement(react_typography_["Headline1"], {
    style: {
      fontSize: 18,
      lineHeight: 1
    }
  }, session ? '『' + session.name + '』' : 'セッション内容 TBD'), external_react_default.a.createElement(react_typography_["Body2"], null, session ? session.description : ''), external_react_default.a.createElement(react_typography_["Caption"], {
    style: {
      fontSize: 14,
      margin: 0,
      padding: 0
    }
  }, furi), external_react_default.a.createElement(react_typography_["Headline1"], {
    style: {
      fontSize: 18,
      lineHeight: 1,
      margin: 0
    }
  }, name), external_react_default.a.createElement("div", {
    style: {
      fontSize: 16,
      lineHeight: 1,
      margin: 0,
      padding: '8px 0'
    }
  }, memberships.map(function (_ref2) {
    var uri = _ref2.uri,
        name = _ref2.name;
    return external_react_default.a.createElement(react_button_["Button"], {
      href: uri,
      style: {
        height: 32,
        padding: '2px 0'
      }
    }, name);
  })), external_react_default.a.createElement(react_typography_["Body2"], null, description), external_react_default.a.createElement(react_typography_["Body2"], null, title.reduce(function (acc, elem) {
    return external_react_default.a.createElement("span", null, acc, external_react_default.a.createElement("br", null), elem);
  }, []))));
};

var Speakers_Speakers = function Speakers(_ref3) {
  var speakers = _ref3.speakers;
  return external_react_default.a.createElement(react_layout_grid_["Grid"], null, external_react_default.a.createElement(react_layout_grid_["Row"], null, external_react_default.a.createElement(react_layout_grid_["Cell"], null, external_react_default.a.createElement(react_typography_["Headline2"], null, "Sessions"))), external_react_default.a.createElement(react_layout_grid_["Row"], null, speakers.length ? speakers.map(function (speaker) {
    return external_react_default.a.createElement(react_layout_grid_["Cell"], {
      columns: 4,
      key: speaker.key
    }, external_react_default.a.createElement(Speakers_Speaker, extends_default()({}, speaker, {
      id: speaker.key
    })));
  }) : "現在調整中です"));
};
// EXTERNAL MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/resources/index.js + 3 modules
var resources = __webpack_require__(10);

// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/organisms/2023/Staff.js







var Staff_SNS = function SNS(_ref) {
  var uri = _ref.uri,
      service = _ref.service;
  return external_react_default.a.createElement("a", {
    href: uri,
    target: "_blank"
  }, external_react_default.a.createElement("i", {
    className: "fab fa-".concat(service),
    style: {
      margin: '0 0 0 6px',
      color: resources["a" /* color */].primary
    }
  }));
};

var Twitter = function Twitter(_ref2) {
  var id = _ref2.id;
  return Staff_SNS({
    service: 'twitter',
    uri: "https://twitter.com/".concat(id)
  });
};

var GitHub = function GitHub(_ref3) {
  var id = _ref3.id;
  return Staff_SNS({
    service: 'github',
    uri: "https://github.com/".concat(id)
  });
};

var Facebook = function Facebook(_ref4) {
  var id = _ref4.id;
  return Staff_SNS({
    service: 'facebook',
    uri: "https://www.facebook.com/".concat(id)
  });
};

var Staff_Member = function Member(_ref5) {
  var name = _ref5.name,
      title = _ref5.title,
      twitter = _ref5.twitter,
      github = _ref5.github,
      facebook = _ref5.facebook;
  return external_react_default.a.createElement(react_card_default.a, null, external_react_default.a.createElement("div", {
    style: {
      padding: '0 16px'
    }
  }, external_react_default.a.createElement(react_typography_["Headline1"], {
    style: {
      fontSize: 18,
      lineHeight: 1
    }
  }, title ? external_react_default.a.createElement(react_typography_["Caption"], null, title, external_react_default.a.createElement("br", null)) : '', name, twitter ? external_react_default.a.createElement(Twitter, {
    id: twitter
  }) : '', github ? external_react_default.a.createElement(GitHub, {
    id: github
  }) : '', facebook ? external_react_default.a.createElement(Facebook, {
    id: facebook
  }) : '')));
};

var Staff_Staff = function Staff(_ref6) {
  var staff = _ref6.staff;
  return external_react_default.a.createElement(react_layout_grid_["Grid"], null, external_react_default.a.createElement(react_layout_grid_["Row"], null, external_react_default.a.createElement(react_layout_grid_["Cell"], null, external_react_default.a.createElement(react_typography_["Headline2"], null, "Staff"))), external_react_default.a.createElement(react_layout_grid_["Row"], null, staff.map(function (member) {
    return external_react_default.a.createElement(react_layout_grid_["Cell"], {
      columns: 4,
      key: member.key
    }, external_react_default.a.createElement(Staff_Member, extends_default()({}, member, {
      id: member.key
    })));
  })));
};
// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(18);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/objectWithoutProperties"
var objectWithoutProperties_ = __webpack_require__(20);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties_);

// EXTERNAL MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/atoms/SponsorBanner.js
var SponsorBanner = __webpack_require__(5);

// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/organisms/2023/Sponsors.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var style = {
  margin: '3% 10%',
  boxSizing: 'border-box'
};
function Sponsors(_ref) {
  var platinum = _ref.platinum,
      gold = _ref.gold,
      silver = _ref.silver,
      supporter = _ref.supporter;
  return external_react_default.a.createElement(react_layout_grid_["Grid"], null, external_react_default.a.createElement(react_layout_grid_["Row"], null, external_react_default.a.createElement(react_layout_grid_["Cell"], null, external_react_default.a.createElement(react_typography_["Headline2"], null, "Sponsors"))), external_react_default.a.createElement(react_layout_grid_["Row"], null, external_react_default.a.createElement(react_layout_grid_["Cell"], null, external_react_default.a.createElement(react_typography_["Headline3"], null, "Platinum")), platinum.map(function (sponsor) {
    return external_react_default.a.createElement(react_layout_grid_["Cell"], {
      columns: 12,
      style: style
    }, Object(SponsorBanner["a" /* SponsorBanner */])(toSponsor(sponsor)));
  })), external_react_default.a.createElement(react_layout_grid_["Row"], null, external_react_default.a.createElement(react_layout_grid_["Cell"], null, external_react_default.a.createElement(react_typography_["Headline3"], null, "Gold")), gold.map(function (sponsor) {
    return external_react_default.a.createElement(react_layout_grid_["Cell"], {
      columns: 6,
      desktopColumns: 6,
      style: style
    }, Object(SponsorBanner["a" /* SponsorBanner */])(toSponsor(sponsor)));
  })), external_react_default.a.createElement(react_layout_grid_["Cell"], null, external_react_default.a.createElement(react_typography_["Headline3"], null, "Silver")), external_react_default.a.createElement(react_layout_grid_["Row"], null, silver.map(function (sponsor) {
    return external_react_default.a.createElement(react_layout_grid_["Cell"], {
      columns: 4,
      desktopColumns: 3,
      style: style
    }, Object(SponsorBanner["a" /* SponsorBanner */])(toSponsor(sponsor)));
  })), external_react_default.a.createElement(react_layout_grid_["Cell"], null, external_react_default.a.createElement(react_typography_["Headline3"], null, "Supporter")), external_react_default.a.createElement(react_layout_grid_["Row"], null, supporter.map(function (sponsor) {
    return external_react_default.a.createElement(react_layout_grid_["Cell"], {
      columns: 4,
      desktopColumns: 3,
      style: style
    }, Object(SponsorBanner["a" /* SponsorBanner */])(toSponsor(sponsor)));
  })), external_react_default.a.createElement(react_layout_grid_["Row"], null, // TODO: リンクの記載を行う
  !(platinum.length || gold.length || silver.length) ? "現在募集中です" : null));
}

function toSponsor(_ref2) {
  var banner = _ref2.banner,
      url = _ref2.url,
      args = objectWithoutProperties_default()(_ref2, ["banner", "url"]);

  return _objectSpread({
    src: banner,
    href: url
  }, args);
}
// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/organisms/2023/index.js
/* unused concated harmony import AppBar */
/* concated harmony reexport Menu */__webpack_require__.d(__webpack_exports__, "b", function() { return Menu["a" /* Menu */]; });
/* concated harmony reexport Hero */__webpack_require__.d(__webpack_exports__, "a", function() { return Hero_Hero; });
/* concated harmony reexport Speakers */__webpack_require__.d(__webpack_exports__, "c", function() { return Speakers_Speakers; });
/* concated harmony reexport Staff */__webpack_require__.d(__webpack_exports__, "e", function() { return Staff_Staff; });
/* concated harmony reexport Sponsors */__webpack_require__.d(__webpack_exports__, "d", function() { return Sponsors; });








/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export event2013 */
/* unused harmony export event2014 */
/* unused harmony export event2015 */
/* unused harmony export event2016 */
/* unused harmony export event2017 */
/* unused harmony export event2018 */
/* unused harmony export event2019 */
/* unused harmony export event2020 */
/* unused harmony export event2022 */
/* unused harmony export event2023 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return seminarList; });
var event2013 = {
  name: 'オープンセミナー2013@広島',
  theme: 'モバイルプラットフォームとJava',
  url: '/2013/'
};
var event2014 = {
  name: 'オープンセミナー2014@広島',
  theme: 'TDD…そして Be Agile',
  url: 'http://osh-2014.github.io/'
};
var event2015 = {
  name: 'オープンセミナー2015@広島',
  theme: 'クラウド時代の構成管理入門',
  url: '/2015/'
};
var event2016 = {
  name: 'オープンセミナー2016@広島',
  theme: 'みんなでつくろうモダンな開発現場',
  url: '/2016/'
};
var event2017 = {
  name: 'オープンセミナー2017@広島',
  theme: 'エンジニアがより良い社会を作れる!!',
  url: '/2017/'
};
var event2018 = {
  name: 'オープンセミナー2018@広島',
  theme: 'いまさらチームビルディング',
  url: '/2018/'
};
var event2019 = {
  name: 'オープンセミナー2019@広島',
  theme: '学び方 Hacks',
  url: '/2019/'
};
var event2020 = {
  name: 'オープンセミナー2020@広島',
  theme: 'エンジニアライフ Hacks',
  url: '/2020/'
};
var event2022 = {
  name: 'オープンセミナー2022@広島',
  theme: 'Re: エンジニアのための統計・データ分析入門',
  url: '/2022/'
};
var event2023 = {
  name: 'オープンセミナー2023@広島',
  theme: '生成AIとのつきあい方',
  url: '/2023/'
};
var seminarList = [event2023, event2022, event2020, event2019, event2018, event2017, event2016, event2015, event2014, event2013];

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Menu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_react_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _material_react_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_react_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_react_layout_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _material_react_layout_grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_react_layout_grid__WEBPACK_IMPORTED_MODULE_3__);




var Menu = function Menu() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_layout_grid__WEBPACK_IMPORTED_MODULE_3__["Grid"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_layout_grid__WEBPACK_IMPORTED_MODULE_3__["Row"], null, menuList.map(function (_ref) {
    var to = _ref.to,
        text = _ref.text,
        key = _ref.key;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_layout_grid__WEBPACK_IMPORTED_MODULE_3__["Cell"], {
      columns: 4
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListButton, {
      to: to,
      key: key
    }, text));
  })));
};
var menuList = [{
  key: 'about',
  to: '/about/',
  text: '初めての方へ'
},
/*
  {
    to: '/2018/sessions',
    text: 'セッション',
  },
  {
    to: '/2018/staff',
    text: 'スタッフ',
  },
  */
{
  key: 'history',
  to: '/history/',
  text: 'これまでのオープンセミナー'
}];
var ListButtonStyle = {
  textAlign: 'center'
};

var ListButton = function ListButton(_ref2) {
  var to = _ref2.to,
      children = _ref2.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onClick: function onClick() {
      return Object(_reach_router__WEBPACK_IMPORTED_MODULE_1__["navigate"])(to);
    },
    style: ListButtonStyle
  }, children);
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/resources/seminarList.js
var seminarList = __webpack_require__(21);

// EXTERNAL MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/resources/color.js
var color = __webpack_require__(11);

// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/resources/2023/speakers.js
var nakamichi127 = {
  furi: '',
  name: '中道　一志',
  key: 'nakamichi127',
  title: [],
  description: '島根県の西端からフルリモートで働くエンジニア。 2022年6月にそれまで勤めていたSIerからリモートで働ける企業に転職。子育てのために広島を離れて妻の実家に移住した。現在はプロジェクトマネージャーとして、世界中のメンバーと協力しながらヌーラボのサービス開発を進めている。 お好み焼きに対して、ピザ切りと箸で食べることは許さない主義。',
  memberships: [],
  session: {
    name: '人類史から見る今この時代の歩きかた',
    description: '「過去を遠くまで振り返るほど未来を遠くまで見渡せる」ウィンストン・チャーチルの言葉です。約200年前、ラッダイトと呼ばれる人たちは産業革命の機械化によって職を失うことを恐れ機械を壊してまわりました。教科書上では愚かな抵抗勢力のように描かれている彼等は果たして間違っていたのか、今似たような立場にいる私にはよくわかりません。私は、AIと戦う、共存する、逃げ回る、いろいろな生き方があると考えています。人類の歴史を振り返りながらエンジニアとしてどう生きていくのかを考える時間にしたいと思います。'
  },
  twitter: ''
};
var takemura = {
  furi: '',
  name: '武村　達也',
  key: 'takemura',
  title: [],
  description: '50歳代の非エンジニアの中年サラリーマンです。 趣味で電子工作、クソゲー、メタバースのワールドなどを作っています。ハッカソンに約15回参加、国内外のメイカーイベントに約10回出展するなど趣味の領域を超えつつあり、TwitterなどSNSで頻繁にやってみた系のアウトプットを公開しているおかげで、早稲田大学ビジネススクールや電子情報通信学会、一般社団法人生成AI協会、そして今回の登壇に繋がっています。',
  memberships: [],
  session: {
    name: '普通の中年サラリーマンが生成AIをやってみたよ',
    description: '生成AIは本を読んだり偉い人の話を聞くのもいいですが、まずは自分の手を動かしましょう。ここ1年で実際に私がSNSに投稿した「やってみた系」の事例をひたすらお話しします。その中から生成AIは私のようにたいしたスキルがなくても、手を動かせば、楽しくて、沢山の学びがあるってことを感じていただければ幸いです。'
  },
  twitter: ''
};
var max = {
  furi: '',
  name: '松下　享平',
  key: 'max',
  title: [],
  description: 'IoTの活用事例やデモを通じて、IoTの普及を推し進める講演や執筆を行う。90年代のISP事業の支援をキャリアスタートとし、2000年にはLinuxサーバーメーカーにて情報システムやEC事業を担当。2015年にはIoTの事業開発をリードしてメガクラウドとの協業や、省電力通信による先駆的なIoT事例に関わる。2017年3月より現職、登壇回数は延べ500以上。共著に『IoTエンジニア養成読本』（技術評論社）、『公式ガイドブック SORACOMプラットフォーム』（日経BP社）がある。1978年生、静岡育ち。座右の銘は「論よりコード」',
  memberships: [],
  session: {
    name: 'エンジニアが知っておきたい生成系AIの今と、これからの付き合い方',
    description: 'AIの進化は加速し続けています。中でも生成系AIは、これまでの機械学習や深層学習で行っていた「分類系」とは異なり、AIが直接新たな価値を生むことができる技術として注目されています。本セッションでは、生成系AIの基礎やプロンプトエンジニアリングの今を振り返りつつ「普遍的なコトは何なのか？」の発見と共に、この技術との付き合い方を皆さんと共に考えていきます。'
  },
  twitter: ''
};
var yoshida = {
  furi: '',
  name: '吉田　大貴',
  key: 'yoshida',
  title: [],
  description: 'マイクロソフト米国本社にて、Microsoft Power Platformの開発部門内から直接お客様をご支援するカスタマーアドバイザリーチームに所属。 世界中のお客様とパートナーシップを築きあげ、ユーザー企業の支援およびフィードバックをもとにしたプロダクトの改善に従事し、Copilot・生成型AIのユースケースを統括担当として、Power Platformと生成型AIを組み合わせたベストプラクティスの提案など行っている。 1990年大阪府豊中市生まれ。イギリス・キングスカレッジトーントンスクール卒業。帰国後高卒のままマクドナルドでアルバイトを開始。その後、地元工業団地で派遣社員として勤務した後、システム会社やコンサルティングファームのEYなどを経て、2018年1月にマイクロソフトへ入社。',
  memberships: [],
  session: {
    name: 'ローコード＋Copilot＋生成型AIを使い倒す将来とは？',
    description: 'MicrosoftのローコードおよびCopilot・生成型AIによる開発事例の紹介に製品のデモを織り交ぜ、当社が描く未来像についてお話いたします。 IT技術者がこれからどのようにプロンプトエンジニアリングに取り組むべきか？ヒントを得ていただけますと幸いです。'
  },
  twitter: ''
};
var mori = {
  furi: '',
  name: '森　雄哉',
  key: 'mori',
  title: [],
  description: '20代の初めに独立し、自社開発のプロダクトを皮切りに、スタートアップから大企業まで幅広いスケールのプロダクト開発に携わりました。プロダクトが生まれてから撤退するまでに起きるプロダクト開発の複雑さや、組織の成長に伴う固有の問題に取り組みつづけています。 現在、様々な規模と業界の企業に向けて、プロダクトマネジメントの支援をしていきます。スタートアップのスピード感や、大企業だからこそできるリソース活用など、これまでに得た知識と経験を活かして、効果的なプロダクトマネジメントの実現に向けて支援しています。時には、現場でモブワークといった協同作業もしながら、ユーザーに喜ばれるプロダクトを追求しています。',
  memberships: [],
  session: {
    name: '「ChatGPTに何を聞けばいいのか分かんない!」ChatGPTを前に頭が真っ白を乗り越えて仕事で使い倒していくぞ',
    description: '本セッションでは「話題になっているからChatGPTを使ってみたけど、うまく使えなくて、使わなくなってしまった」という状況の理解を通して、新しい道具との関わり方を示します。プロンプトエンジニアリングという生成AIに入力する文字列を工夫するテクニックが脚光を浴びています。これには大きく分けて2種類あると思います。ひとつは「step by step」のような推論の精度を上げるものです。もう一つはほしい回答そのものをデザインすることです。本セッションは後者を中心に解説し、参加された方が仕事で使い始められることを目指します。'
  },
  twitter: ''
};
var mito = {
  furi: '',
  name: '三戸 鉄也',
  key: 'mito',
  title: [],
  description: 'Wardish合同会社 代表社員。JAWS-UG 広島支部長。地方の小規模SIerとして20年以上この業界に関わっています。開発の現場にもどっぷり浸かったまま、研究開発も資本計画も組織管理もM&Aもなんでもやらないといけない毎日です。',
  memberships: [],
  session: {
    name: 'プロジェクト支援に生成AIを使う',
    description: '生成AIのすごいところは、テクノロジーがほぼそのままの形で業務のパフォーマンスアップに繋がる点だと思います。\n' + 'SIビジネスを続けていこうとしたときに、人手不足に歯止めがかかる見込みが無い以上、1人あたりの生産性をどれだけ上げられるかが勝負になってきてると感じてまして、成果物の作成以外の時間を生成AIでどこまで圧縮できるかを模索しています。\n' + '今回はAzureのサービスを組み合わせてプロジェクト資料のアブストラクトや検索を支援するbotを業務利用したので、その事例を紹介したいと思います。'
  },
  twitter: ''
};
var speakers = [nakamichi127, takemura, max, yoshida, mori, mito];
// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/resources/2023/staff.js
var kakenavi = {
  key: 'kakenavi',
  name: '山城戸 祐樹',
  twitter: 'kakenavi'
};
var mu2in = {
  key: 'mu2in',
  name: 'mu2in',
  twitter: 'mu2in',
  github: 'mu2in'
};
var m_ando_japan = {
  key: 'm_ando_japan',
  name: '安藤 光昭',
  twitter: 'm_ando_japan',
  facebook: 'ando.mitsuaki',
  uri: 'https://bitriver.jp/'
};
var nanarichi = {
  key: '7richi',
  name: '田中 靖也',
  twitter: '7richi',
  github: 'yasu7ri',
  facebook: 'yasu7ri'
};
var isabasi1484 = {
  key: 'isabasi1484',
  name: '石橋 伸介',
  twitter: 'isabisi1484',
  github: 'isabisi1484'
};
var nishimotz = {
  key: '24motz',
  name: '西本 卓也',
  twitter: '24motz',
  facebook: 'takuya.nishimoto',
  uri: 'https://shuaruta.com/'
};
var mmorito = {
  key: 'mmorito',
  name: 'mmorito',
  title: '副実行委員長',
  twitter: 'mmorito_0318'
};
var hiroyuki = {
  key: 'hiroyuki',
  name: '前田 浩幸',
  twitter: 'hiroyukimaeda_3'
};
var naoyuki = {
  key: 'naoyuki',
  name: '濱田 直之',
  title: '実行委員長'
};
var mosugi = {
  key: 'mosugi',
  name: 'Masaki Osugi'
};
var staff_yoshida = {
  key: 'yoshida',
  name: '吉田 豪'
};
var yamamoto = {
  key: 'yamamoto',
  name: '山本 直輝',
  twitter: 'ymnk4919',
  github: 'mtbk4919naoki',
  facebook: 'ymnk4919'
};
var ozaki = {
  key: 'ozaki',
  name: '尾崎 徳生',
  twitter: 'ozk009',
  github: 'ozk009',
  facebook: 'norio.ozaki.711'
};
var staff = [naoyuki, mmorito, nishimotz, isabasi1484, kakenavi, m_ando_japan, nanarichi, mu2in, // mosugi,
hiroyuki, staff_yoshida, yamamoto, ozaki];
// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/resources/2023/sponsors.js
var ulsystems = {
  name: 'ウルシステムズ株式会社',
  key: 'ulsystems',
  url: 'https://www.ulsystems.co.jp/',
  banner: '/img/2023/ulsystems.png',
  height: 200
};
var shuaruta = {
  name: '株式会社シュアルタ',
  key: 'shuaruta',
  url: 'https://shuaruta.com/',
  banner: '/img/2023/shuaruta.svg',
  height: 120
};
var future_life_partners = {
  name: 'Future Life Partners 合同会社',
  key: 'future_life_partners',
  url: 'https://future-life-partners.com/',
  banner: '/img/2023/futurelifepartners.png',
  height: 250
};
var hmcn = {
  name: '特定非営利活動法人HMCN',
  key: 'hmcn',
  url: '',
  banner: '/img/2023/hmcn.png',
  height: 120
};
var nextvision = {
  name: '株式会社ネクストビジョン',
  key: 'nextvision',
  url: 'https://www.nextvision.co.jp/',
  banner: '/img/2023/nextvision.png',
  height: 120
};
var cybozu = {
  name: 'サイボウズ株式会社',
  key: 'cyboz',
  url: 'https://cybozu.co.jp/',
  banner: '/img/2023/cybozu.png',
  height: 200
};
var subthread = {
  name: '株式会社サブスレッド',
  key: 'subthread',
  url: 'https://www.subthread.co.jp/',
  banner: '/img/2023/subthread.png',
  height: 200
};
var bitriver = {
  name: 'ビットリバー株式会社',
  key: 'bitriver',
  url: 'https://bitriver.jp',
  banner: '/img/2023/bitriver.png',
  height: 200
};
var eventHandler = {
  name: '株式会社イベントハンドラ',
  key: 'eventHandler',
  url: 'https://eventhandler.jp/',
  banner: '/img/2023/eventhandler.png',
  height: 120
};
var platinum = [ulsystems, future_life_partners, subthread, bitriver];
var gold = [cybozu];
var silver = [shuaruta, hmcn, nextvision];
var supporter = [eventHandler];
var sponsors = {
  platinum: platinum,
  gold: gold,
  silver: silver,
  supporter: supporter
};
// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/resources/2023/index.js
/* unused concated harmony import event2013 */
/* unused concated harmony import event2014 */
/* unused concated harmony import event2015 */
/* unused concated harmony import event2016 */
/* unused concated harmony import event2017 */
/* unused concated harmony import event2018 */
/* unused concated harmony import event2019 */
/* unused concated harmony import event2020 */
/* unused concated harmony import event2022 */
/* unused concated harmony import event2023 */
/* unused concated harmony import seminarList */
/* unused concated harmony import primary */
/* unused concated harmony import accent */
/* unused concated harmony import color */
/* unused concated harmony import nakamichi127 */
/* unused concated harmony import takemura */
/* unused concated harmony import max */
/* unused concated harmony import yoshida */
/* unused concated harmony import mori */
/* unused concated harmony import mito */
/* concated harmony reexport speakers */__webpack_require__.d(__webpack_exports__, "a", function() { return speakers; });
/* concated harmony reexport staff */__webpack_require__.d(__webpack_exports__, "c", function() { return staff; });
/* unused concated harmony import ulsystems */
/* unused concated harmony import shuaruta */
/* unused concated harmony import future_life_partners */
/* unused concated harmony import hmcn */
/* unused concated harmony import nextvision */
/* unused concated harmony import cybozu */
/* unused concated harmony import subthread */
/* unused concated harmony import bitriver */
/* unused concated harmony import eventHandler */
/* unused concated harmony import platinum */
/* unused concated harmony import gold */
/* unused concated harmony import silver */
/* unused concated harmony import supporter */
/* concated harmony reexport sponsors */__webpack_require__.d(__webpack_exports__, "b", function() { return sponsors; });






/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)(false);
// Module
exports.push([module.i, ".container {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -ms-flex-pack: center;\n        justify-content: center;\n}\n\n.item {\n    -ms-flex-item-align: center;\n        align-self: center;\n\n    background-color: #fffafa;\n    margin: 16px;\n    padding: 16px;\n    max-width: 600px;\n}\n\n.title {\n    margin: 0;\n    padding: 0;\n}\n\n.description {\n    line-height: 1.6;\n}\n\n.profile {\n    line-height: 1.6;\n    font-size: smaller;\n}\n\n.item img {\n    float: right;\n    padding: 0 16px 8px;\n    width: 200px;\n    height: 200px;\n}\n.furi {\n    display: block;\n    font-size: smaller;\n}\n.name {\n    margin: 0;\n    padding: 0;\n}\n.company {\n    display: block;\n    font-size: larger;\n}\n\n@media screen and (min-width: 480px) {\n    .item {\n        margin: 20px;\n    }\n}\n", ""]);



/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(29);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(55)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(28);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(26);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("@material/react-top-app-bar");

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Imports
// Plugins
var plugins = [{
  location: "../node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "../node_modules/react-static-plugin-sass",
  plugins: [],
  hooks: {}
}, {
  location: "../node_modules/react-static-plugin-styled-components",
  plugins: [],
  hooks: {}
}, {
  location: "..",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("C:\\Users\\NaoyukiHamada\\Documents\\Source\\osh-web.github.com\\node_modules\\react-static\\lib\\browser");

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_NaoyukiHamada_Documents_Source_osh_web_github_com_node_modules_react_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var C_Users_NaoyukiHamada_Documents_Source_osh_web_github_com_node_modules_react_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_Users_NaoyukiHamada_Documents_Source_osh_web_github_com_node_modules_react_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__);






















Object(C_Users_NaoyukiHamada_Documents_Source_osh_web_github_com_node_modules_react_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = C_Users_NaoyukiHamada_Documents_Source_osh_web_github_com_node_modules_react_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../node_modules/react-static/lib/browser/components/Default404",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 39, 7))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../node_modules/react-static/lib/browser/components/Default404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(39);
  },
  chunkName: function chunkName() {
    return "node_modules/react-static/lib/browser/components/Default404";
  }
}), universalOptions);
t_0.template = '../node_modules/react-static/lib/browser/components/Default404';
var t_1 = C_Users_NaoyukiHamada_Documents_Source_osh_web_github_com_node_modules_react_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/2018/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/2018/index */).then(__webpack_require__.bind(null, 44))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/2018/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(44);
  },
  chunkName: function chunkName() {
    return "src/pages/2018/index";
  }
}), universalOptions);
t_1.template = '../src/pages/2018/index.js';
var t_2 = C_Users_NaoyukiHamada_Documents_Source_osh_web_github_com_node_modules_react_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/2019/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/2019/index */).then(__webpack_require__.bind(null, 45))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/2019/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(45);
  },
  chunkName: function chunkName() {
    return "src/pages/2019/index";
  }
}), universalOptions);
t_2.template = '../src/pages/2019/index.js';
var t_3 = C_Users_NaoyukiHamada_Documents_Source_osh_web_github_com_node_modules_react_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/2020/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/2020/index */).then(__webpack_require__.bind(null, 46))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/2020/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(46);
  },
  chunkName: function chunkName() {
    return "src/pages/2020/index";
  }
}), universalOptions);
t_3.template = '../src/pages/2020/index.js';
var t_4 = C_Users_NaoyukiHamada_Documents_Source_osh_web_github_com_node_modules_react_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/2022/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/2022/index */).then(__webpack_require__.bind(null, 47))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/2022/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(47);
  },
  chunkName: function chunkName() {
    return "src/pages/2022/index";
  }
}), universalOptions);
t_4.template = '../src/pages/2022/index.js';
var t_5 = C_Users_NaoyukiHamada_Documents_Source_osh_web_github_com_node_modules_react_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/2023/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/2023/index */).then(__webpack_require__.bind(null, 40))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/2023/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(40);
  },
  chunkName: function chunkName() {
    return "src/pages/2023/index";
  }
}), universalOptions);
t_5.template = '../src/pages/2023/index.js';
var t_6 = C_Users_NaoyukiHamada_Documents_Source_osh_web_github_com_node_modules_react_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/2024/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/2024/index */).then(__webpack_require__.bind(null, 41))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/2024/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(41);
  },
  chunkName: function chunkName() {
    return "src/pages/2024/index";
  }
}), universalOptions);
t_6.template = '../src/pages/2024/index.js';
var t_7 = C_Users_NaoyukiHamada_Documents_Source_osh_web_github_com_node_modules_react_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/about.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/about */).then(__webpack_require__.bind(null, 42))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/about.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(42);
  },
  chunkName: function chunkName() {
    return "src/pages/about";
  }
}), universalOptions);
t_7.template = '../src/pages/about.js';
var t_8 = C_Users_NaoyukiHamada_Documents_Source_osh_web_github_com_node_modules_react_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/history.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/history */).then(__webpack_require__.bind(null, 43))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/history.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(43);
  },
  chunkName: function chunkName() {
    return "src/pages/history";
  }
}), universalOptions);
t_8.template = '../src/pages/history.js';
var t_9 = C_Users_NaoyukiHamada_Documents_Source_osh_web_github_com_node_modules_react_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/index */).then(__webpack_require__.bind(null, 48))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(48);
  },
  chunkName: function chunkName() {
    return "src/pages/index";
  }
}), universalOptions);
t_9.template = '../src/pages/index.js'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '../node_modules/react-static/lib/browser/components/Default404': t_0,
  '../src/pages/2018/index.js': t_1,
  '../src/pages/2019/index.js': t_2,
  '../src/pages/2020/index.js': t_3,
  '../src/pages/2022/index.js': t_4,
  '../src/pages/2023/index.js': t_5,
  '../src/pages/2024/index.js': t_6,
  '../src/pages/about.js': t_7,
  '../src/pages/history.js': t_8,
  '../src/pages/index.js': t_9
}); // Not Found Template

var notFoundTemplate = "../node_modules/react-static/lib/browser/components/Default404";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("C:\\Users\\NaoyukiHamada\\Documents\\Source\\osh-web.github.com\\node_modules\\react-static\\lib\\browser\\components\\Default404");

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _organisms_2023__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _resources_2023__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_organisms_2023__WEBPACK_IMPORTED_MODULE_2__[/* Hero */ "a"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_organisms_2023__WEBPACK_IMPORTED_MODULE_2__[/* Menu */ "b"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_organisms_2023__WEBPACK_IMPORTED_MODULE_2__[/* Speakers */ "c"], {
    speakers: _resources_2023__WEBPACK_IMPORTED_MODULE_3__[/* speakers */ "a"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_organisms_2023__WEBPACK_IMPORTED_MODULE_2__[/* Sponsors */ "d"], _resources_2023__WEBPACK_IMPORTED_MODULE_3__[/* sponsors */ "b"]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_organisms_2023__WEBPACK_IMPORTED_MODULE_2__[/* Staff */ "e"], {
    staff: _resources_2023__WEBPACK_IMPORTED_MODULE_3__[/* staff */ "c"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_1__["Head"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "\u30AA\u30FC\u30D7\u30F3\u30BB\u30DF\u30CA\u30FC2023@\u5E83\u5CF6")));
});

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _organisms_2023__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _resources_2023__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_organisms_2023__WEBPACK_IMPORTED_MODULE_2__[/* Hero */ "a"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_organisms_2023__WEBPACK_IMPORTED_MODULE_2__[/* Menu */ "b"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_organisms_2023__WEBPACK_IMPORTED_MODULE_2__[/* Speakers */ "c"], {
    speakers: _resources_2023__WEBPACK_IMPORTED_MODULE_3__[/* speakers */ "a"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_organisms_2023__WEBPACK_IMPORTED_MODULE_2__[/* Sponsors */ "d"], _resources_2023__WEBPACK_IMPORTED_MODULE_3__[/* sponsors */ "b"]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_organisms_2023__WEBPACK_IMPORTED_MODULE_2__[/* Staff */ "e"], {
    staff: _resources_2023__WEBPACK_IMPORTED_MODULE_3__[/* staff */ "c"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_1__["Head"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "\u30AA\u30FC\u30D7\u30F3\u30BB\u30DF\u30CA\u30FC2023@\u5E83\u5CF6")));
});

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_react_layout_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _material_react_layout_grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_react_layout_grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_react_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _material_react_typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_react_typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _organisms_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);





var p1 = "\n\u30AA\u30FC\u30D7\u30F3\u30BB\u30DF\u30CA\u30FC\u306F2003\u5E74\u3088\u308A\u4E2D\u56DB\u56FD\u5730\u57DF\u3067\u958B\u50AC\u3055\u308C\u3066\u3044\u308B\nIT\u6280\u8853\u8005\u5411\u3051\u306E\u975E\u55B6\u5229\u306E\u7121\u6599\u30BB\u30DF\u30CA\u30FC\u3067\u3059\u3002\n";
var p2 = "\n\u73FE\u5728\u306F\u9999\u5DDD\u770C\u3001\u5CA1\u5C71\u770C\u3001\u5FB3\u5CF6\u770C\u3001\u5E83\u5CF6\u770C\u3001\u611B\u5A9B\u770C\u3067\u958B\u50AC\u3055\u308C\u3066\u304A\u308A\u3001\n\u4F01\u753B\u3068\u904B\u55B6\u306F\u5404\u5730\u57DF\u306E\u6280\u8853\u7CFB\u30E6\u30FC\u30B6\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u306E\u30DC\u30E9\u30F3\u30C6\u30A3\u30A2\u306B\u3088\u3063\u3066\u884C\u308F\u308C\u3066\u3044\u307E\u3059\u3002\n";
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_1__["Head"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "\u521D\u3081\u3066\u306E\u65B9\u3078 - \u30AA\u30FC\u30D7\u30F3\u30BB\u30DF\u30CA\u30FC\u5E83\u5CF6")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_organisms_AppBar__WEBPACK_IMPORTED_MODULE_4__[/* AppBar */ "a"], {
    title: "\u521D\u3081\u3066\u306E\u65B9\u3078"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_layout_grid__WEBPACK_IMPORTED_MODULE_2__["Grid"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_layout_grid__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_layout_grid__WEBPACK_IMPORTED_MODULE_2__["Cell"], {
    columns: 6
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_typography__WEBPACK_IMPORTED_MODULE_3__["Headline3"], {
    tag: "h1"
  }, "\u30AA\u30FC\u30D7\u30F3\u30BB\u30DF\u30CA\u30FC\u3068\u306F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_typography__WEBPACK_IMPORTED_MODULE_3__["Body1"], null, p1, p2)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_layout_grid__WEBPACK_IMPORTED_MODULE_2__["Cell"], {
    columns: 6
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_typography__WEBPACK_IMPORTED_MODULE_3__["Headline3"], {
    tag: "h1"
  }, "\u30AA\u30FC\u30D7\u30F3\u30BB\u30DF\u30CA\u30FC\u5E83\u5CF6\u306B\u3064\u3044\u3066"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_typography__WEBPACK_IMPORTED_MODULE_3__["Body1"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u5E83\u5CF6\u3067\u306F\u6BCE\u5E742\u6708\u3054\u308D\u306B\u30AA\u30FC\u30D7\u30F3\u30BB\u30DF\u30CA\u30FC\u3092\u958B\u50AC\u3092\u3057\u3066\u3044\u307E\u3059\u3002 \u5B9F\u884C\u59D4\u54E1\u9577\u3092\u6BCE\u5E74\u4EA4\u4EE3\u3092\u3057\u3001\u904B\u55B6\u306E\u30CE\u30A6\u30CF\u30A6\u3092\u5F15\u304D\u7D99\u304E\u3001\u65B0\u305F\u306A\u5B9F\u884C\u59D4\u54E1\u4F1A\u3092\u6BCE\u5E74\u7ACB\u3061\u4E0A\u3052\u3066\u3044\u307E\u3059\u3002 \u5B9F\u884C\u59D4\u54E1\u4F1A\u3067\u306F\u3001IT\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u306B\u7A4D\u6975\u7684\u306B\u53C2\u52A0\u30B7\u3066\u3044\u308B\u4EBA\u3084\u3001\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u3092\u7ACB\u3061\u4E0A\u3052\u3066\u3044\u308B\u4EBA\u305F\u3061\u304C\u4E3B\u3068\u306A\u3063\u3066\u3044\u307E\u3059\u3002 \u305D\u306E\u305F\u3081\u3001\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u306E\u5E74\u306B\u4E00\u5EA6\u306E\u304A\u796D\u308A\u306E\u3088\u3046\u306A\u3082\u306E\u3068\u306A\u3063\u3066\u3044\u307E\u3059\u3002"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u5B9F\u884C\u59D4\u54E1\u4F1A\u3067\u306F\u3001\u4E00\u7DD2\u306B\u30A4\u30D9\u30F3\u30C8\u3092\u4F5C\u308A\u3042\u3052\u305F\u3044\u4EF2\u9593\u3092\u63A2\u3057\u3066\u3044\u307E\u3059\u3002 \u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u540C\u58EB\u306E\u7E4B\u304C\u308A\u306E\u5F37\u304F\u3057\u305F\u3044\u65B9\u3084\u3001\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u306E\u4E3B\u50AC\u8005\u3068\u4EF2\u826F\u304F\u3057\u305F\u3044\u65B9\u306B\u304A\u3059\u3059\u3081\u3067\u3059\u3002 \u53C2\u52A0\u3054\u5E0C\u671B\u306E\u65B9\u306F\u6C17\u8EFD\u306B\u3054\u9023\u7D61\u304F\u3060\u3055\u3044\u3002")))))));
});

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_react_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _material_react_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_react_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_react_layout_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _material_react_layout_grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_react_layout_grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_react_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _material_react_typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_react_typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _resources__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _organisms_AppBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);








var Seminar = function Seminar(_ref) {
  var name = _ref.name,
      theme = _ref.theme,
      url = _ref.url;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "mdc-elevation--z1",
    outlined: true,
    style: {
      margin: 4,
      padding: 16
    },
    onClick: function onClick() {
      return Object(_reach_router__WEBPACK_IMPORTED_MODULE_4__["navigate"])(url);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_typography__WEBPACK_IMPORTED_MODULE_3__["Headline1"], {
    style: {
      fontSize: 18,
      lineHeight: 1
    }
  }, theme), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_typography__WEBPACK_IMPORTED_MODULE_3__["Body1"], {
    style: {
      fontSize: 12
    }
  }, name));
};

var SeminerCell = function SeminerCell(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_layout_grid__WEBPACK_IMPORTED_MODULE_2__["Cell"], {
    columns: 4
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Seminar, props));
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_organisms_AppBar__WEBPACK_IMPORTED_MODULE_6__[/* AppBar */ "a"], {
    title: "\u904E\u53BB\u306E\u30A4\u30D9\u30F3\u30C8"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_layout_grid__WEBPACK_IMPORTED_MODULE_2__["Grid"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_layout_grid__WEBPACK_IMPORTED_MODULE_2__["Row"], null, _resources__WEBPACK_IMPORTED_MODULE_5__[/* seminarList */ "b"].map(SeminerCell))));
});

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(9);

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(13);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(14);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "grid-styled"
var external_grid_styled_ = __webpack_require__(15);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__(32);

// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/components/Box.js


function _templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  display: inline-block;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  ", " ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Box = external_styled_components_default()(external_grid_styled_["Box"])(_templateObject(), external_styled_system_["fontSize"], external_styled_system_["color"]);
/* harmony default export */ var components_Box = (Box);
var Grid = external_styled_components_default()(Box)(_templateObject2());
// EXTERNAL MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/resources/index.js + 3 modules
var resources = __webpack_require__(10);

// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/components/2018/Hero.js


function Hero_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  display: box;\n  margin: 10px;\n  padding: 12px 58px;\n  text-align: center;\n  background-color: ", ";\n  color: white;\n  font-size: 18px;\n  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.4);\n"]);

  Hero_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Hero_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  background-color: ", ";\n  align-items: left;\n  a {\n    color: white;\n  }\n"]);

  Hero_templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var primary = resources["a" /* color */].primary;
var Banner = external_styled_components_default()(Box)(Hero_templateObject(), primary);
var eventDate = '2018年2月24日(土)';

var Hero_EventDate = function EventDate() {
  return external_react_default.a.createElement("div", null, eventDate);
};

var mapUrl = 'https://goo.gl/maps/V6S6EQTARUE2';

var Hero_Place = function Place(props) {
  return external_react_default.a.createElement("div", props, external_react_default.a.createElement("a", {
    href: mapUrl
  }, "\u30B5\u30C6\u30E9\u30A4\u30C8\u30AD\u30E3\u30F3\u30D1\u30B9\u3072\u308D\u3057\u307E 501"));
};

var themeText = 'いまさらチームビルディング';

var Hero_EventTheme = function EventTheme() {
  return external_react_default.a.createElement("div", null, themeText);
};

var Hero_EventName = function EventName() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(Grid, null, "\u30AA\u30FC\u30D7\u30F3\u30BB\u30DF\u30CA\u30FC"), external_react_default.a.createElement(Grid, null, "2018@\u5E83\u5CF6"));
};

var Button = external_styled_components_default()(Grid)(Hero_templateObject2(), primary);

var Hero_EntryPageButton = function EntryPageButton() {
  return external_react_default.a.createElement("a", {
    href: "https://osh.connpass.com/event/69092/"
  }, external_react_default.a.createElement(Button, null, "\u7533\u3057\u8FBC\u307F\u30DA\u30FC\u30B8\u3078"));
};

/* harmony default export */ var Hero = (function () {
  return external_react_default.a.createElement(Banner, {
    px: [20, 25],
    py: [40, 120],
    color: "white"
  }, external_react_default.a.createElement(Box, {
    f: [5, 6]
  }, external_react_default.a.createElement(Hero_EventName, null)), external_react_default.a.createElement(Box, {
    f: [3, 5]
  }, external_react_default.a.createElement(Hero_EventTheme, null)), external_react_default.a.createElement(Box, {
    mt: 10,
    f: [5, 6]
  }, external_react_default.a.createElement(Hero_EventDate, null)), external_react_default.a.createElement(Box, {
    f: [3, 4]
  }, external_react_default.a.createElement(Hero_Place, {
    f: [4]
  })), external_react_default.a.createElement(external_grid_styled_["Flex"], {
    justify: "center",
    pt: 40
  }, external_react_default.a.createElement(Hero_EntryPageButton, null)));
});
// EXTERNAL MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/resources/color.js
var color = __webpack_require__(11);

// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/components/2018/H1.js


function H1_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  font-size: 30px;\n  margin: 20px;\n\n  color: ", ";\n  display: block;\n  text-align: center;\n  border: solid ", " 0px;\n  border-bottom-width: 1px;\n  font-weight: 100;\n"]);

  H1_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var H1 = external_styled_components_default.a.h1(H1_templateObject(), color["a" /* accent */], color["a" /* accent */]);
/* harmony default export */ var _2018_H1 = (H1);
// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/components/2018/H2.js


function H2_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  font-size: 20px;\n\n  color: ", ";\n  text-align: center;\n  font-weight: 100;\n"]);

  H2_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var H2 = external_styled_components_default.a.h2(H2_templateObject(), color["a" /* accent */]);
/* harmony default export */ var _2018_H2 = (H2);
// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/components/2018/index.js




// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/resources/2018/sponsors.js
var atlassian = {
  name: 'アトラシアン株式会社',
  key: 'atlassian',
  url: 'https://ja.atlassian.com/company',
  bannar: true
};
var orange = {
  name: '株式会社オレンジシステム広島',
  key: 'orange',
  url: 'http://www.orange.co.jp/',
  bannar: true
};
var subthread = {
  name: '株式会社サブスレッド',
  key: 'subthread',
  url: 'http://www.subthread.co.jp/',
  bannar: true
};
var cloudgarage = {
  name: 'CloudGarage',
  key: 'cloudgarage',
  url: 'https://cloudgarage.jp/',
  bannar: true
};
var platinum = [atlassian, orange, cloudgarage, subthread];
var bitriver = {
  name: 'ビットリバー株式会社',
  key: 'bitriver',
  url: 'https://bitriver.jp',
  bannar: true
};
var gold = [bitriver];
var nextvision = {
  name: '株式会社ネクストビジョン',
  key: 'nextvision',
  url: 'https://www.nextvision.co.jp/',
  bannar: true
};
var linkroad = {
  name: '株式会社リンクロード',
  key: 'linkroad',
  url: 'http://linkroad.biz/',
  bannar: true
};
var pmaj = {
  name: '日本プロジェクトマネジメント協会',
  key: 'pmaj',
  url: 'http://www.pmaj.or.jp/',
  bannar: true
};
var silver = [nextvision, pmaj, linkroad];
/* harmony default export */ var _2018_sponsors = ([].concat(platinum, gold, silver));
// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/resources/2018/speakers.js
var ryuzee = {
  furi: 'よしば りゅうたろう',
  name: '吉羽 龍太郎',
  twitter: 'ryuzee',
  key: 'ryuzee',
  blog: 'http://www.ryuzee.com/',
  title: ['株式会社アトラクタ 取締役最高技術責任者', 'アジャイルコーチ'],
  description: 'アジャイル開発、DevOps、クラウドコンピューティング、組織改革を中心としたコンサルティングやトレーニングを提供。野村総合研究所、Amazon Web Servicesなどを経て現職。認定スクラムプロフェショナル（CSP） / 認定スクラムマスター（CSM） / 認定スクラムプロダクトオーナー（CSPO）。 Microsoft MVP for Azure。 著書に『Amazon Web Services企業導入ガイド』（マイナビ）、『SCRUM BOOT CAMP THE BOOK』（翔泳社）、『サーバ／インフラエンジニア養成読本 DevOps編』『Chef実践入門』（技術評論社）、『CakePHPで学ぶ継続的インテグレーション』（インプレス）、訳書に『変革の軌跡』（技術評論社）、『ジョイ・インク』(翔泳社)、『カンバン仕事術』（オライリー・ジャパン）、『Software in 30 Days』（アスキー・メディアワークス）など。',
  company: {
    name: '株式会社アトラクタ',
    uri: 'https://www.attractor.co.jp/about/'
  },
  session: {
    name: 'Effective Team Building',
    description: 'ソフトウェア開発のコンサルティングを多数行ってきた経験上、プロジェクトやプロダクトを成功させるためには、よい要求とよいチームが必要です。 ダメな要求をよいチームに渡してもダメなものしかできません。よい要求をよくないチームに渡しても結果は芳しくありません。 本セッションでは、よいチームをどのようにして作っていくべきか、その方法を説明します。'
  }
};
var shoyoshi = {
  furi: 'よしはら しょうざぶろう',
  name: '吉原 庄三郎',
  key: 'shoyoshi',
  title: ['株式会社ウフル　デリバリーイノベーション本部 本部長'],
  description: 'ITアーキテクトとして数多くのミッションクリティカルシステムの再構築を手掛けた後、ITコンサルタントとして独立する。大手出版社などに予算獲得から要件定義までのプロジェクト立ち上げプロセスを導入したり、全社横断的なプロジェクト監査プロセスを導入する。その後、ITコンサルティングファームに移籍し、大手製造業の基幹システムの再構築を支援する。同ファームにアジャイル推進組織を立ち上げ、エンタープライズ領域におけるアジャイル開発の導入支援を行う。 著書に、「はじめての設計をやり抜くための本」（翔泳社）がある。',
  company: {
    name: '株式会社ウフル',
    uri: 'http://uhuru.co.jp/about/'
  },
  session: {
    name: '組織再生とアジャイル',
    description: 'アジャイルの考え方は企業の組織再生にも応用できます。組織を再生するには仕事のやり方（プロセス）を変更するだけでなく、そもそものマインドセットを変える必要がある。アジャイルの考え方を組織再生に適用した事例をご紹介します。'
  }
};
var ma2shita = {
  furi: 'まつした こうへい',
  name: '松下 享平',
  key: 'ma2shita',
  title: ['株式会社ソラコム　テクノロジー・エバンジェリスト　事業開発マネージャー'],
  description: '株式会社ソラコムの事業開発マネージャーとして主にデバイスの企画を担当しながら、エバンジェリストとして、SORACOMサービスを企業・開発者により理解、活用いただくための講演活動を担当。 90年代半ばの地方ISPの立ち上げをキャリアスタートとし、主にインターネットを取り扱ったシステムインテグレーターを経て、2000年よりぷらっとホーム株式会社にて、ネットワークインフラやEC事業を担当。 2015年からはIoTソリューションをリードし、メガクラウドベンダーとの協業や、サブギガ/BLEを用いたIoTシステム構築といった業界の先駆的なIoT導入事例に関わる。',
  company: {
    name: '株式会社ソラコム',
    uri: 'https://soracom.jp/share/company/'
  },
  session: {
    name: '疎結合で非同期なソラコムの開発スタイル',
    description: 'ます。お客様からのフィードバック元に新サービスや新機能の開発を行うソラコムの開発スタイルや、非同期組織の作り方、リーダーシップステートメントや組織の特徴についてご紹介します。'
  }
};
var seratch = {
  furi: 'せら かずひろ',
  name: '瀬良 和弘',
  key: 'seratch',
  twitter: 'seratch_ja',
  github: 'seratch',
  title: ['スマートニュース株式会社 ヴァイス・プレジデント エンジニアリング担当'],
  description: 'グローバル展開を目指すスタートアップ企業で VPoE として日々チームビルディングやエンジニア組織の構築に取り組んでいます。システムインテグレータ、エムスリー株式会社を経て現職。個人のエンジニアとしては Scala というプログラミング言語が好きで、いくつかの OSS プロジェクトを始めたり、コミュニティ活動を行ったりしています。最近の趣味は英語学習。',
  company: {
    name: 'スマートニュース株式会社',
    uri: 'http://about.smartnews.com/ja/about/'
  },
  session: {
    name: '自社サービス企業におけるエンジニアリングチームマネージメント',
    description: 'SI 業界を経た後、前職・現職と自社サービスを運営する企業でチームのチームメンバー・マネージャ両方の立場での経験をする中で、その喜びとその難しさに向き合ってきました。企業は生き物であり、特に独自のサービスを運営する企業は常に時代の変化に合わせて自分自身を変え続ける必要があります。このトークでは、私のエンジニアリングマネージャとしての経験を元に、個々人のキャリアと組織の成長の接点を長く持ち続けるために大事だと考えていることについてお話しいたします。'
  }
};
var tatsuo310 = {
  furi: 'さとう たつお',
  name: '佐藤 達男',
  key: 'tatsuo310',
  title: ['広島修道大学　経済科学部准教授'],
  description: 'SIerにて多くのシステム開発にプロジェクトマネジャーとして参画し、本社セクションの技術部長、プロジェクトマネジメント部長などを経て、2016年より現職。技術経営、アジャイル、UX/HCD、プロジェクトマネジメントなどの領域を複合的にカバーし、新たな価値創造型のマネジメントモデルの構築を目指している。Ph.D. ,MOT, PMP, CSPO, CSM',
  company: {
    name: '広島修道大学',
    uri: 'http://www.shudo-u.ac.jp/'
  },
  session: {
    name: 'マネジメントの歴史からみるチームビルディングの未来',
    description: '多くのエンジニアにとってチームとの関係性は重要なテーマだと思います。マネジメントのスタイルが変われば、チームのスタイルも変わります。本セッションではマネジメントの歴史を振り返りながら、これからのチームビルディングについて考えてます。'
  }
};
var mkiskt = {
  furi: 'むかい さきと',
  name: '向井 咲人',
  key: 'mkiskt',
  twitter: 'mki_skt',
  description: '広島経済大学を卒業後、東京のIT人材ベンチャー企業に営業として新卒入社。その後、広島のWEBベンチャー企業にフロントエンジニアとして参画。2017年3月からヤフー株式会社でフロントエンジニアとして活動中。東京で活動しながらも、広島の勉強会の立ち上げや登壇も積極的に行なっている。',
  company: {
    name: 'ヤフー株式会社',
    uri: 'http://docs.yahoo.co.jp/info/company/'
  },
  title: ['ヤフー株式会社　フロントエンジニア'],
  session: {
    name: '広島と東京を経験したエンジニアが考えるチームビルディング',
    description: '私はベンチャー企業と大企業を体験しました。ベンチャー企業の方は大企業が気になり、大企業の方はベンチャー企業が気になるかと思います。今回、私のセッションでは、両者の違いとそれを踏まえてチームメンバーとしてできることと、リーダーにお願いしたいことをお話しします。'
  }
};
var mao = {
  furi: 'あべ しんすけ',
  name: '阿部 信介',
  key: 'mao',
  title: ['株式会社リゾーム エンジニア'],
  description: 'パチンコ店向けの施設ハードウェア開発を行う会社のデータ分析アプリケーションの開発とサポートエンジニア、SES/客先常駐のソフトハウス、某通信教育大手システム子会社での社内システム開発を経て、商業施設向けのCRMや出店管理ソリューションを提供する現職。現職では、OEM開発チームの立て直し、新規サービス開発チームの立ち上げとリリース、自社パッケージ開発チームでの保守・カスタマイズ開発のテコ入れなどに携わっています。 前職在籍中にすくすくスクラム瀬戸内に出会い、「チーム」を仕事のテーマとして取り組むようになりました。今のチームと未来のチームをどう繋ぐか、を考えながら、チームと一緒に仕事をしています。 趣味は(業の深い)読書、囲碁、自重トレーニング、カポエイラ。',
  company: {
    name: '株式会社リゾーム',
    uri: 'https://www.rhizome-e.com/'
  },
  session: {
    name: 'プロジェクトXのないチームを目指したマネージャが取り組んだこと',
    description: 'マネージャが目立つのは有事だけで十分で、それもないのがベストです。どうしたら、プロジェクトXのようなことが起こらず、メンバーが活躍する姿が見えるだけのチームになっていくのか？そのことを考えながらチームに入って、いくつかの取り組みを続けてきました。 まだまだ道半ばではありますが、私のアプローチを振り返ってみたいと思います。'
  }
};
/* harmony default export */ var speakers = ([ryuzee, shoyoshi, ma2shita, seratch, tatsuo310, mkiskt]);
// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/containers/EventAbstract.js


function _templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n  border: solid 1px #fff;\n  border-left-width: 20px;\n  border-right-width: 20px;\n  box-sizing: border-box;\n  text-align: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function EventAbstract_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  display: flex;\n  border: solid 1px #fff;\n  border-left-width: 20px;\n  border-right-width: 20px;\n  box-sizing: border-box;\n  background-color: ", ";\n  color: white;\n  justify-content: center;\n  align-items: center;\n"]);

  EventAbstract_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function EventAbstract_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n"]);

  EventAbstract_templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var ResetList = external_styled_components_default.a.ul(EventAbstract_templateObject());

var EventAbstract_Speaker = function Speaker(_ref) {
  var name = _ref.name,
      company = _ref.company;
  return external_react_default.a.createElement("li", {
    key: name
  }, name, " (", external_react_default.a.createElement("a", {
    href: company.uri
  }, company.name), ")");
};

var EventAbstract_Speakers = external_react_default.a.createElement(ResetList, null, speakers.map(EventAbstract_Speaker));

var EventAbstract_Sponsor = function Sponsor(_ref2) {
  var name = _ref2.name,
      url = _ref2.url;
  return external_react_default.a.createElement("li", {
    key: name
  }, external_react_default.a.createElement("a", {
    href: url
  }, name));
};

var Sponsors = external_react_default.a.createElement(ResetList, null, _2018_sponsors.map(EventAbstract_Sponsor));
var AbstractTtile = external_styled_components_default()(external_grid_styled_["Half"])(EventAbstract_templateObject2(), color["a" /* accent */]);
var AbstractValue = external_styled_components_default()(external_grid_styled_["Half"])(_templateObject3());
var eventInfo = [{
  title: 'イベント名',
  value: 'オープンセミナー2018@広島'
}, {
  title: '開催日時',
  value: '2018年2月24日(土) 9:30 - 18:00 '
}, {
  title: 'テーマ',
  value: 'いまさらチームビルディング'
}, {
  title: '出演(順不同)(敬称略)',
  value: EventAbstract_Speakers
}, {
  title: '会場',
  value: [external_react_default.a.createElement("div", null, "\u5E83\u5CF6\u770C\u5E83\u5CF6\u5E02\u4E2D\u533A\u5927\u624B\u753A1-5-3"), external_react_default.a.createElement("div", null, "\u30B5\u30C6\u30E9\u30A4\u30C8\u30AD\u30E3\u30F3\u30D1\u30B9\u3072\u308D\u3057\u307E 501\u8B1B\u7FA9\u5BA4")]
}, {
  title: '協賛',
  value: Sponsors
}, {
  title: '参加費',
  value: '無料'
}, {
  title: '懇親会',
  value: 'Procida プロチダ DINING & PARTY'
}, {
  title: '主催',
  value: 'オープンセミナー2018@広島 実行委員会'
}, {
  title: 'URL',
  value: 'http://osh-web.github.io'
}];

var EventAbstract_EventAbstract = function EventAbstract() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(_2018_H1, null, "\u30A4\u30D9\u30F3\u30C8\u6982\u8981"), external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_grid_styled_["Flex"], {
    justify: "center"
  }, external_react_default.a.createElement(external_grid_styled_["Half"], {
    px: 10
  }, external_react_default.a.createElement("p", null, "\u4F55\u3089\u304B\u306E\u76EE\u6A19\u3092\u9054\u6210\u3059\u308B\u305F\u3081\u306B\u8907\u6570\u4EBA\u3067\u884C\u52D5\u3092\u5171\u306B\u3057\u3066\u3044\u308B\u65B9\u304C\u5C11\u306A\u304F\u306A\u3044\u306F\u305A\u3067\u3059\u3002 \u3057\u304B\u3057\u3001\u672C\u5F53\u306B\u305D\u306E\u96C6\u56E3\u306F\u30C1\u30FC\u30E0\u306B\u306A\u3063\u3066\u3044\u308B\u306E\u3067\u3057\u3087\u3046\u304B\u3002"), external_react_default.a.createElement("p", null, "\u305F\u3060\u5358\u306B\u4F55\u4EBA\u304B\u306E\u4EBA\u304C\u96C6\u307E\u308A\u4F5C\u696D\u3092\u884C\u3063\u3066\u3044\u308B\u3060\u3051\u306E\u72B6\u614B\u306B\u306A\u3063\u3066\u306F\u3044\u307E\u305B\u3093\u304B\u3002 \u76EE\u7684\u3092\u771F\u306B\u5171\u6709\u3057\u5171\u611F\u3057\u304A\u4E92\u3044\u3092\u5C0A\u91CD\u3057\u8A00\u3044\u5408\u3048\u308B\u3001\uFF11+\uFF11\u304C\uFF13\u306B\u306A\u308B\u69D8\u306A\u30C1\u30FC\u30E0\u306B\u306A\u3063\u3066\u3044\u308B\u306E\u3067\u3057\u3087\u3046\u304B\u3002"), external_react_default.a.createElement("p", null, "\u3053\u306E\u6A5F\u4F1A\u306B\u672C\u5F53\u306E\u30C1\u30FC\u30E0\u306B\u306A\u308B\u305F\u3081\u306E\u30C1\u30FC\u30E0\u30D3\u30EB\u30C7\u30A3\u30F3\u30B0\u306B\u95A2\u3057\u3066\u518D\u8003\u3057\u3066\u307F\u307E\u305B\u3093\u304B\uFF1F"))), external_react_default.a.createElement(_2018_H2, null, "\u30A4\u30D9\u30F3\u30C8\u60C5\u5831"), external_react_default.a.createElement(external_grid_styled_["Flex"], {
    wrap: true
  }, eventInfo.map(function (_ref3) {
    var title = _ref3.title,
        value = _ref3.value;
    return [external_react_default.a.createElement(AbstractTtile, {
      p: 1
    }, title), external_react_default.a.createElement(AbstractValue, {
      p: 1
    }, value)];
  }))));
};

/* harmony default export */ var containers_EventAbstract = (EventAbstract_EventAbstract);
// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(18);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/containers/SponsorBannars.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var SponsorBannars_maxWidth = 480;

var SponsorBannars_Bannar = function Bannar(_ref) {
  var url = _ref.url,
      imagePath = _ref.imagePath,
      name = _ref.name,
      key = _ref.key,
      width = _ref.width,
      maxWidth = _ref.maxWidth;
  return external_react_default.a.createElement("a", {
    href: url,
    key: key,
    style: {
      width: width,
      maxWidth: maxWidth
    }
  }, external_react_default.a.createElement("img", {
    src: imagePath,
    alt: name,
    style: {
      width: '100%'
    }
  }));
};

var keyToImagePath = function keyToImagePath(sponsor) {
  var key = sponsor.key;
  return _objectSpread({}, sponsor, {
    imagePath: "/img/2018/".concat(key, ".png")
  });
};

var platinumToBannar = function platinumToBannar(sponsor) {
  return _objectSpread({}, sponsor, {
    width: '100%'
  });
};

var goldToBannar = function goldToBannar(sponsor) {
  return _objectSpread({}, sponsor, {
    width: '50%'
  });
};

var silverToBannar = function silverToBannar(sponsor) {
  return _objectSpread({}, sponsor, {
    width: '33%'
  });
};

var filterBannar = function filterBannar(_ref2) {
  var bannar = _ref2.bannar;
  return bannar;
};

var platinumBannar = platinum.filter(filterBannar).map(keyToImagePath).map(platinumToBannar);
var goldBannar = gold.filter(filterBannar).map(keyToImagePath).map(goldToBannar);
var silverBannar = silver.filter(filterBannar).map(keyToImagePath).map(silverToBannar);
var sponsorGroups = [platinumBannar, goldBannar, silverBannar];

var SponsorBannars_SponsorBannars = function SponsorBannars() {
  return external_react_default.a.createElement(external_grid_styled_["Flex"], {
    wrap: true,
    justify: "center"
  }, external_react_default.a.createElement("div", {
    style: {
      maxWidth: SponsorBannars_maxWidth
    }
  }, sponsorGroups.map(function (sponsors) {
    return external_react_default.a.createElement(external_grid_styled_["Flex"], {
      justify: "center",
      wrap: true,
      m: 20,
      style: {
        maxWidth: SponsorBannars_maxWidth,
        alignItems: 'center'
      }
    }, sponsors.map(SponsorBannars_Bannar));
  })));
};

/* harmony default export */ var containers_SponsorBannars = (SponsorBannars_SponsorBannars);
// EXTERNAL MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/containers/2018/Speakers.css
var _2018_Speakers = __webpack_require__(25);
var Speakers_default = /*#__PURE__*/__webpack_require__.n(_2018_Speakers);

// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/containers/2018/Speakers.js





var Speakers_Speakers = function Speakers() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(_2018_H1, null, "\u30BB\u30C3\u30B7\u30E7\u30F3"), external_react_default.a.createElement("div", {
    className: Speakers_default.a.container
  }, speakers.map(function (_ref) {
    var session = _ref.session,
        key = _ref.key,
        furi = _ref.furi,
        company = _ref.company,
        name = _ref.name,
        description = _ref.description,
        title = _ref.title;
    return external_react_default.a.createElement("div", {
      key: key,
      className: Speakers_default.a.item
    }, external_react_default.a.createElement("h2", {
      className: Speakers_default.a.title
    }, session.name), external_react_default.a.createElement("p", {
      className: Speakers_default.a.description
    }, session.description), external_react_default.a.createElement("span", {
      className: Speakers_default.a.furi
    }, furi), external_react_default.a.createElement("h3", {
      className: Speakers_default.a.name
    }, name), external_react_default.a.createElement("div", null, external_react_default.a.createElement("img", {
      src: "/img/2018/".concat(key, ".png"),
      alt: "".concat(name)
    }), external_react_default.a.createElement("p", {
      className: Speakers_default.a.profile
    }, description), title));
  })));
};

/* harmony default export */ var containers_2018_Speakers = (Speakers_Speakers);
// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/pages/2018/index.js






/* harmony default export */ var _2018 = __webpack_exports__["default"] = (function () {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_react_static_["Head"], null, external_react_default.a.createElement("title", null, "\u30AA\u30FC\u30D7\u30F3\u30BB\u30DF\u30CA\u30FC2018@\u5E83\u5CF6")), external_react_default.a.createElement(Hero, null), external_react_default.a.createElement(containers_2018_Speakers, null), external_react_default.a.createElement(containers_EventAbstract, null), external_react_default.a.createElement(containers_SponsorBannars, null));
});

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(9);

// EXTERNAL MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/organisms/AppBar.js
var AppBar = __webpack_require__(12);

// EXTERNAL MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/organisms/Footer.js
var Footer = __webpack_require__(17);

// EXTERNAL MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/organisms/Menu.js
var Menu = __webpack_require__(22);

// EXTERNAL MODULE: external "@material/react-button"
var react_button_ = __webpack_require__(3);
var react_button_default = /*#__PURE__*/__webpack_require__.n(react_button_);

// EXTERNAL MODULE: external "@material/react-typography"
var react_typography_ = __webpack_require__(2);

// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/organisms/2019/Hero.js



var Hero_Hero = function Hero() {
  return external_react_default.a.createElement(react_typography_["Headline1"], {
    style: headerStyle,
    tag: "h1"
  }, "\u30AA\u30FC\u30D7\u30F3\u30BB\u30DF\u30CA\u30FC2019@\u5E83\u5CF6", external_react_default.a.createElement("br", null), "\u300C\u5B66\u3073\u304B\u305F Hacks\u300D", external_react_default.a.createElement("br", null), "2019\u5E742\u670823\u65E5(\u571F) 10:00 (9:30\u53D7\u4ED8\u958B\u59CB)", external_react_default.a.createElement("br", null), external_react_default.a.createElement(react_button_default.a, {
    style: {
      color: 'white'
    },
    href: "https://www.google.com/maps?ll=34.394533,132.45547&z=16&t=m&hl=ja&gl=US&mapclient=embed&q=%E3%80%92730-0051+%E5%BA%83%E5%B3%B6%E7%9C%8C%E5%BA%83%E5%B3%B6%E5%B8%82%E4%B8%AD%E5%8C%BA%E5%A4%A7%E6%89%8B%E7%94%BA%EF%BC%91%E4%B8%81%E7%9B%AE%EF%BC%95%E2%88%92%EF%BC%93"
  }, "\u30B5\u30C6\u30E9\u30A4\u30C8\u30AD\u30E3\u30F3\u30D1\u30B9\u3072\u308D\u3057\u307E 501,502\u8B1B\u7FA9\u5BA4"), external_react_default.a.createElement("br", null), external_react_default.a.createElement(Hero_MainButton, null));
};
var headerStyle = {
  margin: 0,
  backgroundColor: '#994a29',
  color: '#fff',
  fontSize: '22px',
  padding: '20% 0',
  lineHeight: 1.8,
  textAlign: 'center'
};

var Hero_MainButton = function MainButton() {
  return external_react_default.a.createElement(react_button_default.a, {
    href: "https://osh.connpass.com/event/101380/",
    raised: true,
    style: {
      padding: '20px 40px',
      margin: '20px 10px'
    }
  }, "\u53C2\u52A0\u7533\u3057\u8FBC\u307F\u3059\u308B");
};
// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(6);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// EXTERNAL MODULE: external "@material/react-card"
var react_card_ = __webpack_require__(4);
var react_card_default = /*#__PURE__*/__webpack_require__.n(react_card_);

// EXTERNAL MODULE: external "@material/react-layout-grid"
var react_layout_grid_ = __webpack_require__(1);

// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/organisms/2019/Speakers.js







var Speakers_Speaker = function Speaker(_ref) {
  var name = _ref.name,
      furi = _ref.furi,
      description = _ref.description,
      id = _ref.id,
      title = _ref.title,
      memberships = _ref.memberships;
  return external_react_default.a.createElement(react_card_default.a, {
    className: "mdc-elevation--z1",
    outlined: true
  }, external_react_default.a.createElement(react_card_["CardMedia"], {
    imageUrl: "/img/2019/".concat(id, ".jpg"),
    square: true
  }), external_react_default.a.createElement("div", {
    style: {
      padding: '0 16px'
    }
  }, external_react_default.a.createElement(react_typography_["Headline1"], {
    style: {
      fontSize: 18,
      lineHeight: 1
    }
  }, "\u30BB\u30C3\u30B7\u30E7\u30F3\u5185\u5BB9 TBD"), external_react_default.a.createElement(react_typography_["Caption"], {
    style: {
      fontSize: 14,
      margin: 0,
      padding: 0
    }
  }, furi), external_react_default.a.createElement(react_typography_["Headline1"], {
    style: {
      fontSize: 18,
      lineHeight: 1,
      margin: 0
    }
  }, name), external_react_default.a.createElement("div", {
    style: {
      fontSize: 16,
      lineHeight: 1,
      margin: 0,
      padding: '8px 0'
    }
  }, memberships.map(function (_ref2) {
    var uri = _ref2.uri,
        name = _ref2.name;
    return external_react_default.a.createElement(react_button_["Button"], {
      href: uri,
      style: {
        height: 32,
        padding: '2px 0'
      }
    }, name);
  })), external_react_default.a.createElement(react_typography_["Body2"], null, description), external_react_default.a.createElement(react_typography_["Body2"], null, title.reduce(function (acc, elem) {
    return external_react_default.a.createElement("span", null, acc, external_react_default.a.createElement("br", null), elem);
  }, []))));
};

var Speakers_Speakers = function Speakers(_ref3) {
  var speakers = _ref3.speakers;
  return external_react_default.a.createElement(react_layout_grid_["Grid"], null, external_react_default.a.createElement(react_layout_grid_["Row"], null, external_react_default.a.createElement(react_layout_grid_["Cell"], null, external_react_default.a.createElement(react_typography_["Headline2"], null, "Sessions"))), external_react_default.a.createElement(react_layout_grid_["Row"], null, speakers.map(function (speaker) {
    return external_react_default.a.createElement(react_layout_grid_["Cell"], {
      columns: 4,
      key: speaker.key
    }, external_react_default.a.createElement(Speakers_Speaker, extends_default()({}, speaker, {
      id: speaker.key
    })));
  })));
};
// EXTERNAL MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/resources/index.js + 3 modules
var resources = __webpack_require__(10);

// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/organisms/2019/Staff.js







var Staff_SNS = function SNS(_ref) {
  var uri = _ref.uri,
      service = _ref.service;
  return external_react_default.a.createElement("a", {
    href: uri
  }, external_react_default.a.createElement("i", {
    className: "fab fa-".concat(service),
    style: {
      margin: '0 0 0 6px',
      color: resources["a" /* color */].primary
    }
  }));
};

var Twitter = function Twitter(_ref2) {
  var id = _ref2.id;
  return Staff_SNS({
    service: 'twitter',
    uri: "https://twitter.com/".concat(id)
  });
};

var GitHub = function GitHub(_ref3) {
  var id = _ref3.id;
  return Staff_SNS({
    service: 'github',
    uri: "https://github.com/".concat(id)
  });
};

var Facebook = function Facebook(_ref4) {
  var id = _ref4.id;
  return Staff_SNS({
    service: 'facebook',
    uri: "https://www.facebook.com/".concat(id)
  });
};

var Staff_Member = function Member(_ref5) {
  var name = _ref5.name,
      title = _ref5.title,
      twitter = _ref5.twitter,
      github = _ref5.github,
      facebook = _ref5.facebook;
  return external_react_default.a.createElement(react_card_default.a, null, external_react_default.a.createElement("div", {
    style: {
      padding: '0 16px'
    }
  }, external_react_default.a.createElement(react_typography_["Headline1"], {
    style: {
      fontSize: 18,
      lineHeight: 1
    }
  }, title ? external_react_default.a.createElement(react_typography_["Caption"], null, title, external_react_default.a.createElement("br", null)) : '', name, twitter ? external_react_default.a.createElement(Twitter, {
    id: twitter
  }) : '', github ? external_react_default.a.createElement(GitHub, {
    id: github
  }) : '', facebook ? external_react_default.a.createElement(Facebook, {
    id: facebook
  }) : '')));
};

var Staff_Staff = function Staff(_ref6) {
  var staff = _ref6.staff;
  return external_react_default.a.createElement(react_layout_grid_["Grid"], null, external_react_default.a.createElement(react_layout_grid_["Row"], null, external_react_default.a.createElement(react_layout_grid_["Cell"], null, external_react_default.a.createElement(react_typography_["Headline2"], null, "Staff"))), external_react_default.a.createElement(react_layout_grid_["Row"], null, staff.map(function (member) {
    return external_react_default.a.createElement(react_layout_grid_["Cell"], {
      columns: 4,
      key: member.key
    }, external_react_default.a.createElement(Staff_Member, extends_default()({}, member, {
      id: member.key
    })));
  })));
};
// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(18);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/objectWithoutProperties"
var objectWithoutProperties_ = __webpack_require__(20);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties_);

// EXTERNAL MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/atoms/SponsorBanner.js
var SponsorBanner = __webpack_require__(5);

// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/organisms/2019/Sponsors.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var style = {
  margin: '5% 10%',
  boxSizing: 'border-box'
};
function Sponsors(_ref) {
  var platinum = _ref.platinum,
      gold = _ref.gold,
      silver = _ref.silver;
  return external_react_default.a.createElement(react_layout_grid_["Grid"], null, external_react_default.a.createElement(react_layout_grid_["Row"], null, external_react_default.a.createElement(react_layout_grid_["Cell"], null, external_react_default.a.createElement(react_typography_["Headline2"], null, "Sponsors"))), external_react_default.a.createElement(react_layout_grid_["Row"], null, platinum.map(function (sponsor) {
    return external_react_default.a.createElement(react_layout_grid_["Cell"], {
      columns: 8,
      style: style
    }, Object(SponsorBanner["a" /* SponsorBanner */])(toSponsor(sponsor)));
  })), external_react_default.a.createElement(react_layout_grid_["Row"], null, gold.map(function (sponsor) {
    return external_react_default.a.createElement(react_layout_grid_["Cell"], {
      columns: 3,
      desktopColumns: 6,
      style: style
    }, Object(SponsorBanner["a" /* SponsorBanner */])(toSponsor(sponsor)));
  })), external_react_default.a.createElement(react_layout_grid_["Row"], null, silver.map(function (sponsor) {
    return external_react_default.a.createElement(react_layout_grid_["Cell"], {
      columns: 2,
      desktopColumns: 3,
      style: style
    }, Object(SponsorBanner["a" /* SponsorBanner */])(toSponsor(sponsor)));
  })));
}

function toSponsor(_ref2) {
  var banner = _ref2.banner,
      url = _ref2.url,
      args = objectWithoutProperties_default()(_ref2, ["banner", "url"]);

  return _objectSpread({
    src: banner,
    href: url
  }, args);
}
// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/organisms/2019/index.js







// EXTERNAL MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/resources/seminarList.js
var seminarList = __webpack_require__(21);

// EXTERNAL MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/resources/color.js
var color = __webpack_require__(11);

// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/resources/2019/speakers.js
var cero_t = {
  furi: 'たにもと しん',
  name: '谷本 心',
  key: 'cero_t',
  title: ['Acroquest Technology株式会社 ', '日本Javaユーザーグループ'],
  description: 'Acroquest Technology株式会社にて、アーキテクトやコンサルタントの仕事に従事。コミュニティ活動として、日本Javaユーザーグループの幹事や、関西Javaエンジニアの会の立ち上げを務めるほか、JavaOneやSpringOneなど国内外で多数登壇し、2018年にJavaチャンピオンとして任命される。著書に「Java本格入門」、監訳書に「Javaパフォーマンス」好きなアーティストはBABYMETALデス！',
  memberships: [{
    name: 'Acroquest Technology株式会社',
    uri: 'https://www.acroquest.co.jp/'
  }, {
    name: '日本Javaユーザーグループ',
    uri: 'http://www.java-users.jp/'
  }]
};
var kkd = {
  furi: 'Kakeda Takeshi',
  name: '懸田 剛',
  key: 'kkd',
  description: 'プロフィール 東京で15年間ソフトウェア開発に携わり、特に日本のアジャイル創成期から自身での研究・実践やコミュニティ活動に携わり、多数の記事執筆や講演を行う。2010年より愛媛に拠点を移す。ここ数年は「組織」だけでなく「個人」に目を向け始め、個のウェルネス・ウェルビーングを実現することが、チーム・組織・社会のウェルネス・ウェルビーングを実現するための近道ではないかとの仮説を立てている。思いついたアイデアを試す、読書、農作業、雑談、ランニング、家族団らんをこよなく愛する２男１女の父。',
  memberships: [],
  title: []
};
var piacere = {
  furi: 'もり まさかず',
  name: '森 正和',
  key: 'piacere',
  title: ['カラビナテクノロジー株式会社 CTO 常務取締役', 'Elixirコミュニティ「fukuoka.ex」代表', '技術顧問（福岡企業3社）／IT企業経営（東京2社）', 'enPiT Pro（社会人向け実践型人材育成）パーソナリティ、教材制作', 'AIジョブカレ福岡代表、講師', 'Elixirプログラマ／重力プログラマ／AI・MLデータサイエンティスト'],
  description: " \u5C0F4\u3067\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u3092\u59CB\u3081\u3001\u5C0F6\u3067Z80\u30A2\u30BB\u30F3\u30D6\u30E9\u7FD2\u5F97\u3001\u5927\u5B66\u3067VM\u30FB\u30DE\u30FC\u30AF\u30ED\u30AB\u30FC\u30CD\u30EBOS\u30FB\u30B3\u30F3\u30D1\u30A4\u30E9\u3092\u958B\u767A\u3002\n\u5927\u624BSIer\u3067\u306E\u30EA\u30FC\u30C9\u30D7\u30ED\u30B0\u30E9\u30DE\u30FBPL\u3001OSS\u30D9\u30F3\u30C1\u30E3\u30FC\u4F01\u696D\u3067\u306EPM\u30FB\u4E8B\u696D\u90E8\u9577\u3092\u7D4C\u9A13\u3057\u305F\u5F8C\u3001\u72EC\u7ACB\u3002\n\u30DE\u30FC\u30B1\u30C6\u30A3\u30F3\u30B0\u30D7\u30ED\u30C0\u30AF\u30C8\u8CA9\u58F2\u3068\u3001\u81EA\u52D5\u30C8\u30EC\u30FC\u30C7\u30A3\u30F3\u30B0\u30B7\u30B9\u30C6\u30E0\u904B\u7528\u3092\u884C\u3044\u3064\u3064\u3001\u56FD\u5185\u6700\u5927\u624BSIer\u306E\u8D85\u5927\u898F\u6A21\u901A\u4FE1\u30A4\u30F3\u30D5\u30E9\u958B\u767A\u6848\u4EF6\u306EPMO\u30FB\u6027\u80FD\u7D71\u62EC\u3092\u7D4C\u3066\u30012016\u5E7410\u6708\u306B\u798F\u5CA1\u3078\u79FB\u4F4F\u3002\n\u798F\u5CA1\u3067\u306F\u3001200\u793E\u3092\u8D85\u3048\u308B\u5927\u898F\u6A21\u30DE\u30FC\u30B1\u30C6\u30A3\u30F3\u30B0SaaS\u3092\u4E8B\u696D\u5C55\u958B\u3057\u3001\u5148\u7AEFIT\u3092\u99C6\u4F7F\u3057\u305F\u5730\u5143\u4F01\u696D\u5411\u3051\u306E\u81EA\u793E\u30B5\u30FC\u30D3\u30B9\u5C55\u958B\u4E2D\u3002\n\u5148\u7AEFIT\u306F\u3001\u4E3B\u306B\u3001Elixir\u3067\u306E\u5206\u6563Web\u30B5\u30FC\u30D3\u30B9\u3001\u30C7\u30FC\u30BF\u30B5\u30A4\u30A8\u30F3\u30B9\u3001AI\u30FBML\u3001IoT\u3001\u91CF\u5B50\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u3092\u5C02\u9580\u9818\u57DF\u3068\u3059\u308B\u3002\n5\u3064\u306E\u6280\u8853\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\uFF08fukuoka.ex\u3001\u798F\u5CA1 \u7406\u5B66\u90E8\u3001IAI Fukuoka\u3001\u798F\u5CA1\u300C\u901A\u5E38\u306E3\u500D\u300D\u3001OpenQL\uFF09\u3082\u4E3B\u50AC\u3059\u308B\u3002\nAI\u5B66\u6821\u300CAI\u30B8\u30E7\u30D6\u30AB\u30EC\u300D\u798F\u5CA1\u4EE3\u8868\u3001\u6587\u79D1\u7701\u793E\u4F1A\u4EBA\u5411\u3051\u6559\u80B2PJ\u300CenPiT\u300D\u306E\u30D1\u30FC\u30BD\u30CA\u30EA\u30C6\u30A3\u3068\u6559\u6750\u5236\u4F5C\u3082\u52D9\u3081\u308B\u3002\n\u6700\u8FD1\u306F\u3001\u8907\u6570\u306E\u5E02\u3092\u8DE8\u3050\u6280\u8853\u30A2\u30C9\u30D0\u30A4\u30B6\u30FC\u3084\u3001\u5730\u65B9\u5275\u751F\u4E8B\u696D\u3092\u624B\u639B\u3051\u308B\u3002\n\u5F97\u610F\u6280\u306F\u3001\u672A\u6765\u4E88\u6E2C\u306B\u57FA\u3065\u304F\u30DE\u30FC\u30B1\u30C6\u30A3\u30F3\u30B0\u3068\u4E8B\u696D\u6226\u7565\u7ACB\u6848\u3001\u6027\u80FD\u8A2D\u8A08\u30FB\u6539\u5584\u3001\u305D\u308C\u3068\u3001\u30E9\u30A4\u30D6\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u3002\n  ",
  memberships: [{
    name: 'カラビナテクノロジー株式会社',
    uri: 'https://www.karabiner.tech/'
  }, {
    name: 'Elixirコミュニティ「fukuoka.ex」',
    uri: 'https://fukuokaex.fun/'
  }]
};
var twingo_b = {
  furi: 'ふじわら よしのり',
  name: '藤原 吉規',
  key: 'twingo_b',
  title: ['アマゾン ウェブ サービス ジャパン株式会社 ソリューション アーキテクト'],
  description: "\u5E83\u5CF6\u5DE5\u696D\u5927\u5B66\u5DE5\u5B66\u90E8\u30922000\u5E74\u306B\u5352\u696D\u5F8C\u3001SIer\u306B10\u5E74\u3001\u30D3\u30B8\u30CD\u30B9\u5411\u3051\u30C1\u30E3\u30C3\u30C8\u30B5\u30FC\u30D3\u30B9\u4E8B\u696D\u3092\u884C\u3046\u95A2\u897F\u306E\u30B9\u30BF\u30FC\u30C8\u30A2\u30C3\u30D7\u306B6\u5E74\u52E4\u52D9\u3002\u30B9\u30BF\u30FC\u30C8\u30A2\u30C3\u30D7\u5728\u7C4D\u6642\u306FAWS\u3092\u6700\u5927\u9650\u6D3B\u7528\u3057\u3001\u4E8B\u696D\u306E\u7ACB\u3061\u4E0A\u3052\u671F\u304B\u3089\u6210\u9577\u3092\u652F\u3048\u3066\u304D\u307E\u3057\u305F\u3002\u73FE\u5728\u306F\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3 \u30A2\u30FC\u30AD\u30C6\u30AF\u30C8\u3068\u3057\u3066\u3001AWS\u306E\u5404\u7A2E\u30B5\u30FC\u30D3\u30B9\u306E\u5229\u7528\u3092\u63A8\u9032\u3057\u3066\u3044\u307E\u3059\u3002",
  memberships: [{
    name: 'アマゾン ウェブ サービス ジャパン株式会社',
    uri: 'https://aws.amazon.com/jp/'
  }]
};
var mao_instantlife = {
  furi: 'あべ しんすけ',
  name: '阿部 信介',
  key: 'mao_instantlife',
  title: ['クラスメソッド株式会社 サーバーレス開発部マネージャ'],
  description: "\u30D1\u30C1\u30F3\u30B3\u5E97\u5411\u3051Win32\u30CD\u30A4\u30C6\u30A3\u30D6\u30A2\u30D7\u30EA\u306E\u958B\u767A\u3001\u6559\u80B2\u7CFB\u4F01\u696D\u306E\u30B7\u30B9\u30C6\u30E0\u5B50\u4F1A\u793E\u3067\u306E\u793E\u5185\u30B7\u30B9\u30C6\u30E0\u958B\u767A\u3001\u30B7\u30E7\u30C3\u30D4\u30F3\u30B0\u30BB\u30F3\u30BF\u30FC\u5411\u3051\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u306E\u958B\u767A\u30C1\u30FC\u30E0\u30DE\u30CD\u30FC\u30B8\u30E3\u306A\u3069\u3092\u7D4C\u3066\u73FE\u5728\u3002\u73FE\u8077\u3067\u306F\u30A8\u30F3\u30B8\u30CB\u30A2\u30EA\u30F3\u30B0\u30DE\u30CD\u30FC\u30B8\u30E3\u3068\u3057\u3066\u3001\n  \u5206\u6563\u53D7\u8A17\u30C1\u30FC\u30E0\u306E\u30DE\u30CD\u30B8\u30E1\u30F3\u30C8\u3092\u30D5\u30EB\u30EA\u30E2\u30FC\u30C8\u3067\u30C1\u30E3\u30EC\u30F3\u30B8\u4E2D\u3002\n  \u524D\u3005\u8077\u3088\u308A\u5CA1\u5C71\u3092\u4E2D\u5FC3\u306B\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u306B\u53C2\u52A0\u3057\u59CB\u3081\u3001\u73FE\u5728\u306FOkayama Managers Meeting\u306E\u4E3B\u50AC\u3084\u5408\u540C\u52C9\u5F37\u4F1A\u3067\u306E\u767A\u8868\u3092\u4E2D\u5FC3\u306B\u6D3B\u52D5\u3057\u3066\u3044\u308B\u3002",
  memberships: [{
    name: 'クラスメソッド株式会社 ',
    uri: 'https://classmethod.jp/'
  }]
};
var tatsuo310 = {
  furi: 'さとう たつお',
  name: '佐藤 達男',
  key: 'tatsuo310',
  title: ['広島修道大学 経済科学部教授', 'キャリアセンター長'],
  description: 'SI企業で数多くのシステム開発にプロジェクトマネジャーとして参画し、人事課長、技術部長、PM部長などを経た後、大学にフィールドを移して現在に至る。技術経営、UX/HCD、アジャイル、プロジェクトマネジメントなどを領域横断的にカバーし、新たな価値創造型のマネジメントをテーマに研究活動を展開している。著書に「プロジェクトマネージャ育成法」（日科技連出版社）ほか。Ph.D.,PMP, PMS,CSPO, CSM',
  memberships: [{
    name: '広島修道大学',
    uri: 'http://www.shudo-u.ac.jp/'
  }]
};
var tatsuyatakemura = {
  furi: 'たけむら たつや',
  name: '武村 達也',
  key: 'tatsuyatakemura',
  title: ['広島県商工労働局 イノベーション推進チーム'],
  description: '某銀行から広島県に出向中。ハッカソン、NT広島などIT系のイベントの企画・運営および広島県のAI/IoT事業「ひろしまサンドボックス」の人材育成事業において中小企業のIoT人材育成に携わる。7年前、41歳のときに独学でiPhoneアプリを制作、現在まで12作品をリリース。うち１作品が面白法人カヤック主催クソゲー供養会で大賞を受賞。1年前、電子工作を独学で始めMakefFaire東京、台北などに出展。',
  memberships: [{
    name: '広島県商工労働局',
    uri: 'https://www.pref.hiroshima.lg.jp/soshiki/8.html'
  }]
};
var speakers_speakers = [cero_t, kkd, piacere, twingo_b, mao_instantlife, tatsuo310, tatsuyatakemura];
// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/resources/2019/staff.js
var kakenavi = {
  key: 'kakenavi',
  name: '山城戸 祐樹',
  title: '実行委員長',
  twitter: 'kakenavi'
};
var mu2in = {
  key: 'mu2in',
  name: 'mu2in',
  title: '企画',
  twitter: 'mu2in'
};
var m_ando_japan = {
  key: 'm_ando_japan',
  name: '安藤 光昭',
  title: '会計',
  twitter: 'm_ando_japan',
  facebook: 'ando.mitsuaki',
  uri: 'https://bitriver.jp/'
};
var nobuske = {
  key: 'nobuske',
  name: '佐々木 宣介'
};
var nanarichi = {
  key: '7richi',
  name: '田中 靖也',
  twitter: '7richi'
};
var kwgch = {
  key: 'kwgch',
  name: '川口 稔'
};
var soudai1025 = {
  key: 'soudai1025',
  name: '曽根 壮大',
  twitter: 'soudai1025',
  facebook: 'soudai.sone'
};
var isabasi1484 = {
  key: 'isabasi1484',
  name: '石橋 伸介',
  twitter: 'isabisi1484'
};
var nishimotz = {
  key: '24motz',
  name: '西本 卓也',
  uri: 'https://shuaruta.com/'
};
var mmorito = {
  key: 'mmorito',
  name: '森藤 敏之'
};
var hiroyuki = {
  key: 'hiroyuki',
  name: '前田 浩幸'
};
var naoyuki = {
  key: 'naoyuki',
  name: '濱田 直之'
};
var eiel = {
  key: 'eiel',
  name: '火村 智彦',
  twitter: 'eielh',
  facebook: 'eielh',
  github: 'eiel',
  uri: 'https://eiel.info/'
};
var staff_staff = [kakenavi, mu2in, m_ando_japan, nobuske, nanarichi, kwgch, soudai1025, isabasi1484, nishimotz, mmorito, hiroyuki, naoyuki, eiel];
// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/resources/2019/sponsors.js
var orangesystem = {
  name: '株式会社 オレンジシステム広島',
  key: 'orangesystem',
  url: 'https://www.orange.co.jp/',
  banner: '/img/2019/orangesystem.svg'
};
var cybozu = {
  name: 'サイボウズ株式会社',
  key: 'cyboz',
  url: 'https://cybozu.co.jp/',
  banner: '/img/2019/cybozu.svg'
};
var dreamarts = {
  name: '株式会社ドリーム・アーツ',
  key: 'dreamarts',
  url: 'https://www.dreamarts.co.jp/',
  banner: '/img/2019/dreamarts.png'
};
var subthread = {
  name: '株式会社サブスレッド',
  key: 'subthread',
  url: 'http://www.subthread.co.jp/',
  banner: '/img/2019/subthread.png'
};
var sponsors_platinum = [orangesystem, cybozu, dreamarts, subthread];
var shuaruta = {
  name: '株式会社シュアルタ',
  key: 'shuaruta',
  url: 'https://shuaruta.com/',
  banner: '/img/2019/shuaruta.svg'
};
var sponsors_gold = [shuaruta];
var pmaj = {
  name: '日本プロジェクトマネジメント協会',
  key: 'pmaj',
  url: 'http://www.pmaj.or.jp/',
  banner: '/img/2018/pmaj.png'
};
var nextvision = {
  name: '株式会社ネクストビジョン',
  key: 'nextvision',
  url: 'https://www.nextvision.co.jp/',
  banner: '/img/2018/nextvision.png'
};
var sponsors_silver = [pmaj, nextvision];
var sponsors = {
  platinum: sponsors_platinum,
  gold: sponsors_gold,
  silver: sponsors_silver
};
// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/resources/2019/index.js





// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/pages/2019/index.js




/* harmony default export */ var _2019 = __webpack_exports__["default"] = (function () {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(Hero_Hero, null), external_react_default.a.createElement(Menu["a" /* Menu */], null), external_react_default.a.createElement(Speakers_Speakers, {
    speakers: speakers_speakers
  }), external_react_default.a.createElement(Sponsors, sponsors), external_react_default.a.createElement(Staff_Staff, {
    staff: staff_staff
  }), external_react_default.a.createElement(external_react_static_["Head"], null, external_react_default.a.createElement("title", null, "\u30AA\u30FC\u30D7\u30F3\u30BB\u30DF\u30CA\u30FC2019@\u5E83\u5CF6")));
});

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(9);

// EXTERNAL MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/organisms/AppBar.js
var AppBar = __webpack_require__(12);

// EXTERNAL MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/organisms/Footer.js
var Footer = __webpack_require__(17);

// EXTERNAL MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/organisms/Menu.js
var Menu = __webpack_require__(22);

// EXTERNAL MODULE: external "@material/react-button"
var react_button_ = __webpack_require__(3);
var react_button_default = /*#__PURE__*/__webpack_require__.n(react_button_);

// EXTERNAL MODULE: external "@material/react-typography"
var react_typography_ = __webpack_require__(2);

// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/organisms/2020/Hero.js



var Hero_Hero = function Hero() {
  return external_react_default.a.createElement(react_typography_["Headline1"], {
    style: headerStyle,
    tag: "h1"
  }, "\u30AA\u30FC\u30D7\u30F3\u30BB\u30DF\u30CA\u30FC2020@\u5E83\u5CF6", external_react_default.a.createElement("br", null), "\u300C\u30A8\u30F3\u30B8\u30CB\u30A2\u30E9\u30A4\u30D5 Hacks\u300D", external_react_default.a.createElement("br", null), "2020\u5E742\u67088\u65E5(\u571F) 10:00 (9:30\u53D7\u4ED8\u958B\u59CB)", external_react_default.a.createElement("br", null), external_react_default.a.createElement(react_button_default.a, {
    style: {
      color: 'white'
    },
    href: "https://www.google.com/maps?ll=34.394533,132.45547&z=16&t=m&hl=ja&gl=US&mapclient=embed&q=%E3%80%92730-0051+%E5%BA%83%E5%B3%B6%E7%9C%8C%E5%BA%83%E5%B3%B6%E5%B8%82%E4%B8%AD%E5%8C%BA%E5%A4%A7%E6%89%8B%E7%94%BA%EF%BC%91%E4%B8%81%E7%9B%AE%EF%BC%95%E2%88%92%EF%BC%93"
  }, "\u30B5\u30C6\u30E9\u30A4\u30C8\u30AD\u30E3\u30F3\u30D1\u30B9\u3072\u308D\u3057\u307E 501,502\u8B1B\u7FA9\u5BA4"), external_react_default.a.createElement("br", null), external_react_default.a.createElement(Hero_MainButton, null));
};
var headerStyle = {
  margin: 0,
  backgroundColor: '#994a29',
  color: '#fff',
  fontSize: '22px',
  padding: '20% 0',
  lineHeight: 1.8,
  textAlign: 'center'
};

var Hero_MainButton = function MainButton() {
  return external_react_default.a.createElement(react_button_default.a, {
    href: "https://osh.connpass.com/event/146828/",
    raised: true,
    style: {
      padding: '20px 40px',
      margin: '20px 10px'
    }
  }, "\u53C2\u52A0\u7533\u3057\u8FBC\u307F\u3059\u308B");
};
// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(6);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// EXTERNAL MODULE: external "@material/react-card"
var react_card_ = __webpack_require__(4);
var react_card_default = /*#__PURE__*/__webpack_require__.n(react_card_);

// EXTERNAL MODULE: external "@material/react-layout-grid"
var react_layout_grid_ = __webpack_require__(1);

// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/organisms/2020/Speakers.js







var Speakers_Speaker = function Speaker(_ref) {
  var name = _ref.name,
      furi = _ref.furi,
      description = _ref.description,
      id = _ref.id,
      title = _ref.title,
      memberships = _ref.memberships,
      session = _ref.session;
  return external_react_default.a.createElement(react_card_default.a, {
    className: "mdc-elevation--z1",
    outlined: true
  }, external_react_default.a.createElement(react_card_["CardMedia"], {
    imageUrl: "/img/2020/".concat(id, ".jpg"),
    square: true
  }), external_react_default.a.createElement("div", {
    style: {
      padding: '0 16px'
    }
  }, external_react_default.a.createElement(react_typography_["Headline1"], {
    style: {
      fontSize: 18,
      lineHeight: 1
    }
  }, session ? '『' + session.name + '』' : 'セッション内容 TBD'), external_react_default.a.createElement(react_typography_["Body2"], null, session ? session.description : ''), external_react_default.a.createElement(react_typography_["Caption"], {
    style: {
      fontSize: 14,
      margin: 0,
      padding: 0
    }
  }, furi), external_react_default.a.createElement(react_typography_["Headline1"], {
    style: {
      fontSize: 18,
      lineHeight: 1,
      margin: 0
    }
  }, name), external_react_default.a.createElement("div", {
    style: {
      fontSize: 16,
      lineHeight: 1,
      margin: 0,
      padding: '8px 0'
    }
  }, memberships.map(function (_ref2) {
    var uri = _ref2.uri,
        name = _ref2.name;
    return external_react_default.a.createElement(react_button_["Button"], {
      href: uri,
      style: {
        height: 32,
        padding: '2px 0'
      }
    }, name);
  })), external_react_default.a.createElement(react_typography_["Body2"], null, description), external_react_default.a.createElement(react_typography_["Body2"], null, title.reduce(function (acc, elem) {
    return external_react_default.a.createElement("span", null, acc, external_react_default.a.createElement("br", null), elem);
  }, []))));
};

var Speakers_Speakers = function Speakers(_ref3) {
  var speakers = _ref3.speakers;
  return external_react_default.a.createElement(react_layout_grid_["Grid"], null, external_react_default.a.createElement(react_layout_grid_["Row"], null, external_react_default.a.createElement(react_layout_grid_["Cell"], null, external_react_default.a.createElement(react_typography_["Headline2"], null, "Sessions"))), external_react_default.a.createElement(react_layout_grid_["Row"], null, speakers.map(function (speaker) {
    return external_react_default.a.createElement(react_layout_grid_["Cell"], {
      columns: 4,
      key: speaker.key
    }, external_react_default.a.createElement(Speakers_Speaker, extends_default()({}, speaker, {
      id: speaker.key
    })));
  })));
};
// EXTERNAL MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/resources/index.js + 3 modules
var resources = __webpack_require__(10);

// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/organisms/2020/Staff.js







var Staff_SNS = function SNS(_ref) {
  var uri = _ref.uri,
      service = _ref.service;
  return external_react_default.a.createElement("a", {
    href: uri,
    target: "_blank"
  }, external_react_default.a.createElement("i", {
    className: "fab fa-".concat(service),
    style: {
      margin: '0 0 0 6px',
      color: resources["a" /* color */].primary
    }
  }));
};

var Twitter = function Twitter(_ref2) {
  var id = _ref2.id;
  return Staff_SNS({
    service: 'twitter',
    uri: "https://twitter.com/".concat(id)
  });
};

var GitHub = function GitHub(_ref3) {
  var id = _ref3.id;
  return Staff_SNS({
    service: 'github',
    uri: "https://github.com/".concat(id)
  });
};

var Facebook = function Facebook(_ref4) {
  var id = _ref4.id;
  return Staff_SNS({
    service: 'facebook',
    uri: "https://www.facebook.com/".concat(id)
  });
};

var Staff_Member = function Member(_ref5) {
  var name = _ref5.name,
      title = _ref5.title,
      twitter = _ref5.twitter,
      github = _ref5.github,
      facebook = _ref5.facebook;
  return external_react_default.a.createElement(react_card_default.a, null, external_react_default.a.createElement("div", {
    style: {
      padding: '0 16px'
    }
  }, external_react_default.a.createElement(react_typography_["Headline1"], {
    style: {
      fontSize: 18,
      lineHeight: 1
    }
  }, title ? external_react_default.a.createElement(react_typography_["Caption"], null, title, external_react_default.a.createElement("br", null)) : '', name, twitter ? external_react_default.a.createElement(Twitter, {
    id: twitter
  }) : '', github ? external_react_default.a.createElement(GitHub, {
    id: github
  }) : '', facebook ? external_react_default.a.createElement(Facebook, {
    id: facebook
  }) : '')));
};

var Staff_Staff = function Staff(_ref6) {
  var staff = _ref6.staff;
  return external_react_default.a.createElement(react_layout_grid_["Grid"], null, external_react_default.a.createElement(react_layout_grid_["Row"], null, external_react_default.a.createElement(react_layout_grid_["Cell"], null, external_react_default.a.createElement(react_typography_["Headline2"], null, "Staff"))), external_react_default.a.createElement(react_layout_grid_["Row"], null, staff.map(function (member) {
    return external_react_default.a.createElement(react_layout_grid_["Cell"], {
      columns: 4,
      key: member.key
    }, external_react_default.a.createElement(Staff_Member, extends_default()({}, member, {
      id: member.key
    })));
  })));
};
// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(18);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/objectWithoutProperties"
var objectWithoutProperties_ = __webpack_require__(20);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties_);

// EXTERNAL MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/atoms/SponsorBanner.js
var SponsorBanner = __webpack_require__(5);

// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/organisms/2020/Sponsors.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var style = {
  margin: '3% 10%',
  boxSizing: 'border-box'
};
function Sponsors(_ref) {
  var platinum = _ref.platinum,
      gold = _ref.gold,
      silver = _ref.silver;
  return external_react_default.a.createElement(react_layout_grid_["Grid"], null, external_react_default.a.createElement(react_layout_grid_["Row"], null, external_react_default.a.createElement(react_layout_grid_["Cell"], null, external_react_default.a.createElement(react_typography_["Headline2"], null, "Sponsors"))), external_react_default.a.createElement(react_layout_grid_["Row"], null, platinum.map(function (sponsor) {
    return external_react_default.a.createElement(react_layout_grid_["Cell"], {
      columns: 12,
      style: style
    }, Object(SponsorBanner["a" /* SponsorBanner */])(toSponsor(sponsor)));
  })), external_react_default.a.createElement(react_layout_grid_["Row"], null, gold.map(function (sponsor) {
    return external_react_default.a.createElement(react_layout_grid_["Cell"], {
      columns: 6,
      desktopColumns: 6,
      style: style
    }, Object(SponsorBanner["a" /* SponsorBanner */])(toSponsor(sponsor)));
  })), external_react_default.a.createElement(react_layout_grid_["Row"], null, silver.map(function (sponsor) {
    return external_react_default.a.createElement(react_layout_grid_["Cell"], {
      columns: 4,
      desktopColumns: 3,
      style: style
    }, Object(SponsorBanner["a" /* SponsorBanner */])(toSponsor(sponsor)));
  })));
}

function toSponsor(_ref2) {
  var banner = _ref2.banner,
      url = _ref2.url,
      args = objectWithoutProperties_default()(_ref2, ["banner", "url"]);

  return _objectSpread({
    src: banner,
    href: url
  }, args);
}
// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/organisms/2020/index.js







// EXTERNAL MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/resources/seminarList.js
var seminarList = __webpack_require__(21);

// EXTERNAL MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/resources/color.js
var color = __webpack_require__(11);

// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/resources/2020/speakers.js
var takaking22 = {
  furi: 'Oibe Takeo',
  name: '及部 敬雄',
  key: 'takaking22',
  title: ['株式会社デンソーMaaS開発部  アジャイルモンスター', '一般社団法人アジャイルチームを支える会 理事'],
  description: 'エンジニアとして、たくさんのプロダクト開発・サービス運用・新規事業立ち上げに従事。アジャイル開発との出会いをきっかけに、最強のチームを作るために日々奮闘。2019年7月に楽天株式会社から現職にチームごと移籍。モットーは「自動車業界に金の雨を降らせる」、推しメンは福岡聖菜。',
  memberships: [{
    name: '株式会社デンソーMaaS開発部',
    uri: 'https://www.denso.com/jp/ja/'
  }, {
    name: '一般社団法人アジャイルチームを支える会',
    uri: 'http://www.agileteam.jp/'
  }],
  session: {
    name: 'アジャイル時代の「個」と「チーム」',
    description: '私たちが日々直面する問題はますます複雑になっています。それらの問題の解決に挑むために、技術者である我々は個として腕を磨き、また同時に個の力を最大限に活かし合うことができる強いチームをつくります。スポーツの世界においてよく語られる「個」と「チーム」の関係性は、プロダクト開発の世界においても存在します。私たちのチームは、スクラムやモブプログラミングなどを通して強いチームとなり、やがて会社を超えてチーム転職をし今なおチームで活動しています。そんな私たちが考えるアジャイル時代の「個」と「チーム」についてお話します。'
  }
};
var kawaguti = {
  furi: 'Kawaguchi Yasunobu',
  name: '川口 恭伸',
  key: 'kawaguti',
  title: ['アギレルゴコンサルティング株式会社 シニアアジャイルコーチ'],
  description: '北陸先端科学技術大学院大学修了ののち、金融情報サービスベンダー(株)QUICKにてデータメンテナンス/システム開発、プロダクト/サービス企画開発、仮想化インフラ構築などを担当。2008年スクラムに出会い、パイロットプロジェクトを始める。2011年イノベーションスプリント実行委員長、2011年からスクラムギャザリング東京実行委員。2012-2018年楽天にてアジャイルコーチ。楽天テクノロジーカンファレンス2012-2017実行委員。「Fearless Change」「ユーザーストーリーマッピング」監訳、「Joy, inc」共訳、「アジャイルエンタープライズ」監修。認定スクラムプロフェッショナル。ジム・コプリエン、ジェフ・パットン、ケン・ルービンなど、認定スクラムトレーニングの共同講師経験多数',
  memberships: [{
    name: 'アギレルゴコンサルティング株式会社',
    uri: 'https://www.jp.agilergo.com/'
  }],
  session: {
    name: 'アジャイル開発の時代',
    description: 'アジャイル開発はどうのように生まれ、発展し、どこに向かっていくのか？ 日本のソフトウェア産業は？プロダクト開発はどうなっていきそうなのか？ アジャイルの起源、クラウドの勃興、DevOpsの着眼点、 実感駆動、スクラムの仕組み、モブプログラミングはどう有効なのか？ 米国 Agile Conference 日本人最多連続参加記録更新中(非公式)のスピーカーが、 単にいま気になっていることを淡々と話します。'
  }
};
var soudai1025 = {
  furi: 'Sone Taketomo',
  name: '曽根 壮大',
  key: 'soudai1025',
  title: ['株式会社 オミカレ 副社長/CTO', '日本PostgreSQLユーザ会 理事 勉強会分科会座長'],
  description: '数々の業務システム、Webサービスなどの開発・運用を担当し、2017年に株式会社はてなでサービス監視サービス「Mackerel」のCRE（Customer Reliability Engineer）を経て現職。 コミュニティでは、Microsoft MVPをはじめ、日本PostgreSQLユーザ会の理事として勉強会の開催を担当し、各地で登壇している。 builderscon 2017、YAPC::Kansaiなどのイベントでベストスピーカーを受賞し、分かりやすく実践的な内容のトークに定評がある。 他に、岡山Python勉強会を主催し、オープンラボ備後にも所属。著書に『Software Design』誌で、データベースに関する連載「RDBアンチパターン」をまとめた『失敗から学ぶRDBの正しい歩き方』を執筆。',
  memberships: [{
    name: '株式会社オミカレ',
    uri: 'https://party-calendar.net/corp'
  }],
  session: {
    name: '35歳を超えた僕たちが、今と未来の技術と如何に向き合うか ~ 35歳の壁を超えていく ~',
    description: 'エンジニア35歳定年説、それは間違った論説であると理解しているものの、30歳を超え、責任、家庭、老い、様々なモノを背負ってくるとどうやって超えていくか？というのは多くの人達も一度は悩むのではないでしょうか。\n私も今年、35歳を越え、職場ではCTOとして決断を迫られる中、それでも新しい技術を理解し、向き合って行かねばなりません。\nもちろん一日は有限ですから勉強する時間も限られます。\nそんな中、私がどうやって新しい技術と理解し、未来の技術を予測し、今の技術を選定しているか。そのために日々をどう過ごしているか。そんな **"エンジニアとして生き残るためのhack"** を皆さんにお伝えします。'
  }
};
var konishi = {
  furi: 'Konishi Yudai',
  name: '小西 雄大',
  key: 'konishi',
  title: ['Webエンジニア'],
  description: '21のときにフリーランスとしてWeb制作を始める。24のときに渋谷の小さなスタートアップにCTOとして関わる。iOSアプリやWebサービスをいくつか作った後、退職。現在、また広島でフリーランスとして活動しています。',
  memberships: [],
  session: {
    name: '大学を中退した文系エンジニアのキャリア戦略',
    description: '大学を中退し、フリーランスでWeb制作を始めるところから私のプログラマとしてのキャリアが始まりました。\nその後、東京でスタートアップのCTOとして組織のグロースを見守り、退社後、また広島でフリーランスをやっています。\nどうやってキャリアの節目節目に現れる壁を乗り越えてきたか、どんな障害があり、どんな失敗をしてきたのか。\n今までのキャリアの中で体験してきた失敗談や成功談をお話します。'
  }
};
var tatsuo310 = {
  furi: 'さとう たつお',
  name: '佐藤 達男',
  key: 'tatsuo310',
  title: ['広島修道大学 経済科学部教授'],
  description: '東京都出身。SIerにて数多くのシステム開発でプロジェクトマネジャーに従事した後、全社のプロジェクトを統括するPM部長を経て、2016年より広島に拠点を移して現職で「プロジェクトマネジメント」の教鞭を執るとともに、新たな時代のプロジェクトマネジメント論を提示・展開している。2019年度はPMI Japan Forum2019にて基調講演、2020年はBacklog World2020の基調講演を予定している。著書「プロジェクトマネージャ育成法」ほか。PMP, PMS, SPO, SSM, MOT, Ph.D.',
  memberships: [{
    name: '広島修道大学',
    uri: 'http://www.shudo-u.ac.jp/'
  }],
  session: {
    name: 'エンジニアリング & プロジェクトマネジメント',
    description: ''
  }
};
var sakagawa = {
  furi: 'Sakagawa Masatoshi',
  name: '坂川 雅俊',
  key: 'sakagawa',
  title: ['株式会社ソニックガーデン Programmer/顧問CTO'],
  description: '広島でプログラマ人生をスタート。サーバーサイドエンジニアとして修行を積み、2015年にソニックガーデン入社。以来、リモートワークで「納品のない受託開発」サービスを提供するプログラマ。最近の楽しみは息子と二人でサウナに籠もること。',
  memberships: [{
    name: '株式会社ソニックガーデン',
    uri: 'https://www.sonicgarden.jp/'
  }],
  session: {
    name: '好きだから続ける ~ プログラミングを一生の仕事に',
    description: 'プログラミングが好きで一生続けたい。続けるためにどのように仕事に向き合っているか？顧問プログラマという仕事を通して学んだ私の考えを伝えられたらと思います。'
  }
};
var speakers_speakers = [takaking22, kawaguti, soudai1025, konishi, tatsuo310, sakagawa];
// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/resources/2020/staff.js
var kakenavi = {
  key: 'kakenavi',
  name: '山城戸 祐樹',
  twitter: 'kakenavi'
};
var mu2in = {
  key: 'mu2in',
  name: 'mu2in',
  twitter: 'mu2in'
};
var m_ando_japan = {
  key: 'm_ando_japan',
  name: '安藤 光昭',
  twitter: 'm_ando_japan',
  facebook: 'ando.mitsuaki',
  uri: 'https://bitriver.jp/'
};
var nobuske = {
  key: 'nobuske',
  name: '佐々木 宣介'
};
var nanarichi = {
  key: '7richi',
  name: '田中 靖也',
  title: '実行委員長',
  twitter: '7richi'
};
var kwgch = {
  key: 'kwgch',
  name: '川口 稔'
};
var staff_soudai1025 = {
  key: 'soudai1025',
  name: '曽根 壮大',
  twitter: 'soudai1025',
  facebook: 'soudai.sone'
};
var isabasi1484 = {
  key: 'isabasi1484',
  name: '石橋 伸介',
  twitter: 'isabisi1484'
};
var nishimotz = {
  key: '24motz',
  name: '西本 卓也',
  title: '副委員長',
  uri: 'https://shuaruta.com/'
};
var mmorito = {
  key: 'mmorito',
  name: '森藤 敏之',
  twitter: 'mmorito_0318',
  facebook: 'toshi.val',
  github: 'mmorito'
};
var hiroyuki = {
  key: 'hiroyuki',
  name: '前田 浩幸',
  twitter: 'hiroyukimaeda_3'
};
var naoyuki = {
  key: 'naoyuki',
  name: '濱田 直之'
};
var eiel = {
  key: 'eiel',
  name: '火村 智彦',
  twitter: 'eielh',
  facebook: 'eielh',
  github: 'eiel',
  uri: 'https://eiel.info/'
};
var staff_staff = [nanarichi, nishimotz, kakenavi, mu2in, m_ando_japan, nobuske, kwgch, staff_soudai1025, isabasi1484, mmorito, hiroyuki, naoyuki, eiel];
// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/resources/2020/sponsors.js
var cybozu = {
  name: 'サイボウズ株式会社',
  key: 'cyboz',
  url: 'https://cybozu.co.jp/',
  banner: '/img/2020/cybozu.svg',
  height: 150
};
var test = {
  name: '株式会社てすと',
  key: 'test',
  url: 'https://tesuto.jp/',
  banner: '/img/2020/test.png',
  height: 150
};
var pmaj = {
  name: '日本プロジェクトマネジメント協会',
  key: 'pmaj',
  url: 'http://www.pmaj.or.jp/',
  banner: '/img/2020/pmaj.png',
  height: 150
};
var freee = {
  name: 'freee株式会社',
  key: 'freee',
  url: 'https://www.freee.co.jp/',
  banner: '/img/2020/freee_logo.png',
  height: 200
};
var shuaruta = {
  name: '株式会社シュアルタ',
  key: 'shuaruta',
  url: 'https://shuaruta.com/',
  banner: '/img/2020/shuaruta.svg',
  height: 150
};
var bitriver = {
  name: 'ビットリバー株式会社',
  key: 'bitriver',
  url: 'https://bitriver.jp',
  banner: '/img/2020/bitriver.png',
  height: 150
};
var orangesystem = {
  name: '株式会社 オレンジシステム広島',
  key: 'orangesystem',
  url: 'https://www.orange.co.jp/',
  banner: '/img/2020/orangesystem.svg',
  height: 150
};
var nextvision = {
  name: '株式会社ネクストビジョン',
  key: 'nextvision',
  url: 'https://www.nextvision.co.jp/',
  banner: '/img/2020/nextvision.png',
  height: 150
};
var dreamarts = {
  name: '株式会社ドリーム・アーツ',
  key: 'dreamarts',
  url: 'https://www.dreamarts.co.jp/',
  banner: '/img/2020/dreamarts.png',
  height: 150
};
var ulsystems = {
  name: 'ウルシステムズ株式会社',
  key: 'ulsystems',
  url: 'https://www.ulsystems.co.jp/',
  banner: '/img/2020/ulsystems.png',
  height: 200
};
var sponsors_platinum = [cybozu, test, freee, orangesystem, dreamarts, ulsystems];
var sponsors_gold = [shuaruta, bitriver];
var sponsors_silver = [pmaj, nextvision];
var sponsors = {
  platinum: sponsors_platinum,
  gold: sponsors_gold,
  silver: sponsors_silver
};
// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/resources/2020/index.js





// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/pages/2020/index.js




/* harmony default export */ var _2020 = __webpack_exports__["default"] = (function () {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(Hero_Hero, null), external_react_default.a.createElement(Menu["a" /* Menu */], null), external_react_default.a.createElement(Speakers_Speakers, {
    speakers: speakers_speakers
  }), external_react_default.a.createElement(Sponsors, sponsors), external_react_default.a.createElement(Staff_Staff, {
    staff: staff_staff
  }), external_react_default.a.createElement(external_react_static_["Head"], null, external_react_default.a.createElement("title", null, "\u30AA\u30FC\u30D7\u30F3\u30BB\u30DF\u30CA\u30FC2020@\u5E83\u5CF6")));
});

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(9);

// EXTERNAL MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/organisms/AppBar.js
var AppBar = __webpack_require__(12);

// EXTERNAL MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/organisms/Footer.js
var Footer = __webpack_require__(17);

// EXTERNAL MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/organisms/Menu.js
var Menu = __webpack_require__(22);

// EXTERNAL MODULE: external "@material/react-button"
var react_button_ = __webpack_require__(3);
var react_button_default = /*#__PURE__*/__webpack_require__.n(react_button_);

// EXTERNAL MODULE: external "@material/react-typography"
var react_typography_ = __webpack_require__(2);

// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/organisms/2022/Hero.js



var Hero_Hero = function Hero() {
  return external_react_default.a.createElement(react_typography_["Headline1"], {
    style: headerStyle,
    tag: "h1"
  }, "\u30AA\u30FC\u30D7\u30F3\u30BB\u30DF\u30CA\u30FC2022@\u5E83\u5CF6", external_react_default.a.createElement("br", null), "\u300CRe: \u30A8\u30F3\u30B8\u30CB\u30A2\u306E\u305F\u3081\u306E\u7D71\u8A08\u30FB\u30C7\u30FC\u30BF\u5206\u6790\u5165\u9580\u300D", external_react_default.a.createElement("br", null), "2022\u5E746\u670825\u65E5(\u571F) 11:00 \uFF5E 17:30", external_react_default.a.createElement("br", null), external_react_default.a.createElement(react_button_default.a, {
    style: {
      color: 'white'
    },
    href: "https://www.google.com/maps?ll=34.394533,132.45547&z=16&t=m&hl=ja&gl=US&mapclient=embed&q=%E3%80%92730-0051+%E5%BA%83%E5%B3%B6%E7%9C%8C%E5%BA%83%E5%B3%B6%E5%B8%82%E4%B8%AD%E5%8C%BA%E5%A4%A7%E6%89%8B%E7%94%BA%EF%BC%91%E4%B8%81%E7%9B%AE%EF%BC%95%E2%88%92%EF%BC%93"
  }, "\u30B5\u30C6\u30E9\u30A4\u30C8\u30AD\u30E3\u30F3\u30D1\u30B9\u3072\u308D\u3057\u307E 501,502\u8B1B\u7FA9\u5BA4"), external_react_default.a.createElement("br", null), external_react_default.a.createElement(Hero_MainButton, null));
};
var headerStyle = {
  margin: 0,
  backgroundColor: '#c97586',
  color: '#fff',
  fontSize: '22px',
  padding: '20% 0',
  lineHeight: 1.8,
  textAlign: 'center'
};

var Hero_MainButton = function MainButton() {
  return external_react_default.a.createElement(react_button_default.a, {
    href: "https://osh.connpass.com/event/242991/",
    raised: true,
    style: {
      padding: '20px 40px',
      margin: '20px 10px'
    }
  }, "\u53C2\u52A0\u7533\u3057\u8FBC\u307F\u3059\u308B");
};
// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(6);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// EXTERNAL MODULE: external "@material/react-card"
var react_card_ = __webpack_require__(4);
var react_card_default = /*#__PURE__*/__webpack_require__.n(react_card_);

// EXTERNAL MODULE: external "@material/react-layout-grid"
var react_layout_grid_ = __webpack_require__(1);

// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/organisms/2022/Speakers.js







var Speakers_Speaker = function Speaker(_ref) {
  var name = _ref.name,
      furi = _ref.furi,
      description = _ref.description,
      id = _ref.id,
      title = _ref.title,
      memberships = _ref.memberships,
      session = _ref.session;
  return external_react_default.a.createElement(react_card_default.a, {
    className: "mdc-elevation--z1",
    outlined: true
  }, external_react_default.a.createElement(react_card_["CardMedia"], {
    imageUrl: "/img/2022/".concat(id, ".jpg"),
    square: true
  }), external_react_default.a.createElement("div", {
    style: {
      padding: '0 16px'
    }
  }, external_react_default.a.createElement(react_typography_["Headline1"], {
    style: {
      fontSize: 18,
      lineHeight: 1
    }
  }, session ? '『' + session.name + '』' : 'セッション内容 TBD'), external_react_default.a.createElement(react_typography_["Body2"], null, session ? session.description : ''), external_react_default.a.createElement(react_typography_["Caption"], {
    style: {
      fontSize: 14,
      margin: 0,
      padding: 0
    }
  }, furi), external_react_default.a.createElement(react_typography_["Headline1"], {
    style: {
      fontSize: 18,
      lineHeight: 1,
      margin: 0
    }
  }, name), external_react_default.a.createElement("div", {
    style: {
      fontSize: 16,
      lineHeight: 1,
      margin: 0,
      padding: '8px 0'
    }
  }, memberships.map(function (_ref2) {
    var uri = _ref2.uri,
        name = _ref2.name;
    return external_react_default.a.createElement(react_button_["Button"], {
      href: uri,
      style: {
        height: 32,
        padding: '2px 0',
        margin: '0 0.75rem 0 0'
      }
    }, name);
  })), external_react_default.a.createElement(react_typography_["Body2"], null, description), external_react_default.a.createElement(react_typography_["Body2"], null, title.reduce(function (acc, elem) {
    return external_react_default.a.createElement("span", null, acc, external_react_default.a.createElement("br", null), elem);
  }, []))));
};

var Speakers_Speakers = function Speakers(_ref3) {
  var speakers = _ref3.speakers;
  return external_react_default.a.createElement(react_layout_grid_["Grid"], null, external_react_default.a.createElement(react_layout_grid_["Row"], null, external_react_default.a.createElement(react_layout_grid_["Cell"], null, external_react_default.a.createElement(react_typography_["Headline2"], null, "Sessions"))), external_react_default.a.createElement(react_layout_grid_["Row"], null, speakers.length ? speakers.map(function (speaker) {
    return external_react_default.a.createElement(react_layout_grid_["Cell"], {
      columns: 4,
      key: speaker.key
    }, external_react_default.a.createElement(Speakers_Speaker, extends_default()({}, speaker, {
      id: speaker.key
    })));
  }) : "現在調整中です"));
};
// EXTERNAL MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/resources/index.js + 3 modules
var resources = __webpack_require__(10);

// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/organisms/2022/Staff.js







var Staff_SNS = function SNS(_ref) {
  var uri = _ref.uri,
      service = _ref.service;
  return external_react_default.a.createElement("a", {
    href: uri,
    target: "_blank"
  }, external_react_default.a.createElement("i", {
    className: "fab fa-".concat(service),
    style: {
      margin: '0 0 0 6px',
      color: resources["a" /* color */].primary
    }
  }));
};

var Twitter = function Twitter(_ref2) {
  var id = _ref2.id;
  return Staff_SNS({
    service: 'twitter',
    uri: "https://twitter.com/".concat(id)
  });
};

var GitHub = function GitHub(_ref3) {
  var id = _ref3.id;
  return Staff_SNS({
    service: 'github',
    uri: "https://github.com/".concat(id)
  });
};

var Facebook = function Facebook(_ref4) {
  var id = _ref4.id;
  return Staff_SNS({
    service: 'facebook',
    uri: "https://www.facebook.com/".concat(id)
  });
};

var Staff_Member = function Member(_ref5) {
  var name = _ref5.name,
      title = _ref5.title,
      twitter = _ref5.twitter,
      github = _ref5.github,
      facebook = _ref5.facebook;
  return external_react_default.a.createElement(react_card_default.a, null, external_react_default.a.createElement("div", {
    style: {
      padding: '0 16px'
    }
  }, external_react_default.a.createElement(react_typography_["Headline1"], {
    style: {
      fontSize: 18,
      lineHeight: 1
    }
  }, title ? external_react_default.a.createElement(react_typography_["Caption"], null, title, external_react_default.a.createElement("br", null)) : '', name, twitter ? external_react_default.a.createElement(Twitter, {
    id: twitter
  }) : '', github ? external_react_default.a.createElement(GitHub, {
    id: github
  }) : '', facebook ? external_react_default.a.createElement(Facebook, {
    id: facebook
  }) : '')));
};

var Staff_Staff = function Staff(_ref6) {
  var staff = _ref6.staff;
  return external_react_default.a.createElement(react_layout_grid_["Grid"], null, external_react_default.a.createElement(react_layout_grid_["Row"], null, external_react_default.a.createElement(react_layout_grid_["Cell"], null, external_react_default.a.createElement(react_typography_["Headline2"], null, "Staff"))), external_react_default.a.createElement(react_layout_grid_["Row"], null, staff.map(function (member) {
    return external_react_default.a.createElement(react_layout_grid_["Cell"], {
      columns: 4,
      key: member.key
    }, external_react_default.a.createElement(Staff_Member, extends_default()({}, member, {
      id: member.key
    })));
  })));
};
// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(18);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/objectWithoutProperties"
var objectWithoutProperties_ = __webpack_require__(20);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties_);

// EXTERNAL MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/atoms/SponsorBanner.js
var SponsorBanner = __webpack_require__(5);

// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/organisms/2022/Sponsors.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var style = {
  margin: '3% 10%',
  boxSizing: 'border-box'
};
function Sponsors(_ref) {
  var platinum = _ref.platinum,
      gold = _ref.gold,
      silver = _ref.silver,
      supporter = _ref.supporter;
  return external_react_default.a.createElement(react_layout_grid_["Grid"], null, external_react_default.a.createElement(react_layout_grid_["Row"], null, external_react_default.a.createElement(react_layout_grid_["Cell"], null, external_react_default.a.createElement(react_typography_["Headline2"], null, "Sponsors"))), external_react_default.a.createElement(react_layout_grid_["Row"], null, external_react_default.a.createElement(react_layout_grid_["Cell"], null, external_react_default.a.createElement(react_typography_["Headline3"], null, "Platinum")), platinum.map(function (sponsor) {
    return external_react_default.a.createElement(react_layout_grid_["Cell"], {
      columns: 12,
      style: style
    }, Object(SponsorBanner["a" /* SponsorBanner */])(toSponsor(sponsor)));
  })), external_react_default.a.createElement(react_layout_grid_["Row"], null, external_react_default.a.createElement(react_layout_grid_["Cell"], null, external_react_default.a.createElement(react_typography_["Headline3"], null, "Gold"))), external_react_default.a.createElement(react_layout_grid_["Row"], null, gold.map(function (sponsor) {
    return (//   <Cell columns={8} desktopColumns={6} style={style}>{Banner(toSponsor(sponsor))}</Cell>
      external_react_default.a.createElement(react_layout_grid_["Cell"], {
        columns: 12,
        style: style
      }, Object(SponsorBanner["a" /* SponsorBanner */])(toSponsor(sponsor)))
    );
  })), external_react_default.a.createElement(react_layout_grid_["Row"], null, external_react_default.a.createElement(react_layout_grid_["Cell"], null, external_react_default.a.createElement(react_typography_["Headline3"], null, "Silver"))), external_react_default.a.createElement(react_layout_grid_["Row"], null, silver.map(function (sponsor) {
    return external_react_default.a.createElement(react_layout_grid_["Cell"], {
      columns: 4,
      desktopColumns: 3,
      style: style
    }, Object(SponsorBanner["a" /* SponsorBanner */])(toSponsor(sponsor)));
  })), external_react_default.a.createElement(react_layout_grid_["Row"], null, external_react_default.a.createElement(react_layout_grid_["Cell"], null, external_react_default.a.createElement(react_typography_["Headline3"], null, "Supporter"))), external_react_default.a.createElement(react_layout_grid_["Row"], null, supporter.map(function (sponsor) {
    return external_react_default.a.createElement(react_layout_grid_["Cell"], {
      columns: 2,
      desktopColumns: 2,
      style: style
    }, Object(SponsorBanner["a" /* SponsorBanner */])(toSponsor(sponsor)));
  })), external_react_default.a.createElement(react_layout_grid_["Row"], null, // TODO: リンクの記載を行う
  !(platinum.length || gold.length || silver.length) ? "現在募集中です" : null));
}

function toSponsor(_ref2) {
  var banner = _ref2.banner,
      url = _ref2.url,
      args = objectWithoutProperties_default()(_ref2, ["banner", "url"]);

  return _objectSpread({
    src: banner,
    href: url
  }, args);
}
// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/organisms/2022/index.js







// EXTERNAL MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/resources/seminarList.js
var seminarList = __webpack_require__(21);

// EXTERNAL MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/resources/color.js
var color = __webpack_require__(11);

// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/resources/2022/speakers.js
var yukiSaito = {
  furi: 'Yuki Saito',
  name: '斎藤　友樹',
  key: 'yukiSaito',
  title: [''],
  description: '官公庁、年金、広告などの業界でソフトウェアエンジニア -> サーバーサイドエンジニア -> データエンジニアとキャリアを歩む。\n データエンジニアとしては、データ分析基盤の設計構築、データ活用のための仕組みづくりを経験し現在もなおデータ活用の推進を行う部署に所属。\n コミュニティ活動では、執筆活動、アドバイザリー活動(ビッグデータを扱うデータ分析基盤の構築・設計、データ活用)、オンライン動画講座を通してデータ活用ノウハウの発信を行なっている。\n 著書に「[エンジニアのための]データ分析基盤入門 データ活用を促進する! プラットフォーム&データ品質の考え方 」、成果を出すための7つのマインドセット システムの老朽化、ブラックボックス時代にどう立ち向うか？」がある。',
  memberships: [{
    name: 'MENTA(アドバイザリー)',
    uri: 'https://menta.work/plan/2650'
  }, {
    name: 'Udemy(オンライン講師)',
    uri: 'https://www.udemy.com/user/yuki-saito-7/'
  }],
  session: {
    name: 'データエンジニア"と"作るデータ文化',
    description: ''
  },
  twitter: '@yuki_saito_en'
};
var hirakawa = {
  furi: 'Naoya Hirakawa',
  name: '平河　直也',
  key: 'hirakawa',
  title: ['広島県商工労働局イノベーション推進チーム'],
  description: '製造業での管理・営業経験を経て、2021年に広島県入庁。\n 広島県が運営するAI人材育成プラットフォーム「ひろしまQuest」の運営担当になったことをきっかけに、全くの素人の状態からAI・プログラミングの学習を始める\n これまで馴染みがなかった分野に悪戦苦闘しながらも、ひろしまQuestが県民向けに無償提供しているe-ラーニング（株式会社SIGNATE）を活用し、コツコツ学習しています。',
  memberships: [{
    name: '商工労働局 | 広島県',
    uri: 'https://www.pref.hiroshima.lg.jp/soshiki/8.html'
  }, {
    name: 'ひろしまQuest',
    uri: 'https://hiroshima-sandbox.jp/hiroshima-quest.html'
  }],
  session: {
    name: '広島県が提供するAI人材開発プラットフォーム「ひろしまQuest」ご紹介',
    description: ''
  }
};
var hk_hiroshima = {
  furi: 'H.K@Hiroshima',
  name: 'H.K@Hiroshima',
  key: 'hk-hiroshima',
  title: [''],
  description: '',
  memberships: [{
    name: '',
    uri: ''
  }],
  session: {
    name: '（タイトル調整中）',
    description: 'データ分析に興味がある方は、「基礎がわかったらデータ分析コンペに参加しよう！」と誘われたりすることでしょう。\n 一方で同僚に「コンペに参加したものの楽しみ方がわからなかった」と言われ一歩が踏み出せなくなったりもします。 \n 私も、コンペ（kaggle）に登録後なかなか手がつきませんでしたが、今年になって継続的に参加しています。\n 本セッションではデータコンペの見どころ、取り組み方を紹介し、登録だけでも「楽しめる」ようになっていただければと考えています。'
  }
};
var speakers_speakers = [yukiSaito // hirakawa, hk_hiroshima,
];
// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/resources/2022/staff.js
var kakenavi = {
  key: 'kakenavi',
  name: '山城戸 祐樹',
  twitter: 'kakenavi'
};
var mu2in = {
  key: 'mu2in',
  name: 'mu2in',
  twitter: 'mu2in'
};
var m_ando_japan = {
  key: 'm_ando_japan',
  name: '安藤 光昭',
  twitter: 'm_ando_japan',
  facebook: 'ando.mitsuaki',
  uri: 'https://bitriver.jp/'
};
var nobuske = {
  key: 'nobuske',
  name: '佐々木 宣介'
};
var nanarichi = {
  key: '7richi',
  name: '田中 靖也',
  twitter: '7richi'
};
var isabasi1484 = {
  key: 'isabasi1484',
  name: '石橋 伸介',
  twitter: 'isabisi1484'
};
var nishimotz = {
  key: '24motz',
  name: '西本 卓也',
  title: '実行委員長',
  uri: 'https://shuaruta.com/'
};
var mmorito = {
  key: 'mmorito',
  name: '森藤 敏之',
  twitter: 'mmorito_0318',
  facebook: 'toshi.val',
  github: 'mmorito'
};
var hiroyuki = {
  key: 'hiroyuki',
  name: '前田 浩幸',
  twitter: 'hiroyukimaeda_3'
};
var naoyuki = {
  key: 'naoyuki',
  name: '濱田 直之',
  title: '副実行委員長'
};
var mosugi = {
  key: 'mosugi',
  name: 'Masaki Osugi'
};
var staff_staff = [nishimotz, naoyuki, isabasi1484, m_ando_japan, nobuske, nanarichi, mu2in, mmorito, hiroyuki, mosugi];
// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/resources/2022/sponsors.js
var orangesystem = {
  name: '株式会社 オレンジシステム広島',
  key: 'orangesystem',
  url: 'https://www.orange.co.jp/',
  banner: '/img/2022/sponsors/osh2022_logo_orangesystem.png',
  // banner: '/img/2022/sponsors/orange_logo_orange_small_tp.png',
  height: 200
};
var ulsystems = {
  name: 'ウルシステムズ株式会社',
  key: 'ulsystems',
  url: 'https://www.ulsystems.co.jp/',
  banner: '/img/2022/sponsors/osh2022_logo_ulsystems.png',
  height: 200
};
var futureLifePartners = {
  name: 'Future Life Partners 合同会社',
  key: 'futureLifePartners',
  url: 'https://future-life-partners.com/',
  banner: '/img/2022/sponsors/osh2022_logo_futurelifepartners.png',
  height: 200
};
var subthread = {
  name: '株式会社サブスレッド',
  key: 'subthread',
  url: 'https://www.subthread.co.jp/',
  banner: '/img/2022/sponsors/osh2022_logo_subthread.png',
  height: 200
};
var bitriver = {
  name: 'ビットリバー株式会社',
  key: 'bitriver',
  url: 'https://bitriver.jp',
  banner: '/img/2022/sponsors/osh2022_logo_bitriver.png',
  height: 200
};
var tesuto = {
  name: '株式会社てすと',
  key: 'tesuto',
  url: 'https://tesuto.jp/',
  banner: '/img/2022/sponsors/osh2022_logo_tesuto.png',
  height: 150
};
var cybozu = {
  name: 'サイボウズ株式会社',
  key: 'cyboz',
  url: 'https://cybozu.co.jp/',
  banner: '/img/2022/sponsors/osh2022_logo_cybozu.png',
  height: 100
};
var shuaruta = {
  name: '株式会社シュアルタ',
  key: 'shuaruta',
  url: 'https://shuaruta.com/',
  banner: '/img/2022/sponsors/osh2022_logo_shuaruta.png',
  height: 100
};
var hmcn = {
  name: '特定非営利活動法人HMCN',
  key: 'hmcn',
  url: '',
  banner: '/img/2022/sponsors/osh2022_logo_hmcn.png',
  height: 100
};
var nextvision = {
  name: '株式会社ネクストビジョン',
  key: 'nextvision',
  url: 'https://www.nextvision.co.jp/',
  banner: '/img/2022/sponsors/osh2022_logo_nextvision.png',
  height: 100
};
var eventHandler = {
  name: '株式会社イベントハンドラ',
  key: 'eventHandler',
  url: 'https://eventhandler.jp/',
  banner: '/img/2022/sponsors/osh2022_logo_eventhandler.png',
  height: 100
};
var funaffect = {
  name: 'ファナフェクト株式会社',
  key: 'funaffect',
  url: 'https://www.funaffect.jp/',
  banner: '/img/2022/sponsors/osh2022_logo_funaffect.png',
  height: 100
};
var sponsors_platinum = [ulsystems, futureLifePartners, orangesystem, subthread, bitriver];
var sponsors_gold = [// TBD
tesuto];
var sponsors_silver = [cybozu, shuaruta, nextvision, hmcn]; // 運営協力（司会・配信）

var sponsors_supporter = [// ロゴデータ受領待
eventHandler, funaffect];
var sponsors = {
  platinum: sponsors_platinum,
  gold: sponsors_gold,
  silver: sponsors_silver,
  supporter: sponsors_supporter
};
// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/resources/2022/index.js





// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/pages/2022/index.js




/* harmony default export */ var _2022 = __webpack_exports__["default"] = (function () {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(Hero_Hero, null), external_react_default.a.createElement(Menu["a" /* Menu */], null), external_react_default.a.createElement(Speakers_Speakers, {
    speakers: speakers_speakers
  }), external_react_default.a.createElement(Sponsors, sponsors), external_react_default.a.createElement(Staff_Staff, {
    staff: staff_staff
  }), external_react_default.a.createElement(external_react_static_["Head"], null, external_react_default.a.createElement("title", null, "\u30AA\u30FC\u30D7\u30F3\u30BB\u30DF\u30CA\u30FC2022@\u5E83\u5CF6")));
});

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(9);

// EXTERNAL MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/organisms/AppBar.js
var AppBar = __webpack_require__(12);

// EXTERNAL MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/organisms/Footer.js
var Footer = __webpack_require__(17);

// EXTERNAL MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/organisms/Menu.js
var Menu = __webpack_require__(22);

// EXTERNAL MODULE: external "@material/react-button"
var react_button_ = __webpack_require__(3);
var react_button_default = /*#__PURE__*/__webpack_require__.n(react_button_);

// EXTERNAL MODULE: external "@material/react-typography"
var react_typography_ = __webpack_require__(2);

// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/organisms/2024/Hero.js



var Hero_Hero = function Hero() {
  return external_react_default.a.createElement(react_typography_["Headline1"], {
    style: headerStyle,
    tag: "h1"
  }, external_react_default.a.createElement("img", {
    style: {
      height: '300px'
    },
    src: "/img/logo.png"
  }), external_react_default.a.createElement("br", null), "\u30AA\u30FC\u30D7\u30F3\u30BB\u30DF\u30CA\u30FC2024@\u5E83\u5CF6", external_react_default.a.createElement("br", null), "\u300CXRE - \u30A8\u30F3\u30B8\u30CB\u30A2\u3092\u652F\u3048\u308B\u7D44\u7E54\u300D", external_react_default.a.createElement("br", null), "2024\u5E7411\u670809\u65E5(\u571F) 10:00 \uFF5E", external_react_default.a.createElement("br", null), external_react_default.a.createElement(react_button_default.a, {
    style: {
      color: '#7b5544'
    },
    href: "https://goo.gl/maps/xxWZx4DDw1EBtomy8"
  }, "\u5E83\u5CF6\u5E02\u4E2D\u533A\u6C11\u6587\u5316\u30BB\u30F3\u30BF\u30FC(JMS\u30A2\u30B9\u30C6\u30FC\u30EB\u30D7\u30E9\u30B6)"), external_react_default.a.createElement("br", null), external_react_default.a.createElement(Hero_MainButton, null));
};
var headerStyle = {
  margin: 0,
  backgroundColor: '#febe98',
  color: '#000000',
  fontSize: '22px',
  padding: '15% 0',
  lineHeight: 1.8,
  textAlign: 'center'
};

var Hero_MainButton = function MainButton() {
  return external_react_default.a.createElement(react_button_default.a, {
    href: "https://osh.connpass.com/event/324736/",
    raised: true,
    style: {
      padding: '20px 40px',
      margin: '20px 10px'
    }
  }, "\u53C2\u52A0\u7533\u3057\u8FBC\u307F\u3059\u308B");
};
// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(6);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// EXTERNAL MODULE: external "@material/react-card"
var react_card_ = __webpack_require__(4);
var react_card_default = /*#__PURE__*/__webpack_require__.n(react_card_);

// EXTERNAL MODULE: external "@material/react-layout-grid"
var react_layout_grid_ = __webpack_require__(1);

// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/organisms/2024/Speakers.js







var Speakers_Speaker = function Speaker(_ref) {
  var name = _ref.name,
      furi = _ref.furi,
      description = _ref.description,
      id = _ref.id,
      title = _ref.title,
      memberships = _ref.memberships,
      session = _ref.session;
  return external_react_default.a.createElement(react_card_default.a, {
    className: "mdc-elevation--z1",
    outlined: true
  }, external_react_default.a.createElement(react_card_["CardMedia"], {
    imageUrl: "/img/2024/".concat(id, ".jpg"),
    square: true
  }), external_react_default.a.createElement("div", {
    style: {
      padding: '0 16px'
    }
  }, external_react_default.a.createElement(react_typography_["Headline1"], {
    style: {
      fontSize: 18,
      lineHeight: 1
    }
  }, session ? '『' + session.name + '』' : 'セッション内容 TBD'), external_react_default.a.createElement(react_typography_["Body2"], {
    style: {
      whiteSpace: 'pre-line'
    }
  }, session ? session.description : ''), external_react_default.a.createElement(react_typography_["Caption"], {
    style: {
      fontSize: 14,
      margin: 0,
      padding: 0
    }
  }, furi), external_react_default.a.createElement(react_typography_["Headline1"], {
    style: {
      fontSize: 18,
      lineHeight: 1,
      margin: 0
    }
  }, name), external_react_default.a.createElement("div", {
    style: {
      fontSize: 16,
      lineHeight: 1,
      margin: 0,
      padding: '8px 0'
    }
  }, memberships.map(function (_ref2) {
    var uri = _ref2.uri,
        name = _ref2.name;
    return external_react_default.a.createElement(react_button_["Button"], {
      href: uri,
      style: {
        height: 32,
        padding: '2px 0'
      }
    }, name);
  })), external_react_default.a.createElement(react_typography_["Body2"], {
    style: {
      whiteSpace: 'pre-line'
    }
  }, description), external_react_default.a.createElement(react_typography_["Body2"], null, title.reduce(function (acc, elem) {
    return external_react_default.a.createElement("span", null, acc, external_react_default.a.createElement("br", null), elem);
  }, []))));
};

var Speakers_Speakers = function Speakers(_ref3) {
  var speakers = _ref3.speakers;
  return external_react_default.a.createElement(react_layout_grid_["Grid"], null, external_react_default.a.createElement(react_layout_grid_["Row"], null, external_react_default.a.createElement(react_layout_grid_["Cell"], null, external_react_default.a.createElement(react_typography_["Headline2"], null, "Sessions"))), external_react_default.a.createElement(react_layout_grid_["Row"], null, speakers.length ? speakers.map(function (speaker) {
    return external_react_default.a.createElement(react_layout_grid_["Cell"], {
      columns: 4,
      key: speaker.key
    }, external_react_default.a.createElement(Speakers_Speaker, extends_default()({}, speaker, {
      id: speaker.key
    })));
  }) : external_react_default.a.createElement(react_layout_grid_["Cell"], null, "\u73FE\u5728\u8ABF\u6574\u4E2D\u3067\u3059")));
};
// EXTERNAL MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/resources/index.js + 3 modules
var resources = __webpack_require__(10);

// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/organisms/2024/Staff.js







var Staff_SNS = function SNS(_ref) {
  var uri = _ref.uri,
      service = _ref.service;
  return external_react_default.a.createElement("a", {
    href: uri,
    target: "_blank"
  }, external_react_default.a.createElement("i", {
    className: "fab fa-".concat(service),
    style: {
      margin: '0 0 0 6px',
      color: resources["a" /* color */].primary
    }
  }));
};

var Twitter = function Twitter(_ref2) {
  var id = _ref2.id;
  return Staff_SNS({
    service: 'twitter',
    uri: "https://twitter.com/".concat(id)
  });
};

var GitHub = function GitHub(_ref3) {
  var id = _ref3.id;
  return Staff_SNS({
    service: 'github',
    uri: "https://github.com/".concat(id)
  });
};

var Facebook = function Facebook(_ref4) {
  var id = _ref4.id;
  return Staff_SNS({
    service: 'facebook',
    uri: "https://www.facebook.com/".concat(id)
  });
};

var Staff_Member = function Member(_ref5) {
  var name = _ref5.name,
      title = _ref5.title,
      twitter = _ref5.twitter,
      github = _ref5.github,
      facebook = _ref5.facebook;
  return external_react_default.a.createElement(react_card_default.a, null, external_react_default.a.createElement("div", {
    style: {
      padding: '0 16px'
    }
  }, external_react_default.a.createElement(react_typography_["Headline1"], {
    style: {
      fontSize: 18,
      lineHeight: 1
    }
  }, title ? external_react_default.a.createElement(react_typography_["Caption"], null, title, external_react_default.a.createElement("br", null)) : '', name, twitter ? external_react_default.a.createElement(Twitter, {
    id: twitter
  }) : '', github ? external_react_default.a.createElement(GitHub, {
    id: github
  }) : '', facebook ? external_react_default.a.createElement(Facebook, {
    id: facebook
  }) : '')));
};

var Staff_Staff = function Staff(_ref6) {
  var staff = _ref6.staff;
  return external_react_default.a.createElement(react_layout_grid_["Grid"], null, external_react_default.a.createElement(react_layout_grid_["Row"], null, external_react_default.a.createElement(react_layout_grid_["Cell"], null, external_react_default.a.createElement(react_typography_["Headline2"], null, "Staff"))), external_react_default.a.createElement(react_layout_grid_["Row"], null, staff.map(function (member) {
    return external_react_default.a.createElement(react_layout_grid_["Cell"], {
      columns: 4,
      key: member.key
    }, external_react_default.a.createElement(Staff_Member, extends_default()({}, member, {
      id: member.key
    })));
  })));
};
// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(18);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/objectWithoutProperties"
var objectWithoutProperties_ = __webpack_require__(20);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties_);

// EXTERNAL MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/atoms/SponsorBanner.js
var SponsorBanner = __webpack_require__(5);

// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/organisms/2024/Sponsors.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var style = {
  margin: '3% 10%',
  boxSizing: 'border-box'
};
function Sponsors(_ref) {
  var platinum = _ref.platinum,
      gold = _ref.gold,
      silver = _ref.silver,
      supporter = _ref.supporter;
  return external_react_default.a.createElement(react_layout_grid_["Grid"], null, external_react_default.a.createElement(react_layout_grid_["Row"], null, external_react_default.a.createElement(react_layout_grid_["Cell"], null, external_react_default.a.createElement(react_typography_["Headline2"], null, "Sponsors"))), external_react_default.a.createElement(react_layout_grid_["Row"], null, external_react_default.a.createElement(react_layout_grid_["Cell"], null, // TODO: リンクの記載を行う
  !(platinum.length || gold.length || silver.length) ? "現在募集中です" : null)), external_react_default.a.createElement(react_layout_grid_["Row"], null, external_react_default.a.createElement(react_layout_grid_["Cell"], null, external_react_default.a.createElement(react_typography_["Headline3"], null, "Platinum")), platinum.map(function (sponsor) {
    return external_react_default.a.createElement(react_layout_grid_["Cell"], {
      columns: 12,
      style: style
    }, Object(SponsorBanner["a" /* SponsorBanner */])(toSponsor(sponsor)));
  })), external_react_default.a.createElement(react_layout_grid_["Row"], null, external_react_default.a.createElement(react_layout_grid_["Cell"], null, external_react_default.a.createElement(react_typography_["Headline3"], null, "Gold")), gold.map(function (sponsor) {
    return external_react_default.a.createElement(react_layout_grid_["Cell"], {
      columns: 6,
      desktopColumns: 6,
      style: style
    }, Object(SponsorBanner["a" /* SponsorBanner */])(toSponsor(sponsor)));
  })), external_react_default.a.createElement(react_layout_grid_["Cell"], null, external_react_default.a.createElement(react_typography_["Headline3"], null, "Silver")), external_react_default.a.createElement(react_layout_grid_["Row"], null, silver.map(function (sponsor) {
    return external_react_default.a.createElement(react_layout_grid_["Cell"], {
      columns: 4,
      desktopColumns: 3,
      style: style
    }, Object(SponsorBanner["a" /* SponsorBanner */])(toSponsor(sponsor)));
  })), external_react_default.a.createElement(react_layout_grid_["Cell"], null, external_react_default.a.createElement(react_typography_["Headline3"], null, "Supporter")), external_react_default.a.createElement(react_layout_grid_["Row"], null, supporter.map(function (sponsor) {
    return external_react_default.a.createElement(react_layout_grid_["Cell"], {
      columns: 4,
      desktopColumns: 3,
      style: style
    }, Object(SponsorBanner["a" /* SponsorBanner */])(toSponsor(sponsor)));
  })));
}

function toSponsor(_ref2) {
  var banner = _ref2.banner,
      url = _ref2.url,
      args = objectWithoutProperties_default()(_ref2, ["banner", "url"]);

  return _objectSpread({
    src: banner,
    href: url
  }, args);
}
// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/organisms/index.js







// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/pages/index.js




/* harmony default export */ var pages = __webpack_exports__["default"] = (function () {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(Hero_Hero, null), external_react_default.a.createElement(Menu["a" /* Menu */], null), external_react_default.a.createElement(Speakers_Speakers, {
    speakers: resources["c" /* speakers */]
  }), external_react_default.a.createElement(Sponsors, resources["d" /* sponsors */]), external_react_default.a.createElement(Staff_Staff, {
    staff: resources["e" /* staff */]
  }), external_react_default.a.createElement(external_react_static_["Head"], null, external_react_default.a.createElement("title", null, "\u30AA\u30FC\u30D7\u30F3\u30BB\u30DF\u30CA\u30FC2024@\u5E83\u5CF6")));
});

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("@material/react-material-icon");

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(52);
__webpack_require__(53);
module.exports = __webpack_require__(59);


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(34)["default"];

var _require = __webpack_require__(35),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("C:\\Users\\NaoyukiHamada\\Documents\\Source\\osh-web.github.com\\artifacts\\react-static-browser-plugins.js", function () {
    registerPlugins(__webpack_require__(34)["default"]);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(27)(module)))

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(35),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(36),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("C:\\Users\\NaoyukiHamada\\Documents\\Source\\osh-web.github.com\\artifacts\\react-static-templates.js", function () {
    var _require3 = __webpack_require__(36),
        templates = _require3["default"],
        notFoundTemplate = _require3.notFoundTemplate;

    registerTemplates(templates, notFoundTemplate);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(27)(module)))

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(29);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 26,
	"./": 26,
	"./index": 26,
	"./index.js": 26
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 55;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(28);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(37);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2["default"].Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("vm");

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(38);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(16);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(60);

var _interopRequireDefault = __webpack_require__(61);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(6));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(20));

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(62);
/* eslint-disable import/no-dynamic-require */


var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : React.createElement(React.Fragment, {
    key: key
  }, children);
} // Override the suspense module to be our own


React.Suspense = Suspense;
React["default"].Suspense = Suspense;

var App = __webpack_require__(65)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("C:\\Users\\NaoyukiHamada\\Documents\\Source\\osh-web.github.com\\node_modules\\react-static\\lib\\browser\\hooks\\useStaticInfo");

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)(false);
// Module
exports.push([module.i, ".mdc-top-app-bar{background-color:#000;background-color:var(--mdc-theme-primary, #000);color:#fff;display:flex;position:fixed;flex-direction:column;justify-content:space-between;box-sizing:border-box;width:100%;z-index:4}.mdc-top-app-bar .mdc-top-app-bar__action-item,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon{color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-top-app-bar .mdc-top-app-bar__action-item::before,.mdc-top-app-bar .mdc-top-app-bar__action-item::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::after{background-color:#fff}@supports not (-ms-ime-align: auto){.mdc-top-app-bar .mdc-top-app-bar__action-item::before,.mdc-top-app-bar .mdc-top-app-bar__action-item::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::after{background-color:var(--mdc-theme-on-primary, #fff)}}.mdc-top-app-bar .mdc-top-app-bar__action-item:hover::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:hover::before{opacity:.08}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):focus::before,.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):focus::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--background-focused::before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.24}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded)::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded)::after{-webkit-transition:opacity 150ms linear;transition:opacity 150ms linear}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):active::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):active::after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.32}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: .32}.mdc-top-app-bar__row{display:flex;position:relative;box-sizing:border-box;width:100%;height:64px}.mdc-top-app-bar__section{display:inline-flex;flex:1 1 auto;align-items:center;min-width:0;padding:8px 12px;z-index:1}.mdc-top-app-bar__section--align-start{justify-content:flex-start;order:-1}.mdc-top-app-bar__section--align-end{justify-content:flex-end;order:1}.mdc-top-app-bar__title{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1.25rem;line-height:2rem;font-weight:500;letter-spacing:.0125em;text-decoration:inherit;text-transform:inherit;padding-left:20px;padding-right:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:1}[dir=\"rtl\"] .mdc-top-app-bar__title,.mdc-top-app-bar__title[dir=\"rtl\"]{padding-left:0;padding-right:20px}.mdc-top-app-bar__action-item,.mdc-top-app-bar__navigation-icon{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform, opacity;display:flex;position:relative;flex-shrink:0;align-items:center;justify-content:center;box-sizing:border-box;width:48px;height:48px;padding:12px;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer}.mdc-top-app-bar__action-item::before,.mdc-top-app-bar__action-item::after,.mdc-top-app-bar__navigation-icon::before,.mdc-top-app-bar__navigation-icon::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-top-app-bar__action-item::before,.mdc-top-app-bar__navigation-icon::before{-webkit-transition:opacity 15ms linear,background-color 15ms linear;transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-top-app-bar__action-item.mdc-ripple-upgraded::before,.mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded::before{-webkit-transform:scale(var(--mdc-ripple-fg-scale, 1));transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-top-app-bar__action-item.mdc-ripple-upgraded::after,.mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded::after{top:0;left:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}.mdc-top-app-bar__action-item.mdc-ripple-upgraded--unbounded::after,.mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-top-app-bar__action-item.mdc-ripple-upgraded--foreground-activation::after,.mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--foreground-activation::after{-webkit-animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards;animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards}.mdc-top-app-bar__action-item.mdc-ripple-upgraded--foreground-deactivation::after,.mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--foreground-deactivation::after{-webkit-animation:150ms mdc-ripple-fg-opacity-out;animation:150ms mdc-ripple-fg-opacity-out;-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-top-app-bar__action-item::before,.mdc-top-app-bar__action-item::after,.mdc-top-app-bar__navigation-icon::before,.mdc-top-app-bar__navigation-icon::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-top-app-bar__action-item.mdc-ripple-upgraded::before,.mdc-top-app-bar__action-item.mdc-ripple-upgraded::after,.mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded::before,.mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-top-app-bar__action-item.mdc-ripple-upgraded::after,.mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-top-app-bar--short-collapsed{border-radius:0 0 24px 0}[dir=\"rtl\"] .mdc-top-app-bar--short-collapsed,.mdc-top-app-bar--short-collapsed[dir=\"rtl\"]{border-radius:0 0 0 24px}.mdc-top-app-bar--short{top:0;right:auto;left:0;width:100%;-webkit-transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1);transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=\"rtl\"] .mdc-top-app-bar--short,.mdc-top-app-bar--short[dir=\"rtl\"]{right:0;left:auto}.mdc-top-app-bar--short .mdc-top-app-bar__row{height:56px}.mdc-top-app-bar--short .mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short .mdc-top-app-bar__title{-webkit-transition:opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.mdc-top-app-bar--short-collapsed{box-shadow:0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);width:56px;-webkit-transition:width 300ms cubic-bezier(0.4, 0, 0.2, 1);transition:width 300ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__title{display:none}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__action-item{-webkit-transition:padding 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:padding 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item{width:112px}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=\"rtl\"] .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end[dir=\"rtl\"]{padding-left:12px;padding-right:0}.mdc-top-app-bar--dense .mdc-top-app-bar__row{height:48px}.mdc-top-app-bar--dense .mdc-top-app-bar__section{padding:0 4px}.mdc-top-app-bar--dense .mdc-top-app-bar__title{padding-left:12px;padding-right:0}[dir=\"rtl\"] .mdc-top-app-bar--dense .mdc-top-app-bar__title,.mdc-top-app-bar--dense .mdc-top-app-bar__title[dir=\"rtl\"]{padding-left:0;padding-right:12px}.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:128px}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{align-self:flex-end;padding-bottom:2px}.mdc-top-app-bar--prominent .mdc-top-app-bar__action-item,.mdc-top-app-bar--prominent .mdc-top-app-bar__navigation-icon{align-self:flex-start}.mdc-top-app-bar--fixed{-webkit-transition:box-shadow 200ms linear;transition:box-shadow 200ms linear}.mdc-top-app-bar--fixed-scrolled{box-shadow:0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);-webkit-transition:box-shadow 200ms linear;transition:box-shadow 200ms linear}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:96px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section{padding:0 12px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-left:20px;padding-right:0;padding-bottom:9px}[dir=\"rtl\"] .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title,.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title[dir=\"rtl\"]{padding-left:0;padding-right:20px}.mdc-top-app-bar--fixed-adjust{padding-top:64px}.mdc-top-app-bar--dense-fixed-adjust{padding-top:48px}.mdc-top-app-bar--short-fixed-adjust{padding-top:56px}.mdc-top-app-bar--prominent-fixed-adjust{padding-top:128px}.mdc-top-app-bar--dense-prominent-fixed-adjust{padding-top:96px}@media (max-width: 599px){.mdc-top-app-bar__row{height:56px}.mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short{-webkit-transition:width 200ms cubic-bezier(0.4, 0, 0.2, 1);transition:width 200ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed{-webkit-transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1);transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=\"rtl\"] .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end[dir=\"rtl\"]{padding-left:12px;padding-right:0}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-bottom:6px}.mdc-top-app-bar--fixed-adjust{padding-top:56px}}@-webkit-keyframes mdc-ripple-fg-radius-in{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-radius-in{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@-webkit-keyframes mdc-ripple-fg-opacity-in{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-in{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@-webkit-keyframes mdc-ripple-fg-opacity-out{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}@keyframes mdc-ripple-fg-opacity-out{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.material-icons--ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform, opacity}.material-icons--ripple-surface::before,.material-icons--ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.material-icons--ripple-surface::before{-webkit-transition:opacity 15ms linear,background-color 15ms linear;transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.material-icons--ripple-surface.mdc-ripple-upgraded::before{-webkit-transform:scale(var(--mdc-ripple-fg-scale, 1));transform:scale(var(--mdc-ripple-fg-scale, 1))}.material-icons--ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}.material-icons--ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.material-icons--ripple-surface.mdc-ripple-upgraded--foreground-activation::after{-webkit-animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards;animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards}.material-icons--ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{-webkit-animation:150ms mdc-ripple-fg-opacity-out;animation:150ms mdc-ripple-fg-opacity-out;-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.material-icons--ripple-surface::before,.material-icons--ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.material-icons--ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.material-icons--ripple-surface::before,.material-icons--ripple-surface::after{background-color:#000}.material-icons--ripple-surface:hover::before{opacity:.04}.material-icons--ripple-surface:not(.mdc-ripple-upgraded):focus::before,.material-icons--ripple-surface.mdc-ripple-upgraded--background-focused::before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}.material-icons--ripple-surface:not(.mdc-ripple-upgraded)::after{-webkit-transition:opacity 150ms linear;transition:opacity 150ms linear}.material-icons--ripple-surface:not(.mdc-ripple-upgraded):active::after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.16}.material-icons--ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: .16}*{font-family:\"Noto Sans Japanese\"}body{margin:0;padding:0}\n", ""]);



/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)(false);
// Module
exports.push([module.i, "@-webkit-keyframes mdc-ripple-fg-radius-in{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-radius-in{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@-webkit-keyframes mdc-ripple-fg-opacity-in{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-in{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@-webkit-keyframes mdc-ripple-fg-opacity-out{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}@keyframes mdc-ripple-fg-opacity-out{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-button{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.08929em;text-decoration:none;text-transform:uppercase;--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform, opacity;padding:0 8px 0 8px;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;height:36px;border:none;outline:none;line-height:inherit;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-appearance:none;overflow:hidden;vertical-align:middle;border-radius:4px}.mdc-button::before,.mdc-button::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-button::before{-webkit-transition:opacity 15ms linear,background-color 15ms linear;transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-button.mdc-ripple-upgraded::before{-webkit-transform:scale(var(--mdc-ripple-fg-scale, 1));transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button.mdc-ripple-upgraded::after{top:0;left:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}.mdc-button.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-button.mdc-ripple-upgraded--foreground-activation::after{-webkit-animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards;animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards}.mdc-button.mdc-ripple-upgraded--foreground-deactivation::after{-webkit-animation:150ms mdc-ripple-fg-opacity-out;animation:150ms mdc-ripple-fg-opacity-out;-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button::before,.mdc-button::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-button.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{background-color:rgba(0,0,0,0);color:rgba(0,0,0,0.37);cursor:default;pointer-events:none}.mdc-button.mdc-button--dense{border-radius:4px}.mdc-button:not(:disabled){background-color:rgba(0,0,0,0)}.mdc-button:not(:disabled){color:#D84315;color:var(--mdc-theme-primary, #D84315)}.mdc-button::before,.mdc-button::after{background-color:#D84315}@supports not (-ms-ime-align: auto){.mdc-button::before,.mdc-button::after{background-color:var(--mdc-theme-primary, #D84315)}}.mdc-button:hover::before{opacity:.04}.mdc-button:not(.mdc-ripple-upgraded):focus::before,.mdc-button.mdc-ripple-upgraded--background-focused::before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}.mdc-button:not(.mdc-ripple-upgraded)::after{-webkit-transition:opacity 150ms linear;transition:opacity 150ms linear}.mdc-button:not(.mdc-ripple-upgraded):active::after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.16}.mdc-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: .16}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=\"rtl\"] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=\"rtl\"]{margin-left:8px;margin-right:0}.mdc-button svg.mdc-button__icon{fill:currentColor}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir=\"rtl\"] .mdc-button--raised .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=\"rtl\"],[dir=\"rtl\"] .mdc-button--unelevated .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir=\"rtl\"],[dir=\"rtl\"] .mdc-button--outlined .mdc-button__icon,.mdc-button--outlined .mdc-button__icon[dir=\"rtl\"]{margin-left:8px;margin-right:-4px}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px 0 16px}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0,0,0,0.12);color:rgba(0,0,0,0.37)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#D84315}@supports not (-ms-ime-align: auto){.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:var(--mdc-theme-primary, #D84315)}}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised::before,.mdc-button--raised::after,.mdc-button--unelevated::before,.mdc-button--unelevated::after{background-color:#fff}@supports not (-ms-ime-align: auto){.mdc-button--raised::before,.mdc-button--raised::after,.mdc-button--unelevated::before,.mdc-button--unelevated::after{background-color:var(--mdc-theme-on-primary, #fff)}}.mdc-button--raised:hover::before,.mdc-button--unelevated:hover::before{opacity:.08}.mdc-button--raised:not(.mdc-ripple-upgraded):focus::before,.mdc-button--raised.mdc-ripple-upgraded--background-focused::before,.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus::before,.mdc-button--unelevated.mdc-ripple-upgraded--background-focused::before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.24}.mdc-button--raised:not(.mdc-ripple-upgraded)::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded)::after{-webkit-transition:opacity 150ms linear;transition:opacity 150ms linear}.mdc-button--raised:not(.mdc-ripple-upgraded):active::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded):active::after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.32}.mdc-button--raised.mdc-ripple-upgraded,.mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: .32}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);-webkit-transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0,0,0,0.2),0px 0px 0px 0px rgba(0,0,0,0.14),0px 0px 0px 0px rgba(0,0,0,0.12)}.mdc-button--outlined{border-style:solid;padding:0 14px 0 14px;border-width:2px}.mdc-button--outlined:disabled{border-color:rgba(0,0,0,0.37)}.mdc-button--outlined:not(:disabled){border-color:#D84315;border-color:var(--mdc-theme-primary, #D84315)}.mdc-button--dense{height:32px;font-size:.8125rem}.mdc-card{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-radius:4px;box-shadow:0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);display:flex;flex-direction:column;box-sizing:border-box}.mdc-card--outlined{box-shadow:0px 0px 0px 0px rgba(0,0,0,0.2),0px 0px 0px 0px rgba(0,0,0,0.14),0px 0px 0px 0px rgba(0,0,0,0.12);border:1px solid #e0e0e0}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:\"\"}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__media--square::before{margin-top:100%}.mdc-card__media--16-9::before{margin-top:56.25%}.mdc-card__media-content{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box}.mdc-card__primary-action{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform, opacity;display:flex;flex-direction:column;box-sizing:border-box;position:relative;outline:none;color:inherit;text-decoration:none;cursor:pointer;overflow:hidden}.mdc-card__primary-action::before,.mdc-card__primary-action::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-card__primary-action::before{-webkit-transition:opacity 15ms linear,background-color 15ms linear;transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-card__primary-action.mdc-ripple-upgraded::before{-webkit-transform:scale(var(--mdc-ripple-fg-scale, 1));transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-card__primary-action.mdc-ripple-upgraded::after{top:0;left:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}.mdc-card__primary-action.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-card__primary-action.mdc-ripple-upgraded--foreground-activation::after{-webkit-animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards;animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards}.mdc-card__primary-action.mdc-ripple-upgraded--foreground-deactivation::after{-webkit-animation:150ms mdc-ripple-fg-opacity-out;animation:150ms mdc-ripple-fg-opacity-out;-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-card__primary-action::before,.mdc-card__primary-action::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-card__primary-action.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-card__primary-action::before,.mdc-card__primary-action::after{background-color:#000}.mdc-card__primary-action:hover::before{opacity:.04}.mdc-card__primary-action:not(.mdc-ripple-upgraded):focus::before,.mdc-card__primary-action.mdc-ripple-upgraded--background-focused::before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}.mdc-card__primary-action:not(.mdc-ripple-upgraded)::after{-webkit-transition:opacity 150ms linear;transition:opacity 150ms linear}.mdc-card__primary-action:not(.mdc-ripple-upgraded):active::after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.16}.mdc-card__primary-action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: .16}.mdc-card__primary-action:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__primary-action:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mdc-card__actions--full-bleed{padding:0}.mdc-card__action-buttons,.mdc-card__action-icons{display:flex;flex-direction:row;align-items:center;box-sizing:border-box}.mdc-card__action-icons{color:rgba(0,0,0,0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0,0,0,0.38));flex-grow:1;justify-content:flex-end}.mdc-card__action-buttons+.mdc-card__action-icons{margin-left:16px;margin-right:0}[dir=\"rtl\"] .mdc-card__action-buttons+.mdc-card__action-icons,.mdc-card__action-buttons+.mdc-card__action-icons[dir=\"rtl\"]{margin-left:0;margin-right:16px}.mdc-card__action{display:inline-flex;flex-direction:row;align-items:center;box-sizing:border-box;justify-content:center;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.mdc-card__action:focus{outline:none}.mdc-card__action--button{margin-left:0;margin-right:8px;padding:0 8px}[dir=\"rtl\"] .mdc-card__action--button,.mdc-card__action--button[dir=\"rtl\"]{margin-left:8px;margin-right:0}.mdc-card__action--button:last-child{margin-left:0;margin-right:0}[dir=\"rtl\"] .mdc-card__action--button:last-child,.mdc-card__action--button:last-child[dir=\"rtl\"]{margin-left:0;margin-right:0}.mdc-card__actions--full-bleed .mdc-card__action--button{justify-content:space-between;width:100%;height:auto;max-height:none;margin:0;padding:8px 16px;text-align:left}[dir=\"rtl\"] .mdc-card__actions--full-bleed .mdc-card__action--button,.mdc-card__actions--full-bleed .mdc-card__action--button[dir=\"rtl\"]{text-align:right}.mdc-card__action--icon{margin:-6px 0;padding:12px}.mdc-card__action--icon:not(:disabled){color:rgba(0,0,0,0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0,0,0,0.38))}.mdc-icon-button{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform, opacity;width:48px;height:48px;padding:12px;font-size:24px;display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.mdc-icon-button::before,.mdc-icon-button::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-icon-button::before{-webkit-transition:opacity 15ms linear,background-color 15ms linear;transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-icon-button.mdc-ripple-upgraded::before{-webkit-transform:scale(var(--mdc-ripple-fg-scale, 1));transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-icon-button.mdc-ripple-upgraded::after{top:0;left:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}.mdc-icon-button.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-icon-button.mdc-ripple-upgraded--foreground-activation::after{-webkit-animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards;animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards}.mdc-icon-button.mdc-ripple-upgraded--foreground-deactivation::after{-webkit-animation:150ms mdc-ripple-fg-opacity-out;animation:150ms mdc-ripple-fg-opacity-out;-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-icon-button::before,.mdc-icon-button::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-icon-button.mdc-ripple-upgraded::before,.mdc-icon-button.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-icon-button.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button:disabled{color:rgba(0,0,0,0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0,0,0,0.38));cursor:default;pointer-events:none}.mdc-icon-button::before,.mdc-icon-button::after{background-color:#000}.mdc-icon-button:hover::before{opacity:.04}.mdc-icon-button:not(.mdc-ripple-upgraded):focus::before,.mdc-icon-button.mdc-ripple-upgraded--background-focused::before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}.mdc-icon-button:not(.mdc-ripple-upgraded)::after{-webkit-transition:opacity 150ms linear;transition:opacity 150ms linear}.mdc-icon-button:not(.mdc-ripple-upgraded):active::after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.16}.mdc-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: .16}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-elevation--z0{box-shadow:0px 0px 0px 0px rgba(0,0,0,0.2),0px 0px 0px 0px rgba(0,0,0,0.14),0px 0px 0px 0px rgba(0,0,0,0.12)}.mdc-elevation--z1{box-shadow:0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)}.mdc-elevation--z2{box-shadow:0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)}.mdc-elevation--z3{box-shadow:0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)}.mdc-elevation--z4{box-shadow:0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)}.mdc-elevation--z5{box-shadow:0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)}.mdc-elevation--z6{box-shadow:0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)}.mdc-elevation--z7{box-shadow:0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)}.mdc-elevation--z8{box-shadow:0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)}.mdc-elevation--z9{box-shadow:0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)}.mdc-elevation--z10{box-shadow:0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)}.mdc-elevation--z11{box-shadow:0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)}.mdc-elevation--z12{box-shadow:0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)}.mdc-elevation--z13{box-shadow:0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)}.mdc-elevation--z14{box-shadow:0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)}.mdc-elevation--z15{box-shadow:0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)}.mdc-elevation--z16{box-shadow:0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)}.mdc-elevation--z17{box-shadow:0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)}.mdc-elevation--z18{box-shadow:0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)}.mdc-elevation--z19{box-shadow:0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)}.mdc-elevation--z20{box-shadow:0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)}.mdc-elevation--z21{box-shadow:0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)}.mdc-elevation--z22{box-shadow:0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)}.mdc-elevation--z23{box-shadow:0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)}.mdc-elevation--z24{box-shadow:0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)}.mdc-elevation-transition{-webkit-transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);will-change:box-shadow}:root{--mdc-layout-grid-margin-desktop: 24px;--mdc-layout-grid-gutter-desktop: 24px;--mdc-layout-grid-column-width-desktop: 72px;--mdc-layout-grid-margin-tablet: 16px;--mdc-layout-grid-gutter-tablet: 16px;--mdc-layout-grid-column-width-tablet: 72px;--mdc-layout-grid-margin-phone: 16px;--mdc-layout-grid-gutter-phone: 16px;--mdc-layout-grid-column-width-phone: 72px}@media (min-width: 840px){.mdc-layout-grid{box-sizing:border-box;margin:0 auto;padding:24px;padding:var(--mdc-layout-grid-margin-desktop, 24px)}}@media (min-width: 480px) and (max-width: 839px){.mdc-layout-grid{box-sizing:border-box;margin:0 auto;padding:16px;padding:var(--mdc-layout-grid-margin-tablet, 16px)}}@media (max-width: 479px){.mdc-layout-grid{box-sizing:border-box;margin:0 auto;padding:16px;padding:var(--mdc-layout-grid-margin-phone, 16px)}}@media (min-width: 840px){.mdc-layout-grid__inner{display:flex;flex-flow:row wrap;align-items:stretch;margin:-12px;margin:calc(var(--mdc-layout-grid-gutter-desktop, 24px) / 2 * -1)}@supports (display: grid){.mdc-layout-grid__inner{display:grid;margin:0;grid-gap:24px;grid-gap:var(--mdc-layout-grid-gutter-desktop, 24px);grid-template-columns:repeat(12, minmax(0, 1fr))}}}@media (min-width: 480px) and (max-width: 839px){.mdc-layout-grid__inner{display:flex;flex-flow:row wrap;align-items:stretch;margin:-8px;margin:calc(var(--mdc-layout-grid-gutter-tablet, 16px) / 2 * -1)}@supports (display: grid){.mdc-layout-grid__inner{display:grid;margin:0;grid-gap:16px;grid-gap:var(--mdc-layout-grid-gutter-tablet, 16px);grid-template-columns:repeat(8, minmax(0, 1fr))}}}@media (max-width: 479px){.mdc-layout-grid__inner{display:flex;flex-flow:row wrap;align-items:stretch;margin:-8px;margin:calc(var(--mdc-layout-grid-gutter-phone, 16px) / 2 * -1)}@supports (display: grid){.mdc-layout-grid__inner{display:grid;margin:0;grid-gap:16px;grid-gap:var(--mdc-layout-grid-gutter-phone, 16px);grid-template-columns:repeat(4, minmax(0, 1fr))}}}@media (min-width: 840px){.mdc-layout-grid__cell{width:calc(33.33333% - 24px);width:calc(33.33333% - var(--mdc-layout-grid-gutter-desktop, 24px));box-sizing:border-box;margin:12px;margin:calc(var(--mdc-layout-grid-gutter-desktop, 24px) / 2)}@supports (display: grid){.mdc-layout-grid__cell{width:auto;grid-column-end:span 4}}@supports (display: grid){.mdc-layout-grid__cell{margin:0}}.mdc-layout-grid__cell--span-1,.mdc-layout-grid__cell--span-1-desktop{width:calc(8.33333% - 24px);width:calc(8.33333% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports (display: grid){.mdc-layout-grid__cell--span-1,.mdc-layout-grid__cell--span-1-desktop{width:auto;grid-column-end:span 1}}.mdc-layout-grid__cell--span-2,.mdc-layout-grid__cell--span-2-desktop{width:calc(16.66667% - 24px);width:calc(16.66667% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports (display: grid){.mdc-layout-grid__cell--span-2,.mdc-layout-grid__cell--span-2-desktop{width:auto;grid-column-end:span 2}}.mdc-layout-grid__cell--span-3,.mdc-layout-grid__cell--span-3-desktop{width:calc(25% - 24px);width:calc(25% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports (display: grid){.mdc-layout-grid__cell--span-3,.mdc-layout-grid__cell--span-3-desktop{width:auto;grid-column-end:span 3}}.mdc-layout-grid__cell--span-4,.mdc-layout-grid__cell--span-4-desktop{width:calc(33.33333% - 24px);width:calc(33.33333% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports (display: grid){.mdc-layout-grid__cell--span-4,.mdc-layout-grid__cell--span-4-desktop{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-5,.mdc-layout-grid__cell--span-5-desktop{width:calc(41.66667% - 24px);width:calc(41.66667% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports (display: grid){.mdc-layout-grid__cell--span-5,.mdc-layout-grid__cell--span-5-desktop{width:auto;grid-column-end:span 5}}.mdc-layout-grid__cell--span-6,.mdc-layout-grid__cell--span-6-desktop{width:calc(50% - 24px);width:calc(50% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports (display: grid){.mdc-layout-grid__cell--span-6,.mdc-layout-grid__cell--span-6-desktop{width:auto;grid-column-end:span 6}}.mdc-layout-grid__cell--span-7,.mdc-layout-grid__cell--span-7-desktop{width:calc(58.33333% - 24px);width:calc(58.33333% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports (display: grid){.mdc-layout-grid__cell--span-7,.mdc-layout-grid__cell--span-7-desktop{width:auto;grid-column-end:span 7}}.mdc-layout-grid__cell--span-8,.mdc-layout-grid__cell--span-8-desktop{width:calc(66.66667% - 24px);width:calc(66.66667% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports (display: grid){.mdc-layout-grid__cell--span-8,.mdc-layout-grid__cell--span-8-desktop{width:auto;grid-column-end:span 8}}.mdc-layout-grid__cell--span-9,.mdc-layout-grid__cell--span-9-desktop{width:calc(75% - 24px);width:calc(75% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports (display: grid){.mdc-layout-grid__cell--span-9,.mdc-layout-grid__cell--span-9-desktop{width:auto;grid-column-end:span 9}}.mdc-layout-grid__cell--span-10,.mdc-layout-grid__cell--span-10-desktop{width:calc(83.33333% - 24px);width:calc(83.33333% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports (display: grid){.mdc-layout-grid__cell--span-10,.mdc-layout-grid__cell--span-10-desktop{width:auto;grid-column-end:span 10}}.mdc-layout-grid__cell--span-11,.mdc-layout-grid__cell--span-11-desktop{width:calc(91.66667% - 24px);width:calc(91.66667% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports (display: grid){.mdc-layout-grid__cell--span-11,.mdc-layout-grid__cell--span-11-desktop{width:auto;grid-column-end:span 11}}.mdc-layout-grid__cell--span-12,.mdc-layout-grid__cell--span-12-desktop{width:calc(100% - 24px);width:calc(100% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports (display: grid){.mdc-layout-grid__cell--span-12,.mdc-layout-grid__cell--span-12-desktop{width:auto;grid-column-end:span 12}}}@media (min-width: 480px) and (max-width: 839px){.mdc-layout-grid__cell{width:calc(50% - 16px);width:calc(50% - var(--mdc-layout-grid-gutter-tablet, 16px));box-sizing:border-box;margin:8px;margin:calc(var(--mdc-layout-grid-gutter-tablet, 16px) / 2)}@supports (display: grid){.mdc-layout-grid__cell{width:auto;grid-column-end:span 4}}@supports (display: grid){.mdc-layout-grid__cell{margin:0}}.mdc-layout-grid__cell--span-1,.mdc-layout-grid__cell--span-1-tablet{width:calc(12.5% - 16px);width:calc(12.5% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-1,.mdc-layout-grid__cell--span-1-tablet{width:auto;grid-column-end:span 1}}.mdc-layout-grid__cell--span-2,.mdc-layout-grid__cell--span-2-tablet{width:calc(25% - 16px);width:calc(25% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-2,.mdc-layout-grid__cell--span-2-tablet{width:auto;grid-column-end:span 2}}.mdc-layout-grid__cell--span-3,.mdc-layout-grid__cell--span-3-tablet{width:calc(37.5% - 16px);width:calc(37.5% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-3,.mdc-layout-grid__cell--span-3-tablet{width:auto;grid-column-end:span 3}}.mdc-layout-grid__cell--span-4,.mdc-layout-grid__cell--span-4-tablet{width:calc(50% - 16px);width:calc(50% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-4,.mdc-layout-grid__cell--span-4-tablet{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-5,.mdc-layout-grid__cell--span-5-tablet{width:calc(62.5% - 16px);width:calc(62.5% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-5,.mdc-layout-grid__cell--span-5-tablet{width:auto;grid-column-end:span 5}}.mdc-layout-grid__cell--span-6,.mdc-layout-grid__cell--span-6-tablet{width:calc(75% - 16px);width:calc(75% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-6,.mdc-layout-grid__cell--span-6-tablet{width:auto;grid-column-end:span 6}}.mdc-layout-grid__cell--span-7,.mdc-layout-grid__cell--span-7-tablet{width:calc(87.5% - 16px);width:calc(87.5% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-7,.mdc-layout-grid__cell--span-7-tablet{width:auto;grid-column-end:span 7}}.mdc-layout-grid__cell--span-8,.mdc-layout-grid__cell--span-8-tablet{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-8,.mdc-layout-grid__cell--span-8-tablet{width:auto;grid-column-end:span 8}}.mdc-layout-grid__cell--span-9,.mdc-layout-grid__cell--span-9-tablet{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-9,.mdc-layout-grid__cell--span-9-tablet{width:auto;grid-column-end:span 8}}.mdc-layout-grid__cell--span-10,.mdc-layout-grid__cell--span-10-tablet{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-10,.mdc-layout-grid__cell--span-10-tablet{width:auto;grid-column-end:span 8}}.mdc-layout-grid__cell--span-11,.mdc-layout-grid__cell--span-11-tablet{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-11,.mdc-layout-grid__cell--span-11-tablet{width:auto;grid-column-end:span 8}}.mdc-layout-grid__cell--span-12,.mdc-layout-grid__cell--span-12-tablet{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-12,.mdc-layout-grid__cell--span-12-tablet{width:auto;grid-column-end:span 8}}}@media (max-width: 479px){.mdc-layout-grid__cell{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));box-sizing:border-box;margin:8px;margin:calc(var(--mdc-layout-grid-gutter-phone, 16px) / 2)}@supports (display: grid){.mdc-layout-grid__cell{width:auto;grid-column-end:span 4}}@supports (display: grid){.mdc-layout-grid__cell{margin:0}}.mdc-layout-grid__cell--span-1,.mdc-layout-grid__cell--span-1-phone{width:calc(25% - 16px);width:calc(25% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-1,.mdc-layout-grid__cell--span-1-phone{width:auto;grid-column-end:span 1}}.mdc-layout-grid__cell--span-2,.mdc-layout-grid__cell--span-2-phone{width:calc(50% - 16px);width:calc(50% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-2,.mdc-layout-grid__cell--span-2-phone{width:auto;grid-column-end:span 2}}.mdc-layout-grid__cell--span-3,.mdc-layout-grid__cell--span-3-phone{width:calc(75% - 16px);width:calc(75% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-3,.mdc-layout-grid__cell--span-3-phone{width:auto;grid-column-end:span 3}}.mdc-layout-grid__cell--span-4,.mdc-layout-grid__cell--span-4-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-4,.mdc-layout-grid__cell--span-4-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-5,.mdc-layout-grid__cell--span-5-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-5,.mdc-layout-grid__cell--span-5-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-6,.mdc-layout-grid__cell--span-6-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-6,.mdc-layout-grid__cell--span-6-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-7,.mdc-layout-grid__cell--span-7-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-7,.mdc-layout-grid__cell--span-7-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-8,.mdc-layout-grid__cell--span-8-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-8,.mdc-layout-grid__cell--span-8-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-9,.mdc-layout-grid__cell--span-9-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-9,.mdc-layout-grid__cell--span-9-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-10,.mdc-layout-grid__cell--span-10-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-10,.mdc-layout-grid__cell--span-10-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-11,.mdc-layout-grid__cell--span-11-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-11,.mdc-layout-grid__cell--span-11-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-12,.mdc-layout-grid__cell--span-12-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-12,.mdc-layout-grid__cell--span-12-phone{width:auto;grid-column-end:span 4}}}.mdc-layout-grid__cell--order-1{order:1}.mdc-layout-grid__cell--order-2{order:2}.mdc-layout-grid__cell--order-3{order:3}.mdc-layout-grid__cell--order-4{order:4}.mdc-layout-grid__cell--order-5{order:5}.mdc-layout-grid__cell--order-6{order:6}.mdc-layout-grid__cell--order-7{order:7}.mdc-layout-grid__cell--order-8{order:8}.mdc-layout-grid__cell--order-9{order:9}.mdc-layout-grid__cell--order-10{order:10}.mdc-layout-grid__cell--order-11{order:11}.mdc-layout-grid__cell--order-12{order:12}.mdc-layout-grid__cell--align-top{align-self:flex-start}@supports (display: grid){.mdc-layout-grid__cell--align-top{align-self:start}}.mdc-layout-grid__cell--align-middle{align-self:center}.mdc-layout-grid__cell--align-bottom{align-self:flex-end}@supports (display: grid){.mdc-layout-grid__cell--align-bottom{align-self:end}}@media (min-width: 840px){.mdc-layout-grid--fixed-column-width{width:1176px;width:calc( var(--mdc-layout-grid-column-width-desktop, 72px) * 12 + var(--mdc-layout-grid-gutter-desktop, 24px) * 11 + var(--mdc-layout-grid-margin-desktop, 24px) * 2)}}@media (min-width: 480px) and (max-width: 839px){.mdc-layout-grid--fixed-column-width{width:720px;width:calc( var(--mdc-layout-grid-column-width-tablet, 72px) * 8 + var(--mdc-layout-grid-gutter-tablet, 16px) * 7 + var(--mdc-layout-grid-margin-tablet, 16px) * 2)}}@media (max-width: 479px){.mdc-layout-grid--fixed-column-width{width:368px;width:calc( var(--mdc-layout-grid-column-width-phone, 72px) * 4 + var(--mdc-layout-grid-gutter-phone, 16px) * 3 + var(--mdc-layout-grid-margin-phone, 16px) * 2)}}.mdc-layout-grid--align-left{margin-right:auto;margin-left:0}.mdc-layout-grid--align-right{margin-right:0;margin-left:auto}.material-icons--ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform, opacity}.material-icons--ripple-surface::before,.material-icons--ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.material-icons--ripple-surface::before{-webkit-transition:opacity 15ms linear,background-color 15ms linear;transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.material-icons--ripple-surface.mdc-ripple-upgraded::before{-webkit-transform:scale(var(--mdc-ripple-fg-scale, 1));transform:scale(var(--mdc-ripple-fg-scale, 1))}.material-icons--ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}.material-icons--ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.material-icons--ripple-surface.mdc-ripple-upgraded--foreground-activation::after{-webkit-animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards;animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards}.material-icons--ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{-webkit-animation:150ms mdc-ripple-fg-opacity-out;animation:150ms mdc-ripple-fg-opacity-out;-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.material-icons--ripple-surface::before,.material-icons--ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.material-icons--ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.material-icons--ripple-surface::before,.material-icons--ripple-surface::after{background-color:#000}.material-icons--ripple-surface:hover::before{opacity:.04}.material-icons--ripple-surface:not(.mdc-ripple-upgraded):focus::before,.material-icons--ripple-surface.mdc-ripple-upgraded--background-focused::before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}.material-icons--ripple-surface:not(.mdc-ripple-upgraded)::after{-webkit-transition:opacity 150ms linear;transition:opacity 150ms linear}.material-icons--ripple-surface:not(.mdc-ripple-upgraded):active::after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.16}.material-icons--ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: .16}.mdc-top-app-bar{background-color:#D84315;background-color:var(--mdc-theme-primary, #D84315);color:#fff;display:flex;position:fixed;flex-direction:column;justify-content:space-between;box-sizing:border-box;width:100%;z-index:4}.mdc-top-app-bar .mdc-top-app-bar__action-item,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon{color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-top-app-bar .mdc-top-app-bar__action-item::before,.mdc-top-app-bar .mdc-top-app-bar__action-item::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::after{background-color:#fff}@supports not (-ms-ime-align: auto){.mdc-top-app-bar .mdc-top-app-bar__action-item::before,.mdc-top-app-bar .mdc-top-app-bar__action-item::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::after{background-color:var(--mdc-theme-on-primary, #fff)}}.mdc-top-app-bar .mdc-top-app-bar__action-item:hover::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:hover::before{opacity:.08}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):focus::before,.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):focus::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--background-focused::before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.24}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded)::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded)::after{-webkit-transition:opacity 150ms linear;transition:opacity 150ms linear}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):active::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):active::after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.32}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: .32}.mdc-top-app-bar__row{display:flex;position:relative;box-sizing:border-box;width:100%;height:64px}.mdc-top-app-bar__section{display:inline-flex;flex:1 1 auto;align-items:center;min-width:0;padding:8px 12px;z-index:1}.mdc-top-app-bar__section--align-start{justify-content:flex-start;order:-1}.mdc-top-app-bar__section--align-end{justify-content:flex-end;order:1}.mdc-top-app-bar__title{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1.25rem;line-height:2rem;font-weight:500;letter-spacing:.0125em;text-decoration:inherit;text-transform:inherit;padding-left:20px;padding-right:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:1}[dir=\"rtl\"] .mdc-top-app-bar__title,.mdc-top-app-bar__title[dir=\"rtl\"]{padding-left:0;padding-right:20px}.mdc-top-app-bar__action-item,.mdc-top-app-bar__navigation-icon{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform, opacity;display:flex;position:relative;flex-shrink:0;align-items:center;justify-content:center;box-sizing:border-box;width:48px;height:48px;padding:12px;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer}.mdc-top-app-bar__action-item::before,.mdc-top-app-bar__action-item::after,.mdc-top-app-bar__navigation-icon::before,.mdc-top-app-bar__navigation-icon::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-top-app-bar__action-item::before,.mdc-top-app-bar__navigation-icon::before{-webkit-transition:opacity 15ms linear,background-color 15ms linear;transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-top-app-bar__action-item.mdc-ripple-upgraded::before,.mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded::before{-webkit-transform:scale(var(--mdc-ripple-fg-scale, 1));transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-top-app-bar__action-item.mdc-ripple-upgraded::after,.mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded::after{top:0;left:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}.mdc-top-app-bar__action-item.mdc-ripple-upgraded--unbounded::after,.mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-top-app-bar__action-item.mdc-ripple-upgraded--foreground-activation::after,.mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--foreground-activation::after{-webkit-animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards;animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards}.mdc-top-app-bar__action-item.mdc-ripple-upgraded--foreground-deactivation::after,.mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--foreground-deactivation::after{-webkit-animation:150ms mdc-ripple-fg-opacity-out;animation:150ms mdc-ripple-fg-opacity-out;-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-top-app-bar__action-item::before,.mdc-top-app-bar__action-item::after,.mdc-top-app-bar__navigation-icon::before,.mdc-top-app-bar__navigation-icon::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-top-app-bar__action-item.mdc-ripple-upgraded::before,.mdc-top-app-bar__action-item.mdc-ripple-upgraded::after,.mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded::before,.mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-top-app-bar__action-item.mdc-ripple-upgraded::after,.mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-top-app-bar--short-collapsed{border-radius:0 0 24px 0}[dir=\"rtl\"] .mdc-top-app-bar--short-collapsed,.mdc-top-app-bar--short-collapsed[dir=\"rtl\"]{border-radius:0 0 0 24px}.mdc-top-app-bar--short{top:0;right:auto;left:0;width:100%;-webkit-transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1);transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=\"rtl\"] .mdc-top-app-bar--short,.mdc-top-app-bar--short[dir=\"rtl\"]{right:0;left:auto}.mdc-top-app-bar--short .mdc-top-app-bar__row{height:56px}.mdc-top-app-bar--short .mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short .mdc-top-app-bar__title{-webkit-transition:opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.mdc-top-app-bar--short-collapsed{box-shadow:0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);width:56px;-webkit-transition:width 300ms cubic-bezier(0.4, 0, 0.2, 1);transition:width 300ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__title{display:none}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__action-item{-webkit-transition:padding 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:padding 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item{width:112px}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=\"rtl\"] .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end[dir=\"rtl\"]{padding-left:12px;padding-right:0}.mdc-top-app-bar--dense .mdc-top-app-bar__row{height:48px}.mdc-top-app-bar--dense .mdc-top-app-bar__section{padding:0 4px}.mdc-top-app-bar--dense .mdc-top-app-bar__title{padding-left:12px;padding-right:0}[dir=\"rtl\"] .mdc-top-app-bar--dense .mdc-top-app-bar__title,.mdc-top-app-bar--dense .mdc-top-app-bar__title[dir=\"rtl\"]{padding-left:0;padding-right:12px}.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:128px}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{align-self:flex-end;padding-bottom:2px}.mdc-top-app-bar--prominent .mdc-top-app-bar__action-item,.mdc-top-app-bar--prominent .mdc-top-app-bar__navigation-icon{align-self:flex-start}.mdc-top-app-bar--fixed{-webkit-transition:box-shadow 200ms linear;transition:box-shadow 200ms linear}.mdc-top-app-bar--fixed-scrolled{box-shadow:0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);-webkit-transition:box-shadow 200ms linear;transition:box-shadow 200ms linear}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:96px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section{padding:0 12px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-left:20px;padding-right:0;padding-bottom:9px}[dir=\"rtl\"] .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title,.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title[dir=\"rtl\"]{padding-left:0;padding-right:20px}.mdc-top-app-bar--fixed-adjust{padding-top:64px}.mdc-top-app-bar--dense-fixed-adjust{padding-top:48px}.mdc-top-app-bar--short-fixed-adjust{padding-top:56px}.mdc-top-app-bar--prominent-fixed-adjust{padding-top:128px}.mdc-top-app-bar--dense-prominent-fixed-adjust{padding-top:96px}@media (max-width: 599px){.mdc-top-app-bar__row{height:56px}.mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short{-webkit-transition:width 200ms cubic-bezier(0.4, 0, 0.2, 1);transition:width 200ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed{-webkit-transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1);transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=\"rtl\"] .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end[dir=\"rtl\"]{padding-left:12px;padding-right:0}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-bottom:6px}.mdc-top-app-bar--fixed-adjust{padding-top:56px}}.mdc-typography{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}.mdc-typography--headline1{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:6rem;line-height:6rem;font-weight:300;letter-spacing:-.01563em;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline2{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:3.75rem;line-height:3.75rem;font-weight:300;letter-spacing:-.00833em;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline3{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:3rem;line-height:3.125rem;font-weight:400;letter-spacing:normal;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline4{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:2.125rem;line-height:2.5rem;font-weight:400;letter-spacing:.00735em;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline5{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1.5rem;line-height:2rem;font-weight:400;letter-spacing:normal;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline6{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1.25rem;line-height:2rem;font-weight:500;letter-spacing:.0125em;text-decoration:inherit;text-transform:inherit}.mdc-typography--subtitle1{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.75rem;font-weight:400;letter-spacing:.00937em;text-decoration:inherit;text-transform:inherit}.mdc-typography--subtitle2{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.375rem;font-weight:500;letter-spacing:.00714em;text-decoration:inherit;text-transform:inherit}.mdc-typography--body1{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.5rem;font-weight:400;letter-spacing:.03125em;text-decoration:inherit;text-transform:inherit}.mdc-typography--body2{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.01786em;text-decoration:inherit;text-transform:inherit}.mdc-typography--caption{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.75rem;line-height:1.25rem;font-weight:400;letter-spacing:.03333em;text-decoration:inherit;text-transform:inherit}.mdc-typography--button{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.08929em;text-decoration:none;text-transform:uppercase}.mdc-typography--overline{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.75rem;line-height:2rem;font-weight:500;letter-spacing:.16667em;text-decoration:none;text-transform:uppercase}\n", ""]);



/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(31);
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// EXTERNAL MODULE: external "react-hot-loader"
var external_react_hot_loader_ = __webpack_require__(49);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(9);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(23);

// EXTERNAL MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/organisms/Footer.js
var Footer = __webpack_require__(17);

// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/json_ld.js

/* harmony default export */ var json_ld = (function () {
  var structedData = {
    '@context': 'http://schema.org',
    '@type': 'Event',
    location: {
      '@type': 'Place',
      name: 'サテライトキャンパスひろしま 501 502',
      address: {
        '@type': 'PostalAddress',
        addressCountry: '日本',
        addressRegion: '中国地方'
      }
    },
    name: 'オープンセミナー2022@広島',
    description: 'IT技術者のボランティアによる中四国最高のセミナーイベント',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: '円',
      availability: 'in_stock',
      validFrom: '2022-03-30',
      url: 'https://osh.connpass.com/event/242991/'
    },
    image: '',
    performar: [],
    startDate: '2022-03-30',
    endDate: '2022-05-26',
    performer: {
      '@type': 'Person',
      name: ''
    }
  };
  var json = JSON.stringify(structedData);
  return external_react_default.a.createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: {
      __html: json
    }
  });
});
// EXTERNAL MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/App.scss
var src_App = __webpack_require__(63);

// EXTERNAL MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/MDC.scss
var MDC = __webpack_require__(64);

// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/App.js








var App_App = function App() {
  return external_react_default.a.createElement(external_react_static_["Root"], null, external_react_default.a.createElement("div", {
    className: "content"
  }, external_react_default.a.createElement(external_react_default.a.Suspense, {
    fallback: external_react_default.a.createElement("em", null, "Loading...")
  }, external_react_default.a.createElement(router_["Router"], null, external_react_default.a.createElement(external_react_static_["Routes"], {
    path: "*"
  }))), external_react_default.a.createElement(Footer["a" /* default */], null), external_react_default.a.createElement(json_ld, null)));
};

/* harmony default export */ var osh_web_github_com_src_App = (App_App);
// CONCATENATED MODULE: C:/Users/NaoyukiHamada/Documents/Source/osh-web.github.com/src/index.js


 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ var src = __webpack_exports__["default"] = (osh_web_github_com_src_App); // Render your app

if (typeof document !== 'undefined') {
  var renderMethod =  false ? undefined : external_react_dom_default.a.hydrate || external_react_dom_default.a.render;

  var src_render = function render(Comp) {
    renderMethod(external_react_default.a.createElement(external_react_hot_loader_["AppContainer"], null, external_react_default.a.createElement(Comp, null)), document.getElementById('root'));
  }; // Render!


  src_render(osh_web_github_com_src_App);

  if (false) {}
}

/***/ })
/******/ ]);
});