(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/actions/algo-tabs.actions.ts":
/*!**********************************************!*\
  !*** ./src/app/actions/algo-tabs.actions.ts ***!
  \**********************************************/
/*! exports provided: AlgoTabsActionTypes, TabAdd, TabSet, TabDel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlgoTabsActionTypes", function() { return AlgoTabsActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabAdd", function() { return TabAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabSet", function() { return TabSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabDel", function() { return TabDel; });
var AlgoTabsActionTypes;
(function (AlgoTabsActionTypes) {
    AlgoTabsActionTypes["TabAdd"] = "[AlgoTabs] Tab Add";
    AlgoTabsActionTypes["TabSet"] = "[AlgoTabs] Tab Set";
    AlgoTabsActionTypes["TabDel"] = "[AlgoTabs] Tab Del";
})(AlgoTabsActionTypes || (AlgoTabsActionTypes = {}));
var TabAdd = /** @class */ (function () {
    function TabAdd(payload) {
        this.payload = payload;
        this.type = AlgoTabsActionTypes.TabAdd;
    }
    return TabAdd;
}());

var TabSet = /** @class */ (function () {
    function TabSet(payload) {
        this.payload = payload;
        this.type = AlgoTabsActionTypes.TabSet;
    }
    return TabSet;
}());

var TabDel = /** @class */ (function () {
    function TabDel(payload) {
        this.payload = payload;
        this.type = AlgoTabsActionTypes.TabDel;
    }
    return TabDel;
}());



/***/ }),

/***/ "./src/app/actions/app.actions.ts":
/*!****************************************!*\
  !*** ./src/app/actions/app.actions.ts ***!
  \****************************************/
/*! exports provided: AppActionTypes, ShowMsg, ShowError, AuthActionTypes, LogIn, LogInSuccess, LogInFail, SignUp, SignUpSuccess, SignUpFail, LogOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppActionTypes", function() { return AppActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowMsg", function() { return ShowMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowError", function() { return ShowError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthActionTypes", function() { return AuthActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogIn", function() { return LogIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInSuccess", function() { return LogInSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInFail", function() { return LogInFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUp", function() { return SignUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpSuccess", function() { return SignUpSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpFail", function() { return SignUpFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogOut", function() { return LogOut; });
var AppActionTypes;
(function (AppActionTypes) {
    AppActionTypes["ShowMsg"] = "[App] ShowMsg";
    AppActionTypes["ShowError"] = "[App] ShowError";
})(AppActionTypes || (AppActionTypes = {}));
var ShowMsg = /** @class */ (function () {
    function ShowMsg(text) {
        this.text = text;
        this.type = AppActionTypes.ShowMsg;
    }
    return ShowMsg;
}());

var ShowError = /** @class */ (function () {
    function ShowError(error) {
        this.error = error;
        this.type = AppActionTypes.ShowError;
    }
    return ShowError;
}());

var AuthActionTypes;
(function (AuthActionTypes) {
    AuthActionTypes["LogIn"] = "[App] LogIn";
    AuthActionTypes["LogInSuccess"] = "[App] LogIn Success";
    AuthActionTypes["LogInFail"] = "[App] LogIn Fail";
    AuthActionTypes["SignUp"] = "[App] SignUp";
    AuthActionTypes["SignUpSuccess"] = "[App] SignUp Success";
    AuthActionTypes["SignUpFail"] = "[App] SignUp Fail";
    AuthActionTypes["LogOut"] = "[App] LogOut";
})(AuthActionTypes || (AuthActionTypes = {}));
var LogIn = /** @class */ (function () {
    function LogIn(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LogIn;
    }
    return LogIn;
}());

var LogInSuccess = /** @class */ (function () {
    function LogInSuccess(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LogInSuccess;
    }
    return LogInSuccess;
}());

var LogInFail = /** @class */ (function () {
    function LogInFail(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LogInFail;
    }
    return LogInFail;
}());

var SignUp = /** @class */ (function () {
    function SignUp(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.SignUp;
    }
    return SignUp;
}());

var SignUpSuccess = /** @class */ (function () {
    function SignUpSuccess(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.SignUpSuccess;
    }
    return SignUpSuccess;
}());

var SignUpFail = /** @class */ (function () {
    function SignUpFail(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.SignUpFail;
    }
    return SignUpFail;
}());

var LogOut = /** @class */ (function () {
    function LogOut() {
        this.type = AuthActionTypes.LogOut;
    }
    return LogOut;
}());



/***/ }),

/***/ "./src/app/actions/ccxt.actions.ts":
/*!*****************************************!*\
  !*** ./src/app/actions/ccxt.actions.ts ***!
  \*****************************************/
/*! exports provided: CcxtActionTypes, MarketsLoad, MarketsSet, ExchangesLoad, ExchangesSet, BalancesLoad, BalancesSet, OrderbookLoad, OrderbookSet, MyOrdersLoad, MyOrdersSet, OrderCancel, TickLoad, TickSet, MarketInfoLoad, MarketInfoSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcxtActionTypes", function() { return CcxtActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketsLoad", function() { return MarketsLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketsSet", function() { return MarketsSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangesLoad", function() { return ExchangesLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangesSet", function() { return ExchangesSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalancesLoad", function() { return BalancesLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalancesSet", function() { return BalancesSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderbookLoad", function() { return OrderbookLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderbookSet", function() { return OrderbookSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrdersLoad", function() { return MyOrdersLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrdersSet", function() { return MyOrdersSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderCancel", function() { return OrderCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TickLoad", function() { return TickLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TickSet", function() { return TickSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketInfoLoad", function() { return MarketInfoLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketInfoSet", function() { return MarketInfoSet; });
var CcxtActionTypes;
(function (CcxtActionTypes) {
    CcxtActionTypes["MarketsLoad"] = "[CCXT] Markets Load";
    CcxtActionTypes["MarketsSet"] = "[CCXT] Markets Set";
    CcxtActionTypes["ExchangesLoad"] = "[CCXT] Exchanges Load";
    CcxtActionTypes["ExchangesSet"] = "[CCXT] Exchanges Set";
    CcxtActionTypes["BalancesLoad"] = "[CCXT] Balances Load";
    CcxtActionTypes["BalancesSet"] = "[CCXT] Balances Set";
    CcxtActionTypes["OrderbookLoad"] = "[CCXT] Orderbook Load";
    CcxtActionTypes["OrderbookSet"] = "[CCXT] Orderbook Set";
    CcxtActionTypes["MyOrdersLoad"] = "[CCXT] MyOrders Load";
    CcxtActionTypes["MyOrdersSet"] = "[CCXT] MyOrders Set";
    CcxtActionTypes["OrderCancel"] = "[CCXT] Order Cancel";
    CcxtActionTypes["TickLoad"] = "[CCXT] Tick Load";
    CcxtActionTypes["TickSet"] = "[CCXT] Tick Set";
    CcxtActionTypes["MarketInfoLoad"] = "[CCXT] MarketInfo Load";
    CcxtActionTypes["MarketInfoSet"] = "[CCXT] MarketInfo Set";
})(CcxtActionTypes || (CcxtActionTypes = {}));
var MarketsLoad = /** @class */ (function () {
    function MarketsLoad(payload) {
        this.payload = payload;
        this.type = CcxtActionTypes.MarketsLoad;
    }
    return MarketsLoad;
}());

var MarketsSet = /** @class */ (function () {
    function MarketsSet(payload) {
        this.payload = payload;
        this.type = CcxtActionTypes.MarketsSet;
    }
    return MarketsSet;
}());

var ExchangesLoad = /** @class */ (function () {
    function ExchangesLoad() {
        this.type = CcxtActionTypes.ExchangesLoad;
    }
    return ExchangesLoad;
}());

var ExchangesSet = /** @class */ (function () {
    function ExchangesSet(payload) {
        this.payload = payload;
        this.type = CcxtActionTypes.ExchangesSet;
    }
    return ExchangesSet;
}());

var BalancesLoad = /** @class */ (function () {
    function BalancesLoad(payload) {
        this.payload = payload;
        this.type = CcxtActionTypes.BalancesLoad;
    }
    return BalancesLoad;
}());

var BalancesSet = /** @class */ (function () {
    function BalancesSet(payload) {
        this.payload = payload;
        this.type = CcxtActionTypes.BalancesSet;
    }
    return BalancesSet;
}());

var OrderbookLoad = /** @class */ (function () {
    function OrderbookLoad(payload) {
        this.payload = payload;
        this.type = CcxtActionTypes.OrderbookLoad;
    }
    return OrderbookLoad;
}());

var OrderbookSet = /** @class */ (function () {
    // constructor(public payload: { exchange: string, market: string, result: { bids: number[][], asks: number[][] }}) {}
    function OrderbookSet(payload) {
        this.payload = payload;
        this.type = CcxtActionTypes.OrderbookSet;
    }
    return OrderbookSet;
}());

var MyOrdersLoad = /** @class */ (function () {
    function MyOrdersLoad(payload) {
        this.payload = payload;
        this.type = CcxtActionTypes.MyOrdersLoad;
    }
    return MyOrdersLoad;
}());

var MyOrdersSet = /** @class */ (function () {
    function MyOrdersSet(payload) {
        this.payload = payload;
        this.type = CcxtActionTypes.MyOrdersSet;
    }
    return MyOrdersSet;
}());

var OrderCancel = /** @class */ (function () {
    function OrderCancel(payload) {
        this.payload = payload;
        this.type = CcxtActionTypes.OrderCancel;
    }
    return OrderCancel;
}());

var TickLoad = /** @class */ (function () {
    function TickLoad(payload) {
        this.payload = payload;
        this.type = CcxtActionTypes.TickLoad;
    }
    return TickLoad;
}());

var TickSet = /** @class */ (function () {
    function TickSet(payload) {
        this.payload = payload;
        this.type = CcxtActionTypes.TickSet;
    }
    return TickSet;
}());

var MarketInfoLoad = /** @class */ (function () {
    function MarketInfoLoad(payload) {
        this.payload = payload;
        this.type = CcxtActionTypes.MarketInfoLoad;
    }
    return MarketInfoLoad;
}());

var MarketInfoSet = /** @class */ (function () {
    function MarketInfoSet(payload) {
        this.payload = payload;
        this.type = CcxtActionTypes.MarketInfoSet;
    }
    return MarketInfoSet;
}());



/***/ }),

/***/ "./src/app/actions/index.ts":
/*!**********************************!*\
  !*** ./src/app/actions/index.ts ***!
  \**********************************/
