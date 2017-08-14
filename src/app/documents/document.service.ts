import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Document } from './document';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DocumentService {

  constructor(private _http: Http) { }

  public loadDocuments(): Observable<Document[]> {
    return this._http
      .get('/assets/documents.json', { headers: new Headers({ 'my-header': 'has-value' }) })
      .map(r => r.json());
  }
}
