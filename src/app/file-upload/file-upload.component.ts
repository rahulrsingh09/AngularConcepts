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
  fileName:boolean = true;
  uploaded:boolean = true;
  constructor(private client: AngularService, private fb : FormBuilder) { }
  
  ngOnInit() {
    this.buildForm();
    this.uploaded = false;
    if(localStorage.getItem("filename")){
      this.image_src = "https://loopback-angular-starterkit.herokuapp.com/api/Uploads/images/download/"+localStorage.getItem("filename");
      this.fileName = false;
    } else {
      this.image_src = "assets/images/n.jpg";
    }
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
      if(file.name){
        this.fileName = false;
        localStorage.setItem("filename", file.name);
      }
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
    let fileName =  localStorage.getItem("filename");
    this.client.uploadFiles(formModel).subscribe(data => {
      this.loading = false;
      this.uploaded = true;
      this.image_src = "https://loopback-angular-starterkit.herokuapp.com/api/Uploads/images/download/"+fileName;
      console.log(data);
    });
  }

  deleteUploaded(){
    let fileName =  localStorage.getItem("filename");
    this.client.deleteFiles(fileName).subscribe(data => this.loading = true);
    localStorage.removeItem('filename');
    this.image_src = "assets/images/n.jpg";
  }
}
