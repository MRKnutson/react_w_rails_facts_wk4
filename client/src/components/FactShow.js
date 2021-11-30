import axios from "axios";
import React , {useEffect, useState} from "react"
import BorderedDiv from "./BorderedDiv";
import {useParams} from "react-router-dom"

const FactShow = (props) => {
  const params = useParams();
  // console.log("params:", params)
  // console.log("id:", params.id)
  const [fact,setFact]= useState({});

  // lets do axios call on mount to get data
  useEffect(()=>{
    getFact();
  }, []);

  const getFact = async () => {
    try{
      let res = await axios.get(`/api/facts/${params.id}`);
      setFact(res.data);
    } catch (err) {
      alert("err occured getting fact")
    }
  };

  
  return (
    <BorderedDiv color="red">
      <p>Fact Show</p>
      <p>text: {fact.text}</p>
      <p>stars: {fact.stars}</p>
      <p>id: {fact.id}</p>
      <p>username: {fact.username}</p>
      <p>source: {fact.source}</p>
    </BorderedDiv>
  )
};

export default FactShow;