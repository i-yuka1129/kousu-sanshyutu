import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        green: {
          50: '#066a69',
        },
        'main-bg': '#F8FBFF',//メイン背景色
      }
    }
  }
}
