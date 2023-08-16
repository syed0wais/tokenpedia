import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from "../index"
import { Container, HStack } from '@chakra-ui/react';
import Loader from './Loader';
import CoinCard from './CoinCard';
import ErrorComponent from './ErrorComponent';

const Coins = () => {

  const [coins,setCoins] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false);
  const [page,setPage] = useState(1);
  const [currency,setCurrency] = useState("inr");
  const currencySymbol = currency==="inr"?"₹" : currency==="eur"?"€":"$";


  useEffect(() => {
    const fetchCoins = async() =>{
      
      try{
        const {data} = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
          );
      setCoins(data);
      console.log(data);
      setLoading(false);
      } catch(error){
        setError(true);
        setLoading(false);
    }
  }

    fetchCoins();
  }, [currency,page])

  if(error) return <ErrorComponent message={"Error while fetching coins"}/>
    


  return <Container maxW={"container.xl"}>
    {loading? <Loader/> : (
      <>
      <HStack wrap={"wrap"}>
        {
          coins.map((i)=>(
            <CoinCard 
              
              id={i.id}
              key={i.id}
              name={i.name} 
              price={i.current_price}
              img={i.image} 
              symbol={i.symbol}
              currencySymbol={currencySymbol} 
              />
              
          ))
        }
      </HStack>
      </>
    )}

  </Container>
}

export default Coins