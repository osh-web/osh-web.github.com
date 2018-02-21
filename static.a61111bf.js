(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("grid-styled");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-size: 30px;\n  margin: 20px;\n\n  color: ', ';\n  display: block;\n  text-align: center;\n  border: solid ', ' 0px;\n  border-bottom-width: 1px;\n  font-weight: 100;\n'], ['\n  font-size: 30px;\n  margin: 20px;\n\n  color: ', ';\n  display: block;\n  text-align: center;\n  border: solid ', ' 0px;\n  border-bottom-width: 1px;\n  font-weight: 100;\n']);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _color = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var H1 = _styledComponents2.default.h1(_templateObject, _color.accent, _color.accent);

exports.default = H1;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var primary = exports.primary = '#D84315';
var accent = exports.accent = '#C62828';

exports.default = {
  primary: primary,
  accent: accent
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-size: 20px;\n\n  color: ', ';\n  text-align: center;\n  font-weight: 100;\n'], ['\n  font-size: 20px;\n\n  color: ', ';\n  text-align: center;\n  font-weight: 100;\n']);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _color = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var H2 = _styledComponents2.default.h2(_templateObject, _color.accent);

exports.default = H2;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.seminarList = exports.color = undefined;

var _color = __webpack_require__(5);

var _color2 = _interopRequireDefault(_color);

var _seminarList = __webpack_require__(35);

var _seminarList2 = _interopRequireDefault(_seminarList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.color = _color2.default;
exports.seminarList = _seminarList2.default;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackButton = exports.Footer = undefined;

var _Footer = __webpack_require__(42);

var _Footer2 = _interopRequireDefault(_Footer);

var _BackButton = __webpack_require__(44);

var _BackButton2 = _interopRequireDefault(_BackButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Footer = _Footer2.default;
exports.BackButton = _BackButton2.default;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
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
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: block;\n  padding: 18px;\n  text-decoration: none;\n  color: black;\n  text-align: center;\n  font-weight: 200;\n'], ['\n  display: block;\n  padding: 18px;\n  text-decoration: none;\n  color: black;\n  text-align: center;\n  font-weight: 200;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _gridStyled = __webpack_require__(1);

var _reactStatic = __webpack_require__(4);

var _ = __webpack_require__(31);

var _Information = __webpack_require__(36);

var _Information2 = _interopRequireDefault(_Information);

var _EventAbstract = __webpack_require__(38);

var _EventAbstract2 = _interopRequireDefault(_EventAbstract);

var _SponsorBannars = __webpack_require__(39);

var _SponsorBannars2 = _interopRequireDefault(_SponsorBannars);

var _Speakers = __webpack_require__(40);

var _Speakers2 = _interopRequireDefault(_Speakers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ListButtonInner = function ListButtonInner(_ref) {
  var to = _ref.to,
      className = _ref.className,
      children = _ref.children;
  return _react2.default.createElement(
    _reactStatic.Link,
    { to: to, className: className },
    children
  );
};

var ListButton = (0, _styledComponents2.default)(ListButtonInner)(_templateObject);

var menuList = [{
  to: '/about',
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
  to: '/history',
  text: 'これまでのオープンセミナー'
}];

var Menu = function Menu() {
  return _react2.default.createElement(
    _gridStyled.Flex,
    { wrap: true },
    menuList.map(function (_ref2) {
      var to = _ref2.to,
          text = _ref2.text;
      return _react2.default.createElement(
        _gridStyled.Half,
        null,
        _react2.default.createElement(
          ListButton,
          { to: to },
          text
        )
      );
    })
  );
};

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactStatic.Head,
      null,
      _react2.default.createElement(
        'title',
        null,
        '\u30AA\u30FC\u30D7\u30F3\u30BB\u30DF\u30CA\u30FC2018@\u5E83\u5CF6'
      )
    ),
    _react2.default.createElement(_.Hero, null),
    _react2.default.createElement(Menu, null),
    _react2.default.createElement(_Information2.default, null),
    _react2.default.createElement(_Speakers2.default, null),
    _react2.default.createElement(_EventAbstract2.default, null),
    _react2.default.createElement(_SponsorBannars2.default, null)
  );
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var atlassian = exports.atlassian = {
  name: 'アトラシアン株式会社',
  key: 'atlassian',
  url: 'https://ja.atlassian.com/company',
  bannar: true
};
var orange = exports.orange = {
  name: '株式会社オレンジシステム広島',
  key: 'orange',
  url: 'http://www.orange.co.jp/',
  bannar: true
};

var subthread = exports.subthread = {
  name: '株式会社サブスレッド',
  key: 'subthread',
  url: 'http://www.subthread.co.jp/',
  bannar: true
};

var cloudgarage = exports.cloudgarage = {
  name: 'CloudGarage',
  key: 'cloudgarage',
  url: 'https://cloudgarage.jp/',
  bannar: true
};

var platinum = exports.platinum = [atlassian, orange, cloudgarage, subthread];

var bitriver = exports.bitriver = {
  name: 'ビットリバー株式会社',
  key: 'bitriver',
  url: 'https://bitriver.jp',
  bannar: true
};

var gold = exports.gold = [bitriver];

var nextvision = exports.nextvision = {
  name: '株式会社ネクストビジョン',
  key: 'nextvision',
  url: 'https://www.nextvision.co.jp/',
  bannar: true
};

var linkroad = exports.linkroad = {
  name: '株式会社リンクロード',
  key: 'linkroad',
  url: 'http://linkroad.biz/',
  bannar: true
};

var pmaj = exports.pmaj = {
  name: '日本プロジェクトマネジメント協会',
  key: 'pmaj',
  url: 'http://www.pmaj.or.jp/',
  bannar: true
};

var silver = exports.silver = [nextvision, pmaj, linkroad];

exports.default = [].concat(platinum, gold, silver);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ryuzee = exports.ryuzee = {
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
var shoyoshi = exports.shoyoshi = {
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

var ma2shita = exports.ma2shita = {
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

var seratch = exports.seratch = {
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

var tatsuo310 = exports.tatsuo310 = {
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

var mkiskt = exports.mkiskt = {
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

var mao = exports.mao = {
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

exports.default = [ryuzee, shoyoshi, ma2shita, seratch, tatsuo310, mkiskt];

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(4);

var _gridStyled = __webpack_require__(1);

var _components = __webpack_require__(9);

var _H = __webpack_require__(3);

var _H2 = _interopRequireDefault(_H);

var _H3 = __webpack_require__(6);

var _H4 = _interopRequireDefault(_H3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var p1 = '\n\u30AA\u30FC\u30D7\u30F3\u30BB\u30DF\u30CA\u30FC\u306F2003\u5E74\u3088\u308A\u4E2D\u56DB\u56FD\u5730\u57DF\u3067\u958B\u50AC\u3055\u308C\u3066\u3044\u308B\nIT\u6280\u8853\u8005\u5411\u3051\u306E\u975E\u55B6\u5229\u306E\u7121\u6599\u30BB\u30DF\u30CA\u30FC\u3067\u3059\u3002\n';
var p2 = '\n\u73FE\u5728\u306F\u9999\u5DDD\u770C\u3001\u5CA1\u5C71\u770C\u3001\u5FB3\u5CF6\u770C\u3001\u5E83\u5CF6\u770C\u3001\u611B\u5A9B\u770C\u3067\u958B\u50AC\u3055\u308C\u3066\u304A\u308A\u3001\n\u4F01\u753B\u3068\u904B\u55B6\u306F\u5404\u5730\u57DF\u306E\u6280\u8853\u7CFB\u30E6\u30FC\u30B6\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u306E\u30DC\u30E9\u30F3\u30C6\u30A3\u30A2\u306B\u3088\u3063\u3066\u884C\u308F\u308C\u3066\u3044\u307E\u3059\u3002\n';

var Title = function Title(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    _H2.default,
    { f: [4, 6] },
    children
  );
};

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactStatic.Head,
      null,
      _react2.default.createElement(
        'title',
        null,
        '\u521D\u3081\u3066\u306E\u65B9\u3078 - \u30AA\u30FC\u30D7\u30F3\u30BB\u30DF\u30CA\u30FC\u5E83\u5CF6'
      )
    ),
    _react2.default.createElement(
      Title,
      null,
      '\u521D\u3081\u3066\u306E\u65B9\u3078'
    ),
    _react2.default.createElement(
      _H4.default,
      null,
      '\u30AA\u30FC\u30D7\u30F3\u30BB\u30DF\u30CA\u30FC\u3068\u306F'
    ),
    _react2.default.createElement(
      _gridStyled.Flex,
      { justify: 'center' },
      _react2.default.createElement(
        _gridStyled.Box,
        { mx: [16, 200] },
        p1,
        p2
      )
    ),
    _react2.default.createElement(
      _H4.default,
      null,
      '\u30AA\u30FC\u30D7\u30F3\u30BB\u30DF\u30CA\u30FC\u5E83\u5CF6\u306B\u3064\u3044\u3066'
    ),
    _react2.default.createElement(
      _gridStyled.Flex,
      { justify: 'center' },
      _react2.default.createElement(
        _gridStyled.Box,
        { mx: [16, 200] },
        _react2.default.createElement(
          'p',
          null,
          '\u5E83\u5CF6\u3067\u306F\u6BCE\u5E742\u6708\u3054\u308D\u306B\u30AA\u30FC\u30D7\u30F3\u30BB\u30DF\u30CA\u30FC\u3092\u958B\u50AC\u3092\u3057\u3066\u3044\u307E\u3059\u3002 \u5B9F\u884C\u59D4\u54E1\u9577\u3092\u6BCE\u5E74\u4EA4\u4EE3\u3092\u3057\u3001\u904B\u55B6\u306E\u30CE\u30A6\u30CF\u30A6\u3092\u5F15\u304D\u7D99\u304E\u3001\u65B0\u305F\u306A\u5B9F\u884C\u59D4\u54E1\u4F1A\u3092\u6BCE\u5E74\u7ACB\u3061\u4E0A\u3052\u3066\u3044\u307E\u3059\u3002 \u5B9F\u884C\u59D4\u54E1\u4F1A\u3067\u306F\u3001IT\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u306B\u7A4D\u6975\u7684\u306B\u53C2\u52A0\u30B7\u3066\u3044\u308B\u4EBA\u3084\u3001\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u3092\u7ACB\u3061\u4E0A\u3052\u3066\u3044\u308B\u4EBA\u305F\u3061\u304C\u4E3B\u3068\u306A\u3063\u3066\u3044\u307E\u3059\u3002 \u305D\u306E\u305F\u3081\u3001\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u306E\u5E74\u306B\u4E00\u5EA6\u306E\u304A\u796D\u308A\u306E\u3088\u3046\u306A\u3082\u306E\u3068\u306A\u3063\u3066\u3044\u307E\u3059\u3002'
        ),
        _react2.default.createElement(
          'p',
          null,
          '\u5B9F\u884C\u59D4\u54E1\u4F1A\u3067\u306F\u3001\u4E00\u7DD2\u306B\u30A4\u30D9\u30F3\u30C8\u3092\u4F5C\u308A\u3042\u3052\u305F\u3044\u4EF2\u9593\u3092\u63A2\u3057\u3066\u3044\u307E\u3059\u3002 \u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u540C\u58EB\u306E\u7E4B\u304C\u308A\u306E\u5F37\u304F\u3057\u305F\u3044\u65B9\u3084\u3001\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u306E\u4E3B\u50AC\u8005\u3068\u4EF2\u826F\u304F\u3057\u305F\u3044\u65B9\u306B\u304A\u3059\u3059\u3081\u3067\u3059\u3002 \u53C2\u52A0\u3054\u5E0C\u671B\u306E\u65B9\u306F\u6C17\u8EFD\u306B\u3054\u9023\u7D61\u304F\u3060\u3055\u3044\u3002'
        )
      )
    ),
    _react2.default.createElement(
      _components.BackButton,
      { Link: _reactStatic.Link, to: '/' },
      'HOME'
    )
  );
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  color: black;\n  text-decoration: none;\n'], ['\n  color: black;\n  text-decoration: none;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _gridStyled = __webpack_require__(1);

var _reactStatic = __webpack_require__(4);

var _components = __webpack_require__(9);

var _H = __webpack_require__(3);

var _H2 = _interopRequireDefault(_H);

var _resources = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BoxWrap = _gridStyled.Box.extend(_templateObject);

var Seminar = function Seminar(_ref) {
  var name = _ref.name,
      theme = _ref.theme,
      url = _ref.url;
  return _react2.default.createElement(
    BoxWrap,
    {
      is: 'a',
      href: url,
      width: [1, 0.48],
      py: 20,
      pl: [6, 20],
      f: [1, 4],
      mb: [20, 50],
      mr: 10
    },
    _react2.default.createElement(
      'h1',
      { f: [1, 3], color: '#666' },
      name
    ),
    _react2.default.createElement(
      'h2',
      { pt: 1, f: [2, 2, 4] },
      theme
    )
  );
};

exports.default = function () {
  return _react2.default.createElement(
    _gridStyled.Box,
    null,
    _react2.default.createElement(
      _H2.default,
      { f: [2, 5], p: [2, 4], mx: 24, my: 10 },
      '\u3053\u308C\u307E\u3067\u306E\u30AA\u30FC\u30D7\u30F3\u30BB\u30DF\u30CA\u30FC\u5E83\u5CF6'
    ),
    _react2.default.createElement(
      _gridStyled.Flex,
      { wrap: true, pl: [20, 100], pt: [10, 40] },
      _resources.seminarList.map(function (seminar) {
        return _react2.default.createElement(Seminar, seminar);
      })
    ),
    _react2.default.createElement(
      _components.BackButton,
      { Link: _reactStatic.Link, to: '/' },
      'HOME'
    ),
    ','
  );
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(18);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(19);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n* {\n  font-family: "Noto Sans Japanese";\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n'], ['\n* {\n  font-family: "Noto Sans Japanese";\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(20);

var _reactStatic = __webpack_require__(4);

var _reactHotLoader = __webpack_require__(21);

var _reactStaticRoutes = __webpack_require__(22);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _styledComponents = __webpack_require__(2);

var _json_ld = __webpack_require__(45);

var _json_ld2 = _interopRequireDefault(_json_ld);

var _components = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(0, _styledComponents.injectGlobal)(_templateObject);

var ScrollToTopBase = function (_Component) {
  _inherits(ScrollToTopBase, _Component);

  function ScrollToTopBase() {
    _classCallCheck(this, ScrollToTopBase);

    return _possibleConstructorReturn(this, (ScrollToTopBase.__proto__ || Object.getPrototypeOf(ScrollToTopBase)).apply(this, arguments));
  }

  _createClass(ScrollToTopBase, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        window.scrollTo(0, 0);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return ScrollToTopBase;
}(_react.Component);

var ScrollToTop = (0, _reactRouter.withRouter)(ScrollToTopBase);

var App = function App() {
  return _react2.default.createElement(
    _reactStatic.Router,
    null,
    _react2.default.createElement(
      ScrollToTop,
      null,
      _react2.default.createElement(
        'div',
        { className: 'content' },
        _react2.default.createElement(_reactStaticRoutes2.default, null),
        _react2.default.createElement(_components.Footer, { Link: _reactStatic.Link }),
        _react2.default.createElement(_json_ld2.default, null)
      )
    )
  );
};
exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(23);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(24);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(25);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(26);

var _reactUniversalComponent = __webpack_require__(27);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error() {
    return null;
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Home',
  file: '/home/ubuntu/workspace/wk/osh-web.github.com/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 12)), (0, _importCss3.default)('src/containers/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(12);
  },
  chunkName: function chunkName() {
    return 'src/containers/Home';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/About',
  file: '/home/ubuntu/workspace/wk/osh-web.github.com/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 15)), (0, _importCss3.default)('src/containers/About', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/About');
  },
  resolve: function resolve() {
    return /*require.resolve*/(15);
  },
  chunkName: function chunkName() {
    return 'src/containers/About';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/History',
  file: '/home/ubuntu/workspace/wk/osh-web.github.com/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 16)), (0, _importCss3.default)('src/containers/History', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/History');
  },
  resolve: function resolve() {
    return /*require.resolve*/(16);
  },
  chunkName: function chunkName() {
    return 'src/containers/History';
  }
}), universalOptions);

// Template Map
var templateMap = {
  t_0: t_0,
  t_1: t_1,
  t_2: t_2

  // Template Tree
};var templateTree = { c: { "/": { t: "t_0" }, "about": { t: "t_1" }, "history": { t: "t_2" } }

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  var parts = path === '/' ? ['/'] : path.split('/').filter(function (d) {
    return d;
  });
  var cursor = templateTree;
  try {
    parts.forEach(function (part) {
      cursor = cursor.c[part];
    });
    return templateMap[cursor.t];
  } catch (e) {
    return false;
  }
};

if (typeof document !== 'undefined') {
  window.reactStaticGetComponentForPath = getComponentForPath;
}

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;

      var renderProps = {
        templateMap: templateMap,
        templateTree: templateTree,
        getComponentForPath: getComponentForPath
      };
      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }
      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getComponentForPath(props.location.pathname);
          if (!Comp) {
            Comp = getComponentForPath('404');
          }
          return Comp && _react2.default.createElement(Comp, props);
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(28);

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

var _reportChunks = __webpack_require__(29);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(11);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(30);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
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
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        if (Component) return Promise.resolve(Component);

        return requireAsync(props, context);
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;
        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(10);

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
      promCache = options.promCache;


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
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
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
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
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
    load: load
  };
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(11);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.H2 = exports.H1 = exports.Hero = undefined;

var _Hero = __webpack_require__(32);

var _Hero2 = _interopRequireDefault(_Hero);

var _H = __webpack_require__(3);

var _H2 = _interopRequireDefault(_H);

var _H3 = __webpack_require__(6);

var _H4 = _interopRequireDefault(_H3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Hero = _Hero2.default;
exports.H1 = _H2.default;
exports.H2 = _H4.default;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background-color: ', ';\n  align-items: left;\n  a {\n    color: white;\n  }\n'], ['\n  background-color: ', ';\n  align-items: left;\n  a {\n    color: white;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: box;\n  margin: 10px;\n  padding: 12px 58px;\n  text-align: center;\n  background-color: ', ';\n  color: white;\n  font-size: 18px;\n  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.4);\n'], ['\n  display: box;\n  margin: 10px;\n  padding: 12px 58px;\n  text-align: center;\n  background-color: ', ';\n  color: white;\n  font-size: 18px;\n  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.4);\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _gridStyled = __webpack_require__(1);

var _Box = __webpack_require__(33);

var _resources = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var primary = _resources.color.primary,
    accent = _resources.color.accent;


var Banner = _Box.Box.extend(_templateObject, primary);

var eventDate = '2018年2月24日(土)';
var EventDate = function EventDate() {
  return _react2.default.createElement(
    'div',
    null,
    eventDate
  );
};

var mapUrl = 'https://goo.gl/maps/V6S6EQTARUE2';
var Place = function Place(props) {
  return _react2.default.createElement(
    'div',
    props,
    _react2.default.createElement(
      'a',
      { href: mapUrl },
      '\u30B5\u30C6\u30E9\u30A4\u30C8\u30AD\u30E3\u30F3\u30D1\u30B9\u3072\u308D\u3057\u307E 501'
    )
  );
};

var themeText = 'いまさらチームビルディング';
var EventTheme = function EventTheme() {
  return _react2.default.createElement(
    'div',
    null,
    themeText
  );
};
var EventName = function EventName() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Box.Grid,
      null,
      '\u30AA\u30FC\u30D7\u30F3\u30BB\u30DF\u30CA\u30FC'
    ),
    _react2.default.createElement(
      _Box.Grid,
      null,
      '2018@\u5E83\u5CF6'
    )
  );
};

var Button = _Box.Grid.extend(_templateObject2, primary);

var EntryPageButton = function EntryPageButton() {
  return _react2.default.createElement(
    'a',
    { href: 'https://osh.connpass.com/event/69092/' },
    _react2.default.createElement(
      Button,
      null,
      '\u7533\u3057\u8FBC\u307F\u30DA\u30FC\u30B8\u3078'
    )
  );
};

exports.default = function () {
  return _react2.default.createElement(
    Banner,
    { px: [20, 25], py: [40, 120], color: 'white' },
    _react2.default.createElement(
      _Box.Box,
      { f: [5, 6] },
      _react2.default.createElement(EventName, null)
    ),
    _react2.default.createElement(
      _Box.Box,
      { f: [3, 5] },
      _react2.default.createElement(EventTheme, null)
    ),
    _react2.default.createElement(
      _Box.Box,
      { mt: 10, f: [5, 6] },
      _react2.default.createElement(EventDate, null)
    ),
    _react2.default.createElement(
      _Box.Box,
      { f: [3, 4] },
      _react2.default.createElement(Place, { f: [4] })
    ),
    _react2.default.createElement(
      _gridStyled.Flex,
      { justify: 'center', pt: 40 },
      _react2.default.createElement(EntryPageButton, null)
    )
  );
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grid = exports.Box = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  ', ' ', ';\n'], ['\n  ', ' ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: inline-block;\n'], ['\n  display: inline-block;\n']);

var _gridStyled = __webpack_require__(1);

var _styledSystem = __webpack_require__(34);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Box = exports.Box = _gridStyled.Box.extend(_templateObject, _styledSystem.fontSize, _styledSystem.color);
exports.default = Box;
var Grid = exports.Grid = Box.extend(_templateObject2);

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var event2013 = exports.event2013 = {
  name: 'オープンセミナー2013@広島',
  theme: 'モバイルプラットフォームとJava',
  url: '/2013/'
};

var event2014 = exports.event2014 = {
  name: 'オープンセミナー2014@広島',
  theme: 'TDD…そして Be Agile',
  url: 'http://osh-2014.github.io/'
};

var event2015 = exports.event2015 = {
  name: 'オープンセミナー2015@広島',
  theme: 'クラウド時代の構成管理入門',
  url: '/2015/'
};

var event2016 = exports.event2016 = {
  name: 'オープンセミナー2016@広島',
  theme: 'みんなでつくろうモダンな開発現場',
  url: '/2016/'
};

var event2017 = exports.event2017 = {
  name: 'オープンセミナー2017@広島',
  theme: 'エンジニアがより良い社会を作れる!!',
  url: '/2017/'
};

exports.default = [event2013, event2014, event2015, event2016, event2017];

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _H = __webpack_require__(3);

var _H2 = _interopRequireDefault(_H);

var _LightningTalkInfo = __webpack_require__(37);

var _LightningTalkInfo2 = _interopRequireDefault(_LightningTalkInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Information = function Information() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _H2.default,
            null,
            '\u304A\u77E5\u3089\u305B'
        ),
        _react2.default.createElement(_LightningTalkInfo2.default, null)
    );
};

exports.default = Information;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _gridStyled = __webpack_require__(1);

var _H = __webpack_require__(6);

var _H2 = _interopRequireDefault(_H);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LightningTalkInfo = function LightningTalkInfo() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _H2.default,
            null,
            '\u30E9\u30A4\u30C8\u30CB\u30F3\u30B0\u30C8\u30FC\u30AF\u306E\u516C\u52DF'
        ),
        _react2.default.createElement(
            _gridStyled.Flex,
            { justify: 'center' },
            _react2.default.createElement(
                _gridStyled.Half,
                { px: 10 },
                _react2.default.createElement(
                    'p',
                    null,
                    '\u672C\u30BB\u30DF\u30CA\u30FC\u5185\u3067\u30E9\u30A4\u30C8\u30CB\u30F3\u30B0\u30C8\u30FC\u30AF\u5927\u4F1A\u306E\u30E9\u30A4\u30C8\u30CB\u30F3\u30B0\u30C8\u30FC\u30AF\u3092\u516C\u52DF\u3057\u3066\u3044\u307E\u3059\u3002 \u5E0C\u671B\u306E\u65B9\u306F',
                    _react2.default.createElement(
                        'a',
                        { href: 'https://docs.google.com/forms/d/e/1FAIpQLSeu7K22CflKVv3q8rbjoBIyIQWuUpL1MBmCBxpkoU4vM0_kvg/viewform' },
                        '\u3053\u3061\u3089 '
                    ),
                    '\u304B\u3089\u5FDC\u52DF\u3057\u3066\u304F\u3060\u3055\u3044\u3002'
                )
            )
        )
    );
};
exports.default = LightningTalkInfo;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n'], ['\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  border: solid 1px #fff;\n  border-left-width: 20px;\n  border-right-width: 20px;\n  box-sizing: border-box;\n  background-color: ', ';\n  color: white;\n  justify-content: center;\n  align-items: center;\n'], ['\n  display: flex;\n  border: solid 1px #fff;\n  border-left-width: 20px;\n  border-right-width: 20px;\n  box-sizing: border-box;\n  background-color: ', ';\n  color: white;\n  justify-content: center;\n  align-items: center;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  border: solid 1px #fff;\n  border-left-width: 20px;\n  border-right-width: 20px;\n  box-sizing: border-box;\n  text-align: center;\n'], ['\n  border: solid 1px #fff;\n  border-left-width: 20px;\n  border-right-width: 20px;\n  box-sizing: border-box;\n  text-align: center;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _gridStyled = __webpack_require__(1);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _sponsors = __webpack_require__(13);

