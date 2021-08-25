import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
title ="Amo  Angular";

paragrafo= "Este é meu paragrafo!";

imagem = "https://cdn.pixabay.com/photo/2016/03/18/01/09/cupcake-1264214_960_720.png";

  constructor() { }

  ngOnInit(): void {
  }

  message(){
    alert("Cliquei no Botão");
  }

}
