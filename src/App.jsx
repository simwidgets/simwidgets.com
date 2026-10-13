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

          <article className="product">
            <img
              src="/weather-paper.png"
              alt="Weather Paper — battery-powered e-paper weather display"
              className="product-image"
            />
            <div className="product-body">
              <h3>Weather Paper</h3>
              <p>
                A battery-powered e-paper weather display. Real National Weather Service
                conditions, a 7-day forecast, and months of runtime on a single charge.
              </p>
              <div className="product-actions">
                <a className="btn btn-primary" href="https://www.etsy.com/shop/SimWidgets" target="_blank" rel="noreferrer">
                  Buy the kit
                </a>
                <a className="btn btn-ghost" href="https://github.com/simwidgets/weather-paper" target="_blank" rel="noreferrer">
                  Firmware &amp; docs
                </a>
              </div>
            </div>
          </article>
        </section>
      </main>

      <footer className="site-footer">
        &copy; 2026 SimWidgets, LLC.
      </footer>
    </div>
  )
}
