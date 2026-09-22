import { User } from '../types';

/**
 * Normalizes Persian and Arabic numbers to standard English digits,
 * and standardizes Iranian mobile numbers to '09xxxxxxxxx'.
 */
export const normalizePhone = (phone?: string | number | null): string => {
  if (phone === undefined || phone === null) return '';
  const str = String(phone).trim();
  if (!str || str === 'ثبت نشده' || str === 'test') return '';

  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

  let clean = str;
  for (let i = 0; i < 10; i++) {
    clean = clean.replace(new RegExp(persianDigits[i], 'g'), String(i));
    clean = clean.replace(new RegExp(arabicDigits[i], 'g'), String(i));
  }

  // Remove all non-digit characters
  clean = clean.replace(/[^0-9]/g, '');

  if (clean.startsWith('0098') && clean.length >= 12) {
    clean = '0' + clean.slice(4);
  } else if (clean.startsWith('98') && clean.length === 12) {
    clean = '0' + clean.slice(2);
  } else if (!clean.startsWith('0') && clean.length === 10 && clean.startsWith('9')) {
    clean = '0' + clean;
  }

  return clean;
};

/**
 * Normalizes usernames by trimming, converting to lowercase,
 * and stripping any leading '@' symbols.
 */
export const normalizeUsername = (username?: string | null): string => {
  if (!username) return '';
  return String(username)
    .trim()
    .toLowerCase()
    .replace(/^@+/, '')
    .trim();
};

export const isMasterAdminUser = (u: any): boolean => {
  if (!u) return false;
  const id = String(u.id || '').trim().toLowerCase();
  const username = normalizeUsername(u.username);
  const email = String(u.email || '').trim().toLowerCase();
  return (
    id === 'usr-jahesh-master' ||
    id === 'admin-jahesh-main' ||
    username === 'jahesh1395' ||
    username === 'jahesh_admin' ||
    username === 'jahesh' ||
    email === 'jahesh1395@gmail.com' ||
    email === 'admin@jaheshkala.ir'
  );
};

/**
 * Accurately determines if two user representations represent the exact same person,
 * preventing identity fragmentation across ID variations, @ prefixes, and phone number formatting.
 * Never collides different usernames/emails or mixes master admin with regular customers.
 */
export const areSameUser = (a: any, b: any): boolean => {
  if (!a || !b) return false;

  // 1. Direct ID match
  if (a.id && b.id && String(a.id).trim() === String(b.id).trim()) {
    return true;
  }

  const aIsMaster = isMasterAdminUser(a);
  const bIsMaster = isMasterAdminUser(b);

  // Master Admin is uniquely isolated: never match master admin with any regular user
  if (aIsMaster !== bIsMaster) {
    return false;
  }
  if (aIsMaster && bIsMaster) {
    return true;
  }

  // 2. Check usernames if both exist
  const u1 = normalizeUsername(a.username);
  const u2 = normalizeUsername(b.username);
  if (u1 && u2 && u1 !== u2) {
    return false; // Conflicting non-empty usernames -> definitely different users
  }

  // 3. Check emails if both exist
  const e1 = a.email?.trim().toLowerCase();
  const e2 = b.email?.trim().toLowerCase();
  if (e1 && e2 && e1.includes('@') && e2.includes('@') && e1 !== e2) {
    return false; // Conflicting non-empty emails -> definitely different users
  }

  // Normalized Username match
  if (u1 && u2 && u1 === u2) {
    return true;
  }

  // Valid Email match
  if (e1 && e2 && e1 === e2 && e1.includes('@') && !e1.includes('example.com')) {
    return true;
  }

  // Normalized Phone match ONLY if neither has a conflicting username/email
  const p1 = normalizePhone(a.phone);
  const p2 = normalizePhone(b.phone);
  if (p1 && p2 && p1 === p2 && p1.length >= 10) {
    return true;
  }

  return false;
};

/**
 * Cleanly merges two user records without losing elevated roles or personal data.
 */
export const mergeUserRecords = (current: User, incoming: User): User => {
  if (!current) return incoming;
  if (!incoming) return current;

  // Master Admin protection
  if (isMasterAdminUser(current) || isMasterAdminUser(incoming)) {
    return {
      ...current,
      ...incoming,
      id: 'usr-jahesh-master',
      fullName: 'مدیر کل جهش‌کالا',
      email: 'jahesh1395@gmail.com',
      username: 'jahesh1395',
      role: 'admin',
      phone: current.phone || incoming.phone || '09964201441',
      guild: 'فناوری و مدیریت جهش',
      createdAt: current.createdAt || incoming.createdAt || '۱۴۰۵/۶/۱',
    };
  }

  // Role hierarchy: admin > operator > user
  const rolePriority: Record<string, number> = {
    admin: 3,
    operator: 2,
    user: 1,
  };

  const incomingTime = incoming.updatedAt ? new Date(incoming.updatedAt).getTime() : 0;
  const currentTime = current.updatedAt ? new Date(current.updatedAt).getTime() : 0;
  const incomingIsNewer = !isNaN(incomingTime) && !isNaN(currentTime) && incomingTime > currentTime;

  let preferredRole: 'admin' | 'operator' | 'user' = 'user';
  if (incomingIsNewer && incoming.role) {
    preferredRole = incoming.role as any;
  } else {
    const currentPriority = rolePriority[current.role || 'user'] || 1;
    const incomingPriority = rolePriority[incoming.role || 'user'] || 1;
    if (incomingPriority > currentPriority) {
      preferredRole = incoming.role as any;
    } else if (currentPriority > incomingPriority) {
      preferredRole = current.role as any;
    } else {
      preferredRole = incoming.role || current.role || 'user';
    }
  }

  const preferredName =
    incoming.fullName && incoming.fullName !== 'کاربر' && incoming.fullName !== 'کاربر جهش'
      ? incoming.fullName
      : (current.fullName && current.fullName !== 'کاربر' && current.fullName !== 'کاربر جهش'
        ? current.fullName
        : incoming.fullName || current.fullName || 'کاربر جهش');

  return {
    ...current,
    ...incoming,
    id: incoming.id || current.id,
    fullName: preferredName,
    phone: incoming.phone || current.phone || '',
    email: incoming.email || current.email || '',
    username: normalizeUsername(incoming.username) ? incoming.username : (normalizeUsername(current.username) ? current.username : incoming.username),
    role: preferredRole,
    guild: incoming.guild || current.guild,
    customGuild: incoming.customGuild || current.customGuild,
    createdAt: incoming.createdAt || current.createdAt,
    updatedAt: incoming.updatedAt || current.updatedAt || new Date().toISOString(),
  };
};
