import { useMemo, useState } from 'react'
import './GiftFinder.css'
import { developmentProducts, filterProducts, getPurchaseUrl } from './giftFinderData'

const filters = { recipient: ['', 'family', 'friend', 'colleague', 'host'], category: ['', 'home', 'food', 'keepsake'] }
const formatLabel = (value) => value ? value[0].toUpperCase() + value.slice(1) : 'Any'

function ProductCard({ product }) {
  const purchaseUrl = getPurchaseUrl(product)

  return <article className="finder-card">
    {product.image ? <img src={product.image} alt={product.imageAlt} loading="lazy" /> : <div className={`product-placeholder ${product.category}`} role="img" aria-label={product.imageAlt}><span>GiftKhoj</span><strong>{formatLabel(product.category)} idea</strong><small>Image coming soon</small></div>}
    <div>
      <div className="product-meta">
  <span>Gift idea</span>
  {product.isDevelopment && <small>Sample listing · Not verified</small>}
</div>
      <p>{formatLabel(product.category)} · {formatLabel(product.recipient)}</p>
      <h3>{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <div className="product-footer"><strong>Indicative budget: Rs. {product.price.toLocaleString('en-IN')}</strong><button
  className="buy-now"
  type="button"
  disabled
  title="Verified retailer links are coming soon"
>
  Coming soon
</button></div>
    </div>
  </article>
}

function GiftFinder({ products = developmentProducts }) {
  const [selected, setSelected] = useState({ recipient: '', budget: '', category: '' })
  const results = useMemo(() => filterProducts(products, selected), [products, selected])
  const hasFilters = Object.values(selected).some(Boolean)
  const update = (key, value) => setSelected((current) => ({ ...current, [key]: value }))
  const reset = () => setSelected({ recipient: '', budget: '', category: '' })

  return <section className="finder" id="gift-finder" aria-labelledby="finder-title"><div className="shell">
    <div className="finder-intro"><div><p className="kicker">Gift finder</p><h2 id="finder-title">A thoughtful place to start.</h2></div><p>Choose a few details and browse a short, useful edit.</p></div>
    <div className="finder-controls" aria-label="Gift filters">
      <label>For whom?<select value={selected.recipient} onChange={(event) => update('recipient', event.target.value)}>{filters.recipient.map((value) => <option key={value} value={value}>{formatLabel(value)}</option>)}</select></label>
      <label>Budget<select value={selected.budget} onChange={(event) => update('budget', event.target.value)}><option value="">Any budget</option><option value="500">Up to Rs. 500</option><option value="1000">Up to Rs. 1,000</option><option value="1500">Up to Rs. 1,500</option></select></label>
      <label>Category<select value={selected.category} onChange={(event) => update('category', event.target.value)}>{filters.category.map((value) => <option key={value} value={value}>{formatLabel(value)}</option>)}</select></label>
      <button className="finder-reset" type="button" onClick={reset} disabled={!hasFilters}>Clear filters</button>
    </div>
    <p className="finder-status" aria-live="polite">
  {results.length} {results.length === 1 ? 'idea' : 'ideas'} to consider
  <span>Illustrative ideas · Product listings coming soon</span>
</p>
    {results.length ? <div className="finder-results">{results.map((product) => <ProductCard key={product.id} product={product} />)}</div> : <div className="finder-empty"><p className="kicker">No close match</p><h3>Try changing a filter.</h3><p>There are no development items for this combination yet.</p><button type="button" onClick={reset}>Show all ideas</button></div>}
  </div></section>
}

export default GiftFinder
