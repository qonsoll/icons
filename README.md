# [@qonsoll/icons](https://www.npmjs.com/package/@qonsoll/icons)

## Install

### Install dependencies

```bash
npm install --save @qonsoll/react-design
```

or

```bash
yarn add @qonsoll/react-design
```

### Install library

```bash
npm install --save @qonsoll/icons
```

or

```bash
yarn add @qonsoll/icons
```

## Usage

### How to import component?

```jsx
import { Icon } from '@qonsoll/icons'

function App() {
  return <Icon name="BookmarkAddOutlined" />
}
```

## Documentation

### [Storybook](https://qonsoll.github.io/icons/?path=/story/example-icon--all-icons)

## Configuration

You can configure qonsoll/icons props using

```jsx
import { Icon } from '@qonsoll/icons'

function App() {
  return <Icon name="BookmarkAddOutlined" size="24px" fill="#6648bf" />
}
```

| Key         | Default               | Notes                           |
| ----------- | --------------------- | ------------------------------- |
| `fill`      | `black`               | `Inlined icons #424851`         |
| `size`      | `24px`                | `Inlined icons 16px`            |


## How to update package step-by-step

### You can write in terminal ```run storybook```, and see all changes on Storybook

1. Add file.svg to src/icons/(Filled/Outline)
2. Next create new IconComponent
    1. Go to src/components/SvgComponents(Filled/Outline)
    2. Create new IconComponent with two props: size, fill
        1. Add in return all content from file.svg (svg, path)
            1. Outline icons - change stroke="black" -> stroke={fill}
            2. Filled icons - change fill="black" -> fill={fill}
    3. open index.js inside (src/components/SvgComponents(Filled/Outline))
        1. import Icon(Filled/Outlined) from "./IconComponent"
        2. export {...IconComponents, Icon(Filled/Outlined) }
        3. export default {...IconComponents, Icon(Filled/Outlined) }
    4. Go to src/components/index.js
        1. import {...IconComponents, Icon(Filled/Outlined } from "./IconFolder"
        2. export {...IconComponents, Icon(Filled/Outlined) }
    5. Go to src/constants/iconPropTypes.js
        1. update PROP_TYPES.name, with new IconComponent
    6. Go to src/constants/namesMap.js
        1. import {...IconComponents, Icon(Filled/Outlined} from "../components/SvgComponents(Filled/Outline)"
        2. const ICONS_NAMES = {...IconComponents, Icon(Filled/Outlined): <Icon(Filled/Outlined) />}
