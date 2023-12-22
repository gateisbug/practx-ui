# Radio
[back](./index.md)

## Usage
```tsx
import { Radio } from '@practx/ui';

function App() {
  return (
    <Radio name='text' disabled={false} checked={true} value='hello'>
      Hello
    </Radio>
  )
}
```

## Properties
| Props       | Type            | Default     |
|-------------|-----------------|-------------|
| `value`     | `string`        | `undefined` |
| `name`      | `string`        | `undefined` |
| `checked`   | `boolean`       | `undefined` |
| `disabled`  | `boolean`       | `false`     |
| `children`  | `ReactNode`     | `undefined` |
| `className` | `string`        | `undefined` |
| `style`     | `CSSProperties` | `undefined` |

## CSS Variable
| Variable     | Property | Default   |
|--------------|----------|-----------|
| `--default`  | `color`  | `#666666` |
| `--disabled` | `color`  | `#bdbdbd` |
| `--primary`  | `color`  | `#ffb74d` |

## Selector
| Class Name        | HTML Tag |
|-------------------|----------|
| `prx-radio-box`   | `label`  |
| `prx-radio-root`  | `input`  |
| `prx-radio-mark`  | `div`    |
