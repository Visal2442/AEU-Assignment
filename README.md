# AEU-G7-COMPUTER-SITE

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Run and Compile SASS](#run-and-compile-sass)
- [Usage](#usage)
  - [HTML Integration](#html-integration)
  - [Bootstrap Integration](#bootstrap-integration)
  - [Custom SASS](#custom-sass)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

---

## Introduction

This project is an **Computer site** built using **Bootstrap 5**, **SASS**, and **HTML**. It demonstrates how to integrate custom SASS styles with Bootstrap to create a flexible, responsive, and interactive Computer site.

---

## Features

- Fully responsive layout with Bootstrap 5.
- SASS integration for modular and reusable styles.
- Customized Bootstrap components using variables and mixins.
- Easy-to-extend project structure.

---

## Technologies Used

- **Bootstrap 5.3.3**: A popular front-end framework for responsive designs.
- **SASS**: A powerful CSS preprocessor for managing styles efficiently.
- **Node.js**: For managing dependencies with npm.
- **HTML5**: The backbone of the project.

---

## Project Structure

```
project/
├── public/                    # Deployment-ready files
│   ├── css/                   # Compiled CSS files
│   │   ├── main.css           # Compiled main SASS file
│   │   ├── custom.css         # Compiled custom SASS file
│   ├── js/                    # JavaScript files
│   │   ├── main.js            # Main JavaScript file
│   ├── images/                # Image assets
│   ├── index.html             # Main HTML file
│   ├── about.html             # Example subpage
├── sass/                      # Source SASS files
│   ├── main.scss              # Main SASS entry file
│   ├── custom.scss            # Custom SASS file
│   ├── components/            # SASS partials for modular styles
│   │   ├── _header.scss       # Header-specific styles
│   │   ├── _footer.scss       # Footer-specific styles
│   │   ├── _buttons.scss      # Button styles
│   │   ├── _variables.scss    # SASS variables and mixins
│   │   ├── _utilities.scss    # Utility classes
├── node_modules/              # Dependencies (Bootstrap, etc.)
├── package.json               # npm configuration
├── package-lock.json          # Dependency lock file
├── README.md                  # Project documentation
├── bs-config.json             # Configuration for lite-server

```

---

## Getting Started

### Prerequisites

Ensure you have the following tools installed:

- **Node.js** (v16 or later)
- **npm** (comes with Node.js)
- **SASS** (CLI or as an npm package)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Run and Compile SASS

To watch and compile your SASS files into CSS automatically, run:

```bash
npm run start
```

This will watch the `sass/` folder and output the compiled CSS files into the `public/css/` folder.

---

## Usage

### HTML Integration

Include the compiled CSS file in your `index.html`:

```html
<link rel="stylesheet" href="css/main.css" />
```

### Bootstrap Integration

Bootstrap is included via npm. To use Bootstrap JavaScript, include the following scripts at the end of your `<body>` tag index:

```html
<script src="../node_modules/@popperjs/core/dist/umd/popper.min.js"></script>
<script src="../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
```

Subpage like about, service, product:

```html
<script src="../../node_modules/@popperjs/core/dist/umd/popper.min.js"></script>
<script src="../../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
```

### Custom SASS

Customize styles using SASS variables, mixins, and partials. Import Bootstrap SCSS and your custom SASS in the `main.sass` file:

```scss
@import "../node_modules/bootstrap/scss/functions";
@import "../node_modules/bootstrap/scss/bootstrap";
@import "components/verible";
@import "components/mixin";

body {
  @include body(300vh);
  @include responsiveSize(big) {
    height: 170vh;
  }
}
```

---

## Scripts

### Available npm Scripts

- **`npm install`**: Install dependencies.
- **`npm run sass`**: Watch and compile all SASS files in the `sass/` folder to the `css/` folder.
- **`npm run serve`**: Starts the server to serve the public folder
- **`npm run start`**: Runs both sass and serve scripts in parallel.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feat/your-feature-name`).
3. Commit your changes (`git commit -m 'feat(your-feature-name): your description'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

---

## License

This project is licensed under the Group 7 (AEU) School. Contact us for more detail
