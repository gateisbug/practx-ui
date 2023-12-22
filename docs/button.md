# Button
[back](./index.md)

## Usage
```tsx
import { Button } from '@practx/ui';

function App() {
  return (
    <Button
      varient={'fill'}
      disabled={false}
      fullWidth={false}
      onClick={() => {
        console.log('hello button');
      }}
    >
      Hello
    </Button>
  )
}
```

## Properties
| Props       | Type                       | Default     |
|-------------|----------------------------|-------------|
| `varient`   | `'fill'` `'line'` `'text'` | `'fill'`    |
| `disabled`  | `boolean`                  | `false`     |
| `fullWidth` | `boolean`                  | `false`     |
| `className` | `string`                   | `undefined` |
| `style`     | `CSSProperties`            | `undefined` |
| `onClick`   | `function`                 | `undefined` |
| `children`  | `ReactNode`                | `undefined` |

## CSS Variable
| Variable          | Property                                   | Default       |
|-------------------|--------------------------------------------|---------------|
| `--padding`       | `padding`                                  | `0.5rem 1rem` |
| `--radius`        | `border-radius`                            | `0.25rem`     |
| `--primary`       | `color` `background-color` `outline-color` | `#ffb74d`     |
| `--on-primary`    | `color`                                    | `#1c2025`     |
| `--disabled`      | `background-color` `outline-color`         | `#e0e0e0`     |
| `--on-disabled`   | `color`                                    | `#bdbdbd`     |
| `--primary-hover` | `color` `background-color` `outline-color` | `#b28035`     |

## Selector
| Class Name   | HTML Tag |
|--------------|----------|
| `prx-button` | `button` |
