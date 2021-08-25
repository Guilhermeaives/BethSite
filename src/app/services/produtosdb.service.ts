import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Produtos } from '../interfaces/produtos';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutosdbService {
  collectioProduto: AngularFirestoreCollection<Produtos>;
  
  constructor(
    private af: AngularFirestore
  ) {
    this.collectioProduto = this.af.collection<Produtos>('Produtos');
   }
   
//Metodo de consulta todos os dados
getAllProduto(){
  return this.collectioProduto.snapshotChanges().pipe(
    map (actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return {id, ...data}
      })
    })
  )
}

//Metodo consulta um unico produto
getProduto(id: string){
  return this.collectioProduto.doc(id).valueChanges();
}

//metodo de cadastro
addProduto(produto: Produtos){
  return this.collectioProduto.add(produto);
}

//Metodo que apaga um produto
delProduto(id: string){
  return this.collectioProduto.doc(id).delete();

}

//Metodo que atualiza um produto
upProduto(id: string, produto: Produtos){
  return this.collectioProduto.doc(id).update(produto)
}
}
