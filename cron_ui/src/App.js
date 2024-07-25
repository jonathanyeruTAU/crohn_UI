import React from 'react';
import { Typography } from '@mui/material';
import UrlLoader from './componenets/UrlLoader';
import { useState } from 'react';
import Results from './componenets/Results';

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
    <>
      <Typography variant="h5" gutterBottom color="textPrimary">
        Authentify Bot Detector
      </Typography>
      <UrlLoader setClicked={setIsClicked} setUrl={setUrl} url={url}/>
      {isClicked && 
      <Results tweetId={parseIdFromUrl()}/>
      }
    </>
  );
}

export default App;
