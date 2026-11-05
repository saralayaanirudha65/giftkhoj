
import { useEffect } from 'react'
import './Guides.css'
import { getGuide, guides } from './guidesData'
import { SiteHeader, SiteFooter } from './SiteLayout'

const guideHref = (slug) => `/guides/${slug}`

function GuideCard({ article }) {
  return (
    <article className="guide-card">
      <p className="kicker">Diwali guide</p>

      <h2>
        <a href={guideHref(article.slug)}>
          {article.title}
        </a>
      </h2>

      <p>{article.description}</p>

      <a className="text-link" href={guideHref(article.slug)}>
        Read guide <span aria-hidden="true">→</span>
      </a>
    </article>
  )
}

function GuidePage({ article }) {
  useEffect(() => {
    document.title = article.seoTitle

    let description = document.querySelector(
      'meta[name="description"]'
    )

    if (!description) {
      description = document.createElement('meta')
      description.name = 'description'
      document.head.appendChild(description)
    }

    description.content = article.description
  }, [article])

  return (
    <>
      <SiteHeader />

      <main className="article-page">
        <article className="article-shell">
          <p className="kicker">GiftKhoj journal</p>

          <h1>{article.title}</h1>

          <p className="article-intro">
            {article.intro}
          </p>

          <div className="article-body">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>

                <p>{section.text}</p>

                <ul>
                  {section.tips.map((tip) => (
                    <li key={tip}>{tip}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <aside className="article-next">
            <p className="kicker">Keep reading</p>

            <div>
              {article.related.map((slug) => {
                const related = getGuide(slug)

                if (!related) return null

                return (
                  <a key={slug} href={guideHref(slug)}>
                    {related.title} <span>→</span>
                  </a>
                )
              })}
            </div>

            <a className="text-link" href="/#gift-finder">
              Use the Gift Finder <span aria-hidden="true">→</span>
            </a>
          </aside>
        </article>
      </main>

      <SiteFooter />
    </>
  )
}

function GuidesIndex() {
  useEffect(() => {
    document.title = 'Diwali Gift Guides | GiftKhoj'
  }, [])

  return (
    <>
      <SiteHeader />

      <main className="guides-page shell">
        <div className="guides-hero">
          <p className="kicker">GiftKhoj journal</p>

          <h1>Diwali gifting, made simpler.</h1>

          <p>
            Practical notes for choosing, giving and hosting
            well during the festive season.
          </p>
        </div>

        <div className="guides-grid">
          {guides.map((article) => (
            <GuideCard
              article={article}
              key={article.slug}
            />
          ))}
        </div>
      </main>

      <SiteFooter />
    </>
  )
}

export function GuidesRouter() {
  const path = window.location.pathname.replace(/\/$/, '')

  if (path === '/guides') {
    return <GuidesIndex />
  }

  const article = getGuide(path.replace('/guides/', ''))

  return article ? (
    <GuidePage article={article} />
  ) : (
    <GuidesIndex />
  )
}

export const isGuidesRoute = () =>
  window.location.pathname.startsWith('/guides')
