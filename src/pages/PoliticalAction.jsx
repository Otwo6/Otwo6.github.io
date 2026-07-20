import './PoliticalAction.css';

export default function PoliticalAction() {
  return (
    <div className="political-action-page">
      <section className="page-hero">
        <div className="page-hero-body">
          <div className="wrap">
            <div className="page-hero-eyebrow">Corona &middot; Norco &middot; Inland Empire</div>
            <h1>Political Action Updates</h1>
          </div>
        </div>
      </section>

      <main>
        <div className="content-wrap">
          <p>
            For more information, contact our{' '}
            <a href="mailto:democratsofcoronanorco@gmail.com" className="inline-link">
              Political Action Committee
            </a>.
          </p>
        </div>

        <div className="section-divider"><div className="rule"></div></div>

        <div className="content-wrap">
          <div className="doc-embed">
            
            {/* The fallback sits behind the iframe until you add a real Google Doc link */}
            <div className="doc-fallback">
              <h3>Political Action document goes here</h3>
              <p>Publish a Google Doc to the web (File &rarr; Share &rarr; Publish to web) and drop its embed link into the iframe <code>src</code> in this page to display your latest political action updates right here.</p>
            </div>
            
            {/* Replace "about:blank" below with your published Google Doc link! */}
            <iframe 
              src="https://docs.google.com/document/d/e/2PACX-1vRBFjqA497GSKYlgyMNB1_DNecD1yLstq_2OVPvDOxjRGzHqT98NdLiEsF6W8lOB2tlyrGmhfBV1wIq/pub?embedded=true" 
              title="Political Action Updates document"
            ></iframe>
            
          </div>
        </div>
      </main>
    </div>
  );
}