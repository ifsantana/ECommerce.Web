import { Component } from '@angular/core';

@Component({
   moduleId: module.id,
   selector: 'app-root',
   templateUrl: 'app.component.html'
})

export class AppComponent { }

/*import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _httpService: Http) { }
  apiValues: string[] = [];
  ngOnInit() {
     this._httpService.get('http://localhost:5000/api/values').subscribe(values => {
        this.apiValues = values.json() as string[];
     });
  }
}*/
