# Obakeng Data Portfolio

A professional, responsive portfolio website for Obakeng Shepherd Tsaagane, built with React and Vite.

## Run locally

1. Open a terminal in the project folder.
2. Install dependencies:
   npm install
3. Start the development server:
   npm run dev
4. Open the local URL shown in the terminal (typically http://localhost:5173).

## Build for production

npm run build

## Deploy to Netlify

1. Push this project to a GitHub repository.
2. In Netlify, click "Add new site" > "Import an existing project".
3. Connect the repository and select the project root.
4. Use the default build settings:
   - Build command: npm run build
   - Publish directory: dist
5. Deploy the site.

If you want to use the included configuration file, the project already contains `netlify.toml` for a standard static deployment setup.

## Update contact form

The contact form is configured to use Web3Forms. Replace the placeholder access key in `src/components/ContactForm.jsx` before deploying:

const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY'

## Archive note

Before replacing or deleting the previous portfolio version, archive it on GitHub as a historical memento so the earlier work remains preserved and easy to reference later.
