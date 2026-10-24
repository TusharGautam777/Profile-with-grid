import { useState } from 'react'
import { Icon, Smiley, Character, CircleBadge, Medal, Barcode, Qr, Stars } from './components.jsx'

const MENU = [
  { id: 'categories', label: 'Categories', icon: 'grid' },
  { id: 'payment', label: 'Payment', icon: 'card' },
  { id: 'authors', label: 'Authors', icon: 'user' },
  { id: 'auction', label: 'Auction', icon: 'hammer' },
  { id: 'sales', label: 'Sales', icon: 'trend' },
  { id: 'reviews', label: 'Reviews', icon: 'star' },
]

export default function App() {
  const [active, setActive] = useState('auction')

  return (
    <main className="board">
      <section className="cols cols-left">
        {/* Photo – purple */}
        <article className="card photo photo-purple">
          <Character variant="jacket" />
        </article>

        {/* Rotating ring */}
        <article className="card ring-card">
          <CircleBadge />
        </article>

        {/* Brand */}
        <article className="card brand">
          <h1 className="brand-title">Butusic</h1>
          <p className="brand-sub">Illustrations<br />Exhibition</p>
          <hr />
          <div className="crypto">
            <span className="btc">₿</span>
            <p>We accept more<br />than just bitcoins</p>
          </div>
          <Barcode />
        </article>

        {/* Location */}
        <article className="card location">
          <div className="loc-head">
            <span className="pin"><Icon name="pin" size={26} /></span>
            <p>1217 Purrweb<br />Street, LA</p>
          </div>
          <h2>First exhibition of illustrations offline</h2>
          <a href="#exhibition">butusic.com/exhibition</a>
        </article>

        {/* Awards */}
        <article className="card awards" aria-label="Awards">
          <Medal /><Medal /><Medal /><Medal />
        </article>

        {/* App store */}
        <a className="card appstore" href="#app">
          <Qr />
          <div className="app-text">
            <strong>AppStore</strong>
            <p>Download the app and get 10% off your first purchase</p>
          </div>
          <span className="app-arrow"><Icon name="arrow" size={20} /></span>
        </a>
      </section>

      <section className="cols cols-right">
        {/* Menu */}
        <nav className="card menu" aria-label="Main">
          <ul>
            {MENU.map(({ id, label, icon }) => (
              <li key={id}>
                <button
                  className={`menu-item ${active === id ? 'is-active' : ''}`}
                  onClick={() => setActive(id)}
                  aria-current={active === id ? 'page' : undefined}
                >
                  <Icon name={icon} />
                  <span>{label}</span>
                  {active === id && <i className="dot" />}
                </button>
              </li>
            ))}
          </ul>
          <hr />
          <button className="menu-item" onClick={() => setActive('contacts')}>
            <Icon name="mail" /><span>Contacts</span>
          </button>
        </nav>

        {/* Perks */}
        <article className="card perks">
          <div className="perk">
            <Smiley size={42} />
            <p>Only exclusive<br />illustrations</p>
          </div>
          <div className="perk">
            <Icon name="box" size={40} />
            <p>We do not sell<br />works on stock</p>
          </div>
        </article>

        {/* Photo – lime */}
        <article className="card photo photo-lime">
          <Character variant="sweater" />
        </article>

        {/* Rating */}
        <article className="card rating">
          <h2>Only the best<br />authors</h2>
          <div className="score">
            <strong>4.97</strong>
            <Stars value={4.5} />
          </div>
          <p className="rating-note">184 guys with a unique vision</p>
          <button className="btn-reviews">
            Best reviews <Icon name="chevron" size={18} />
          </button>
        </article>
      </section>
    </main>
  )
}
