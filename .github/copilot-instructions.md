# Copilot Custom Instructions

## Project Architecture

This is a React component library for randomly generating shapes and lines using SVG. The library provides three main components (`Shapes`, `CurvedLines`, `Polylines`) that render randomized visual elements.

**Key architectural patterns:**
- **Component composition:** Each high-level component (`Shapes`, `CurvedLines`, `Polylines`) renders multiple instances of lower-level components (`Shape`, `CurvedLine`, `Polyline`)
- **Randomization utilities:** All randomization logic is centralized in `src/randomizers.ts` using lodash utilities and Turf.js for geometric calculations
- **Type-safe constants:** Shape types and colors are defined as `const` arrays in `src/constants.ts` and converted to union types using `(typeof CONSTANT)[number]`

## Component Development Patterns

- **Barrel exports:** Each component directory has an `index.ts` that re-exports the main component and its types
- **Storybook integration:** Every component has a corresponding `.stories.tsx` file with `Default` and configuration examples
- **CSS Modules:** Use `.module.css` files for component-specific styles (see `shapes.module.css`)
- **Props interfaces:** Export TypeScript interfaces for all component props (e.g., `ShapesProps`, `CurvedLinesProps`)

## Key Dependencies & Utilities

- **Turf.js:** Used for geometric calculations (polygon validation, self-intersection detection)
- **Lodash:** Essential for randomization (`sample`, `shuffle`) and array manipulation
- **react-icons/fi:** Provides Feather icons for shape rendering (`FiCircle`, `FiSquare`, `FiTriangle`)

## Build & Development Workflow

```bash
pnpm run build        # TypeScript compilation + Vite library build
pnpm run storybook    # Development server on port 6006
pnpm run lint         # ESLint with TypeScript rules
pnpm run typecheck    # TypeScript compilation check
```

**Build configuration:** Vite builds as ES module library with CSS injection and TypeScript declarations merged into single file via `rollupTypes: true`.

## Randomization System

The `randomConfigValues()` function in `randomizers.ts` is the core distribution algorithm:
- Ensures all base constant values are used when `count ≤ baseConstant.length`
- Randomly samples additional values when `count > baseConstant.length`
- Always shuffles to prevent predictable ordering

## Commit Messages and PR Titles

- All commit messages and pull request titles **must follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification**.
- Use the format: `<type>[optional scope]: <description>`
- Example types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`
- Scope (optional): A noun describing the section affected (e.g., `shapes`, `curved-lines`, `build`)
- Description: A short, imperative summary of the change.