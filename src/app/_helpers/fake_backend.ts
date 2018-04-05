import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/materialize';
import 'rxjs/add/operator/dematerialize';
import {users} from './fake_database';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

    constructor(
    ) { }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // wrap in delayed observable to simulate server api call
        return Observable.of(null).mergeMap(() => {

            // authenticate
            if (request.url.endsWith('/api/authenticate') && request.method === 'POST') {

                // find if any user matches login credentials
                let filteredUsers = users.filter(user => {
                    return user.username === request.body.username && user.password === request.body.password;
                });

                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    let user = filteredUsers[0];
                    let body = {
                        name: user.name,
                        token: 'fake-jwt-token'
                    };

                    return Observable.of(new HttpResponse({ status: 200, body: body }));
                } else {
                    // else return 400 bad request
                    return Observable.throw('Username or password is incorrect');
                }
            }
            return next.handle(request);
        })

        // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .materialize()
            .delay(500)
            .dematerialize();
    }
}