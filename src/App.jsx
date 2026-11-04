import './App.css'
import GiftFinder from './GiftFinder'
import { GuidesRouter, isGuidesRoute } from './Guides'
import InfoPages from './InfoPages'

const photos = {
  diya: 'https://images.unsplash.com/photo-1776106039806-538e5dc27808?auto=format&fit=crop&w=1400&q=85',
  light: 'https://images.unsplash.com/photo-1730406586742-6fb92613ad46?auto=format&fit=crop&w=1200&q=85',
  festive: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=85',
  detail: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=1200&q=85',
}

const picks = [
  { title: 'Light for the home', note: 'Diyas and gentle evening glow', image: photos.diya },
  { title: 'A little something sweet', note: 'For visits that turn into long chats', image: photos.detail },
  { title: 'For the festive table', note: 'Objects that make a space feel dressed', image: photos.festive },
]

function PickCard({ pick }) {
  return <article className="pick-card"><div className="pick-image"><img src={pick.image} alt="" loading="lazy" /></div><p>{pick.note}</p><h3>{pick.title}</h3><a href="#budgets">Browse the edit <span aria-hidden="true">→</span></a></article>
}

function App() {
  if (isGuidesRoute()) return <GuidesRouter />

  const infoRoutes = [
    '/about',
    '/contact',
    '/privacy',
    '/affiliate-disclosure',
  ]

  if (infoRoutes.includes(window.location.pathname.replace(/\/$/, ''))) {
    return <InfoPages />
  }

  return <main>
    <header className="site-header"><nav className="nav shell" aria-label="Main navigation"><a className="brand" href="#top">GiftKhoj</a><div className="nav-links"><a href="#gifts">Diwali edit</a><a href="#budgets">Gifts by budget</a><a href="/guides">Journal</a></div><a className="nav-action" href="#gift-finder">Find a gift <span aria-hidden="true">→</span></a></nav></header>

    <section className="hero shell" id="top">
      <div className="hero-copy"><p className="kicker">The Diwali gift guide</p><h1>Gifts for the homes<br />and people you love.</h1><p>Thoughtful ideas for the season, from a small diya for a host to something special for family.</p><a className="text-link" href="#gifts">Start exploring <span aria-hidden="true">→</span></a></div>
      <figure className="hero-photo"><img src={photos.light} alt="A diya held in warm evening light" /><figcaption>Diwali, at home</figcaption></figure>
      <div className="hero-note"><span>01</span><p>A considered collection<br />for the festive season</p></div>
    </section>

    <section className="intro shell" id="journal"><p className="kicker">A better way to browse</p><p className="intro-copy">GiftKhoj brings together the small things that make Diwali feel personal: warmth, good taste and a little thought.</p></section>

    <GiftFinder />

    <section className="picks-section" id="gifts"><div className="shell"><div className="section-head"><div><p className="kicker">The festive edit</p><h2>Handpicked for Diwali</h2></div><a className="text-link" href="#budgets">See gift ideas <span aria-hidden="true">→</span></a></div><div className="picks-grid">{picks.map((pick) => <PickCard key={pick.title} pick={pick} />)}</div></div></section>

    <section className="budget-section" id="budgets"><div className="shell budget-layout"><div><p className="kicker">Start with a budget</p><h2>Good gifting<br />doesn't need a big spend.</h2></div><div className="budget-links"><a href="#gifts"><span>Under Rs. 500</span><i aria-hidden="true">→</i></a><a href="#gifts"><span>Under Rs. 1,000</span><i aria-hidden="true">→</i></a></div></div></section>

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
  </main>
}

export default App
