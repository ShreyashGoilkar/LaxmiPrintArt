# Laxmi Print Art

A colorful, responsive single-page website for Laxmi Print Art, a printing and stationery business in Singh Estate, Kandivali East, Mumbai.

## Preview

Open the project in Bolt or run the existing preview/build workflow. The page is frontend-only and does not need a database, login, server, API key or payment setup.

## Main features

- Responsive navigation with mobile menu
- Phone and pre-filled WhatsApp buttons
- Service enquiry buttons with relevant WhatsApp messages
- Custom printing enquiry form with required-field validation
- Gallery grid with enlarged demo previews
- Accessible labels, focus states and reduced-motion support
- Static-friendly links and assets suitable for GitHub Pages

## Adding the real photographs

The current gallery uses clearly labeled demo artwork made from CSS, so there are no broken image paths. When the business photographs are ready, the easiest replacement is to add them under `assets/images/` and replace the matching gallery tile in `src/App.tsx` with an `<img>` using a relative path such as `assets/images/visiting-cards.jpg`.

Recommended names:

- `shop-front.jpg` — shop photograph
- `visiting-cards.jpg` — visiting cards
- `stationery.jpg` — stationery display
- `banner-flex.jpg` — banner or flex work
- `wedding-invitation.jpg` — invitation printing
- `brochure.jpg` — brochures or printed layouts

Keep the files reasonably sized, use descriptive alt text, and keep each image inside the existing gallery tile so the layout remains consistent.

## Editing the website

- Update business wording, categories and contact text in `src/App.tsx`.
- Update colors, spacing and responsive styling in `src/index.css`.
- The phone number and WhatsApp number are kept together near the top of `src/App.tsx` so they can be changed consistently if needed.
- Opening hours and map location are intentionally labeled placeholders until the verified details are available.

## GitHub Pages

1. Create a public GitHub repository.
2. Upload the project files, including `package.json`, `src`, `index.html` and this README.
3. In the repository settings, open **Pages**.
4. Choose the GitHub Actions deployment option for a Vite project, or use the repository's existing static-site workflow.
5. After publishing, open the generated Pages address.

If the repository is not served from the domain root, configure the Vite base path to match the repository name before publishing. All phone and WhatsApp links are external; the page itself remains static.

## Updating the live site

Edit the files, upload the changes to GitHub, and GitHub Pages will publish the new version through the selected deployment workflow.
