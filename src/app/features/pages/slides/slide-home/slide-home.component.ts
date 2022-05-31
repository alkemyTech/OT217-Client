import { Component, DoCheck, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {OrganizationService} from'src/app/core/services/organization.service';
import {SlidesService} from 'src/app/core/services/slides.service'
import { DomSanitizer } from '@angular/platform-browser';
import { SlideArray} from './model'

@Component({
  selector: 'app-slide-home',
  templateUrl: './slide-home.component.html',
  styleUrls: ['./slide-home.component.scss'],
  providers: [OrganizationService, SlidesService]
})
export class SlideHomeComponent implements OnInit{
  public Editor = ClassicEditor;
  public textWelcome: string
  public idActual: string= ''
  public slides: any
  public selecSlide1: any
  public selecSlide2: any
  public selecSlide3: any
  public view=false;
  public organization: any
  public slideArray: SlideArray[]=[]
  public uploadImage=[false,false,false]
  public text: string=''

  constructor(
    private _OrganizationService: OrganizationService,
    private _slideService: SlidesService,
    private sanitizer: DomSanitizer
  ) {
    this.textWelcome=''
   }

  ngOnInit(): void {
    this.getUrl();
    this.getSlide();
  }

  getUrl(){
    var actual = window.location+'';
    var split = actual.split("/");
    this.idActual = split[split.length-1];
    this.getOrganization();
  }

  getOrganization(){
    this._OrganizationService.getOrganization(this.idActual).subscribe(
      response =>{
        this.textWelcome = response.data.welcome_text; 
        this.organization = response.data
      },error=>{
      }
    )
  }
  getOrderSlide(){
    this.slides.forEach((element: any) => {
      if(element.order == 0){
        this.selecSlide1= element.id
        this.slideArray[0]={
          id: element.id,
          description: element.description,
          image: element.image,
          name: element.name
        }
      }
      if(element.order == 1){
        this.selecSlide2= element.id
        this.slideArray[1]={
          id: element.id,
          description: element.description,
          image: element.image,
          name: element.name
        }
      }
      if(element.order == 2){
        this.selecSlide3= element.id
        this.slideArray[2]={
          id: element.id,
          description: element.description,
          image: element.image,
          name: element.name
        }
      }
    });
    this.view= true
  }
  getSlide(){
    this._slideService.getSlides().subscribe(
      response =>{
       this.slides= response.data
       this.getOrderSlide()
      },error=>{
      }
    )

  }

  changeDate(id: any, positio: number){
    this.slides.forEach((element: any) => {
      if(element.id == id){
        this.slideArray[positio]={
          id: element.id,
          description: element.description,
          image: element.image,
          name: element.name
        }
      }
    }) 
  }

  fileChangeEvent(fileInput: any, position: number){
    const archivo = fileInput.target.files[0];
    this.extraerBase64(archivo).then((image: any) => {
      this.slideArray[position].image= image.base
      this.uploadImage[position] = true
    });
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

  putOrganization(){
    this.organization.welcome_text = this.textWelcome
    var {logo , ...myUpdatedObject} = this.organization;
    this.organization=myUpdatedObject;
    if(this.textWelcome.length > 20){
      this._OrganizationService.putOrganization(this.organization,this.idActual).subscribe(
        response => {
        },
        error => {
        }
      );
      this.text=''
    }else{
      this.text="Son minimo 20 caracteres"
    }
  }


  putSlides(){
    var objectUpdate;

    for(let i=0; i<this.uploadImage.length; i++ ){
      if(this.uploadImage[i]){
        objectUpdate= this.slideArray[i]
      }else{
        var {image, ...myUpdatedObject} = this.slideArray[i];
        objectUpdate=myUpdatedObject;
      }
      this._slideService.putSlides(objectUpdate,this.slideArray[i].id.toString()).subscribe(
        response => {
        },
        error => {
        }
      );
    }
  }
  onSubmit(){
    this.putOrganization();
    this.putSlides()
    
  }
  
}
