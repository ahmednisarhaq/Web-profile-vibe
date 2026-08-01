import { ResumeGate } from "./ResumeGate";

const skills = [
  ["Audit & Standards", ["IFRS / US GAAP", "ISA / PCAOB", "ISQM 1 & 2", "IESBA Code", "Companies Act 2017"]],
  ["Tax & Regulation", ["Pakistan Tax Law", "US IRS Sections 305(c), 864(b)(2) & 871(m)", "Cayman Islands Frameworks", "OECD Pillar 2 (GLoBE)", "FATCA / CRS"]],
  ["Technology & Tools", ["EY Canvas / Helix / Atlas", "AI Agent Development", "Data Analytics", "Microsoft Office", "Digital Archival Systems"]],
  ["Sectors", ["Hedge Funds & Private Equity", "Asset Management", "Banking & Insurance", "Pharma & Education", "SPVs & Structured Finance"]],
];

const jobs = [
  {
    role: "Audit Senior",
    company: "EY Cayman Services Ltd.",
    meta: "Grand Cayman · January 2026 — Present",
    bullets: [
      "Audit high-volume investment portfolios exceeding $78B in total AUM, covering private equity, private debt, swaps, options, CDS, swaptions, equity swaps, currency forwards, futures, preferred shares, warrants and SPVs.",
      "Inspect complex private-investment valuations, cap tables and investee-company financial health, applying US GAAP, PCAOB standards and EY audit methodology.",
      "Assess Master-Feeder, GP and LP structures, including splitters and blockers used for carry interest, management fees and tax-planning efficiency.",
      "Analyze OECD Pillar 2, ASC 740 and taxability across 60+ jurisdictions, together with FATCA, CRS, K-1, W-8 and specialized US IRS requirements.",
      "Engineered three AI agents for RGL/URGL validation, data-completeness checks and tax research, with projected annual savings of 250+ billable hours.",
    ],
    tags: ["US GAAP", "PCAOB", "EY Canvas", "Atlas", "OECD Pillar 2", "AI Agents"],
  },
  {
    role: "Audit Quality Supervisor",
    company: "FNS & Co.",
    meta: "Karachi · July 2025 — October 2025",
    bullets: [
      "Ensured audit documentation aligned with ISAs, ICAP requirements, the IESBA Code and the Companies Act, 2017.",
      "Served as the primary liaison for ICAP Statutory Oversight Reviews, improving regulator access, transparency and inspection readiness.",
      "Designed a searchable data-warehousing structure for audit files, replacing fragmented manual archives with a controlled digital system.",
      "Implemented ISQM 1 and ISQM 2 across the firm, refreshing quality policies, monitoring processes and training protocols.",
    ],
    tags: ["ISQM 1 & 2", "ICAP Liaison", "Quality Management", "Data Warehousing"],
  },
  {
    role: "Audit Senior",
    company: "EY Ford Rhodes",
    meta: "Karachi · May 2022 — May 2025",
    bullets: [
      "Led statutory and financial audits across banking, insurance, asset management, logistics, aviation, pharmaceutical, healthcare and education sectors.",
      "Planned engagement strategies, led fieldwork and maintained client and executive communication from initial planning through final delivery.",
      "Applied IFRS, International Standards on Auditing and industry-specific reporting requirements to complex engagements.",
      "Finalized financial statements, audit and review reports, representation letters, board communications and other assurance deliverables.",
      "Reviewed working papers and coached junior team members while managing quality and deadlines across concurrent engagements.",
    ],
    tags: ["IFRS", "ISA", "EY GAM", "Team Leadership", "Financial Reporting"],
  },
];

const initiatives = [
  {
    number: "01",
    title: "AI-Powered RGL Validation",
    text: "Engineered three custom AI agents for the Tax Focus Center to automate realized and unrealized gain/loss validation, data-completeness checks and complex client-query drafting.",
    results: ["250+ projected billable hours saved annually", "Faster, more consistent data verification", "Tax research augmented through the EY Worldwide Tax Guide"],
  },
  {
    number: "02",
    title: "Digital Audit Archive",
    text: "Designed and deployed a secure, searchable data warehouse for audit documentation at FNS & Co., enabling efficient retrieval during regulatory inspections.",
    results: ["Replaced fragmented manual filing", "Improved version control and data integrity", "Strengthened ICAP review readiness"],
  },
  {
    number: "03",
    title: "ISQM Implementation",
    text: "Overhauled the firm’s quality-management environment to reflect ISQM 1 and 2 and current IESBA requirements.",
    results: ["Updated firm-wide quality policies", "Aligned monitoring and remediation workflows", "Improved training and compliance discipline"],
  },
];

