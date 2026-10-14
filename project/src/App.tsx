import { FormEvent, useEffect, useState } from 'react';
import {
  ArrowUpRight,
  BadgeIndianRupee,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  ClipboardList,
  FileImage,
  FileText,
  FolderOpen,
  Landmark,
  Layers3,
  MapPin,
  Menu,
  MessageCircle,
  NotebookTabs,
  PackageOpen,
  Palette,
  PenLine,
  Phone,
  Printer,
  Ruler,
  School,
  Send,
  Sparkles,
  Store,
  X,
  Zap,
} from 'lucide-react';

const phoneNumber = '8928890948';
const whatsappUrl = `https://wa.me/91${phoneNumber}`;
type Page = 'home' | 'services' | 'products' | 'gallery' | 'about' | 'contact';

function getPageFromHash(): Page {
  const page = window.location.hash.replace('#/', '').replace('#', '') as Page;
  return ['home', 'services', 'products', 'gallery', 'about', 'contact'].includes(page) ? page : 'home';
}

const services = [
  { icon: Printer, title: 'Printing Services', text: 'Sharp, reliable printing for documents, projects, forms and everyday business needs.', tone: 'blue' },
  { icon: FileText, title: 'Xerox / Photocopy', text: 'Convenient photocopying for school, office, personal and official documents.', tone: 'orange' },
  { icon: Palette, title: 'Banner & Flex Printing', text: 'Make your message visible with banners and flex prints for spaces and events.', tone: 'yellow' },
  { icon: BadgeIndianRupee, title: 'Cards & Brochures', text: 'Thoughtful visiting cards and brochures that help your work make an impression.', tone: 'pink' },
  { icon: Layers3, title: 'Lamination & Binding', text: 'Neat finishing for important papers, presentations, projects and keepsakes.', tone: 'green' },
  { icon: Sparkles, title: 'Wedding Invitations', text: 'Beautiful invitation printing for celebrations, ceremonies and special moments.', tone: 'violet' },
];

const products = [
  { icon: School, label: 'School supplies', detail: 'Everyday essentials for students', color: 'sky' },
  { icon: BriefcaseBusiness, label: 'Office supplies', detail: 'Practical tools for your desk', color: 'orange' },
  { icon: NotebookTabs, label: 'Notebooks & paper', detail: 'Pages for every idea', color: 'yellow' },
  { icon: PenLine, label: 'Writing instruments', detail: 'Pens, pencils and more', color: 'pink' },
  { icon: FolderOpen, label: 'Files & folders', detail: 'Keep work organized', color: 'green' },
  { icon: PackageOpen, label: 'Other stationery', detail: 'Useful finds for daily life', color: 'blue' },
];

const gallery = [
  { title: 'Visiting cards', tag: 'Printing work', className: 'gallery-card gallery-card--cards' },
  { title: 'Colourful stationery', tag: 'Product display', className: 'gallery-card gallery-card--stationery' },
  { title: 'Event banners', tag: 'Large format', className: 'gallery-card gallery-card--banner' },
  { title: 'Wedding invitations', tag: 'Special occasions', className: 'gallery-card gallery-card--invite' },
  { title: 'Brochure layouts', tag: 'Print design', className: 'gallery-card gallery-card--brochure' },
  { title: 'Your shop photograph', tag: 'Replace this placeholder', className: 'gallery-card gallery-card--shop' },
];

function makeWhatsAppUrl(message: string) {
  return `${whatsappUrl}?text=${encodeURIComponent(message)}`;
}

