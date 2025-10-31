"use client";
import { useState } from "react";

export default function Page(){
  const [finish, setFinish] = useState("");
  return (<>
    <header className="nav" style={{borderBottom:"1px solid #eee"}}>
      <div className="container nav-inner" style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:".9rem 0"}}>
        <div className="brand" style={{display:"flex",alignItems:"center",gap:"12px"}}>
          <img src="/logo.svg" alt="AICA Sunmica logo" style={{height:34}} />
          <b style={{color:"var(--ink)"}}>AICA SUNMICA®</b>
        </div>
        <nav>
          <a href="#about">About</a>
          <a href="#finishes" style={{marginLeft:12}}>Finishes</a>
          <a href="#applications" style={{marginLeft:12}}>Applications</a>
          <a href="#infrastructure" style={{marginLeft:12}}>Infrastructure</a>
          <a href="#lead" className="btn btn-primary" style={{marginLeft:16}}>Get Free Consult</a>
        </nav>
      </div>
    </header>

    <section className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <span className="badge">Decorative Laminates · Japanese Technology</span>
          <h1>Decor That Lasts: AICA SUNMICA® Decorative Laminates</h1>
          <p className="sub">Premium laminates trusted for decades—engineered with Japanese technology. Create durable, beautiful kitchens, wardrobes and wall panels with designs that stay in fashion.</p>
          <div className="rtb">
            <div className="item"><b>Durable Surfaces</b><br/>Wear, scratch & scuff resistance</div>
            <div className="item"><b>Design Depth</b><br/>Woodgrains, solids, matt/anti-finger & gloss</div>
          </div>
          <a href="#lead" className="btn btn-primary" data-cta="hero">Request Prices & Samples</a>
        </div>
        <div>
          <img src="" alt="Large kitchen showcase placeholder" style={{width:"100%",height:520,objectFit:"cover",background:"#ddd",borderRadius:18}} />
        </div>
      </div>
    </section>

    <section id="about">
      <div className="container" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:28,alignItems:"center"}}>
        <div>
          <h2>About Us</h2>
          <div className="lead" style={{whiteSpace:"pre-wrap"}}>
AICA Laminates India Pvt. Limited has completed over thirteen years of operations in India ever since its establishment in the year 2011.

Today it is the only Japanese company in India, manufacturing high pressure and industrial laminates. The company has its manufacturing unit at Rudrapur, Uttarakhand which is truly world class where all its products are manufactured to the most stringent international standards in tune to its eco-friendly policy of green products.

It also has its own R&D centre striving for continuous upgradation of technology as per the Japanese Kaizen & 5s principles. Its endeavour has been to bring out a combination of environment and design oriented operations. The company has branches and dealer network all over India. The combination of Japanese technology and world renowned quality process brings a perfect fusion in the field of laminates. The company’s commitment to offer excellence in customer’s service and satisfaction remains steadfast.

Brand Sunmica Strong & Impeccably Beautiful

Sunmica: is a flagship brand in India with proven track record of quality, durability and reliability over the years. In fact it has become more of a generic brand in nature.With a wide range of beautiful colours, exotic designs and unique performance features, you're sure to find Sunmica range of laminates fitting your surfaces with style. Superior Japanese technology ensures them to become more everlasting among the contemporaries.
          </div>
        </div>
        <div>
          <img src="" alt="About AICA Sunmica image placeholder" style={{width:"100%",height:420,objectFit:"cover",background:"#ddd"}} />
        </div>
      </div>
    </section>

    <section id="finishes" style={{background:"var(--bg-soft)"}}>
      <div className="container">
        <h2>Our Finishes</h2>
        <div className="grid-4">
          <div className="card finish">Woodgrains</div>
          <div className="card finish">Solid Colours</div>
          <div className="card finish">Matt / Anti-Finger</div>
          <div className="card finish">High Gloss</div>
        </div>
      </div>
    </section>

    <section id="applications">
      <div className="container">
        <h2>Applications</h2>
        <div className="grid-3">
          <div className="card"><img src="" alt="Kitchen" style={{height:220,background:"#ddd"}}/><h3>Kitchens</h3><p>Cabinets, shutters and backsplashes with durable, easy-clean finishes.</p></div>
          <div className="card"><img src="" alt="Wardrobe" style={{height:220,background:"#ddd"}}/><h3>Wardrobes</h3><p>Soft-touch matt and woodgrains for a warm, premium look.</p></div>
          <div className="card"><img src="" alt="Wall Panels" style={{height:220,background:"#ddd"}}/><h3>Wall Panels</h3><p>Feature walls and cladding with consistent shade and texture.</p></div>
        </div>
      </div>
    </section>

    <section id="infrastructure">
      <div className="container" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:28,alignItems:"center"}}>
        <div>
          <h2>Our Infrastructure</h2>
          <div className="lead" style={{whiteSpace:"pre-wrap"}}>
