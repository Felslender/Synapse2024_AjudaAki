import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-user',
  templateUrl: './cadastro-user.component.html',
  styleUrls: ['./cadastro-user.component.css']
})
export class CadastroUserComponent {

  showProf = false;
  showDados: boolean = true;
  showEndereco: boolean = false;
  showPerfil: boolean = false;
  showConfirmar : boolean = false;
  showProximo: boolean = true;
  step: number = 1;



  constructor(private router: Router) { }  

  


  voltarStep() {
    this.step = this.step - 1;

    if (this.step === 0) {
      this.router.navigateByUrl(''); 
    }

    else if(this.step === 1) {
      this.showDados = true;
      this.showEndereco = false;
    }

    else if(this.step === 2){
      this.showEndereco = true;
      this.showPerfil = false;
      this.showConfirmar = false;
      this.showProximo = true;
    }
  
    else if(this.step === 3){
      this.showConfirmar = false;
      this.showProximo = true;
    }

    console.log(this.step);
  }


  toggleSwitch() {
    if (this.step === 1) {
      this.showDados = false;
      this.showEndereco = true;
      this.step++;
    }

    else if(this.step === 2){
      this.showEndereco = false;
      this.showPerfil = true;
      this.showProximo = false;
      this.showConfirmar = true;
      this.step++;
    }


    console.log(this.step);

  }

  mostrarModal(){
    
    

  }


}
