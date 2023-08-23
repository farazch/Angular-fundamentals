import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {

  registerForm = this.fb.group({

    username: '',
    password: '',
    email: '',

  });


  constructor(private fb:FormBuilder){ }

  onSubmit(): void {
    console.log("Registered Vals:",this.registerForm.value);
    
  }



}
