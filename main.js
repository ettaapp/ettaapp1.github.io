(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../contents/content.module": [
		"./src/app/contents/content.module.ts",
		"common",
		"contents-content-module"
	],
	"./layout/layout.module": [
		"./src/app/layout/layout.module.ts",
		"common",
		"layout-layout-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _shared_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/guard */ "./src/app/shared/guard/index.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _shared_configs_route_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/configs/route.config */ "./src/app/shared/configs/route.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: _shared_configs_route_config__WEBPACK_IMPORTED_MODULE_4__["RouteConfig"].deRoutify(_shared_configs_route_config__WEBPACK_IMPORTED_MODULE_4__["RouteConfig"].ROUTE_DEFAULT),
        loadChildren: './layout/layout.module#LayoutModule',
        canActivate: [_shared_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    {
        path: _shared_configs_route_config__WEBPACK_IMPORTED_MODULE_4__["RouteConfig"].deRoutify(_shared_configs_route_config__WEBPACK_IMPORTED_MODULE_4__["RouteConfig"].ROUTE_LOG_IN),
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [_shared_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-color: \"#3f51b5\"; }\n"

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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_configs_route_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/configs/route.config */ "./src/app/shared/configs/route.config.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/services */ "./src/app/shared/services/index.ts");
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
    function AppComponent(translate, router, userService, mainService) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.userService = userService;
        this.mainService = mainService;
        translate.setDefaultLang('en');
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                // Set managed user level
                var managedUserLevel = Object(_shared_configs_route_config__WEBPACK_IMPORTED_MODULE_3__["getRouteLevel"])(event.url);
                if (managedUserLevel !== null) {
                    _this.userService.setManagedUserLevel(managedUserLevel);
                }
                // set showing sidebar toggle
                _this.mainService.setIsShowingSideBar(event.url !== _shared_configs_route_config__WEBPACK_IMPORTED_MODULE_3__["RouteConfig"].ROUTE_TRIP);
                // set showing add form toggle
                _this.mainService.setIsShowingAddForm(event.url.startsWith('/add') || event.url.startsWith('/blank') ||
                    event.url.startsWith('/trip'));
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                // Hide loading indicator
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
                // Hide loading indicator
                // Present error to user
                console.log(event.error);
            }
        });
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_4__["MainService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _shared_interceptor_token_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/interceptor/token.interceptor */ "./src/app/shared/interceptor/token.interceptor.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/services/http.service */ "./src/app/shared/services/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















// AoT requires an exported function for factories
var createTranslateLoader = function (http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"]],
            imports: [
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["LayoutModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                        useFactory: createTranslateLoader,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
                    }
                })
            ],
            providers: [_shared_services__WEBPACK_IMPORTED_MODULE_15__["MainService"], _shared_services__WEBPACK_IMPORTED_MODULE_15__["AuthService"], _shared_services__WEBPACK_IMPORTED_MODULE_15__["UserService"], _shared_services__WEBPACK_IMPORTED_MODULE_15__["LocationService"], _shared_services__WEBPACK_IMPORTED_MODULE_15__["TripService"], _shared_services_http_service__WEBPACK_IMPORTED_MODULE_20__["HttpService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                    useClass: _shared_interceptor_token_interceptor__WEBPACK_IMPORTED_MODULE_16__["TokenInterceptor"],
                    multi: true
                },
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSnackBar"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\n    <div class=\"content\">\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"onLogin()\" class=\"login-form\">\n            <div class=\"text-center\">\n                <h2 class=\"app-name\">ETTA Local System</h2>\n            </div>\n            <div *ngIf=\"serverError && !loginForm.dirty\">\n                <span class=\"help-block\">Incorrect email or password. Please try again.</span>\n            </div>\n            <div fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\">\n                <div fxFlexFill>\n                    <mat-form-field class=\"w-100\">\n                        <input name=\"email\" matInput placeholder=\"Email\" formControlName=\"email\">\n                        <span class='help-block' *ngIf=\"!loginForm.get('email').value && loginForm.touched\">\n                            Please enter an email\n                        </span>\n                        <span class='help-block' *ngIf=\"(loginForm.get('email').value !== '') && (!loginForm.get('email').valid) &&\n                        loginForm.get('email').dirty\">\n                            Please enter a valid email\n                        </span>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\">\n                <div fxFlexFill>\n                    <mat-form-field class=\"w-100\">\n                        <input matInput name=\"password\" type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n                        <span class='help-block' *ngIf=\"!loginForm.get('password').value && loginForm.touched\">\n                            Please enter a password\n                        </span>\n                        <span class='help-block' *ngIf=\"(loginForm.get('password').value !== '') && (!loginForm.get('password').valid) && loginForm.get('password').dirty\">\n                            Please enter at least 4 characters\n                        </span>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" style=\"margin: 20px 0 30px 0\">\n                <div fxFlex>\n                    <mat-checkbox color=\"primary\">Remember Me</mat-checkbox>\n                </div>\n                <div fxFlex fxLayoutAlign=\"end\">\n                    <a href=\"javascript:void(0)\">Forget Password?</a>\n                </div>\n            </div>\n            <div fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\">\n                <div fxFlexFill>\n                    <button mat-raised-button color=\"primary\" [disabled]=\"!loginForm.valid || loading\" class=\"w-100\" type=\"submit\">\n                        <span>\n                            <span *ngIf=\"!loading\">Login</span>\n                            <mat-spinner color='accent' *ngIf=\"loading\"></mat-spinner>\n                        </span>\n\n                    </button>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-page {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  position: relative; }\n  .login-page .content {\n    z-index: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  .login-page .content .app-name {\n      margin-top: 0px;\n      padding-bottom: 10px;\n      font-size: 32px; }\n  .login-page .content .login-form {\n      padding: 40px;\n      background: #fff;\n      width: 500px;\n      box-shadow: 0 0 10px #ddd; }\n  .login-page .content .login-form input:-webkit-autofill {\n        -webkit-box-shadow: 0 0 0 30px white inset; }\n  .login-page:after {\n    content: '';\n    background: #fff;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 50%;\n    right: 0; }\n  .login-page:before {\n    content: '';\n    background: #3f51b5;\n    position: absolute;\n    top: 50%;\n    left: 0;\n    bottom: 0;\n    right: 0; }\n  .text-center {\n  text-align: center; }\n  .w-100 {\n  width: 100%; }\n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_configs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/configs */ "./src/app/shared/configs/index.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/utils */ "./src/app/shared/utils/index.ts");
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
    function LoginComponent(router, fb, authService) {
        this.router = router;
        this.fb = fb;
        this.authService = authService;
        this.loading = false;
        this.user = {
            email: '',
            password: ''
        };
        this.serverError = false;
        this.serverErrorMessage = '';
        this.loginForm = fb.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)])
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.loading = true;
        this.user.email = this.loginForm.value.email;
        this.user.password = this.loginForm.value.password;
        this.authService.loginUser(this.user)
            .subscribe(function (response) { return _this.handleAuthResponse(response); }, function (error) {
            var err = error;
            var msg = '';
            if (err.status === 403) {
                msg = 'Invalid email or password, please try again!';
                _this.setServerError(true, msg);
            }
            else {
                msg = "Error authenticating, status: " + err.status + " ";
                _this.setServerError(true, msg);
            }
            _this.loading = false;
            _shared_utils__WEBPACK_IMPORTED_MODULE_5__["LogUtil"].ConsoleNag(_this.loading + 'loading');
        });
    };
    LoginComponent.prototype.handleAuthResponse = function (resp) {
        if (resp.success) {
            if (this.authService.getManagingUserLevel() === _shared_configs__WEBPACK_IMPORTED_MODULE_3__["Level"].DISPATCHER) {
                this.router.navigateByUrl(_shared_configs__WEBPACK_IMPORTED_MODULE_3__["RouteConfig"].ROUTE_TRIP).catch(function (reason) {
                    _shared_utils__WEBPACK_IMPORTED_MODULE_5__["LogUtil"].ConsoleNag('Could not navigate to search: ' + reason);
                });
            }
            else {
                this.router.navigateByUrl(_shared_configs__WEBPACK_IMPORTED_MODULE_3__["RouteConfig"].ROUTE_BLANK_PAGE).catch(function (reason) {
                    _shared_utils__WEBPACK_IMPORTED_MODULE_5__["LogUtil"].ConsoleNag('Could not navigate to search: ' + reason);
                });
            }
        }
        else {
            _shared_utils__WEBPACK_IMPORTED_MODULE_5__["LogUtil"].ConsoleNag('SERVER ERROR: ' + JSON.stringify(resp.error));
            this.setServerError(true, resp.error);
        }
    };
    LoginComponent.prototype.setServerError = function (value, msg) {
        _shared_utils__WEBPACK_IMPORTED_MODULE_5__["LogUtil"].ConsoleNag(msg);
        this.serverError = value;
        this.serverErrorMessage = msg;
        this.loginForm.markAsPristine();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _shared_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/shared/configs/cancellation.codes.config.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/configs/cancellation.codes.config.ts ***!
  \*************************************************************/
/*! exports provided: CancellationCode, getCancellationCode, getCancellationLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancellationCode", function() { return CancellationCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCancellationCode", function() { return getCancellationCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCancellationLabel", function() { return getCancellationLabel; });
var CancellationCode;
(function (CancellationCode) {
    CancellationCode["CUB_NOT_FOUND"] = "cub not found";
    CancellationCode["DRIVER_LOST_CUSTOMER"] = "driver lost customer";
    CancellationCode["DRIVER_LATE"] = "driver late";
    CancellationCode["DRIVER_CANCEL_REQUEST"] = "driver cancel request";
    CancellationCode["CUSTOMER_CANCEL_REQUEST"] = "customer cancel request";
    CancellationCode["CUSTOMER_NOT_RESPONDING"] = "customer not responding";
})(CancellationCode || (CancellationCode = {}));
function getCancellationCode(codeString) {
    switch (codeString) {
        case CancellationCode.CUB_NOT_FOUND:
            return CancellationCode.CUB_NOT_FOUND;
        case CancellationCode.DRIVER_LOST_CUSTOMER:
            return CancellationCode.DRIVER_LOST_CUSTOMER;
        case CancellationCode.DRIVER_LATE:
            return CancellationCode.DRIVER_LATE;
        case CancellationCode.DRIVER_CANCEL_REQUEST:
            return CancellationCode.DRIVER_CANCEL_REQUEST;
        case CancellationCode.CUSTOMER_CANCEL_REQUEST:
            return CancellationCode.CUSTOMER_CANCEL_REQUEST;
        case CancellationCode.CUSTOMER_NOT_RESPONDING:
            return CancellationCode.CUSTOMER_NOT_RESPONDING;
        default:
            return CancellationCode.CUSTOMER_CANCEL_REQUEST;
    }
}
function getCancellationLabel(codeString) {
    switch (codeString) {
        case CancellationCode.CUB_NOT_FOUND:
            return 'Taxi Not Found';
        case CancellationCode.DRIVER_LOST_CUSTOMER:
            return 'Driver Lost Customer';
        case CancellationCode.DRIVER_LATE:
            return 'Driver Was Late';
        case CancellationCode.DRIVER_CANCEL_REQUEST:
            return 'Driver Cancelled Request';
        case CancellationCode.CUSTOMER_CANCEL_REQUEST:
            return 'Customer Cancelled Request';
        case CancellationCode.CUSTOMER_NOT_RESPONDING:
            return 'Customer Did Not Respond';
        default:
            return CancellationCode.CUSTOMER_CANCEL_REQUEST;
    }
}


/***/ }),

