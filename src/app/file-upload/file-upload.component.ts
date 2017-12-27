import { Component, OnInit } from '@angular/core';
import { AngularService } from 'app/shared/angular.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  form: FormGroup;
  loading:boolean;
  image_src:string; 
  fileName:string;
  uploaded:boolean;
  constructor(private client: AngularService, private fb : FormBuilder) { }
  
  ngOnInit() {
    this.buildForm();
    this.uploaded = false;
    this.image_src = "assets/images/n.jpg"
  }

  buildForm(){
    this.form = this.fb.group({
      name: ['', Validators.required],
      avatar: null
    });
  }

  onFileChange(event){
    if(event.target.files.length > 0){
      let file = event.target.files[0];
      this.fileName = file.name;
      this.form.get('avatar').setValue(file);
    }
  }

  private prepareSave(): any {
    let input = new FormData();
    input.append('name', this.form.get('name').value);
    input.append('avatar', this.form.get('avatar').value);
    return input;
  }

  onSubmit(){
    this.loading = true;
    const formModel = this.prepareSave();
    this.client.uploadFiles(formModel).subscribe(data => {
      this.loading = false;
      this.image_src = "https://loopback-angular-starterkit.herokuapp.com/api/Uploads/images/download/"+this.fileName;
      console.log(data);
    });
  }

  deleteUploaded(){
    this.client.deleteFiles(this.fileName).subscribe(data => console.log(data));
  }
}
