import {useEffect} from 'react'
import useFetchData from '../hooks/useFetchData';
import SingleResult from './SingleResult';

const Results = ({tweetId}) => {
    console.log("tweetId:", tweetId)

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
    if(isAuthLoading || !authetnticityData) return "grey";
    if (authetnticityData === "REAL HUMAN") {
      return 'green'
    } else if(authetnticityData === "BOT-LIKE ACTIVITY") {
      return 'red'
    } else if(authetnticityData === "UNDETERMINED") {
      return 'orange'
    } else {
      return 'grey'
    }
  })

  const getAuthenticityMessage = (() => {
    if(isAuthLoading|| !authetnticityData) return "grey";
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
    if(isEngagementLoading || !engagementData) return "grey";
    console.log(engagementData);
    const totalPosts = engagementData.realHumanCount + engagementData.botLikeCount + engagementData.unknownCount;
    const botsPercentage = (engagementData.botLikeCount / totalPosts) * 100;
    if (botsPercentage < 0.05) {
      return 'green'
    } else if(botsPercentage < 0.15) {
      return 'orange'
    } else {
      return 'red'
    }
  })

  const getEngagementMessage = (() => {
    if(isEngagementLoading || !engagementData) return "grey";
    const totalPosts = engagementData.realHumanCount + engagementData.botLikeCount + engagementData.unknownCount;
    const botsPercentage = ((engagementData.botLikeCount / totalPosts) * 100).toFixed(1);
    return `${botsPercentage}% of the post's engagement is suspicious to be unauthentic`
  })

  const getTopicColor = (() => {
    if(isTopicLoading || !topicData) return "grey";
    const botsPercentage = topicData.posts_count / topicData.bot_posts_count;
    if (botsPercentage < 0.05) {
      return 'green'
    } else if(botsPercentage < 0.15) {
      return 'orange'
    } else {
      return 'red'
    }
  })

  const getTopicMessage = (() => {
    if(isTopicLoading || !topicData) return "grey";
    console.log(topicData);
    const botsPercentage = ((topicData.botPostsCount / topicData.postsCount  ) * 100).toFixed(1);
    return `${botsPercentage}% of posts on the subject are suspicious to be unauthentic`
  })

  return (
    <>
      <SingleResult isLoading={isAuthLoading} color={{color: getAuthenticityColor()}} message={getAuthenticityMessage()} icon="authenticity" />
      <SingleResult isLoading={isEngagementLoading} color={{color: getEngagementColor()}} message={getEngagementMessage()} icon="engagement" />
      <SingleResult isLoading={isTopicLoading} color={{color: getTopicColor()}} message={getTopicMessage()} icon="topic" />
    </>
  )
}

export default Results
