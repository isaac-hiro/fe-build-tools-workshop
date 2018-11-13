### Front-end build tools workshop repository

Repository meant for conducting a workshop about setting up Front-end build tools and frameworks including:
	
- Webpack with Hot Module Replacement
- Babel.js
- Typescript
- Sass
- Gulp.js
- ESLint, TSLint, SassLint

Check [presenter notes](docs/presenter-notes.md) for a detailed overview and step-by-step guide for the workshop.

In [docs](docs) folder you can also find workshop slideshow.

---

Install all dependancies:

```
npm install
```

Start http-server:

```
npm run server
```

Start Webpack Dev Server with Hot Module Replacement:

```
npm run hot
```

Navigate to `http://localhost:8080/` to see the app.

Change any `.ts, .tsx, .js, .jsx, .scss` file to see immediate changes without reload in the app.


To do production build:

```
npm run prod
```


To lint all files using Eslint, Tslint and Sass-lint:

```
npm run lint
```

