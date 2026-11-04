
import './InfoPages.css'

const pages = {
    '/about': {
        eyebrow: 'Our story',
        title: 'Thoughtful gifting starts here.',
        content: (
            <>
                <p>GiftKhoj is a Diwali gift discovery guide created to make festive shopping simpler and more thoughtful.</p>
                <p>Whether you are looking for something special for your parents, a small gift for a friend, or something beautiful for your home, we bring gift ideas together in one place.</p>
                <p>Our goal is simple: help you discover thoughtful gifts across different budgets and occasions.</p>
            </>
        ),
    },
    '/contact': {
        eyebrow: 'Get in touch',
        title: 'We would love to hear from you.',
        content: (
            <>
                <p>Have a suggestion, spotted an incorrect product detail, or want to collaborate with GiftKhoj?</p>
                <p>Please contact us at:</p>
                <p>
                    <a href="mailto:your-anirudhsaralaya@gmail.com">
                        anirudhsaralaya@gmail.com
                    </a>
                </p>
                <p>We look forward to hearing from you.</p>
            </>
        ),
    },
    '/privacy': {
        eyebrow: 'Your privacy',
        title: 'Privacy Policy',
        content: (
            <>
                <p><strong>Last updated: November 4, 2026</strong></p>
                <h2>Information we collect</h2>
                <p>GiftKhoj does not currently require visitors to create an account or provide personal information to browse gift ideas. If you contact us, we may receive the information you choose to share.</p>
                <h2>Cookies and analytics</h2>
                <p>Our website or third-party services may use cookies or similar technologies to support website functionality and understand site usage. We will update this policy if we introduce analytics or advertising services.</p>
                <h2>Third-party websites</h2>
                <p>GiftKhoj may link to external retailer websites. Once you visit those websites, their own privacy policies and terms apply. We do not control their data practices.</p>
                <h2>Changes to this policy</h2>
                <p>We may update this policy when our website or services change. Any updates will be published on this page.</p>
                <h2>Contact</h2>
                <p>For privacy-related questions, please use our <a href="/contact">Contact page</a>.</p>
            </>
        ),
    },
    '/affiliate-disclosure': {
        eyebrow: 'Transparency matters',
        title: 'Affiliate Disclosure',
        content: (
            <>
                <p>GiftKhoj may participate in affiliate marketing programmes. This means some links on our website may be affiliate links.</p>
                <p>If you click an affiliate link and make a qualifying purchase, GiftKhoj may earn a commission at no additional cost to you.</p>
                <p>These commissions help us maintain and improve GiftKhoj. They do not guarantee that a product is suitable for every visitor.</p>
                <p>Product prices, availability and offers may change. Please check the retailer's website for the latest details before purchasing.</p>
                <p>GiftKhoj is preparing to participate in affiliate programmes. Affiliate links will be clearly identified when such partnerships become active.</p>
                <p>We will only use affiliate links where we have the appropriate programme approval.</p>
            </>
        ),
    },
}

function InfoPages() {
    const page = pages[window.location.pathname.replace(/\/$/, '')]

    if (!page) {
        return (
            <main className="info-page">
                <p className="kicker">GiftKhoj</p>
                <h1>Page not found</h1>
                <a className="text-link" href="/">Return home →</a>
            </main>
        )
    }

    return (
        <main className="info-page">
            <header className="info-header">
                <a className="brand" href="/">GiftKhoj</a>
                <a className="text-link" href="/">Back to home →</a>
            </header>

            <article className="info-content">
                <p className="kicker">{page.eyebrow}</p>
                <h1>{page.title}</h1>
                <div className="info-body">{page.content}</div>
            </article>

            <footer className="info-footer">
                <a href="/">GiftKhoj</a>
                <span>For a warm and thoughtful Diwali.</span>
            </footer>
        </main>
    )
}

export default InfoPages
