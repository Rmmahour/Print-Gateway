import Image from "next/image";

export default function Home() {

  const metrics = [
    { value: "3", label: "Regions in active rollout (KSA, UAE, QA)" },
    { value: "30+", label: "Markets served via Basiq360 cloud" },
    { value: "200K+", label: "Codes / day / line supported" },
    { value: "SDK", label: "HP TIJ, KGK, Domino integrations" }
  ];


  return (

    <div className="flex flex-col">
      <header>
        <nav className="max-w-[var(--max-w)] mx-auto flex items-center justify-between gap-4 py-[0.85rem] px-[1.2rem]">
          <div className="flex items-center gap-2 font-extrabold tracking-[0.01em] max-[767px]:flex-col">
            {/* <span className="logo-mark">B3</span> */}
            <Image width={100} height={100} className="max-w-[150px] max-[767px]:max-w-[120px]" src="basiq360-logo.png" alt="Logo" />
            <div> <span style={{ color: "var(--muted);font-weight:500" }}>Print Gateway</span></div>
          </div>
          <div className="flex gap-[1.1rem] text-[0.9rem] text-[var(--muted)] max-[980px]:hidden max-[680px]:hidden">
            <a href="#gcc">GCC Serialization</a>
            <a href="#how">How It Works</a>
            <a href="#clients">Clients</a>
            <a href="#case">Case Study</a>
            <a href="#cred">Proof You Can Trust</a>
          </div>
          <div className="max-[767px]:flex max-[767px]:flex-col max-[767px]:gap-[10px] [&_a]:max-[767px]:py-[8px] [&_a]:max-[767px]:px-[12px] [&_a]:max-[767px]:text-[10px]">
            <a href="#contact" className="btn btn-ghost">Request Whitepaper</a>
            <a href="#partner" className="btn btn-primary btn-cta">Become a Partner</a>
          </div>
        </nav>
      </header>

      <main>
        {/* HERO  */}
        <section className="max-w-[var(--max-w)] mx-auto grid grid-cols-[1.05fr_.95fr] gap-[2.4rem] items-center py-[2.2rem] px-[1.2rem] pb-[2.6rem] max-[980px]:grid-cols-1 max-[680px]:gap-[1.2rem] max-[680px]:py-[1.6rem] max-[680px]:px-[0.9rem] max-[680px]:pb-[2rem]">
          <div>
            <span className="inline-flex items-center gap-2 bg-[rgba(0,75,171,0.08)] border border-[rgba(0,75,171,0.2)] text-[var(--accent)] py-[0.35rem] px-[0.7rem] rounded-full text-[0.72rem] tracking-[0.06em] uppercase">From Ink to Intelligence</span>
            <h1>Your Printers, Now Cloud-Connected.</h1>
            <p><strong>Basiq360 Print Gateway</strong> connects industrial printers (TIJ, CIJ, laser) to a secure cloud so every code you print is serialized, verifiable, and ready for consumer engagement.</p>
            <div className="flex gap-[0.8rem] flex-wrap mt-[1.2rem]">
              <a href="#partner" className="btn btn-primary btn-cta">Get Partner Pricing</a>
              <a href="#contact" className="btn btn-ghost">Download Technical Brief</a>
            </div>
          </div>
          <div className="bg-[var(--bg-panel)] border border-[var(--border)] rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)] pt-[1.2rem] px-[1.2rem] pb-[1.3rem] order-[-1]">
            <h3>Built for GCC 2025–26 Rollouts</h3>
            <small style={{ color: "var(--muted)" }}>Saudi Arabia, UAE & Qatar accelerating QR-based traceability. Your printers can lead the change.</small>
            <div className="grid grid-cols-4 gap-4 mt-[0.9rem] max-[680px]:grid-cols-1">
              {metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-[14px] py-3 px-3.5 hover:shadow-md transition-shadow"
                >
                  <h4 className="m-0 text-[1.35rem] font-semibold text-gray-900">
                    {metric.value}
                  </h4>
                  <p className="mt-0.5 text-[0.75rem] text-gray-600">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GCC  */}
        <section className="max-w-[var(--max-w)] mx-auto pt-[2.2rem] px-[1.2rem] pb-0" id="gcc">
          <h2>The GCC Serialization Wave Is Here</h2>
          <p className="text-[var(--muted)] max-w-[52rem]">QR-based track-and-trace laws in the Gulf require every product to carry a unique, scannable identity — printed on your existing lines and synced to a verified cloud.</p>
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_.9fr] gap-[1.4rem] mt-[1.1rem] [&_.card]:p-[1.2rem] [&_.card]:rounded-[var(--radius-md)]  ">
            <div className="bg-[var(--bg-panel)] border border-[var(--border)]">
              <span className="tag">2025–2026</span>
              <h3>Saudi Arabia, UAE & Qatar are leading.</h3>
              <p>For OEMs and distributors, this is a once-in-a-decade chance to ship smarter printers, bundle cloud services, and win enterprise packaging lines.</p>
              <p><strong>Basiq360 makes your hardware regulation‑ready</strong> — easily, securely, and profitably.</p>
            </div>
            <div className="bg-[var(--bg-panel)] border border-[var(--border)]">
              <h4>What will be enforced?</h4>
              <ul className="m-0 pl-[1.2rem] grid gap-[0.35rem]">
                <li>Unique, serialized QR/DataMatrix codes</li>
                <li>Secure, cloud-side verification</li>
                <li>Track scan events by regulator & retailer</li>
                <li>Consumer engagement on the same code</li>
              </ul>
            </div>
          </div>
        </section>

        {/* BRIDGE  */}
        <section className="max-w-[var(--max-w)] mx-auto pt-[2.2rem] px-[1.2rem] pb-0">
          <h2>We Bridge the Factory Floor and the Cloud</h2>
          <p className="text-[var(--muted)] max-w-[52rem]">Industrial automation DNA meets cloud serialization and GS1 Digital Link / EPCIS 2.0 expertise.</p>
          <div className="grid grid-cols-2 gap-[1.1rem] mt-[1.1rem] [&_.col]:p-[1.1rem] [&_.col]:rounded-[var(--radius-md)] [&_.col]:bg-white [&_.col]:border [&_.col]:border-[var(--border)] [&_.col_h3]:mt-0 [&_.col_h3]:text-[1rem]">
            <div className="col">
              <h3>Industrial Automation Pedigree</h3>
              <ul className="m-0 pl-[1.2rem] grid gap-[0.35rem]">
                <li>Experience with PLCs, MES, line integrations</li>
                <li>Familiar with HP TIJ, KGK, Domino, CIJ</li>
                <li>Engineers who understand the factory floor</li>
              </ul>
            </div>
            <div className="col">
              <h3>Cloud Technology Leadership</h3>
              <ul className="m-0 pl-[1.2rem] grid gap-[0.35rem]">
                <li>Track‑and‑trace, serialization, analytics</li>
                <li>Built for GS1 Digital Link & EPCIS 2.0</li>
                <li>Secure, scalable, multi‑region cloud</li>
              </ul>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS  */}
        <section className="max-w-[var(--max-w)] mx-auto pt-[2.2rem] px-[1.2rem] pb-0" id="how">
          <h2>How It Works</h2>
          <p className="text-[var(--muted)] max-w-[52rem]">Print Gateway sits between your printers and Basiq360 cloud to deliver real‑time codes, verification, and analytics.</p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[1rem] mt-[1rem] 
