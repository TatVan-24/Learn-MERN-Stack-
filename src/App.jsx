import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Button from '@mui/material/Button';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import HomeIcon from '@mui/icons-material/Home';
import { pink } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import {
  useColorScheme,
} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

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


function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)')

  console.log('prefersDarkMode:', prefersDarkMode)
  console.log('prefersLightMode:', prefersLightMode)

  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}


function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <ModeSelect/>
      <br></br>
      <ModeToggle />  
      <br></br>
      <Typography variant="body2" color="text.secondary">test typography</Typography>
      <Button variant="contained">Hello world</Button>
      <Button variant="text">text</Button>
      <Button variant="outlined">Out Lined</Button>
      <br />
      <AccessAlarmIcon />
      <ThreeDRotation />
      <br />
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
    </>
  );
}

export default App;
