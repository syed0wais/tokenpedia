import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import btcSrc from "../assets/tokenpedia.png";

const Home = () => {
  return <Box bgColor={"white"} w ={"full"} h ={"85vh"}>
    <Image w={"full"} h={"full"} objectFit={"contain"} src={btcSrc} />
    <Text fontSize={"6xl"} textAlign={"left"}  margin={"10"} fontWeight={"thin"} color={"blackAlpha.900"} mt={"-20"} >TokenPedia </Text>
  </Box>
}

export default Home