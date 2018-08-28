import {ElementRef, Injectable} from '@angular/core';

@Injectable()
export class ResizeBorderService {

    private cursorMap = new Map<any, string>();

    getCursorDir(ele: ElementRef, dir: string) {
        this.cursorMap.delete(ele.nativeElement);
        let has = false;
        // const has = new Array(this.cursorMap.values()).some(value => !!value);
        this.cursorMap.forEach((value, key) => {
            if (value) {
                has = true;
            }
        });
        this.cursorMap.set(ele.nativeElement, dir);
        return dir ? dir : (has ? null : '');
    }


    /**
     * xxpx => xx
     * @param px
     */
    getPxValue(px) {
        return px ? +px.slice(0, -2) : 0;
    }

    /**
     * xxx-xxx => xxxXxx
     * @param str
     */
    tranformStyle(str) {
        return str.split('-').map(item => item.charAt(0).toUpperCase() + item.substring(1)).join('');
    }



    minValue(value: number) {
        return !value || value < 10 ? 10 : value;
    }
}
