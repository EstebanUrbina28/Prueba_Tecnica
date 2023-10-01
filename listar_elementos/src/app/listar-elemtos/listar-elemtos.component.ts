import { Component } from '@angular/core';
import { ApiGitService } from '../service/api-git.service';

@Component({
  selector: 'app-listar-elemtos',
  templateUrl: './listar-elemtos.component.html',
  styleUrls: ['./listar-elemtos.component.css']
})
export class ListarElemtosComponent {

  repositorios: any= [];

  constructor(private service: ApiGitService){

  }
  ngOnInit(): void {
   this.service.getTopRepositories().subscribe((data:any) =>{
    this.repositorios = data.items;
   });
  }

}
