import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {ResizeBorderModule} from '../../src/resize-border.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ResizeBorderModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
