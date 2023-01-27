# E-commerce Store

Simple single page application which has the following
components:

1. Collections menu.
2. Glasses view.

## Getting Started

Run the project using the following steps:

- Rename file with environment variables and fill necessary one

```sh
mv .env-dist .env
```

- Install all dependencies

```sh
npm i
```

- Start the server

```sh
npm run start
```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project structure

The project code base is mainly located within the `src` folder. This folder is divided in:

- `app` - containing business logic for the entire project
  - `hooks` - containing usage of specific reusable features
  - `components` - containing components in the context of business logic
- `components` - containing independent and reusable components
- `context` - containing usage of state management Context API
- `hooks` - containing usage of general and specific reusable features
- `services` - containing abstractions for external services and utils
- `styles` - containing global styles and imports of external css libraries
- `types` - containing common data types for the entire project

## Preview

<div style="display:flex; justify-content: center;">
    <img src="./preview.jpg" style="max-width: 700px;" />
</div>

## Tech Stack

- [CRA](https://create-react-app.dev/) - is an officially supported way to create single-page React applications. It offers a modern build setup with no configuration.
- [Typescript](https://www.typescriptlang.org/) - is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- [styled-components](https://styled-components.com/) - using the best bits of ES6 and CSS to style your apps.

## Developed and tested on

- NodeJS v16.17.0
- NPM v9.2.0
- macOS Ventura v.13.1

## What's next?

- Refactor sidebar menu, fix tiny bugs on mobile version
- Implement filters (by shape and colour)
- Make Request/Success/Failure pattern for state management in hooks
- Markup Error Page
