import { isValidHexColor } from "./isValidHexColor";

export interface ColorSystem {
  "100": string;
  "200": string;
  "300": string;
  "400": string;
  "500": string;
  "600": string;
  "700": string;
  "800": string;
  "900": string;
}

type RGB = [number, number, number];
type HSL = [number, number, number];

function hexToRgb(hex: string): RGB {
  const bigint = parseInt(hex.slice(1), 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}

function rgbToHex([r, g, b]: RGB): string {
  return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase()}`;
}

function rgbToHsl([_r, _g, _b]: RGB): HSL {
  const r = _r / 255;
  const g = _g / 255;
  const b = _b / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let h = 0;
  let s = 0;

  if (max !== min) {
    const delta = max - min;
    s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);

    if (max === r) {
      h = (g - b) / delta + (g < b ? 6 : 0);
    } else if (max === g) {
      h = (b - r) / delta + 2;
    } else {
      h = (r - g) / delta + 4;
    }

    h /= 6;
  }

  return [h, s, l];
}

function hslToRgb([h, s, l]: HSL): RGB {
  if (s === 0) {
    const l255 = Math.round(l * 255);
    return [l255, l255, l255];
  }

  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const hue2rgb = (_t: number) => {
    let t = _t;
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };

  return [
    Math.round(hue2rgb(h + 1 / 3) * 255),
    Math.round(hue2rgb(h) * 255),
    Math.round(hue2rgb(h - 1 / 3) * 255),
  ];
}

function interpolateColor(color1: RGB, color2: RGB, factor: number): RGB {
  return [
    Math.round(color1[0] + factor * (color2[0] - color1[0])),
    Math.round(color1[1] + factor * (color2[1] - color1[1])),
    Math.round(color1[2] + factor * (color2[2] - color1[2])),
  ];
}

function expandShortHexColor(code: string): string {
  if (code.length === 4 && code.startsWith("#")) {
    return `#${code[1]}${code[1]}${code[2]}${code[2]}${code[3]}${code[3]}`;
  }
  return code; // 이미 6자리거나 올바르지 않은 코드는 그대로 반환
}

export function createColorSystem(baseHex: string): ColorSystem {
  if (!isValidHexColor(baseHex)) {
    throw new Error("Please use hex code (ex: #ABCDEF)");
  }

  const hexCode = expandShortHexColor(baseHex);

  const baseRgb = hexToRgb(hexCode);
  const zeroRgb = hslToRgb([rgbToHsl(baseRgb)[0], rgbToHsl(baseRgb)[1], 0]);
  const maxRgb = hslToRgb([rgbToHsl(baseRgb)[0], rgbToHsl(baseRgb)[1], 1]);

  return {
    "100": rgbToHex(interpolateColor(baseRgb, maxRgb, 0.65)),
    "200": rgbToHex(interpolateColor(baseRgb, maxRgb, 0.5)),
    "300": rgbToHex(interpolateColor(baseRgb, maxRgb, 0.33)),
    "400": rgbToHex(interpolateColor(baseRgb, maxRgb, 0.16)),
    "500": hexCode,
    "600": rgbToHex(interpolateColor(baseRgb, zeroRgb, 0.16)),
    "700": rgbToHex(interpolateColor(baseRgb, zeroRgb, 0.33)),
    "800": rgbToHex(interpolateColor(baseRgb, zeroRgb, 0.5)),
    "900": rgbToHex(interpolateColor(baseRgb, zeroRgb, 0.65)),
  };
}

// 사용 예
// const baseColor = "#ABCDEF";
// const colorSystem = createColorSystem(baseColor);

// "100": "#E2EEF9",
// "200": "#D5E6F7",
// "300": "#C7DEF4",
// "400": "#B8D5F2",
// "500": "#ABCDEF",
// "600": "#90ACC9",
// "700": "#7389A0",
// "800": "#566778",
// "900": "#3C4854"
