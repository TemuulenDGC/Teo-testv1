# Your Brand Name — Website

A minimalist, dark & gold personal brand + shop site. No build tools,
no frameworks — just HTML, CSS and JS, so it works directly on GitHub Pages.

## What's in here

```
index.html      -> Homepage (hero, about, featured products, contact)
shop.html       -> Full shop with category filters
css/style.css   -> All the styling (colors, fonts, layout)
js/products.js  -> YOUR PRODUCTS — edit this to add/remove items
js/main.js      -> Renders products onto the page (no need to edit)
```

## 1. Put this on GitHub Pages (one-time setup)

1. Go to [github.com](https://github.com) and log in (create a free account if needed).
2. Click the **+** icon top-right → **New repository**.
3. Name it `your-username.github.io` (replace `your-username` with your
   actual GitHub username, exactly — this specific name is what makes
   GitHub host it for free at that address). Set it to **Public**. Click **Create repository**.
4. On the new repository page, click **Add file → Upload files**.
5. Drag in every file and folder from this project (`index.html`,
   `shop.html`, the `css` folder, and the `js` folder), keeping the same
   folder structure. Click **Commit changes**.
6. Go to **Settings → Pages** (left sidebar). Under "Build and
   deployment", make sure **Source** is set to **Deploy from a branch**,
   branch **main**, folder **/ (root)**. Click **Save**.
7. Wait 1-2 minutes, then visit `https://your-username.github.io` —
   your site is live.

Any time you upload new/changed files the same way (Add file → Upload
files → Commit), the live site updates automatically within a minute or two.

## 2. Add or edit products (the main thing you'll do)

Open **`js/products.js`**. Each product looks like this:

```js
{
  name: "The Signature Tote",
  category: "Physical",
  price: "$68",
  description: "Hand-finished canvas, embossed monogram, made to order.",
  image: "",
  link: "#"
}
```

- **To add a product:** copy one whole block (from `{` to `}`), paste
  it above the final `];` at the bottom of the file, and edit the text.
  Don't forget a comma after each block except the very last one.
- **To remove a product:** delete its whole block.
- **category** must be exactly `"Physical"`, `"Digital"`, or `"Service"`
  (this is what the filter buttons on the shop page match against).
- **image:** paste a direct image link (ending in .jpg/.png/etc). Leave
  `""` and you'll get a clean placeholder monogram instead — totally
  fine to launch with.
- **link:** where clicking the product sends people to actually pay or
  book. Easiest no-code options:
  - [Stripe Payment Links](https://dashboard.stripe.com/payment-links) — for card payments
  - [Gumroad](https://gumroad.com) — great for digital products
  - [PayPal.me](https://paypal.me) — quick and simple
  - [Calendly](https://calendly.com) — for booking a service
  - `mailto:you@example.com` — to just receive an inquiry email

Save the file, re-upload it to GitHub the same way as before, and your
new product appears on both the homepage (if it's in the first 3) and
the shop page automatically.

## 3. Personalize the text

- In **`index.html`**: replace "Your Brand Name", the headline, the
  hero paragraph, the About section text, and the contact email/social
  links (search for `href="#"` next to Instagram/TikTok/Pinterest).
- In **`shop.html`**: the brand name in the top nav.
- Everywhere you see `Your<span>Brand</span>` in the nav — replace
  with your own name or brand, split however you like.

## 4. Change the colors (optional)

Open **`css/style.css`** and edit the values at the very top under
`:root`. For example, `--gold: #c6a15b;` controls the gold accent
color throughout the whole site — change that one line and everything
updates.

## Notes

- This site has no shopping cart or checkout built in — GitHub Pages
  can only host static files, it can't process payments. That's why
  each product links out to a payment/booking link instead (Stripe,
  Gumroad, PayPal, etc. handle the actual transaction securely).
- Want a custom domain like `yourbrand.com` instead of
  `your-username.github.io`? Buy the domain anywhere (Namecheap,
  Google Domains, etc.), then follow GitHub's guide: Settings → Pages
  → Custom domain.
