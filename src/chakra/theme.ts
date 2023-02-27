// 1. Import `extendTheme`
import '@fontsource/kumbh-sans/300.css';
import '@fontsource/kumbh-sans/400.css';
import '@fontsource/kumbh-sans/700.css';
import { extendTheme } from '@chakra-ui/react';

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    brand: {
      100: 'hsl(26, 100%, 55%)',
      200: 'hsl(25, 100%, 94%)',
    },
    neutral: {
      100: 'hsl(0, 0%, 100%)',
      200: 'hsl(223, 64%, 98%)',
      300: 'hsl(220, 14%, 75%)',
      400: 'hsl(219, 9%, 45%)',
      500: 'hsl(220, 13%, 13%)',
      600: 'hsl(0, 0%, 0%)',
    },
  },
  fonts: {
    body: 'Kumbh Sans',
  },
  styles: {
    global: () => ({
      body: {
        bg: 'white',
      },
    }),
  },
  components: {
    //
  },
});
