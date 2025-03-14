import { createTheme } from "@mantine/core"

export const mantineTheme = createTheme({
  colors: {
    brand: ['#ffffff', '#f2f2f2', '#e6e6e6', '#cccccc', '#b3b3b3', '#999999', '#808080', '#666666', '#404040', '#262626'],
  },
  primaryColor: 'brand',
  components: {
    Anchor: {
      defaultProps: {
        c: 'dark'  // リンクの色を黒に設定
      }
    },
    Badge: {
      defaultProps: {
        color: 'dark'  // バッジのデフォルトカラーを暗めに設定
      },
      styles: {
        root: {
          color: '#262626'  // バッジのテキストカラーを暗めに設定
        }
      }
    }
  }
})
