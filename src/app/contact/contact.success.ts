import { Component, Input, OnInit, ApplicationRef, ChangeDetectorRef } from '@angular/core';
import { ContactForm }    from '../models/contactform';
import { EmailService }  from '../services/email.service';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-contact-success',
  templateUrl: './contact.success.html',
})
export class ContactSuccess implements OnInit {
 
  constructor() {
    console.log("ContactSuccess construct");
  }
   
  ngOnInit() {
    console.log("ContactSuccess init");
  }
}