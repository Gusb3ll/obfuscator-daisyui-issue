import daisyui from 'daisyui'
import defaultTheme from 'daisyui/src/theming/themes'
import { Config } from 'tailwindcss'

const defaultColors = {
  primary: '#0000FF',
  secondary: '#3B82F6',
}

const config: Config = {
  content: [
    './src/components/**/*.{ts,tsx}',
    './src/pages/**/*.{ts,tsx}',
    './src/scenes/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ...defaultColors,
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        easydonate: {
          ...defaultTheme['dark'],
          ...defaultColors,
        },
      },
    ],
  },
}

export default config
