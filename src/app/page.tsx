const features = [
  { number: '01', title: 'One clear view', text: 'Keep your contacts, conversations, and next steps together in one calm workspace.' },
  { number: '02', title: 'Built for momentum', text: 'See what needs attention and move every relationship forward with confidence.' },
  { number: '03', title: 'Your team, aligned', text: 'Give everyone a shared picture of the customer journey, from first hello to long-term partner.' },
];

export default function Home() {
  return (
    <main>
      <nav className="nav wrap" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="ARMOR CRM home"><span className="brand-mark">A</span><span>ARMOR<span className="brand-light"> CRM</span></span></a>
        <a className="nav-link" href="mailto:hello@armorcrm.example">Get in touch <span aria-hidden="true">↗</span></a>
      </nav>
      <section className="hero wrap" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> YOUR CUSTOMER WORKSPACE</p>
          <h1>Relationships are your <em>strongest</em> asset.</h1>
          <p className="intro">Meet ARMOR CRM: a thoughtful home for your customer relationships, built to help your team focus on what matters next.</p>
          <a className="button" href="mailto:hello@armorcrm.example">Let’s talk <span aria-hidden="true">↗</span></a>
          <p className="micro">A stronger foundation for every conversation.</p>
        </div>
        <div className="visual" aria-label="Abstract illustration of connected customer records">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="node node-a"><span className="avatar">J</span><span><b>Jordan Lee</b><small>New opportunity</small></span><span className="node-arrow">↗</span></div>
          <div className="node node-b"><span className="avatar avatar-blue">M</span><span><b>Morgan Patel</b><small>Follow-up due</small></span><span className="node-arrow">↗</span></div>
          <div className="core"><span className="core-shield">A</span><small>YOUR CRM</small></div>
          <div className="spark spark-one">✳</div><div className="spark spark-two">✳</div>
          <span className="visual-caption">GOOD WORK, CONNECTED.</span>
        </div>
      </section>
      <section className="features">
        <div className="wrap feature-inner">
          <div className="section-head"><p className="eyebrow">THE ARMOR ADVANTAGE</p><h2>Less searching.<br/><em>More meaningful work.</em></h2></div>
          <div className="feature-list">{features.map((feature) => <article className="feature" key={feature.number}><span className="feature-number">{feature.number}</span><div><h3>{feature.title}</h3><p>{feature.text}</p></div><span className="feature-plus">↗</span></article>)}</div>
        </div>
      </section>
      <footer className="wrap footer"><a className="brand" href="#home"><span className="brand-mark">A</span><span>ARMOR<span className="brand-light"> CRM</span></span></a><p>Built around better relationships.</p><span>© {new Date().getFullYear()} ARMOR CRM</span></footer>
    </main>
  );
}
