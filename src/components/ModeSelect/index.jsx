import React from 'react'
import {
  useColorScheme,
} from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutLinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'


function ModeSelect() {
  const { mode, setMode } = useColorScheme()

  const handleChange = (event) => {
    const selectedMode = event.target.value
    console.log('selectedMode:', selectedMode)
    setMode(selectedMode)
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Mode</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">  <div style = {{display:'flex', alignItems:'center'}}> <LightModeIcon /> Light </div> </MenuItem> 
        <MenuItem value="dark">   <div style = {{display:'flex', alignItems:'center'}}> <DarkModeOutLinedIcon /> Dark </div> </MenuItem>
        <MenuItem value="system"> <div style = {{display:'flex', alignItems:'center'}}> <SettingsBrightnessIcon /> System </div> </MenuItem>
      </Select>
    </FormControl>
  );
}

export default ModeSelect