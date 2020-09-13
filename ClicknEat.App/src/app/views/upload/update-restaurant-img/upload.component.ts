import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, NgModule, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-update-restaurant-img',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UpdateRestaurantImgComponent implements OnInit {

  public endPoint = 'https://localhost:5001/api/v1/';

  public progress: number;
  public message: string;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() public onUploadFinished = new EventEmitter();

  constructor(private http: HttpClient) { }
  ngOnInit() {
  }

  public uploadFile = (files) => {
    if (files.length === 0) {
      return;
    }

    const fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.http.post(this.endPoint + 'Restaurants/Admin/Upload', formData, { reportProgress: true, observe: 'events' })
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body);
        }
      });
  }
}