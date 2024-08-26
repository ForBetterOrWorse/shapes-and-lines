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

```tsx
import {
  Shapes,
  CurvedLines,
  Polylines,
} from '@forbetterorworse/shapes-and-lines'

const MyApp = () => {
  return (
    <>
      <Shapes />
      <CurvedLines />
      <Polylines />
    </>
  )
}
```

## Development

### Tech Stack

The main tech this library uses:

- React
- React Icons
- Vite
- Storybook

### Setup

Steps to setup the project locally:

- Clone the repo
- Run `pnpm i` to install the dependencies
- Run `pnpm storybook` to start Storybook
