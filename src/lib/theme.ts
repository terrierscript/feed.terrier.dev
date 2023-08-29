import { extendTheme } from "@chakra-ui/react"

export const customTheme = extendTheme({
  styles: {
    global: {
      'html': {
        "scroll-timeline-name": "--page-scroll"
      }
    }
  }
})