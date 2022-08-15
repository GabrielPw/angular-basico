import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GABRIEL - IAGO - ANDREY';

  logo = "favicon.ico";

  exibe = true;

  exibirNome() : string{

    return "Gabriel";
  }

  exibirAlerta(){

    alert("Teste.");
  }

  numerosAleatorios(){

    Math.random()
  }

  mostrar(){

    if(this.exibe){

      this.exibe = false;
    } else{

      this.exibe = true;
    }

    if (this.exibe){


    }

  }
}



