type Theme = {
  colorPrimary: string
  colorSecondary: string

  colorBg: string
  colorSurface: string
  colorText: string
  colorMuted: string

  colorSuccess: string
  colorError: string
  colorWarning: string
  colorInfo: string
}

export const darkTheme: Theme = {
  /* Primárias */
  colorPrimary: '#1e40af',
  colorSecondary: '#8b5cf6',

  /* Neutros */
  colorBg: '#f9fafb',
  colorSurface: '#ffffff',
  colorText: '#111827',
  colorMuted: '#6b7280',

  /* Feedback */
  colorSuccess: '#22c55e',
  colorError: '#ef4444',
  colorWarning: '#eab308',
  colorInfo: '#3b82f6',
} as const