function Logo() {
  return (
    <a className="brand" href="#/home" aria-label="Laxmi Print Art home">
      <span className="brand-mark"><img src="./Screenshot_2026-10-14_192915.png" alt="" /></span>
      <span className="brand-copy"><strong>Laxmi</strong><em>Print Art</em></span>
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [page, setPage] = useState<Page>(getPageFromHash);
  const [selectedGallery, setSelectedGallery] = useState<typeof gallery[number] | null>(null);
  const [formSent, setFormSent] = useState(false);
  const [formError, setFormError] = useState('');

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleHashChange = () => {
      setPage(getPageFromHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setMenuOpen(false);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const enquire = (service: string) => {
    window.open(makeWhatsAppUrl(`Hello Laxmi Print Art, I would like to enquire about ${service}.`), '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const service = String(data.get('service') || '').trim();
    const quantity = String(data.get('quantity') || '').trim();
    const specs = String(data.get('specs') || '').trim();
    const instructions = String(data.get('instructions') || '').trim();

    if (!name || !service || !quantity) {
      setFormError('Please fill in your name, service and quantity before continuing.');
      setFormSent(false);
      return;
    }

    setFormError('');
    setFormSent(true);
    const message = [
      'Hello Laxmi Print Art, I would like to enquire about a custom printing job.',
      '',
      `Name: ${name}`,
      `Service required: ${service}`,
      `Quantity: ${quantity}`,
      `Size / specifications: ${specs || 'Not specified'}`,
      `Additional instructions: ${instructions || 'None'}`,
      '',
      'I will share any files separately on WhatsApp.',
    ].join('\n');
    window.open(makeWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
    form.reset();
  };

  return (
    <div className={`site-shell page-${page}`}>
      <div className="top-strip">
        <div className="container top-strip__inner">
          <span><MapPin size={14} /> Singh Estate, Kandivali East, Mumbai</span>
          <span className="top-strip__note">Printing • Stationery • Photocopying</span>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-wrap">
          <Logo />
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation menu" aria-expanded={menuOpen}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <nav className={`main-nav ${menuOpen ? 'main-nav--open' : ''}`} aria-label="Main navigation">
            {['Home', 'Services', 'Products', 'Gallery', 'About', 'Contact'].map((item) => (
              <a href={`#/${item.toLowerCase()}`} key={item} onClick={closeMenu}>{item}</a>
            ))}
            <a className="nav-cta" href={makeWhatsAppUrl('Hello Laxmi Print Art, I would like to enquire about your services.')} target="_blank" rel="noreferrer">
              <MessageCircle size={17} /> WhatsApp us
            </a>
          </nav>
        </div>
      </header>

      <main className="page-main">
        <section className="hero" id="home">
          <div className="hero-shape hero-shape--one" />
          <div className="hero-shape hero-shape--two" />
          <div className="container hero__grid">
            <div className="hero__content">
              <div className="eyebrow"><span className="eyebrow-dot" /> Your local print partner</div>
              <h1>Your ideas.<br /><span>Our print.</span><br />Perfect results.</h1>
              <p className="hero__lead">From everyday photocopies to memorable invitations, Laxmi Print Art brings colour, clarity and care to the things you need printed.</p>
              <div className="hero__actions">
                <a className="button button--primary" href={makeWhatsAppUrl('Hello Laxmi Print Art, I would like to enquire about your services.')} target="_blank" rel="noreferrer"><MessageCircle size={19} /> WhatsApp us</a>
                <a className="button button--outline" href={`tel:+91${phoneNumber}`}><Phone size={18} /> Call now</a>
              </div>
              <div className="hero__trust"><div className="trust-icons"><span><Printer size={15} /></span><span><PenLine size={15} /></span><span><FileText size={15} /></span></div><p>Printing, stationery &amp; more<br /><strong>Right here in Kandivali East</strong></p></div>
            </div>
            <div className="hero-art" aria-label="Decorative printing and stationery showcase">
              <div className="hero-art__sun" />
              <div className="paper paper--back"><span>PRINT<br />YOUR<br />IDEAS</span></div>
              <div className="paper paper--middle"><img className="paper-logo" src="./Screenshot_2026-10-14_192915.png" alt="Laxmi Print Art logo" /></div>
              <div className="paper paper--front"><span className="front__corner" /><div className="front__logo">LPA</div><strong>Your story,<br /><em>beautifully printed.</em></strong><small>VISITING CARDS · BROCHURES · INVITES</small></div>
              <div className="hero-art__pen"><span /><i /></div>
              <div className="hero-art__sticker"><Zap size={15} fill="currentColor" /> PRINT<br />WITH<br />PURPOSE</div>
              <div className="hero-art__dots" />
            </div>
          </div>
          <a href="#/services" className="scroll-cue" aria-label="Scroll to services"><span>Scroll to explore</span><ChevronDown size={18} /></a>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-heading"><div><span className="section-kicker">What we do</span><h2>Print work that<br /><span>gets noticed.</span></h2></div><p>Whether it is one important document or a complete set of printed materials, we are here to help turn your requirements into something you can hold with confidence.</p></div>
            <div className="service-grid">{services.map(({ icon: Icon, title, text, tone }) => <article className="service-card" key={title}><div className={`icon-box icon-box--${tone}`}><Icon size={24} /></div><h3>{title}</h3><p>{text}</p><button type="button" onClick={() => enquire(title)}>Enquire on WhatsApp <ArrowUpRight size={16} /></button></article>)}</div>
          </div>
        </section>

        <section className="section products-section" id="products">
          <div className="container">
            <div className="section-heading section-heading--products"><div><span className="section-kicker">For school, work &amp; home</span><h2>Little things that<br /><span>keep you moving.</span></h2></div><p>Browse our stationery categories for useful supplies and everyday essentials. Availability may vary — message us to check what you need.</p></div>
            <div className="product-grid">{products.map(({ icon: Icon, label, detail, color }) => <div className={`product-card product-card--${color}`} key={label}><div className="product-card__art"><Icon size={52} strokeWidth={1.35} /></div><div><h3>{label}</h3><p>{detail}</p></div><ArrowUpRight size={18} className="product-card__arrow" /></div>)}</div>
          </div>
        </section>

        <section className="enquiry-section" id="enquire">
          <div className="container enquiry__grid"><div className="enquiry__intro"><span className="section-kicker section-kicker--light">Have a custom job?</span><h2>Let’s make<br /><em>something great.</em></h2><p>Share a few details and WhatsApp will open with your enquiry ready to send. You can share artwork or files separately in the same chat.</p><div className="enquiry__steps"><div><span>01</span><p>Tell us what you need</p></div><div><span>02</span><p>We discuss the details</p></div><div><span>03</span><p>You approve the direction</p></div></div></div><form className="enquiry-form" onSubmit={handleSubmit}><div className="form-header"><div><span className="form-label">PRINTING ENQUIRY</span><h3>Start with the basics</h3></div><ClipboardList size={27} /></div><label>Name <input name="name" type="text" placeholder="Your name" /></label><div className="form-row"><label>Service required <select name="service" defaultValue=""><option value="" disabled>Select a service</option>{services.map((service) => <option key={service.title}>{service.title}</option>)}</select></label><label>Quantity <input name="quantity" type="text" placeholder="e.g. 100 copies" /></label></div><label>Size or specifications <input name="specs" type="text" placeholder="e.g. A4, colour, one side" /></label><label>Additional instructions <textarea name="instructions" rows={3} placeholder="Anything else we should know?" /></label>{formError && <p className="form-message form-message--error" role="alert">{formError}</p>}{formSent && <p className="form-message form-message--success" role="status"><Check size={15} /> WhatsApp opened with your enquiry.</p>}<button className="button button--dark form-submit" type="submit">Prepare WhatsApp enquiry <Send size={17} /></button><p className="form-note">No files are uploaded here. Attach them directly in WhatsApp after sending your message.</p></form></div>
        </section>

        <section className="section gallery-section" id="gallery"><div className="container"><div className="section-heading"><div><span className="section-kicker">A glimpse of what we make</span><h2>Ideas look better<br /><span>in print.</span></h2></div><p>These demo tiles are ready for your real business photographs. Click any tile to preview it larger.</p></div><div className="gallery-grid">{gallery.map((item, index) => <button className={`${item.className} gallery-item gallery-item--${index + 1}`} key={item.title} type="button" onClick={() => setSelectedGallery(item)} aria-label={`Preview ${item.title}`}><div className="gallery-visual">{index === 0 && <><div className="mini-card mini-card--one">LAXMI<br /><b>PRINT ART</b></div><div className="mini-card mini-card--two">YOUR<br />BRAND</div></>}{index === 1 && <><PenLine size={58} /><NotebookTabs size={42} /></>}{index === 2 && <><span className="banner-copy">MAKE<br />IT<br />VISIBLE</span><Ruler className="banner-ruler" size={90} /></>}{index === 3 && <><span className="invite-flower">✦</span><span className="invite-copy">You are<br /><b>invited</b></span></>}{index === 4 && <><div className="brochure-line" /><FileImage size={54} /><div className="brochure-line brochure-line--short" /></>}{index === 5 && <><Store size={56} /><span className="placeholder-camera">ADD YOUR<br />SHOP PHOTO</span></>}</div><span className="gallery-caption"><span><small>{item.tag}</small><strong>{item.title}</strong></span><ArrowUpRight size={18} /></span></button>)}</div></div></section>

        <section className="about-section" id="about"><div className="container about__grid"><div className="about-art"><div className="about-art__circle"><div className="about-art__seal">LPA<br /><small>PRINT<br />ART</small></div></div><div className="about-note about-note--one">made with<br /><strong>care</strong></div><div className="about-note about-note--two">COLOUR<br />CLARITY<br />CARE</div></div><div className="about-copy"><span className="section-kicker">About Laxmi Print Art</span><h2>Your nearby place for<br /><span>print &amp; stationery.</span></h2><p>Laxmi Print Art is a printing and stationery business serving customers in Singh Estate, Kandivali East, Mumbai. We help with printing services, photocopying, stationery, school and office supplies, and print finishing.</p><p>Have a requirement in mind? Tell us what you need and we will be happy to discuss it with you.</p><a className="text-link" href="#/contact">Find us &amp; get in touch <ArrowUpRight size={17} /></a></div></div></section>

        <section className="contact-section" id="contact"><div className="container"><div className="contact-card"><div className="contact-card__intro"><span className="section-kicker">Come say hello</span><h2>Let’s get<br /><span>your ideas moving.</span></h2><p>For a quick answer, call or message us on WhatsApp.</p><div className="contact-actions"><a className="button button--primary" href={`tel:+91${phoneNumber}`}><Phone size={18} /> Call {phoneNumber}</a><a className="button button--light" href={makeWhatsAppUrl('Hello Laxmi Print Art, I would like to enquire about your services.')} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp us</a></div></div><div className="contact-details"><div className="contact-detail"><MapPin size={21} /><div><small>VISIT US</small><p>Singh Estate, Kandivali East,<br />Mumbai, Maharashtra, India</p></div></div><div className="contact-detail"><Phone size={21} /><div><small>CALL OR WHATSAPP</small><p><a href={`tel:+91${phoneNumber}`}>{phoneNumber}</a></p></div></div><div className="contact-detail"><Landmark size={21} /><div><small>OPENING HOURS</small><p className="placeholder-text">Add verified opening hours here</p></div></div><div className="map-placeholder"><MapPin size={23} /><span>Map link placeholder<br /><small>Add the verified map link later</small></span><ArrowUpRight size={17} /></div></div></div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-grid"><div><Logo /><p className="footer-tagline">Print what matters.<br />Keep what lasts.</p></div><div><h3>Explore</h3><a href="#/services">Services</a><a href="#/products">Products</a><a href="#/gallery">Gallery</a><a href="#/about">About us</a></div><div><h3>Get in touch</h3><a href={`tel:+91${phoneNumber}`}><Phone size={15} /> {phoneNumber}</a><a href={makeWhatsAppUrl('Hello Laxmi Print Art, I would like to enquire about your services.')} target="_blank" rel="noreferrer"><MessageCircle size={15} /> WhatsApp</a><span className="footer-placeholder">Email can be added later</span></div><div className="footer-mark"><div className="footer-dots" /><p>PRINTING<br /><strong>MADE PERSONAL</strong></p></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Laxmi Print Art. All rights reserved.</span><a href="#/home" aria-label="Back to top">Back to top <ArrowUpRight size={15} /></a></div></footer>

      {selectedGallery && <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${selectedGallery.title} preview`} onClick={() => setSelectedGallery(null)}><div className={`${selectedGallery.className} lightbox__content`} onClick={(event) => event.stopPropagation()}><button className="lightbox__close" type="button" onClick={() => setSelectedGallery(null)} aria-label="Close preview"><X size={22} /></button><div className="gallery-visual">{selectedGallery.title === 'Visiting cards' && <><div className="mini-card mini-card--one">LAXMI<br /><b>PRINT ART</b></div><div className="mini-card mini-card--two">YOUR<br />BRAND</div></>}{selectedGallery.title === 'Colourful stationery' && <><PenLine size={88} /><NotebookTabs size={62} /></>}{selectedGallery.title === 'Event banners' && <span className="banner-copy">MAKE<br />IT<br />VISIBLE</span>}{selectedGallery.title === 'Wedding invitations' && <span className="invite-copy">You are<br /><b>invited</b></span>}{selectedGallery.title === 'Brochure layouts' && <FileImage size={88} />}{selectedGallery.title === 'Your shop photograph' && <span className="placeholder-camera">ADD YOUR<br />SHOP PHOTO</span>}</div><div className="lightbox__label"><small>{selectedGallery.tag}</small><h3>{selectedGallery.title}</h3><p>Demo placeholder — replace this tile with your own photograph.</p></div></div></div>}
    </div>
  );
}

export default App;
