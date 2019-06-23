Webpack built to support:

Requirements met:

Common:
es6+ (babel)
autoprefix
asset handling: images (gif, png, jpg, jpeg) / fonts / svg / iconfonts? / css|sass / js|jsx
optimisation of assets: svg (remove bulk), css (minification, autoprefix), js (minification)
html template generation & asset insertion (favicons, meta data, js & css)

Prod:
Tree Shaking
Minify
Favicon generation

Dev:
stylelint
eslint
sourcemaps
hot module replacement - react


After clone & npm install run npm start.
You should get 2 CLI warnings. 1 scss & 1 js based. This is evidence that linting is working for both asset types.
Check that dev server starts.
HTML template generation is working if "Matte Fletcher | Boilerplate react Build" shows.
Template literal is working if 'Look an es6 template literal' is on screen.
Click 'Like me' to test that react is working.
4 images demonstrate inline imgs, 3 other img types (gif, jpg, jpeg)
Behance logo demonstrates inline svgs. Check inline svg for how clean it is (ie svg should be striped of bulky code)
Check sourcemaps are working via inspect element.
Check autoprefixer is working. See background gradient on body tag in inspect element.
Stop dev server.
Start production build. npm run build.
Dist directory should be created at route.
Check all asset types are in dist folder (js, css, png, gif, jpeg, favicons)
Search in bundle.js for "cube", there should be at least 1 instance of this function. Now search for "square", there should be zero instances of this function. This is evidence that tree shaking is working. See src/components/example_components/math.jsx to show square is being exported but not included in prod bundle.js build.
Search in dist/styles.js for webkit or other prefix assumptions to ensure autoprefixer is working at a prod build level.


currently up to here: https://webpack.js.org/guides/production/