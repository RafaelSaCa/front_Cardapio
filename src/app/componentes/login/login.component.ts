import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;
  errorMsg: string | null = null;

  constructor( private fb: FormBuilder, private authService: AuthService, private router: Router){
    this.loginForm = this.fb.group({
      username:['', [Validators.required, Validators.email]],
      password:['', Validators.required]
    });
  }

  onSubmit(){
    if (this.loginForm.valid){
      const{ username, password} = this.loginForm.value;

      this.authService.login(username, password).subscribe({
        next: (response) => {
          console.log('login bem sucedido');
          const token = response.acess_token;
          this.authService.setToken(token);
          console.log('outra pagina')
          this.router.navigate(['estoque']);
        },

        error: (error) => {
          this.errorMsg = 'Dados inválidos';
          console.log('Erro no login', error);
        }
      });
    }
  }


}
