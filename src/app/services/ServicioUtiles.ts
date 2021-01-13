import { Injectable } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';
import { AppVersion } from '@ionic-native/app-version/ngx';
import * as moment from 'moment';
import { environment } from '../../environments/environment';

@Injectable()
export class ServicioUtiles{
    plataforma;
	versionAppName;
    versionNumber;
    infoAplicacion = {
        VersionAppName: '',
        VersionNumnber: '',
        Plataforma: ''
    }
    pais;
    provincia;
    region;
    comuna;
    semana = {
        start: '',
        end: '',
        texto:'',
        semanas: []
    }
    semanas: any = [];
    
    constructor(
        public platform : Platform,
        public appVersion: AppVersion,
        public toast: ToastController,
    ){
      //inicializamos los valores
      moment.locale('es');
  
    }

    isAppOnDevice(): boolean {
		if (window.location.port === '8100') {
			return false;
		} else {
			return true;
		}
    }

    procesarRespuestaMapa(objeto){
        //lo cambiamos a local storage para hacerlo más global
        //y no consultar tantas veces para ocupar la api
        var retorno = false;
         try {
             if (objeto.results && objeto.results[0]) {
                 if (objeto.results[0].address_components && objeto.results[0].address_components.length > 0) {
                     //ahora recorremos los elementos
                     objeto.results[0].address_components.forEach(element => {
                         let busquedaCom = element.types.find(ele => ele == 'administrative_area_level_3');
                         if (busquedaCom) {
                             this.comuna = element.long_name;
                             localStorage.setItem('comuna', this.comuna);
                         }
                         let busquedaReg = element.types.find(ele => ele == 'administrative_area_level_1');
                         if (busquedaReg) {
                             this.region = element.long_name;
                             localStorage.setItem('region', this.region);
                         }
                         let busquedaProv = element.types.find(ele => ele == 'administrative_area_level_2');
                         if (busquedaProv) {
                             this.provincia = element.long_name;
                             localStorage.setItem('provincia', this.provincia);
                         }
                         let busquedaPais = element.types.find(ele => ele == 'country');
                         if (busquedaPais) {
                             this.pais = element.long_name;
                             localStorage.setItem('pais', this.pais);
                         }
                     });
                 }
             }
             retorno = true;
         }
         catch (error) {
             console.log(error);
             
         }
         return retorno;
 
        //console.log(this.pais + ' ' + this.region);
     }

