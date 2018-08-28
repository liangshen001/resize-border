import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';
import {ResizeBorderService} from './resize-broder.service';


@Directive({
    selector: '[resizeBorder]'
})
export class ResizeBorderDirective implements OnInit {
    @Input()
    offset = 8;

    @Input()
    resizeTop: boolean;
    @Input()
    resizeBottom: boolean;
    @Input()
    resizeLeft: boolean;
    @Input()
    resizeRight: boolean;

    _maxHeight: number;

    @Input()
    set maxHeight(value: number) {
        this._maxHeight = value;
        if (this.element.nativeElement.clientHeight > value) {
            this.renderer.setStyle(this.element.nativeElement, 'height', `${value}px`);
        }
    }
    get maxHeight() {
        return this._maxHeight;
    }

    _maxWidth: number;

    @Input()
    set maxWidth(value: number) {
        this._maxWidth = value;
        if (this.element.nativeElement.clientWidth > value) {
            this.renderer.setStyle(this.element.nativeElement, 'width', `${value}px`);
        }
    }
    get maxWidth() {
        return this._maxWidth;
    }

    _minWidth: number;

    _minHeight: number;

    get minHeight() {
        return this._minHeight;
    }

    @Input()
    set minHeight(value: number) {
        this._minHeight = this.resizeBorderService.minValue(value);
        if (this.element.nativeElement.clientHeight < value) {
            this.renderer.setStyle(this.element.nativeElement, 'height', `${value}px`);
        }
    }

    get minWidth() {
        return this._minWidth;
    }

    @Input()
    set minWidth(value: number) {
        this._minWidth = this.resizeBorderService.minValue(value);
        if (this.element.nativeElement.clientWidth < value) {
            this.renderer.setStyle(this.element.nativeElement, 'width', `${value}px`);
        }
    }
    private client?: {clientX, clientY};
    private dir: string;

    constructor(private element: ElementRef,
                private renderer: Renderer2,
                private resizeBorderService: ResizeBorderService) {
    }

    ngOnInit(): void {
        this.styleValue('min-height');
        this.styleValue('min-width');
        this.styleValue('max-height');
        this.styleValue('max-width');
    }

    private styleValue(styleName: string) {
        const pxValue = this.element.nativeElement.style[this.resizeBorderService.tranformStyle(styleName)];
        const value = this.resizeBorderService.getPxValue(pxValue);
        this.renderer.setStyle(this.element.nativeElement, styleName, '');
        if (value) {
            this[this.resizeBorderService.tranformStyle(styleName)] = value;
        }
    }

    @HostListener('document:mousedown', ['$event'])
    mousedown(event) {
        const dir = this.getDirection(event);
        if (!dir) {
            return;
        }
        this.client = event;
        event.returnValue = false;
        event.cancelBubble = true;
    }

    @HostListener('document:mouseup')
    mouseup() {
        this.client = null;
    }

    @HostListener('document:mousemove', ['$event'])
    mousemove(event) {
        let dir1 = this.getDirection(event);
        dir1 = this.resizeBorderService.getCursorDir(this.element, dir1);
        if (dir1 != null && !this.client) {
            this.dir = dir1;
            this.renderer.setStyle(event.srcElement, 'cursor', this.dir ? `${this.dir}-resize` : 'default');
        }

        if (!this.client) {
            return;
        }

        const el = this.element.nativeElement;

        const newClient = {
            clientX: event.clientX,
            clientY: event.clientY
        };
        const isAbsolute = window.getComputedStyle(this.element.nativeElement, null).position === 'absolute';
        if (this.dir.indexOf('e') !== -1 || this.dir.indexOf('w') !== -1) {
            let offsetX = event.clientX - this.client.clientX;
            // 计算规则是否相反 为n的时候是算法是反的为-1
            const ver = this.dir.indexOf('w') !== -1 ? -1 : 1;
            let changedWidth = el.offsetWidth + ver * offsetX;
            if (this.minWidth && this.minWidth > changedWidth) {
                changedWidth = this.minWidth;
                offsetX = ver * (changedWidth - el.offsetWidth);
                const {left, width} = this.element.nativeElement.getBoundingClientRect();
                newClient.clientX = this.dir.indexOf('w') !== -1 ? left + width - this.minWidth : left + this.minWidth;
            } else if (this.maxWidth && this.maxWidth < changedWidth) {
                changedWidth = this.maxWidth;
                offsetX = ver * (this.maxWidth - el.offsetWidth);
                const {left, width} = this.element.nativeElement.getBoundingClientRect();
                newClient.clientX = this.dir.indexOf('w') !== -1 ? left + width - this.maxWidth : left + this.maxWidth;
            }
            this.renderer.setStyle(this.element.nativeElement, 'width', `${changedWidth}px`);
            if (this.dir.indexOf('w') !== -1 && isAbsolute) {
                const left = el.offsetLeft - this.resizeBorderService.getPxValue(el.style.marginLeft) + offsetX;
                this.renderer.setStyle(el, 'left', `${left}px`);
            }
        }
        if (this.dir.indexOf('n') !== -1 || this.dir.indexOf('s') !== -1) {
            let offsetY = event.clientY - this.client.clientY;
            // 计算规则是否相反 为n的时候是算法是反的为-1
            const ver = this.dir.indexOf('n') !== -1 ? -1 : 1;
            let changedHeight = el.offsetHeight + ver * offsetY;
            if (this.minHeight && this.minHeight > changedHeight) {
                changedHeight = this.minHeight;
                offsetY = ver * (this.minHeight - el.offsetHeight);
                const {top, height} = this.element.nativeElement.getBoundingClientRect();
                newClient.clientY = this.dir.indexOf('n') !== -1 ? top + height - this.minHeight : top + this.minHeight;
            } else if (this.maxHeight && this.maxHeight < changedHeight) {
                changedHeight = this.maxHeight;
                offsetY = ver * (this.maxHeight - el.offsetHeight);
                const {top, height} = this.element.nativeElement.getBoundingClientRect();
                newClient.clientY = this.dir.indexOf('n') !== -1 ? top + height - this.maxHeight : top + this.maxHeight;
            }
            this.renderer.setStyle(this.element.nativeElement, 'height', `${changedHeight}px`);
            if (this.dir.indexOf('n') !== -1 && isAbsolute) {
                const top = el.offsetTop - this.resizeBorderService.getPxValue(el.style.marginTop) + offsetY;
                this.renderer.setStyle(el, 'top', `${top}px`);
            }
        }
        this.client = newClient;
        event.returnValue = false;
        event.cancelBubble = true;
    }

    getDirection({clientX, clientY}: MouseEvent) {
        const {left, width, top, height} = this.element.nativeElement.getBoundingClientRect();
        let dir = '';
        if (clientX > left - this.offset && clientX < left + width + this.offset) {
            if (this.resizeTop && Math.abs(clientY - top) <= this.offset) {
                dir += 'n';
            } else if (this.resizeBottom && Math.abs(clientY - top - height) <= this.offset) {
                dir += 's';
            }
        }
        if (clientY > top - this.offset && clientY < top + height + this.offset) {
            if (this.resizeLeft && Math.abs(clientX - left) <= this.offset) {
                dir += 'w';
            } else if (this.resizeRight && Math.abs(clientX - left - width) <= this.offset) {
                dir += 'e';
            }
        }
        return dir;
    }

}
