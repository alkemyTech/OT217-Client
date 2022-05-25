import { Component, DoCheck, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Activities } from 'src/app/features/models';
import { HttpService } from 'src/app/core/services/http.service';
import { CreateService } from 'src/app/core/services/create.service';
import { Listing } from 'src/app/core/services/listing.service';
import { Update } from 'src/app/core/services/update.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-creation-activities',
  templateUrl: './creation-activities.component.html',
  styleUrls: ['./creation-activities.component.scss'],
  providers:[ CreateService, Listing, Update]
})
export class CreationActivitiesComponent implements OnInit ,DoCheck {
  public Editor = ClassicEditor;
  public activities: Activities
  public  file: any = []
  public text: boolean = false
  public update: boolean= false
  public id: string=''
  public existImg: boolean = false
  public title: string=''
  constructor(
    private _HttpService: CreateService, 
    private _Listing: Listing,
    private _Update: Update,
    private sanitizer: DomSanitizer) {
    this.activities = new Activities('','','','','','','','','','','');
    this.title= "Crear actividad"
  }

  ngOnInit(): void {
    this.getUrl()
  }
  ngDoCheck(): void {
  }
 
  creteUpdate(){
    if(this.update){
      this.putActivities(this.id)
      
    }else{
      this.postActivities()
    }

  }
  postActivities(){
    this._HttpService.postActivities(this.activities).subscribe(
      response =>{
        this.text= true
      },
      error =>{
        console.log(<any> error)
      }
    )
  }

  fileChangeEvent(fileInput: any){
    const archivo = fileInput.target.files[0];
    this.extraerBase64(archivo).then((image: any) => {
      this.activities.image= image.base
    })
    this.file.push(archivo)
    this.existImg= true
	}
  
  extraerBase64 = async($event: any) => new Promise((resolve, reject) => {
    try {
      const usafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(usafeImg)
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () =>{
        resolve({
          base: reader.result
        });
      };
      reader.onerror = errror => {
        resolve({
          base: null
        });
      }
    } catch (e){
      return null
    }
    return null;
  }); 

  getUrl(){
    var actual = window.location+'';
    var split = actual.split("/");
    this.id = split[split.length-1];
    if(this.id !== 'creationActividades' ){
      this.getActivitiesID(this.id);
      this.title= " Actualizar la actividad "
    }
  }

  getActivitiesID(id: string){
    var actividades: any
    this.update = true
    this._Listing.getActivities(id).subscribe(
      response => {
        actividades = response.data
        this.activities= actividades
        },
        error =>{
          console.log(<any> error)
        }
    )
  }


  putActivities(id: string){
    var activities
    if(!this.existImg){
      var {image , ...myUpdatedObject} = this.activities;
      activities= myUpdatedObject;
    }else{
      activities= this.activities
    }
    this._Update.putActivities(activities, id).subscribe(
      response =>{
        this.text= true
      },
      error =>{
        console.log(<any> error)
      }
    )
  }

  




}
