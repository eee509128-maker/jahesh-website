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

/**
 * Accurately determines if two user representations represent the exact same person,
 * preventing identity fragmentation across ID variations, @ prefixes, and phone number formatting.
 */
export const areSameUser = (a: any, b: any): boolean => {
  if (!a || !b) return false;

  // 1. Direct ID match
  if (a.id && b.id && String(a.id).trim() === String(b.id).trim()) {
    return true;
  }

  // 2. Normalized Username match (e.g. "@erfan33657" === "erfan33657")
  const u1 = normalizeUsername(a.username);
  const u2 = normalizeUsername(b.username);
  if (u1 && u2 && u1 === u2) {
    return true;
  }

  // 3. Normalized Phone match (e.g. "+989026542016" === "09026542016")
  const p1 = normalizePhone(a.phone);
  const p2 = normalizePhone(b.phone);
  if (p1 && p2 && p1 === p2 && p1.length >= 10) {
    return true;
  }

  // 4. Valid Email match
  const e1 = a.email?.trim().toLowerCase();
  const e2 = b.email?.trim().toLowerCase();
  if (e1 && e2 && e1 === e2 && e1.includes('@') && !e1.includes('example.com')) {
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

  // Role hierarchy: admin > operator > user
  const rolePriority: Record<string, number> = {
    admin: 3,
    operator: 2,
    user: 1,
  };

  const currentPriority = rolePriority[current.role || 'user'] || 1;
  const incomingPriority = rolePriority[incoming.role || 'user'] || 1;

  // Determine preferred role: if incoming is newer or higher priority
  let preferredRole: 'admin' | 'operator' | 'user' = (current.role as any) || 'user';
  if (incoming.role && (incomingPriority > currentPriority || incomingPriority === 3)) {
    preferredRole = incoming.role as any;
  } else if (currentPriority >= incomingPriority) {
    preferredRole = (current.role as any) || 'user';
  }

  const preferredName =
    current.fullName && current.fullName !== 'کاربر' && current.fullName !== 'کاربر جهش'
      ? current.fullName
      : incoming.fullName || current.fullName || 'کاربر جهش';

  return {
    ...incoming,
    ...current,
    id: current.id || incoming.id,
    fullName: preferredName,
    phone: current.phone || incoming.phone || '',
    email: current.email || incoming.email || '',
    username: normalizeUsername(current.username) ? current.username : incoming.username,
    role: preferredRole,
    guild: current.guild || incoming.guild,
    customGuild: current.customGuild || incoming.customGuild,
    createdAt: current.createdAt || incoming.createdAt,
  };
};
