import { createTheme } from "@mantine/core"

export const mantineTheme = createTheme({
  colors: {
    brand: ['#ffffff', '#f2f2f2', '#e6e6e6', '#cccccc', '#b3b3b3', '#999999', '#808080', '#666666', '#404040', '#262626'],
  },
  primaryColor: 'brand',
  components: {
    Anchor: {
      defaultProps: {
        color: '#262626'  // リンクの色を黒（brandカラーパレットの最も暗い色）に設定
      },
      styles: {
        root: {
          '&:hover': {
            color: '#404040'  // hover時は少し明るい色に
          }
        }
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