/*! exports provided: AlgoTabsActionTypes, TabAdd, TabSet, TabDel, AppActionTypes, ShowMsg, ShowError, AuthActionTypes, LogIn, LogInSuccess, LogInFail, SignUp, SignUpSuccess, SignUpFail, LogOut, CcxtActionTypes, MarketsLoad, MarketsSet, ExchangesLoad, ExchangesSet, BalancesLoad, BalancesSet, OrderbookLoad, OrderbookSet, MyOrdersLoad, MyOrdersSet, OrderCancel, TickLoad, TickSet, MarketInfoLoad, MarketInfoSet, LoadingActionTypes, LoadStart, LoadSuccess, LoadFail, TradingActionTypes, AlgoListLoad, TradingStart, TradingResume, TradingStop, AlgoDel, MarketStateWS, AlgoStateWS, LogWS, LogLoad, LogSet, AlgoStateSet, AlgoStateDel, MarketStateSet, LogAppend, LvlDelReq, LvlDel, UserDataActionTypes, DataLoad, DataSet, DataSave, TradingParamsSet, TradingParamsAdd, TradingParamsDel, ExchangeAdd, ExchangeDel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _algo_tabs_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./algo-tabs.actions */ "./src/app/actions/algo-tabs.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlgoTabsActionTypes", function() { return _algo_tabs_actions__WEBPACK_IMPORTED_MODULE_0__["AlgoTabsActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabAdd", function() { return _algo_tabs_actions__WEBPACK_IMPORTED_MODULE_0__["TabAdd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabSet", function() { return _algo_tabs_actions__WEBPACK_IMPORTED_MODULE_0__["TabSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabDel", function() { return _algo_tabs_actions__WEBPACK_IMPORTED_MODULE_0__["TabDel"]; });

/* harmony import */ var _app_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.actions */ "./src/app/actions/app.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppActionTypes", function() { return _app_actions__WEBPACK_IMPORTED_MODULE_1__["AppActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShowMsg", function() { return _app_actions__WEBPACK_IMPORTED_MODULE_1__["ShowMsg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShowError", function() { return _app_actions__WEBPACK_IMPORTED_MODULE_1__["ShowError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthActionTypes", function() { return _app_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogIn", function() { return _app_actions__WEBPACK_IMPORTED_MODULE_1__["LogIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogInSuccess", function() { return _app_actions__WEBPACK_IMPORTED_MODULE_1__["LogInSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogInFail", function() { return _app_actions__WEBPACK_IMPORTED_MODULE_1__["LogInFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignUp", function() { return _app_actions__WEBPACK_IMPORTED_MODULE_1__["SignUp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignUpSuccess", function() { return _app_actions__WEBPACK_IMPORTED_MODULE_1__["SignUpSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignUpFail", function() { return _app_actions__WEBPACK_IMPORTED_MODULE_1__["SignUpFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogOut", function() { return _app_actions__WEBPACK_IMPORTED_MODULE_1__["LogOut"]; });

/* harmony import */ var _ccxt_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ccxt.actions */ "./src/app/actions/ccxt.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CcxtActionTypes", function() { return _ccxt_actions__WEBPACK_IMPORTED_MODULE_2__["CcxtActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarketsLoad", function() { return _ccxt_actions__WEBPACK_IMPORTED_MODULE_2__["MarketsLoad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarketsSet", function() { return _ccxt_actions__WEBPACK_IMPORTED_MODULE_2__["MarketsSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExchangesLoad", function() { return _ccxt_actions__WEBPACK_IMPORTED_MODULE_2__["ExchangesLoad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExchangesSet", function() { return _ccxt_actions__WEBPACK_IMPORTED_MODULE_2__["ExchangesSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BalancesLoad", function() { return _ccxt_actions__WEBPACK_IMPORTED_MODULE_2__["BalancesLoad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BalancesSet", function() { return _ccxt_actions__WEBPACK_IMPORTED_MODULE_2__["BalancesSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderbookLoad", function() { return _ccxt_actions__WEBPACK_IMPORTED_MODULE_2__["OrderbookLoad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderbookSet", function() { return _ccxt_actions__WEBPACK_IMPORTED_MODULE_2__["OrderbookSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MyOrdersLoad", function() { return _ccxt_actions__WEBPACK_IMPORTED_MODULE_2__["MyOrdersLoad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MyOrdersSet", function() { return _ccxt_actions__WEBPACK_IMPORTED_MODULE_2__["MyOrdersSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderCancel", function() { return _ccxt_actions__WEBPACK_IMPORTED_MODULE_2__["OrderCancel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TickLoad", function() { return _ccxt_actions__WEBPACK_IMPORTED_MODULE_2__["TickLoad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TickSet", function() { return _ccxt_actions__WEBPACK_IMPORTED_MODULE_2__["TickSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarketInfoLoad", function() { return _ccxt_actions__WEBPACK_IMPORTED_MODULE_2__["MarketInfoLoad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarketInfoSet", function() { return _ccxt_actions__WEBPACK_IMPORTED_MODULE_2__["MarketInfoSet"]; });

/* harmony import */ var _loading_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading.actions */ "./src/app/actions/loading.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadingActionTypes", function() { return _loading_actions__WEBPACK_IMPORTED_MODULE_3__["LoadingActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadStart", function() { return _loading_actions__WEBPACK_IMPORTED_MODULE_3__["LoadStart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadSuccess", function() { return _loading_actions__WEBPACK_IMPORTED_MODULE_3__["LoadSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadFail", function() { return _loading_actions__WEBPACK_IMPORTED_MODULE_3__["LoadFail"]; });

/* harmony import */ var _trading_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trading.actions */ "./src/app/actions/trading.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TradingActionTypes", function() { return _trading_actions__WEBPACK_IMPORTED_MODULE_4__["TradingActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlgoListLoad", function() { return _trading_actions__WEBPACK_IMPORTED_MODULE_4__["AlgoListLoad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TradingStart", function() { return _trading_actions__WEBPACK_IMPORTED_MODULE_4__["TradingStart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TradingResume", function() { return _trading_actions__WEBPACK_IMPORTED_MODULE_4__["TradingResume"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TradingStop", function() { return _trading_actions__WEBPACK_IMPORTED_MODULE_4__["TradingStop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlgoDel", function() { return _trading_actions__WEBPACK_IMPORTED_MODULE_4__["AlgoDel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarketStateWS", function() { return _trading_actions__WEBPACK_IMPORTED_MODULE_4__["MarketStateWS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlgoStateWS", function() { return _trading_actions__WEBPACK_IMPORTED_MODULE_4__["AlgoStateWS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogWS", function() { return _trading_actions__WEBPACK_IMPORTED_MODULE_4__["LogWS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogLoad", function() { return _trading_actions__WEBPACK_IMPORTED_MODULE_4__["LogLoad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogSet", function() { return _trading_actions__WEBPACK_IMPORTED_MODULE_4__["LogSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlgoStateSet", function() { return _trading_actions__WEBPACK_IMPORTED_MODULE_4__["AlgoStateSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlgoStateDel", function() { return _trading_actions__WEBPACK_IMPORTED_MODULE_4__["AlgoStateDel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarketStateSet", function() { return _trading_actions__WEBPACK_IMPORTED_MODULE_4__["MarketStateSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogAppend", function() { return _trading_actions__WEBPACK_IMPORTED_MODULE_4__["LogAppend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LvlDelReq", function() { return _trading_actions__WEBPACK_IMPORTED_MODULE_4__["LvlDelReq"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LvlDel", function() { return _trading_actions__WEBPACK_IMPORTED_MODULE_4__["LvlDel"]; });

/* harmony import */ var _userdata_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userdata.actions */ "./src/app/actions/userdata.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserDataActionTypes", function() { return _userdata_actions__WEBPACK_IMPORTED_MODULE_5__["UserDataActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataLoad", function() { return _userdata_actions__WEBPACK_IMPORTED_MODULE_5__["DataLoad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSet", function() { return _userdata_actions__WEBPACK_IMPORTED_MODULE_5__["DataSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSave", function() { return _userdata_actions__WEBPACK_IMPORTED_MODULE_5__["DataSave"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TradingParamsSet", function() { return _userdata_actions__WEBPACK_IMPORTED_MODULE_5__["TradingParamsSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TradingParamsAdd", function() { return _userdata_actions__WEBPACK_IMPORTED_MODULE_5__["TradingParamsAdd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TradingParamsDel", function() { return _userdata_actions__WEBPACK_IMPORTED_MODULE_5__["TradingParamsDel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExchangeAdd", function() { return _userdata_actions__WEBPACK_IMPORTED_MODULE_5__["ExchangeAdd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExchangeDel", function() { return _userdata_actions__WEBPACK_IMPORTED_MODULE_5__["ExchangeDel"]; });









/***/ }),

/***/ "./src/app/actions/loading.actions.ts":
/*!********************************************!*\
  !*** ./src/app/actions/loading.actions.ts ***!
  \********************************************/
/*! exports provided: LoadingActionTypes, LoadStart, LoadSuccess, LoadFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingActionTypes", function() { return LoadingActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadStart", function() { return LoadStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadSuccess", function() { return LoadSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadFail", function() { return LoadFail; });
var LoadingActionTypes;
(function (LoadingActionTypes) {
    LoadingActionTypes["LoadStart"] = "[Loading] Start";
    LoadingActionTypes["LoadSuccess"] = "[Loading] Success";
    LoadingActionTypes["LoadFail"] = "[Loading] Fail";
})(LoadingActionTypes || (LoadingActionTypes = {}));
var LoadStart = /** @class */ (function () {
    function LoadStart(payload) {
        this.payload = payload;
        this.type = LoadingActionTypes.LoadStart;
    }
    return LoadStart;
}());

var LoadSuccess = /** @class */ (function () {
    function LoadSuccess(payload) {
        this.payload = payload;
        this.type = LoadingActionTypes.LoadSuccess;
    }
    return LoadSuccess;
}());

var LoadFail = /** @class */ (function () {
    function LoadFail(payload) {
        this.payload = payload;
        this.type = LoadingActionTypes.LoadFail;
    }
    return LoadFail;
}());



/***/ }),

/***/ "./src/app/actions/trading.actions.ts":
/*!********************************************!*\
  !*** ./src/app/actions/trading.actions.ts ***!
  \********************************************/
/*! exports provided: TradingActionTypes, AlgoListLoad, TradingStart, TradingResume, TradingStop, AlgoDel, MarketStateWS, AlgoStateWS, LogWS, LogLoad, LogSet, AlgoStateSet, AlgoStateDel, MarketStateSet, LogAppend, LvlDelReq, LvlDel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradingActionTypes", function() { return TradingActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlgoListLoad", function() { return AlgoListLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradingStart", function() { return TradingStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradingResume", function() { return TradingResume; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradingStop", function() { return TradingStop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlgoDel", function() { return AlgoDel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketStateWS", function() { return MarketStateWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlgoStateWS", function() { return AlgoStateWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogWS", function() { return LogWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLoad", function() { return LogLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogSet", function() { return LogSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlgoStateSet", function() { return AlgoStateSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlgoStateDel", function() { return AlgoStateDel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketStateSet", function() { return MarketStateSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogAppend", function() { return LogAppend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LvlDelReq", function() { return LvlDelReq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LvlDel", function() { return LvlDel; });
var TradingActionTypes;
(function (TradingActionTypes) {
    TradingActionTypes["AlgoListLoad"] = "[Trading] Algo list Load";
    TradingActionTypes["TradingStart"] = "[Trading] Trading Start";
    TradingActionTypes["TradingResume"] = "[Trading] Trading Resume";
    TradingActionTypes["TradingStop"] = "[Trading] Trading Stop";
    TradingActionTypes["AlgoDel"] = "[Trading] Algo Delete";
    TradingActionTypes["MarketStateWS"] = "[Trading] Market State WebSocket";
    TradingActionTypes["AlgoStateWS"] = "[Trading] Algo State WebSocket";
    TradingActionTypes["LogWS"] = "[Trading] Algo Log WebSocket";
    TradingActionTypes["LogLoad"] = "[Trading] Log Load";
    TradingActionTypes["LogSet"] = "[Trading] Log Set";
    TradingActionTypes["AlgoStateSet"] = "[Trading] Algo State Set";
    TradingActionTypes["AlgoStateDel"] = "[Trading] Algo State Del";
    TradingActionTypes["MarketStateSet"] = "[Trading] Market State Set";
    TradingActionTypes["LogAppend"] = "[Trading] Log Append";
    TradingActionTypes["LvlDelReq"] = "[Trading] Level Delete Request";
    TradingActionTypes["LvlDel"] = "[Trading] Level Delete";
})(TradingActionTypes || (TradingActionTypes = {}));
var AlgoListLoad = /** @class */ (function () {
    function AlgoListLoad() {
        this.type = TradingActionTypes.AlgoListLoad;
    }
    return AlgoListLoad;
}());

var TradingStart = /** @class */ (function () {
    function TradingStart(payload) {
        this.payload = payload;
        this.type = TradingActionTypes.TradingStart;
    }
    return TradingStart;
}());

var TradingResume = /** @class */ (function () {
    function TradingResume(algoId) {
        this.algoId = algoId;
        this.type = TradingActionTypes.TradingResume;
    }
    return TradingResume;
}());

var TradingStop = /** @class */ (function () {
    function TradingStop(algoId) {
        this.algoId = algoId;
        this.type = TradingActionTypes.TradingStop;
    }
    return TradingStop;
}());

var AlgoDel = /** @class */ (function () {
    function AlgoDel(payload) {
        this.payload = payload;
        this.type = TradingActionTypes.AlgoDel;
    }
    return AlgoDel;
}());

var MarketStateWS = /** @class */ (function () {
    function MarketStateWS(algoId) {
        this.algoId = algoId;
        this.type = TradingActionTypes.MarketStateWS;
    }
    return MarketStateWS;
}());

var AlgoStateWS = /** @class */ (function () {
    function AlgoStateWS(algoId) {
        this.algoId = algoId;
        this.type = TradingActionTypes.AlgoStateWS;
    }
    return AlgoStateWS;
}());

var LogWS = /** @class */ (function () {
    function LogWS(algoId) {
        this.algoId = algoId;
        this.type = TradingActionTypes.LogWS;
    }
    return LogWS;
}());

var LogLoad = /** @class */ (function () {
    function LogLoad(payload) {
        this.payload = payload;
        this.type = TradingActionTypes.LogLoad;
    }
    return LogLoad;
}());

var LogSet = /** @class */ (function () {
    function LogSet(payload) {
        this.payload = payload;
        this.type = TradingActionTypes.LogSet;
    }
    return LogSet;
}());

var AlgoStateSet = /** @class */ (function () {
    function AlgoStateSet(payload) {
        this.payload = payload;
        this.type = TradingActionTypes.AlgoStateSet;
    }
    return AlgoStateSet;
}());

var AlgoStateDel = /** @class */ (function () {
    function AlgoStateDel(payload) {
        this.payload = payload;
        this.type = TradingActionTypes.AlgoStateDel;
    }
    return AlgoStateDel;
}());

var MarketStateSet = /** @class */ (function () {
    function MarketStateSet(payload) {
        this.payload = payload;
        this.type = TradingActionTypes.MarketStateSet;
    }
    return MarketStateSet;
}());

var LogAppend = /** @class */ (function () {
    function LogAppend(payload) {
        this.payload = payload;
        this.type = TradingActionTypes.LogAppend;
    }
    return LogAppend;
}());

var LvlDelReq = /** @class */ (function () {
    function LvlDelReq(payload) {
        this.payload = payload;
        this.type = TradingActionTypes.LvlDelReq;
    }
    return LvlDelReq;
}());

var LvlDel = /** @class */ (function () {
    function LvlDel(payload) {
        this.payload = payload;
        this.type = TradingActionTypes.LvlDel;
    }
    return LvlDel;
}());



/***/ }),

/***/ "./src/app/actions/userdata.actions.ts":
/*!*********************************************!*\
  !*** ./src/app/actions/userdata.actions.ts ***!
  \*********************************************/
/*! exports provided: UserDataActionTypes, DataLoad, DataSet, DataSave, TradingParamsSet, TradingParamsAdd, TradingParamsDel, ExchangeAdd, ExchangeDel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataActionTypes", function() { return UserDataActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataLoad", function() { return DataLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSet", function() { return DataSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSave", function() { return DataSave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradingParamsSet", function() { return TradingParamsSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradingParamsAdd", function() { return TradingParamsAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradingParamsDel", function() { return TradingParamsDel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeAdd", function() { return ExchangeAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeDel", function() { return ExchangeDel; });
var UserDataActionTypes;
(function (UserDataActionTypes) {
    UserDataActionTypes["DataLoad"] = "[UserData] Data Load";
    UserDataActionTypes["DataSet"] = "[UserData] Data Set";
    UserDataActionTypes["DataSave"] = "[UserData] Data Save";
    UserDataActionTypes["TradingParamsSet"] = "[UserData] Trading Params Set";
    UserDataActionTypes["TradingParamsAdd"] = "[UserData] Trading Params Add";
    UserDataActionTypes["TradingParamsDel"] = "[UserData] Trading Params Del";
    UserDataActionTypes["ExchangeAdd"] = "[UserData] Exchange Keys Add";
    UserDataActionTypes["ExchangeDel"] = "[UserData] Exchange Keys Del";
})(UserDataActionTypes || (UserDataActionTypes = {}));
var DataLoad = /** @class */ (function () {
    function DataLoad() {
        this.type = UserDataActionTypes.DataLoad;
    }
    return DataLoad;
}());

var DataSet = /** @class */ (function () {
    function DataSet(payload) {
        this.payload = payload;
        this.type = UserDataActionTypes.DataSet;
    }
    return DataSet;
}());

var DataSave = /** @class */ (function () {
    function DataSave() {
        this.type = UserDataActionTypes.DataSave;
    }
    return DataSave;
}());

var TradingParamsSet = /** @class */ (function () {
    function TradingParamsSet(payload) {
        this.payload = payload;
        this.type = UserDataActionTypes.TradingParamsSet;
    }
    return TradingParamsSet;
}());

var TradingParamsAdd = /** @class */ (function () {
    function TradingParamsAdd(payload) {
        this.payload = payload;
        this.type = UserDataActionTypes.TradingParamsAdd;
    }
    return TradingParamsAdd;
}());

var TradingParamsDel = /** @class */ (function () {
    function TradingParamsDel(name) {
        this.name = name;
        this.type = UserDataActionTypes.TradingParamsDel;
    }
    return TradingParamsDel;
}());

var ExchangeAdd = /** @class */ (function () {
    function ExchangeAdd(payload) {
        this.payload = payload;
        this.type = UserDataActionTypes.ExchangeAdd;
    }
    return ExchangeAdd;
}());

var ExchangeDel = /** @class */ (function () {
    function ExchangeDel(exchange) {
        this.exchange = exchange;
        this.type = UserDataActionTypes.ExchangeDel;
    }
    return ExchangeDel;
}());



/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./websocket.service */ "./src/app/websocket.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./actions */ "./src/app/actions/index.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var apiBase = 'api';
var ApiService = /** @class */ (function () {
    function ApiService(store, http, wsService, snackBar, authService) {
        var _this = this;
        this.store = store;
        this.http = http;
        this.wsService = wsService;
        this.snackBar = snackBar;
        this.authService = authService;
        this.userData$ = store.select('userData');
        this.ccxt$ = store.select('ccxt');
        this.loading$ = store.select('loading');
        this.trading$ = store.select('trading');
        this.auth$ = store.select('auth');
        this.auth$.subscribe(function () {
            if (!_this.messages && _this.token) {
                var wsHost = (window.document.location.origin || (window.location.protocol + '//' + window.location.host)).replace(/^http/, 'ws');
                var wsUrl = wsHost + '?access_token=' + _this.token;
                console.log('wsUrl', wsUrl);
                _this.messages = _this.wsService
                    .connect(wsUrl)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
                    return JSON.parse(response.data);
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
            }
        });
    }
    ApiService.prototype.selectMarket = function (ex, market) {
        return this.store.select(function (_a) {
            var _b = _a.ccxt, m = _b.markets, b = _b.balances, l = _b.loading, ob = _b.orderbooks, my = _b.myOrders, t = _b.tick, mI = _b.marketInfo;
            var markets = lodash__WEBPACK_IMPORTED_MODULE_5___default.a.get(m, ex, {});
            var balances = lodash__WEBPACK_IMPORTED_MODULE_5___default.a.get(b, ex, {});
            var initLoad = { loading: false, loaded: false };
            var loadingEx = lodash__WEBPACK_IMPORTED_MODULE_5___default.a.get(l, ex, {});
            var loading = lodash__WEBPACK_IMPORTED_MODULE_5___default.a.get(l, ex + "." + market, {});
            var orderbook = lodash__WEBPACK_IMPORTED_MODULE_5___default.a.get(ob, ex + "." + market, {});
            var myOrders = lodash__WEBPACK_IMPORTED_MODULE_5___default.a.get(my, ex + "." + market, []);
            var tick = lodash__WEBPACK_IMPORTED_MODULE_5___default.a.get(t, ex + "." + market, {});
            var marketInfo = lodash__WEBPACK_IMPORTED_MODULE_5___default.a.get(mI, ex + "." + market, {});
            balances.load = loadingEx[_actions__WEBPACK_IMPORTED_MODULE_7__["CcxtActionTypes"].BalancesLoad] || initLoad;
            orderbook.load = loading[_actions__WEBPACK_IMPORTED_MODULE_7__["CcxtActionTypes"].OrderbookLoad] || initLoad;
            myOrders.load = loading[_actions__WEBPACK_IMPORTED_MODULE_7__["CcxtActionTypes"].MyOrdersLoad] || initLoad;
            tick.load = loading[_actions__WEBPACK_IMPORTED_MODULE_7__["CcxtActionTypes"].TickLoad] || initLoad;
            marketInfo.load = loading[_actions__WEBPACK_IMPORTED_MODULE_7__["CcxtActionTypes"].MarketInfoLoad] || initLoad;
            return {
                markets: markets, balances: balances, loading: loading, orderbook: orderbook,
                myOrders: myOrders, tick: tick, marketInfo: marketInfo,
            };
        });
    };
    ApiService.prototype.selectAlgo = function (id) {
        return this.store.select(function (state) { return state.trading[id] || {}; });
    };
    ApiService.prototype.getUserData = function () {
        return this.http.post(apiBase + '/user/getData', {}, this.httpOptions);
    };
    ApiService.prototype.saveUserData = function (userData) {
        return this.http.post(apiBase + '/user/saveData', userData, this.httpOptions);
    };
    ApiService.prototype.ccxtGetBalances = function (exchanges) {
        if (exchanges === void 0) { exchanges = []; }
        return this.http.post(apiBase + '/ccxt/getBalances', { exchanges: exchanges }, this.httpOptions);
    };
    ApiService.prototype.ccxtStartTrading = function (params) {
        return this.http.post(apiBase + '/ccxt/startTrading', params, this.httpOptions);
    };
    ApiService.prototype.ccxtStopTrading = function (id) {
        return this.http.post(apiBase + '/ccxt/stopTrading', { id: id }, this.httpOptions);
    };
    ApiService.prototype.ccxtRestoreTrading = function (algoId) {
        return this.http.post(apiBase + '/ccxt/startTrading', { algoId: algoId }, this.httpOptions);
    };
    ApiService.prototype.ccxtUpdateCfg = function (algoId, cfg) {
        return this.http.post(apiBase + '/ccxt/updateCfg', { algoId: algoId, cfg: cfg }, this.httpOptions);
    };
    ApiService.prototype.ccxtAddLvl = function () {
        return this.http.post(apiBase + '/ccxt/addLvl', {}, this.httpOptions);
    };
    ApiService.prototype.ccxtAlgoList = function () {
        return this.http.post(apiBase + '/ccxt/algoList', {}, this.httpOptions);
    };
    ApiService.prototype.ccxtDelAlgo = function (id) {
        return this.http.post(apiBase + '/ccxt/delAlgo', { id: id }, this.httpOptions);
    };
    ApiService.prototype.ccxtGetMarkets = function (exchanges) {
        return this.http.post(apiBase + '/ccxt/getMarkets', { exchanges: exchanges }, this.httpOptions);
    };
    ApiService.prototype.ccxtGetExchanges = function () {
        return this.http.post(apiBase + '/ccxt/getExchanges', {}, this.httpOptions);
    };
    ApiService.prototype.loadTradingLogViaWS = function (algoId) {
        return this.http.post(apiBase + '/ccxt/loadTradingLogViaWS', { algoId: algoId }, this.httpOptions);
    };
    ApiService.prototype.loadAlgoDataWS = function (id) {
        return this.http.post(apiBase + '/ccxt/loadAlgoDataWS', { id: id }, this.httpOptions);
    };
    ApiService.prototype.wsMethod = function (method) {
        return this.messages.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (m) { return m.method === method; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (m) { return m.params; }));
    };
    ApiService.prototype.ccxtTradingLog = function (id) {
        return this.wsMethod("ccxt.tradingLog." + id);
    };
    ApiService.prototype.ccxtTradingMarketState = function (id) {
        return this.wsMethod("ccxt.tradingMarketState." + id);
    };
    ApiService.prototype.ccxtTradingState = function (id) {
        return this.wsMethod("ccxt.tradingState." + id);
    };
    ApiService.prototype.ccxtMethod = function (params) {
        return this.http.post(apiBase + '/ccxt/getMethod', params, this.httpOptions);
    };
    ApiService.prototype.tradingMethod = function (params) {
        return this.http.post(apiBase + '/ccxt/tradingMethod', params, this.httpOptions);
    };
    Object.defineProperty(ApiService.prototype, "httpOptions", {
        get: function () {
            var headers = {
                'Content-Type': 'application/json',
            };
            if (this.token)
                headers['Authorization'] = 'Bearer ' + this.token;
            return {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](headers)
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiService.prototype, "token", {
        get: function () {
            return this.authService.token;
        },
        enumerable: true,
        configurable: true
    });
    ApiService.prototype.showMsg = function (msg) {
        console.log('showMsg', msg);
        this.snackBar.open(msg, '', {
            duration: 5000,
        });
    };
    ApiService.prototype.showError = function (error) {
        console.log('showError', error);
        var err = error.error || error.message || error;
        this.snackBar.open(err, '', {
            duration: 5000,
        });
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _websocket_service__WEBPACK_IMPORTED_MODULE_2__["WebSocketService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _trading_trading_layout_trading_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trading/trading-layout/trading-layout.component */ "./src/app/trading/trading-layout/trading-layout.component.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'profile', canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]], component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"] },
    { path: 'portfolio', canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]], component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioComponent"] },
    { path: 'trading', canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]], component: _trading_trading_layout_trading_layout_component__WEBPACK_IMPORTED_MODULE_5__["TradingLayoutComponent"] },
    { path: '**', redirectTo: '/trading' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes /*, { enableTracing: true }*/)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-spacer {\n  flex: 1 1 auto;\n}\nnav a {\n  padding: 10px;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <span>{{title}}</span>\n\n  <nav mat-tab-nav-bar>\n    <a mat-tab-link\n       *ngFor=\"let link of navLinks\"\n       [routerLink]=\"link.path\"\n       routerLinkActive #rla=\"routerLinkActive\"\n       [active]=\"rla.isActive\">\n      {{link.label}}\n    </a>\n  </nav>\n\n  <span class=\"flex-spacer\"></span>\n\n  <div *ngIf=\"user\">\n\n    <button mat-button [matMenuTriggerFor]=\"menu\">{{user.email}}</button>\n    <mat-menu #menu=\"matMenu\">\n      <button (click)=\"logout()\" mat-menu-item>Logout</button>\n    </mat-menu>\n  </div>\n</mat-toolbar>\n\n<div>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./src/app/actions/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(router, api, store) {
        this.router = router;
        this.api = api;
        this.store = store;
        this.title = 'TradingDemoApp';
        this.navLinks = [
            { path: '/profile', label: 'Profile' },
            { path: '/portfolio', label: 'Portfolio' },
            { path: '/trading', label: 'Trading' },
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.auth$.subscribe(function (_a) {
            var user = _a.user;
            return _this.user = user;
        });
    };
    AppComponent.prototype.logout = function () {
        this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_4__["LogOut"]());
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: localStorageSyncReducer, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localStorageSyncReducer", function() { return localStorageSyncReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _trading_trading_layout_trading_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./trading/trading-layout/trading-layout.component */ "./src/app/trading/trading-layout/trading-layout.component.ts");
/* harmony import */ var _trading_trading_detail_trading_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./trading/trading-detail/trading-detail.component */ "./src/app/trading/trading-detail/trading-detail.component.ts");
/* harmony import */ var _trading_algo_list_algo_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./trading/algo-list/algo-list.component */ "./src/app/trading/algo-list/algo-list.component.ts");
/* harmony import */ var _loading_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./loading.component */ "./src/app/loading.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./effects */ "./src/app/effects/index.ts");
/* harmony import */ var _confirm_dialog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./confirm-dialog.component */ "./src/app/confirm-dialog.component.ts");
/* harmony import */ var _trading_trading_detail_orderbook_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./trading/trading-detail/orderbook.component */ "./src/app/trading/trading-detail/orderbook.component.ts");
/* harmony import */ var _trading_trading_detail_trading_params_manager_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./trading/trading-detail/trading-params-manager.component */ "./src/app/trading/trading-detail/trading-params-manager.component.ts");
/* harmony import */ var _trading_trading_detail_algo_state_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./trading/trading-detail/algo-state.component */ "./src/app/trading/trading-detail/algo-state.component.ts");
/* harmony import */ var _trading_trading_detail_my_orders_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./trading/trading-detail/my-orders.component */ "./src/app/trading/trading-detail/my-orders.component.ts");
/* harmony import */ var _trading_trading_detail_market_info_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./trading/trading-detail/market-info.component */ "./src/app/trading/trading-detail/market-info.component.ts");
/* harmony import */ var _effects_auth_effects__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./effects/auth.effects */ "./src/app/effects/auth.effects.ts");
/* harmony import */ var ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngrx-store-localstorage */ "./node_modules/ngrx-store-localstorage/dist/index.js");
/* harmony import */ var ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_29__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















 // Angular CLI environemnt











var reducers = {
    auth: _reducers__WEBPACK_IMPORTED_MODULE_19__["authReducer"],
    algoTabs: _reducers__WEBPACK_IMPORTED_MODULE_19__["algoTabsReducer"],
    userData: _reducers__WEBPACK_IMPORTED_MODULE_19__["userDataReducer"],
    ccxt: _reducers__WEBPACK_IMPORTED_MODULE_19__["ccxtReducer"],
    loading: _reducers__WEBPACK_IMPORTED_MODULE_19__["loadingReducer"],
    trading: _reducers__WEBPACK_IMPORTED_MODULE_19__["tradingReducer"]
};
function localStorageSyncReducer(reducer) {
    return Object(ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_29__["localStorageSync"])({ keys: ['auth'], rehydrate: true })(reducer);
}
var metaReducers = [localStorageSyncReducer];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_11__["PortfolioComponent"],
                _trading_trading_layout_trading_layout_component__WEBPACK_IMPORTED_MODULE_12__["TradingLayoutComponent"],
                _trading_trading_detail_trading_detail_component__WEBPACK_IMPORTED_MODULE_13__["TradingDetailComponent"],
                _trading_algo_list_algo_list_component__WEBPACK_IMPORTED_MODULE_14__["AlgoListComponent"],
                _loading_component__WEBPACK_IMPORTED_MODULE_15__["LoadingComponent"],
                _confirm_dialog_component__WEBPACK_IMPORTED_MODULE_22__["default"],
                _trading_trading_detail_orderbook_component__WEBPACK_IMPORTED_MODULE_23__["OrderbookComponent"],
                _trading_trading_detail_trading_params_manager_component__WEBPACK_IMPORTED_MODULE_24__["TradingParamsManagerComponent"],
                _trading_trading_detail_algo_state_component__WEBPACK_IMPORTED_MODULE_25__["AlgoStateComponent"],
                _trading_trading_detail_my_orders_component__WEBPACK_IMPORTED_MODULE_26__["MyOrdersComponent"],
                _trading_trading_detail_market_info_component__WEBPACK_IMPORTED_MODULE_27__["MarketInfoComponent"]
            ],
            entryComponents: [
                _confirm_dialog_component__WEBPACK_IMPORTED_MODULE_22__["default"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["StoreModule"].forRoot(reducers, { metaReducers: metaReducers }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__["EffectsModule"].forRoot([_effects_auth_effects__WEBPACK_IMPORTED_MODULE_28__["AuthEffects"], _effects__WEBPACK_IMPORTED_MODULE_21__["TradingEffects"], _effects__WEBPACK_IMPORTED_MODULE_21__["UsersEffects"], _effects__WEBPACK_IMPORTED_MODULE_21__["CcxtEffects"]]),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_17__["StoreDevtoolsModule"].instrument({
                    maxAge: 25,
                    logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].production,
                }),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        if (this.authService.isAuthenticated) {
            return true;
        }
        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;
        // Navigate to the login page with extras
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: User, AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

var AuthService = /** @class */ (function () {
    function AuthService(http, store) {
        var _this = this;
        this.http = http;
        this.store = store;
        store.select('auth').subscribe(function (_a) {
            var isAuthenticated = _a.isAuthenticated, user = _a.user;
            _this.isAuthenticated = isAuthenticated;
            _this.token = user && user.token;
            _this.user = user;
        });
    }
    AuthService.prototype.logIn = function (email, password) {
        return this.http.post('/login', { email: email, password: password });
    };
    AuthService.prototype.signUp = function (email, password) {
        return this.http.post('/sign-up', { email: email, password: password });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/confirm-dialog.component.ts":
/*!*********************************************!*\
  !*** ./src/app/confirm-dialog.component.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfirmDialogComponent = /** @class */ (function () {
    function ConfirmDialogComponent() {
    }
    ConfirmDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm-dialog',
            template: "\n    <h2 mat-dialog-title>Delete</h2>\n    <mat-dialog-content>Are you sure?</mat-dialog-content>\n    <mat-dialog-actions>\n      <button mat-button mat-dialog-close>No</button>\n      <button mat-button [mat-dialog-close]=\"true\">Yes</button>\n    </mat-dialog-actions>\n  ",
        }),
        __metadata("design:paramtypes", [])
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}());
/* harmony default export */ __webpack_exports__["default"] = (ConfirmDialogComponent);


/***/ }),

/***/ "./src/app/effects/auth.effects.ts":
/*!*****************************************!*\
  !*** ./src/app/effects/auth.effects.ts ***!
  \*****************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/app/actions/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthEffects = /** @class */ (function () {
    function AuthEffects(actions$, authService, router) {
        var _this = this;
        this.actions$ = actions$;
        this.authService = authService;
        this.router = router;
        this.LogIn$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].LogIn), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_a) {
            var email = _a.email, password = _a.password;
            return _this.authService.logIn(email, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) { return new _actions__WEBPACK_IMPORTED_MODULE_1__["LogInSuccess"](user); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_1__["LogInFail"](error)); }));
        }));
        this.LogInSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].LogInSuccess, _actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].SignUpSuccess), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this.router.navigateByUrl('/'); }));
        this.LogInFail$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].LogInFail, _actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].SignUpFail), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (action) { return new _actions__WEBPACK_IMPORTED_MODULE_1__["ShowError"](action.payload); }));
        this.LogOut$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].LogOut), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this.router.navigateByUrl('/login'); }));
        this.SignUp$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].SignUp), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_a) {
            var email = _a.email, password = _a.password;
            return _this.authService.signUp(email, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) { return new _actions__WEBPACK_IMPORTED_MODULE_1__["SignUpSuccess"](user); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_1__["SignUpFail"](error)); }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Effect"])(),
        __metadata("design:type", rxjs_index__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], AuthEffects.prototype, "LogIn$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Effect"])({ dispatch: false }),
        __metadata("design:type", rxjs_index__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], AuthEffects.prototype, "LogInSuccess$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Effect"])(),
        __metadata("design:type", rxjs_index__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], AuthEffects.prototype, "LogInFail$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Effect"])({ dispatch: false }),
        __metadata("design:type", rxjs_index__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], AuthEffects.prototype, "LogOut$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Effect"])(),
        __metadata("design:type", rxjs_index__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], AuthEffects.prototype, "SignUp$", void 0);
    AuthEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"], _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AuthEffects);
    return AuthEffects;
}());



/***/ }),

/***/ "./src/app/effects/ccxt.effects.ts":
/*!*****************************************!*\
  !*** ./src/app/effects/ccxt.effects.ts ***!
  \*****************************************/
/*! exports provided: CcxtEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcxtEffects", function() { return CcxtEffects; });
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/app/actions/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CcxtEffects = /** @class */ (function () {
    function CcxtEffects(http, actions$, api, store) {
        var _this = this;
        this.http = http;
        this.actions$ = actions$;
        this.api = api;
        this.store = store;
        this.markets$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_1__["CcxtActionTypes"].MarketsLoad), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (action) { return _this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_1__["LoadStart"](action)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            return _this.api.ccxtGetMarkets(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (arr) { return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_0__["from"])(arr.map(function (item) {
                if (item.error)
                    throw new Error(item.error);
                return new _actions__WEBPACK_IMPORTED_MODULE_1__["MarketsSet"](item);
            })); }), 
            // concat(of({type: LOADING_SUCCESS, payload: action})),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_1__["LoadSuccess"](action)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_0__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_1__["LoadFail"](__assign({}, action, { error: error }))); }));
        }));
        this.exchanges$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_1__["CcxtActionTypes"].ExchangesLoad), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (action) { return _this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_1__["LoadStart"](action)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            return _this.api.ccxtGetExchanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (exchanges) { return (new _actions__WEBPACK_IMPORTED_MODULE_1__["ExchangesSet"](exchanges)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_1__["LoadSuccess"](action)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_0__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_1__["LoadFail"](__assign({}, action, { error: error }))); }));
        }));
        this.balances$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_1__["CcxtActionTypes"].BalancesLoad), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (action) { return _this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_1__["LoadStart"](action)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            return _this.api.ccxtGetBalances(lodash__WEBPACK_IMPORTED_MODULE_8___default.a.get(action, 'payload.exchanges')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (arr) { return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_0__["from"])(arr.map(function (item) {
                if (item.error)
                    throw new Error(item.error);
                return new _actions__WEBPACK_IMPORTED_MODULE_1__["BalancesSet"](item);
            })); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_1__["LoadSuccess"](action)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_0__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_1__["LoadFail"](__assign({}, action, { error: error }))); }));
        }));
        this.orderbook$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_1__["CcxtActionTypes"].OrderbookLoad), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (action) { return _this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_1__["LoadStart"](action)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            return _this.api.ccxtMethod(__assign({ method: 'orderbook' }, action.payload)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
                if (res.error)
                    throw new Error(res.error);
                return new _actions__WEBPACK_IMPORTED_MODULE_1__["OrderbookSet"](res);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_1__["LoadSuccess"](action)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_0__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_1__["LoadFail"](__assign({}, action, { error: error }))); }));
        }));
        this.myOrders$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_1__["CcxtActionTypes"].MyOrdersLoad), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (action) { return _this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_1__["LoadStart"](action)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            return _this.api.ccxtMethod(__assign({ method: 'myOrders' }, action.payload)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
                if (res.error)
                    throw new Error(res.error);
                return new _actions__WEBPACK_IMPORTED_MODULE_1__["MyOrdersSet"](res);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_1__["LoadSuccess"](action)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_0__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_1__["LoadFail"](__assign({}, action, { error: error }))); }));
        }));
        this.tick$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_1__["CcxtActionTypes"].TickLoad), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (action) { return _this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_1__["LoadStart"](action)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            return _this.api.ccxtMethod(__assign({ method: 'tick' }, action.payload)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
                if (res.error)
                    throw new Error(res.error);
                return new _actions__WEBPACK_IMPORTED_MODULE_1__["TickSet"](res);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_1__["LoadSuccess"](action)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_0__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_1__["LoadFail"](__assign({}, action, { error: error }))); }));
        }));
        this.marketInfo$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_1__["CcxtActionTypes"].MarketInfoLoad), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (action) { return _this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_1__["LoadStart"](action)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            return _this.api.ccxtMethod(__assign({ method: 'marketInfo' }, action.payload)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
                if (res.error)
                    throw new Error(res.error);
                return new _actions__WEBPACK_IMPORTED_MODULE_1__["MarketInfoSet"](res);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_1__["LoadSuccess"](action)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_0__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_1__["LoadFail"](__assign({}, action, { error: error }))); }));
        }));
        this.cancelOrder$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_1__["CcxtActionTypes"].OrderCancel), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            return _this.api.ccxtMethod(__assign({ method: 'cancelOrder' }, action.payload)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
                if (res.error)
                    throw new Error(res.error);
                return new _actions__WEBPACK_IMPORTED_MODULE_1__["MyOrdersLoad"](action.payload);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_0__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_1__["ShowError"](error)); }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(),
        __metadata("design:type", rxjs_index__WEBPACK_IMPORTED_MODULE_0__["Observable"])
    ], CcxtEffects.prototype, "markets$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(),
        __metadata("design:type", rxjs_index__WEBPACK_IMPORTED_MODULE_0__["Observable"])
    ], CcxtEffects.prototype, "exchanges$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(),
        __metadata("design:type", rxjs_index__WEBPACK_IMPORTED_MODULE_0__["Observable"])
    ], CcxtEffects.prototype, "balances$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(),
        __metadata("design:type", rxjs_index__WEBPACK_IMPORTED_MODULE_0__["Observable"])
    ], CcxtEffects.prototype, "orderbook$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(),
        __metadata("design:type", rxjs_index__WEBPACK_IMPORTED_MODULE_0__["Observable"])
    ], CcxtEffects.prototype, "myOrders$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(),
        __metadata("design:type", rxjs_index__WEBPACK_IMPORTED_MODULE_0__["Observable"])
    ], CcxtEffects.prototype, "tick$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(),
        __metadata("design:type", rxjs_index__WEBPACK_IMPORTED_MODULE_0__["Observable"])
    ], CcxtEffects.prototype, "marketInfo$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(),
        __metadata("design:type", rxjs_index__WEBPACK_IMPORTED_MODULE_0__["Observable"])
    ], CcxtEffects.prototype, "cancelOrder$", void 0);
    CcxtEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Actions"], _api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], CcxtEffects);
    return CcxtEffects;
}());



