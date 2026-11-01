'use client';

import { services } from '@/app/lib/services';

export default function ServicesTable() {
  const rows = services.map((s) => (
    <tr key={s.id} style={styles.tr}>
      <td style={styles.td}>{s.name}</td>
      <td style={styles.td}>{s.plan}</td>
      <td style={styles.td}>{s.status}</td>
      <td style={styles.td}>{s.nextStep}</td>
    </tr>
  ));

  return (
    <section style={styles.card}>
      <h2 style={styles.h2}>Services</h2>
      <p style={styles.sub}>Your active services and next steps.</p>
      <div style={styles.tableWrap}>
        <table style={styles.table}>
          <thead>
            <tr style={styles.tr}>
              <th style={styles.th}>Service</th>
              <th style={styles.th}>Plan</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Next Step</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  card: { maxWidth: '800px', margin: '2rem auto', padding: '0 1rem' },
  h2: { margin: 0, fontSize: '1.5rem', color: '#0f172a' },
  sub: { color: '#64748b', marginTop: '0.25rem' },
  tableWrap: { marginTop: '1.5rem', overflowX: 'auto' },
  table: { width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' },
  tr: { borderBottom: '1px solid #f1f5f9' },
  th: { textAlign: 'left', padding: '1rem', fontSize: '0.85rem', fontWeight: '700', color: '#475569', background: '#f8fafc' },
  td: { padding: '1rem', fontSize: '0.95rem', color: '#334155' },
};
