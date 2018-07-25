import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  inputtext:string;
  //key:string = "username";
  finger:boolean;

  constructor(private alertCtrl: AlertController, public navCtrl: NavController, private storage: Storage) {
      // get a key/value pair
      this.storage.get('FINGER').then((val) => {
        if( val!=null ){
          this.finger = Boolean(val);
        }
      });
  }

  /*saveData(){
    // set a key/value
    this.storage.set(this.key, this.inputtext);
  }
  loadData() {
    // get a key/value pair
    this.storage.get(this.key).then((val) => {
    console.log('Your username is', val);
    });
  }*/

  saveState()
  {     
     if(this.finger)
        this.presentAlert('Todas las personas con huella configurada en éste dispositivo podrán acceder a la apliación mediante la autenticación con huella.');
     
     // set a key/value
     this.storage.set('FINGER', this.finger);
  }

  //Alert
  presentAlert(msg) {
    let alert = this.alertCtrl.create({
      title: 'FingerPrint',
      subTitle: 'Msg: '+msg,
      buttons: ['OK']
    });
    alert.present();
  }

}
