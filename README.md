# Gulp

Gulp template for frontend development.
This assembly includes:

- [Gulp](https://gulpjs.com/)
- [Pug](https://pugjs.org/api/getting-started.html)
- [JavaScript](https://javascript.info/)
- [jQuery](https://jquery.com/)
- [Babel](https://www.npmjs.com/package/gulp-babel)
- [SASS](https://www.npmjs.com/package/gulp-sass)
- [autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
- [browser-sync](https://www.npmjs.com/package/browser-sync)
- [uglify](https://www.npmjs.com/package/gulp-uglify)

* Fonts, images, settings to automatic pages compiler.

### Installation

Install dependencies:

```sh
$ npm install
```

For development environment:

```sh
$ npm start
```

For production environment:

```sh
$ npm run build
```

For remove production folder:

```sh
$ npm run clear
```
### Structure

```bash
.gulp-template
├── dest                            # production folder
├── src                             # dev folder
│   │── assets
│   │   ├─ fonts                    # fonts
│   │   ├─ libs
│   │   │   ├── css
│   │   │   │   ├── libs            # css libs (Example: Bootstrap, owl2)
│   │   │   │   └── libs.min.css    # minify css libs
│   │   │   └── js
│   │   │       ├── libs            # js libs (Example: Bootstrap, owl2)
│   │   │       └── libs.min.js     # minify js libs
│   │   └──img                      # images
│   ├── css                         # production css
│   ├── js
│   │   ├── src                     # src folder for js files
│   │   └── scripts.min.js          # concat minify js file
│   ├── pug
│   │   ├── components              # folder for components (Example header.pug, ..., footer.pug)
│   │   └── index.pug               # main pug file
│   ├── sass
│   │   ├── components              # folder for blocks
│   │   │   └── header.sass         # (Example header.sass, ..., footer.sass)
│   │   ├── _fonts._sass            # import fonts
│   │   └── style.sass              # main sass file
│   └── index.html                  # concat .pug files
├── gulpfile.js                     # main config for gulp
└── package.json                    # config json
```

### Fonts installation

- Open 'src' -> 'assets' -> 'fonts'
- Put fonts that you want in folder
- Format **eot**, **ttf**, **woff**
- Open \_fonts.sass file in folder 'sass'
- @font-face your fonts as in example with font 'Roboto'
