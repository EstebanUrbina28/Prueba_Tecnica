import { HtmlParser } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiGitService {

  private API_REPOSITORIOS = "https://api.github.com"

  constructor(private http: HttpClient) {}
 
  getTopRepositories() {
    //se crea una variable url para acceder a la api para obtener los 10 repositorios 
    const url = `${this.API_REPOSITORIOS}/search/repositories?q=stars:>0&sort=stars&order=desc&per_page=10`;
    return this.http.get(url);
  }

  
}
