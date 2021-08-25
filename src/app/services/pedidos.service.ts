import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  collectioPedidos: AngularFirestoreCollection;

  constructor(
    private af: AngularFirestore
  ) {
    this.collectioPedidos = this.af.collection('Pedidos');
  }
  //Metodo de consulta todos os dados
  getAllPedido() {
    return this.collectioPedidos.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data }
        })
      })
    )
  }
  //Metodo consulta um unico produto
  getPedido(id: string) {
    return this.collectioPedidos.doc(id).valueChanges();
  }

  //metodo de cadastro
  addPedido(pedido) {
    return this.collectioPedidos.add(pedido);  
  }

  //Metodo que apaga um produto
  delPedidos(id: string) {
    return this.collectioPedidos.doc(id).delete();
  }

  //Metodo que atualiza um produto
  upPedidos(id: string, pedidos) {
    return this.collectioPedidos.doc(id).update(pedidos)
  }
}
