import { TopicsService } from './../topics.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.scss']
})
export class TopicsListComponent implements OnInit {
  data:any;
  loginForm: any;
  private _router: any;
 
  

  constructor(private TopicsService: TopicsService) { }


  ngOnInit(): void {


    this.TopicsService.getData().subscribe(data=>{
      console.log("Hello Prran"+data)
      this.data=data.data;
    })
  }
  // deleteData(id: number) {
  //   this.TopicsService.deleteData(id)
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //       }
  //     )}
  
  
}
