import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ServicioUtiles } from './ServicioUtiles';
import * as moment from 'moment';

@Injectable()
export class ServicioClaveUnica {

    constructor(
        private http: HTTP,
        private httpClient: HttpClient,
        private utiles: ServicioUtiles,
    ) { }

    //Obtiene el formulario de login
    getLogin() {
        let urlCorta = environment.API_ENDPOINT + 'ClaveUnicaBefore';
        let data = this.httpClient.get(urlCorta, { responseType: 'text' });
        return data;
    }
    //obtiene el formulario de login nativo
    getLoginNative() {
        let urlCorta = environment.API_ENDPOINT + 'ClaveUnicaBefore';
        let data = this.http.get(urlCorta, { }, {});
        return data;
    }

}