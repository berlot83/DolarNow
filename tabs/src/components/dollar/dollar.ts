import { Component } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

/**
 * Generated class for the DollarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.


 DD
 */
@Component({
  selector: 'dollar',
  templateUrl: 'dollar.html'
})
export class DollarComponent {
  headers = new Headers();
  text: string;

  constructor(public http: Http) {
    console.log('Hello DollarComponent Component');
    this.text = 'Hello World';

    this.headers.append("Authorization", "BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1Njg5MDE2OTEsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJiZXJsb3Q4M0B5YWhvby5jb20uYXIifQ.ybT_2J_U4tUobiT-q8NLlD0E_F3YN4Oo8r1z9hWVSYp27LGcC8CwWXDoF4Ju87DuAGYW0SbQIldzeeaKW2dFKQ");
    this.http.get('http://api.estadisticasbcra.com/usd_of', {headers: this.headers}).map(res => res.json()).subscribe(data => {
  		console.log(data);
  		//res.setHeader('Access-Control-Allow-Origin:','*');
		  //res.setHeader('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
		  //res.setHeader('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
    	//res.setHeader("Content-Type","application/json");
    		
  	});

  }

}
