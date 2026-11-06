
const AMAZON_TAG = 'giftkhoj-21'

const amazonSearchUrl = (query) => {
  const search = encodeURIComponent(query)
  return `https://www.amazon.in/s?k=${search}&tag=${AMAZON_TAG}`
}

const createProduct = ({
  id,
  name,
  description,
  category,
  recipient,
  search,
  image,
  imageAlt,
  customAffiliateUrl,
}) => {
  const affiliateUrl = customAffiliateUrl || amazonSearchUrl(search)

  return {
    id,
    name,
    description,
    price: null,
    image,
    imageAlt,
    category,
    recipient,
    retailer: 'Amazon',
    productUrl: affiliateUrl,
    affiliateUrl,
    isDevelopment: false,
  }
}

export const developmentProducts = [
  createProduct({
    id: 1,
    name: 'Decorative Diya Set',
    description: 'Traditional diyas to brighten up the family home.',
    recipient: 'family',
    category: 'home',
    search: 'decorative diya set for diwali',
    image: '/images/diya-set.jpg',
    imageAlt: 'Decorative diya lamps for Diwali',
    customAffiliateUrl: 'https://link.amazon/B0gTmmGiG',
  }),

  createProduct({
    id: 2,
    name: 'Festive Gift Hamper',
    description: 'A ready-to-gift hamper for a festive visit.',
    recipient: 'host',
    category: 'food',
    search: 'diwali sweets dry fruits gift hamper',
    image: '/images/gift-hamper.jpg',
    imageAlt: 'Festive sweets and dry fruits gift hamper',
  }),

  createProduct({
    id: 3,
    name: 'Brass Home Decor',
    description: 'A traditional home accent for someone special.',
    recipient: 'family',
    category: 'home',
    search: 'brass home decor diya gift',
    image: '/images/brass-decor.jpg',
    imageAlt: 'Traditional brass home decor',
  }),

  createProduct({
    id: 4,
    name: 'Festive Keepsake',
    description: 'A small festive surprise for a close friend.',
    recipient: 'friend',
    category: 'keepsake',
    search: 'diwali gift keepsake for friends',
    image: '/images/keepsake.jpg',
    imageAlt: 'Festive keepsake gift',
  }),

  createProduct({
    id: 5,
    name: 'Decorative String Lights',
    description: 'A cheerful lighting gift for a colleague.',
    recipient: 'colleague',
    category: 'home',
    search: 'decorative led string lights for diwali',
    image: '/images/string-lights.jpg',
    imageAlt: 'Warm decorative LED string lights',
  }),

  createProduct({
    id: 6,
    name: 'Festive Table Decor',
    description: 'A thoughtful homeware gift for someone who loves hosting.',
    recipient: 'host',
    category: 'home',
    search: 'diwali festive table decor gift',
    image: '/images/table-decor.jpg',
    imageAlt: 'Festive table decoration',
  }),
]

export function filterProducts(products, selected) {
  return products.filter((product) => (
    (!selected.recipient || product.recipient === selected.recipient) &&
    (!selected.category || product.category === selected.category) &&
    (
      !selected.budget ||
      product.price == null ||
      product.price <= Number(selected.budget)
    )
  ))
}

export const getPurchaseUrl = (product) =>
  product.affiliateUrl || product.productUrl
