export class FileUpload {
    key: string;
    name: string;
    url: string;
    title: string;
    description: string;
    category: string;
    file: File;
  
    constructor(file: File) {
      this.file = file;
    }
  }
  