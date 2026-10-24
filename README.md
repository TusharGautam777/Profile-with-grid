# Butusic – Illustrations Exhibition

React + Vite + plain CSS3 recreation of the Butusic bento-style board.

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Structure
- `src/App.jsx` – layout and cards
- `src/components.jsx` – icons, SVG characters, QR, barcode, stars
- `src/App.css` – all styling (CSS grid, custom properties)

The characters are SVG drawings; swap the `<Character />` cards for your own images
(`<img src="/your-image.png" />` inside `.photo`) to match the original artwork.
