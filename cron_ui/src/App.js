import React from 'react';
import { Box, Grid } from '@mui/material';
import UrlLoader from './componenets/UrlLoader';
import { useState } from 'react';
import Results from './componenets/Results';
import DenseAppBar from './componenets/NavBar';
import myIcon from './authenticIcon.png'

function App() {
  const [url, setUrl] = useState("")
  const [isClicked, setIsClicked] = useState(false)

  const parseIdFromUrl = () => {
    console.log("url:", url);
    const urlArr = url.split("/");
    console.log("in function:", urlArr[urlArr.length - 1])
    return urlArr[urlArr.length - 1]
  }

  return (
      <Box sx={{width: "100vw"}}>
      <DenseAppBar/>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: "#F0F0F2"
      }}>
      <img src={myIcon} width={"400px"} hieght={"400px"}/>
      <Box
        justifyContent="center"
        alignItems="center"
        height="100vh"
        paddingTop="50px"
        >
        <UrlLoader setClicked={setIsClicked} setUrl={setUrl} url={url}/>
        {isClicked && 
        <Results tweetId={parseIdFromUrl()}/>
        }
      </Box>
      </Box>
    </Box>
  );
}

export default App;
