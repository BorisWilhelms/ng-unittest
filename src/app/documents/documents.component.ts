import { DocumentService } from './document.service';
import { Component, OnInit } from '@angular/core';
import { Document } from './document';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html'
})
export class DocumentsComponent implements OnInit {
  public documents: Document[];

  constructor(private _service: DocumentService) { }

  ngOnInit() {
    this._service.loadDocuments().subscribe(d => this.documents = d);
  }
}
