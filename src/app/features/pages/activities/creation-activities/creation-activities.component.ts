import { Component, DoCheck, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Activities } from 'src/app/features/models';
import { CreateService } from 'src/app/core/services/create.service';
import { ActivitiesServices } from 'src/app/core/services/activities.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-creation-activities',
  templateUrl: './creation-activities.component.html',
  styleUrls: ['./creation-activities.component.scss'],
  providers:[ CreateService, ActivitiesServices]
})
export class CreationActivitiesComponent implements OnInit{
  public Editor = ClassicEditor;
  public activities: Activities[]=[]
  public text: boolean = false
  public update: boolean= false
  public id: string=''
  public existImg: boolean = false
  public title: string=''
  public name: string =''
  public description: string =''
  public image: string =''
  constructor(
    private _HttpService: CreateService, 
    private _ActivitiesServices: ActivitiesServices,
    private sanitizer: DomSanitizer) {
    this.title= "Crear actividad"

  }

  ngOnInit(): void {
    this.getUrl()
  }
  creteUpdate(){
    if(this.update){
      this.putActivities(this.id)
      
    }else{
      this.postActivities()
    }

  }
  postActivities(){
    var activities = new Activities(this.name, this.description,this.image)
    this._HttpService.postActivities(activities).subscribe(
      response =>{
        this.text= true
      },
      error =>{
      }
    )
  }

  fileChangeEvent(fileInput: any){
    const archivo = fileInput.target.files[0];
    this.extraerBase64(archivo)
      .then((image: any) =>{
          this.image= image.base
        }
      );
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
    if(this.id !== 'create' ){
      this.getActivitiesID(this.id);
      this.title= " Actualizar la actividad "
    }
  }

  getActivitiesID(id: string){
    var actividades: any
    this.update = true
    this._ActivitiesServices.getActivities(id).subscribe(
      response => {
        actividades = response.data
        this.activities[0]= actividades
        this.name= response.data.name
        this.description= response.data.description
        this.image= response.data.image
        },
        error =>{
        }
    )
  }


  putActivities(id: string){
    var activities = new Activities(this.name, this.description,this.image)
    var activitiesput
    if(!this.existImg){
      var {image , ...myUpdatedObject} = activities;
      activitiesput= myUpdatedObject
    }else{
      activitiesput= activities
    }
    this._ActivitiesServices.putActivities(activitiesput, id).subscribe(
      response =>{
        this.text= true
      },
      error =>{
      }
    )
  }
}
