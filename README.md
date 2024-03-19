# React + Vite

### Link Github Pages :

-   https://alistairpiot.github.io/kasa-app/

### Project creation :

```bash
yarn create vite@latest
```

-   Framework => React
-   Variant => Javascript

## the various tools used for the project :

-   node => v20.11.0
-   yarn
-   sass
-   fontawesome

## React library :

-   prop-types
-   react-collapse
-   GitHub Pages

## Available Scripts

### Start the server

```bash
yarn run dev
```

### Sass installation

```bash
yarn add sass
```

-   Command to compile the sass into the css folder :

```bash
sass src/sass/main.scss src/assets/index.css
```

-   Command to watch the surveillance process :

```bash
sass --watch src/sass/main.scss src/assets/index.css
```

### Font Awesome installation

```bash
yarn add @fortawesome/fontawesome-svg-core
```

```bash
yarn add @fortawesome/free-solid-svg-icons
yarn add  @fortawesome/free-regular-svg-icons
yarn add @fortawesome/free-brands-svg-icons
```

```bash
yarn add @fortawesome/react-fontawesome@latest
```

### PropTypes installation

```bash
yarn add prop-types
```

### React Collapse installation

```bash
yarn add react-collapse
```

### GitHub Pages installation

```bash
yarn add gh-pages --dev
```

#### Add to the package.json file :

```bash
"homepage": "https://alistairpiot.github.io//OC-Projet-8/"
```

-   Add scripts :

```bash
"predeploy": "vite build",
"deploy": "gh-pages -d dist",
```

-   Now run the command :

```bash
yarn predeploy
```

-   And the command :

```bash
yarn deploy
```
