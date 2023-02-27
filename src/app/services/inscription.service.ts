import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Inscription } from '../model/inscription';
import { AuthenticationService } from './authentication.service';




@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
 host="http://localhost:8080/api";
  public dataForm !: FormGroup;
  public jwt: string;
  constructor(private http:HttpClient,private auth: AuthenticationService) { }

 // createData(Inscription :Inscription): Observable<Object> {
    //const headers = { 'content-type': 'application/json'}  
    //const body=Text.stringify(Client);
   // return this.http.post<Inscription>(`${this.baseUrl}`,Inscription) /*.pipe(
  /*    catchError((err) => {
        console.error(Client);
        throw err;
      }))

         const headers = new HttpHeaders({ 'authorization': 'Bearer' + this.auth.jwt });
    return this.httpClient.post(this.auth.host+path, data, { headers: headers });
  }*/
  public createData(path, Inscription :Inscription) {
    const headers = new HttpHeaders({ 'authorization': 'Bearer' + this.auth.jwt});
    return this.http.post(this.auth.host+path, Inscription, { headers: headers });
 
  }

}
