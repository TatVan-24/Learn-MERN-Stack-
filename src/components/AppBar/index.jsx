import ModeSelect from '~/components/ModeSelect'
import { Box, Button, TextField, Tooltip, Badge, IconButton, SvgIcon, Typography, InputAdornment } from '@mui/material'
import AppsIcon from '@mui/icons-material/Apps'
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg'
import Workspaces from './Menus/Workspaces.jsx'
import Recent from './Menus/Recent.jsx'
import Templates from './Menus/Templates.jsx'
import Started from './Menus/Started.jsx'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profile from './Menus/Profile.jsx'
import SearchIcon from '@mui/icons-material/Search'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'

function AppBar() {
  return (
    <Box px={2} sx={{
      width: '100%',
      height: (theme) => theme.sxCustom.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      overflowX: 'auto',
      bgcolor: 'white', 
      color: '#172b4d', // Màu chữ xám chuẩn Trello
      borderBottom: '1px solid #dfe1e6'
    }}>
      {/* Cụm bên trái */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexShrink: 0 }}>
        <AppsIcon sx={{ color: 'primary.main' }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SvgIcon component={TrelloIcon} inheritViewBox sx={{ color: 'primary.main' }} />
          <Typography variant='span' sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'primary.main' }}>
            Trello
          </Typography>
        </Box>

        {/* Ẩn Menu trên mobile (xs: 'none') để tránh vỡ giao diện */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          <Workspaces />
          <Recent />
          <Started />
          <Templates />
          <Button 
            variant='outlined' 
            startIcon={<LibraryAddIcon />}
            sx={{ 
              color: 'primary.main', 
              border: 'none', 
              '&:hover': { border: 'none', bgcolor: '#e1f5fe' } 
            }}
          >
            Create
          </Button>
        </Box>
      </Box>

      {/* Cụm bên phải */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexShrink: 0 }}>
        <TextField 
          id='outlined-search' 
          label='Search...' 
          type='search' 
          size='small' 
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon sx={{ color: 'primary.main' }} />
              </InputAdornment>
            )
          }}
          sx={{ 
            minWidth: 120, 
            maxWidth: 180,
            '& label': { color: 'primary.main' },
            '& input': { color: 'primary.main' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'primary.main' },
              '&:hover fieldset': { borderColor: 'primary.main' },
              '&.Mui-focused fieldset': { borderColor: 'primary.main' }
            }
          }}
        />
        
        <ModeSelect />

        <Tooltip title='Notifications'>
          <IconButton sx={{ color: 'primary.main' }}>
            <Badge color='warning' variant='dot' sx={{ cursor: 'pointer' }}>
              <NotificationsNoneIcon />
            </Badge>
          </IconButton>
        </Tooltip>

        <Tooltip title='Help'>
          <IconButton sx={{ color: 'primary.main' }}>
            <HelpOutlineIcon />
          </IconButton>
        </Tooltip>

        <Profile />
      </Box>
    </Box>
  )
}

export default AppBar