/***/ }),

/***/ "./src/app/effects/index.ts":
/*!**********************************!*\
  !*** ./src/app/effects/index.ts ***!
  \**********************************/
/*! exports provided: CcxtEffects, TradingEffects, UsersEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ccxt_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ccxt.effects */ "./src/app/effects/ccxt.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CcxtEffects", function() { return _ccxt_effects__WEBPACK_IMPORTED_MODULE_0__["CcxtEffects"]; });

/* harmony import */ var _trading_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trading.effects */ "./src/app/effects/trading.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TradingEffects", function() { return _trading_effects__WEBPACK_IMPORTED_MODULE_1__["TradingEffects"]; });

/* harmony import */ var _users_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.effects */ "./src/app/effects/users.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersEffects", function() { return _users_effects__WEBPACK_IMPORTED_MODULE_2__["UsersEffects"]; });






/***/ }),

/***/ "./src/app/effects/trading.effects.ts":
/*!********************************************!*\
  !*** ./src/app/effects/trading.effects.ts ***!
  \********************************************/
/*! exports provided: TradingEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradingEffects", function() { return TradingEffects; });
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/app/actions/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TradingEffects = /** @class */ (function () {
    function TradingEffects(http, actions$, api, store) {
        var _this = this;
        this.http = http;
        this.actions$ = actions$;
        this.api = api;
        this.store = store;
        this.tradingMarketState$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_1__["TradingActionTypes"].MarketStateWS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            return _this.api.ccxtTradingMarketState(action.algoId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (marketState) {
                var exchange = marketState.exchange, market = marketState.market, orders_buy = marketState.orders_buy, orders_sell = marketState.orders_sell, my_orders = marketState.my_orders, tick = marketState.tick, marketInfo = marketState.marketInfo;
                var actions = [
                    new _actions__WEBPACK_IMPORTED_MODULE_1__["MyOrdersSet"]({ exchange: exchange, market: market, result: my_orders }),
                    new _actions__WEBPACK_IMPORTED_MODULE_1__["TickSet"]({ exchange: exchange, market: market, result: tick }),
                    new _actions__WEBPACK_IMPORTED_MODULE_1__["MarketInfoSet"]({ exchange: exchange, market: market, result: marketInfo }),
                    new _actions__WEBPACK_IMPORTED_MODULE_1__["LoadSuccess"](new _actions__WEBPACK_IMPORTED_MODULE_1__["MyOrdersLoad"]({ exchange: exchange, market: market })),
                    new _actions__WEBPACK_IMPORTED_MODULE_1__["LoadSuccess"](new _actions__WEBPACK_IMPORTED_MODULE_1__["TickLoad"]({ exchange: exchange, market: market })),
                    new _actions__WEBPACK_IMPORTED_MODULE_1__["LoadSuccess"](new _actions__WEBPACK_IMPORTED_MODULE_1__["MarketInfoLoad"]({ exchange: exchange, market: market })),
                    new _actions__WEBPACK_IMPORTED_MODULE_1__["MarketStateSet"]({ id: action.algoId, result: marketState }),
                ];
                if (orders_buy) {
                    var ordersMap = function (orders) { return orders.map(function (_a) {
                        var _amount = _a._amount, _price = _a._price;
                        return [_price, _amount];
                    }); };
                    var bids = ordersMap(orders_buy), asks = ordersMap(orders_sell);
                    actions.push(new _actions__WEBPACK_IMPORTED_MODULE_1__["OrderbookSet"]({ exchange: exchange, market: market, result: { bids: bids, asks: asks } }), new _actions__WEBPACK_IMPORTED_MODULE_1__["LoadSuccess"](new _actions__WEBPACK_IMPORTED_MODULE_1__["OrderbookLoad"]({ exchange: exchange, market: market })));
                }
                return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_0__["from"])(actions);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_0__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_1__["ShowError"](error)); }));
        }));
        this.tradingAlgo$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_1__["TradingActionTypes"].AlgoStateWS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (action) { return _this.api.loadAlgoDataWS(action.algoId).subscribe(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            return _this.api.ccxtTradingState(action.algoId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return new _actions__WEBPACK_IMPORTED_MODULE_1__["AlgoStateSet"]({ id: action.algoId, result: result }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_0__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_1__["ShowError"](error)); }));
        }));
        this.tradingLog$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_1__["TradingActionTypes"].LogWS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            return _this.api.ccxtTradingLog(action.algoId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (log) { return new _actions__WEBPACK_IMPORTED_MODULE_1__["LogAppend"]({ id: action.algoId, log: Array.isArray(log) ? log : [log] }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_0__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_1__["ShowError"](error)); }));
        }));
        this.tradingLogSet$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_1__["TradingActionTypes"].LogLoad), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            return _this.api.tradingMethod(__assign({ method: 'loadLog' }, action.payload)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (log) { return new _actions__WEBPACK_IMPORTED_MODULE_1__["LogSet"]({ id: action.payload.id, log: Array.isArray(log) ? log : [log] }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_0__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_1__["ShowError"](error)); }));
        }));
        this.startTrading$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_1__["TradingActionTypes"].TradingStart), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (action) {
            return _this.api.ccxtStartTrading(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (result) { return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_0__["from"])([
                new _actions__WEBPACK_IMPORTED_MODULE_1__["AlgoStateSet"]({ id: result._id, result: result }),
                new _actions__WEBPACK_IMPORTED_MODULE_1__["TabSet"]({ algoId: result._id, i: action.payload.tabIndex }),
            ]); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_0__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_1__["ShowError"](error)); }));
        }));
        this.resumeTrading$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_1__["TradingActionTypes"].TradingResume), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (action) {
            return _this.api.ccxtRestoreTrading(action.algoId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return new _actions__WEBPACK_IMPORTED_MODULE_1__["AlgoStateSet"]({ id: result._id, result: result }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_0__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_1__["ShowError"](error)); }));
        }));
        this.stopTrading$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_1__["TradingActionTypes"].TradingStop), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (action) {
            return _this.api.ccxtStopTrading(action.algoId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return new _actions__WEBPACK_IMPORTED_MODULE_1__["AlgoStateSet"]({ id: result._id, result: result }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_0__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_1__["ShowError"](error)); }));
        }));
        this.listAlgo$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_1__["TradingActionTypes"].AlgoListLoad), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (action) { return _this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_1__["LoadStart"](action)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            return _this.api.ccxtAlgoList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (list) { return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_0__["from"])(list.map(function (result) { return new _actions__WEBPACK_IMPORTED_MODULE_1__["AlgoStateSet"]({ id: result._id, result: result }); })); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_1__["LoadSuccess"](action)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_0__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_1__["LoadFail"](__assign({}, action, { error: error }))); }));
        }));
        this.delAlgo$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_1__["TradingActionTypes"].AlgoDel), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            return _this.api.ccxtDelAlgo(action.payload.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return new _actions__WEBPACK_IMPORTED_MODULE_1__["AlgoStateDel"]({ id: action.payload.id }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_0__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_1__["LoadFail"](__assign({}, action, { error: error }))); }));
        }));
        this.delLvl$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_1__["TradingActionTypes"].LvlDelReq), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            return _this.api.tradingMethod(__assign({ method: 'delLvl' }, action.payload)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
                if (res.error)
                    throw new Error(res.error);
                return new _actions__WEBPACK_IMPORTED_MODULE_1__["LvlDel"](action.payload);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_0__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_1__["ShowError"](error)); }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        __metadata("design:type", rxjs_index__WEBPACK_IMPORTED_MODULE_0__["Observable"])
    ], TradingEffects.prototype, "tradingMarketState$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        __metadata("design:type", rxjs_index__WEBPACK_IMPORTED_MODULE_0__["Observable"])
    ], TradingEffects.prototype, "tradingAlgo$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        __metadata("design:type", rxjs_index__WEBPACK_IMPORTED_MODULE_0__["Observable"])
    ], TradingEffects.prototype, "tradingLog$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        __metadata("design:type", rxjs_index__WEBPACK_IMPORTED_MODULE_0__["Observable"])
    ], TradingEffects.prototype, "tradingLogSet$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        __metadata("design:type", rxjs_index__WEBPACK_IMPORTED_MODULE_0__["Observable"])
    ], TradingEffects.prototype, "startTrading$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        __metadata("design:type", rxjs_index__WEBPACK_IMPORTED_MODULE_0__["Observable"])
    ], TradingEffects.prototype, "resumeTrading$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        __metadata("design:type", rxjs_index__WEBPACK_IMPORTED_MODULE_0__["Observable"])
    ], TradingEffects.prototype, "stopTrading$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        __metadata("design:type", rxjs_index__WEBPACK_IMPORTED_MODULE_0__["Observable"])
    ], TradingEffects.prototype, "listAlgo$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        __metadata("design:type", rxjs_index__WEBPACK_IMPORTED_MODULE_0__["Observable"])
    ], TradingEffects.prototype, "delAlgo$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        __metadata("design:type", rxjs_index__WEBPACK_IMPORTED_MODULE_0__["Observable"])
    ], TradingEffects.prototype, "delLvl$", void 0);
    TradingEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"], _api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], TradingEffects);
    return TradingEffects;
}());



