(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/layout/sidebar/sidebar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showSidebar\" id=\"sidebar\" [ngClass]=\"{'collapsable-sidebar': isSupervisor}\">\n\n    <div  >\n        <mat-accordion>\n            <mat-expansion-panel>\n                <mat-expansion-panel-header [ngClass]=\"{'collapsable': expanded[0]}\"  (click)=\"toggleExpanded(0)\">\n                    <mat-panel-title>\n                        Manage Driver\n                    </mat-panel-title>\n                </mat-expansion-panel-header>\n                <mat-nav-list>\n                    <a mat-list-item  [routerLinkActive]=\"'active'\" [routerLink]=\"['/add-driver']\">\n                        <mat-icon class=\"sidenav-icon\">note_add</mat-icon> {{'Add Driver' | translate}}\n                    </a>\n                </mat-nav-list>\n                <mat-nav-list>\n                    <a mat-list-item  [routerLinkActive]=\"'active'\" [routerLink]=\"['/search-driver']\">\n                        <mat-icon class=\"sidenav-icon\">search</mat-icon> {{ 'Search Driver' | translate}}\n                    </a>\n                </mat-nav-list>\n            </mat-expansion-panel>\n            <mat-expansion-panel>\n                <mat-expansion-panel-header [ngClass]=\"{'collapsable': expanded[1]}\"  (click)=\"toggleExpanded(1)\">\n                    <mat-panel-title>\n                        Manage Dispatcher\n                    </mat-panel-title>\n                </mat-expansion-panel-header>\n                <mat-nav-list>\n                    <a mat-list-item  [routerLinkActive]=\"'active'\" [routerLink]=\"['/add-dispatcher']\">\n                        <mat-icon class=\"sidenav-icon\">note_add</mat-icon> {{'Add Dispatcher'| translate}}\n                    </a>\n                </mat-nav-list>\n                <mat-nav-list>\n                    <a mat-list-item  [routerLinkActive]=\"'active'\" [routerLink]=\"['/search-dispatcher']\">\n                        <mat-icon class=\"sidenav-icon\">search</mat-icon> {{ 'Search Dispatcher' | translate}}\n                    </a>\n                </mat-nav-list>\n            </mat-expansion-panel>\n        </mat-accordion>\n\n\n    </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/layout/sidebar/sidebar.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#sidebar {\n  width: 250px;\n  position: fixed;\n  top: 56px;\n  bottom: 0;\n  background: #fff;\n  box-shadow: 3px 0 6px rgba(0, 0, 0, 0.24);\n  z-index: 999; }\n  #sidebar .mat-nav-list {\n    width: 100%; }\n  #sidebar .mat-nav-list a {\n      display: block; }\n  #sidebar .mat-nav-list a .mat-icon {\n        margin-right: 15px; }\n  .collapsable-sidebar {\n  padding: 0px !important;\n  padding-top: 10px !important; }\n  .collapsable {\n  box-shadow: 3px 0 6px rgba(0, 0, 0, 0.24); }\n  @media screen and (max-width: 992px) {\n  #sidebar {\n    left: -250px; } }\n"

/***/ }),

/***/ "./src/app/layout/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _shared_configs_route_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/configs/route.config */ "./src/app/shared/configs/route.config.ts");
/* harmony import */ var _shared_configs_levels_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/configs/levels.config */ "./src/app/shared/configs/levels.config.ts");
/* harmony import */ var _shared_utils_log_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/utils/log.util */ "./src/app/shared/utils/log.util.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(userService, router, authService) {
        this.userService = userService;
        this.router = router;
        this.authService = authService;
        this.expanded = [false, false, false, false];
        this.showSidebar = true;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (url) {
            if (_this.router.url.indexOf('trip') !== -1) {
                _this.hideSidebar();
            }
            console.log(_this.router.url);
        });
    };
    SidebarComponent.prototype.hideSidebar = function () {
        console.log('hiding sidebar');
        this.showSidebar = false;
    };
    SidebarComponent.prototype.toggleExpanded = function (index) {
        for (var i = 0; i < this.expanded.length; i++) {
            if (i === index) {
                this.expanded[index] = !this.expanded[index];
            }
            else {
                this.expanded[i] = false;
            }
        }
    };
    Object.defineProperty(SidebarComponent.prototype, "managedUserLabel", {
        get: function () {
            return this.userService.getManagedUserLabel();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarComponent.prototype, "add_route", {
        get: function () {
            var managingUserLevel = this.authService.getManagingUserLevel();
            if (managingUserLevel === _shared_configs_levels_config__WEBPACK_IMPORTED_MODULE_3__["Level"].ADMIN) {
                return [_shared_configs_route_config__WEBPACK_IMPORTED_MODULE_2__["RouteConfig"].ROUTE_ADD_SUPERVISOR];
            }
            else if (managingUserLevel === _shared_configs_levels_config__WEBPACK_IMPORTED_MODULE_3__["Level"].DISPATCHER) {
                return [_shared_configs_route_config__WEBPACK_IMPORTED_MODULE_2__["RouteConfig"].ROUTE_ADD_CUSTOMER];
            }
            else {
                _shared_utils_log_util__WEBPACK_IMPORTED_MODULE_4__["LogUtil"].AlertNag('invalid managing user level for add_route');
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarComponent.prototype, "searchRoute", {
        get: function () {
            var managingUserLevel = this.authService.getManagingUserLevel();
            if (managingUserLevel === _shared_configs_levels_config__WEBPACK_IMPORTED_MODULE_3__["Level"].ADMIN) {
                return [_shared_configs_route_config__WEBPACK_IMPORTED_MODULE_2__["RouteConfig"].ROUTE_SEARCH_SUPERVISOR];
            }
            else if (managingUserLevel === _shared_configs_levels_config__WEBPACK_IMPORTED_MODULE_3__["Level"].DISPATCHER) {
                return [_shared_configs_route_config__WEBPACK_IMPORTED_MODULE_2__["RouteConfig"].ROUTE_SEARCH_CUSTOMER];
            }
            else {
                _shared_utils_log_util__WEBPACK_IMPORTED_MODULE_4__["LogUtil"].AlertNag('invalid managing user level for searchRoute');
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarComponent.prototype, "isSupervisorManaging", {
        get: function () {
            return this.authService.getManagingUserLevel() === _shared_configs_levels_config__WEBPACK_IMPORTED_MODULE_3__["Level"].SUPERVISOR;
        },
        enumerable: true,
        configurable: true
    });
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/layout/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/layout/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _shared_services__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map