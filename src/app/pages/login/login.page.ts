import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../services/login.service";
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  /*
    loginService: Servicio de login que realiza el POST con los datos del
    usuario para iniciar la sesión.
    router: Para realizar un navigate a las distintas paginas de la app.
    userService: Servicio que funciona para mantener la sesión del usuario
    abierta.
  */
  constructor( private loginService: LoginService,
               private router: Router,
               private alertCtrl: AlertController ) { }

  ngOnInit() { }

  /*
    Método login que recibe dos parametros, el usuario y contraseña obtenidos
    en el input del HTML (login.page.html) para realizar el Subscribe al servicio 
    de login para obtener los datos de la persona que va a iniciar sesión.
    Dentro del switch se agarra el nombre del rol y se hace un switch para, 
    según el nombre que llega, construir los tabs.
  */
  login( username: string, password: string ) {
    this.loginService.login( username, password ).subscribe(( res: any ) => {

      switch( res.user.role.name ) {
        case "ENFERMERIA":
          this.router.navigateByUrl( '/phase' );
          break;
        // Anexar aquí los posibles casos existentes
        default:
          break;
      }

    }, err => {
      this.presentAlert( err.error.err.message );
    });
  }

  /* 

  */
  async presentAlert( message: string ) {
    const alert = await this.alertCtrl.create({
      header: 'Error.',
      subHeader: 'No pudo iniciar sesión.',
      message,
      buttons: [
        {
            text: 'Aceptar',
            handler: (blah) => {
              console.log('Boton Aceptar');
          }
        }
      ]
    });
    await alert.present();
  }
}