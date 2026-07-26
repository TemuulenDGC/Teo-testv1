/* ============================================================
   YOUR PRODUCTS
   ============================================================

   This is the ONLY file you need to touch to add, remove, or
   edit products. No coding knowledge needed — just follow the
   pattern below.

   Each product is one block between { and }, separated by commas.

   FIELDS:
   name        -> Product name
   category    -> Must be exactly one of: "Physical", "Digital", "Service"
   price       -> Shown as-is, e.g. "$45", "€20", "From $99"
   description -> One short sentence
   image       -> Paste a direct image URL. Leave as "" for a
                  placeholder monogram instead of a photo.
   link        -> Where the "Buy / Book / Get" click sends people.
                  Use a Stripe Payment Link, Gumroad link, PayPal.me
                  link, Calendly link, or a mailto: link. Leave as
                  "#" if you're not ready yet.

   TO ADD A NEW PRODUCT:
   1. Copy one whole block from the opening { to the closing },
   2. Paste it right before the closing "];" at the bottom,
   3. Edit the text inside the quotes.

   TO REMOVE A PRODUCT:
   Delete its whole block, from { to the following },

   Do not remove the commas between blocks or the square brackets
   at the top and bottom — those hold the list together.
   ============================================================ */

const PRODUCTS = [
  {
    name: "The Signature Tote",
    category: "Physical",
    price: "$68",
    description: "Hand-finished canvas, embossed monogram, made to order.",
    image: "",
    link: "#"
  },
  {
    name: "Studio Print No. 4",
    category: "Physical",
    price: "$120",
    description: "Limited edition giclée print, numbered and signed.",
    image: "",
    link: "#"
  },
  {
    name: "The Brand Foundations Guide",
    category: "Digital",
    price: "$29",
    description: "A 40-page PDF workbook for building a distinct visual identity.",
    image: "",
    link: "#"
  },
  {
    name: "Lightroom Preset Pack",
    category: "Digital",
    price: "$18",
    description: "Twelve warm, editorial tones for portrait and product photography.",
    image: "",
    link: "#"
  },
  {
    name: "1:1 Brand Consultation",
    category: "Service",
    price: "From $150",
    description: "A 60-minute session to sharpen your positioning and visuals.",
    image: "",
    link: "#"
  },
  {
    name: "Custom Commission",
    category: "Service",
    price: "Inquire",
    description: "Bespoke work tailored to your brief — timeline and scope on request.",
    image: "",
    link: "#"
  }
];
