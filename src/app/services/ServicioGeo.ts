import { Injectable } from '@angular/core';
//import { Http, Headers } from '@angular/';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ServicioGeo{
  constructor(
    private http: HTTP,
    private httpClient: HttpClient
  ){


  }
  getMapaNative(lat, lon){
    //ojo, esta llamada que indica 'ROOFTOP' y result_type=street_address retorna un punto exacto
    //para hacer que retorne un punto aproximado debe idicar solo location_type=APROXIMATE
    //Ver la siguiente url de la documentación https://developers.google.com/maps/documentation/geocoding/intro
    //let urlCorta = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lon +'&location_type=ROOFTOP&result_type=street_address&key=' + environment.API_KEY_MAPA;
    let urlCorta = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lon +'&location_type=APPROXIMATE&key=' + environment.API_KEY_MAPA;
    let data = this.http.get(urlCorta, {}, {});
    return data;
  }
  getMapaWeb(lat, lon){
    //https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY
    //&location_type=ROOFTOP&result_type=street_address
    //let url corta
    //let urlCorta = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lon +'&location_type=ROOFTOP&result_type=street_address&key=' + environment.API_KEY_MAPA;
    //let url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lon +'&key=' + environment.API_KEY_MAPA;
    let urlCorta = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lon +'&location_type=APPROXIMATE&key=' + environment.API_KEY_MAPA;
    let data = this.httpClient.get(urlCorta,{});
    return data;
  }
  getRegistroApp(idDispositivo){
    let url = environment.API_ENDPOINT + 'RegistroApp?IdDispositivo=' + idDispositivo;
    let data = this.httpClient.get(url,{});
    return data;
  }
  getRegistroAppNative(idDispositivo){
    let url = environment.API_ENDPOINT + 'RegistroApp?IdDispositivo=' + idDispositivo;
    let data = this.http.get(url,{}, {});
    return data;
  }
  //ya viene en formato objeto
  postRegistro(objetoRegistro) {
    //realizar la llamada post a la api
    const body = JSON.stringify(objetoRegistro);

    let url = environment.API_ENDPOINT + 'RegistroApp';
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
  postRegistroNative(objetoRegistro) {
    //realizar la llamada post a la api
    const headers = new Headers;
    const body = objetoRegistro;


    let url = environment.API_ENDPOINT + 'RegistroApp';
    this.http.setDataSerializer('json');


    return this.http.post(url, body, {});

  }    
}