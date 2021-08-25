import { Component, Input, OnInit } from '@angular/core';
import { FileUpload } from 'src/app/interfaces/fileupload';
import { UploadFileService } from 'src/app/services/upload-file.service';

@Component({
  selector: 'app-details-upload',
  templateUrl: './details-upload.component.html',
  styleUrls: ['./details-upload.component.css']
})
export class DetailsUploadComponent implements OnInit {
  @Input() fileUpload: FileUpload;
  constructor(private uploadService: UploadFileService) { }

  ngOnInit(): void {
  }

  deleteFileUpload(fileUpload) {
    this.uploadService.deleteFileUpload(fileUpload);
  }

}