/***/ }),

/***/ "./src/app/effects/users.effects.ts":
/*!******************************************!*\
  !*** ./src/app/effects/users.effects.ts ***!
  \******************************************/
/*! exports provided: UsersEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersEffects", function() { return UsersEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/app/actions/index.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UsersEffects = /** @class */ (function () {
    function UsersEffects(http, actions$, api) {
        var _this = this;
        this.http = http;
        this.actions$ = actions$;
        this.api = api;
        this.loadData$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_1__["UserDataActionTypes"].DataLoad), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (action) {
            return _this.api.getUserData().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return new _actions__WEBPACK_IMPORTED_MODULE_1__["DataSet"](data); }));
        }));
        this.saveTradingParams$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_1__["UserDataActionTypes"].TradingParamsSet, _actions__WEBPACK_IMPORTED_MODULE_1__["UserDataActionTypes"].TradingParamsAdd, _actions__WEBPACK_IMPORTED_MODULE_1__["UserDataActionTypes"].TradingParamsDel), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return new _actions__WEBPACK_IMPORTED_MODULE_1__["DataSave"](); }));
        this.saveUserData$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_1__["UserDataActionTypes"].DataSave), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
            return _this.api.userData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (userData) { return _this.api.saveUserData(userData); }));
        }));
        this.showMsg$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_1__["AppActionTypes"].ShowMsg), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (action) { return _this.api.showMsg(action.text); }));
        this.showErr$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_1__["AppActionTypes"].ShowError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (action) { return _this.api.showError(action.error); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Effect"])(),
        __metadata("design:type", rxjs_index__WEBPACK_IMPORTED_MODULE_6__["Observable"])
    ], UsersEffects.prototype, "loadData$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Effect"])(),
        __metadata("design:type", rxjs_index__WEBPACK_IMPORTED_MODULE_6__["Observable"])
    ], UsersEffects.prototype, "saveTradingParams$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Effect"])({ dispatch: false }),
        __metadata("design:type", rxjs_index__WEBPACK_IMPORTED_MODULE_6__["Observable"])
    ], UsersEffects.prototype, "saveUserData$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Effect"])({ dispatch: false }),
        __metadata("design:type", rxjs_index__WEBPACK_IMPORTED_MODULE_6__["Observable"])
    ], UsersEffects.prototype, "showMsg$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Effect"])({ dispatch: false }),
        __metadata("design:type", rxjs_index__WEBPACK_IMPORTED_MODULE_6__["Observable"])
    ], UsersEffects.prototype, "showErr$", void 0);
    UsersEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], UsersEffects);
    return UsersEffects;
}());



