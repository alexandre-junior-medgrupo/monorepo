import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import React from 'react';

function Hero() {
  return (
    <header className="hero hero--primary">
      <div className="container">
        <h1 className="hero__title">
          <span className="hero__highlight">Templários</span>
        </h1>
        <p className="hero__subtitle">Processos do time</p>
        <div className="hero__button-container">
          <Link className="button button--custom" to="docs/example">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

function Feature({ url, Svg, img, title }) {
  return (
    <Link className="home-feature__link" to={url}>
      {Svg && <Svg className="home-feature__image" alt={title} />}
      {img && <img className="home-feature__image" src={img} />}
    </Link>
  );
}

function Features() {
  return (
    <section>
      <div className="container"></div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="Templários · MEDGRUPO Component Library"
      description="MEDGRUPO Component Library"
    >
      <Hero />
      <main className="home">
        <Features />
      </main>
    </Layout>
  );
}
