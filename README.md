# Welcome to FamCon Remix 📀!

FamCon helps you keep track of your WhatsApp-based Family Welfare Contributions. No more manual calculations, no more missed contributions, and annoying reminders. FamCon is here to help you keep track of your contributions and make sure you're always on top of your game.

## Technologies Used

-   [Remix Framework](https://remix.run): For building modern web applications.
-   [Drizzle ORM](https://orm.drizzle.team/): ORM tool for database interactions.
-   [Flowbite](https://flowbite.com/): UI toolkit for user interface components.
-   [Conform](https://conform.guide/integration/remix): Tool for creating and managing web forms.
-   [Zod](https://zod.dev/): Library for data validation.
-   [Vitest](https://vitest.dev/): Framework for unit testing.
-   [React Testing Library (RTL)](https://testing-library.com/docs/react-testing-library/intro): For testing React components.
-   [Playwright](https://playwright.dev/): For end-to-end UI Testing.
-   [SQLite](https://www.sqlite.org/): Minimalistic database for development and testing.

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

-   `build/`
-   `public/build/`
