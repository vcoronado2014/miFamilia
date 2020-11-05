import { Injectable } from '@angular/core';
//import { Http, Headers } from '@angular/';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ServicioInfoUsuario{
    constructor(
        private http: HTTP,
        private httpClient: HttpClient
      ){ }

      getIndicadorValor(uspId){
        const body = JSON.stringify({ UspId: uspId.toString() });

        let url = environment.API_ENDPOINT + 'IndicadorValor';
        let httpHeaders = new HttpHeaders({
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache'
        });
        httpHeaders.set('Access-Control-Allow-Origin', '*');
        httpHeaders.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
        httpHeaders.set("Access-Control-Allow-Headers", "*");
    
        let options = { headers: httpHeaders };
    
        let data = this.httpClient.post(url, body, options);
        return data;
      }
      getIndicadorValorNative(uspId){
        //realizar la llamada post nativa
        const headers = new Headers;
        const body =
        {
          "UspId": uspId.toString()
        };
    
        let url = environment.API_ENDPOINT + 'IndicadorValor';
        this.http.setDataSerializer('json');
    
    
        return this.http.post(url, body, {});
      }

      getPresion(uspId){
        const body = JSON.stringify({ UspId: uspId.toString() });

        let url = environment.API_ENDPOINT + 'Presion';
        let httpHeaders = new HttpHeaders({
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache'
        });
        httpHeaders.set('Access-Control-Allow-Origin', '*');
        httpHeaders.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
        httpHeaders.set("Access-Control-Allow-Headers", "*");
    
        let options = { headers: httpHeaders };
    
        let data = this.httpClient.post(url, body, options);
        return data;
      }
      getPresionNative(uspId){
        //realizar la llamada post nativa
        const headers = new Headers;
        const body =
        {
          "UspId": uspId.toString()
        };
    
        let url = environment.API_ENDPOINT + 'Presion';
        this.http.setDataSerializer('json');
    
    
        return this.http.post(url, body, {});
      }

      getAlergias(uspId){
        const body = JSON.stringify({ UspId: uspId.toString() });

        let url = environment.API_ENDPOINT + 'Alergia';
        let httpHeaders = new HttpHeaders({
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache'
        });
        httpHeaders.set('Access-Control-Allow-Origin', '*');
        httpHeaders.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
        httpHeaders.set("Access-Control-Allow-Headers", "*");
    
        let options = { headers: httpHeaders };
    
        let data = this.httpClient.post(url, body, options);
        return data;
      }
      getAlergiasNative(uspId){
        //realizar la llamada post nativa
        const headers = new Headers;
        const body =
        {
          "UspId": uspId.toString()
        };
    
        let url = environment.API_ENDPOINT + 'Alergia';
        this.http.setDataSerializer('json');
    
    
        return this.http.post(url, body, {});
      }
    
}