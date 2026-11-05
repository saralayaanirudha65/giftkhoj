
export function SiteHeader() {
  return (
    <header className="site-header">
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="/">GiftKhoj</a>

        <div className="nav-links">
          <a href="/#gifts">Diwali edit</a>
          <a href="/#budgets">Gifts by budget</a>
          <a href="/guides">Journal</a>
        </div>

        <a className="nav-action" href="/#gift-finder">
          Find a gift <span aria-hidden="true">→</span>
        </a>
      </nav>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer>
      <div className="shell footer-inner">
        <a className="brand" href="/">GiftKhoj</a>
        <p>For a warm and thoughtful Diwali.</p>

        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/affiliate-disclosure">Affiliate Disclosure</a>
        </div>

        <p>India</p>
      </div>
    </footer>
  )
}
