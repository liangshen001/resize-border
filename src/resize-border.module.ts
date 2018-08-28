import {NgModule} from '@angular/core';
import {ResizeBorderDirective} from './resize-border.directive';
import {ResizeBorderService} from './resize-broder.service';

@NgModule({
    declarations: [
        ResizeBorderDirective
    ],
    imports: [

    ],
    providers: [
        ResizeBorderService
    ],
    exports: [
        ResizeBorderDirective
    ]
})
export class ResizeBorderModule {
}
