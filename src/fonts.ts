import { Font, platform } from 'scenerystack';

// TODO: why such bad font metrics on Firefox?
export const uiFontFamily = platform.firefox ? 'Arial, sans-serif' : 'Helvetica, Arial, sans-serif';
export const monospacedFontFamily =
  'Menlo, Inconsolata, Bitstream Vera Sans Mono, Consolas, DejaVu Sans Mono, Droid Sans Mono, Lucida Console, Monaco, Noto Mono, Roboto Mono, monospace';

export const tooltipFont = new Font({
  family: uiFontFamily,
  size: 12,
});