    async presentToast(mensaje, posicion, duracion) {
        const toas = await this.toast.create(
            {
                message: mensaje,
                position: posicion,
                duration: duracion
            }
        );
        toas.present();
    }
    insertarGuion(rut){
        var retorno = '';
        if (rut && rut.length >= 2){
            var index = rut.length -1;
            var parte1 = rut.slice(0, index);
            var parte2 = rut.slice(index, index+ 1);
            retorno = parte1 + '-' + parte2;
        }
        return retorno;
    }
    textoBienvenida(nombre){
        var fecha = moment();
        var hrs = fecha.hour();
        var sms = '';
        if (hrs<12){
            sms = 'Buenos días ' + nombre;
        }
        else if (hrs >= 12 && hrs <= 17){
            sms = 'Buenas tardes ' + nombre;
        }
        else if (hrs >= 17 && hrs <= 24){
            sms = 'Buenas noches ' + nombre;
        }
        return sms;
        
    }
/*     entregaMiColor(){
        var retorno = '#757575';
        if (sessionStorage.getItem('UsuarioAps')) {
            var usuarioAps = JSON.parse(sessionStorage.getItem('UsuarioAps'));
            if (usuarioAps.Color && usuarioAps.Color != '') {
                if (localStorage.getItem('MI_COLOR')) {
                    var colorSession = localStorage.getItem('MI_COLOR');
                    if (colorSession != usuarioAps.Color) {
                        retorno = colorSession;
                    }
                    else{
                        //esto hay que revisarlo
                        //retorno = usuarioAps.Color;
                        retorno = colorSession;
                    }
                }
                else {
                    retorno = usuarioAps.Color;
                }
            }
        }
        return retorno;
    } */
    entregaMiColor(){
        var retorno = '#757575';
        if (localStorage.getItem('MI_COLOR')){
            var miColor = localStorage.getItem('MI_COLOR');
            if (miColor != ''){
                retorno = miColor;
            }
        }
        return retorno;
    }
    cambiaColorLocalStorage(color){
        if (sessionStorage.getItem('UsuarioAps')){
            //si está lo obtenemos
            var usuarioAps = JSON.parse(sessionStorage.getItem('UsuarioAps'));
            if (usuarioAps){
                usuarioAps.Color = color;
            }
            //volvemos a guardar la variable
            sessionStorage.setItem('UsuarioAps', JSON.stringify(usuarioAps));
        }
    }
    entregaParametroUsaAgenda(){
        var usaAgenda = false;
        var usuarioAps = JSON.parse(sessionStorage.getItem('UsuarioAps'));
        if (usuarioAps.ParametrosRayen && usuarioAps.ParametrosRayen.length > 0){
            usuarioAps.ParametrosRayen.forEach(param => {
                if (param.Descripcion == 'DISPONIBILIZA_AGENDA_WEB'){
                    if (param.Valor == '1'){
                        usaAgenda = true;
                    }
                }
            });
        }
        return usaAgenda;
    }
    entregaMenuPages(){
        var usaAgenda = this.entregaParametroUsaAgenda();

        var arrPages = [];
        var pagUno = {
            title: 'Configurar familia',
            visible: true,
            icon: 'settings',
            src: 'familia'
        };
        arrPages.push(pagUno);
        /* comentada  */
/*         var pagDos = {
            title: 'Calendario',
            visible: true,
            segment:'calendario/:this.usuarioAps',
            icon: 'calendar'
        };
        arrPages.push(pagDos); */
        //la dejamos en home por mientras, hasta tener el acepto condiciones
        var pagDos = {
            title: 'Términos y condiciones',
            visible: true,
            src:'home',
            icon: 'link'
        };
        arrPages.push(pagDos);
        //comentada
        /*
        var pagTres = {
            title: 'Familia',
            visible: true,
            icon: 'people',
            src: 'familia'
        };
        arrPages.push(pagTres);
        */
/*         var pagCuatro = {
            title: 'Ajustes',  
            visible: true, 
            icon: 'heart',
            src: 'familia'
        }
        arrPages.push(pagCuatro); */
        //ya no va en el menu
        //verificamos si usa o no agendamiento remoto
/*         if (usaAgenda){
            var pagCinco = {
                title: 'Cupos disponibles',  
                visible: true, 
                icon: 'medkit',
                src: 'pre-tiposatencion'
            }
            arrPages.push(pagCinco);
            var pagSeis = {
                title: 'Mis Citas',  
                visible: true, 
                icon: 'medkit',
                src: 'agenda-disponible'
            }
            arrPages.push(pagSeis);
        } */
        return arrPages;
    }
    entregaMiImagen(){
        var retorno = environment.URL_FOTOS + '/Recursos/logousuario.png';
        if (sessionStorage.getItem('UsuarioAps')) {
            var usuarioAps = JSON.parse(sessionStorage.getItem('UsuarioAps'));
            if (usuarioAps.UrlImagen && usuarioAps.UrlImagen != '') {
                if (localStorage.getItem('MI_IMAGEN')) {
                    var imagen = localStorage.getItem('MI_IMAGEN');
                    if (imagen != usuarioAps.Color) {
                        retorno = environment.URL_FOTOS + imagen;
                    }
                }
                else {
                    retorno = environment.URL_FOTOS + usuarioAps.UrlImagen;
                }
            }
        }
        //mostramos solo si tiene imagen valida
        if (retorno.includes('Recursos/logousuario.png')){
            retorno = '';
        }
        return retorno;
    }
    entregaColor(usuarioAps){
        var retorno = '#757575';
        if (usuarioAps) {
            if (usuarioAps.Color && usuarioAps.Color != '') {
                retorno = usuarioAps.Color;
            }
        }
        return retorno;
    }
    entregaImagen(usuarioAps){
        var retorno = environment.URL_FOTOS + '/Recursos/logousuario.png';
        if (usuarioAps) {
            if (usuarioAps.UrlImagen && usuarioAps.UrlImagen != '') {
                retorno = environment.URL_FOTOS  + usuarioAps.UrlImagen;
            }
        }
        //mostramos solo si tiene imagen valida
        if (retorno.includes('Recursos/logousuario.png')){
            retorno = '';
        }
        if (retorno == environment.URL_FOTOS + 'Recursos/'){
            retorno = '';
        }
        return retorno;
    }
    entregaMiNombre(){
        var retorno = '';
        if (sessionStorage.getItem('UsuarioAps')) {
            var usuarioAps = JSON.parse(sessionStorage.getItem('UsuarioAps'));
            var nombreInicial = usuarioAps.Nombres + ' ' + usuarioAps.ApellidoPaterno;
            if (nombreInicial != '') {
                if (localStorage.getItem('MI_NOMBRE')) {
                    var nombre = localStorage.getItem('MI_NOMBRE');
                    if (nombreInicial != nombre) {
                        retorno = nombre;
                    }
                    else {
                        retorno = nombreInicial;
                    }
                }
                else {
                    retorno = nombreInicial;
                }
            }
        }
        return retorno;
    }
    //metodos para construir semanas y días
    /*
        estructura
        start: '2020-11-10T00:00:00-04:00',
        end:   '2020-11-10T23:59:59-04:00',
        organization: 'codigo deis 199991',
        patient: 'run sin guion 17000904',
        serviceType: '346' //por el momento es el único
        texto: 'Horas disponibles/horas no disponibles',


    */
    construyeSemana(runPaciente, organization, fechaInicio){
        //fecha hora actual
        //en moment el formato T se usa moment().format() sin parametros
        //la fecha actual debe considerar la hora siempre buscar desde el día siguiente
        this.semanas = [];
        var actual = fechaInicio;
        var fechaInicioSemana = new Date(actual.getFullYear(), actual.getMonth(), actual.getDate(), 0,0,0,0 );
        var fechaInicioSemanaH = new Date(actual.getFullYear(), actual.getMonth(), actual.getDate(), 23,59,0,0 );
        var inicioSemanaM = moment(fechaInicioSemana).add(1, 'day');
        console.log(inicioSemanaM.format());

        var inicioSemanaH = moment(fechaInicioSemanaH).add(7, 'day');
        console.log(inicioSemanaH.format());
        
        var diff = inicioSemanaH.diff(inicioSemanaM, 'days');
        console.log(diff);
        this.semana.start = inicioSemanaM.format();
        this.semana.end = inicioSemanaH.format();
        //texto de la semana
        this.semana.texto = 'Semana entre el ' + inicioSemanaM.format('DD-MM-YYYY') + ' hasta ' + inicioSemanaH.format('DD-MM-YYYY');

/*         var entidadCompleta = {
            start: inicioSemanaM.format(),
            end: inicioSemanaH.format(),
        }; */

        if (diff > 0){
            for(var i=0; i<= diff; i++){
                //volvemos a procesar fechas locales
                var fechaInicioLocal = new Date(inicioSemanaM.year(), inicioSemanaM.month(), inicioSemanaM.date(), 0,0,0,0);
                var fechaTerminoLocal = new Date(inicioSemanaM.year(), inicioSemanaM.month(), inicioSemanaM.date(), 23,59,0,0);
                var fechaInicioLocalM = moment(fechaInicioLocal).add(i,'day');
                var fechaTerminoLocalM = moment(fechaTerminoLocal).add(i,'day');
                console.log('inicio local ' + fechaInicioLocalM.format() + ' termino local ' + fechaTerminoLocalM.format());
                var entidad = {
                    start: fechaInicioLocalM.format(),
                    end: fechaTerminoLocalM.format(),
                    organization: organization,
                    patient: runPaciente,
                    serviceType: '346',
                    texto: fechaInicioLocalM.format('DD'),
                    diaStr: fechaInicioLocalM.format('ddd'),
                    selected: false,
                    horaInicio: fechaInicioLocalM.format('HH:mm'),
                    horaTermino: fechaTerminoLocalM.format('HH:mm'),
                }
                if (i==0){
                    entidad.selected = true;
                }
                this.semanas.push(entidad);

                //console.log('vuelta ' + i);
            }
        }
        console.log(this.semanas);
        this.semana.semanas = this.semanas;

    }
    //inserta citas integracion a los eventos ya creados del mes
    /*
    {
    Eventos: [{
        Color: "#FF6666"
        DetalleEventoMes: {
            DescripcionPrincipal: "Examen ginecológico (general) (de rutina)"
            DescripcionSecundaria: "Consulta Morbilidad Gineco-Obstetrica "
            FechaHora: "2020-11-12T14:08:00"
            Lugar: "CESFAM Dr. Hernán Alessandri"
            NombrePaciente: "Pamela Andrea Drouilly Sandoval"
            Subtitulo: "Atención Realizada"
            Titulo: "Atención"
        }
        HoraInicioFin: "14:08"
        Imagen: "diagnostico.png"
        ListaFarmacos: null
        NombrePrincipal: "Examen ginecológico (general) (de rutina)"
        NombreSecundario: "Consulta Morbilidad Gineco-Obstetrica "
    }]
    FechaCompleta: "2020-11-01T00:00:00"
    Id: 1
    Mostrar: false
    NombreDia: "domingo"
    NombreDiaReducido: "dom."
    NumeroDia: 1}
    */
   insertaCitasAEventos(arrCitas, arrEventos, nombrePaciente){
       //SE ME ESTAN DUPLICANDO LAS CITAS
       //OJO REVISAR.
       if (arrEventos && arrEventos.length > 0){
           arrEventos.forEach(evento => {
               arrCitas.forEach(cita => {
                   var fechaEvento = moment(evento.FechaCompleta).format('YYYY-MM-DD');
                   var fechaCita = moment(cita.FechaHoraInicio).format('YYYY-MM-DD');
                   if (fechaEvento == fechaCita){
                       //coinciden hay que agregar eventos
                       var entidadEventoAgregar = {
                           Color: "#FF6666",
                           HoraInicioFin: moment(cita.FechaHoraInicio).format('HH:mm'),
                           Imagen: "cita.png",
                           ListaFarmacos: null,
                           NombrePrincipal: "Consulta Médica Web",
                           NombreSecundario: "Consulta Médica Web",
                           DetalleEventoMes: {
                            DescripcionPrincipal: 'Profesional: ' + cita.NombresMedico + ' ' + cita.ApellidosMedico,
                            DescripcionSecundaria: "Consulta Médica Web",
                            FechaHora: cita.FechaHoraInicio,
                            Lugar: cita.Servicio.Nombre,
                            NombrePaciente: nombrePaciente,
                            Subtitulo: "Próxima Cita",
                            Titulo: "Cita"
                        }
                       };
                       evento.Eventos.push(entidadEventoAgregar);
                   }
               });
           });
       }
   }
   //operacion 
   traduceString(entrada){
       var retorno = '';
       switch (entrada.toUpperCase()){
           //estados de cita
           case 'CANCELLED':
               retorno = 'Cancelada';
               break;
           case 'PROPOSED':
               retorno = 'Propuesta';
               break;
           case 'BOOKED':
               retorno = 'Reservada';
               break;
           case 'CONFIRMED':
               retorno = 'Confirmada';
               break;
           case 'FULLFILED':
               retorno = 'Finalizada';
               break;
           case 'NOSHOW':
               retorno = 'No se presentó';
               break;
           default:
               retorno = '';
               break;
                
       }
       return retorno;
   }
   convertirHoraInt(hora, minuto){
    var retorno = 0;
    var minutoStr = '';
    if (minuto < 10){
        minutoStr = '0' + minuto.toString();
    }
    else{
        minutoStr = minuto.toString();
    }
    retorno = parseInt(hora.toString() + minutoStr);
    return retorno;
   }
}