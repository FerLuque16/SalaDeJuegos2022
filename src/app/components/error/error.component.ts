import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  name = 'Get Current Url Route Demo';

  url = '';
  // currentRoute: string;

  constructor(private route: Router) { 
   
  }

  ngOnInit(): void {
    
    this.url = this.route.url;

    
    
  }

}