/***/ }),

/***/ "./src/app/loading.component.ts":
/*!**************************************!*\
  !*** ./src/app/loading.component.ts ***!
  \**************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
        this.spinnerDiameter = 20;
        this.refresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LoadingComponent.prototype, "load", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], LoadingComponent.prototype, "spinnerDiameter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], LoadingComponent.prototype, "lazy", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LoadingComponent.prototype, "refresh", void 0);
    LoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading',
            template: "\n    <div *ngIf=\"load?.loaded\">\n      <ng-content></ng-content>\n    </div>\n    <div *ngIf=\"load?.loading\" class=\"spinner\">\n      <mat-progress-spinner [diameter]=\"spinnerDiameter\" color=\"primary\" mode=\"indeterminate\"></mat-progress-spinner>\n    </div>\n    <div *ngIf=\"load?.error\">\n      <button (click)=\"refresh.emit()\" mat-icon-button matTooltip=\"Refresh\" color=\"primary\"><mat-icon>refresh</mat-icon></button>\n      {{load.error?.message || load.error}}\n    </div>\n    <div *ngIf=\"lazy && !load?.loaded && !load?.loading && !load?.error\">\n      <button (click)=\"refresh.emit()\" mat-icon-button matTooltip=\"Load\" color=\"primary\"><mat-icon>vertical_align_bottom</mat-icon></button>\n    </div>\n  ",
            styles: ['.spinner { padding: 10px; }']
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host > div {\n  height: calc(100vh - 65px);\n}\n.login-box {\n  width: 25em;\n}\n.login-box button {\n  margin-top: 10px;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"start center\">\n\n  <div fxFlex=\"2 1 auto\"></div>\n\n  <div fxLayout=\"column\" class=\"login-box\">\n    <mat-form-field appearance=\"standard\">\n      <mat-label>Email</mat-label>\n      <input [(ngModel)]=\"user.email\" matInput>\n    </mat-form-field>\n    <mat-form-field appearance=\"standard\">\n      <mat-label>Password</mat-label>\n      <input type=\"password\" (keyup.enter)=\"login()\" [(ngModel)]=\"user.password\" matInput>\n    </mat-form-field>\n\n    <button (click)=\"login()\" mat-raised-button color=\"primary\">Login</button>\n    <button (click)=\"signUp()\" mat-raised-button color=\"accent\">Sign up</button>\n  </div>\n\n  <div fxFlex=\"5 1 auto\"></div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./src/app/actions/index.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(store) {
        this.store = store;
        this.user = new _auth_service__WEBPACK_IMPORTED_MODULE_3__["User"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user.email = 'chuck@koan.herokuapp.com';
    };
    LoginComponent.prototype.login = function () {
        var payload = {
            email: this.user.email,
            password: this.user.password
        };
        this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_2__["LogIn"](payload));
    };
    LoginComponent.prototype.signUp = function () {
        var payload = {
            email: this.user.email,
            password: this.user.password
        };
        this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_2__["SignUp"](payload));
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                // CdkTableModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTreeModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.css":
/*!***************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.html":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading [load]=\"balancesLoad$ | async\" (refresh)=\"loadBalances()\">\n  <div *ngIf=\"balancesPositive\">\n    <ul *ngFor=\"let exName of objectKeys(balancesPositive)\">\n      <h4>{{exName}}</h4>\n      <li *ngFor=\"let market of objectKeys(balancesPositive[exName])\">\n        {{market}} Total {{balancesPositive[exName][market].total}}\n      </li>\n    </ul>\n  </div>\n</app-loading>\n<!--<app-loading [load]=\"balancesLoad\" (refresh)=\"loadBalances()\">-->\n  <!--<div *ngIf=\"balancesPositive\">-->\n    <!--<ul *ngFor=\"let exName of objectKeys(balancesPositive)\">-->\n      <!--<h4>{{exName}}</h4>-->\n      <!--<li *ngFor=\"let b of balancesPositive[exName]\">{{b.market}} Total {{b.total}}</li>-->\n    <!--</ul>-->\n  <!--</div>-->\n<!--</app-loading>-->\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ "./src/app/actions/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent(api, store) {
        this.api = api;
        this.store = store;
        this.objectKeys = Object.keys;
        this.balancesPositive = {};
    }
    PortfolioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ccxtSub = this.api.ccxt$.subscribe(function (_a) {
            var balances = _a.balances;
            _this.balances = balances;
            _this.balancesPositive = {};
            lodash__WEBPACK_IMPORTED_MODULE_2___default.a.each(_this.balances, function (balances, exchange) {
                _this.balancesPositive[exchange] = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.filter(balances, function (b) { return b.total > 0; });
            });
        });
        this.balancesLoad$ = this.api.loading$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) { return data[_actions__WEBPACK_IMPORTED_MODULE_4__["CcxtActionTypes"].BalancesLoad]; }));
        this.loadBalances();
    };
    PortfolioComponent.prototype.ngOnDestroy = function () {
        this.ccxtSub && this.ccxtSub.unsubscribe();
    };
    PortfolioComponent.prototype.loadBalances = function () {
        this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_4__["BalancesLoad"]());
    };
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.css */ "./src/app/portfolio/portfolio.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host > div{\n  padding: 15px;\n}\n.add-ex {\n  padding: 20px 0;\n}\nmat-form-field {\n  width: 250px;\n}\n"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div fxLayout=\"column\">\n    <div *ngFor=\"let item of userExchanges$ | async\">\n      <div fxLayout=\"row\" fxLayoutGap=\"15px\" fxLayoutAlign=\"start center\">\n        <strong>{{item.name | titlecase}}:</strong>\n        <mat-form-field appearance=\"standard\">\n          <mat-label>Api Key</mat-label>\n          <input [(ngModel)]=\"item.ex.apiKey\" matInput>\n        </mat-form-field>\n        <mat-form-field appearance=\"standard\">\n          <mat-label>Secret Key</mat-label>\n          <input [(ngModel)]=\"item.ex.secret\" matInput>\n        </mat-form-field>\n      </div>\n    </div>\n  </div>\n  <hr/>\n  <div class=\"add-ex\">\n    <strong>Add exchange API Keys:</strong><br/>\n\n    <div fxLayout=\"row\" fxLayoutGap=\"15px\" fxLayoutAlign=\"start center\">\n\n      <app-loading [load]=\"exchangesLoad$ | async\" (refresh)=\"loadExchanges()\">\n        <mat-form-field>\n          <mat-select [(ngModel)]=\"exchange\" placeholder=\"Exchange\">\n            <mat-option *ngFor=\"let ex of exchanges$ | async\" [value]=\"ex\">{{ex}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </app-loading>\n\n      <mat-form-field appearance=\"standard\">\n        <mat-label>Api Key</mat-label>\n        <input [(ngModel)]=\"apiKey\" matInput>\n      </mat-form-field>\n      <mat-form-field appearance=\"standard\">\n        <mat-label>Secret Key</mat-label>\n        <input [(ngModel)]=\"secret\" matInput>\n      </mat-form-field>\n      <button (click)=\"addExchange()\" mat-icon-button matTooltip=\"Add\" color=\"primary\"><mat-icon>add</mat-icon></button>\n      <button (click)=\"saveUserData()\" mat-raised-button matTooltip=\"Save\" color=\"primary\"><mat-icon>save</mat-icon>Save</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./src/app/actions/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(api, store) {
        this.api = api;
        this.store = store;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.loadExchanges();
        this.api.ccxt$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function (_a) {
            var exchanges = _a.exchanges;
            return lodash__WEBPACK_IMPORTED_MODULE_5___default.a.isEmpty(exchanges) && _this.loadExchanges();
        });
        this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_3__["DataLoad"]());
        this.userExchanges$ = this.api.userData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_a) {
            var exchanges = _a.exchanges;
            return lodash__WEBPACK_IMPORTED_MODULE_5___default.a.map(exchanges, function (ex, name) { return ({ ex: ex, name: name }); });
        }));
        this.exchangesLoad$ = this.api.loading$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data[_actions__WEBPACK_IMPORTED_MODULE_3__["CcxtActionTypes"].ExchangesLoad]; }));
        this.exchanges$ = this.api.ccxt$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data.exchanges; }));
    };
    ProfileComponent.prototype.loadExchanges = function () {
        console.log('loadExchanges()');
        this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_3__["ExchangesLoad"]());
    };
    ProfileComponent.prototype.addExchange = function () {
        this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_3__["ExchangeAdd"]({ apiKey: this.apiKey, secret: this.secret, exchange: this.exchange }));
    };
    ProfileComponent.prototype.saveUserData = function () {
        this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_3__["DataSave"]());
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/reducers/algo-tabs.reducer.ts":
/*!***********************************************!*\
  !*** ./src/app/reducers/algo-tabs.reducer.ts ***!
  \***********************************************/
/*! exports provided: algoTabsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "algoTabsReducer", function() { return algoTabsReducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./src/app/actions/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


function algoTabsReducer(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_0__["AlgoTabsActionTypes"].TabAdd:
            return state.concat([action.payload]);
        case _actions__WEBPACK_IMPORTED_MODULE_0__["AlgoTabsActionTypes"].TabSet:
            var _a = action.payload, algoId_1 = _a.algoId, i_1 = _a.i;
            return state.map(function (alg, j) { return i_1 == j ? lodash__WEBPACK_IMPORTED_MODULE_1___default.a.assign({ algoId: algoId_1 }, alg) : alg; });
        case _actions__WEBPACK_IMPORTED_MODULE_0__["AlgoTabsActionTypes"].TabDel:
            return state.filter(function (tab, i) { return i !== action.payload; });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/reducers/auth.reducer.ts":
/*!******************************************!*\
  !*** ./src/app/reducers/auth.reducer.ts ***!
  \******************************************/
/*! exports provided: initialState, authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./src/app/actions/index.ts");

var initialState = {
    isAuthenticated: false,
    user: null,
};
function authReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_0__["AuthActionTypes"].LogInSuccess:
        case _actions__WEBPACK_IMPORTED_MODULE_0__["AuthActionTypes"].SignUpSuccess:
            return {
                isAuthenticated: true,
                user: action.payload
            };
        case _actions__WEBPACK_IMPORTED_MODULE_0__["AuthActionTypes"].LogOut:
            return {
                isAuthenticated: false,
                user: null
            };
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/app/reducers/ccxt.reducer.ts":
/*!******************************************!*\
  !*** ./src/app/reducers/ccxt.reducer.ts ***!
  \******************************************/
/*! exports provided: ccxtReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ccxtReducer", function() { return ccxtReducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./src/app/actions/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var ccxtInitialState = {
    markets: {},
    exchanges: [],
    balances: {},
    loading: {},
    orderbooks: {},
    myOrders: {},
    tick: {},
    marketInfo: {}
};
function ccxtReducer(state, action) {
    if (state === void 0) { state = ccxtInitialState; }
    // {loading: {exchange: {market: {loaded: true, ...}}}}
    var ccxtLoadingState = function (load) {
        var _a = action.payload, type = _a.type, payload = _a.payload, _b = payload || {}, exchange = _b.exchange, exchanges = _b.exchanges, market = _b.market;
        if (!exchanges && lodash__WEBPACK_IMPORTED_MODULE_1___default.a.includes([_actions__WEBPACK_IMPORTED_MODULE_0__["CcxtActionTypes"].BalancesLoad], type)) {
            exchanges = state.exchanges;
        }
        else if (!exchanges && exchange)
            exchanges = [exchange];
        if (!exchanges)
            return state;
        if (!market) {
            var loading = exchanges.reduce(function (loading, ex) {
                return (__assign({}, loading, (_a = {}, _a[ex] = __assign({}, loading[ex], (_b = {}, _b[type] = load, _b)), _a)));
                var _a, _b;
            }, state.loading);
            return __assign({}, state, { loading: loading });
        }
        // market in payload -> single exchange
        var ex = state.loading[exchange] || {}, m = ex[market] || {};
        return __assign({}, state, { loading: __assign({}, state.loading, (_c = {}, _c[exchange] = __assign({}, ex, (_d = {}, _d[market] = __assign({}, m, (_e = {}, _e[type] = load, _e)), _d)), _c)) });
        var _c, _d, _e;
    };
    var exchange, market, result;
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_0__["CcxtActionTypes"].ExchangesSet:
            return __assign({}, state, { exchanges: action.payload });
        case _actions__WEBPACK_IMPORTED_MODULE_0__["CcxtActionTypes"].MarketsSet:
            (_a = action.payload, exchange = _a.exchange, result = _a.result);
            return __assign({}, state, { markets: __assign({}, state.markets, (_b = {}, _b[exchange] = result, _b)) });
        case _actions__WEBPACK_IMPORTED_MODULE_0__["CcxtActionTypes"].BalancesSet:
            (_c = action.payload, exchange = _c.exchange, result = _c.result);
            return __assign({}, state, { balances: __assign({}, state.balances, (_d = {}, _d[exchange] = result, _d)) });
        case _actions__WEBPACK_IMPORTED_MODULE_0__["CcxtActionTypes"].OrderbookSet:
            (_e = action.payload, exchange = _e.exchange, market = _e.market, result = _e.result);
            var ex = __assign({}, state.orderbooks[exchange], (_f = {}, _f[market] = result, _f));
            return __assign({}, state, { orderbooks: __assign({}, state.orderbooks, (_g = {}, _g[exchange] = ex, _g)) });
        case _actions__WEBPACK_IMPORTED_MODULE_0__["CcxtActionTypes"].MyOrdersSet:
            (_h = action.payload, exchange = _h.exchange, market = _h.market, result = _h.result);
            var ex = __assign({}, state.myOrders[exchange], (_j = {}, _j[market] = result, _j));
            return __assign({}, state, { myOrders: __assign({}, state.myOrders, (_k = {}, _k[exchange] = ex, _k)) });
        case _actions__WEBPACK_IMPORTED_MODULE_0__["CcxtActionTypes"].TickSet:
            (_l = action.payload, exchange = _l.exchange, market = _l.market, result = _l.result);
            var ex = __assign({}, state.tick[exchange], (_m = {}, _m[market] = result, _m));
            //if (_.get(state, `tick.${exchange}.${market}.timestamp`, 0) < result.timestamp)
            return __assign({}, state, { tick: __assign({}, state.tick, (_o = {}, _o[exchange] = ex, _o)) });
        case _actions__WEBPACK_IMPORTED_MODULE_0__["CcxtActionTypes"].MarketInfoSet:
            (_p = action.payload, exchange = _p.exchange, market = _p.market, result = _p.result);
            var ex = __assign({}, state.marketInfo[exchange], (_q = {}, _q[market] = result, _q));
            return __assign({}, state, { marketInfo: __assign({}, state.marketInfo, (_r = {}, _r[exchange] = ex, _r)) });
        case _actions__WEBPACK_IMPORTED_MODULE_0__["LoadingActionTypes"].LoadStart:
            return ccxtLoadingState({ loading: true, loaded: false, error: null });
        case _actions__WEBPACK_IMPORTED_MODULE_0__["LoadingActionTypes"].LoadSuccess:
            return ccxtLoadingState({ loading: false, loaded: true, error: null });
        case _actions__WEBPACK_IMPORTED_MODULE_0__["LoadingActionTypes"].LoadFail:
            return ccxtLoadingState({ loading: false, loaded: false, error: action.payload.error });
        default:
            return state;
    }
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
}


/***/ }),

