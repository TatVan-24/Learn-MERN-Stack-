import { Box } from '@mui/material'

function BoardBar(){
    return (
        <Box sx = {{ backgroundColor: 'primary.light',  width: '100%',  height: (theme) => theme.sxCustom.boardBarHeight, display: 'flex', alignItem:'Center'}}>
            Board Bar
        </Box>
    )
}
export default BoardBar;