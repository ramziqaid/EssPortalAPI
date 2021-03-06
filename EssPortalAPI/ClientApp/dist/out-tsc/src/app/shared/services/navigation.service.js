var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { AuthService } from 'app/core/services/auth.service';
import { EssPortalService } from 'app/core/services/EssPortal.service';
import { BehaviorSubject } from 'rxjs';
let NavigationService = class NavigationService {
    constructor(sharedService, authService) {
        this.sharedService = sharedService;
        this.authService = authService;
        this.iconMenu = [
            {
                name: 'HOME',
                type: 'icon',
                tooltip: 'Home',
                icon: 'home',
                state: 'dashboard/default'
            },
            {
                name: 'PROFILE',
                type: 'icon',
                tooltip: 'Profile',
                icon: 'person',
                state: 'profile/overview'
            },
            {
                name: 'TOUR',
                type: 'icon',
                tooltip: 'Tour',
                icon: 'flight_takeoff',
                state: 'tour'
            },
            {
                type: 'separator'
            }
            //,
            // {
            //   name: 'DASHBOARD',
            //   type: 'dropDown',
            //   tooltip: 'Dashboard',
            //   svgIcon: 'ulb_server',
            //   state: 'dashboard',
            //   sub: [
            //     { name: 'Default', state: 'default' },
            //     {name: 'Learning Management', state: 'learning-management'},
            //     { name: 'Analytics', state: 'analytics' },
            //     { name: 'Analytics Alt', state: 'analytics-alt' },
            //     { name: 'Cryptocurrency', state: 'crypto' },
            //     { name: 'Dark Cards', state: 'dark' }
            //   ]
            // },
            // {
            //   name: 'ORDERS', 
            //   type: 'dropDown',
            //   tooltip: 'Manager',
            //   svgIcon: 'ulb_list_text',
            //   state: 'Orders',
            //   sub: [
            //     { name: 'MY_ORDERS', state: 'MyOrders' },
            //     { name: 'APPROVAL_ORDERS', state: 'ApprovalOrders'} 
            //   ]
            // }, 
            // {
            //   name: 'NEW_ORDER',
            //   type: 'dropDown',
            //   tooltip: 'Manager',
            //   icon: 'blur_on',
            //   state: 'Orders',
            //   sub: [
            //     { name: 'AMENDMENT', state: 'NewOrders/Amendment' }, 
            //   ]
            // }
            //,
            // {
            //   name: 'Manager',
            //   type: 'dropDown',
            //   tooltip: 'Manager',
            //   icon: 'blur_on',
            //   state: 'AdminArea',
            //   sub: [
            //     { name: 'Setting', state: 'Setting' },
            //     { name: 'Register', state: 'User/Add' },
            //     { name: 'ShowUser', state: 'User/AllUser' },
            //     { name: 'Change Password', state: 'ChangePassword' },
            //     { name: 'Assign/Remove Role', state: 'Assign/Role' },
            //     { name: 'Permission', state: 'Permission' }
            //   ]
            // }
            // ,
            // {
            //   name: 'CRUD Table',
            //   type: 'link',
            //   tooltip: 'CRUD Table',
            //   svgIcon: 'ulb_list_text',
            //   state: 'cruds/ngx-table'
            // }//,
            // {
            //   name: 'ECOMMERCE',
            //   type: 'dropDown',
            //   tooltip: 'Shop',
            //   icon: 'shopping_cart',
            //   state: 'shop',
            //   sub: [
            //     { name: 'PRODUCTS', state: '' },
            //     { name: 'PRODUCT DETAILS', state: 'products/5a9ae2106f155194e5c95d67' },
            //     { name: 'CART', state: 'cart' },
            //     { name: 'CHECKOUT', state: 'checkout' }
            //   ]
            // }, 
            // {
            //   name: 'INBOX',
            //   type: 'link',
            //   tooltip: 'Inbox',
            //   icon: 'inbox',
            //   state: 'inbox',
            //   badges: [{ color: 'primary', value: '4' }]
            // },
            // {
            //   name: 'Invoice',
            //   type: 'link',
            //   icon: 'receipt',
            //   state: 'invoice/list'
            // },
            // {
            //   name: 'CHAT',
            //   type: 'link',
            //   tooltip: 'Chat',
            //   icon: 'chat',
            //   state: 'chat',
            //   badges: [{ color: 'warn', value: '1' }]
            // },
            // {
            //   name: 'CALENDAR',
            //   type: 'link',
            //   tooltip: 'Calendar',
            //   icon: 'date_range',
            //   state: 'calendar'
            // },
            // {
            //   name: 'Todo',
            //   type: 'link',
            //   tooltip: 'Todo',
            //   icon: 'center_focus_strong',
            //   state: 'todo/list'
            // },
            // {
            //   name: 'DIALOGS',
            //   type: 'dropDown',
            //   tooltip: 'Dialogs',
            //   icon: 'filter_none',
            //   state: 'dialogs',
            //   sub: [
            //     { name: 'CONFIRM', state: 'confirm' },
            //     { name: 'LOADER', state: 'loader' }
            //   ]
            // },
            // {
            //   name: 'Material Kits',
            //   type: 'dropDown',
            //   tooltip: 'Material',
            //   icon: 'favorite',
            //   state: 'material',
            //   badges: [{ color: 'primary', value: '60+' }],
            //   sub: [
            //     {
            //       name: 'Form controls',
            //       type: 'dropDown',
            //       sub: [
            //         { name: 'Autocomplete', state: 'autocomplete' },
            //         { name: 'Checkbox', state: 'checkbox' },
            //         { name: 'Datepicker', state: 'datepicker' },
            //         { name: 'Form Field', state: 'form-field' },
            //         { name: 'Input Field', state: 'input-field' },
            //         { name: 'Radio Button', state: 'radio-button' },
            //         { name: 'Select', state: 'select' },
            //         { name: 'Slider', state: 'slider' },
            //         { name: 'Slider Toggle', state: 'slider-toggle' }
            //       ]
            //     },
            //     {
            //       name: 'Navigation',
            //       type: 'dropDown',
            //       sub: [
            //         { name: 'Menu', state: 'menu' },
            //         { name: 'Sidenav', state: 'sidenav' },
            //         { name: 'Toolbar', state: 'toolbar' }
            //       ]
            //     },
            //     {
            //       name: 'Layout',
            //       type: 'dropDown',
            //       sub: [
            //         { name: 'Card', state: 'card' },
            //         { name: 'Divider', state: 'divider' },
            //         { name: 'Expansion Panel', state: 'expansion-panel' },
            //         { name: 'Grid', state: 'grid' },
            //         { name: 'List', state: 'list' },
            //         { name: 'Stepper', state: 'stepper' },
            //         { name: 'Tab', state: 'tab-group' },
            //         { name: 'Tree', state: 'tree' }
            //       ]
            //     },
            //     {
            //       name: 'Buttons & Indicators',
            //       type: 'dropDown',
            //       sub: [
            //         { name: 'BUTTONS', state: 'buttons' },
            //         { name: 'Button Toggle', state: 'button-toggle' },
            //         { name: 'Badge', state: 'badge' },
            //         { name: 'Chips', state: 'chips' },
            //         { name: 'Icons', state: 'icons' },
            //         { name: 'Progress Spinner', state: 'progress-spinner' },
            //         { name: 'Progress Bar', state: 'progress-bar' },
            //         { name: 'Ripples', state: 'ripples' }
            //       ]
            //     },
            //     {
            //       name: 'Popups & Modals',
            //       type: 'dropDown',
            //       sub: [
            //         { name: 'Tooltip', state: 'tooltip' },
            //         { name: 'Bottom Sheet', state: 'bottom-sheet' },
            //         { name: 'Dialog', state: 'dialog' },
            //         { name: 'Snackbar', state: 'snackbar' }
            //       ]
            //     },
            //     {
            //       name: 'Data Table',
            //       type: 'dropDown',
            //       sub: [
            //         { name: 'paginator', state: 'paginator' },
            //         { name: 'Sort Header', state: 'sort-header' },
            //         { name: 'Table', state: 'table' }
            //       ]
            //     },
            //     { name: 'Buttons Loading', state: 'loading-buttons' }
            //   ]
            // },
            // {
            //   name: 'FORMS',
            //   type: 'dropDown',
            //   tooltip: 'Forms',
            //   icon: 'description',
            //   state: 'forms',
            //   sub: [
            //     { name: 'BASIC', state: 'basic' },
            //     { name: 'EDITOR', state: 'editor' },
            //     { name: 'UPLOAD', state: 'upload' },
            //     { name: 'WIZARD', state: 'wizard' }
            //   ]
            // },
            // {
            //   name: 'TABLES',
            //   type: 'dropDown',
            //   tooltip: 'Tables',
            //   icon: 'format_line_spacing',
            //   state: 'tables',
            //   sub: [
            //     { name: 'FULLSCREEN', state: 'fullscreen' },
            //     { name: 'PAGING', state: 'paging' },
            //     { name: 'FILTER', state: 'filter' },
            //     { name: 'Material Table', state: 'mat-table' }
            //   ]
            // }
            // ,
            // {
            //   name: 'PROFILE',
            //   type: 'dropDown',
            //   tooltip: 'Profile',
            //   icon: 'person',
            //   state: 'profile',
            //   badges: [{ color: 'primary', value: '2' }],
            //   sub: [
            //     { name: 'OVERVIEW', state: 'overview' },
            //     { name: 'SETTINGS', state: 'settings' },
            //     { name: 'BLANK', state: 'blank' }
            //   ]
            // }
            // ,
            // {
            //   name: 'TOUR',
            //   type: 'link',
            //   tooltip: 'Tour',
            //   icon: 'flight_takeoff',
            //   state: 'tour'
            // },
            // {
            //   name: 'MAP',
            //   type: 'link',
            //   tooltip: 'Map',
            //   icon: 'add_location',
            //   state: 'map'
            // },
            // {
            //   name: 'CHARTS',
            //   type: 'dropDown',
            //   tooltip: 'Charts',
            //   icon: 'show_chart',
            //   sub: [
            //     {
            //       name: 'eChart',
            //       type: 'dropDown',
            //       state: 'chart',
            //       sub: [
            //         { name: 'Pie', state: 'pie' },
            //         { name: 'Bar', state: 'bar' },
            //         { name: 'Radar', state: 'radar' },
            //         // { name: "Heatmap", state: "heatmap" },
            //       ]
            //     },
            //     { name: 'Chart js', state: 'charts' }
            //   ]
            // },
            // // {
            // //   name: "CHARTS",
            // //   type: "link",
            // //   tooltip: "Charts",
            // //   icon: "show_chart",
            // //   state: "charts"
            // // },
            // {
            //   name: 'DND',
            //   type: 'link',
            //   tooltip: 'Drag and Drop',
            //   icon: 'adjust',
            //   state: 'dragndrop'
            // },
            // {
            //   name: 'Page Layouts',
            //   type: 'dropDown',
            //   icon: 'view_carousel',
            //   state: 'page-layouts',
            //   sub: [
            //     { name: 'Left sidebar card', state: 'left-sidebar-card' },
            //     { name: 'Right sidebar card', state: 'right-sidebar-card' },
            //     { name: 'Full width card', state: 'full-width-card' },
            //     { name: 'Full width card tab', state: 'full-width-card-tab' },
            //     { name: 'Full width plain', state: 'full-width-plain' },
            //     { name: 'Left sidebar plain', state: 'left-sidebar-plain' }
            //   ]
            // },
            ,
            {
                name: 'SESSIONS',
                type: 'dropDown',
                tooltip: 'Pages',
                icon: 'view_carousel',
                state: 'sessions',
                sub: [
                    { name: 'Signin 2', state: 'login' },
                    { name: 'FORGOT', state: 'forgot-password' },
                ]
            }
            // {
            //   name: 'Utilities',
            //   type: 'dropDown',
            //   icon: 'format_list_bulleted',
            //   state: 'utilities',
            //   sub: [
            //     { name: 'Border', state: 'border' },
            //     { name: 'Color', state: 'color' },
            //     { name: 'Spacing', state: 'spacing' },
            //     { name: 'Typography', state: 'typography' }
            //   ]
            // },
            // {
            //   name: 'OTHERS',
            //   type: 'dropDown',
            //   tooltip: 'Others',
            //   icon: 'blur_on',
            //   state: 'others',
            //   sub: [
            //     { name: 'GALLERY', state: 'gallery' },
            //     { name: 'PRICINGS', state: 'pricing' },
            //     { name: 'USERS', state: 'users' },
            //     { name: 'BLANK', state: 'blank' }
            //   ]
            // }, 
            // {
            //   name: 'MATICONS',
            //   type: 'link',
            //   tooltip: 'Material Icons',
            //   icon: 'store',
            //   state: 'icons'
            // },
            // {
            //   name: 'Multi Level',
            //   type: 'dropDown',
            //   tooltip: 'Multi Level',
            //   icon: 'format_align_center',
            //   state: '',
            //   sub: [
            //     {
            //       name: 'Level Two',
            //       type: 'dropDown',
            //       state: 'fake-1',
            //       sub: [
            //         { name: 'Level Three', state: 'fake-2' },
            //         { name: 'Level Three', state: 'fake-3' }
            //       ]
            //     },
            //     { name: 'Level Two', state: 'fake-4' },
            //     { name: 'Level Two', state: 'fake-5' }
            //   ]
            // },
            // {
            //   name: 'DOC',
            //   type: 'extLink',
            //   tooltip: 'Documentation',
            //   icon: 'library_books',
            //   state: 'http://demos.ui-lib.com/egret-doc/'
            // }
        ];
        this.separatorMenu = [
            {
                type: 'separator',
                name: 'Custom components'
            },
            {
                name: 'DASHBOARD',
                type: 'dropDown',
                tooltip: 'Dashboard',
                svgIcon: 'ulb_server',
                state: 'dashboard',
                sub: [
                    { name: 'Default', state: 'default' },
                    { name: 'Learning Management', state: 'learning-management' },
                    { name: 'Analytics', state: 'analytics' },
                    { name: 'Analytics Alt', state: 'analytics-alt' },
                    { name: 'Cryptocurrency', state: 'crypto' },
                    { name: 'Dark Cards', state: 'dark' }
                ]
            },
            {
                name: 'INBOX',
                type: 'link',
                tooltip: 'Inbox',
                icon: 'inbox',
                state: 'inbox'
            },
            {
                name: 'CHAT',
                type: 'link',
                tooltip: 'Chat',
                icon: 'chat',
                state: 'chat'
            },
            {
                name: 'CRUD Table',
                type: 'link',
                tooltip: 'CRUD Table',
                icon: 'format_list_bulleted',
                state: 'cruds/ngx-table'
            },
            {
                name: 'DIALOGS',
                type: 'dropDown',
                tooltip: 'Dialogs',
                icon: 'filter_none',
                state: 'dialogs',
                sub: [
                    { name: 'CONFIRM', state: 'confirm' },
                    { name: 'LOADER', state: 'loader' }
                ]
            },
            {
                name: 'PROFILE',
                type: 'dropDown',
                tooltip: 'Profile',
                icon: 'person',
                state: 'profile',
                sub: [
                    { name: 'OVERVIEW', state: 'overview' },
                    { name: 'SETTINGS', state: 'settings' },
                    { name: 'BLANK', state: 'blank' }
                ]
            },
            {
                name: 'TOUR',
                type: 'link',
                tooltip: 'Tour',
                icon: 'flight_takeoff',
                state: 'tour'
            },
            {
                type: 'separator',
                name: 'Integrated components'
            },
            {
                name: 'CALENDAR',
                type: 'link',
                tooltip: 'Calendar',
                icon: 'date_range',
                state: 'calendar'
            },
            {
                name: 'MATERIAL',
                type: 'dropDown',
                tooltip: 'Material',
                icon: 'favorite',
                state: 'material',
                sub: [
                    { name: 'BUTTONS', state: 'buttons' },
                    { name: 'Button Toggle', state: 'button-toggle' },
                    { name: 'Buttons Loading', state: 'loading-buttons' },
                    { name: 'CARDS', state: 'cards' },
                    { name: 'GRIDS', state: 'grids' },
                    { name: 'LISTS', state: 'lists' },
                    { name: 'MENU', state: 'menu' },
                    { name: 'TABS', state: 'tabs' },
                    { name: 'SELECT', state: 'select' },
                    { name: 'RADIO', state: 'radio' },
                    { name: 'AUTOCOMPLETE', state: 'autocomplete' },
                    { name: 'SLIDER', state: 'slider' },
                    { name: 'PROGRESS', state: 'progress' },
                    { name: 'SNACKBAR', state: 'snackbar' }
                ]
            },
            {
                name: 'FORMS',
                type: 'dropDown',
                tooltip: 'Forms',
                icon: 'description',
                state: 'forms',
                sub: [
                    { name: 'BASIC', state: 'basic' },
                    { name: 'EDITOR', state: 'editor' },
                    { name: 'UPLOAD', state: 'upload' },
                    { name: 'WIZARD', state: 'wizard' }
                ]
            },
            {
                name: 'TABLES',
                type: 'dropDown',
                tooltip: 'Tables',
                icon: 'format_line_spacing',
                state: 'tables',
                sub: [
                    { name: 'FULLSCREEN', state: 'fullscreen' },
                    { name: 'PAGING', state: 'paging' },
                    { name: 'FILTER', state: 'filter' }
                ]
            },
            {
                name: 'MAP',
                type: 'link',
                tooltip: 'Map',
                icon: 'add_location',
                state: 'map'
            },
            {
                name: 'CHARTS',
                type: 'link',
                tooltip: 'Charts',
                icon: 'show_chart',
                state: 'charts'
            },
            {
                name: 'DND',
                type: 'link',
                tooltip: 'Drag and Drop',
                icon: 'adjust',
                state: 'dragndrop'
            },
            {
                type: 'separator',
                name: 'Other components'
            },
            {
                name: 'SESSIONS',
                type: 'dropDown',
                tooltip: 'Pages',
                icon: 'view_carousel',
                state: 'sessions',
                sub: [
                    { name: 'SIGNUP', state: 'signup' },
                    { name: 'SIGNIN', state: 'signin' },
                    { name: 'FORGOT', state: 'forgot-password' },
                    { name: 'LOCKSCREEN', state: 'lockscreen' },
                    { name: 'NOTFOUND', state: '404' },
                    { name: 'ERROR', state: 'error' }
                ]
            },
            {
                name: 'OTHERS',
                type: 'dropDown',
                tooltip: 'Others',
                icon: 'blur_on',
                state: 'others',
                sub: [
                    { name: 'GALLERY', state: 'gallery' },
                    { name: 'PRICINGS', state: 'pricing' },
                    { name: 'USERS', state: 'users' },
                    { name: 'BLANK', state: 'blank' }
                ]
            },
            {
                name: 'MATICONS',
                type: 'link',
                tooltip: 'Material Icons',
                icon: 'store',
                state: 'icons'
            },
            {
                name: 'DOC',
                type: 'extLink',
                tooltip: 'Documentation',
                icon: 'library_books',
                state: 'http://demos.ui-lib.com/egret-doc/'
            }
        ];
        this.plainMenu = [
            {
                name: 'DASHBOARD',
                type: 'dropDown',
                tooltip: 'Dashboard',
                svgIcon: 'ulb_server',
                state: 'dashboard',
                sub: [
                    { name: 'Default', state: 'default' },
                    { name: 'Learning Management', state: 'learning-management' },
                    { name: 'Analytics', state: 'analytics' },
                    { name: 'Analytics Alt', state: 'analytics-alt' },
                    { name: 'Cryptocurrency', state: 'crypto' },
                    { name: 'Dark Cards', state: 'dark' }
                ]
            },
            {
                name: 'INBOX',
                type: 'link',
                tooltip: 'Inbox',
                icon: 'inbox',
                state: 'inbox'
            },
            {
                name: 'CHAT',
                type: 'link',
                tooltip: 'Chat',
                icon: 'chat',
                state: 'chat'
            },
            {
                name: 'CRUD Table',
                type: 'link',
                tooltip: 'CRUD Table',
                icon: 'format_list_bulleted',
                state: 'cruds/ngx-table'
            },
            {
                name: 'CALENDAR',
                type: 'link',
                tooltip: 'Calendar',
                icon: 'date_range',
                state: 'calendar'
            },
            {
                name: 'DIALOGS',
                type: 'dropDown',
                tooltip: 'Dialogs',
                icon: 'filter_none',
                state: 'dialogs',
                sub: [
                    { name: 'CONFIRM', state: 'confirm' },
                    { name: 'LOADER', state: 'loader' }
                ]
            },
            {
                name: 'MATERIAL',
                type: 'dropDown',
                icon: 'favorite',
                state: 'component',
                sub: [
                    { name: 'BUTTONS', state: 'buttons' },
                    { name: 'Button Toggle', state: 'button-toggle' },
                    { name: 'Buttons Loading', state: 'loading-buttons' },
                    { name: 'CARDS', state: 'cards' },
                    { name: 'GRIDS', state: 'grids' },
                    { name: 'LISTS', state: 'lists' },
                    { name: 'MENU', state: 'menu' },
                    { name: 'TABS', state: 'tabs' },
                    { name: 'SELECT', state: 'select' },
                    { name: 'RADIO', state: 'radio' },
                    { name: 'AUTOCOMPLETE', state: 'autocomplete' },
                    { name: 'SLIDER', state: 'slider' },
                    { name: 'PROGRESS', state: 'progress' },
                    { name: 'SNACKBAR', state: 'snackbar' }
                ]
            },
            {
                name: 'FORMS',
                type: 'dropDown',
                tooltip: 'Forms',
                icon: 'description',
                state: 'forms',
                sub: [
                    { name: 'BASIC', state: 'basic' },
                    { name: 'EDITOR', state: 'editor' },
                    { name: 'UPLOAD', state: 'upload' },
                    { name: 'WIZARD', state: 'wizard' }
                ]
            },
            {
                name: 'TABLES',
                type: 'dropDown',
                tooltip: 'Tables',
                icon: 'format_line_spacing',
                state: 'tables',
                sub: [
                    { name: 'FULLSCREEN', state: 'fullscreen' },
                    { name: 'PAGING', state: 'paging' },
                    { name: 'FILTER', state: 'filter' }
                ]
            },
            {
                name: 'PROFILE',
                type: 'dropDown',
                tooltip: 'Profile',
                icon: 'person',
                state: 'profile',
                sub: [
                    { name: 'OVERVIEW', state: 'overview' },
                    { name: 'SETTINGS', state: 'settings' },
                    { name: 'BLANK', state: 'blank' }
                ]
            },
            {
                name: 'TOUR',
                type: 'link',
                tooltip: 'Tour',
                icon: 'flight_takeoff',
                state: 'tour'
            },
            {
                name: 'MAP',
                type: 'link',
                tooltip: 'Map',
                icon: 'add_location',
                state: 'map'
            },
            {
                name: 'CHARTS',
                type: 'link',
                tooltip: 'Charts',
                icon: 'show_chart',
                state: 'charts'
            },
            {
                name: 'DND',
                type: 'link',
                tooltip: 'Drag and Drop',
                icon: 'adjust',
                state: 'dragndrop'
            },
            {
                name: 'SESSIONS',
                type: 'dropDown',
                tooltip: 'Pages',
                icon: 'view_carousel',
                state: 'sessions',
                sub: [
                    { name: 'SIGNUP', state: 'signup' },
                    { name: 'SIGNIN', state: 'signin' },
                    { name: 'FORGOT', state: 'forgot-password' },
                    { name: 'LOCKSCREEN', state: 'lockscreen' },
                    { name: 'NOTFOUND', state: '404' },
                    { name: 'ERROR', state: 'error' }
                ]
            },
            {
                name: 'OTHERS',
                type: 'dropDown',
                tooltip: 'Others',
                icon: 'blur_on',
                state: 'others',
                sub: [
                    { name: 'GALLERY', state: 'gallery' },
                    { name: 'PRICINGS', state: 'pricing' },
                    { name: 'USERS', state: 'users' },
                    { name: 'BLANK', state: 'blank' }
                ]
            },
            {
                name: 'MATICONS',
                type: 'link',
                tooltip: 'Material Icons',
                icon: 'store',
                state: 'icons'
            },
            {
                name: 'DOC',
                type: 'extLink',
                tooltip: 'Documentation',
                icon: 'library_books',
                state: 'http://demos.ui-lib.com/egret-doc/'
            }
        ];
        // Icon menu TITLE at the very top of navigation.
        // This title will appear if any icon type item is present in menu.
        this.iconTypeMenuTitle = 'FREQUENTLYACCESSED';
        // sets iconMenu as default; 
        this.menuItems = new BehaviorSubject(this.iconMenu);
        // navigation component has subscribed to this Observable
        this.menuItems$ = this.menuItems.asObservable();
        if (this.authService.logginUserID() != undefined)
            this.generateMenu();
    }
    clearMenu() {
        this.iconMenu = [];
    }
    generateMenu() {
        this.iconMenu = [
            {
                name: 'HOME',
                type: 'icon',
                tooltip: 'Home',
                icon: 'home',
                state: 'dashboard/default'
            },
            {
                name: 'PROFILE',
                type: 'icon',
                tooltip: 'Profile',
                icon: 'person',
                state: 'profile/overview'
            },
            {
                name: 'TOUR',
                type: 'icon',
                tooltip: 'Tour',
                icon: 'flight_takeoff',
                state: 'tour'
            },
            {
                type: 'separator'
            },
            {
                name: 'SESSIONS',
                type: 'dropDown',
                tooltip: 'Pages',
                icon: 'view_carousel',
                state: 'sessions',
                sub: [
                    { name: 'Signin 2', state: 'login' },
                    { name: 'FORGOT', state: 'forgot-password' },
                ]
            }
        ];
        var vm = {
            userID: this.authService.logginUserID(),
            operationID: -1,
            operationCode: null
        };
        this.sharedService.getPermissionInfo(vm).subscribe(result => {
            var items = result;
            for (let oper of items.filter(el => el.ParentID == undefined)) {
                var parent = {};
                parent.operationID = oper.OperationID;
                parent.operationCode = oper.OperationCode;
                parent.name = oper.Name;
                parent.state = oper.RoutUrl;
                if (oper.ParentID == undefined)
                    parent.type = "dropDown";
                parent.tooltip = oper.OperationNameEn;
                parent.svgIcon = 'ulb_list_text';
                parent.sub = [];
                var sub = items.filter(el => el.ParentID === oper.OperationID);
                for (let operSub of sub) {
                    var parentSub = {};
                    parentSub.operationID = operSub.OperationID;
                    parentSub.operationCode = operSub.OperationCode;
                    parentSub.name = operSub.Name;
                    parentSub.state = operSub.RoutUrl;
                    // parent.type = "dropDown"; 
                    parentSub.svgIcon = 'library_books';
                    parent.sub.push(parentSub);
                }
                this.iconMenu.push(parent);
            }
            this.menuItems.next(this.iconMenu);
        });
    }
    // Customizer component uses this method to change menu.
    // You can remove this method and customizer component.
    // Or you can customize this method to supply different menu for
    // different user type.
    publishNavigationChange(menuType) {
        switch (menuType) {
            case 'separator-menu':
                this.menuItems.next(this.separatorMenu);
                break;
            case 'icon-menu':
                this.menuItems.next(this.iconMenu);
                break;
            default:
                this.menuItems.next(this.plainMenu);
        }
    }
};
NavigationService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [EssPortalService,
        AuthService])
], NavigationService);
export { NavigationService };
//# sourceMappingURL=navigation.service.js.map