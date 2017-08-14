import { AppComponent } from './app.component';

describe('AppComponent Isolated Test ', () => {
    it('should have a default title', () => {
        const sut = new AppComponent();
        expect(sut.title).toBe('app');
    });
});
