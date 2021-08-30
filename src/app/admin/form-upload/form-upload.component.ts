import { Component, Input, OnInit } from '@angular/core';

import { UploadFileService } from 'src/app/services/upload-file.service';
import { map } from 'rxjs/operators';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdutosdbService } from 'src/app/services/produtosdb.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.css']
})
export class FormUploadComponent implements OnInit {

  titlePage = "Página de Cadastro";
  fileUploads: any[];
  url = {};
  formProduct: FormGroup

  constructor(
    private fb: FormBuilder,
    private uploadService: UploadFileService,
    private productService: ProdutosdbService,
    private router: Router
    
    ) { }

  ngOnInit(): void {
    this.uploadService.getFileUploads(6).snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fileUploads => {
      this.fileUploads = fileUploads;
      for(let i=0; i < fileUploads.length; i++){
        this.url = fileUploads[i].url
        console.log("teste", this.url)
      }
    });

    this.validaForm();
    this.formProduct.reset();
  }

  validaForm() {
    this.formProduct = this.fb.group({
      title: ['',[Validators.required, Validators.minLength(3)]],
      category: ['',[Validators.required, Validators.minLength(3)]],
      url: [''],
      descricao: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(100)]]
    });
  }

  registerProduct(){
    this.productService.addProduto(this.formProduct.value);
    this.formProduct.reset();
    this.router.navigateByUrl('/admin/produtoadmin');
  }



  
}



