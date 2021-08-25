import { Component, OnInit } from '@angular/core';
import { FileUpload } from 'src/app/interfaces/fileupload';
import { UploadFileService } from 'src/app/services/upload-file.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  percentage: number;
  file: string
  constructor(private uploadService: UploadFileService) { }

  ngOnInit(): void {
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;

    this.currentFileUpload = new FileUpload(file);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
      percentage => {
        this.percentage = Math.round(percentage);
      },
      error => {
        console.log(error);
      },
    );

  }
}