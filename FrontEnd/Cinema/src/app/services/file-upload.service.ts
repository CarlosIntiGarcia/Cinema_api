import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mantenimiento } from '../interfaces/mantenimiento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(
    private http: HttpClient
  ) { }


  FileUpload(file: File) {
    console.log(file);

    const cloudUrl = 'https://api.cloudinary.com/v1_1/doueu7nt1/upload';
    const formData = new FormData();
    formData.append('upload_preset', 'Peliculas');
    formData.append('file', file);
    const uploadFile = this.http.post(cloudUrl, formData);
    return uploadFile;
  }
}
