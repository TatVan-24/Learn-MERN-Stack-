import ModeSelect from '~/components/ModeSelect'
import { Box } from '@mui/material'

function AppBar(){
    return(
    <Box sx = {{ backgroundColor: 'primary.light',  width: '100%',  height: (theme) => theme.sxCustom.appBarHeight, display: 'flex', alignItem:'Center'}}>
     <ModeSelect />
     </Box>
    )
}

export default AppBar