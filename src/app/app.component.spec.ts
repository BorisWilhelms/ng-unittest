import { by } from 'protractor';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

// 'describe' defines the test suite.
describe('AppComponent Angular Test', () => {

  // beforeEach will be execute before each spec.
  beforeEach(async(() => {
    // creates and configures an Angular testing module
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  // 'it' defines a spec.
  it('should create the app', async(() => {
    // 'createComponent' creates an instance the component to test
    // after 'createComponent' TestBed is 'sealed' and can not be changed.
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    // 'detectChanges' triggers Angular change detection.
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
