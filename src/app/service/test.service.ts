import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class TestService {

	headers: HttpHeaders = new HttpHeaders();
	options: any;
  	constructor() { 
  		this.headers.append('enctype', 'multipart/form-data');
	 	this.headers.append('Content-Type', 'application/json');
	 	this.headers.append('X-Requested-With', 'XMLHttpRequest');
	}
  	
}
