import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;

  constructor(private fb:FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      username : ['', Validators.required],
      password : ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  ingresar(){


    const username = this.form.value.username;
    const password = this.form.value.password;
 
    if (username == "airan" && password == "franco") {
      //redireccionmos al dashboeard
      this.fakeLoading()
    }
    else {
      // MEnsaje de error
      this.error()
      this.form.reset()
    }
  }
  error(){
    this._snackBar.open('User or password incorrect', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  fakeLoading() {
    // Redireccionamos al inicio
    this.loading = true;
    setTimeout(() => {

      //this.loading = false;
      this.router.navigate(['dashboard'])

    }, 1400);
  }

}
