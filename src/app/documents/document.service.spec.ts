import { HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';

import { DocumentService } from './document.service';
import { MockConnection } from '@angular/http/testing';

describe('DocumentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        DocumentService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });

    const mockBackend = TestBed.get(XHRBackend) as MockBackend;
    mockBackend.connections.subscribe(
      (r: MockConnection) => r.mockRespond(new Response(new ResponseOptions({ body: { id: 1, title: 'document' } })))
    );
  });

  it('should be created', inject([DocumentService], (service: DocumentService) => {
    expect(service).toBeTruthy();
  }));

  describe('loadDocument', () => {
    // Don't do this. If the observable will not be triggered, this spec will be green!
    // it('should make one request', inject([DocumentService, XHRBackend], (service: DocumentService, backend: MockBackend) => {
    //   service.loadDocuments().subscribe(r => {
    //     expect(backend.connectionsArray.length).toBe(1);
    //   });
    // }));

    it('should make one request', done => {
      inject([DocumentService, XHRBackend], (service: DocumentService, backend: MockBackend) => {
        service.loadDocuments().subscribe(r => {
          expect(backend.connectionsArray.length).toBe(1);
          done();
        });
      })(); // Important: Inject returns a method. This method need be called in order to execute the body.
    });

    it('should send my header', done => {
      inject([DocumentService, XHRBackend], (service: DocumentService, backend: MockBackend) => {
        service.loadDocuments().subscribe(r => {
          const headers = backend.connectionsArray[0].request.headers;
          expect(headers.get('my-header')).toBe('has-value');
          done();
        });
      })();
    });
  });
});
