import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUrls } from '../shared/api-urls.service';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {
  constructor(private http : HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(ApiUrls.topics)
    
  }

  postData(data: any): Observable<any> {
    return this.http.post(ApiUrls.topics, data)
}

updateData(data: any, id: any): Observable<any> {
  return this.http.patch(ApiUrls.topics+'/' + id, data)
}

getDataById(id){
 return this.http.get(ApiUrls.topics+'/' + id)
}

// deleteData(id: any): Observable<any> {
//   return this.http.delete(ApiUrls.topics +id)
// }

}

