# ResizeBorder v6.0.0

Angular v6

[Demo](https://liangshen001.github.io/resize-border/)

[https://stackblitz.com/github/liangshen001/resize-border](https://stackblitz.com/github/liangshen001/resize-border)

## Usage

```typescript
import {ResizeBorderModule} from 'resize-border';
```

```html
    <div resizeBorder
          [resizeBottom]="true"
          [resizeRight]="true"
          [minHeight]="50"
          [minWidth]="50">
         i am a common stream element
    </div>
 ```

```html
    <div style="position:absolute"
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

