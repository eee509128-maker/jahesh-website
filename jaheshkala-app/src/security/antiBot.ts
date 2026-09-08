// Anti-Bot & OTP Protection Engine (Free, Client + LocalStorage + Behavioral Guard)
export interface SecurityCheckResult {
  allowed: boolean;
  reason?: string;
  retryAfterSeconds?: number;
}

const STORAGE_KEY_ATTEMPTS = 'jahesh_otp_attempts_v1';
const STORAGE_KEY_COOLDOWNS = 'jahesh_otp_cooldowns_v1';
const MAX_ATTEMPTS_PER_WINDOW = 3; // Max 3 requests per 10 minutes from same browser/client
const WINDOW_DURATION_MS = 10 * 60 * 1000; // 10 minutes
const COOLDOWN_PER_PHONE_MS = 120 * 1000; // 2 minutes cooldown per phone number

export class AntiBotGuard {
  // 1. Check if the client or phone number is rate limited or spammed
  static verifyRequest(identifier: string): SecurityCheckResult {
    const cleanId = identifier.trim().toLowerCase();
    const now = Date.now();

    // Check specific phone/identifier cooldown
    const cooldowns = this.getCooldowns();
    const lastTime = cooldowns[cleanId];
    if (lastTime && (now - lastTime) < COOLDOWN_PER_PHONE_MS) {
      const remainingSeconds = Math.ceil((COOLDOWN_PER_PHONE_MS - (now - lastTime)) / 1000);
      return {
        allowed: false,
        reason: `کد تایید اخیراً ارسال شده است. لطفاً ${remainingSeconds} ثانیه دیگر صبر کنید.`,
        retryAfterSeconds: remainingSeconds
      };
    }

    // Check global burst limit (anti-script attack protection)
    const attempts = this.getAttempts().filter(t => now - t < WINDOW_DURATION_MS);
    if (attempts.length >= MAX_ATTEMPTS_PER_WINDOW) {
      const oldestAttempt = Math.min(...attempts);
      const remainingWait = Math.ceil((WINDOW_DURATION_MS - (now - oldestAttempt)) / 1000);
      return {
        allowed: false,
        reason: `به دلیل تعداد درخواست‌های بالا، سیستم امنیتی موقتاً فعال شد. لطفاً ${Math.ceil(remainingWait / 60)} دقیقه دیگر تلاش فرمایید.`,
        retryAfterSeconds: remainingWait
      };
    }

    return { allowed: true };
  }

  // Record a successful SMS/OTP dispatch
  static recordDispatch(identifier: string) {
    const cleanId = identifier.trim().toLowerCase();
    const now = Date.now();

    // Save phone cooldown
    const cooldowns = this.getCooldowns();
    cooldowns[cleanId] = now;
    localStorage.setItem(STORAGE_KEY_COOLDOWNS, JSON.stringify(cooldowns));

    // Save attempt timestamp
    const attempts = this.getAttempts().filter(t => now - t < WINDOW_DURATION_MS);
    attempts.push(now);
    localStorage.setItem(STORAGE_KEY_ATTEMPTS, JSON.stringify(attempts));
  }

  // Generate dynamic captcha challenge
  static generateMathCaptcha(): { question: string; answer: number; challengeId: string } {
    const num1 = Math.floor(Math.random() * 8) + 1; // 1-8
    const num2 = Math.floor(Math.random() * 8) + 1; // 1-8
    const operators = ['+', '-'];
    const op = operators[Math.floor(Math.random() * operators.length)];

    let question = '';
    let answer = 0;
    if (op === '+') {
      question = `${num1} + ${num2}`;
      answer = num1 + num2;
    } else {
      const max = Math.max(num1, num2);
      const min = Math.min(num1, num2);
      question = `${max} - ${min}`;
      answer = max - min;
    }

    const challengeId = 'ch_' + Math.random().toString(36).substring(2, 9);
    return { question: `${question} = ؟`, answer, challengeId };
  }

  private static getCooldowns(): Record<string, number> {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_COOLDOWNS);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  }

  private static getAttempts(): number[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_ATTEMPTS);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }
}
