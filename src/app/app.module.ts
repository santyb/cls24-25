import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SubirPage } from "../pages/subir/subir";
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { PipesModule} from '../pipes/pipes.module';
import { Camera } from '@ionic-native/camera';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

export const firebaseConfig = {
  apiKey: "AIzaSyDcmR-QSLioa6A1h00tJD1lQSUfQcmoL2E",
  authDomain: "sampleionicfs.firebaseapp.com",
  databaseURL: "https://sampleionicfs.firebaseio.com",
  projectId: "sampleionicfs",
  storageBucket: "sampleionicfs.appspot.com",
  messagingSenderId: "1036837912134"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SubirPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SubirPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    Camera,    
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
  
})
export class AppModule {}

