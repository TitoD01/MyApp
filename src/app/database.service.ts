import { Injectable } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';
import{SQLite, SQLiteObject} from '@awesome-cordova-plugins/sqlite/ngx'
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private sqlite:SQLite,

    private platform:Platform,
    public database:SQLiteObject,
    public toastContoller:ToastController)
    {
      this.crearBD();
    }




  createBD(){
    this.platform.ready().then(()=>{
      this.sqlite.create({
        name:'noticias.db',
        location:'default'
      }).then((db: SQLiteObject)=>{
        this.database = db;
        this.presentToasToast("bd Creada");
        this.crearTablas();
      })
    })
  }

  async presentToast(mensaje:string){
    const toast =await this.toastController.create({
      message:mensaje,
      duration:300
    })
    toast.present();
  }
}
