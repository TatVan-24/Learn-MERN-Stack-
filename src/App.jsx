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

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
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