var _sponsors2 = _interopRequireDefault(_sponsors);

var _speakers = __webpack_require__(14);

var _speakers2 = _interopRequireDefault(_speakers);

var _color = __webpack_require__(5);

var _H = __webpack_require__(3);

var _H2 = _interopRequireDefault(_H);

var _H3 = __webpack_require__(6);

var _H4 = _interopRequireDefault(_H3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ResetList = _styledComponents2.default.ul(_templateObject);

var Speaker = function Speaker(_ref) {
  var name = _ref.name,
      company = _ref.company;
  return _react2.default.createElement(
    'li',
    { key: name },
    name,
    ' (',
    _react2.default.createElement(
      'a',
      { href: company.uri },
      company.name
    ),
    ')'
  );
};

var Speakers = _react2.default.createElement(
  ResetList,
  null,
  _speakers2.default.map(Speaker)
);

var Sponsor = function Sponsor(_ref2) {
  var name = _ref2.name,
      url = _ref2.url;
  return _react2.default.createElement(
    'li',
    { key: name },
    _react2.default.createElement(
      'a',
      { href: url },
      name
    )
  );
};

var Sponsors = _react2.default.createElement(
  ResetList,
  null,
  _sponsors2.default.map(Sponsor)
);

var AbstractTtile = (0, _styledComponents2.default)(_gridStyled.Half)(_templateObject2, _color.accent);

var AbstractValue = (0, _styledComponents2.default)(_gridStyled.Half)(_templateObject3);

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
  value: Speakers
}, {
  title: '会場',
  value: [_react2.default.createElement(
    'div',
    null,
    '\u5E83\u5CF6\u770C\u5E83\u5CF6\u5E02\u4E2D\u533A\u5927\u624B\u753A1-5-3'
  ), _react2.default.createElement(
    'div',
    null,
    '\u30B5\u30C6\u30E9\u30A4\u30C8\u30AD\u30E3\u30F3\u30D1\u30B9\u3072\u308D\u3057\u307E 501\u8B1B\u7FA9\u5BA4'
  )]
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

var EventAbstract = function EventAbstract() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _H2.default,
      null,
      '\u30A4\u30D9\u30F3\u30C8\u6982\u8981'
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _gridStyled.Flex,
        { justify: 'center' },
        _react2.default.createElement(
          _gridStyled.Half,
          { px: 10 },
          _react2.default.createElement(
            'p',
            null,
            '\u4F55\u3089\u304B\u306E\u76EE\u6A19\u3092\u9054\u6210\u3059\u308B\u305F\u3081\u306B\u8907\u6570\u4EBA\u3067\u884C\u52D5\u3092\u5171\u306B\u3057\u3066\u3044\u308B\u65B9\u304C\u5C11\u306A\u304F\u306A\u3044\u306F\u305A\u3067\u3059\u3002 \u3057\u304B\u3057\u3001\u672C\u5F53\u306B\u305D\u306E\u96C6\u56E3\u306F\u30C1\u30FC\u30E0\u306B\u306A\u3063\u3066\u3044\u308B\u306E\u3067\u3057\u3087\u3046\u304B\u3002'
          ),
          _react2.default.createElement(
            'p',
            null,
            '\u305F\u3060\u5358\u306B\u4F55\u4EBA\u304B\u306E\u4EBA\u304C\u96C6\u307E\u308A\u4F5C\u696D\u3092\u884C\u3063\u3066\u3044\u308B\u3060\u3051\u306E\u72B6\u614B\u306B\u306A\u3063\u3066\u306F\u3044\u307E\u305B\u3093\u304B\u3002 \u76EE\u7684\u3092\u771F\u306B\u5171\u6709\u3057\u5171\u611F\u3057\u304A\u4E92\u3044\u3092\u5C0A\u91CD\u3057\u8A00\u3044\u5408\u3048\u308B\u3001\uFF11+\uFF11\u304C\uFF13\u306B\u306A\u308B\u69D8\u306A\u30C1\u30FC\u30E0\u306B\u306A\u3063\u3066\u3044\u308B\u306E\u3067\u3057\u3087\u3046\u304B\u3002'
          ),
          _react2.default.createElement(
            'p',
            null,
            '\u3053\u306E\u6A5F\u4F1A\u306B\u672C\u5F53\u306E\u30C1\u30FC\u30E0\u306B\u306A\u308B\u305F\u3081\u306E\u30C1\u30FC\u30E0\u30D3\u30EB\u30C7\u30A3\u30F3\u30B0\u306B\u95A2\u3057\u3066\u518D\u8003\u3057\u3066\u307F\u307E\u305B\u3093\u304B\uFF1F'
          )
        )
      ),
      _react2.default.createElement(
        _H4.default,
        null,
        '\u30A4\u30D9\u30F3\u30C8\u60C5\u5831'
      ),
      _react2.default.createElement(
        _gridStyled.Flex,
        { wrap: true },
        eventInfo.map(function (_ref3) {
          var title = _ref3.title,
              value = _ref3.value;
          return [_react2.default.createElement(
            AbstractTtile,
            { p: 1 },
            title
          ), _react2.default.createElement(
            AbstractValue,
            { p: 1 },
            value
          )];
        })
      )
    )
  );
};

