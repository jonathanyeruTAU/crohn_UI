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
    <Box sx={{ width: "100vw", height: "100vh", backgroundColor: "#F0F0F2",}}>
      <DenseAppBar />
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <UrlLoader setClicked={setIsClicked} setUrl={setUrl} url={url} />
          {isClicked && <Results tweetId={parseIdFromUrl()} />}
        </Box>
      </Box>
    </Box>
  );
}

export default App;
