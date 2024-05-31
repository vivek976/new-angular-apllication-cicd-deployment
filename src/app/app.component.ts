import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  public getJsonValue:any;
  public postJsonValue:any;
  boolvalue:boolean=false
  constructor(private http:HttpClient)
  {

  }
  ngOnInit(): void {
    
 
  }
  topics=['angular','react','vue'];
  public getMethod()
  {
    this.http.get("http://localhost:5500/api/v1/register",{ responseType: 'text' }).subscribe((data)=>{
      this.getJsonValue=data;
    },
    (error) => {
      console.error('Error fetching data:', error);
    }
  );
 
  }

  name=''
  email=''
  topic:any;
  
  clk(topic:any){
    this.topic=topic.target.value
    this.getMethod();
    this.boolvalue=true
    console.log(this.boolvalue);
  }
}