/***/ "./src/app/shared/configs/env.config.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/configs/env.config.ts ***!
  \**********************************************/
/*! exports provided: EnvConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvConfig", function() { return EnvConfig; });
var EnvConfig = /** @class */ (function () {
    function EnvConfig() {
    }
    EnvConfig.DEBUG = true;
    return EnvConfig;
}());



/***/ }),

/***/ "./src/app/shared/configs/http.config.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/configs/http.config.ts ***!
  \***********************************************/
/*! exports provided: defaultHttpOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultHttpOptions", function() { return defaultHttpOptions; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

var defaultHttpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};


/***/ }),

/***/ "./src/app/shared/configs/index.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/configs/index.ts ***!
  \*****************************************/
/*! exports provided: Level, getLevel, RouteConfig, getRouteLevel, CancellationCode, getCancellationCode, getCancellationLabel, EnvConfig, Label, TripStatus, getTripStatus, UrlConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cancellation_codes_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cancellation.codes.config */ "./src/app/shared/configs/cancellation.codes.config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CancellationCode", function() { return _cancellation_codes_config__WEBPACK_IMPORTED_MODULE_0__["CancellationCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCancellationCode", function() { return _cancellation_codes_config__WEBPACK_IMPORTED_MODULE_0__["getCancellationCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCancellationLabel", function() { return _cancellation_codes_config__WEBPACK_IMPORTED_MODULE_0__["getCancellationLabel"]; });

/* harmony import */ var _env_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./env.config */ "./src/app/shared/configs/env.config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnvConfig", function() { return _env_config__WEBPACK_IMPORTED_MODULE_1__["EnvConfig"]; });

/* harmony import */ var _labels_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./labels.config */ "./src/app/shared/configs/labels.config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _labels_config__WEBPACK_IMPORTED_MODULE_2__["Label"]; });

/* harmony import */ var _levels_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./levels.config */ "./src/app/shared/configs/levels.config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Level", function() { return _levels_config__WEBPACK_IMPORTED_MODULE_3__["Level"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLevel", function() { return _levels_config__WEBPACK_IMPORTED_MODULE_3__["getLevel"]; });

/* harmony import */ var _route_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./route.config */ "./src/app/shared/configs/route.config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouteConfig", function() { return _route_config__WEBPACK_IMPORTED_MODULE_4__["RouteConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRouteLevel", function() { return _route_config__WEBPACK_IMPORTED_MODULE_4__["getRouteLevel"]; });

/* harmony import */ var _trip_status_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trip.status.config */ "./src/app/shared/configs/trip.status.config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TripStatus", function() { return _trip_status_config__WEBPACK_IMPORTED_MODULE_5__["TripStatus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTripStatus", function() { return _trip_status_config__WEBPACK_IMPORTED_MODULE_5__["getTripStatus"]; });

/* harmony import */ var _urls_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./urls.config */ "./src/app/shared/configs/urls.config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlConfig", function() { return _urls_config__WEBPACK_IMPORTED_MODULE_6__["UrlConfig"]; });










/***/ }),

/***/ "./src/app/shared/configs/labels.config.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/configs/labels.config.ts ***!
  \*************************************************/
/*! exports provided: Label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
var Label;
(function (Label) {
    Label["ADMIN_LOWER_CASE"] = "admin";
    Label["SUPERVISOR_LOWER_CASE"] = "supervisor";
    Label["DRIVER_LOWER_CASE"] = "driver";
    Label["DISPATCHER_LOWER_CASE"] = "dispatcher";
    Label["CORPORATE_LOWER_CASE"] = "corporate";
    Label["ADMIN_CAPTIALIZED"] = "Admin";
    Label["SUPERVISOR_CAPITALIZED"] = "Supervisor";
    Label["DRIVER_CAPITALIZED"] = "Driver";
    Label["DISPATCHER_CAPITALIZED"] = "Dispatcher";
    Label["CORPORATE_CAPITALIZED"] = "Corporate";
    Label["CORPORATE_CLIENT_CAPITALIZED"] = "Corporate Client";
    Label["CUSTOMER_LOWER_CASE"] = "customer";
    Label["CUSTOMER_CAPITALIZED"] = "Customer";
    Label["LEVEL"] = "level";
    Label["TOKEN"] = "token";
    Label["IS_LOGGED_IN"] = "isLoggedIn";
    Label["AUTHORIZATION"] = "Authorization";
    Label["TRUE"] = "true";
})(Label || (Label = {}));


/***/ }),

/***/ "./src/app/shared/configs/levels.config.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/configs/levels.config.ts ***!
  \*************************************************/
/*! exports provided: Level, getLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Level", function() { return Level; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLevel", function() { return getLevel; });
var Level;
(function (Level) {
    Level["FINANCE"] = "finance";
    Level["DISPATCHER"] = "dispatcher";
    Level["SUPERVISOR"] = "supervisor";
    Level["CORPORATE_CLIENT"] = "corporate_client";
    Level["ADMIN"] = "admin";
    Level["DRIVER"] = "driver";
    Level["CUSTOMER"] = "customer";
})(Level || (Level = {}));
function getLevel(level_string) {
    switch (level_string) {
        case Level.ADMIN:
            return Level.ADMIN;
        case Level.SUPERVISOR:
            return Level.SUPERVISOR;
        case Level.DISPATCHER:
            return Level.DISPATCHER;
        case Level.FINANCE:
            return Level.FINANCE;
        case Level.CORPORATE_CLIENT:
            return Level.CORPORATE_CLIENT;
        case Level.CUSTOMER:
            return Level.CUSTOMER;
        case Level.DRIVER:
            return Level.DRIVER;
        default:
            // window.alert(`Invalid level string: ${level_string}, can not convert to type Level`);
            return undefined;
    }
}


/***/ }),

