import { Component} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Observable } from 'rxjs';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  emailFormControl : FormControl = new FormControl('', [Validators.required, Validators.email]);
  nameFormControl : FormControl = new FormControl('', [Validators.required]);
  inquiryFormControl : FormControl = new FormControl('', [Validators.required]);
  matcher : MyErrorStateMatcher = new MyErrorStateMatcher();
  constructor() { }

  sendMessage() {
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1023400027026104360/VtWy9GjzjLhR_bpZcIp1ns871yR-QjkBag9jgo1VS2lY7Z7ITW8hC62YujDt_BmmXYEL");
    request.setRequestHeader('Content-type', 'application/json');

    const params = {
      username: this.nameFormControl.getRawValue() + " - " + this.emailFormControl.getRawValue(),
      avatar_url: "",
      content: this.inquiryFormControl.getRawValue()
    }
    if (!this.emailFormControl.hasError('email') && !this.emailFormControl.hasError('required') && !this.nameFormControl.hasError('required') && !this.inquiryFormControl.hasError('required') ) {
      request.send(JSON.stringify(params));
      document.getElementById("response")!.innerHTML = "<h4 style=\"color: #4BB543\">Your inquiry was sent successfully. Expect a response within the next 24 hours. Thank you!</h4>"
    }
    else {
      document.getElementById("response")!.innerHTML = "<h4 style=\"color: #D9534F\">Please correct the errors present in the form and make sure every field is utilized in order to send your inquiry.</h4>"
    }
  }
  
  
}