[&_.step]:bg-white [&_.step]:border [&_.step]:border-[var(--border)] [&_.step]:rounded-[var(--radius-md)] [&_.step]:p-[1rem] 
[&_.step-no]:h-[40px] [&_.step-no]:w-[40px] [&_.step-no]:rounded-full [&_.step-no]:grid [&_.step-no]:place-items-center [&_.step-no]:font-extrabold [&_.step-no]:text-white [&_.step-no]:bg-[linear-gradient(120deg,var(--accent),var(--accent-2))]">
            <div className="step"><div className="step-no">1</div><h4>Connect at the Controller</h4><p>Integrates with your printer SDK or controller (TIJ, CIJ, laser).</p></div>
            <div className="step"><div className="step-no">2</div><h4>Fetch Unique Codes</h4><p>Pulls serialized data in real time via secure REST APIs.</p></div>
            <div className="step"><div className="step-no">3</div><h4>Print & Verify</h4><p>Each code is authenticated and marked as printed in the cloud.</p></div>
            <div className="step"><div className="step-no">4</div><h4>Scan Intelligence</h4><p>Regulators, retailers, and consumers trigger analytics & engagement.</p></div>
          </div>
        </section>

        {/* STATS BAND  */}
        <section className="max-w-[var(--max-w)] mx-auto pt-[2.2rem] px-[1.2rem] pb-0">
          <div className="band bg-white border border-[var(--border)] rounded-[var(--radius-lg)] py-[1.1rem] px-[1rem] mt-[1.1rem] 
