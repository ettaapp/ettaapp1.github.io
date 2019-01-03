(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-layout-module"],{

/***/ "./src/app/layout/layout-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/layout-routing.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: '../contents/content.module#ContentModule'
            }
        ]
    }
];
var LayoutRoutingModule = /** @class */ (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-top-nav></app-top-nav>\n<app-sidebar *ngIf=\"isShowingSideBar\"></app-sidebar>\n<div [ngClass]=\"{'main-container': isShowingSideBar}\">\n    <router-outlet></router-outlet>\n    <button class=\"fab-add\" *ngIf=\"!isShowingAddForm\" (click)=\"showAddForm()\" mat-fab color=\"accent\"><mat-icon>add</mat-icon></button>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".trip-container {\n  position: absolute;\n  top: 64px;\n  left: 0;\n  right: 0;\n  bottom: 0; }\n"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _shared_configs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/configs */ "./src/app/shared/configs/index.ts");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utils */ "./src/app/shared/utils/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(userService, mainService, router) {
        this.userService = userService;
        this.mainService = mainService;
        this.router = router;
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(LayoutComponent.prototype, "isShowingSideBar", {
        get: function () {
            return this.mainService.isShowingSideBar();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutComponent.prototype, "isShowingAddForm", {
        get: function () {
            return this.mainService.isShowingAddForm();
        },
        enumerable: true,
        configurable: true
    });
    LayoutComponent.prototype.showAddForm = function () {
        var managedUserLevel = this.userService.getManagedUserLevel();
        var routeLabel = '';
        if (managedUserLevel === _shared_configs__WEBPACK_IMPORTED_MODULE_2__["Level"].DISPATCHER) {
            routeLabel = _shared_configs__WEBPACK_IMPORTED_MODULE_2__["RouteConfig"].ROUTE_ADD_DISPATCHER;
        }
        else if (managedUserLevel === _shared_configs__WEBPACK_IMPORTED_MODULE_2__["Level"].CORPORATE_CLIENT) {
            routeLabel = _shared_configs__WEBPACK_IMPORTED_MODULE_2__["RouteConfig"].ROUTE_ADD_CORPORATE;
        }
        else if (managedUserLevel === _shared_configs__WEBPACK_IMPORTED_MODULE_2__["Level"].CUSTOMER) {
            routeLabel = _shared_configs__WEBPACK_IMPORTED_MODULE_2__["RouteConfig"].ROUTE_ADD_CUSTOMER;
        }
        else if (managedUserLevel === _shared_configs__WEBPACK_IMPORTED_MODULE_2__["Level"].DRIVER) {
            routeLabel = _shared_configs__WEBPACK_IMPORTED_MODULE_2__["RouteConfig"].ROUTE_ADD_DRIVER;
        }
        else if (managedUserLevel === _shared_configs__WEBPACK_IMPORTED_MODULE_2__["Level"].SUPERVISOR) {
            routeLabel = _shared_configs__WEBPACK_IMPORTED_MODULE_2__["RouteConfig"].ROUTE_ADD_SUPERVISOR;
        }
        else {
            routeLabel = null;
            _shared_utils__WEBPACK_IMPORTED_MODULE_3__["LogUtil"].AlertNag('Invalid managed user level for show AddForm');
        }
        if (routeLabel !== null) {
            this.router.navigate([routeLabel]).catch(function (reason) {
                _shared_utils__WEBPACK_IMPORTED_MODULE_3__["LogUtil"].ConsoleNag("Could not navigate to route: " + routeLabel + ", reason: " + reason);
            });
        }
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_1__["MainService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/layout/sidebar/sidebar.component.ts");
/* harmony import */ var _topnav_top_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./topnav/top-nav.component */ "./src/app/layout/topnav/top-nav.component.ts");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout-routing.module */ "./src/app/layout/layout-routing.module.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                _layout_routing_module__WEBPACK_IMPORTED_MODULE_6__["LayoutRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
            ],
            declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"], _topnav_top_nav_component__WEBPACK_IMPORTED_MODULE_5__["TopNavComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/layout/topnav/top-nav.component.html":
/*!******************************************************!*\
  !*** ./src/app/layout/topnav/top-nav.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"fix-nav mat-elevation-z6\">\n\n    <button type=\"button\" mat-icon-button class=\"visible-md\" (click)=\"toggleSidebar()\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n    </button>\n\n    <div class=\"nav-brand\">\n        <span class=\"user-level\" matTooltip=\"authUser.level\" aria-label=\"Label shows authenticated user's level\">{{ authUser.level[0] | uppercase }}</span>\n        {{ 'ETTA Dispatcher Automation' | translate }}\n    </div>\n    <span class=\"nav-spacer\"></span>\n    <div>\n        <button mat-button (click)=\"showDefault()\">\n            <mat-icon>Home</mat-icon>\n            Home\n        </button>\n        <button mat-button (click)=\"showDispatcherPanel()\">\n            <mat-icon>headset_mic</mat-icon>\n            Dispatcher Panel\n        </button>\n        \n    </div>\n\n\n    <!-- profile -->\n    <div class=\"nav-holder\">\n        <div>\n            <div>\n                <button mat-button [matMenuTriggerFor]=\"profile\">\n                    <img class=\"top-nav-avatar\" src = \"https://cdn3.iconfinder.com/data/icons/galaxy-open-line-gradient-i/200/contacts-512.png\"  /> \n                    {{ authUser.name.split(' ')[0] }}\n                </button>\n                <mat-menu #profile=\"matMenu\">\n                    <button mat-icon-button (click)=\"onLogOut()\" style=\"text-align: center; justify-content: center;\">\n                        <mat-icon>exit_to_app</mat-icon> LOGOUT\n                    </button>\n                </mat-menu>\n            </div>\n            <!-- settings -->\n            <div>\n                <button class=\"hidden-sm\" mat-icon-button [matMenuTriggerFor]=\"settings\">\n                    <mat-icon>more_vertical</mat-icon>\n                </button>\n\n                <mat-menu #settings=\"matMenu\">\n                    <button mat-menu-item [matMenuTriggerFor]=\"language\">\n                        <mat-icon>translate</mat-icon>\n                    </button>\n                </mat-menu>\n                <mat-menu #language=\"matMenu\">\n                    <button mat-menu-item (click)=\"changeLang('en')\">\n                        <span>{{ 'English' | translate }}</span>\n                    </button>\n                    <button mat-menu-item (click)=\"changeLang('am')\">\n                        <span>{{ 'Amharic' | translate }}</span>\n                    </button>\n                </mat-menu>\n            </div>\n        </div>\n    </div>\n\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/layout/topnav/top-nav.component.scss":
/*!******************************************************!*\
  !*** ./src/app/layout/topnav/top-nav.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  z-index: 1000; }\n\n.nav-brand {\n  width: 215px;\n  text-align: center; }\n\n.topnav-icon {\n  text-decoration: none;\n  display: flex;\n  color: #fff; }\n\n.nav-spacer {\n  flex: 1 1 auto; }\n\n.visible-md {\n  display: none; }\n\n.visible-sm {\n  display: none; }\n\n@media screen and (max-width: 992px) {\n  .visible-md {\n    display: block; } }\n\n@media screen and (max-width: 768px) {\n  .visible-sm {\n    display: block; }\n  .nav-brand {\n    width: 100%; } }\n\n@media screen and (max-width: 768px) {\n  .hidden-sm {\n    display: none; } }\n\nimg.top-nav-avatar {\n  height: 40px;\n  border-radius: 50%;\n  width: 40px; }\n\nspan.user-level {\n  font-size: 20px;\n  padding: 0;\n  display: inline-block;\n  text-align: center;\n  background-color: #ff4081;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px; }\n\ndiv.nav-holder {\n  display: flex;\n  flex-direction: column; }\n\ndiv.nav-holder > div {\n    flex-direction: row;\n    display: flex; }\n"

/***/ }),

/***/ "./src/app/layout/topnav/top-nav.component.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/topnav/top-nav.component.ts ***!
  \****************************************************/
/*! exports provided: TopNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNavComponent", function() { return TopNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _shared_configs_route_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/configs/route.config */ "./src/app/shared/configs/route.config.ts");
/* harmony import */ var _shared_configs_labels_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/configs/labels.config */ "./src/app/shared/configs/labels.config.ts");
/* harmony import */ var _shared_configs_levels_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/configs/levels.config */ "./src/app/shared/configs/levels.config.ts");
/* harmony import */ var _shared_utils_log_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/utils/log.util */ "./src/app/shared/utils/log.util.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TopNavComponent = /** @class */ (function () {
    function TopNavComponent(router, translate, mainService, authService) {
        var _this = this;
        this.router = router;
        this.translate = translate;
        this.mainService = mainService;
        this.authService = authService;
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] && window.innerWidth <= 992 && _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    TopNavComponent.prototype.ngOnInit = function () {
        this.avatar = this.authService.getAuthUserAvatar();
        this.authUser = this.authService.getAuthUser();
        _shared_utils_log_util__WEBPACK_IMPORTED_MODULE_7__["LogUtil"].ConsoleNag('this.avatar' + this.avatar);
    };
    TopNavComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    TopNavComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    TopNavComponent.prototype.onLogOut = function () {
        localStorage.removeItem(_shared_configs_labels_config__WEBPACK_IMPORTED_MODULE_5__["Label"].TOKEN);
        this.router.navigate([_shared_configs_route_config__WEBPACK_IMPORTED_MODULE_4__["RouteConfig"].ROUTE_LOG_IN]).catch(function (reason) {
            _shared_utils_log_util__WEBPACK_IMPORTED_MODULE_7__["LogUtil"].ConsoleNag("Could not navigate to login on log out, reason: " + reason);
        });
    };
    TopNavComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    Object.defineProperty(TopNavComponent.prototype, "isDispatcherManaging", {
        get: function () {
            return this.authService.getManagingUserLevel() === _shared_configs_levels_config__WEBPACK_IMPORTED_MODULE_6__["Level"].DISPATCHER;
        },
        enumerable: true,
        configurable: true
    });
    TopNavComponent.prototype.showManageCustomersPanel = function () {
        this.router.navigate([_shared_configs_route_config__WEBPACK_IMPORTED_MODULE_4__["RouteConfig"].ROUTE_SEARCH_CUSTOMER]).catch(function (reason) {
            _shared_utils_log_util__WEBPACK_IMPORTED_MODULE_7__["LogUtil"].ConsoleNag("Could not navigate to search customer, reason: " + reason);
        });
    };
    TopNavComponent.prototype.showDefault = function () {
        this.router.navigate([_shared_configs_route_config__WEBPACK_IMPORTED_MODULE_4__["RouteConfig"].ROUTE_DEFAULT]);
    };
    TopNavComponent.prototype.showDispatcherPanel = function () {
        this.router.navigate([_shared_configs_route_config__WEBPACK_IMPORTED_MODULE_4__["RouteConfig"].ROUTE_TRIP]).catch(function (reason) {
            _shared_utils_log_util__WEBPACK_IMPORTED_MODULE_7__["LogUtil"].ConsoleNag("Could not navigate to trip, reason: " + reason);
        });
    };
    TopNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top-nav',
            template: __webpack_require__(/*! ./top-nav.component.html */ "./src/app/layout/topnav/top-nav.component.html"),
            styles: [__webpack_require__(/*! ./top-nav.component.scss */ "./src/app/layout/topnav/top-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_3__["MainService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], TopNavComponent);
    return TopNavComponent;
}());



/***/ })

}]);
//# sourceMappingURL=layout-layout-module.js.map