/***/ "./src/app/reducers/index.ts":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: initialState, authReducer, algoTabsReducer, ccxtReducer, loadingReducer, tradingReducer, userDataReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.reducer */ "./src/app/reducers/auth.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _auth_reducer__WEBPACK_IMPORTED_MODULE_0__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return _auth_reducer__WEBPACK_IMPORTED_MODULE_0__["authReducer"]; });

/* harmony import */ var _algo_tabs_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./algo-tabs.reducer */ "./src/app/reducers/algo-tabs.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "algoTabsReducer", function() { return _algo_tabs_reducer__WEBPACK_IMPORTED_MODULE_1__["algoTabsReducer"]; });

/* harmony import */ var _ccxt_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ccxt.reducer */ "./src/app/reducers/ccxt.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ccxtReducer", function() { return _ccxt_reducer__WEBPACK_IMPORTED_MODULE_2__["ccxtReducer"]; });

/* harmony import */ var _loading_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading.reducer */ "./src/app/reducers/loading.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadingReducer", function() { return _loading_reducer__WEBPACK_IMPORTED_MODULE_3__["loadingReducer"]; });

/* harmony import */ var _trading_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trading.reducer */ "./src/app/reducers/trading.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tradingReducer", function() { return _trading_reducer__WEBPACK_IMPORTED_MODULE_4__["tradingReducer"]; });

/* harmony import */ var _userdata_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userdata.reducer */ "./src/app/reducers/userdata.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userDataReducer", function() { return _userdata_reducer__WEBPACK_IMPORTED_MODULE_5__["userDataReducer"]; });









/***/ }),

/***/ "./src/app/reducers/loading.reducer.ts":
/*!*********************************************!*\
  !*** ./src/app/reducers/loading.reducer.ts ***!
  \*********************************************/
/*! exports provided: loadingReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadingReducer", function() { return loadingReducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./src/app/actions/index.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

function loadingReducer(state, action) {
    if (state === void 0) { state = {}; }
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_0__["LoadingActionTypes"].LoadStart:
            return __assign({}, state, (_a = {}, _a[action.payload.type] = { loading: true, loaded: false, error: null }, _a));
        case _actions__WEBPACK_IMPORTED_MODULE_0__["LoadingActionTypes"].LoadSuccess:
            return __assign({}, state, (_b = {}, _b[action.payload.type] = { loading: false, loaded: true, error: null }, _b));
        case _actions__WEBPACK_IMPORTED_MODULE_0__["LoadingActionTypes"].LoadFail:
            var _c = action.payload, error = _c.error, type = _c.type;
            return __assign({}, state, (_d = {}, _d[type] = { loading: false, loaded: false, error: error }, _d));
        default:
            return state;
    }
    var _a, _b, _d;
}


/***/ }),

/***/ "./src/app/reducers/trading.reducer.ts":
/*!*********************************************!*\
  !*** ./src/app/reducers/trading.reducer.ts ***!
  \*********************************************/
/*! exports provided: tradingReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tradingReducer", function() { return tradingReducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./src/app/actions/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


function tradingReducer(state, action) {
    if (state === void 0) { state = {}; }
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_0__["TradingActionTypes"].AlgoStateSet:
            var _a = action.payload, id = _a.id, result = _a.result;
            return __assign({}, state, (_b = {}, _b[id] = __assign({}, state[id], { algo: result }), _b));
        case _actions__WEBPACK_IMPORTED_MODULE_0__["TradingActionTypes"].AlgoStateDel:
            var id = action.payload.id;
            return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.omit(state, id);
        case _actions__WEBPACK_IMPORTED_MODULE_0__["TradingActionTypes"].MarketStateSet:
            var _c = action.payload, id = _c.id, result = _c.result;
            return __assign({}, state, (_d = {}, _d[id] = __assign({}, state[id], { market: result }), _d));
        case _actions__WEBPACK_IMPORTED_MODULE_0__["TradingActionTypes"].LogAppend:
            var _e = action.payload, id = _e.id, log = _e.log, logSt = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(state, id + ".log", []);
            return __assign({}, state, (_f = {}, _f[id] = __assign({}, state[id], { log: logSt.concat(log) }), _f));
        case _actions__WEBPACK_IMPORTED_MODULE_0__["TradingActionTypes"].LvlDel:
            var _g = action.payload, id = _g.id, index = _g.index;
            var algo = state[id].algo || { data: { LVLs: [] } }, data = algo.data, LVLs = data.LVLs;
            LVLs = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.without(LVLs, LVLs[index]);
            return __assign({}, state, (_h = {}, _h[id] = __assign({}, state[id], { algo: __assign({}, algo, { data: __assign({}, data, { LVLs: LVLs }) }) }), _h));
        case _actions__WEBPACK_IMPORTED_MODULE_0__["TradingActionTypes"].LogSet:
            var _j = action.payload, id = _j.id, log = _j.log;
            return __assign({}, state, (_k = {}, _k[id] = __assign({}, state[id], { log: log }), _k));
        default:
            return state;
    }
    var _b, _d, _f, _h, _k;
}


/***/ }),

/***/ "./src/app/reducers/userdata.reducer.ts":
/*!**********************************************!*\
  !*** ./src/app/reducers/userdata.reducer.ts ***!
  \**********************************************/
/*! exports provided: userDataReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userDataReducer", function() { return userDataReducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./src/app/actions/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var userDataInitState = { tradingParams: {}, exchanges: {} };
function userDataReducer(state, action) {
    if (state === void 0) { state = userDataInitState; }
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_0__["UserDataActionTypes"].DataSet:
            return action.payload;
        case _actions__WEBPACK_IMPORTED_MODULE_0__["UserDataActionTypes"].TradingParamsSet:
        case _actions__WEBPACK_IMPORTED_MODULE_0__["UserDataActionTypes"].TradingParamsAdd:
            var _a = action.payload, name = _a.name, cfg = _a.cfg;
            return __assign({}, state, { tradingParams: __assign({}, state.tradingParams, (_b = {}, _b[name] = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.cloneDeep(cfg), _b)) });
        case _actions__WEBPACK_IMPORTED_MODULE_0__["UserDataActionTypes"].TradingParamsDel:
            return __assign({}, state, { tradingParams: lodash__WEBPACK_IMPORTED_MODULE_1___default.a.omit(state.tradingParams, [action.name]) });
        case _actions__WEBPACK_IMPORTED_MODULE_0__["UserDataActionTypes"].ExchangeAdd:
            var _c = action.payload, exchange = _c.exchange, apiKey = _c.apiKey, secret = _c.secret;
            return __assign({}, state, { exchanges: __assign({}, state.exchanges, (_d = {}, _d[exchange] = { apiKey: apiKey, secret: secret }, _d)) });
        case _actions__WEBPACK_IMPORTED_MODULE_0__["UserDataActionTypes"].ExchangeDel:
            return __assign({}, state, { exchanges: lodash__WEBPACK_IMPORTED_MODULE_1___default.a.omit(state.exchanges, [action.exchange]) });
        default:
            return state;
    }
    var _b, _d;
}


/***/ }),

/***/ "./src/app/trading/algo-list/algo-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/trading/algo-list/algo-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host > div {\n  padding: 20px 10px;\n}\n"

/***/ }),

/***/ "./src/app/trading/algo-list/algo-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/trading/algo-list/algo-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div fxLayout=\"row\" fxLayoutGap=\"20px\" fxLayoutAlign=\"start center\">\n    <app-loading [load]=\"exchangesLoad$ | async\" (refresh)=\"loadExchanges()\">\n      <mat-form-field>\n        <mat-select [(ngModel)]=\"exchange\" (selectionChange)=\"loadMarkets($event.value)\" placeholder=\"Exchange\">\n          <mat-option *ngFor=\"let ex of exchanges\" [value]=\"ex\">{{ex}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </app-loading>\n\n    <app-loading [load]=\"marketsLoad$ | async\" (refresh)=\"loadMarkets(exchange)\">\n      <mat-form-field *ngIf=\"markets[exchange]\">\n        <mat-select #selectMarket placeholder=\"Market\" [(ngModel)]=\"market\">\n          <mat-option *ngFor=\"let name of markets[exchange]\" [value]=\"name\">{{name}}</mat-option>\n          <!--<mat-option *ngFor=\"let name of objectKeys(markets[exchange])\" [value]=\"name\">{{name}}</mat-option>-->\n        </mat-select>\n      </mat-form-field>\n    </app-loading>\n\n    <button *ngIf=\"market\" (click)=\"addTab()\" mat-icon-button matTooltip=\"Add algo\" color=\"primary\"><mat-icon>add</mat-icon></button>\n  </div>\n\n  <div *ngFor=\"let algo of algoList$ | async\">\n    <button (click)=\"delAlgoConfirm(algo)\" mat-icon-button matTooltip=\"Delete\" color=\"primary\"><mat-icon>delete</mat-icon></button>\n    <button (click)=\"openAlgo.emit(algo)\" mat-icon-button matTooltip=\"Open\" color=\"primary\"><mat-icon>open_in_new</mat-icon></button>\n\n    <button *ngIf=\"algo.data.state==='STOP'\" (click)=\"resumeAlgo.emit(algo._id)\" mat-icon-button matTooltip=\"Resume\" color=\"primary\"><mat-icon>play_arrow</mat-icon></button>\n    <button *ngIf=\"algo.data.state==='RUN'\" (click)=\"stopAlgo.emit(algo._id)\" mat-icon-button matTooltip=\"Stop\" color=\"primary\"><mat-icon>pause</mat-icon></button>\n    {{algo.data.state}} - {{algo.data.exchange}} - {{algo.data.market}} -  {{algo | json}}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/trading/algo-list/algo-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/trading/algo-list/algo-list.component.ts ***!
  \**********************************************************/
/*! exports provided: AlgoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlgoListComponent", function() { return AlgoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../confirm-dialog.component */ "./src/app/confirm-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions */ "./src/app/actions/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AlgoListComponent = /** @class */ (function () {
    function AlgoListComponent(api, store, dialog) {
        this.api = api;
        this.store = store;
        this.dialog = dialog;
        this.addTabEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.delAlgo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.openAlgo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.resumeAlgo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.stopAlgo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.exchanges = [];
        this.markets = {};
    }
    AlgoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadExchanges();
        this.ccxtSub = this.api.ccxt$.subscribe(function (data) {
            _this.exchanges = data.exchanges;
            _this.markets = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.mapValues(data.markets, function (markets) { return lodash__WEBPACK_IMPORTED_MODULE_3___default.a.keys(markets); });
        });
        this.algoList$ = this.api.trading$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) { return lodash__WEBPACK_IMPORTED_MODULE_3___default.a.map(data, function (_a, id) {
            var algo = _a.algo;
            return algo;
        }); }));
        this.exchangesLoad$ = this.api.loading$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) { return data[_actions__WEBPACK_IMPORTED_MODULE_6__["CcxtActionTypes"].ExchangesLoad]; }));
        this.marketsLoad$ = this.api.loading$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) { return data[_actions__WEBPACK_IMPORTED_MODULE_6__["CcxtActionTypes"].MarketsLoad]; }));
    };
    AlgoListComponent.prototype.ngOnDestroy = function () {
        this.ccxtSub && this.ccxtSub.unsubscribe();
    };
    AlgoListComponent.prototype.loadExchanges = function () {
        this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_6__["ExchangesLoad"]());
    };
    AlgoListComponent.prototype.loadMarkets = function (exchange) {
        if (exchange in this.markets) {
            this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_6__["LoadSuccess"](new _actions__WEBPACK_IMPORTED_MODULE_6__["MarketsLoad"]())); // reset error
            return;
        }
        this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_6__["MarketsLoad"]([exchange]));
    };
    AlgoListComponent.prototype.delAlgoConfirm = function (algo) {
        var _this = this;
        var dialogRef = this.dialog.open(_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["default"], {});
        dialogRef.afterClosed().subscribe(function (result) {
            if (result)
                _this.delAlgo.emit(algo);
        });
    };
    AlgoListComponent.prototype.addTab = function () {
        this.addTabEvent.emit({ market: this.market, exchange: this.exchange });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('addTab'),
        __metadata("design:type", Object)
    ], AlgoListComponent.prototype, "addTabEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AlgoListComponent.prototype, "delAlgo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AlgoListComponent.prototype, "openAlgo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AlgoListComponent.prototype, "resumeAlgo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AlgoListComponent.prototype, "stopAlgo", void 0);
    AlgoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-algo-list',
            template: __webpack_require__(/*! ./algo-list.component.html */ "./src/app/trading/algo-list/algo-list.component.html"),
            styles: [__webpack_require__(/*! ./algo-list.component.css */ "./src/app/trading/algo-list/algo-list.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], AlgoListComponent);
    return AlgoListComponent;
}());



/***/ }),

/***/ "./src/app/trading/trading-detail/algo-state.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/trading/trading-detail/algo-state.component.ts ***!
  \****************************************************************/
/*! exports provided: AlgoStateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlgoStateComponent", function() { return AlgoStateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlgoStateComponent = /** @class */ (function () {
    function AlgoStateComponent() {
        this.amountFmt = '1.2-2';
        this.priceFmt = '1.2-2';
        this.delLvl = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseEnterLvl = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseLeaveLvl = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AlgoStateComponent.prototype, "amountFmt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AlgoStateComponent.prototype, "priceFmt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AlgoStateComponent.prototype, "algo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AlgoStateComponent.prototype, "delLvl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AlgoStateComponent.prototype, "mouseEnterLvl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AlgoStateComponent.prototype, "mouseLeaveLvl", void 0);
    AlgoStateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-algo-state',
            template: "\n    <div *ngIf=\"algo\" class=\"algo-state\">\n      <table>\n        <tr><th></th><th>{{algo.base_currency}}</th><th>{{algo.partner_currency}}</th></tr>\n        <tr>\n          <td><ins>Balance before:</ins></td>\n          <td>{{algo.balance_before[algo.base_currency]?.total | number : amountFmt}}</td>\n          <td>{{algo.balance_before[algo.partner_currency]?.total | number : priceFmt}}</td>\n        </tr>\n        <tr>\n          <td><ins>Last balance:</ins></td>\n          <td>{{algo.balance_before[algo.base_currency]?.total | number : amountFmt}}</td>\n          <td>{{algo.balance_before[algo.partner_currency]?.total | number : priceFmt}}</td>\n        </tr>\n        <tr>\n          <td><ins>Profit:</ins></td>\n          <td>{{algo.profit | number : amountFmt }}</td>\n          <td></td>\n        </tr>\n      </table>\n    </div>\n    <hr/>\n    <div *ngIf=\"algo.LVLs?.length\">\n      <ins>Current trades:</ins>\n      <div *ngFor=\"let lvl of algo.LVLs; let i = index\">\n        <div (mouseenter)=\"mouseEnterLvl.emit(lvl)\"  (mouseleave)=\"mouseLeaveLvl.emit(lvl)\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n          <div>\n            {{lvl._type}} {{lvl._order_amount}} [{{lvl._buy_price}}, {{lvl._sell_price}}]\n            <span *ngIf=\"lvl._state==='PONG'\"> -> {{lvl.gain}} {{algo.base_currency}}</span>\n          </div>\n          <div fxFlex=\"1 1 auto\"></div>\n          <button (click)=\"delLvl.emit(i)\" mat-icon-button matTooltip=\"Delete trade\" color=\"primary\"><mat-icon>delete</mat-icon></button>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"algo.finished_LVLs?.length\">\n      <hr/>\n      <ins>Finished trades:</ins>\n      <div *ngFor=\"let lvl of algo.finished_LVLs\">\n        {{lvl._type}} {{lvl._order_amount}} [{{lvl._buy_price}}, {{lvl._sell_price}}] -> {{lvl.gain}} {{algo.base_currency}}\n      </div>\n    </div>\n  ",
            styles: ["\n    .algo-state table {\n      width: 100%;\n    }\n    .algo-state table td:not(:first-of-type) {\n      text-align: right;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [])
    ], AlgoStateComponent);
    return AlgoStateComponent;
}());