/***/ "./src/app/shared/configs/route.config.ts":
/*!************************************************!*\
  !*** ./src/app/shared/configs/route.config.ts ***!
  \************************************************/
/*! exports provided: RouteConfig, getRouteLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteConfig", function() { return RouteConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRouteLevel", function() { return getRouteLevel; });
/* harmony import */ var _levels_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./levels.config */ "./src/app/shared/configs/levels.config.ts");

var RouteConfig = /** @class */ (function () {
    function RouteConfig() {
    }
    /**
     * deroutify
     * removes initial '/' from given route url
     * @param {string} path
     * @returns {string}
     */
    RouteConfig.deRoutify = function (path) {
        return path.substring(1, path.length);
    };
    RouteConfig.parameterized = function (path, param) {
        return path.substring(1, path.length) + "/:" + param;
    };
    RouteConfig.ROUTE_LOG_IN = '/login';
    RouteConfig.ROUTE_DEFAULT = '/';
    RouteConfig.ROUTE_ADMIN = "/admin";
    RouteConfig.ROUTE_ADD_DRIVER = '/add-driver';
    RouteConfig.ROUTE_ADD_CUSTOMER = '/add-customer';
    RouteConfig.ROUTE_ADD_CORPORATE = '/add-corporate';
    RouteConfig.ROUTE_ADD_DISPATCHER = '/add-dispatcher';
    RouteConfig.ROUTE_ADD_SUPERVISOR = '/add-supervisor';
    RouteConfig.ROUTE_EDIT = '/edit';
    RouteConfig.ROUTE_EDIT_DRIVER = '/edit-driver';
    RouteConfig.ROUTE_EDIT_CUSTOMER = '/edit-customer';
    RouteConfig.ROUTE_EDIT_CORPORATE = '/edit-corporate';
    RouteConfig.ROUTE_EDIT_DISPATCHER = '/edit-dispatcher';
    RouteConfig.ROUTE_EDIT_SUPERVISOR = '/edit-supervisor';
    RouteConfig.ROUTE_SEARCH_DRIVER = '/search-driver';
    RouteConfig.ROUTE_SEARCH_CUSTOMER = '/search-customer';
    RouteConfig.ROUTE_SEARCH_CORPORATE = '/search-corporate';
    RouteConfig.ROUTE_SEARCH_SUPERVISOR = '/search-supervisor';
    RouteConfig.ROUTE_SEARCH_DISPATCHER = '/search-dispatcher';
    RouteConfig.ROUTE_BLANK_PAGE = '/blank-page';
    RouteConfig.ROUTE_TRIP = '/trip';
    return RouteConfig;
}());

