# BeMaker

BeMaker is a web platform designed to provide custom web and mobile solutions for small businesses (SMEs). This repository contains the source code for the static landing page of BeMaker. The project uses standard web technologies to create a fast, accessible, and responsive user experience.

## Features
- **Responsive Design**: Designed to work seamlessly across mobile, tablet, and desktop viewports, with a specialized fluid grid for the Projects (Portfolio) section.
- **Custom Brand Identity**: Fully defined using CSS variables that can be modified to instantly update the site's entire color palette.
- **Modular Stylesheets**: CSS is separated into specific functionalities (variables, contact, carousel, etc.) for maintainability and built into a single minified file.

## Technologies Used
- HTML5
- CSS3 (Modular Architecture, CSS Grid, Flexbox)
- JavaScript (Vanilla JS, modular components like a Chatbot and animated Terminal UI)
- [CleanCSS](https://github.com/jakubpawlowicz/clean-css) (for minification)
- Prettier (for formatting)

## Development and Build Setup

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation
Clone the repository and install the necessary development dependencies:
```bash
npm install
```

### Build the CSS
When making changes to the CSS files inside the `css/` folder (such as `main.css` or `variables.css`), you must run the build script to compile and minify the CSS into `css/main.min.css`.

Run the following command:
```bash
npm run build:css
```

### Formatting
To automatically format the HTML, CSS, and JS code using Prettier, run:
```bash
npm run format
```

## Structure
- `index.html`: Main landing page for BeMaker.
- `portafolio.html`: Portfolio page displaying recent projects.
- `contacto.html`: Contact page with forms for inquiries.
- `kits.html`: Information on custom development kits.
- `css/`: Modular stylesheets (`main.css`, `variables.css`, etc.) and the compiled output (`main.min.css`).
- `js/`: Modular JavaScript files for UI logic.
- `img/`: Images and assets used across the site.
