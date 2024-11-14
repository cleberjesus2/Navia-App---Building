import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular'; 

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {

  private apiUrl = 'http://localhost/app'; // Atualize para o caminho correto do seu servidor

  constructor(private http: HttpClient) { }

  login(email: string, senha: string): Observable<any> { const headers = new HttpHeaders({'Content-Type': 'application/json'}); return this.http.post(`${this.apiUrl}/login.php`, { email, senha }, { headers });
  }

  register(postData: any): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(`${this.apiUrl}/register.php`, postData, { headers });
  }

  getUserProfile(user_id: string): Observable<any> {
    const body = new URLSearchParams();
    body.set('user_id', user_id);
  
    return this.http.post<any>('http://localhost/get_user.php', body.toString(), {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    });
  }
  
  
  
}
