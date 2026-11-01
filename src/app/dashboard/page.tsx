'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { clearSession, getSession, useSession } from '@/app/lib/auth';
import { customers } from '@/app/lib/customers';
import ServicesTable from '@/app/dashboard/services';

export default function Dashboard() {
  const router = useRouter();
  const { session, ready } = useSession();
  const [direct, setDirect] = useState<{ email: string } | null>(null);

  useEffect(() => {
    if (!ready) return;
    if (!session) {
      router.push('/login');
      return;
    }
    setDirect(session);
  }, [session, ready, router]);

  if (!ready || !direct) return null;

  const rows = customers.map((c) => (
    <tr key={c.id} style={styles.tr}>
      <td style={styles.td}>{c.name}</td>
      <td style={styles.td}>{c.status}</td>
      <td style={styles.td}>{c.nextStep}</td>
    </tr>
  ));

  return (
    <main style={styles.page}>
      <aside style={styles.sidebar}>
        <a href="/" style={styles.sidebarButton}>Home page</a>
        <button onClick={handleLogout} style={styles.sidebarButton}>logout</button>
      </aside>
      <div style={styles.content}>
        <nav style={styles.nav}>
          <a href="/" style={styles.brand}>
            <span style={styles.mark}>A</span>
            <span>ARMOR<span style={styles.light}> CRM</span></span>
          </a>
          <div style={styles.navRight}>
            <span style={styles.user}>{direct.email}</span>
          </div>
        </nav>
        <section style={styles.card}>
          <h1 style={styles.h1}>Customer Dashboard</h1>
          <p style={styles.sub}>Welcome back, {direct.email}. Here are your customer relationships.</p>
          <div style={styles.tableWrap}>
            <table style={styles.table}>
              <thead>
                <tr style={styles.tr}>
                  <th style={styles.th}>Customer</th>
                  <th style={styles.th}>Status</th>
                  <th style={styles.th}>Next Step</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </table>
          </div>
        </section>
        <ServicesTable />
      </div>
    </main>
  );

  function handleLogout() {
    clearSession();
    router.push('/login');
  }
}

const styles: Record<string, React.CSSProperties> = {
  page: { minHeight: '100vh', background: '#f8fafc', fontFamily: 'system-ui, -apple-system, sans-serif', display: 'flex' },
  sidebar: { width: '220px', background: '#fff', borderRight: '1px solid #e2e8f0', padding: '1.5rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flexShrink: 0 },
  sidebarButton: { width: '100%', padding: '0.75rem 1rem', background: '#f1f5f9', color: '#0f172a', border: 'none', borderRadius: '6px', fontSize: '0.95rem', fontWeight: '600', cursor: 'pointer', textAlign: 'left', textDecoration: 'none' },
  content: { flex: 1, minWidth: 0 },
  nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem', background: '#fff', borderBottom: '1px solid #e2e8f0', position: 'sticky', top: 0, zIndex: 10 },
  brand: { display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: '#0f172a', fontWeight: '700', fontSize: '1.25rem' },
  mark: { width: '28px', height: '28px', background: '#0f172a', color: '#fff', borderRadius: '6px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' },
  light: { color: '#64748b' },
  navRight: { display: 'flex', alignItems: 'center', gap: '1rem' },
  user: { fontSize: '0.9rem', color: '#475569' },
  card: { maxWidth: '800px', margin: '2rem auto', padding: '0 1rem' },
  h1: { margin: 0, fontSize: '1.75rem', color: '#0f172a' },
  sub: { color: '#64748b', marginTop: '0.25rem' },
  tableWrap: { marginTop: '1.5rem', overflowX: 'auto' },
  table: { width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' },
  tr: { borderBottom: '1px solid #f1f5f9' },
  th: { textAlign: 'left', padding: '1rem', fontSize: '0.85rem', fontWeight: '700', color: '#475569', background: '#f8fafc' },
  td: { padding: '1rem', fontSize: '0.95rem', color: '#334155' },
};