exports.default = EventAbstract;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _gridStyled = __webpack_require__(1);

var _sponsors = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var maxWidth = 480;

var Bannar = function Bannar(_ref) {
  var url = _ref.url,
      imagePath = _ref.imagePath,
      name = _ref.name,
      key = _ref.key,
      width = _ref.width,
      maxWidth = _ref.maxWidth;
  return _react2.default.createElement(
    'a',
    { href: url, key: key, style: { width: width, maxWidth: maxWidth } },
    _react2.default.createElement('img', { src: imagePath, alt: name, style: { width: '100%' } })
  );
};

var keyToImagePath = function keyToImagePath(sponsor) {
  var key = sponsor.key;

  return _extends({}, sponsor, {
    imagePath: '/img/2018/' + key + '.png'
  });
};

var platinumToBannar = function platinumToBannar(sponsor) {
  return _extends({}, sponsor, {
    width: '100%'
  });
};

var goldToBannar = function goldToBannar(sponsor) {
  return _extends({}, sponsor, {
    width: '50%'
  });
};

var silverToBannar = function silverToBannar(sponsor) {
  return _extends({}, sponsor, {
    width: '33%'
  });
};

var filterBannar = function filterBannar(_ref2) {
  var bannar = _ref2.bannar;
  return bannar;
};