function getRouteLevel(route) {
    if (route.indexOf('customer') !== -1) {
        return _levels_config__WEBPACK_IMPORTED_MODULE_0__["Level"].CUSTOMER;
    }
    else if (route.indexOf('driver') !== -1) {
        return _levels_config__WEBPACK_IMPORTED_MODULE_0__["Level"].DRIVER;
    }
    else if (route.indexOf('dispatcher') !== -1) {
        return _levels_config__WEBPACK_IMPORTED_MODULE_0__["Level"].DISPATCHER;
    }
    else if (route.indexOf('supervisor') !== -1) {
        return _levels_config__WEBPACK_IMPORTED_MODULE_0__["Level"].SUPERVISOR;
    }
    else if (route.indexOf('corporate') !== -1) {
        return _levels_config__WEBPACK_IMPORTED_MODULE_0__["Level"].CORPORATE_CLIENT;
    }
    else if (route.indexOf('trip') !== -1) {
        return _levels_config__WEBPACK_IMPORTED_MODULE_0__["Level"].CUSTOMER;
    }
    else if (route.indexOf('blank-page') !== -1) {
        return _levels_config__WEBPACK_IMPORTED_MODULE_0__["Level"].CUSTOMER;
    }
    else {
        // default
        //console.log('invalid route for route level: ' + route);
        return _levels_config__WEBPACK_IMPORTED_MODULE_0__["Level"].CUSTOMER;
    }
}


/***/ }),

/***/ "./src/app/shared/configs/trip.status.config.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/configs/trip.status.config.ts ***!
  \******************************************************/
/*! exports provided: TripStatus, getTripStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripStatus", function() { return TripStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTripStatus", function() { return getTripStatus; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/app/shared/utils/index.ts");

var TripStatus;
(function (TripStatus) {
    TripStatus["PRE_PENDING"] = "pre_pending";
    TripStatus["PENDING"] = "pending";
    TripStatus["ACCEPTED"] = "accepted";
    TripStatus["STARTED"] = "started";
    TripStatus["ARRIVED"] = "arrived";
    TripStatus["CANCELLED"] = "cancelled";
})(TripStatus || (TripStatus = {}));
function getTripStatus(statusString) {
    switch (statusString) {
        case TripStatus.PRE_PENDING:
            return TripStatus.PRE_PENDING;
        case TripStatus.PENDING:
            return TripStatus.PENDING;
        case TripStatus.ACCEPTED:
            return TripStatus.ACCEPTED;
        case TripStatus.STARTED:
            return TripStatus.STARTED;
        case TripStatus.ARRIVED:
            return TripStatus.ARRIVED;
        default:
            _utils__WEBPACK_IMPORTED_MODULE_0__["LogUtil"].AlertNag("unknown trip status string: " + statusString);
            return TripStatus.PENDING;
    }
}


/***/ }),

/***/ "./src/app/shared/configs/urls.config.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/configs/urls.config.ts ***!
  \***********************************************/
