import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NavController, ToastController   } from '@ionic/angular';
//router
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.page.html',
  styleUrls: ['./error.page.scss'],
})
export class ErrorPage implements OnInit {
  
  paginaOrigen: string = '';

  constructor(
    private ref: ChangeDetectorRef,
    private toast: ToastController,
    public geolocation: Geolocation,
    public navCtrl: NavController,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    //Funcion que detecta los cambios de las variables
/*     setInterval(() => {
      this.ref.detectChanges();
    }, 100); */
  }

  ngOnInit() {
  
  }
  reconectar(){
      this.navCtrl.navigateRoot('nuevo-login');

  }

}