var platinumBannar = _sponsors.platinum.filter(filterBannar).map(keyToImagePath).map(platinumToBannar);
var goldBannar = _sponsors.gold.filter(filterBannar).map(keyToImagePath).map(goldToBannar);
var silverBannar = _sponsors.silver.filter(filterBannar).map(keyToImagePath).map(silverToBannar);

var sponsorGroups = [platinumBannar, goldBannar, silverBannar];

var SponsorBannars = function SponsorBannars() {
  return _react2.default.createElement(
    _gridStyled.Flex,
    { wrap: true, justify: 'center' },
    _react2.default.createElement(
      'div',
      { style: { maxWidth: maxWidth } },
      sponsorGroups.map(function (sponsors) {
        return _react2.default.createElement(
          _gridStyled.Flex,
          { justify: 'center', wrap: true, m: 20, style: { maxWidth: maxWidth, alignItems: 'center' } },
          sponsors.map(Bannar)
        );
      })
    )
  );
};

exports.default = SponsorBannars;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _H = __webpack_require__(3);

var _H2 = _interopRequireDefault(_H);

var _speakers = __webpack_require__(14);

var _speakers2 = _interopRequireDefault(_speakers);

var _Speakers = __webpack_require__(41);

var _Speakers2 = _interopRequireDefault(_Speakers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Speakers = function Speakers() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _H2.default,
      null,
      '\u30BB\u30C3\u30B7\u30E7\u30F3'
    ),
    _react2.default.createElement(
      'div',
      { className: _Speakers2.default.container },
      _speakers2.default.map(function (_ref) {
        var session = _ref.session,
            key = _ref.key,
            furi = _ref.furi,
            company = _ref.company,
            name = _ref.name,
            description = _ref.description,
            title = _ref.title;
        return _react2.default.createElement(
          'div',
          { key: key, className: _Speakers2.default.item },
          _react2.default.createElement(
            'h2',
            { className: _Speakers2.default.title },
            session.name
          ),
          _react2.default.createElement(
            'p',
            { className: _Speakers2.default.description },
            session.description
          ),
          _react2.default.createElement(
            'span',
            { className: _Speakers2.default.furi },
            furi
          ),
          _react2.default.createElement(
            'h3',
            { className: _Speakers2.default.name },
            name
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('img', { src: '/img/2018/' + key + '.png', alt: '' + name }),
            _react2.default.createElement(
              'p',
              { className: _Speakers2.default.profile },
              description
            ),
            title
          )
        );
      })
    )
  );
};

