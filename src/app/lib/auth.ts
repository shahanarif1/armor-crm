"use client";

import { useEffect, useState } from 'react';

const SESSION_COOKIE = 'armor_session';

export function setSession(email: string): void {
  document.cookie = `${SESSION_COOKIE}=${encodeURIComponent(email)}; path=/; max-age=604800; SameSite=Lax`;
}

export function clearSession(): void {
  document.cookie = `${SESSION_COOKIE}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
}

export function getSession(): { email: string } | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${SESSION_COOKIE}=([^;]*)`));
  return match ? { email: decodeURIComponent(match[1]) } : null;
}

export function useSession() {
  const [session, setSessionState] = useState<{ email: string } | null>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setSessionState(getSession());
    setReady(true);
  }, []);
  return { session, ready };
}
