// app/page.tsx
import { dealersData } from '../data/dealers';

export default function PlatformHome() {
  return (
    <div className="hub-container">
      <div style={{ textAlign: 'center', maxWidth: '800px' }}>
        <span style={{ color: '#f59e0b', textTransform: 'uppercase', tracking: '0.1em', fontSize: '0.9rem', fontWeight: 'bold' }}>
          Enterprise Admin Environment
        </span>
        <h1 style={{ fontSize: '3rem', fontWeight: '800', marginTop: '0.5rem', marginBottom: '1rem' }}>
          Apex Global Multi-Tenant CMS
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '1.2rem' }}>
          Deploying specialized regional web platforms from one unified engine. Select an active fleet hub node to preview live dealer configurations.
        </p>
      </div>

      <div className="hub-card-grid">
        {Object.entries(dealersData).map(([subdomain, dealer]) => (
          <a key={dealer.id} href={`/${subdomain}`} className="hub-card">
            <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', marginBottom: '1rem' }}>
              <span className="badge" style={{ background: '#f59e0b', color: '#000' }}>ONLINE ACTIVE</span>
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{dealer.companyName}</h2>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{dealer.region}</p>
            
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem', fontSize: '0.85rem', color: '#cbd5e1' }}>
              <strong>Active Inventory Assets:</strong> {dealer.featuredCranes.length} Industrial Units Live
            </div>
            <div style={{ marginTop: '1rem', color: '#f59e0b', fontSize: '0.9rem', fontWeight: 'bold' }}>
              Launch Live Portal view ↗
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}