[&_.metric-grid]:mt-[0.9rem] [&_.metric-grid]:grid-cols-4 [&_.metric-grid]:grid [&_.metric-grid]:gap-[1rem">
            <h2 style={{ margin: "0 0 .35rem" }}>Numbers That Matter</h2>
            <p className="text-[var(--muted)] max-w-[52rem]">Proof that Print Gateway scales from pilot to production for OEMs, packaging partners, and brands.</p>
            <div className="metric-grid">
              <div className="metric"><h4>30+</h4><p>Live & pilot markets</p></div>
              <div className="metric"><h4>200K+</h4><p>Codes/day per line</p></div>
              <div className="metric"><h4>99.99%</h4><p>API uptime (rolling)</p></div>
              <div className="metric"><h4><span style={{ fontVariantNumeric: "tabular-nums" }}>&lt;120ms</span></h4><p>Avg code fetch latency</p></div>
            </div>
          </div>
        </section>

        {/* CASE STUDY  */}
        <section className="max-w-[var(--max-w)] mx-auto pt-[2.2rem] px-[1.2rem] pb-0" id="case">
          <h2>Case Study: Camelicious, UAE</h2>
          <p className="text-[var(--muted)] max-w-[52rem]">KGK printers connected with Basiq360 cloud to unlock compliance and engagement on every pack.</p>
          <div className="cs-grid grid grid-cols-[1.1fr_.9fr] gap-[1.2rem] mt-[1rem]">
            <div className="panel bg-[var(--bg-panel)] border border-[var(--border)] rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)]" style={{ padding: "1rem" }}>
              <span className="tag">Pilot → Rollout</span>
              <h3>Objectives</h3>
              <ul className="m-0 pl-[1.2rem] grid gap-[0.35rem]">
                <li>Print unique QR on every SKU at line speed</li>
                <li>Verify prints & block duplicates</li>
                <li>Enable anti‑counterfeit checks in market</li>
                <li>Launch consumer rewards on the same code</li>
              </ul>
              <h3 style={{ marginTop: ".9rem" }}>Outcomes</h3>
              <ul className="m-0 pl-[1.2rem] grid gap-[0.35rem]">
                <li>&gt;98% first‑pass print verification</li>
                <li>Real‑time scan analytics by channel</li>
                <li>Retailer & regulator‑ready verification</li>
              </ul>
            </div>
            <div className="panel bg-[var(--bg-panel)] border border-[var(--border)] rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)]" style={{ padding: "1rem" }}>
              <h4>Implementation Snapshots</h4>
              <div className="snapshots grid grid-cols-2 gap-[0.6rem] 
[&_.shot]:bg-white [&_.shot]:border [&_.shot]:border-dashed [&_.shot]:border-[rgba(15,23,42,0.18)] [&_.shot]:rounded-[12px] [&_.shot]:aspect-[16/10] [&_.shot]:grid [&_.shot]:place-items-center [&_.shot]:text-[var(--muted)]">
                <div className="shot">Line Photo</div>
                <div className="shot">Printed QR</div>
                <div className="shot">Scan Analytics</div>
                <div className="shot">Consumer Flow</div>
              </div>
            </div>
          </div>
        </section>

        {/* CLIENTS  */}
        <section className="max-w-[var(--max-w)] mx-auto pt-[2.2rem] px-[1.2rem] pb-0" id="clients">
          <h2>Trusted by Industry Leaders</h2>
          <p className="text-[var(--muted)] max-w-[52rem]">Selected brands, OEMs, and packaging partners across F&B, cosmetics, and household goods.</p>
          <div className="logos grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-[1rem] mt-[1rem] items-center 
max-[680px]:grid-cols-2 
[&_.logo-box]:bg-white [&_.logo-box]:border [&_.logo-box]:border-[var(--border)] [&_.logo-box]:rounded-[14px] [&_.logo-box]:p-[1rem] [&_.logo-box]:grid [&_.logo-box]:place-items-center [&_.logo-box]:aspect-[3/2] [&_.logo-box]:text-[var(--muted)]">
            <div className="logo-box">
              <Image width={100} height={100} src="max.webp" alt="Logo" />
            </div>
            <div className="logo-box">
              <Image width={100} height={100} src="kaff.webp" alt="Logo" />
            </div>
            <div className="logo-box">
              <Image width={100} height={100} src="prayag.webp" alt="Logo" />
            </div>
            <div className="logo-box">
              <Image width={100} height={100} src="idemitsu.webp" alt="Logo" />
            </div>
            <div className="logo-box">
              <Image width={100} height={100} src="plaza.webp" alt="Logo" />
            </div>
            <div className="logo-box">
              <Image width={100} height={100} src="BCH.webp" alt="Logo" />
            </div>
            <div className="logo-box">
              <Image width={100} height={100} src="KEI.webp" alt="Logo" />
            </div>
          </div>
        </section>

        {/* RESOURCES  */}
        <section className="max-w-[var(--max-w)] mx-auto pt-[2.2rem] px-[1.2rem] pb-0" id="resources">
          <h2>Resources</h2>
          <p className="text-[var(--muted)] max-w-[52rem]">Technical docs and templates to help your team evaluate and integrate faster.</p>
          <div className="steps grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[1rem] mt-[1rem] 
[&_.resource]:bg-white [&_.resource]:border [&_.resource]:border-[var(--border)] [&_.resource]:rounded-[var(--radius-md)] [&_.resource]:p-[1rem] [&_.resource]:no-underline [&_.resource]:text-inherit 
[&_.resource:hover]:border-[rgba(0,75,171,.35)]">
            <a href="#contact" className="resource"><div className="step-no">A</div><h4>GCC Serialization Brief</h4><p>2‑page overview + printer readiness checklist.</p></a>
            <a href="#contact" className="resource"><div className="step-no">B</div><h4>Printer SDK Integration Guide</h4><p>Mapping HP TIJ, KGK, Domino controllers to Basiq360 APIs.</p></a>
            <a href="#contact" className="resource"><div className="step-no">C</div><h4>Sample Data Schemas</h4><p>GS1 Digital Link / EPCIS 2.0 payload examples.</p></a>
          </div>
        </section>

        {/* WHY PARTNER WITH US (SVG icons, no emojis)  */}
        <section className="max-w-[var(--max-w)] mx-auto pt-[2.2rem] px-[1.2rem] pb-0" id="partner">
          <h2>Why Partners Choose Basiq360</h2>
          <p className="text-[var(--muted)] max-w-[52rem]">Bundle cloud intelligence with your printers and unlock recurring revenue.</p>
          <div className=".benefits{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1rem;margin-top:1rem}
    .benefit{background:#fff;border:1px solid var(--border);border-radius:var(--radius-md);padding:.9rem;display:flex;gap:.7rem}
    .benefit svg{flex:0 0 28px}">
            <div className="benefit">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="#004bab" strokeWidth="2" /><path d="M8 12l3 3 5-6" stroke="#004bab" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <div><h4>Win More Deals</h4><p>Offer "regulation‑ready" printers that stand out in RFPs.</p></div>
            </div>
            <div className="benefit">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12h14" stroke="#004bab" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <div><h4>Fast Integration</h4><p>SDK connectors for HP TIJ, KGK, Domino; API for others.</p></div>
            </div>
            <div className="benefit">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 3v5l4 2" stroke="#004bab" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <div><h4>Compliance Built‑In</h4><p>Aligned to GS1 Digital Link & Gulf traceability mandates.</p></div>
            </div>
            <div className="benefit">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 10h18M12 20v-6m0 0l-3 3m3-3l3 3" stroke="#004bab" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <div><h4>New Revenue Streams</h4><p>Authentication, engagement & analytics as add‑ons.</p></div>
            </div>
            <div className="benefit">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3 7h7l-5.5 4.5L18 22l-6-3.5L6 22l1.5-8.5L2 9h7l3-7z" stroke="#004bab" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <div><h4>Experienced Team</h4><p>20+ years spanning industrial & enterprise cloud.</p></div>
            </div>
          </div>
        </section>

        {/* CREDIBILITY (no "RTB" wording)  */}
        <section className="max-w-[var(--max-w)] mx-auto pt-[2.2rem] px-[1.2rem] pb-0" id="cred">
          <h2>Proof You Can Trust</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[1rem] mt-[1rem] [&_.cred]:bg-white [&_.cred]:border [&_.cred]:border-[var(--border)] [&_.cred]:rounded-[var(--radius-md)] [&_.cred]:p-[0.9rem] [&_.cred]:flex [&_.cred]:gap-[0.55rem] [&_.cred]:items-start">
            <div className="cred">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="#ffa500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <div><strong>Pilot integrations</strong> live with KGK, HP TIJ, Domino.</div>
            </div>
            <div className="cred">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="#ffa500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <div><strong>Secure cloud platform</strong> with REST APIs built on GS1 Digital Link.</div>
            </div>
            <div className="cred">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="#ffa500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <div><strong>Global footprint</strong> — Canada, UAE, India; 30+ markets.</div>
            </div>
            <div className="cred">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="#ffa500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <div><strong>Trusted by leading brands</strong> across F&B, cosmetic & packaging.</div>
            </div>
            <div className="cred">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="#ffa500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <div><strong>End‑to‑end capability</strong> — serialization, anti‑counterfeit, loyalty.</div>
            </div>
          </div>
        </section>

        {/* CTA  */}
        <section className="max-w-[var(--max-w)] mx-auto pt-[2.2rem] px-[1.2rem] pb-0">
          <div className="bg-white border border-[var(--border)] rounded-[var(--radius-lg)] py-[1.2rem] px-[1rem] flex items-center justify-between gap-[1rem] mt-[2rem] [&>p]:mt-[0.2rem] [&>p]:text-[var(--muted)] [&_.actions]:flex [&_.actions]:gap-[0.8rem] [&_.actions]:flex-wrap">
            <div>
              <h3>Bring Your Printers Into the Cloud Era</h3>
              <p>Your hardware + our cloud = connected packaging that delivers compliance and growth.</p>
            </div>
            <div className="actions">
              <a href="#contact" className="btn btn-primary btn-cta">Partner With Us</a>
              <a href="#contact" className="btn btn-ghost">Book a Technical Call</a>
            </div>
          </div>
        </section>

        {/* CONTACT  */}
        <section className="max-w-[var(--max-w)] mx-auto pt-[2.2rem] px-[1.2rem] pb-0" id="contact" style={{ paddingBottom: '2.6rem' }}>
          <div className="grid grid-cols-[1.1fr_.9fr] gap-[2rem] items-start max-[980px]:grid-cols-1 max-[980px]:gap-[1.2rem]">
            <div className="[&_.contact-copy_h3]:text-[2rem] [&_.contact-copy_h3]:mt-[0.2rem] [&_.contact-copy_h3]:mb-[0.6rem] [&_.contact-copy_p]:text-[var(--muted)] [&_.contact-copy_p]:max-w-[40rem]">
              <h3>Ready to see Print Gateway?</h3>
              <p>Book a walkthrough tailored to your line setup and compliance goals. We'll map your use cases and share a deployment plan.</p>
              <ul className="m-[1rem_0_0] p-0 list-none grid gap-2 [&>li]:flex [&>li]:gap-[0.6rem] [&>li]:items-start [&>li]:text-[var(--text)] [&>li]:before:content-[''] [&>li]:before:mt-[0.5rem] [&>li]:before:h-[0.55rem] [&>li]:before:w-[0.55rem] [&>li]:before:rounded-full [&>li]:before:bg-[var(--success)]">
                <li>Personalized demo for your stakeholders</li>
                <li>Architecture & deployment options</li>
                <li>Security & compliance deep‑dive</li>
              </ul>
            </div>
            {/* <form className="form-card" method="post" action="#">
            <div className="form-grid2">
              <div className="form-row"><label className="required" for="c_name">Name</label><input className="input" id="c_name" name="name" type="text" placeholder="Your Name" required></div>
              <div className="form-row"><label className="required" for="c_email">Business Email</label><input className="input" id="c_email" name="email" type="email" placeholder="name@company.com" required></div>
              <div className="form-row"><label className="required" for="c_phone">Phone</label><input className="input" id="c_phone" name="phone" type="tel" placeholder="Phone" required></div>
              <div className="form-row"><label className="required" for="c_team">Team Size</label>
                <select className="select" id="c_team" name="team" required>
                  <option value="" disabled selected>Select team size</option>
                  <option>1–10</option>
                  <option>11–50</option>
                  <option>51–200</option>
                  <option>201–500</option>
                  <option>500+</option>
                </select>
              </div>
              <div className="form-row" style={{marginTop:'.2rem'}}>
                <button className="submit-btn" type="submit">Request Demo</button>
                <div className="submit-note">By submitting, you agree to be contacted about Basiq360. Your information is kept confidential.</div>
              </div>
            </div>
          </form> */}
          </div>
        </section>
      </main>

      <footer>
        <div>
          <strong>Basiq360 — Cloud Intelligence for the Physical World</strong><br />
          <a href="mailto:partnerships@basiq360.com" style={{ color: "inherit" }}>partnerships@basiq360.com</a>
        </div>
        <div>
          <a href="https://www.basiq360.com" style={{ color: "inherit" }}>www.basiq360.com</a><br />
          © 2025 Basiq360 Global Technologies. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
