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
    //let urlCorta = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lon +'&location_type=APPROXIMATE&key=' + this.API_KEY_MAPA();
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
    //let urlCorta = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lon +'&location_type=APPROXIMATE&key=' + this.API_KEY_MAPA();
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
  //registro familia
  postRegistroFamilia(objetoRegistro) {
    //realizar la llamada post a la api
    const body = JSON.stringify(objetoRegistro);

    let url = environment.API_ENDPOINT + 'RegistroAppFamilia';
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
  postRegistroFamiliaNative(objetoRegistro) {
    //realizar la llamada post a la api
    const headers = new Headers;
    const body = objetoRegistro;


    let url = environment.API_ENDPOINT + 'RegistroAppFamilia';
    this.http.setDataSerializer('json');


    return this.http.post(url, body, {});

  }
  getRegistroAppRun(run, idDispositivo){
    let url = environment.API_ENDPOINT + 'RegistroApp?Run=' + run + '&IdDispositivo=' + idDispositivo;
    let data = this.httpClient.get(url,{});
    return data;
  }
  getRegistroAppNativeRun(run, idDispositivo){
    let url = environment.API_ENDPOINT + 'RegistroApp?Run=' + run + '&IdDispositivo=' + idDispositivo;
    let data = this.http.get(url,{}, {});
    return data;
  }
  getRegistroAppCorreoPassword(correo, password){
    let url = environment.API_ENDPOINT + 'RegistroAppFamilia?Correo=' + correo + '&Password=' + password;
    let data = this.httpClient.get(url,{});
    return data;
  }
  getRegistroAppNativeCorreoPassword(correo, password){
    let url = environment.API_ENDPOINT + 'RegistroAppFamilia?Correo=' + correo + '&Password=' + password;
    let data = this.http.get(url,{}, {});
    return data;
  }
  verificaEnrolamiento(run){
    let url = environment.API_ENDPOINT + 'RegistroAppFamilia?Run=' + run;
    let data = this.httpClient.get(url,{});
    return data;
  }
  verificaEnrolamientoNative(run){
    let url = environment.API_ENDPOINT + 'RegistroAppFamilia?Run=' + run;
    let data = this.http.get(url,{}, {});
    return data;
  }
  postRecuperarClave(correo){
    const body = JSON.stringify({ Correo: correo });

    let url = environment.API_ENDPOINT + 'RecuperarClave';
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
  postRecuperarClaveNative(correo){
    //realizar la llamada post nativa
    const headers = new Headers;
    const body =
    {
      "Correo": correo
    };

    let url = environment.API_ENDPOINT + 'RecuperarClave';
    this.http.setDataSerializer('json');


    return this.http.post(url, body, {});
  }
  //validacion clave unica
  getValidacionCU(run, state){
    let url = environment.API_ENDPOINT + 'RegistroClaveUnica?Run=' + run + '&State=' + state;
    let data = this.httpClient.get(url,{});
    return data;
  }
  getValidacionCUNative(run, state){
    let url = environment.API_ENDPOINT + 'RegistroClaveUnica?Run=' + run + '&State=' + state;
    let data = this.http.get(url,{}, {});
    return data;
  }
  postValidacionClaveUnica(run, state){
    const body = JSON.stringify({ Run: run, State: state });

    let url = environment.API_ENDPOINT + 'RegistroClaveUnica';
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
  postValidacionClaveUnicaNative(run, state){
    //realizar la llamada post nativa
    const headers = new Headers;
    const body =
    {
      "Run": run,
      "State": state
    };

    let url = environment.API_ENDPOINT + 'RegistroClaveUnica';
    this.http.setDataSerializer('json');


    return this.http.post(url, body, {});
  }
  postValidarCorreo(correo){
    const body = JSON.stringify({ Correo: correo });

    let url = environment.API_ENDPOINT + 'ValidaCorreo';
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
  postValidarCorreoNative(correo){
    //realizar la llamada post nativa
    const headers = new Headers;
    const body =
    {
      "Correo": correo
    };

    let url = environment.API_ENDPOINT + 'ValidaCorreo';
    this.http.setDataSerializer('json');


    return this.http.post(url, body, {});
  }
  getParametros(){
    let url = environment.API_ENDPOINT + 'ParametrosApp';
    let data = this.httpClient.get(url,{});
    return data;
  }
  getParametrosNative(){
    let url = environment.API_ENDPOINT + 'ParametrosApp';
    let data = this.http.get(url,{}, {});
    return data;
  }

}