# shapes-and-lines

As the name suggests, this is a library that provides shape and line components.

Available components:

- `Shapes`: renders multiple shapes that are placed randomly within a container
- `CurvedLines`: renders multiple random curved lines
- `Polylines`: renders multiple random polylines

Storybook page: https://forbetterorworse.github.io/shapes-and-lines/

## Usage

### Installation

To install the library in your project, run:

```bash
# npm
npm i @forbetterorworse/shapes-and-lines

# yarn
yarn add @forbetterorworse/shapes-and-lines

# pnpm
pnpm add @forbetterorworse/shapes-and-lines
```

### Using the components

The components can be used as follows:

```tsx
import {
  Shapes,
  CurvedLines,
  Polylines,
  Polygons,
} from '@forbetterorworse/shapes-and-lines'

const MyApp = () => {
  return (
    <>
      <Shapes />
      <CurvedLines />
      <Polylines />
      <Polygons />
    </>
  )
}
```

### Props interface

#### Shapes

| Prop         | Description                          | Required | Default |
| ------------ | ------------------------------------ | -------- | ------- |
| `shapeCount` | The number of shapes to be generated |          | 5       |

### CurvedLines

| Prop                     | Description                                    | Required | Default |
| ------------------------ | ---------------------------------------------- | -------- | ------- |
| `viewBoxWidth`           | The width of the container viewbox             |          | 200     |
| `viewBoxHeight`          | The height of the container viewbox            |          | 200     |
| `lineCount`              | The number of lines to be generated            |          | 2       |
| `hasRandomStrokeOpacity` | Whether each line gets a random stroke opacity |          | false   |

### Polylines

| Prop                     | Description                                    | Required | Default |
| ------------------------ | ---------------------------------------------- | -------- | ------- |
| `viewBoxWidth`           | The width of the container viewbox             |          | 200     |
| `viewBoxHeight`          | The height of the container viewbox            |          | 200     |
| `lineCount`              | The number of lines to be generated            |          | 2       |
| `hasRandomStrokeOpacity` | Whether each line gets a random stroke opacity |          | false   |

### Polygons

| Prop           | Description                            | Required | Default |
| -------------- | -------------------------------------- | -------- | ------- |
| `polygonCount` | The number of polygons to be generated |          | 1       |
