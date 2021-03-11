# Wikibase-edit sample browser extension

Basic browser extension using [maxlath's wikibase-edit](https://github.com/maxlath/wikibase-edit/)

## Preparation
1. Clone repo
2. Run `npm install`
3. Everything is hard-coded. Edit `main.js` to use your Wikidata credentials.
4. Run `npm run build`

## Usage
### In Firefox
1. Go to about:addons
2. Click on the little gear and choose "Debug Add-ons"
3. Click "Load Temporary Add-on"
4. Choose this repo's `manifest.json` file
5. Click on "Inspect" next to "wikibase-edit-extension" to debug the extension.
6. To run the edit hardcoded in `main.js`, click on the extension's button.

Each time you make a change to `main.js`:

1. Run `npm run build` again
2. "Reload" the wikibase-edit-extension addon in the "Debug Add-ons" page.

### In Chrome
1. Go to chrome://extensions/
2. Click on "Load unpacked"
3. Chooe this repo's folder
4. Click on "Inspect views background page" to debug the extension
6. To run the edit hardcoded in `main.js`, click on the extension's button.

Each time you make a change to `main.js`:

1. Run `npm run build` again
2. "Reload" the wikibase-edit-extension addon in Extensions page.
