import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-new',
  template: '<p>User New</p>'
})
export class UserNewComponent implements OnInit {

  constructor(private router: ActivatedRoute) { 
    this.router.parent.params.subscribe(params => {
      console.log('Ruta Hija');
      console.log(params);
      
    })
  }

  ngOnInit(): void {
  }

}
