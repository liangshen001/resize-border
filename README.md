# ResizeBorder v1.0.2

Angular v6 component

You can define an element such as a div that can be resized


[Demo](https://liangshen001.github.io/resize-border/)

[https://stackblitz.com/github/liangshen001/resize-border](https://stackblitz.com/github/liangshen001/resize-border)

## Installation

`npm install --save resize-border`

## Usage

```typescript
import {ResizeBorderModule} from 'resize-border';
```

```css
div {
    text-align: center;
    width: 200px;
    height: 200px
}
.stream-element {
    background: red;
}
.absolute-element {
    position: absolute;
    top: 300px;
    right: 300px;
    background: blue;
}
.float-element {
    float: right;
    background: aqua;
}
```

Elements in a normal stream

```html
<div class="stream-element"
     resizeBorder
     [resizeBottom]="true"
     [resizeRight]="true"
     [minHeight]="50"
     [minWidth]="50">
    i am a common stream element
</div>
 ```
 
 Floating element

```html
<div class="float-element"
     resizeBorder
     [resizeBottom]="true"
     [resizeLeft]="true"
     [minHeight]="50"
     [minWidth]="50"
     [maxHeight]="300"
     [maxWidth]="300">
    i am a float element
</div>
```

Positioned element

```html
<div class="absolute-element"
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


| attribute     | desc    |
| -------       | :------:   |
| [resizeTop]   | The top size can change, default is false      |
| [resizeBttom] | The bottom size can change, default is false      |
| [resizeLeft]  | The left size can change, default is false      |
| [resizeRight] | The right size can change, default is false      |
| [minHeight]   | The minimum height that can be changed can also be configured with CSS min-height      |
| [minWidth]    | ...      |
| [maxHeight]   | ...      |
| [maxWidth]    | ...      |
| [offset]      | Configure the drag distance of the mouse on the border, default is 8px|


`note: To facilitate the operation of the minHeight and minWidth property, try to set it to be larger than 8px`

## Contributers


wangliang520wl@hotmail.com

