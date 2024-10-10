import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInAnonymously, signOut } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth) { }

  register({email, password}: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({email, password}: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  async logintemp() {
    try {
      const userCredential = await signInAnonymously(this.auth);
      return userCredential.user;
    } catch (error) {
      console.error("Error en la aplicación anónima", error);
      throw error;
    }
  }

  async logout() {
    return signOut(this.auth);
  }
}