exports.default = Speakers;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"_32O-39Vv9glPdX07x_XQZ7","item":"_3IWa-OinuCiiNiN9u7DidW","title":"_3zJGoHFzvZMfH7eJHjwAFW","description":"MGbElk0E7RYDCWQGgHr-B","profile":"_tYBLuw6m6cUGwb8fkPYt","furi":"_2JvZYf7UAGpZrh3IZZNWGf","name":"_8gweplxtC0YggBiEC59kL","company":"_3wG6tnBDY8i_LoXzgp_wDQ"};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n\n  background-color: white;\n  a {\n    text-decoration: none;\n    color: black;\n  }\n  a:hover {\n    text-decoration: underline;\n  }\n'], ['\n  width: 100%;\n\n  background-color: white;\n  a {\n    text-decoration: none;\n    color: black;\n  }\n  a:hover {\n    text-decoration: underline;\n  }\n']);

var _reactHyperscript = __webpack_require__(43);

var _reactHyperscript2 = _interopRequireDefault(_reactHyperscript);

var _gridStyled = __webpack_require__(1);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var name = '© オープンセミナー広島';

var BottomBar = _gridStyled.Box.extend(_templateObject);

exports.default = function (_ref) {
  var Link = _ref.Link;
  return (0, _reactHyperscript2.default)(BottomBar, {
    py: 12,
    pl: [10, 20]
  }, [(0, _reactHyperscript2.default)(Link, {
    to: '/'
  }, [name])]);
};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("react-hyperscript");

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  box-shadow: 0px 0px 40px -7px #ccc;\n'], ['\n  box-shadow: 0px 0px 40px -7px #ccc;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: fixed;\n  right: 20px;\n  bottom: 40px;\n  width: 60px;\n  height: 60px;\n\n  border-radius: 60px;\n  box-shadow: 0px 0px 20px -7px #ccc;\n  color: white;\n  background-color: ', ';\n  text-decoration: none;\n'], ['\n  position: fixed;\n  right: 20px;\n  bottom: 40px;\n  width: 60px;\n  height: 60px;\n\n  border-radius: 60px;\n  box-shadow: 0px 0px 20px -7px #ccc;\n  color: white;\n  background-color: ', ';\n  text-decoration: none;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _gridStyled = __webpack_require__(1);

