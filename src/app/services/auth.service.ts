import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }


  singInEmail(user){
    return this.afAuth.signInWithEmailAndPassword( user.email, user.password );
  }


  //Método de cadastro
  singUpEmail(user){
    return this.afAuth.createUserWithEmailAndPassword(user.email, user.password);
  }

  getAuth(){
    return this.afAuth;
  }

  async userLogout() {
    await this.afAuth.signOut();
  }

  userDetails(){
    return this.afAuth.user;
  }
}
