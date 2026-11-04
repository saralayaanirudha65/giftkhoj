  // Development-only catalogue entries. Do not treat names, prices, or retailers as verified listings.
  // productUrl and affiliateUrl are intentionally separate: affiliateUrl takes precedence only after verification.
  const createDevelopmentProduct = ({ id, name, description, price, image, imageAlt, category, recipient, retailer }) => ({
    id, name, description, price, image, imageAlt, category, recipient, retailer,
    productUrl: null,
    affiliateUrl: null,
    isDevelopment: true,
  })

  export const developmentProducts = [
    createDevelopmentProduct({ id: 1, name: 'Hand-painted diya set', description: 'A small lighting idea for the family home.', recipient: 'family', category: 'home', price: 380, retailer: 'Amazon', image: null, imageAlt: 'Several clay diyas glowing with warm light' }),
    createDevelopmentProduct({ id: 2, name: 'Festive sweets box', description: 'An easy host-gift idea for a Diwali visit.', recipient: 'host', category: 'food', price: 650, retailer: 'Flipkart', image: null, imageAlt: 'Neutral placeholder for a festive sweets gift idea' }),
    createDevelopmentProduct({ id: 3, name: 'Brass serving accent', description: 'A considered addition to a festive table.', recipient: 'family', category: 'home', price: 950, retailer: 'Other', image: null, imageAlt: 'Neutral placeholder for a brass home decor idea' }),
    createDevelopmentProduct({ id: 4, name: 'A small festive keepsake', description: 'A thoughtful option for a close friend.', recipient: 'friend', category: 'keepsake', price: 420, retailer: 'Amazon', image: null, imageAlt: 'Neutral placeholder for a festive keepsake idea' }),
    createDevelopmentProduct({ id: 5, name: 'Diya and light collection', description: 'A simple gift idea for a colleague.', recipient: 'colleague', category: 'home', price: 780, retailer: 'Flipkart', image: null , imageAlt: 'Several clay diyas glowing with warm light' }),
    createDevelopmentProduct({ id: 6, name: 'Festive table detail', description: 'A homeware idea for someone hosting.', recipient: 'host', category: 'home', price: 1200, retailer: 'Other', image: null, imageAlt: 'Neutral placeholder for a festive table gift idea' }),
  ]

  export function filterProducts(products, selected) {
    return products.filter((product) => (
      (!selected.recipient || product.recipient === selected.recipient) &&
      (!selected.category || product.category === selected.category) &&
      (!selected.budget || product.price <= Number(selected.budget))
    ))
  }

  export const getPurchaseUrl = (product) => product.affiliateUrl || product.productUrl
