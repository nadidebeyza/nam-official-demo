import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import logo from './assets/nam-logo.png'
import heroImage from './assets/image-1.jpeg'
import product1 from './assets/image-2.jpg'
import product2 from './assets/image-3.jpg'
import product3 from './assets/image-4.jpg'
import product4 from './assets/image-5.jpg'
import product5 from './assets/image-6.jpg'
import product6 from './assets/image-7.jpg'
import product7 from './assets/image-8.jpg'
import React from 'react'
function PlaceholderPage({ title }) {
  return (
    <main className="placeholder-page">
      <div className="container" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1rem'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{fontFamily: 'Playfair Display, serif', fontWeight: 400}}>{title}</h1>
          <p style={{marginTop: '0.5rem', color: '#5a4a4a'}}>Bu sayfa üzerinde çalışıyoruz. Çok yakında yayında olacak.</p>
          <div style={{marginTop: '1.5rem'}}>
            <Link to="/" className="btn btn-romantic" style={{padding: '0.8rem 1.6rem'}}>Anasayfa'ya Dön</Link>
          </div>
        </div>
      </div>
    </main>
  )
}

function TopStripe() {
  return (
    <div className="top-stripe" role="region" aria-label="Kampanya duyuruları">
      <div className="top-stripe-inner">
        <div className="marquee" aria-hidden="false">
          <div className="marquee-group">
            <span>500₺ ÜZERİ SİPARİŞLERDE KARGO BEDAVA.</span>
            <span>30 GÜN İÇİNDE ÜCRETSİZ İADE.</span>
            <span>GÜVENLİ ÖDEME (3D SECURE) İLE ALIŞVERİŞ.</span>
            <span>YENİ SEZON KOLEKSİYONU EKLENDİ.</span>
          </div>
          <div className="marquee-group" aria-hidden="true">
            <span>500₺ ÜZERİ SİPARİŞLERDE KARGO BEDAVA.</span>
            <span>30 GÜN İÇİNDE ÜCRETSİZ İADE.</span>
            <span>GÜVENLİ ÖDEME (3D SECURE) İLE ALIŞVERİŞ.</span>
            <span>YENİ SEZON KOLEKSİYONU EKLENDİ.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-3" to="/">
          <div className="logo-container">
            <img src={logo} alt="NAM Official Logo" className="logo-img" />
          </div>
        </Link>
        {/* Mobile search with animated placeholder (same as desktop) */}
        <form className="navbar-search-mobile d-flex d-lg-none flex-grow-1 px-2" role="search" onSubmit={(e)=> e.preventDefault()}>
          <div className="search-input-container w-100">
            <input className="form-control" type="search" placeholder="" aria-label="Ürün ara" />
            <div className="search-placeholder-animation">
              <span className="search-text">Ceket...</span>
              <span className="search-text">Elbise...</span>
              <span className="search-text">Etek...</span>
            </div>
          </div>
        </form>
        <button
          className="navbar-toggler border-0 ms-auto"
          type="button"
          aria-label="Menüyü aç/kapat"
          onClick={() => {
            const cls = document.body.classList
            if (cls.contains('menu-open')) {
              cls.remove('menu-open')
              document.body.style.overflow = ''
            } else {
              cls.add('menu-open')
              document.body.style.overflow = 'hidden'
            }
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        <div className="collapse navbar-collapse" id="navContent" onClick={() => {
          if (document.body.classList.contains('menu-open')) {
            document.body.classList.remove('menu-open')
            document.body.style.overflow = ''
          }
        }}>
          <form className="navbar-search ms-lg-4 my-2 my-lg-0 d-none d-lg-block" role="search">
            <div className="search-input-container">
              <input className="form-control" type="search" placeholder="" aria-label="Ürün ara" />
              <div className="search-placeholder-animation">
                <span className="search-text">Etek...</span>
                <span className="search-text">Elbise...</span>
                <span className="search-text">Ceket...</span>
              </div>
            </div>
          </form>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item d-none d-lg-block">
              <span className="nav-sep">|</span>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/kampanyalar">Kampanyalar</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/siparis-takibi">Sipariş Takibi</Link>
            </li>
            <li className="nav-item products-dropdown dropdown">
              <Link className="nav-link px-3 dropdown-toggle" to="/urunler" role="button" aria-haspopup="true" aria-expanded="false">Ürünler</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/urunler">Tüm Ürünler</Link></li>
                <li><Link className="dropdown-item" to="/urunler">Yeni Gelenler</Link></li>
                <li><Link className="dropdown-item" to="/urunler">Elbise</Link></li>
                <li><Link className="dropdown-item" to="/urunler">Etek</Link></li>
                <li><Link className="dropdown-item" to="/urunler">Ceket</Link></li>
                <li><Link className="dropdown-item" to="/urunler">Bluz</Link></li>
                <li><Link className="dropdown-item" to="/urunler">Gömlek</Link></li>
                <li><Link className="dropdown-item" to="/urunler">Tunik</Link></li>
                <li><Link className="dropdown-item" to="/urunler">Triko</Link></li>
                <li><Link className="dropdown-item" to="/urunler">Sweatshirt</Link></li>
                <li><Link className="dropdown-item" to="/urunler">T‑Shirt</Link></li>
                <li><Link className="dropdown-item" to="/urunler">Pantolon</Link></li>
                <li><Link className="dropdown-item" to="/urunler">Jean</Link></li>
                <li><Link className="dropdown-item" to="/urunler">Takım</Link></li>
                <li><Link className="dropdown-item" to="/urunler">Dış Giyim</Link></li>
                <li><Link className="dropdown-item" to="/urunler">Aksesuar</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/yeni-gelenler">Yeni gelenler</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/">Anasayfa</Link>
            </li>
            <li className="nav-item d-none d-lg-block">
              <span className="nav-sep">|</span>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/hesabim">Hesabım</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/favorilerim">Favorilerim</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/sepetim">Sepetim</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

function HomePage() {
  return (
    <>
      {/* Hero Section - Triptych Layout */}
      <section className="hero-section">
        <div className="hero-triptych">
          <div className="hero-col">
            <img src={product5} alt="Hero Left" />
          </div>
          <div className="hero-col">
            <img src={product6} alt="Hero Center" />
          </div>
          <div className="hero-col">
            <img src={product7} alt="Hero Right" />
          </div>
          <div className="hero-center-overlay">
            <h1 className="hero-title">Tarzını Yansıtan Koleksiyon</h1>
            <h2 className="hero-subtitle">Gardırobundaki her parça senin hikâyeni anlatır. Kendi stilini keşfet, kombinlerini özgürce oluştur ve tarzını dünyaya yansıt.</h2>
            <div className="hero-actions">
              <button
                type="button"
                className="btn btn-romantic"
                aria-controls="featured"
                onClick={() => {
                  const el = document.getElementById('featured')
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
              >
                <span>Koleksiyonu keşfet</span>
                <div className="btn-shine"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products - Asymmetric Grid */}
      <section id="featured" className="featured-section">
        <div className="section-intro">
          <div className="intro-text">
            <h2 className="section-title">Öne Çıkan Ürünler</h2>
            <p className="section-subtitle">Minimal-şık koleksiyonumuzdan özel seçmeler</p>
          </div>
          <div className="intro-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-dot"></div>
          </div>
        </div>
        
        <div className="products-grid-uniform">
          {[
            { img: product1, name: "Romantik Koleksiyon", category: "Zarif Tasarım", price: 1299 },
            { img: product2, name: "Elegant Blouse", category: "Premium Koleksiyon", price: 899 },
            { img: product3, name: "Classic Dress", category: "Zarif Tasarım", price: 1299 },
            { img: product4, name: "Modern Top", category: "Premium Koleksiyon", price: 699 },
            { img: product5, name: "Stylish Set", category: "Zarif Tasarım", price: 1599 },
            { img: product6, name: "Trendy Outfit", category: "Premium Koleksiyon", price: 1199 },
            { img: product7, name: "Luxury Collection", category: "Zarif Tasarım", price: 1899 },
            { img: heroImage, name: "Premium Elegance", category: "Premium Koleksiyon", price: 2199 }
          ].map((product, index) => (
            <div className="product-card-uniform" key={index}>
              <div className="product-image-uniform">
                <img src={product.img} alt={product.name} />
                <div className="product-overlay-uniform">
                  <div className="product-overlay-actions">
                    <Link to="/urun/orn-urun" className="btn btn-romantic-uniform-primary">İncele</Link>
                    <button type="button" className="btn btn-romantic-uniform">Sepete Ekle</button>
                    <button type="button" className="btn btn-romantic-uniform">Favorilere Ekle</button>
                  </div>
                </div>
              </div>
              <div className="product-info-uniform">
                <h3 className="product-name-uniform">{product.name}</h3>
                <p className="product-category-uniform">{product.category}</p>
                <div className="product-price-uniform">₺{product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram feed removed */}

      {/* About Section - Creative Layout */}
      <section className="about-section">
        <div className="about-content-creative">
          <div className="about-image-section">
            <div className="about-image-wrapper">
              <img src={product3} alt="NAM Hakkında" />
            </div>
          </div>
          <div className="about-text-section">
            <div className="about-text-content">
              <h2 className="about-title">Nam Hakkında</h2>
              <p className="about-description">
                2015 yılından beri moda dünyasında zarif tasarımlarıyla öne çıkan Nam Official, 
                romantik ve şık koleksiyonlarıyla kadınların günlük yaşamlarında güzel hissetmelerini sağlıyor. 
                Her parça, özenle seçilmiş kumaşlar ve dikkatli işçilikle üretilmiştir.
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-number">8+</div>
                  <div className="stat-label">Yıl Deneyim</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">1000+</div>
                  <div className="stat-label">Mutlu Müşteri</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Ürün Çeşidi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E‑Bülten Kayıt */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-card">
            <div className="nl-texts">
              <h3 className="nl-title">E‑Bültenimize Kayıt Olun</h3>
              <p className="nl-subtitle">Yeni sezon, kampanyalar ve özel fırsatlar için e‑posta adresinizi bırakın.</p>
            </div>
            <form className="nl-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" className="nl-input" placeholder="E‑posta adresiniz" required />
              <button type="submit" className="btn btn-romantic nl-btn">Kayıt Ol</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

function AllProductsPage() {
  const allProducts = [
    { img: product1, name: "Romantik Koleksiyon", category: "Elbise", price: 1299, sizes: ["S","M","L"], colors:["Siyah","Beyaz"], material: "Pamuk", inStock: true, dateAdded: 1727300000000, favorites: 42, editorScore: 90 },
    { img: product2, name: "Elegant Blouse", category: "Bluz", price: 899, sizes: ["XS","S","M"], colors:["Krem","Bordo"], material: "Viskon", inStock: true, dateAdded: 1727600000000, favorites: 27, editorScore: 80 },
    { img: product3, name: "Classic Dress", category: "Elbise", price: 1299, sizes: ["M","L","XL"], colors:["Siyah"], material: "Polyester", inStock: false, dateAdded: 1727000000000, favorites: 55, editorScore: 88 },
    { img: product4, name: "Modern Top", category: "Bluz", price: 699, sizes: ["XS","S"], colors:["Beyaz","Krem"], material: "Keten", inStock: true, dateAdded: 1726800000000, favorites: 12, editorScore: 72 },
    { img: product5, name: "Stylish Set", category: "Takım", price: 1599, sizes: ["S","M"], colors:["Bordo"], material: "Pamuk", inStock: true, dateAdded: 1727400000000, favorites: 61, editorScore: 86 },
    { img: product6, name: "Trendy Outfit", category: "Pantolon", price: 1199, sizes: ["M","L"], colors:["Siyah"], material: "Denim", inStock: false, dateAdded: 1727700000000, favorites: 19, editorScore: 75 },
    { img: product7, name: "Luxury Jacket", category: "Ceket", price: 1899, sizes: ["M","L","XL"], colors:["Siyah","Krem"], material: "Yün Karışım", inStock: true, dateAdded: 1727200000000, favorites: 33, editorScore: 82 },
    { img: heroImage, name: "Premium Elegance", category: "Elbise", price: 2199, sizes: ["S","M"], colors:["Beyaz"], material: "Saten", inStock: true, dateAdded: 1727800000000, favorites: 77, editorScore: 93 }
  ]

  const categories = [
    "Tümü", "Elbise", "Etek", "Ceket", "Bluz", "Gömlek", "Tunik", "Triko", "Pantolon", "Takım"
  ]
  const allSizes = ["XS","S","M","L","XL"]
  const allColors = ["Siyah","Beyaz","Krem","Bordo"]
  const allMaterials = ["Pamuk","Viskon","Keten","Polyester","Denim","Saten","Yün Karışım"]

  const [query, setQuery] = React.useState("")
  const [category, setCategory] = React.useState("Tümü")
  const [price, setPrice] = React.useState([0, 3000])
  const [sort, setSort] = React.useState("editor")
  const [sizes, setSizes] = React.useState([]) // multi-select
  const [colors, setColors] = React.useState([]) // multi-select
  const [materials, setMaterials] = React.useState([]) // multi-select
  const [stock, setStock] = React.useState({ inStock: false, preOrder: false })

  const toggleSize = (sz) => {
    setSizes(prev => prev.includes(sz) ? prev.filter(s => s !== sz) : [...prev, sz])
  }
  const toggleColor = (cl) => {
    setColors(prev => prev.includes(cl) ? prev.filter(c => c !== cl) : [...prev, cl])
  }
  const toggleMaterial = (m) => {
    setMaterials(prev => prev.includes(m) ? prev.filter(x => x !== m) : [...prev, m])
  }

  const resetFilters = () => {
    setQuery("")
    setCategory("Tümü")
    setPrice([0,3000])
    setSort("editor")
    setSizes([])
    setColors([])
    setMaterials([])
    setStock({ inStock: false, preOrder: false })
  }

  const filtered = React.useMemo(() => {
    let p = allProducts.filter(item => {
      const matchesQuery = item.name.toLowerCase().includes(query.toLowerCase())
      const matchesCategory = category === "Tümü" || item.category === category
      const matchesPrice = item.price >= price[0] && item.price <= price[1]
      const matchesSizes = sizes.length === 0 || sizes.some(sz => item.sizes.includes(sz))
      const matchesColors = colors.length === 0 || colors.some(cl => item.colors.includes(cl))
      const matchesMaterials = materials.length === 0 || (item.material && materials.includes(item.material))
      const matchesStock = (!stock.inStock && !stock.preOrder)
        || (stock.inStock && item.inStock)
        || (stock.preOrder && !item.inStock)
      return matchesQuery && matchesCategory && matchesPrice && matchesSizes && matchesColors && matchesMaterials && matchesStock
    })
    switch (sort) {
      case "price_asc": p = p.slice().sort((a,b) => a.price - b.price); break
      case "price_desc": p = p.slice().sort((a,b) => b.price - a.price); break
      case "newest": p = p.slice().sort((a,b) => b.dateAdded - a.dateAdded); break
      case "favorites": p = p.slice().sort((a,b) => b.favorites - a.favorites); break
      case "editor": default: p = p.slice().sort((a,b) => b.editorScore - a.editorScore); break
    }
    return p
  }, [allProducts, query, category, price, sizes, colors, stock, sort])

  const [filtersOpen, setFiltersOpen] = React.useState(() => (typeof window !== 'undefined' ? window.innerWidth >= 992 : false))
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setFiltersOpen(true) // auto-open on desktop widths
      }
      // do NOT force-close on smaller widths; preserve user's choice
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <main className="all-products-page">
      <header className="all-products-hero">
        <div className="container">
          <h1 className="all-products-title">Tüm Ürünler</h1>
          <p className="all-products-subtitle">Koleksiyonlarımızdan seçkiler, aradığını kolayca bul.</p>
        </div>
      </header>
      <div className="container all-products-container">
        <aside className="filters-panel">
          <details className="filters-collapse" open={filtersOpen} onToggle={(e)=> setFiltersOpen(e.currentTarget.open)}>
            <summary className="filters-header">Filtreler</summary>
            <div className="filters-body">

          <div className="filter-block">
            <label className="filter-label">Ara</label>
            <input
              type="text"
              className="form-control filter-input"
              placeholder="Ürün adı ara"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="filter-block">
            <label className="filter-label">Kategori</label>
            <div className="category-chips">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`chip ${category === cat ? 'active' : ''}`}
                  onClick={() => setCategory(cat)}
                >{cat}</button>
              ))}
            </div>
          </div>

          <div className="filter-block">
            <label className="filter-label">Beden</label>
            <div className="category-chips">
              {allSizes.map(sz => (
                <button
                  key={sz}
                  className={`chip ${sizes.includes(sz) ? 'active' : ''}`}
                  onClick={() => toggleSize(sz)}
                >{sz}</button>
              ))}
            </div>
          </div>

          <div className="filter-block">
            <label className="filter-label">Renk</label>
            <div className="category-chips">
              {allColors.map(cl => (
                <button
                  key={cl}
                  className={`chip ${colors.includes(cl) ? 'active' : ''}`}
                  onClick={() => toggleColor(cl)}
                >{cl}</button>
              ))}
            </div>
          </div>

          <div className="filter-block">
            <label className="filter-label">Materyal</label>
            <div className="category-chips">
              {allMaterials.map(m => (
                <button
                  key={m}
                  className={`chip ${materials.includes(m) ? 'active' : ''}`}
                  onClick={() => toggleMaterial(m)}
                >{m}</button>
              ))}
            </div>
          </div>

          <div className="filter-block">
            <label className="filter-label">Stok Durumu</label>
            <div className="stock-flags">
              <label className="flag">
                <input type="checkbox" checked={stock.inStock} onChange={(e)=> setStock(s=>({...s, inStock: e.target.checked}))} />
                <span>Stokta</span>
              </label>
              <label className="flag">
                <input type="checkbox" checked={stock.preOrder} onChange={(e)=> setStock(s=>({...s, preOrder: e.target.checked}))} />
                <span>Ön Sipariş</span>
              </label>
            </div>
          </div>

          <div className="filter-block">
            <label className="filter-label">Fiyat Aralığı</label>
            <div className="price-slider-group">
              <div className="price-slider-col">
                <input
                  type="range"
                  min={0}
                  max={3000}
                  step={50}
                  value={price[0]}
                  onChange={(e)=> setPrice([Number(e.target.value), Math.max(price[1], Number(e.target.value))])}
                />
                <input
                  type="number"
                  className="form-control price-input"
                  min={0}
                  max={price[1]}
                  value={price[0]}
                  onChange={(e)=> setPrice([Number(e.target.value)||0, price[1]])}
                />
              </div>
              <div className="price-slider-col">
                <input
                  type="range"
                  min={0}
                  max={3000}
                  step={50}
                  value={price[1]}
                  onChange={(e)=> setPrice([Math.min(price[0], Number(e.target.value)), Number(e.target.value)])}
                />
                <input
                  type="number"
                  className="form-control price-input"
                  min={price[0]}
                  value={price[1]}
                  onChange={(e)=> setPrice([price[0], Number(e.target.value)||0])}
                />
              </div>
            </div>
          </div>

          <div className="filter-actions">
            <button className="link-reset" type="button" onClick={resetFilters}>Filtreleri Sıfırla</button>
            <button className="btn btn-apply" type="button">Uygula</button>
          </div>
            </div>
          </details>
        </aside>

        <section className="products-panel">
          <div className="products-toolbar">
            <div className="results-info">{filtered.length} ürün bulundu</div>
            <div className="sort-control">
              <label htmlFor="sort" className="filter-label me-2">Sırala</label>
              <select id="sort" className="form-select sort-select" value={sort} onChange={(e)=> setSort(e.target.value)}>
                <option value="editor">Editör sıralaması</option>
                <option value="price_asc">Fiyat (Artan)</option>
                <option value="price_desc">Fiyat (Azalan)</option>
                <option value="newest">Yeni eklenen</option>
                <option value="favorites">En favoriler</option>
              </select>
            </div>
          </div>

          <div className="products-grid-uniform">
            {filtered.map((product, index) => (
              <div className="product-card-uniform" key={index}>
                <div className="product-image-uniform">
                  <img src={product.img} alt={product.name} />
                  <div className="product-overlay-uniform">
                    <div className="product-overlay-actions">
                      <Link to="/urun/orn-urun" className="btn btn-romantic-uniform-primary">İncele</Link>
                      <button type="button" className="btn btn-romantic-uniform">Sepete Ekle</button>
                      <button type="button" className="btn btn-romantic-uniform">Favorilere Ekle</button>
                    </div>
                  </div>
                </div>
                <div className="product-info-uniform">
                  <h3 className="product-name-uniform">{product.name}</h3>
                  <p className="product-category-uniform">{product.category}</p>
                  <div className="product-price-uniform">₺{product.price}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

function ProductPage() {
  const product = {
    name: "Romantik Koleksiyon Elbise",
    category: "Elbise",
    price: 1299,
    sku: "NM-ELB-2025-01",
    inStock: true,
  }

  const images = [product1, product2]
  const [activeIndex, setActiveIndex] = React.useState(0)
  const prevImage = () => setActiveIndex((i) => (i - 1 + images.length) % images.length)
  const nextImage = () => setActiveIndex((i) => (i + 1) % images.length)

  const [isZoomed, setIsZoomed] = React.useState(false)
  const lensRef = React.useRef(null)
  const imgRef = React.useRef(null)
  const ZOOM = 2.5
  const onMove = (e) => {
    const wrapper = e.currentTarget
    const rect = wrapper.getBoundingClientRect()
    const relX = e.clientX - rect.left
    const relY = e.clientY - rect.top
    if (!imgRef.current || !lensRef.current) return

    // Position the lens centered at cursor
    const lensSize = lensRef.current.offsetWidth
    lensRef.current.style.left = `${Math.max(0, Math.min(rect.width - lensSize, relX - lensSize / 2))}px`
    lensRef.current.style.top = `${Math.max(0, Math.min(rect.height - lensSize, relY - lensSize / 2))}px`

    // Map cursor position on displayed image to natural image pixels
    const natural = {
      width: imgRef.current.naturalWidth || rect.width,
      height: imgRef.current.naturalHeight || rect.height,
    }
    const scaleX = natural.width / rect.width
    const scaleY = natural.height / rect.height
    const natX = relX * scaleX
    const natY = relY * scaleY

    // Set lens background image (use current image src)
    lensRef.current.style.backgroundImage = `url(${imgRef.current.src})`
    lensRef.current.style.backgroundSize = `${natural.width * ZOOM}px ${natural.height * ZOOM}px`
    // Center the cursor point inside the lens
    const bgPosX = -(natX * ZOOM - lensSize / 2)
    const bgPosY = -(natY * ZOOM - lensSize / 2)
    lensRef.current.style.backgroundPosition = `${bgPosX}px ${bgPosY}px`
  }

  // Reviews state (demo; no backend)
  const [reviews, setReviews] = React.useState([
    { id: 1, name: 'Selin', rating: 5, text: 'Kalitesi harika, kalıp tam oldu.', photos: [], date: '2025-09-01' },
    { id: 2, name: 'Deniz', rating: 4, text: 'Rengi çok güzel, kargo hızlıydı.', photos: [product1, product2], date: '2025-09-10' }
  ])
  const [minRating, setMinRating] = React.useState(0)
  const [reviewForm, setReviewForm] = React.useState({ name: '', rating: 5, text: '' })
  const [reviewPhotos, setReviewPhotos] = React.useState([])

  const handlePhotoSelect = (e) => {
    const files = Array.from(e.target.files || [])
    const previews = files.slice(0, 4).map(file => ({ file, url: URL.createObjectURL(file) }))
    setReviewPhotos(previews)
  }

  const submitReview = (e) => {
    e.preventDefault()
    if (!reviewForm.name || !reviewForm.text) return
    const newReview = {
      id: Date.now(),
      name: reviewForm.name,
      rating: Number(reviewForm.rating) || 5,
      text: reviewForm.text,
      photos: reviewPhotos.map(p => p.url),
      date: new Date().toISOString().slice(0,10)
    }
    setReviews(prev => [newReview, ...prev])
    setReviewForm({ name: '', rating: 5, text: '' })
    setReviewPhotos([])
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://namofficial.com.tr'
  const shareTitle = product.name
  const onShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: shareTitle, url: shareUrl })
      }
    } catch (_) {}
  }
  return (
    <main className="product-page">
      {/* Mobile breadcrumb above image */}
      <nav className="product-breadcrumb product-breadcrumb-mobile" aria-label="breadcrumb">
        <Link to="/" className="text-muted">Anasayfa</Link>
        <span className="bc-sep">/</span>
        <Link to="/urunler" className="text-muted">Tüm Ürünler</Link>
        <span className="bc-sep">/</span>
        <a href="#" className="text-muted">{product.category}</a>
        <span className="bc-sep">/</span>
        <span className="text-current">{product.name}</span>
      </nav>

      <div className="product-container">
        <div className="product-gallery">
          <div
            className={`main-image zoomable`}
            onMouseEnter={() => setIsZoomed(true)}
            onMouseLeave={() => setIsZoomed(false)}
            onMouseMove={onMove}
          >
            <img ref={imgRef} src={images[activeIndex]} alt="Ürün Detay" />
            <div ref={lensRef} className={`magnifier-lens ${isZoomed ? 'visible' : ''}`} />
            {activeIndex > 0 && (
              <button type="button" className="gallery-arrow prev" aria-label="Önceki" onClick={prevImage}>‹</button>
            )}
            {activeIndex < images.length - 1 && (
              <button type="button" className="gallery-arrow next" aria-label="Sonraki" onClick={nextImage}>›</button>
            )}
          </div>
          <div className="thumbs">
            {images.map((img, idx) => (
              <button key={idx} className={`thumb ${activeIndex === idx ? 'active' : ''}`} onClick={() => setActiveIndex(idx)} aria-label={`Görsel ${idx+1}`}>
                <img src={img} alt={`Ürün görsel ${idx+1}`} />
              </button>
            ))}
          </div>
        </div>
        <div className="product-details">
          <nav className="product-breadcrumb" aria-label="breadcrumb">
            <Link to="/" className="text-muted">Anasayfa</Link>
            <span className="bc-sep">/</span>
            <Link to="/urunler" className="text-muted">Tüm Ürünler</Link>
            <span className="bc-sep">/</span>
            <a href="#" className="text-muted">{product.category}</a>
            <span className="bc-sep">/</span>
            <span className="text-current">{product.name}</span>
          </nav>

          <h1 className="product-title">{product.name}</h1>
          <div className="product-meta">
            <span className={`stock-pill ${product.inStock ? 'in' : 'out'}`}>{product.inStock ? 'Stokta' : 'Stokta Yok'}</span>
            <span className="sku">SKU: {product.sku}</span>
          </div>

          <p className="product-description">
            Narin dokuya sahip bu elbise, gündelik şıklık ve özel günlerin zarafeti için tasarlandı. 
            Akıcı kumaşı, rahat kalıbı ve dikkatli dikiş detaylarıyla gün boyu konfor sağlar. 
            Minimal çizgiler ve romantik siluet, sezonun ruhunu yansıtır.
          </p>

          <details className="acc product-features" aria-labelledby="urun-ozellikleri-baslik">
            <summary id="urun-ozellikleri-baslik">Ürün Özellikleri</summary>
            <div className="acc-body">
              <ul className="features-list">
                <li><span className="feat-label">Kumaş:</span> %100 Pamuk</li>
                <li><span className="feat-label">Renk:</span> Pembe</li>
                <li><span className="feat-label">Kalıp:</span> Normal</li>
                <li><span className="feat-label">Uzunluk:</span> Midi</li>
                <li><span className="feat-label">Astar:</span> Var</li>
                <li><span className="feat-label">Üretim:</span> Türkiye</li>
              </ul>
            </div>
          </details>

          <div className="product-price">₺{product.price}</div>

          <div className="product-options">
            <div className="options-row">
              <div className="option-col">
                <label className="form-label">Beden Seçiniz</label>
                <div className="select-wrapper">
                  <select className="form-select product-select" defaultValue="">
                    <option value="" disabled>Beden seçin</option>
                    {['XS','S','M','L','XL'].map(size => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="option-col">
                <label className="form-label">Renk Seçiniz</label>
                <div className="select-wrapper">
                  <select className="form-select product-select" defaultValue="Pembe">
                    <option value="" disabled>Renk seçin</option>
                    {['Pembe', 'Bordo', 'Beyaz', 'Krem', 'Siyah'].map(color => (
                      <option key={color} value={color}>{color}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="product-actions">
            <button className="btn btn-romantic-outline w-100 mb-3">Sepete Ekle</button>
            <button className="btn btn-romantic-outline w-100">Favorilere Ekle</button>
          </div>

          <div className="product-accordions">
            <details className="acc">
              <summary>Kargo & Teslimat</summary>
              <div className="acc-body">
                <ul>
                  <li>500₺ üzeri siparişlerde kargo ücretsizdir.</li>
                  <li>Hafta içi 14:00’e kadar verilen siparişler aynı gün kargoya verilir.</li>
                  <li>Teslimat süresi: 1-3 iş günü (bölgeye göre değişebilir).</li>
                </ul>
              </div>
            </details>
            <details className="acc">
              <summary>Ödeme Seçenekleri</summary>
              <div className="acc-body">
                <ul>
                  <li>Kredi/Banka kartı ile tek çekim veya taksitli ödeme.</li>
                  <li>3D Secure ile güvenli ödeme.</li>
                  <li>Kapıda ödeme: Yakında.</li>
                </ul>
              </div>
            </details>
            <details className="acc">
              <summary>İade & Değişim</summary>
              <div className="acc-body">
                <p>Ürünü teslim aldıktan sonra 30 gün içinde koşulsuz iade ve değişim hakkınız vardır. 
                Ürün, kullanılmamış ve tekrar satılabilir durumda olmalıdır.</p>
              </div>
            </details>
            <details className="acc">
              <summary>Bakım & Kullanım</summary>
              <div className="acc-body">
                <ul>
                  <li>Maksimum 30°C’de nazik yıkama önerilir.</li>
                  <li>Ağartıcı kullanmayınız, düşük ısıda ütüleyiniz.</li>
                  <li>Uzun ömür için ters çevirerek yıkayınız.</li>
                </ul>
              </div>
            </details>
            <details className="acc">
              <summary>Beden & Kalıp</summary>
              <div className="acc-body">
                <p>Model 1.75 m, 36 beden; ürünün üzerinde S beden bulunmaktadır. 
                Kalıp normaldir, kendi bedeninizi tercih edebilirsiniz.</p>
              </div>
            </details>
          </div>

        </div>
      </div>

      {/* Share & Reviews */}
      <section className="product-social-reviews">
        <div className="share-bar" aria-label="Sosyal Paylaşım">
          <span className="share-label">Paylaş:</span>
          <a className="share-btn fb" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
          <a className="share-btn tw" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noreferrer" aria-label="Twitter">t</a>
          <a className="share-btn wa" href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`} target="_blank" rel="noreferrer" aria-label="WhatsApp">w</a>
          <button type="button" className="share-btn copy" onClick={()=>{ navigator.clipboard && navigator.clipboard.writeText(shareUrl) }} aria-label="Bağlantıyı kopyala">⧉</button>
          <button type="button" className="share-btn native" onClick={onShare} aria-label="Paylaş">↗</button>
        </div>

        <div className="reviews-block">
          <h2 className="reviews-title">Yorumlar</h2>
          <form className="review-form" onSubmit={submitReview}>
            <div className="rf-row">
              <input className="form-control rf-input" placeholder="Adınız" value={reviewForm.name} onChange={(e)=> setReviewForm(s=>({...s, name: e.target.value}))} />
              <select className="form-select rf-select" value={reviewForm.rating} onChange={(e)=> setReviewForm(s=>({...s, rating: e.target.value}))}>
                {[5,4,3,2,1].map(r => <option key={r} value={r}>{r} ★</option>)}
              </select>
            </div>
            <textarea className="form-control rf-textarea" rows={3} placeholder="Deneyiminizi paylaşın" value={reviewForm.text} onChange={(e)=> setReviewForm(s=>({...s, text: e.target.value}))} />
            <div className="rf-photos">
              <label className="rf-upload">
                <input type="file" accept="image/*" multiple onChange={handlePhotoSelect} />
                Fotoğraf ekle
              </label>
              <div className="rf-previews">
                {reviewPhotos.map((p, i)=> (
                  <div key={i} className="rf-preview"><img src={p.url} alt={`Yüklenen ${i+1}`} /></div>
                ))}
              </div>
            </div>
            <button type="submit" className="btn btn-romantic rf-submit">Yorumu Gönder</button>
          </form>

          <div className="reviews-toolbar">
            <span className="filter-label" style={{marginRight: '6px'}}>Sırala:</span>
            <div className="star-sort" role="group" aria-label="Puan ile filtrele/sırala">
              {[5,4,3,2,1].map(val => (
                <button
                  key={val}
                  type="button"
                  className={`star-btn ${minRating === val ? 'active' : ''}`}
                  onClick={()=> setMinRating(prev => prev === val ? 0 : val)}
                  aria-label={`${val} ve üzeri`}
                  title={`${val} ve üzeri`}
                >
                  {'★'.repeat(val)}
                </button>
              ))}
            </div>
          </div>

          <ul className="reviews-list">
            {reviews
              .filter(r => minRating === 0 || r.rating >= minRating)
              .sort((a,b) => b.rating - a.rating || (a.date < b.date ? 1 : -1))
              .map(r => (
              <li key={r.id} className="review-item">
                <div className="review-head">
                  <div className="avatar">{r.name.charAt(0).toUpperCase()}</div>
                  <div className="meta">
                    <div className="name">{r.name}</div>
                    <div className="stars">{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}<span className="rating-fraction"> {r.rating}/5</span></div>
                  </div>
                  <div className="date">{r.date}</div>
                </div>
                <p className="review-text">{r.text}</p>
                {r.photos && r.photos.length > 0 && (
                  <div className="review-photos">
                    {r.photos.map((url, i) => (
                      <img key={i} src={url} alt={`Yorum fotoğraf ${i+1}`} />
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

    </main>
  )
}

function PasswordProtection() {
  const [password, setPassword] = React.useState('')
  const [isAuthenticated, setIsAuthenticated] = React.useState(() => {
    if (typeof window === 'undefined') return false
    return sessionStorage.getItem('nam_auth') === '1'
  })
  const [error, setError] = React.useState('')
  const FIXED_PASSCODE = 'olhxev'

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password === FIXED_PASSCODE) {
      setIsAuthenticated(true)
      sessionStorage.setItem('nam_auth', '1')
      setError('')
    } else {
      setError('Yanlış şifre. Lütfen tekrar deneyin.')
      setPassword('')
    }
  }

  if (isAuthenticated) {
    return null
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, #f8f0f0 0%, #f0e6e6 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      fontFamily: 'Nunito, sans-serif'
    }}>
      <div style={{
        background: 'white',
        padding: '3rem 2.5rem',
        borderRadius: '20px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
        textAlign: 'center',
        maxWidth: '400px',
        width: '90%'
      }}>
        <div style={{ marginBottom: '2rem' }}>
          <img src={logo} alt="NAM Logo" style={{ height: '60px', marginBottom: '1rem' }} />
          <h1 style={{ 
            fontFamily: 'Playfair Display, serif', 
            fontSize: '1.8rem', 
            color: '#2b2b2b',
            marginBottom: '0.5rem'
          }}>
            NAM Official
          </h1>
          <p style={{ color: '#5a4a4a', fontSize: '0.95rem' }}>
            Siteye erişim için şifre gerekli
          </p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.5rem' }}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Şifre girin"
              style={{
                width: '100%',
                padding: '0.8rem 1rem',
                border: '2px solid #e0e0e0',
                borderRadius: '12px',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border-color 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = '#d4a5a5'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
            {error && (
              <p style={{ 
                color: '#e74c3c', 
                fontSize: '0.85rem', 
                marginTop: '0.5rem',
                marginBottom: 0
              }}>
                {error}
              </p>
            )}
          </div>
          
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.8rem 1.5rem',
              background: 'linear-gradient(45deg, #d4a5a5, #c49595)',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)'
              e.target.style.boxShadow = '0 8px 25px rgba(212, 165, 165, 0.3)'
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = 'none'
            }}
          >
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  )
}

function App() {
  React.useEffect(() => {
    const widget = document.getElementById('tawk-widget')
    const footer = document.querySelector('.footer')
    if (!widget || !footer) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          widget.classList.add('at-footer')
        } else {
          widget.classList.remove('at-footer')
        }
      })
    }, { root: null, threshold: 0.01 })
    io.observe(footer)
    return () => io.disconnect()
  }, [])

  return (
    <>
      <PasswordProtection />
      <HashRouter>
        <TopStripe />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/urun/:slug" element={<ProductPage />} />
          <Route path="/urunler" element={<AllProductsPage />} />
          <Route path="/kampanyalar" element={<PlaceholderPage title="Kampanyalar" />} />
          <Route path="/siparis-takibi" element={<PlaceholderPage title="Sipariş Takibi" />} />
          <Route path="/yeni-gelenler" element={<PlaceholderPage title="Yeni Gelenler" />} />
          <Route path="/hesabim" element={<PlaceholderPage title="Hesabım" />} />
          <Route path="/favorilerim" element={<PlaceholderPage title="Favorilerim" />} />
          <Route path="/sepetim" element={<PlaceholderPage title="Sepetim" />} />
        </Routes>
        <footer className="footer">
          <div className="container">
            <div className="row g-4">
              <div className="col-12 col-md-4">
                <div className="footer-brand">
                  <div className="footer-logo">
                    <img src={logo} alt="NAM Logo" className="footer-logo-img" />
                    <span className="footer-brand-text">NAM OFFICIAL</span>
                  </div>
                  <p className="footer-description">
                    Modern yaşamın dinamiklerine uygun, 
                    zarif ve kaliteli tasarımlar.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-2">
                <h5 className="footer-title">Kurumsal</h5>
                <ul className="footer-links">
                  <li><a href="/hakkimizda">Hakkımızda</a></li>
                  <li><a href="/iletisim">İletişim</a></li>
                  <li><a href="/kariyer">Kariyer</a></li>
                </ul>
              </div>
              <div className="col-12 col-md-2">
                <h5 className="footer-title">Müşteri</h5>
                <ul className="footer-links">
                  <li><a href="/siparis-takip">Sipariş Takip</a></li>
                  <li><a href="/iade-degisim">İade & Değişim</a></li>
                  <li><a href="/sss">S.S.S</a></li>
                </ul>
              </div>
              <div className="col-12 col-md-2">
                <h5 className="footer-title">Yasal</h5>
                <ul className="footer-links">
                  <li><a href="/gizlilik">Gizlilik Politikası</a></li>
                  <li><a href="/kullanim-kosullari">Kullanım Koşulları</a></li>
                  <li><a href="/kvkk">KVKK</a></li>
                </ul>
              </div>
              <div className="col-12 col-md-2">
                <h5 className="footer-title">Sosyal Medya</h5>
                <div className="social-links">
                  <a href="#" className="social-link">Instagram</a>
                  <a href="#" className="social-link">Facebook</a>
                  <a href="#" className="social-link">Twitter</a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="row align-items-center">
                <div className="col-12 col-md-6">
                  <p className="copyright">© {new Date().getFullYear()} NAM Official. Tüm hakları saklıdır.</p>
                </div>
                <div className="col-12 col-md-6">
                  <div className="payment-methods">
                    <span>Güvenli Ödeme:</span>
                    <div className="payment-icons">
                      <img src="https://connect.endeavor.org.tr/wp-content/uploads/2020/07/iyzico-1-1170x877.jpg" alt="iyzico" style={{height: '40px', marginRight: '8px'}} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        
        {/* Tawk.to Chat Widget */}
        <div id="tawk-widget" className="tawk-widget">
          <div className="tawk-chat-button" onClick={() => window.tawk && window.tawk.toggle()}>
            <div className="tawk-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16Z" fill="currentColor"/>
                <path d="M7 9H17V11H7V9ZM7 12H15V14H7V12Z" fill="currentColor"/>
              </svg>
            </div>
            <span className="tawk-text">Canlı Destek</span>
          </div>
        </div>
      </HashRouter>
    </>
  )
}

export default App
