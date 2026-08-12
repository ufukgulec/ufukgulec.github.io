const FETCH_TIMEOUT_MS = 10_000;

export async function fetchJson(url, label = url) {
    const controller = new AbortController();
    const timerId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
    try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
    } catch (err) {
        throw new Error(`${label}: ${err.message}`);
    } finally {
        clearTimeout(timerId);
    }
}

export function timeAgo(dateStr) {
    const elapsed = Date.now() - Date.parse(dateStr);
    const s = 1_000, m = 60_000, h = 3_600_000,
        d = 86_400_000, mo = 2_592_000_000, y = 31_536_000_000;
    const fmt = (n, unit, pluralUnit) => `${n} ${n !== 1 ? pluralUnit : unit} önce`;
    if (elapsed < m) return fmt(Math.floor(elapsed / s), "saniye", "saniye");
    if (elapsed < h) return fmt(Math.floor(elapsed / m), "dakika", "dakika");
    if (elapsed < d) return fmt(Math.floor(elapsed / h), "saat", "saat");
    if (elapsed < mo) return fmt(Math.floor(elapsed / d), "gün", "gün");
    if (elapsed < y) return fmt(Math.floor(elapsed / mo), "ay", "ay");
    return fmt(Math.floor(elapsed / y), "yıl", "yıl");
}