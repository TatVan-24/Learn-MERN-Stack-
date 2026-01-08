import  useState  from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import HomeIcon from '@mui/icons-material/Home';
import  pink  from '@mui/material/colors'
import Typography from '@mui/material/Typography'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Typography variant="body2" color="text.secondary">test typography</Typography>

     <Button variant="contained">Hello world</Button>
     <Button variant="text">text</Button>
     <Button variant="outlined">Out Lined</Button>
    <br></br>
     <AccessAlarmIcon />
     <ThreeDRotation/>
   <br></br>
    <HomeIcon color="primary" />
    <HomeIcon color="secondary" />

    </>

  )
}

export default App
