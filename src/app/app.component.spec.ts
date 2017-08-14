import { by } from 'protractor';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent Angular Test', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    })
      .compileComponents()
      .then(() => {
        // 'this' is shared across beforeEach, it and afterEach
        // 'this' will be reseted after 'afterEach'
        this.fixture = TestBed.createComponent(AppComponent);
        this.app = this.fixture.debugElement.componentInstance;
      });
  }));

  // Alternative to Promise.then
  // beforeEach(() => {
  //   this.fixture = TestBed.createComponent(AppComponent);
  //   this.app = this.fixture.debugElement.componentInstance;
  // });

  it('should create the app', async(() => {
    expect(this.app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    expect(this.app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = this.fixture;
    // 'detectChanges' triggers Angular change detection.
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