AICA Laminates India Pvt. Ltd. has a manufacturing factory in Rudrapur City, Uttarakhand State. Our Rudrapur-factory manufactures high pressure laminates and industrial laminates and can provide high quality laminates incorporating Japanese technology. We operate based on three ISO management system standards: ISO 9001, ISO 14001 and ISO 45001. And we also implement the Japanese "KAIZEN method" (Improving activity method) to maximize production and minimize scrap.

Manufacturing Facility

Resin

We have well-controlled storage tanks and sufficient kettles to produce high-quality resins. And we produce based on resin recipes that incorporate Japanese resin technology.
          </div>
        </div>
        <div>
          <img src="" alt="Infrastructure image 1" style={{width:"100%",height:200,background:"#ddd",marginBottom:12}}/>
          <img src="" alt="Infrastructure image 2" style={{width:"100%",height:200,background:"#ddd"}}/>
        </div>
      </div>
    </section>

    <section id="specs">
      <div className="container">
        <h2>Technical Advantages</h2>
        <div className="grid-3">
          <div className="card"><h3>Surface Strength</h3><p>Engineered for wear, scratch and scuff resistance.</p></div>
          <div className="card"><h3>Dimensional Stability</h3><p>Maintains flatness and bond performance.</p></div>
          <div className="card"><h3>Hygiene & Care</h3><p>Easy-clean surfaces; anti-finger options available.</p></div>
        </div>
      </div>
    </section>

    <section id="lead">
      <div className="container">
        <div className="card" style={{padding:24}}>
          <h2>Get Prices, Samples & Dealer Demo</h2>
          <p className="lead">Share your project details and preferred finishes. Our team will connect within 24 hours.</p>
          <form onSubmit={async(e)=>{
            e.preventDefault();
            const data = Object.fromEntries(new FormData(e.currentTarget).entries());
            try{
              const res = await fetch("/api/lead",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});
              const json = await res.json();
              alert(json.message||"Thanks! We will reach out shortly.");
              e.currentTarget.reset();
            }catch(err){ console.error(err); alert("Please try again.");}
          }} style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
            <div style={{gridColumn:"1/-1"}}>
              <label htmlFor="name">Full Name</label>
              <input id="name" name="name" placeholder="Enter your name" required />
            </div>
            <div>
              <label htmlFor="phone">Mobile Number</label>
              <input id="phone" name="phone" placeholder="10-digit mobile" required />
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input id="city" name="city" placeholder="e.g., Delhi" />
            </div>
            <div>
              <label htmlFor="finish">Preferred Finish</label>
              <select id="finish" name="finish" value={finish} onChange={(e)=>setFinish(e.target.value)}>
                <option value="">Select</option>
                <option>Woodgrain</option>
                <option>Solid Colour</option>
                <option>Matt / Anti-Finger</option>
                <option>Gloss / High-Gloss</option>
              </select>
            </div>
            <div style={{gridColumn:"1/-1"}}>
              <label htmlFor="notes">Tell us about your space</label>
              <textarea id="notes" name="notes" placeholder="Kitchen, wardrobes, wall panels… approx. size, look you want"></textarea>
            </div>
            <label style={{gridColumn:"1/-1",display:"flex",gap:".6rem",alignItems:"flex-start"}}>
              <input type="checkbox" name="consent" required/> I agree to be contacted by AICA SUNMICA® for this enquiry.
            </label>
            <button type="submit" className="btn btn-primary" style={{gridColumn:"1/-1",justifyContent:"center"}}>Get Call-Back</button>
          </form>
        </div>
      </div>
    </section>

    <section className="container cta">
      <div className="container">
        <h2>Ready to Upgrade Your Interiors?</h2>
        <p className="lead" style={{color:"#ffe6e8"}}>Ask for a personalized finish shortlist and free samples from AICA SUNMICA®.</p>
        <a href="#lead" className="btn btn-outline">Request Free Consult</a>
      </div>
    </section>

    <section id="faq" style={{background:"var(--bg-soft)"}}>
      <div className="container">
        <h2>FAQs</h2>
        <details><summary>Can I get samples at home?</summary><p>Yes. Depending on your location, we arrange a home visit or a store demo through our authorized partners.</p></details>
        <details><summary>Are anti-finger or matt finishes available?</summary><p>Yes, select ranges offer soft-touch matt and anti-finger options.</p></details>
        <details><summary>Do you provide installation?</summary><p>We connect you with trained partners and share best-practice guidelines for carpenters.</p></details>
        <details><summary>How fast can I get a quote?</summary><p>Typically within 24–48 hours after we understand your requirement and finishes.</p></details>
      </div>
    </section>

    <div className="sticky-bar">
      <b>Get a Free Design Consult</b>
      <a href="#lead" className="btn btn-primary">Book Now</a>
    </div>
  </>);
}