/*! exports provided: UrlConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlConfig", function() { return UrlConfig; });
var UrlConfig = /** @class */ (function () {
    function UrlConfig() {
    }
    UrlConfig.getFullDefaultAvatar = function () {
        return "" + UrlConfig.DOMAIN_URL + UrlConfig.DEFAULT_AVATAR.split('/')[2];
    };
    //static readonly DOMAIN_URL = 'http://localhost:3000/';
    UrlConfig.DOMAIN_URL = 'https://etta-app.herokuapp.com/';
    UrlConfig.API_URL = UrlConfig.DOMAIN_URL + "api/v1/";
    UrlConfig.USER_URL = UrlConfig.API_URL + "user";
    UrlConfig.ADMIN_URL = UrlConfig.API_URL + "user/admin";
    UrlConfig.SUPERVISOR_URL = UrlConfig.API_URL + "user/supervisor";
    UrlConfig.DISPATCHER_URL = UrlConfig.API_URL + "user/dispatcher";
    UrlConfig.DRIVER_URL = UrlConfig.API_URL + "user/driver";
    UrlConfig.CUSTOMER_URL = UrlConfig.API_URL + "user/customer";
    UrlConfig.CORPORATE_URL = UrlConfig.API_URL + "corporate";
    UrlConfig.LOCATION_URL = UrlConfig.API_URL + "location";
    UrlConfig.LOGIN_URL = UrlConfig.API_URL + "login";
    UrlConfig.ADMINISTRATOR_URL = UrlConfig.API_URL + "admin";
    UrlConfig.TRIP_URL = UrlConfig.API_URL + "trip";
    UrlConfig.TRIP_URL__PENDING = UrlConfig.API_URL + "trip/pending";
    UrlConfig.TRIP_URL__ACCEPTED = UrlConfig.API_URL + "trip/accepted";
    UrlConfig.TRIP_URL__STARTED = UrlConfig.API_URL + "trip/started";
    UrlConfig.TIMESTAMP_URL = UrlConfig.API_URL + "timestamp";
    UrlConfig.UPLOAD_URL = UrlConfig.DOMAIN_URL + "images";
    UrlConfig.DEFAULT_AVATAR = '/uploads/anonymous.png';
    UrlConfig.SEARCH_TRIP_URL = UrlConfig.API_URL + "trip/search";
    return UrlConfig;
}());



/***/ }),

/***/ "./src/app/shared/guard/auth.guard.ts":
/*!********************************************!*\
  !*** ./src/app/shared/guard/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _configs_route_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configs/route.config */ "./src/app/shared/configs/route.config.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _utils_log_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/log.util */ "./src/app/shared/utils/log.util.ts");
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
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.getAuthUser() !== null) {
            return true;
        }
        this.router.navigate([_configs_route_config__WEBPACK_IMPORTED_MODULE_2__["RouteConfig"].ROUTE_LOG_IN]).catch(function (reason) {
            _utils_log_util__WEBPACK_IMPORTED_MODULE_4__["LogUtil"].ConsoleNag('Could not navigate to login: ' + reason, true);
        });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/guard/index.ts":
/*!***************************************!*\
  !*** ./src/app/shared/guard/index.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/shared/guard/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "./src/app/shared/interceptor/token.interceptor.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/interceptor/token.interceptor.ts ***!
  \*********************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ "./src/app/shared/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(auth) {
        this.auth = auth;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        request = request.clone({
            setHeaders: {
                Authorization: "Bearer " + this.auth.getToken()
            }
        });
        return next.handle(request);
    };
    TokenInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _configs_labels_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configs/labels.config */ "./src/app/shared/configs/labels.config.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _configs_urls_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configs/urls.config */ "./src/app/shared/configs/urls.config.ts");
/* harmony import */ var _configs_levels_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../configs/levels.config */ "./src/app/shared/configs/levels.config.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _configs_http_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../configs/http.config */ "./src/app/shared/configs/http.config.ts");
/* harmony import */ var _utils_http_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/http.util */ "./src/app/shared/utils/http.util.ts");
/* harmony import */ var _utils_log_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/log.util */ "./src/app/shared/utils/log.util.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.getToken = function () {
        return localStorage.getItem(_configs_labels_config__WEBPACK_IMPORTED_MODULE_2__["Label"].TOKEN);
    };
    // this is the managing user
    AuthService.prototype.getAuthUser = function () {
        if (this.getToken() === null) {
            return null;
        }
        var jwt_decode = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
        return jwt_decode.decodeToken(this.getToken());
    };
    AuthService.prototype.getManagingUserLevel = function () {
        return Object(_configs_levels_config__WEBPACK_IMPORTED_MODULE_5__["getLevel"])(this.getAuthUser().level);
    };
    AuthService.prototype.getAuthUserAvatar = function () {
        return _configs_urls_config__WEBPACK_IMPORTED_MODULE_4__["UrlConfig"].DOMAIN_URL + "/" + this.getAuthUser().avatar_url.split('uploads/')[1];
    };
    AuthService.prototype.loginUser = function (user) {
        _utils_log_util__WEBPACK_IMPORTED_MODULE_9__["LogUtil"].ConsoleNag(JSON.stringify(user));
        return this.http.post(_configs_urls_config__WEBPACK_IMPORTED_MODULE_4__["UrlConfig"].LOGIN_URL, user, _configs_http_config__WEBPACK_IMPORTED_MODULE_7__["defaultHttpOptions"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(
        // response is of ServerResponse type
        function (response) {
            if (response.success) {
                if (response.token) {
                    // store only the token, everything else will be
                    // extracted from it.
                    localStorage.setItem(_configs_labels_config__WEBPACK_IMPORTED_MODULE_2__["Label"].TOKEN, response.token);
                }
                else {
                    _utils_log_util__WEBPACK_IMPORTED_MODULE_9__["LogUtil"].AlertNag('no token returned with login response');
                }
            }
            return response;
        }, 
        // if error, intercept it here
        function (error) {
            Object(_utils_http_util__WEBPACK_IMPORTED_MODULE_8__["handleError"])(error);
            return error;
        }));
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/services/http.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/http.service.ts ***!
  \*************************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configs */ "./src/app/shared/configs/index.ts");
/* harmony import */ var _configs_http_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configs/http.config */ "./src/app/shared/configs/http.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.getTimeStamp = function () {
        return this.http.get(_configs__WEBPACK_IMPORTED_MODULE_2__["UrlConfig"].TIMESTAMP_URL, _configs_http_config__WEBPACK_IMPORTED_MODULE_3__["defaultHttpOptions"]).toPromise();
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/shared/services/index.ts":
/*!******************************************!*\
  !*** ./src/app/shared/services/index.ts ***!
  \******************************************/
/*! exports provided: MainService, UserService, LocationService, AuthService, TripService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.service */ "./src/app/shared/services/main.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return _main_service__WEBPACK_IMPORTED_MODULE_0__["MainService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/app/shared/services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]; });

