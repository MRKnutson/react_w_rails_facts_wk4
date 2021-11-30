import React, { useEffect, useState } from "react";
import axios from "axios";
import Fact from "./Fact";
import FactForm from "./FactForm";
import BorderedDiv from "./BorderedDiv";
import { Link } from "react-router-dom";

const Facts = () => {
  const [facts, setFacts] = useState([]);

  useEffect(()=>{
    console.log("mounted");
    getFacts();
  }, [])

  const getFacts = async()=> {
    let response = await axios.get('/api/facts');
    setFacts(response.data);
  };

  const renderFacts = () =>{
    if (facts.length ===0) {
      return <p>No Facts</p>
    }
   return facts.map((fact)=>{
      return<Fact key= {fact.id} {...fact} deleteFact={deleteFact}/>
    })
  };

  const addFact = (fact) => {
    setFacts([fact, ...facts]);
  }

  const deleteFact = async (id) => {
    // remove from db
    await axios.delete(`api/facts/${id}`);
    // remove from ui
    setFacts(facts.filter(fact=>fact.id !== id));
  };

  return(
    <BorderedDiv color = "green">
      <Link to="/counter">goto counter</Link>
      <h1>Facts</h1>
      <Link to="facts/new">New Fact</Link>
      <FactForm addFact={addFact}/>
      {renderFacts()}
    </BorderedDiv>
  );
};

export default Facts;