import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ProdutosdbService } from '../../services/produtosdb.service';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {

  cakeProduct = [];
  pirulitoProduct = [];
  boloPalitoProduct = [];
  trufaProduct = [];
  coneProduct = [];
  bombonsProduct = [];
  diversosProduct = [];
  paoMelProduct = [];
  retratoProduct = [];
  boloProduct = [];
  salgadosProduct = [];

  constructor(
    private productService: ProdutosdbService
  ) { }

  ngOnInit(): void {
    
    this.productService.getAllProduto().subscribe(results => {
      this.cakeProduct.length = 0; 
      this.pirulitoProduct.length = 0;
      this.boloPalitoProduct.length = 0;
      this.trufaProduct.length = 0;
      this.coneProduct.length = 0;
      this.bombonsProduct.length = 0;
      this.diversosProduct.length = 0;
      this.paoMelProduct.length = 0;
      this.retratoProduct.length = 0;
      this.boloProduct.length = 0;
      this.salgadosProduct.length = 0;


      for (let i = 0; i < results.length; i++) {
        let category = results[i].category
        
        switch (category) {
          case 'cup_cake':                        
                 
            this.cakeProduct.push(results[i]);
           
            break;

          case 'pirulito':
            let indice2 = results[i]
            this.pirulitoProduct.push(indice2)
            break;

          case 'bolo_palito':
            let indice3 = results[i]
            this.boloPalitoProduct.push(indice3)
            break;

          case 'trufas':
            let indice4 = results[i]
            this.trufaProduct.push(indice4)
            break;

          case 'cone':
            let indice5 = results[i]
            this.coneProduct.push(indice5)
            break;

          case 'bombons':
            let indice6 = results[i]
            this.bombonsProduct.push(indice6)
            break;

          case 'diversos':
            let indice7 = results[i]
            this.diversosProduct.push(indice7)
            break;

          case 'pao_mel':
            let indice8 = results[i]
            this.paoMelProduct.push(indice8)
            break;

          case 'retrato':
            let indice9 = results[i]
            this.retratoProduct.push(indice9);
            break;

          case 'bolo':
            let indice10 = results[i]
            this.boloProduct.push(indice10);
            break;

          case 'salgados':
            let indice11 = results[i];
            this.salgadosProduct.push(indice11);
            break;

            case 'docinho':           
            this.salgadosProduct.push(results[i]);
            break;

          default:
            console.log(`Ocorreu um error`);
            break;
        }
        
      }
    });
  }
}

