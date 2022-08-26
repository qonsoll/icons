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
