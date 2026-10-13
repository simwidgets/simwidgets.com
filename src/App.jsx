export default function App() {
  return (
    <div className="site">
      <header className="site-header">
        <a href="/" className="brand">
          <img src="/logo_color.png" alt="SimWidgets" className="brand-logo" />
          <span>SimWidgets</span>
        </a>
        <nav>
          <a href="https://github.com/simwidgets" target="_blank" rel="noreferrer">GitHub</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <img src="/logo_color.png" alt="SimWidgets logo" className="hero-logo" />
          <h1>SimWidgets</h1>
          <p className="tagline">Open firmware and hardware kits for your home.</p>
        </section>

        <section className="products">
          <h2>Products</h2>

          <div className="coming-soon">
            <span className="coming-soon-badge">Coming soon</span>
            <h3>Our first product is on the way</h3>
            <p>Check back in a couple of weeks.</p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        &copy; 2026 SimWidgets, LLC.
      </footer>
    </div>
  )
}
