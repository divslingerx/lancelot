# monorepo

This is a Frontend monorepo template for NextJS applications.

Supports:

- Create NextJS Apps / React Libraries and shared TS modules
- Shared TypeScript / ESLint / Prettier configs
- Global and per Application Storybook
- Global and per Application Start / Stop
- Global and per Application / Shared Module Tests

## Start

```
$ yarn
$ yarn test
$ yarn start

$ open http://localhost:3000/template
```

## To create new Application / Shared Module

```
$ yarn generate
```

And follow the prompts

## Storybook

Global Storybook

```
$ yarn storybook
```

Local Application Storybook

```
$ yarn workspace @lancelot/template storybook
```

## Tests

Run all tests

```
$ yarn test
```

Run Application / Shared Module only tests

```
$ yarn workspace @lancelot/template test

$ yarn workspace @lancelot/functions test
```

## Running Applications

To run all applications on SSG mode (no dev mode)

```
$ yarn start
```

To run all applications using dev mode for some

```
$ yarn start --dev template
```

_(You can now make changes to the @lancelot/template application and see changes hot reloading on the browser)_

To stop all applications

```
$ yarn stop
```

## Change repository organization.

If you want to make this repo yours start by using the `change-org` script.

```
$ yarn change-org --from @lancelot --to @yourcompany
```
