import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInAnonymously, signOut } from '@angular/fire/auth';
import { Storage, ref, uploadBytes, listAll } from '@angular/fire/storage';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth, private storage: Storage) { }

  register = ({email, password}: any) => {
    return createUserWithEmailAndPassword(this.auth, email, password)
  }

  login = ({email, password}: any) => {
    return signInWithEmailAndPassword(this.auth, email, password)
  }

  loginAnonymous = () => {
    return signInAnonymously(this.auth)
  }

  logout = () => {
    return signOut(this.auth)
  }

  uploadFile = (file : File) => {
    const userRoute = localStorage.getItem("nombreUsuario")
    const fileRef = ref(this.storage, `${userRoute}/${file.name}`)
    return uploadBytes(fileRef, file)
  }

  getFiles = () => {
    const userRoute = localStorage.getItem("nombreUsuario")
    const fileRef = ref(this.storage,`${userRoute}`);
    return listAll(fileRef)
  }
  /*
  deleteFile = () => {
    const userRoute = localStorage.getItem("nombreUsuario")
    const fileRef = ref(this.storage,`${userRoute}`);
    return fileRef.
  }
    */
}
