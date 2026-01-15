import { experimental_extendTheme as extendTheme } from '@mui/material/styles';
import { teal, deepOrange, cyan, orange } from '@mui/material/colors';

// Create a theme instance.
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#008080'
        },
        secondary: {
          main: '#FF8C00'
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: '#00FFFF'
        },
        secondary: {
          main: '#FFA500'
        }
      }
    }
  }
});

export default theme;