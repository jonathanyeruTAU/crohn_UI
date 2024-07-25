import {useEffect} from 'react'
import useFetchData from '../hooks/useFetchData';
import SingleResult from './SingleResult';
import { Box } from '@mui/material';
import { blue, red, green, orange, grey } from '@mui/material/colors';

const Results = ({tweetId}) => {
    const myGreen = green[500]
    const myRed = red[500]
    const myOrange = orange[500]
    const myGrey = grey[500]
  const {
    data: authetnticityData,
    isLoading: isAuthLoading,
    fetchData: fetchAuthetnticityData,
  } = useFetchData("http://localhost:3001/tweets");

  const {
    data: engagementData,
    isLoading: isEngagementLoading,
    fetchData: fetchEngagementData,
  } = useFetchData("http://localhost:3001/tweets/engagement");

  const {
    data: topicData,
    isLoading: isTopicLoading,
    fetchData: fetchTopicData,
  } = useFetchData("http://localhost:3001/tweets/topic");

  useEffect(() => {
    fetchAuthetnticityData({ tweetId });
    fetchEngagementData({ tweetId });
    fetchTopicData({ tweetId });
  },[])

  const getAuthenticityColor = (() => {
    if(isAuthLoading || !authetnticityData) return myGrey;
    if (authetnticityData === "REAL HUMAN") {
      return myGreen
    } else if(authetnticityData === "BOT-LIKE ACTIVITY") {
      return myRed
    } else if(authetnticityData === "UNDETERMINED") {
      return myOrange
    } else {
      return myGreen
    }
  })

  const getAuthenticityMessage = (() => {
    if(isAuthLoading|| !authetnticityData) return "To be classified";
    if (authetnticityData === "REAL HUMAN") {
      return 'Real human'
    } else if(authetnticityData === "BOT-LIKE ACTIVITY") {
      return 'User is very suspicious to be unauthentic'
    } else if(authetnticityData === "UNDETERMINED") {
      return 'The model could not determine the auhenticity of the model'
    } else {
      return 'To be classified soon'
    }
  })

  const getEngagementColor = (() => {
    if(isEngagementLoading || !engagementData) return myGrey;
    const totalPosts = engagementData.realHumanCount + engagementData.botLikeCount + engagementData.unknownCount;
    const botsPercentage = (engagementData.botLikeCount / totalPosts) * 100;
    if (botsPercentage < 0.05) {
      return myGreen
    } else if(botsPercentage < 0.15) {
      return myOrange
    } else {
      return myRed
    }
  })

  const getEngagementMessage = (() => {
    if(isEngagementLoading || !engagementData) return "To be classified";
    const totalPosts = engagementData.realHumanCount + engagementData.botLikeCount + engagementData.unknownCount;
    const botsPercentage = ((engagementData.botLikeCount / totalPosts) * 100).toFixed(1);
    return `${botsPercentage}% of the post's engagement is suspicious to be unauthentic`
  })

  const getTopicColor = (() => {
    if(isTopicLoading || !topicData || topicData.botPostsCount === 0) return myGrey;
    const botsPercentage =  topicData.postsCount / topicData.botPostsCount;
    if (botsPercentage < 0.05) {
      return myGreen
    } else if(botsPercentage < 0.15) {
      return myOrange
    } else {
      return myRed
    }
  })

  const getTopicMessage = (() => {
    if(isTopicLoading || !topicData || topicData.botPostsCount === 0 ) return "To be classified";
    console.log(topicData);
    const botsPercentage = ((topicData.botPostsCount / topicData.postsCount  ) * 100).toFixed(1);
    return `${botsPercentage}% of posts on the subject are suspicious to be unauthentic`
  })

  return (
    <Box sx={{display: "flex", gap:"10em"}}>
        <SingleResult isLoading={isAuthLoading} color={{color: getAuthenticityColor()}} message={getAuthenticityMessage()} icon="authenticity" />
        <SingleResult isLoading={isEngagementLoading} color={{color: getEngagementColor()}} message={getEngagementMessage()} icon="engagement" />
        <SingleResult isLoading={isTopicLoading} color={{color: getTopicColor()}} message={getTopicMessage()} icon="topic" />
    </Box>
  )
}

export default Results
