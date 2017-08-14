import { DocumentService } from './document.service';
import { Observable } from 'rxjs/Observable';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsComponent } from './documents.component';
import { Document } from './document';
import 'rxjs/add/observable/of';

describe('DocumentsComponent', () => {
  let component: DocumentsComponent;
  let fixture: ComponentFixture<DocumentsComponent>;

  const documentServiceMock = {
    loadDocuments: () => {
      return Observable.of([{ id: 1, title: 'Document 1' }, { id: 2, title: 'Document 2' }]);
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentsComponent],
      providers: [{ provide: DocumentService, useValue: documentServiceMock }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display two documents', () => {
    expect(fixture.debugElement.nativeElement.querySelectorAll('li').length).toBe(2);
  });
});