/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location.service */ "./src/app/shared/services/location.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return _location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"]; });

/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]; });

/* harmony import */ var _trip_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trip.service */ "./src/app/shared/services/trip.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TripService", function() { return _trip_service__WEBPACK_IMPORTED_MODULE_4__["TripService"]; });








/***/ }),

/***/ "./src/app/shared/services/location.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/location.service.ts ***!
  \*****************************************************/
/*! exports provided: LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configs */ "./src/app/shared/configs/index.ts");
/* harmony import */ var _configs_http_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configs/http.config */ "./src/app/shared/configs/http.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LocationService = /** @class */ (function () {
    function LocationService(http) {
        this.http = http;
    }
    LocationService.prototype.getLocationById = function (id) {
        var searchUrl = _configs__WEBPACK_IMPORTED_MODULE_2__["UrlConfig"].LOCATION_URL + "/details/" + id;
        return this.http.get(searchUrl);
    };
    LocationService.prototype.getLocationByName = function (name) {
        var searchUrl = _configs__WEBPACK_IMPORTED_MODULE_2__["UrlConfig"].LOCATION_URL + "/" + name;
        return this.http.get(searchUrl);
    };
    LocationService.prototype.addLocation = function (location) {
        var addUrl = _configs__WEBPACK_IMPORTED_MODULE_2__["UrlConfig"].LOCATION_URL;
        return this.http.post(addUrl, location, _configs_http_config__WEBPACK_IMPORTED_MODULE_3__["defaultHttpOptions"]);
    };
    LocationService.prototype.updateLocation = function (location) {
        var updateUrl = _configs__WEBPACK_IMPORTED_MODULE_2__["UrlConfig"].LOCATION_URL + "/" + location._id;
        return this.http.put(updateUrl, location, _configs_http_config__WEBPACK_IMPORTED_MODULE_3__["defaultHttpOptions"]);
    };
    LocationService.prototype.deleteLocation = function (id) {
        var deleteUrl = _configs__WEBPACK_IMPORTED_MODULE_2__["UrlConfig"].LOCATION_URL + "/" + id;
        return this.http.delete(deleteUrl);
    };
    LocationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], LocationService);
    return LocationService;
}());



/***/ }),

