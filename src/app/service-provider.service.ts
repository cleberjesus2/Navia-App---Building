// service-provider.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {
  private apiUrl = 'http://localhost/app'; // Atualize para o caminho correto do seu servidor local

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login.php`, { email, password });
  }

  register(nome: string, email: string, senha: string): Observable<any> {
  return this.http.post(`${this.apiUrl}/register.php`, { nome, email, senha });
}

}
