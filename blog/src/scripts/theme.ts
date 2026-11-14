// Share appearance with the main VitePress site, including its dark default.
const THEME_KEY = "vitepress-theme-appearance";
const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

let sessionPreference: string | undefined;

function preference(): string {
  if (sessionPreference) return sessionPreference;
  try {
    const saved = localStorage.getItem(THEME_KEY) ?? localStorage.getItem("theme");
    return saved === "light" || saved === "dark" || saved === "auto" ? saved : "dark";
  } catch {
    return "dark";
  }
}

function resolvedTheme(): string {
  const saved = preference();
  return saved === "auto" ? (mediaQuery.matches ? "dark" : "light") : saved;
}

function apply(root: Element, theme: string): void {
  root.setAttribute("data-theme", theme);
  root.classList.toggle("dark", theme === "dark");
  (root as HTMLElement).style.colorScheme = theme;
}

function reflect(): void {
  const theme = resolvedTheme();
  apply(document.documentElement, theme);
  document.querySelector("#theme-btn")?.setAttribute("aria-label", theme);
  document.querySelector("meta[name='theme-color']")?.setAttribute(
    "content", window.getComputedStyle(document.body).backgroundColor
  );
}

function toggleTheme(): void {
  const next = resolvedTheme() === "dark" ? "light" : "dark";
  try {
    localStorage.setItem(THEME_KEY, next);
    localStorage.setItem("theme", next);
  } catch {
    sessionPreference = next;
    // Keep the toggle usable when persistent storage is unavailable.
  }
  reflect();
}

function setup(): void {
  reflect();
  const button = document.querySelector("#theme-btn");
  // setup may run more than once for a document; keep the listener singular.
  button?.removeEventListener("click", toggleTheme);
  button?.addEventListener("click", toggleTheme);
}

setup();
document.addEventListener("astro:after-swap", setup);
document.addEventListener("astro:before-swap", event => {
  const next = (event as Event & { newDocument: Document }).newDocument;
  // Set appearance before the new DOM is painted, rather than correcting it
  // afterwards and briefly displaying a different theme.
  apply(next.documentElement, resolvedTheme());
  const color = document.querySelector("meta[name='theme-color']")?.getAttribute("content");
  if (color) next.querySelector("meta[name='theme-color']")?.setAttribute("content", color);
});
mediaQuery.addEventListener("change", () => {
  if (preference() === "auto") reflect();
});
window.addEventListener("storage", event => {
  if (event.key === THEME_KEY || event.key === null) reflect();
});
