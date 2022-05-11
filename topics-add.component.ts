import { TopicsService } from '../topics.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-topics-add',
  templateUrl: './topics-add.component.html',
  styleUrls: ['./topics-add.component.scss']
})
export class TopicsAddComponent implements OnInit {

  loginForm :FormGroup;
  submitted = false;
  id : any;
  topicsId : any;
  topicsService: any;
  

constructor(private formbuilder : FormBuilder,private TopicsService : TopicsService,
    private activatedRoute: ActivatedRoute,private router : Router) { }

ngOnInit(): void {

this.activatedRoute.queryParams.subscribe(data=>{
  console.log(data.id)

  if(data.id){
    this.topicsId=data.id;
    this.getById(data.id)
  }
})
this.loginForm = this.formbuilder.group({
name : new FormControl('',[Validators.required,Validators.minLength(5)]),
displayName : new FormControl('',[Validators.required,Validators.minLength(5)]),
discription : new FormControl('',[Validators.required]),
status : new FormControl('ACTIVE',[])
})

}



get name() { return this.loginForm.get('name'); }



onSubmit() {
this.submitted = true;
this.loginForm.reset();


// stop here if form is invalid
if (this.loginForm.invalid) {
  return;
}

console.log(this.loginForm.value);

// display form values on success
alert(
  'SUCCESS!! ' + JSON.stringify(this.loginForm.value)
);
}

get f() {
 return this.loginForm.controls;
 }

// write postdata function to service file //
postingData(data: any) {

  let user = {
    name: this.loginForm.value.name,
    displayName: this.loginForm.value.displayName,
    discription : this.loginForm.value.discription,
    status : this.loginForm.value.status
    
  }

  console.log(data)

  this.TopicsService.postData(data)
    .subscribe(response => {
      console.log("Hello Api"+response)
     
    })
}

updatingData() {
  let body = {
    name: this.loginForm.value.name,
    displayName: this.loginForm.value.displayName,
    discription: this.loginForm.value.discription,
    status: this.loginForm.value.status? 'ACTIVE':'INACTIVE'

  }

  this.TopicsService.updateData(body,this.topicsId)
    .subscribe(response => {
      console.log("Hello Update"+response)
      if(response.status){
        console.log("Response")
      this.router.navigate(['./topics/list'])
      } else {

      }
    })
}

getById(id){
  
  this.TopicsService.getDataById(id).subscribe((res:any)=>{
    console.log(res);
    let topicsData = res.data
    this.loginForm.get('name').setValue(topicsData.name)
    this.loginForm.get('displayName').setValue(topicsData.displayName)
    this.loginForm.get('discription').setValue(topicsData.discription)
    // this.loginForm.get('status').setValue(topicsData.status)
    if(topicsData.status.toUpperCase() === 'ACTIVE'){
      this.loginForm.get('status').setValue(true)
  
    }else{
      this.loginForm.get('status').setValue(false)
    }
  })

  
}




}
