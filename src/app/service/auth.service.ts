import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse } from '../models/authResponse';


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor( private http: HttpClient){}

  login ( username: string, password: string){
    return this.http.post<AuthResponse>('/api/auth/login',{username,password});
  }

  isLogged():boolean{
    const token = localStorage.getItem('acess_token');
    return !!token;
  }


   // Armazena o token no localStorage
   setToken(token: string): void {
    localStorage.setItem('acess_token', token);
  }

  // Obtém o token armazenado
  getToken(): string | null {
    return localStorage.getItem('acess_token');
  }

  // Remove o token no logout
  logout(): void {
    localStorage.removeItem('acess_token');
  }


}
