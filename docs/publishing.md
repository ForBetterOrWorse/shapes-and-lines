# Publishing

Note: If the new changes require documentation updates (`README.md` specifically), be sure to make the documentation changes before the package release. Otherwise, the `README.md` changes won't be reflected on the NPM package page ([ref](https://docs.npmjs.com/about-package-readme-files)).

Steps to publish a new package version:

- Run `pnpm version [new-version]`. The command will automatically bump the package version and commit the change
- Create a PR with the version bump
- Merge the PR into `main`
- On the local environment, ensure the `main` branch is up-to-date
- Run `pnpm publish --dry-run` to verify the package content
- Run `pnpm publish` to publish the package