/***/ }),

/***/ "./src/app/trading/trading-detail/market-info.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/trading/trading-detail/market-info.component.ts ***!
  \*****************************************************************/
/*! exports provided: MarketInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketInfoComponent", function() { return MarketInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MarketInfoComponent = /** @class */ (function () {
    function MarketInfoComponent() {
        this.amountFmt = '1.2-2';
        this.priceFmt = '1.2-2';
        this.loadBalances = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loadTick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loadMarketInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    MarketInfoComponent.prototype.spreadPerc = function (priceLow, priceHigh) {
        if (!priceHigh)
            return 0;
        return (priceHigh - priceLow) / priceHigh * 100;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MarketInfoComponent.prototype, "amountFmt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MarketInfoComponent.prototype, "priceFmt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MarketInfoComponent.prototype, "partnerCurrency", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MarketInfoComponent.prototype, "baseCurrency", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MarketInfoComponent.prototype, "balances", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MarketInfoComponent.prototype, "tick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MarketInfoComponent.prototype, "marketInfo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MarketInfoComponent.prototype, "loadBalances", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MarketInfoComponent.prototype, "loadTick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MarketInfoComponent.prototype, "loadMarketInfo", void 0);
    MarketInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-market-info',
            template: "\n    <app-loading [load]=\"balances.load\" (refresh)=\"loadBalances.emit()\" lazy=\"true\">\n      {{partnerCurrency}}: {{balances[partnerCurrency]?.total | number : priceFmt}} \n            ({{balances[partnerCurrency]?.free | number : priceFmt}}+{{balances[partnerCurrency]?.used | number : priceFmt}})<br/>\n      {{baseCurrency}}: {{balances[baseCurrency]?.total | number : amountFmt}} \n            ({{balances[baseCurrency]?.free | number : amountFmt}}+{{balances[baseCurrency]?.used | number : amountFmt}})\n    </app-loading>\n    <hr/>\n    <app-loading [load]=\"tick.load\" (refresh)=\"loadTick.emit()\" lazy=\"true\">\n      Best price (b/s): [{{tick?.bid}}, {{tick?.ask}}]  {{spreadPerc(tick?.bid, tick?.ask) | number : '1.2-2'}}%<br/>\n      Low/high 24h (b/s): [{{tick?.low}}, {{tick?.high}}]  {{spreadPerc(tick?.low, tick?.high) | number : '1.2-2'}}%<br/>\n    </app-loading>\n    <app-loading [load]=\"marketInfo.load\" (refresh)=\"loadMarketInfo.emit()\" lazy=\"true\">\n      Fee (maker/taker): {{marketInfo?.maker*100}}%/{{marketInfo?.taker*100}}%<br/>\n    </app-loading>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], MarketInfoComponent);
    return MarketInfoComponent;
}());



/***/ }),

/***/ "./src/app/trading/trading-detail/my-orders.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/trading/trading-detail/my-orders.component.ts ***!
  \***************************************************************/
/*! exports provided: MyOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrdersComponent", function() { return MyOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyOrdersComponent = /** @class */ (function () {
    function MyOrdersComponent() {
        this.amountFmt = '1.2-2';
        this.priceFmt = '1.2-2';
        this.delOrder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    MyOrdersComponent.prototype.highlightOrder = function (id) {
        var order = this.myOrders.find(function (o) { return o.id === id; });
        if (order)
            order.highlight = true;
    };
    MyOrdersComponent.prototype.clearOrderHighlight = function (id) {
        var order = this.myOrders.find(function (o) { return o.id === id; });
        if (order)
            order.highlight = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MyOrdersComponent.prototype, "myOrders", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MyOrdersComponent.prototype, "amountFmt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MyOrdersComponent.prototype, "priceFmt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MyOrdersComponent.prototype, "delOrder", void 0);
    MyOrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-orders',
            template: "\n    <div *ngFor=\"let o of myOrders; trackBy: o?.id\" [class.order-highlight]=\"o.highlight\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <div>{{o.price | number : priceFmt}} - {{o.amount | number : amountFmt}}</div>\n        <div fxFlex=\"1 1 auto\"></div>\n        <button (click)=\"delOrder.emit(o)\" mat-icon-button matTooltip=\"Delete order\" color=\"primary\"><mat-icon>delete</mat-icon></button>\n      </div>\n\n      <mat-progress-bar mode=\"determinate\" [value]=\"o.filled/o.amount*100\"></mat-progress-bar>\n    </div>\n  ",
            styles: ["\n    .order-highlight {\n      background-color: aquamarine;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [])
    ], MyOrdersComponent);
    return MyOrdersComponent;
}());



/***/ }),

/***/ "./src/app/trading/trading-detail/orderbook.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/trading/trading-detail/orderbook.component.ts ***!
  \***************************************************************/
/*! exports provided: OrderbookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderbookComponent", function() { return OrderbookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderbookComponent = /** @class */ (function () {
    function OrderbookComponent() {
        this.amountFmt = '1.2-2';
        this.priceFmt = '1.2-2';
        this.bids = [];
        this.asks = [];
    }
    Object.defineProperty(OrderbookComponent.prototype, "setOrderbook", {
        set: function (val) {
            if (val && val.bids) {
                this.bids = val.bids.slice(0, 6);
                this.asks = val.asks.slice(0, 6).reverse();
                this.depthWidth(this.bids, this.asks);
            }
        },
        enumerable: true,
        configurable: true
    });
    // https://ex.bnbstatic.com/exchange/resources/minjs/tradeDetail.min.js?version=2.0.147
    OrderbookComponent.prototype.medianUnit = function (buyOrders, sellOrders, n) {
        var median = function (orders) {
            var i = Math.floor(orders.length / 3 * 2);
            return orders[i][1] < 1 ? 1 : orders[i][1];
        };
        var sort = function (orders) { return orders.sort(function (e, t) { return e[1] - t[1]; }); };
        return median(sort(buyOrders.concat(sellOrders))) / n;
    };
    OrderbookComponent.prototype.depthWidth = function (buyOrders, sellOrders) {
        var width = function (e, t) {
            if (0 == t)
                return 1;
            var n = Math.round(Number(e) / t);
            return n <= 0 ? 1 : n > 160 ? 160 : n;
        };
        var m = this.medianUnit(buyOrders, sellOrders, 48), ge = 280;
        buyOrders.concat(sellOrders).forEach(function (o) { return o.width = width(o[1], m) * ge / 100; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], OrderbookComponent.prototype, "amountFmt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], OrderbookComponent.prototype, "priceFmt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('orderbook'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], OrderbookComponent.prototype, "setOrderbook", null);
    OrderbookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orderbook',
            template: "\n    <div class=\"orderbook\">\n      <table>\n        <tr *ngFor=\"let o of asks\" class=\"sell-row\">\n          <td class=\"cell-price\"><div class=\"cell-num\">{{o[0] | number : priceFmt}}</div></td>\n          <td class=\"cell-amount\"><div class=\"cell-num\">{{o[1] | number : amountFmt}}</div></td>\n          <td class=\"cell-total\">\n            <div class=\"cell-num\">{{o[0]*o[1] | number : priceFmt}}</div>\n            <div class=\"vol-bar\" [style.width]=\"o.width+'px'\"></div>\n          </td>\n        </tr>\n        <tr *ngFor=\"let o of bids\" class=\"buy-row\">\n          <td class=\"cell-price\"><div class=\"cell-num\">{{o[0] | number : priceFmt}}</div></td>\n          <td class=\"cell-amount\"><div class=\"cell-num\">{{o[1] | number : amountFmt}}</div></td>\n          <td class=\"cell-total\">\n            <div class=\"cell-num\">{{o[0]*o[1] | number : priceFmt}}</div>\n            <div class=\"vol-bar\" [style.width]=\"o.width+'px'\"></div>\n          </td>\n        </tr>\n      </table>\n    </div>\n  ",
            styles: ["\n    .orderbook {\n      overflow-x: hidden;\n    }\n    .orderbook table {\n      width: 100%;\n    }\n    .orderbook .cell-num {\n      z-index: 2;\n      position: relative;\n    }\n    .cell-amount {\n      text-align: right;\n    }\n    .cell-total {\n      position: relative;\n      text-align: right;\n    }\n    .vol-bar {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      right: 0;\n      z-index: 0;\n      max-width: calc(400%);\n    }\n    .buy-row {\n      color: navy;\n    }\n    .sell-row {\n      color: navy;\n      /*color: violet;*/\n    }\n    .buy-row .vol-bar {\n      background-color: #4cae4c !important;\n    }\n    .sell-row .vol-bar {\n      background-color: #de031e !important;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [])
    ], OrderbookComponent);
    return OrderbookComponent;
}());



/***/ }),

/***/ "./src/app/trading/trading-detail/trading-detail.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/trading/trading-detail/trading-detail.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cards-row {\n  margin: 15px 0;\n}\n"

/***/ }),

/***/ "./src/app/trading/trading-detail/trading-detail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/trading/trading-detail/trading-detail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"space-around stretch\" fxLayoutGap=\"1%\" class=\"cards-row\">\n\n  <mat-card fxFlex=\"0 1 20%\">\n    <mat-card-header>\n      <mat-card-title>Market info</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <app-market-info [tick]=\"tick\" [marketInfo]=\"marketInfo\"\n                       [baseCurrency]=\"baseCurrency\" [partnerCurrency]=\"partnerCurrency\" [balances]=\"balances\"\n                       [priceFmt]=\"priceFmt\" [amountFmt]=\"amountFmt\"\n                       (loadBalances)=\"loadBalances()\" (loadMarketInfo)=\"loadMarketInfo()\" (loadTick)=\"loadTick()\">\n      </app-market-info>\n    </mat-card-content>\n    <mat-card-actions>\n      <div fxLayout=\"row\" fxLayoutGap=\"15px\">\n        <button (click)=\"loadBalances()\" [disabled]=\"balances.load.loading\" mat-icon-button matTooltip=\"Update\" color=\"primary\" [style.width]=\"'auto'\"><mat-icon>update</mat-icon>Balance</button>\n        <button (click)=\"loadTick()\" [disabled]=\"tick.load.loading\" mat-icon-button matTooltip=\"Update\" color=\"primary\" [style.width]=\"'auto'\"><mat-icon>update</mat-icon>Price</button>\n      </div>\n    </mat-card-actions>\n  </mat-card>\n\n  <mat-card fxFlex=\"0 1 20%\">\n    <mat-card-header>\n      <mat-card-title>Open orders</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <app-loading [load]=\"myOrders.load\" (refresh)=\"loadMyOrders()\" spinnerDiameter=\"30\">\n        <app-my-orders #myOrdersRef [myOrders]=\"myOrders\" [amountFmt]=\"amountFmt\" [priceFmt]=\"priceFmt\" (delOrder)=\"delOrder($event)\"></app-my-orders>\n      </app-loading>\n    </mat-card-content>\n    <mat-card-actions>\n      <button (click)=\"loadMyOrders()\" [disabled]=\"myOrders.load.loading\" mat-icon-button matTooltip=\"Update\" color=\"primary\"><mat-icon>update</mat-icon>Update</button>\n    </mat-card-actions>\n  </mat-card>\n\n\n  <mat-card fxFlex=\"0 1 25%\">\n    <mat-card-header>\n      <mat-card-title>\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n          <div *ngIf=\"algo?.data\">Algo state ({{algo?.data?.state}})</div>\n          <div fxFlex=\"1 1 auto\"></div>\n          <!--<button *ngIf=\"!algo?.data?.state\" (click)=\"start()\" mat-icon-button matTooltip=\"Start\" color=\"primary\"><mat-icon>play_circle_outline</mat-icon></button>-->\n          <button *ngIf=\"algo?.data?.state==='STOP'\" (click)=\"restore()\" mat-icon-button matTooltip=\"Resume\" color=\"primary\"><mat-icon>play_arrow</mat-icon></button>\n          <button *ngIf=\"algo?.data?.state==='RUN'\" (click)=\"stop()\" mat-icon-button matTooltip=\"Suspend\" color=\"primary\"><mat-icon>pause</mat-icon></button>\n        </div>\n      </mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <div *ngIf=\"algo?.data; else bigStartButton\">\n        <app-algo-state [algo]=\"algo?.data\" [priceFmt]=\"priceFmt\" [amountFmt]=\"amountFmt\"\n                        (delLvl)=\"delLvl($event)\"\n                        (mouseEnterLvl)=\"myOrdersRef.highlightOrder($event._order_id)\"\n                        (mouseLeaveLvl)=\"myOrdersRef.clearOrderHighlight($event._order_id)\">\n        </app-algo-state>\n      </div>\n      <ng-template #bigStartButton>\n        <button fxFlexFill *ngIf=\"!algo?.data?.state\" (click)=\"start(paramsManager.cfg)\" mat-raised-button color=\"primary\">Start trading</button>\n      </ng-template>\n    </mat-card-content>\n  </mat-card>\n\n\n  <mat-card fxFlex=\"0 1 20%\">\n    <mat-card-header><mat-card-title>{{market}}</mat-card-title></mat-card-header>\n    <mat-card-content>\n\n      <app-loading [load]=\"orderbook.load\" (refresh)=\"loadOrderbook()\" spinnerDiameter=\"50\">\n        <app-orderbook [orderbook]=\"orderbook\" [priceFmt]=\"priceFmt\" [amountFmt]=\"amountFmt\"></app-orderbook>\n      </app-loading>\n\n    </mat-card-content>\n    <mat-card-actions>\n      <button (click)=\"loadOrderbook()\" [disabled]=\"orderbook.load.loading\"\n              mat-icon-button matTooltip=\"Update\" color=\"primary\">\n        <mat-icon>update</mat-icon>Update\n      </button>\n    </mat-card-actions>\n    </mat-card>\n\n</div>\n\n<mat-tab-group>\n  <mat-tab label=\"Options\">\n\n    <app-trading-params-manager #paramsManager\n                                [tradingParams]=\"tradingParams$ | async\"\n                                [enableApplyBtn]=\"algo?.data?.state=='RUN'\"\n                                (applyCfg)=\"updateCfg($event)\">\n    </app-trading-params-manager>\n\n  </mat-tab>\n  <mat-tab label=\"Log\">\n    <mat-card>\n      <mat-card-header>\n        <mat-card-title><button (click)=\"loadLog()\" mat-raised-button color=\"primary\">Load full log</button></mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n\n        <mat-form-field appearance=\"standard\" fxFlexFill>\n          <textarea [value]=\"msgs?.join('\\n')\" readonly matInput cdkTextareaAutosize cdkAutosizeMaxRows=\"50\"></textarea>\n        </mat-form-field>\n\n      </mat-card-content>\n    </mat-card>\n  </mat-tab>\n</mat-tab-group>\n\n"

/***/ }),

