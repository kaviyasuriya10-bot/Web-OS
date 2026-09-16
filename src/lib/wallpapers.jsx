export const VIDEO_RE = /\.(mp4|webm|mov|m4v|ogv|ogg)(\?.*)?$/i;
export const CUSTOM_PREFIX = "idb://";
export const COLOR_PREFIX = "color:";
export const DEFAULT_WALLPAPER = "/wizard-wallpapers/great-hall.svg";
export const WALL_STILLS = [
  "/wizard-wallpapers/great-hall.svg",
  "/wizard-wallpapers/castle-night.svg",
  "/wizard-wallpapers/forbidden-forest.svg",
  "/wizard-wallpapers/astronomy-tower.svg",
  "/wizard-wallpapers/potions-lab.svg",
  "/wizard-wallpapers/library.svg",
];
export const WALL_LIVE = [];
export const WALL_SOLIDS = ["#09070d","#17111f","#24152b","#3b1f35","#14233b","#5b3c1f","#e6d4a1"];
export const isColorWallpaper = (value) => (value || "").startsWith(COLOR_PREFIX);
export const isCustomWallpaper = (value) => (value || "").startsWith(CUSTOM_PREFIX);
export const isVideoWallpaper = (value) => VIDEO_RE.test(value || "");
export function normalizeWallpaper(value, fallback = DEFAULT_WALLPAPER) {
  if (!value) return fallback;
  if (value.startsWith(CUSTOM_PREFIX)||value.startsWith(COLOR_PREFIX)||value.startsWith("http")||value.startsWith("/")||value.startsWith("wall/")||value.startsWith("blob:")) return value;
  return fallback;
}