export default function Home() {
  return (
    <main>
      <nav className="topbar">
        <div className="container navInner">
          <a className="monogram" href="#top" aria-label="Ahmed Nisar home">AN</a>
          <div className="navLinks">
            <a href="#about">About</a>
            <a href="#expertise">Expertise</a>
            <a href="#experience">Experience</a>
            <a href="#initiatives">Initiatives</a>
          </div>
          <ResumeGate variant="compact" />
        </div>
      </nav>

      <div className="container">
        <header className="hero" id="top">
          <div className="photoRing">
            <img src="/ahmed-nisar.png" alt="Ahmed Nisar, Chartered Accountant" width="694" height="604" />
          </div>
          <p className="kicker">Chartered Accountant · ICAP Member #14337</p>
          <h1>Hi, I&apos;m Ahmed Nisar</h1>
          <p className="heroTitle">Audit & Assurance Innovator</p>
          <p className="heroRole">Audit Senior at EY Cayman Services Ltd.</p>
          <p className="workAuthorization">CPD-Authorized to work in North America and the MENA region</p>
          <p className="heroBio">
            I transform complex audit engagements into streamlined, compliant and
            AI-enhanced assurance workflows. My experience spans Pakistan and the
            Cayman Islands, with a focus on IFRS, US GAAP, ISA, PCAOB and
            international investment-fund regulation.
          </p>
          <div className="heroActions">
            <a className="button" href="mailto:ahmednisarhaq@gmail.com">Get in touch</a>
            <ResumeGate />
          </div>
        </header>

        <section className="section" id="about">
          <div className="sectionIntro">
            <p className="sectionNumber">01</p>
            <div>
              <p className="sectionEyebrow">Profile</p>
              <h2>About me</h2>
            </div>
          </div>
          <div className="prosePanel">
            <p className="lead">
              I bridge rigorous professional standards with practical digital
              innovation to make assurance work clearer, faster and more useful.
            </p>
            <p>
              With experience across financial reporting, regulatory compliance,
              complex investment structures and AI-driven automation, I have led
              engagements for global hedge funds, financial institutions and
              businesses across diverse sectors.
            </p>
            <p>
              From implementing ISQM 1 and 2 firm-wide to auditing derivatives,
              private investments and offshore structures, I thrive on solving
              high-stakes challenges with disciplined judgment and a
              data-informed approach.
            </p>
          </div>

          <div className="stats">
            <div><strong>3.5+</strong><span>Years of experience</span></div>
            <div><strong>$78B+</strong><span>Total AUM audited</span></div>
            <div><strong>60+</strong><span>Jurisdictions analyzed</span></div>
            <div><strong>250+</strong><span>Hours saved through AI</span></div>
          </div>
        </section>

        <section className="section" id="expertise">
          <div className="sectionIntro">
            <p className="sectionNumber">02</p>
            <div>
              <p className="sectionEyebrow">Capabilities</p>
              <h2>Skills & technologies</h2>
            </div>
          </div>
          <div className="skillsGrid">
            {skills.map(([title, items]) => (
              <article className="skillCard" key={title as string}>
                <h3>{title}</h3>
                <ul>{(items as string[]).map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <div className="sectionIntro">
            <p className="sectionNumber">03</p>
            <div>
              <p className="sectionEyebrow">Career</p>
              <h2>Work experience</h2>
            </div>
          </div>
          <p className="sectionSummary">
            Experience across global investment funds, assurance quality and
            statutory audit—presented with the detail that matters.
          </p>
          <div className="jobs">
            {jobs.map((job) => (
              <article className="jobCard" key={`${job.company}-${job.meta}`}>
                <div className="jobHeader">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="company">{job.company}</p>
                  </div>
                  <p className="jobMeta">{job.meta}</p>
                </div>
                <ul className="jobBullets">
                  {job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
                <div className="tags">
                  {job.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="initiatives">
          <div className="sectionIntro">
            <p className="sectionNumber">04</p>
            <div>
              <p className="sectionEyebrow">Selected work</p>
              <h2>Featured initiatives</h2>
            </div>
          </div>
          <div className="initiatives">
            {initiatives.map((item) => (
              <article className="initiativeCard" key={item.number}>
                <div className="initiativeTop"><span>{item.number}</span><h3>{item.title}</h3></div>
                <p>{item.text}</p>
                <ul>{item.results.map((result) => <li key={result}>{result}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="education">
          <div>
            <p className="sectionEyebrow">Education</p>
            <h2>Professional foundation</h2>
          </div>
          <div className="educationItems">
            <article>
              <h3>Qualified Chartered Accountant</h3>
              <p>Institute of Chartered Accountants of Pakistan · Member #14337</p>
            </article>
            <article>
              <h3>Bachelor of Accounting & Finance</h3>
              <p>IBA Karachi · GPA 3.72 · 89.11%</p>
            </article>
          </div>
        </section>
      </div>

      <footer className="footer">
        <div className="container footerInner">
          <p className="sectionEyebrow">Let&apos;s work together</p>
          <h2>Have an audit, compliance<br />or automation challenge?</h2>
          <p>I&apos;d be glad to explore how we can build smarter, higher-quality assurance processes.</p>
          <a className="button lightButton" href="mailto:ahmednisarhaq@gmail.com">Contact Ahmed</a>
          <div className="footerMeta"><span>Ahmed Nisar · Chartered Accountant</span><span>© {new Date().getFullYear()}</span></div>
        </div>
      </footer>
    </main>
  );
}