var _resources = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var primary = _resources.color.primary;


var level1 = function level1(component) {
  return (0, _styledComponents2.default)(component)(_templateObject);
};

var Base = function Base(_ref) {
  var Link = _ref.Link,
      to = _ref.to,
      className = _ref.className,
      children = _ref.children;
  return _react2.default.createElement(
    Link,
    { style: { color: 'white', textDecoration: 'none' }, to: to },
    _react2.default.createElement(
      _gridStyled.Flex,
      { className: className, justify: 'center', align: 'center' },
      children
    )
  );
};

exports.default = (0, _styledComponents2.default)(Base)(_templateObject2, primary);

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var structedData = {
    '@context': 'http://schema.org',
    '@type': 'Event',
    location: {
      '@type': 'Place',
      name: 'サテライトキャンパスひろしま 501',
      address: {
        '@type': 'PostalAddress',
        addressCountry: '日本',
        addressRegion: '中国地方'
      }
    },
    name: 'オープンセミナー2018@広島 「いまさらチームビルディング」',
    description: 'IT技術者のボランティアによる中四国最高のセミナーイベント。今回はチームビルディングにフォーカスを当てます。',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: '円'
    },
    startDate: '2018-02-24',
    endDate: '2018-02-24'
  };
  var json = JSON.stringify(structedData);
  return _react2.default.createElement('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: json } });
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.a61111bf.js.map