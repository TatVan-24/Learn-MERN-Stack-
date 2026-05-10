import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = extendTheme({
  colorSchemeSelector: 'class',
  sxCustom: {
    appBarHeight: '58px', // Bắt buộc phải có đơn vị 'px' để trình duyệt hiểu
    boardBarHeight: '60px' // Bắt buộc phải có đơn vị 'px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: { main: '#008080' },
        secondary: { main: '#FF8C00' }
      }
    },
    dark: {
      palette: {
        primary: { main: '#00FFFF' },
        secondary: { main: '#FFA500' }
      }
    }
  },
  components: {
    MuiCSSBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar':{
            width:'8px',
            height:'8px'
          },
          '*::-webkit-scrollbar-thumb':{
            backgroundColor:'#bdc3c7',
            boderRadius:'8px'
          },
          '*::-webkit-scrollbar-thumb:hover':{
            backgroundColor:'#00b894',
            boderRadius:'8px'
          }
        }
      }
    },

    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem'
        })
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem',
          // Sửa lỗi: tên thuộc tính là borderColor (viết thường chữ b)
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main,
            borderWidth: '2px' // Tăng độ dày khi hover cho giống Trello
          },
          '& fieldset': {
            borderWidth: '0.5px !important' // Làm viền thanh mảnh hơn
          },
          '&.Mui-focused fieldset': {
            borderWidth: '1px !important'
          }
        })
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Không viết hoa tất cả chữ trên Button
          borderWidth: '0.5px',
          '&:hover': { borderWidth: '0.5px' }
        }
      }
    }
  }
})

export default theme