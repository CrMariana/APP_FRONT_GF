import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Area } from './model/Area';
import { Ambiente } from './model/Ambiente';

@Injectable({
  providedIn: 'root'
})
export class MasterServiceService {

  rutaGlobalAmbiente = 'https://ah0hguyfib.execute-api.us-east-2.amazonaws.com/proMobile/ambiente/';
  rutaGlobalArea = 'https://ah0hguyfib.execute-api.us-east-2.amazonaws.com/proMobile/area/'

  constructor(private http: HttpClient) { }

  GetArea() {
    return this.http.get<Area[]>(this.rutaGlobalArea + "listar");
  }

  GetAmbiente() {
    return this.http.get<Ambiente[]>(this.rutaGlobalAmbiente + "listar");
  }

  BuscarAmbienteArea(id:any){
    return this.http.post<Ambiente[]>(this.rutaGlobalAmbiente +"buscar-por-area", id);
  }

  BuscarAmbiente(id:any){
    return this.http.post<Ambiente>(this.rutaGlobalAmbiente + "buscar",id);
  }


}
