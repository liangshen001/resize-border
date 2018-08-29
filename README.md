# ResizeBorder v6.0.0

Angular v6 component

You can define an element such as a div that can be resized


[Demo](https://liangshen001.github.io/resize-border/)

[https://stackblitz.com/github/liangshen001/resize-border](https://stackblitz.com/github/liangshen001/resize-border)

## Usage

```typescript
import {ResizeBorderModule} from 'resize-border';
```

Elements in a normal stream

```html
    <div resizeBorder
          [resizeBottom]="true"
          [resizeRight]="true"
          [minHeight]="50"
          [minWidth]="50">
         i am a common stream element
    </div>
 ```
 
 Floating element

```html
    <div style="float: right"
       resizeBorder
       [resizeBottom]="true"
       [resizeLeft]="true"
       [minHeight]="50"
       [minWidth]="50">
      i am a right float element
    </div>
```

Positioned element

```html
    <div style="position: absolute"
       resizeBorder
       [resizeTop]="true"
       [resizeBottom]="true"
       [resizeLeft]="true"
       [resizeRight]="true"
       [minHeight]="50"
       [minWidth]="50">
      i am a absolute element
    </div>
```

## Contributers

wangliang520wl@hotmail.com

