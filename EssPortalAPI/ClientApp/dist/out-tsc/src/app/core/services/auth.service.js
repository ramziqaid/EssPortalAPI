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
import { throwError, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { LoginModel } from '../../views/login/Models/app.LoginModel';
import { Router } from '@angular/router';
//import jwt_decode from 'jwt-decode';
import * as jwt_decode from "jwt-decode";
import { environment } from '../../../environments/environment';
let AuthService = class AuthService {
    // public token: string;
    constructor(_http, _Route) {
        this._http = _http;
        this._Route = _Route;
        this.apiUrl = `${environment.apiUrl}authenticate/login`;
        // User related properties
        this.loginStatus = new BehaviorSubject(this.checkLoginStatus());
        this.UserName = new BehaviorSubject(localStorage.getItem('username'));
        this.UserRole = new BehaviorSubject(localStorage.getItem('userRole'));
    }
    Login(loginmodel) {
        // this._http.get<any>('http://localhost:4800/RamziAPI/api/Default').pipe().subscribe(
        //     res => {
        //         debugger;
        //     }
        // );
        // let headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
        // let body = `UserName=${loginmodel.Username}&Password=${loginmodel.Password}`;
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this._http.post(this.apiUrl, loginmodel, { headers: headers })
            .pipe(tap(data => {
            //console.log(data);
            if (data.token != null) {
                this.loginStatus.next(true);
                this.decodedToken = jwt_decode(data.token);
                this.userToken = data.token;
                localStorage.setItem('loginStatus', '1');
                localStorage.setItem('jwtToken', data.token);
                localStorage.setItem('username', data.username);
                localStorage.setItem('expiration', data.expiration);
                localStorage.setItem('userRole', data.userRole);
                localStorage.setItem('EmployeeId', data.employeeId);
                localStorage.setItem('Email', data.email);
                //localStorage.setItem('UserId', data.nameid);                        
                localStorage.setItem('EmployeeName', data.employeeName);
                this.UserName.next(localStorage.getItem('username'));
                this.UserRole.next(localStorage.getItem('userRole'));
                if (data.usertype == "3") {
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: loginmodel.Username, token: data.token }));
                }
                else if (data.usertype == "2" || data.usertype == "1") {
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('AdminUser', JSON.stringify({ username: loginmodel.Username, token: data.token }));
                }
                // return true to indicate successful login
                return data;
            }
            else {
                // return false to indicate failed login
                return null;
            }
        }), catchError(this.handleError));
    }
    // LogoutUser() {
    //     localStorage.removeItem('currentUser');
    // }
    LogoutUser() {
        // Set Loginstatus to false and delete saved jwt cookie
        this.loginStatus.next(false);
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('userRole');
        localStorage.removeItem('username');
        localStorage.removeItem('expiration');
        localStorage.setItem('loginStatus', '0');
        localStorage.removeItem('currentUser');
        localStorage.removeItem('AdminUser');
        localStorage.removeItem('UserId');
        localStorage.removeItem('EmployeeName');
        console.log("Logged Out Successfully");
        //this._Route.navigate(['/login']); 
    }
    checkLoginStatus() {
        var loginCookie = localStorage.getItem("loginStatus");
        if (loginCookie == "1") {
            if (localStorage.getItem('jwtToken') === null || localStorage.getItem('jwtToken') === undefined) {
                return false;
            }
            // Get and Decode the Token
            const token = localStorage.getItem('jwtToken');
            const decoded = jwt_decode(token);
            // Check if the cookie is valid
            if (decoded.exp === undefined) {
                return false;
            }
            // Get Current Date Time
            const date = new Date(0);
            // Convert EXp Time to UTC
            let tokenExpDate = date.setUTCSeconds(decoded.exp);
            // If Value of Token time greter than 
            if (tokenExpDate.valueOf() > new Date().valueOf()) {
                return true;
            }
            console.log("NEW DATE " + new Date().valueOf());
            //console.log("Token DATE " + tokenExpDate.valueOf());
            return false;
        }
        return false;
    }
    logginUserID() {
        // Get and Decode the Token
        const token = localStorage.getItem('jwtToken');
        if (token === null || token === undefined) {
            return undefined;
        }
        const decoded = jwt_decode(token);
        // Check if the cookie is valid
        if (decoded.nameid === undefined) {
            return undefined;
        }
        return Number(decoded.nameid);
    }
    logginUserName() {
        // Get and Decode the Token
        const token = localStorage.getItem('jwtToken');
        const decoded = jwt_decode(token);
        // Check if the cookie is valid 
        if (decoded.unique_name === undefined) {
            return null;
        }
        return String(decoded.unique_name);
    }
    logginEmployeeId() {
        if (localStorage.getItem('EmployeeId') === null || localStorage.getItem('EmployeeId') === undefined || localStorage.getItem('EmployeeId') == 'undefined') {
            return null;
        }
        return Number(localStorage.getItem('EmployeeId'));
    }
    // get userId() {
    //     const token = localStorage.getItem('jwtToken');
    //     if (token=== null || token === undefined) {
    //         return undefined;
    //     }
    //     const decoded = jwt_decode(token);
    //     // Check if the cookie is valid 
    //     if (decoded.nameid === undefined) {
    //         return undefined;
    //     }
    //     // if (localStorage.getItem('UserId') === null || localStorage.getItem('UserId') === undefined || localStorage.getItem('UserId') == 'undefined') {
    //     //     return null;
    //     // }
    //     console.log(decoded.nameid);
    //     return Number(decoded.nameid);
    // }
    get isLoggesIn() {
        return this.loginStatus.asObservable();
    }
    get isAdminUser() {
        if (localStorage.getItem('AdminUser')) {
            return true;
        }
        else {
            return false;
        }
    }
    get currentUserName() {
        return this.UserName.asObservable();
    }
    get currentUserRole() {
        return this.UserRole.asObservable();
    }
    get currenEmployeeName() {
        if (localStorage.getItem('EmployeeName') === null || localStorage.getItem('EmployeeName') === undefined || localStorage.getItem('EmployeeName') == 'undefined') {
            return null;
        }
        return localStorage.getItem('EmployeeName');
    }
    get currentLang() {
        var dir = localStorage.getItem('dir');
        return (dir === "ltr" ? "1" : "2");
    }
    handleError(error) {
        return throwError(error);
        debugger;
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
    }
    ;
};
AuthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient, Router])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map