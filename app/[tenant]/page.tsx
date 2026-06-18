// app/[tenant]/page.tsx
import { dealersData } from '../../data/dealers';
import { notFound } from 'next/navigation';

export default async function TenantPage({ params }: { params: Promise<{ tenant: string }> }) {
  const { tenant } = await params;
  const dealer = dealersData[tenant];

  if (!dealer) {
    notFound();
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
      {/* Dynamic Colored Corporate Header */}
      <header style={{ backgroundColor: dealer.primaryColor, color: 'white', padding: '2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: '800', tracking: '-0.02em' }}>{dealer.companyName}</h1>
            <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>{dealer.region}</p>
          </div>
          <div style={{ textAlign: 'right', fontSize: '0.9rem' }}>
            <p><strong>Direct Hotline:</strong> {dealer.phone}</p>
            <p><strong>Inquiries:</strong> {dealer.contactEmail}</p>
          </div>
        </div>
      </header>

      {/* Hero Showcase Block */}
      <section style={{ maxWidth: '1200px', margin: '3rem auto 0 auto', padding: '0 1.5rem' }}>
        <div style={{ background: 'white', padding: '3rem 2rem', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', borderLeft: `8px solid ${dealer.accentColor}` }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0f172a', marginBottom: '1rem', lineHeight: '1.2' }}>
            {dealer.headline}
          </h2>
          <p style={{ color: '#64748b', maxWidth: '700px' }}>
            This heavy machinery web portal layout parameters, tracking streams, and asset components are loaded dynamically out of the centralized system infrastructure filtered via node subdomains.
          </p>
        </div>
      </section>

      {/* Live Heavy Lifting Machinery Catalog */}
      <main style={{ maxWidth: '1200px', margin: '3rem auto', padding: '0 1.5rem' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0f172a', marginBottom: '1.5rem' }}>
          Featured Fleet Inventory Units Available for Project Procurement
        </h3>
        
        <div className="crane-grid">
          {dealer.featuredCranes.map((crane, idx) => (
            <div key={idx} className="crane-card">
              <img src={crane.image} alt={crane.model} className="crane-img" />
              <div className="crane-info">
                <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>{crane.model}</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: '#475569' }}>
                  <div>🏢 <strong>Max Lift Capacity:</strong> {crane.capacity}</div>
                  <div>🏗️ <strong>Max Boom Length:</strong> {crane.boomLength}</div>
                </div>
                <button style={{ marginTop: '1.5rem', width: '100%', padding: '0.75rem', border: 'none', background: dealer.primaryColor, color: 'white', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer' }}>
                  Request Fleet Allocation Spec Sheets
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
