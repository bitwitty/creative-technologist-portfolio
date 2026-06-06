const rateMap = new Map<string, { count: number; resetTime: number }>();
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 10;

export function checkRateLimit(ip: string): {
  allowed: boolean;
  retryAfter?: number;
} {
  const now = Date.now();
  const entry = rateMap.get(ip);

  // Clean up stale entries periodically
  if (rateMap.size > 1000) {
    for (const [key, val] of rateMap) {
      if (now > val.resetTime) rateMap.delete(key);
    }
  }

  if (!entry || now > entry.resetTime) {
    rateMap.set(ip, { count: 1, resetTime: now + WINDOW_MS });
    return { allowed: true };
  }

  if (entry.count >= MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfter: Math.ceil((entry.resetTime - now) / 1000),
    };
  }

  entry.count++;
  return { allowed: true };
}
