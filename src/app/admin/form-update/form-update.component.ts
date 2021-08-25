import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UploadFileService } from 'src/app/services/upload-file.service';
import { map } from 'rxjs/operators';
import { ProdutosdbService } from 'src/app/services/produtosdb.service';
import { Produtos } from 'src/app/interfaces/produtos';

@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.component.html',
  styleUrls: ['./form-update.component.css']
})
export class FormUpdateComponent implements OnInit {
  titlePage = "Formulário de Atualização";
  fileUploads: any[];  
  url = {};
  idRouter = null;
  product:Produtos = {}

  constructor(
    private uploadService: UploadFileService,
    private acRouter: ActivatedRoute,
    private produtosDb: ProdutosdbService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.url = 0

    this.uploadService.getFileUploads(6).snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fileUploads => {
      this.fileUploads = fileUploads;
      for(let i=0; i < fileUploads.length; i++){
        this.url = fileUploads[i].url
        console.log("teste", this.url);
      }
    });

    this.idRouter = this.acRouter.snapshot.params['id'];
    console.log(this.idRouter)

    if(this.idRouter) {
      this.produtosDb.getProduto(this.idRouter).subscribe(result => {this.product = result} );    
     
    };
    
  }

  update(form){       
      this.produtosDb.upProduto(this.idRouter, form.value);
      this.router.navigateByUrl('/produtoadmin');   
        
  }

}