/***/ "./src/app/trading/trading-detail/trading-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/trading/trading-detail/trading-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: TradingDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradingDetailComponent", function() { return TradingDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../confirm-dialog.component */ "./src/app/confirm-dialog.component.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions */ "./src/app/actions/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TradingDetailComponent = /** @class */ (function () {
    function TradingDetailComponent(api, store, dialog) {
        this.api = api;
        this.store = store;
        this.dialog = dialog;
        this.startAlgo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.resumeAlgo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.stopAlgo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.msgs = [];
    }
    TradingDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _a = this.market.split('/'), base = _a[0], partner = _a[1];
        this.baseCurrency = base;
        this.partnerCurrency = partner;
        this.tradingParams$ = this.api.userData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (_a) {
            var tradingParams = _a.tradingParams;
            return tradingParams;
        }));
        this.marketSub = this.api.selectMarket(this.exchange, this.market).subscribe(function (_a) {
            var loading = _a.loading, balances = _a.balances, orderbook = _a.orderbook, myOrders = _a.myOrders, tick = _a.tick, marketInfo = _a.marketInfo;
            // console.log('{loading, balances, orderbook, myOrders, tick, marketInfo} ----> ', loading, balances, orderbook, myOrders, tick, marketInfo);
            _this.balances = balances;
            _this.myOrders = myOrders;
            _this.orderbook = orderbook;
            _this.tick = tick;
            _this.marketInfo = marketInfo;
        });
        this.algoSub = this.api.selectAlgo(this.algoId).subscribe(function (_a) {
            var algo = _a.algo, market = _a.market, _b = _a.log, log = _b === void 0 ? [] : _b;
            // console.log('{algo, market} ++++++> ', algo, market);
            _this.algo = algo;
            _this.marketState = market;
            if (log.length > _this.msgs.length)
                (_c = _this.msgs).push.apply(_c, log.slice(_this.msgs.length));
            var _c;
        });
        if (!this.algoId) {
            this.loadMyOrders();
            this.loadOrderbook();
            this.loadTick();
            this.loadMarketInfo();
            this.loadBalances();
        }
        else {
            this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_6__["MarketStateWS"](this.algoId));
            this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_6__["AlgoStateWS"](this.algoId));
            this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_6__["LogWS"](this.algoId));
        }
    };
    TradingDetailComponent.prototype.ngOnDestroy = function () {
        this.userDataSub && this.userDataSub.unsubscribe();
        this.marketSub && this.marketSub.unsubscribe();
        this.algoSub && this.algoSub.unsubscribe();
    };
    Object.defineProperty(TradingDetailComponent.prototype, "amountFmt", {
        get: function () {
            var p = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(this.marketState, 'amount_precision', 4);
            return "1." + 0 + "-" + p;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TradingDetailComponent.prototype, "priceFmt", {
        get: function () {
            var p = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(this.marketState, 'price_precision', 8);
            return "1." + 0 + "-" + p;
        },
        enumerable: true,
        configurable: true
    });
    TradingDetailComponent.prototype.delOrder = function (order) {
        var _this = this;
        var dialogRef = this.dialog.open(_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__["default"], {});
        dialogRef.afterClosed().subscribe(function (result) {
            if (result)
                _this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_6__["OrderCancel"]({ id: order.id, orderType: order.side, exchange: _this.exchange, market: _this.market }));
        });
    };
    TradingDetailComponent.prototype.loadBalances = function () {
        this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_6__["BalancesLoad"]({ exchanges: [this.exchange] }));
    };
    TradingDetailComponent.prototype.loadMyOrders = function () {
        this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_6__["MyOrdersLoad"]({ exchange: this.exchange, market: this.market }));
    };
    TradingDetailComponent.prototype.loadOrderbook = function () {
        this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_6__["OrderbookLoad"]({ exchange: this.exchange, market: this.market }));
    };
    TradingDetailComponent.prototype.loadTick = function () {
        this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_6__["TickLoad"]({ exchange: this.exchange, market: this.market }));
    };
    TradingDetailComponent.prototype.loadMarketInfo = function () {
        this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_6__["MarketInfoLoad"]({ exchange: this.exchange, market: this.market }));
    };
    TradingDetailComponent.prototype.loadLog = function () {
        this.msgs = [];
        this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_6__["LogLoad"]({ id: this.algoId }));
    };
    TradingDetailComponent.prototype.start = function (cfg) {
        this.startAlgo.emit(cfg);
    };
    TradingDetailComponent.prototype.stop = function () {
        this.stopAlgo.emit(this.algoId);
    };
    TradingDetailComponent.prototype.restore = function () {
        this.resumeAlgo.emit(this.algoId);
    };
    TradingDetailComponent.prototype.updateCfg = function (cfg) {
        this.api.ccxtUpdateCfg(this.algoId, cfg).subscribe();
    };
    TradingDetailComponent.prototype.delLvl = function (index) {
        this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_6__["LvlDelReq"]({ id: this.algoId, index: index }));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TradingDetailComponent.prototype, "algoId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TradingDetailComponent.prototype, "market", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TradingDetailComponent.prototype, "exchange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TradingDetailComponent.prototype, "startAlgo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TradingDetailComponent.prototype, "resumeAlgo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TradingDetailComponent.prototype, "stopAlgo", void 0);
    TradingDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trading-detail',
            template: __webpack_require__(/*! ./trading-detail.component.html */ "./src/app/trading/trading-detail/trading-detail.component.html"),
            styles: [__webpack_require__(/*! ./trading-detail.component.css */ "./src/app/trading/trading-detail/trading-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], TradingDetailComponent);
    return TradingDetailComponent;
}());



/***/ }),

/***/ "./src/app/trading/trading-detail/trading-params-manager.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/trading/trading-detail/trading-params-manager.component.ts ***!
  \****************************************************************************/
/*! exports provided: TradingParamsManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradingParamsManagerComponent", function() { return TradingParamsManagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions */ "./src/app/actions/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TradingParamsManagerComponent = /** @class */ (function () {
    function TradingParamsManagerComponent(store) {
        this.store = store;
        this.applyCfg = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.objectKeys = Object.keys;
    }
    TradingParamsManagerComponent.prototype.ngOnInit = function () {
        this.cfg = {
            PING_NUM_LIMIT: 1,
            MAX_BUY_LVL_NUM: 2,
            DUST_CREATE_ON_TOP_VOL: 0.2, VOL_RECREATE_PING: 0.2, VOL_RECREATE_PONG: 0.4,
            SPREAD_BUY_DUST_VOL: 0.2, SPREAD_SELL_DUST_VOL: 0.2,
            MIN_PING_SPREAD_PERC: 1.5,
            MIN_PONG_SPREAD_PERC: 1.0,
            MIN_PING_SPREAD_BUY_PERC: 2.0, MIN_PING_SPREAD_SELL_PERC: 2.0,
            SPREAD_BUY_GAP_PERC: 1.0, SPREAD_SELL_GAP_PERC: 1.0,
            BUY_AMOUNT: 2.0, SELL_AMOUNT: 5.0,
            SLEEP_DELAY: 30
        };
        // this.cfg = {
        //   PING_NUM_LIMIT: 1,
        //   MAX_BUY_LVL_NUM: 2,
        //
        //   DUST_CREATE_ON_TOP_VOL: 0.2, VOL_RECREATE_PING: 0.2, VOL_RECREATE_PONG: 0.4,
        //   SPREAD_BUY_DUST_VOL: 0.2, SPREAD_SELL_DUST_VOL: 0.2,
        //
        //   MIN_PING_SPREAD_PERC: 0.4,
        //   MIN_PONG_SPREAD_PERC: 0.25,
        //   MIN_PING_SPREAD_BUY_PERC: 0.4, MIN_PING_SPREAD_SELL_PERC: 0.4,
        //
        //   SPREAD_BUY_GAP_PERC: 0.5, SPREAD_SELL_GAP_PERC: 0.5,
        //
        //   BUY_AMOUNT: 2.0, SELL_AMOUNT: 1.5, // 5k ~ 0.1
        //
        //   SLEEP_DELAY: 20
        // };
    };
    TradingParamsManagerComponent.prototype.loadTradingParams = function (name) {
        this.cfg = Object.assign({}, this.tradingParams[name]);
    };
    TradingParamsManagerComponent.prototype.saveTradingParams = function (name) {
        this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_2__["TradingParamsSet"]({ cfg: this.cfg, name: name }));
    };
    TradingParamsManagerComponent.prototype.delTradingParams = function (name) {
        this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_2__["TradingParamsDel"](name));
    };
    TradingParamsManagerComponent.prototype.addTradingParams = function () {
        var name = prompt('Params name');
        if (name) {
            this.selectParamName = name;
            this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_2__["TradingParamsAdd"]({ cfg: this.cfg, name: name }));
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TradingParamsManagerComponent.prototype, "tradingParams", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TradingParamsManagerComponent.prototype, "enableApplyBtn", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TradingParamsManagerComponent.prototype, "applyCfg", void 0);
    TradingParamsManagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trading-params-manager',
            template: "\n    <!--<div *ngIf=\"userData?.tradingParams?.length; else saveParamsFirst\">-->\n    <div *ngIf=\"tradingParams; else saveParamsFirst\" class=\"options-ctrl\">\n      <span>Load params:</span>\n      <mat-form-field>\n        <mat-select #selectParam [(ngModel)]=\"selectParamName\" (selectionChange)=\"loadTradingParams(selectParamName)\" placeholder=\"Saved params\">\n          <mat-option *ngFor=\"let name of objectKeys(tradingParams)\" [value]=\"name\">{{name}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <button (click)=\"saveTradingParams(selectParamName)\" [disabled]=\"selectParam.empty\" mat-icon-button matTooltip=\"Save params\" color=\"primary\"><mat-icon>save</mat-icon></button>\n      <button (click)=\"delTradingParams(selectParamName)\" [disabled]=\"selectParam.empty\" mat-icon-button matTooltip=\"Delete params\" color=\"primary\"><mat-icon>delete</mat-icon></button>\n      <button (click)=\"addTradingParams()\" mat-icon-button matTooltip=\"Add params\" color=\"primary\"><mat-icon>add</mat-icon></button>\n\n      <button class=\"apply-btn\" *ngIf=\"enableApplyBtn\" (click)=\"applyCfg.emit(cfg)\" mat-raised-button matTooltip=\"Update algo config\" color=\"primary\">Apply</button>\n    </div>\n    <ng-template #saveParamsFirst>\n      <button (click)=\"addTradingParams()\" mat-raised-button color=\"primary\">Save params</button>\n    </ng-template>\n\n    <mat-card>\n      <mat-card-header><mat-card-title>Options:</mat-card-title></mat-card-header>\n      <mat-card-content>\n\n        <div class=\"opt-box\">\n          <div *ngFor=\"let name of objectKeys(cfg)\">\n            <div class=\"opt\">\n              <mat-form-field appearance=\"standard\">\n                <mat-label>{{name}}</mat-label>\n                <input [(ngModel)]=\"cfg[name]\" matInput>\n              </mat-form-field>\n            </div>\n          </div>\n        </div>\n\n      </mat-card-content>\n      <mat-card-actions></mat-card-actions>\n    </mat-card>\n  ",
            styles: ["\n    .options-ctrl span {\n      padding: 0 20px;\n      font-weight: 500;\n    }\n    .apply-btn {\n      margin-left: 20px;\n    }\n    .opt-box {\n      display: flex;\n      flex-wrap: wrap;\n    }\n    .opt {\n      display: flex;\n    }\n    .opt input {\n      width: 80px;\n    }\n    .opt label {\n      padding: 7px;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], TradingParamsManagerComponent);
    return TradingParamsManagerComponent;
}());



/***/ }),

/***/ "./src/app/trading/trading-layout/trading-layout.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/trading/trading-layout/trading-layout.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab-title-up {\n  font-size: 16px;\n}\n.tab-title-bottom {\n  font-size: 12px;\n}\n"

/***/ }),

/***/ "./src/app/trading/trading-layout/trading-layout.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/trading/trading-layout/trading-layout.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group [(selectedIndex)]=\"tabIndex\">\n  <mat-tab label=\"AlgoList\">\n    <app-algo-list\n                   (resumeAlgo)=\"resumeAlgo($event)\"\n                   (stopAlgo)=\"stopAlgo($event)\"\n                   (openAlgo)=\"openAlgo($event); tabIndex=tabs.length\"\n                   (delAlgo)=\"delAlgo($event)\"\n                   (addTab)=\"addTab($event); tabIndex=tabs.length\">\n    </app-algo-list>\n  </mat-tab>\n  <mat-tab *ngFor=\"let tab of tabs; let i=index;\">\n    <ng-template mat-tab-label>\n      <span fxLayout=\"row\">\n        <div>\n          <span class=\"tab-title-up\">{{tab.market}}</span><br/><span class=\"tab-title-bottom\">{{tab.exchange}}</span>\n        </div>\n        <button (click)=\"closeTab(i); $event.stopPropagation()\" mat-icon-button matTooltip=\"Close\" color=\"primary\"><mat-icon>close</mat-icon></button>\n      </span>\n    </ng-template>\n    <app-trading-detail [market]=\"tab.market\" [exchange]=\"tab.exchange\" [algoId]=\"tab.algoId\"\n                        (startAlgo)=\"startAlgo($event, i)\"\n                        (resumeAlgo)=\"resumeAlgo($event)\"\n                        (stopAlgo)=\"stopAlgo($event)\">\n    </app-trading-detail>\n  </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "./src/app/trading/trading-layout/trading-layout.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/trading/trading-layout/trading-layout.component.ts ***!
  \********************************************************************/
/*! exports provided: TradingLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradingLayoutComponent", function() { return TradingLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions */ "./src/app/actions/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TradingLayoutComponent = /** @class */ (function () {
    function TradingLayoutComponent(api, store) {
        this.api = api;
        this.store = store;
    }
    TradingLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tabsSub = this.store.select('algoTabs').subscribe(function (tabs) { return _this.tabs = tabs; });
        this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_3__["AlgoListLoad"]());
        this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_3__["DataLoad"]());
    };
    TradingLayoutComponent.prototype.ngOnDestroy = function () {
        this.tabsSub && this.tabsSub.unsubscribe();
    };
    TradingLayoutComponent.prototype.addTab = function (data) {
        this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_3__["TabAdd"](data));
    };
    TradingLayoutComponent.prototype.closeTab = function (index) {
        this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_3__["TabDel"](index));
    };
    TradingLayoutComponent.prototype.delAlgo = function (algo) {
        this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_3__["AlgoDel"]({ id: algo._id }));
    };
    TradingLayoutComponent.prototype.openAlgo = function (algo) {
        this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_3__["TabAdd"]({ algoId: algo._id, market: algo.data.market, exchange: algo.data.exchange }));
    };
    TradingLayoutComponent.prototype.startAlgo = function (cfg, tab_i) {
        var tab = this.tabs[tab_i];
        this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_3__["TradingStart"]({ exchange: tab.exchange, market: tab.market, cfg: cfg, tabIndex: tab_i }));
    };
    TradingLayoutComponent.prototype.resumeAlgo = function (algoId) {
        this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_3__["TradingResume"](algoId));
    };
    TradingLayoutComponent.prototype.stopAlgo = function (algoId) {
        this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_3__["TradingStop"](algoId));
    };
    TradingLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trading-layout',
            template: __webpack_require__(/*! ./trading-layout.component.html */ "./src/app/trading/trading-layout/trading-layout.component.html"),
            styles: [__webpack_require__(/*! ./trading-layout.component.css */ "./src/app/trading/trading-layout/trading-layout.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], TradingLayoutComponent);
    return TradingLayoutComponent;
}());



/***/ }),

/***/ "./src/app/websocket.service.ts":
/*!**************************************!*\
  !*** ./src/app/websocket.service.ts ***!
  \**************************************/
/*! exports provided: WebSocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSocketService", function() { return WebSocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var WebSocketService = /** @class */ (function () {
    function WebSocketService() {
    }
    WebSocketService.prototype.connect = function (url) {
        if (!this.subject) {
            this.subject = this.create(url);
        }
        return this.subject;
    };
    WebSocketService.prototype.create = function (url) {
        var ws = new WebSocket(url);
        var observable = rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (obs) {
            ws.onmessage = obs.next.bind(obs);
            ws.onerror = obs.error.bind(obs);
            ws.onclose = obs.complete.bind(obs);
            return ws.close.bind(ws);
        });
        var observer = {
            next: function (data) {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify(data));
                }
            }
        };
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"].create(observer, observable);
    };
    WebSocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], WebSocketService);
    return WebSocketService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/horo/dev/koan/ng6/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map