import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imageList$: Observable<any[]>;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.imageList$ = this.http.get(
      'https://www.instagram.com/graphql/query/?query_hash=e769aa130647d2354c40ea6a439bfc08&' +
      'variables={' +
        '"id":"4485592073",' +
        '"first":12,' +
        '"after":' +
      '"QVFCeTFqWG41R2hUSnhxeVR2b1RKb1lDTVl4cTJIQ0UwTFNfcUFfWE5qRXJrWXNucTU3U2FobUY5dXo1dFpsVEVZam8yWFhMVVo0Y1ZKZzZTUXpWTGU4LQ=="' +
      '}',
    )
      .pipe(
        map(res => res['data']['user']['edge_owner_to_timeline_media']['edges'] || {})
      );
  }

  getImageList(): String[] {

    return [];
  }
}
