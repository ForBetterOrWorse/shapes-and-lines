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

## Publishing

Note: If the new changes require documentation updates (`README.md` specifically), be sure to make the documentation changes before the package release. Otherwise, the `README.md` changes won't be reflected on the NPM package page ([ref](https://docs.npmjs.com/about-package-readme-files)).

Steps to publish a new package version:

- Run `pnpm version [new-version]`. The command will automatically bump the package version and commit the change
- Create a PR with the version bump
- Merge the PR into `main`
- On the local environment, ensure the `main` branch is up-to-date
- Run `pnpm build` to build the package
- Run `pnpm publish --dry-run` to verify the package content
- Run `pnpm publish` to publish the package
