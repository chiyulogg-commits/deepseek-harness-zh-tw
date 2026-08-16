/** `settings.theme` namespace dictionaries (the Appearance row's copy). */

/** Simplified Chinese dictionary (the key-set source of truth). */
export const zh = {
  'appearance.title': '外观',
  'appearance.light': '浅色',
  'appearance.dark': '深色',
  'appearance.system': '跟随系统',
} satisfies Record<string, string>

export const zhTw = {
  'appearance.title': '外觀',
  'appearance.light': '淺色',
  'appearance.dark': '深色',
  'appearance.system': '跟隨系統',
} satisfies Record<ThemeKey, string>

/** The settings.theme namespace key union. */
export type ThemeKey = keyof typeof zh

/** English dictionary, checked complete against the zh key set. */
export const en = {
  'appearance.title': 'Appearance',
  'appearance.light': 'Light',
  'appearance.dark': 'Dark',
  'appearance.system': 'System',
} satisfies Record<ThemeKey, string>
