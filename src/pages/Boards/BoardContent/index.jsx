import { Box } from '@mui/material'

function BoardContent(){
    return (
    <Box sx = {{ backgroundColor: 'primary.light',  width: '100%',  height: (theme) => `calc(100vh - ${theme.sxCustom.appBarHeight} - ${theme.sxCustom.boardBarHeight})`, display: 'flex', alignItem:'Center'}}>
      Board Contents
    </Box>
    )
}

export default BoardContent;