/***/ "./src/app/shared/services/main.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/main.service.ts ***!
  \*************************************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MainService = /** @class */ (function () {
    function MainService() {
        // used for toggling the sidebar
        this.is_showing_side_bar = true;
        // used for toggling the floating add button
        this.is_showing_add_form = false;
    }
    MainService.prototype.setIsShowingSideBar = function (showing) {
        this.is_showing_side_bar = showing;
    };
    MainService.prototype.isShowingSideBar = function () {
        return this.is_showing_side_bar;
    };
    MainService.prototype.setIsShowingAddForm = function (showing) {
        this.is_showing_add_form = showing;
    };
    MainService.prototype.isShowingAddForm = function () {
        return this.is_showing_add_form;
    };
    MainService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ "./src/app/shared/services/trip.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/trip.service.ts ***!
  \*************************************************/
/*! exports provided: TripService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripService", function() { return TripService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configs */ "./src/app/shared/configs/index.ts");
/* harmony import */ var _configs_http_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configs/http.config */ "./src/app/shared/configs/http.config.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TripService = /** @class */ (function () {
    function TripService(http) {
        this.http = http;
    }
    TripService.prototype.getTrips = function () {
        return this.http.get(_configs__WEBPACK_IMPORTED_MODULE_2__["UrlConfig"].TRIP_URL, _configs_http_config__WEBPACK_IMPORTED_MODULE_3__["defaultHttpOptions"]);
    };
    TripService.prototype.getTripById = function (id) {
        return this.http.get(_configs__WEBPACK_IMPORTED_MODULE_2__["UrlConfig"].TRIP_URL + "/" + id, _configs_http_config__WEBPACK_IMPORTED_MODULE_3__["defaultHttpOptions"]).toPromise();
    };
    TripService.prototype.addTrip = function (trip) {
        return this.http.post(_configs__WEBPACK_IMPORTED_MODULE_2__["UrlConfig"].TRIP_URL, trip, _configs_http_config__WEBPACK_IMPORTED_MODULE_3__["defaultHttpOptions"]);
    };
    TripService.prototype.updateTrip = function (id, trip) {
        return this.http.put(_configs__WEBPACK_IMPORTED_MODULE_2__["UrlConfig"].TRIP_URL + "/" + id, trip, _configs_http_config__WEBPACK_IMPORTED_MODULE_3__["defaultHttpOptions"]);
    };
    TripService.prototype.updateTripNotificationInfo = function (id, body) {
        return this.http.put(_configs__WEBPACK_IMPORTED_MODULE_2__["UrlConfig"].TRIP_URL + "/notified/" + id, body, _configs_http_config__WEBPACK_IMPORTED_MODULE_3__["defaultHttpOptions"]).toPromise();
    };
    TripService.prototype.removeTripById = function (id) {
        return this.http.delete(_configs__WEBPACK_IMPORTED_MODULE_2__["UrlConfig"].TRIP_URL + "/" + id);
    };
    TripService.prototype.cancelTrip = function (id) {
        return this.http.get(_configs__WEBPACK_IMPORTED_MODULE_2__["UrlConfig"].TRIP_URL + "/cancel/" + id);
    };
    // get pending trips
    TripService.prototype.getPendingTrips = function () {
        return this.http.get(_configs__WEBPACK_IMPORTED_MODULE_2__["UrlConfig"].TRIP_URL__PENDING);
    };
    TripService.prototype.updatePendingTrips = function () {
        var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4__(_configs__WEBPACK_IMPORTED_MODULE_2__["UrlConfig"].DOMAIN_URL, { path: '', transports: ['websocket'] });
        // tslint:disable-next-line:no-shadowed-variable
        socket.on('connection', function (socket) { return console.log(socket); });
        var subject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        socket.on('pending trips', function (data) { return subject.next(data); });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(subject);
    };
    // get accepted trips
    TripService.prototype.getAcceptedTrips = function () {
        return this.http.get(_configs__WEBPACK_IMPORTED_MODULE_2__["UrlConfig"].TRIP_URL__ACCEPTED);
    };
    TripService.prototype.updateAcceptedTrips = function () {
        var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4__(_configs__WEBPACK_IMPORTED_MODULE_2__["UrlConfig"].DOMAIN_URL, { path: '', transports: ['websocket'] });
        // tslint:disable-next-line:no-shadowed-variable
        socket.on('connection', function (socket) { return console.log(socket); });
        var subject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        socket.on('accepted trips', function (data) { return subject.next(data); });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(subject);
    };
    // get started trips
    TripService.prototype.getStartedTrips = function () {
        return this.http.get(_configs__WEBPACK_IMPORTED_MODULE_2__["UrlConfig"].TRIP_URL__STARTED);
    };
    TripService.prototype.updateStartedTrips = function () {
        var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4__(_configs__WEBPACK_IMPORTED_MODULE_2__["UrlConfig"].DOMAIN_URL, { path: '', transports: ['websocket'] });
        // tslint:disable-next-line:no-shadowed-variable
        socket.on('connection', function (socket) { return console.log(socket); });
        var subject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        socket.on('started trips', function (data) { return subject.next(data); });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(subject);
    };
    // search by customer name
    TripService.prototype.getTripsByCustomerName = function (customerName) {
        return this.http.get(_configs__WEBPACK_IMPORTED_MODULE_2__["UrlConfig"].SEARCH_TRIP_URL, {
            params: {
                customer_name: customerName
            }
        });
    };
    // search by driver name
    TripService.prototype.getTripsByDriverName = function (driverName) {
        return this.http.get(_configs__WEBPACK_IMPORTED_MODULE_2__["UrlConfig"].SEARCH_TRIP_URL, {
            params: {
                driver_name: driverName
            }
        });
    };
    // search by starting location
    TripService.prototype.getTripsByStartingLocationName = function (startingLocationName) {
        return this.http.get(_configs__WEBPACK_IMPORTED_MODULE_2__["UrlConfig"].SEARCH_TRIP_URL, {
            params: {
                starting_location: startingLocationName
            }
        });
    };
    // search by destination location
    TripService.prototype.getTripsByDestinationLocationName = function (destinationLocationName) {
        return this.http.get(_configs__WEBPACK_IMPORTED_MODULE_2__["UrlConfig"].SEARCH_TRIP_URL, {
            params: {
                destination_location: destinationLocationName
            }
        });
    };
    TripService.prototype.getTripsByLocationNames = function (startingLocationName, destinationLocationName) {
        return this.http.get(_configs__WEBPACK_IMPORTED_MODULE_2__["UrlConfig"].SEARCH_TRIP_URL, {
            params: {
                destination_location: destinationLocationName,
                starting_location: startingLocationName
            }
        });
    };
    TripService.prototype.getTripsByLocationsAndCustomerName = function (startingLocationName, destinationLocationName, customerName) {
        return this.http.get(_configs__WEBPACK_IMPORTED_MODULE_2__["UrlConfig"].SEARCH_TRIP_URL, {
            params: {
                customer_name: customerName,
                destination_location: destinationLocationName,
                starting_location: startingLocationName
            }
        });
    };
    TripService.prototype.getTripsByLocationAndDriverName = function (startingLocationName, destinationLocationName, driverName) {
        return this.http.get(_configs__WEBPACK_IMPORTED_MODULE_2__["UrlConfig"].SEARCH_TRIP_URL, {
            params: {
                driver_name: driverName,
                destination_location: destinationLocationName,
                starting_location: startingLocationName
            }
        });
    };
    TripService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], TripService);
    return TripService;
}());



