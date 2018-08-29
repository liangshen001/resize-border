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
| attrabute     | desc    |
| -------       | :------:   |
| [resizeTop]   | The top size can change      |
| [resizeBttom] | The bottom size can change      |
| [resizeLeft]  | The left size can change      |
| [resizeRight] | The right size can change      |
| [minHeight]   | The minimum height that can be changed can also be configured with CSS min-height      |
| [minWidth]    | ...      |
| [maxHeight]   | ...      |
| [maxWidth]    | ...      |
| [offset]      | Configure the drag distance of the mouse on the border|

## Contributers

