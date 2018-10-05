import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { SubirPage } from "../../pages/subir/subir";
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  hayMas:boolean = true;
  posts: Observable<any[]>;
  constructor(private modalCtrl: ModalController
              , afDB: AngularFireDatabase) {
      this.posts = afDB.list('post').valueChanges();
  }
 mostrar_modal(){
    let modal = this.modalCtrl.create( SubirPage );
    modal.present();
  }
  doInfinite(infiniteScroll) {  }
  compartir( post:any ){ }
}
