import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.css']
})
export class CssComponent implements OnInit {
  varAlerta:string = 'alert-danger';
  propiedades = {
    danger : false
  }

  loading : boolean = false;

  constructor() { }
  
  
  ngOnInit(): void {
    console.log(this.propiedades);
  }

  ejecutar(){
    this.loading =  true;
    setTimeout(()=> this.loading = false, 3000);
  }

}
