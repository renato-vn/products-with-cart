# Desserts Shop

A responsive dessert shop interface built with React, TypeScript, Zustand, and Tailwind CSS.  
Users can browse a catalog of desserts, add or remove items from a cart, see the order total in real time, and confirm their order via a modal dialog.

## Features

- Responsive layout for mobile, tablet, and desktop
- Dessert catalog with product images, categories, names, and prices
- Add / remove items from the cart with quantity controls
- Cart summary with item list, quantities, and order total
- LocalStorage persistence for the cart state
- Order confirmation modal with overlay and click‑outside‑to‑close behavior
- Clean component structure and state management with Zustand

## Tech Stack

- **React** + **TypeScript**
- **Vite** (or your chosen bundler, adjust if needed)
- **Tailwind CSS** for styling and responsive layout
- **Zustand** for global state (cart and products)
- **ESLint / Prettier** (optional, if configured)

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- pnpm / npm / yarn installed globally

### Installation

#### Clone The Repo

```
git clone https://github.com/renato-vn/products-with-cart.git
```

#### Install Dependencies

`pnpm install `

or

`npm install`

or

`yarn`

### Development

`pnpm dev`

or

`npm run dev`

or

`yarn dev`

Then open the URL shown in the terminal (usually `http://localhost:5173` or `http://localhost:3000` depending on your setup).