/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/app/shared/utils/index.ts");
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configs */ "./src/app/shared/configs/index.ts");
/* harmony import */ var _configs_http_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configs/http.config */ "./src/app/shared/configs/http.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAllUsers = function (managedUserLevel) {
        var getUrl = this.getRequestUrl();
        if (managedUserLevel) {
            var tempLevel = this.managedUserLevel;
            this.managedUserLevel = managedUserLevel;
            getUrl = this.getRequestUrl();
            this.managedUserLevel = tempLevel;
        }
        _utils__WEBPACK_IMPORTED_MODULE_2__["LogUtil"].ConsoleNag('get url: ' + getUrl);
        return this.http.get(getUrl);
    };
    UserService.prototype.getUserById = function (id) {
        var getUrl = this.getRequestUrl() + "/details/" + id;
        return this.http.get(getUrl);
    };
    UserService.prototype.getUserByPhone = function (phone) {
        var getUrl = this.getRequestUrl() + "/search/phone/" + phone;
        return this.http.get(getUrl);
    };
    UserService.prototype.getUserByName = function (name) {
        var getUrl = this.getRequestUrl() + "/" + name;
        if (this.managedUserLevel === _configs__WEBPACK_IMPORTED_MODULE_3__["Level"].DRIVER) {
            getUrl = this.getRequestUrl() + "/search/name/" + name;
        }
        return this.http.get(getUrl);
    };
    UserService.prototype.addUser = function (user) {
        var addUrl = this.getRequestUrl();
        return this.http.post(addUrl, user);
    };
    UserService.prototype.addMultipleUsers = function (users) {
        var addMultipleUrl = this.getRequestUrl();
        addMultipleUrl = addMultipleUrl + "/" + 'multiple';
        return this.http.post(addMultipleUrl, users, _configs_http_config__WEBPACK_IMPORTED_MODULE_4__["defaultHttpOptions"]);
    };
    UserService.prototype.updateUser = function (user) {
        var updateUrl = this.getRequestUrl();
        updateUrl = updateUrl + "/" + user._id;
        return this.http.put(updateUrl, user);
    };
    UserService.prototype.deleteUser = function (id) {
        var deleteUrl = this.getRequestUrl();
        deleteUrl = deleteUrl + "/" + id;
        return this.http.delete(deleteUrl);
    };
    UserService.prototype.getRequestUrl = function () {
        var url = '';
        if (this.managedUserLevel === _configs__WEBPACK_IMPORTED_MODULE_3__["Level"].SUPERVISOR) {
            url = _configs__WEBPACK_IMPORTED_MODULE_3__["UrlConfig"].SUPERVISOR_URL;
        }
        else if (this.managedUserLevel === _configs__WEBPACK_IMPORTED_MODULE_3__["Level"].DISPATCHER) {
            url = _configs__WEBPACK_IMPORTED_MODULE_3__["UrlConfig"].DISPATCHER_URL;
        }
        else if (this.managedUserLevel === _configs__WEBPACK_IMPORTED_MODULE_3__["Level"].DRIVER) {
            url = _configs__WEBPACK_IMPORTED_MODULE_3__["UrlConfig"].DRIVER_URL;
        }
        else if (this.managedUserLevel === _configs__WEBPACK_IMPORTED_MODULE_3__["Level"].CORPORATE_CLIENT) {
            url = _configs__WEBPACK_IMPORTED_MODULE_3__["UrlConfig"].CORPORATE_URL;
        }
        else if (this.managedUserLevel === _configs__WEBPACK_IMPORTED_MODULE_3__["Level"].CUSTOMER) {
            url = _configs__WEBPACK_IMPORTED_MODULE_3__["UrlConfig"].CUSTOMER_URL;
        }
        else {
            _utils__WEBPACK_IMPORTED_MODULE_2__["LogUtil"].ConsoleNag('unknown manged user type');
        }
        return url;
    };
    UserService.prototype.setManagedUserLevel = function (level) {
        this.managedUserLevel = level;
    };
    UserService.prototype.getManagedUserLevel = function () {
        return this.managedUserLevel;
    };
    // this is a string like Supervisor, Customer, Driver, Dispatcher ...
    UserService.prototype.getManagedUserLabel = function () {
        switch (this.managedUserLevel) {
            case _configs__WEBPACK_IMPORTED_MODULE_3__["Level"].SUPERVISOR:
                return _configs__WEBPACK_IMPORTED_MODULE_3__["Label"].SUPERVISOR_CAPITALIZED;
            case _configs__WEBPACK_IMPORTED_MODULE_3__["Level"].DRIVER:
                return _configs__WEBPACK_IMPORTED_MODULE_3__["Label"].DRIVER_CAPITALIZED;
            case _configs__WEBPACK_IMPORTED_MODULE_3__["Level"].DISPATCHER:
                return _configs__WEBPACK_IMPORTED_MODULE_3__["Label"].DISPATCHER_CAPITALIZED;
            case _configs__WEBPACK_IMPORTED_MODULE_3__["Level"].CORPORATE_CLIENT:
                return _configs__WEBPACK_IMPORTED_MODULE_3__["Label"].CORPORATE_CAPITALIZED;
            case _configs__WEBPACK_IMPORTED_MODULE_3__["Level"].CUSTOMER:
                return _configs__WEBPACK_IMPORTED_MODULE_3__["Label"].CUSTOMER_CAPITALIZED;
            default:
                _utils__WEBPACK_IMPORTED_MODULE_2__["LogUtil"].NagNag("unrecognized managedUserLevel: " + this.managedUserLevel);
                return undefined;
        }
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/utils/http.util.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/utils/http.util.ts ***!
  \*******************************************/
/*! exports provided: handleError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleError", function() { return handleError; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

function handleError(error) {
    if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        // console.error('An error occurred:', error.error.message.toString());
    }
    else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        // console.error(
        //     `Backend returned code ${error.status.toString()}, ` +
        //     `body was: ${error.error.toString()}`);
    }
    // return an observable with a user-facing error message
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])('Something bad happened; please try again later.');
}


/***/ }),

/***/ "./src/app/shared/utils/index.ts":
/*!***************************************!*\
  !*** ./src/app/shared/utils/index.ts ***!
  \***************************************/
/*! exports provided: handleError, LogUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _http_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.util */ "./src/app/shared/utils/http.util.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleError", function() { return _http_util__WEBPACK_IMPORTED_MODULE_0__["handleError"]; });

/* harmony import */ var _log_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log.util */ "./src/app/shared/utils/log.util.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogUtil", function() { return _log_util__WEBPACK_IMPORTED_MODULE_1__["LogUtil"]; });





/***/ }),

/***/ "./src/app/shared/utils/log.util.ts":
/*!******************************************!*\
  !*** ./src/app/shared/utils/log.util.ts ***!
  \******************************************/
/*! exports provided: LogUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogUtil", function() { return LogUtil; });
/* harmony import */ var _configs_env_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs/env.config */ "./src/app/shared/configs/env.config.ts");

var LogUtil = /** @class */ (function () {
    function LogUtil() {
    }
    LogUtil.AlertNag = function (msg) {
        if (_configs_env_config__WEBPACK_IMPORTED_MODULE_0__["EnvConfig"].DEBUG) {
            window.alert(msg);
        }
    };
    LogUtil.ConsoleNag = function (msg, error) {
        if (error === void 0) { error = false; }
        if (_configs_env_config__WEBPACK_IMPORTED_MODULE_0__["EnvConfig"].DEBUG) {
            if (error) {
                console.error(msg);
            }
            else {
                console.log(msg);
            }
        }
    };
    LogUtil.NagNag = function (msg) {
        if (_configs_env_config__WEBPACK_IMPORTED_MODULE_0__["EnvConfig"].DEBUG) {
            window.alert(msg);
            console.log(msg);
        }
    };
    return LogUtil;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Geleta\client1\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map