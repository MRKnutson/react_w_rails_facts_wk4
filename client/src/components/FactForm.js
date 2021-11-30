import axios from "axios";
import React, {useState, useEffect} from "react"
import BorderedDiv from "./BorderedDiv";
import { useParams, useNavigate } from "react-router-dom";

const FactForm = (props) => {


  const [text, setText] = useState('')
  const [stars, setStars] = useState('')
  const [error, setError] = useState(null);

  const params = useParams();
  const navigate = useNavigate();
  // console.log("params:", params)
  // console.log("id:", params.id)

  // lets do axios call on mount to get data
  useEffect(()=>{
    // don't get fact for new form, only edit
    if(params.id){
    getFact();
    }
  }, []);

  const getFact = async () => {
    try{
      let res = await axios.get(`/api/facts/${params.id}`);
      setText(res.data.text);
      setStars(res.data.stars);
    } catch (err) {
      alert("err occured getting fact")
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fact = { text, stars};
    // axios call to create fact
    try {
      setError(null);
      if(params.id){
        // update
        let res = await axios.put(`/api/facts/${params.id}`, fact);
        // navigate back to facts
        navigate("/");
      } else {
      let res = await axios.post("/api/facts", fact);
    // want to add res.data to existing facts
    props.addFact(res.data)
    setText("");
    setStars("")
      }
    } catch (err) {
      // alert("err occured");
      console.log(err.response.data.errors);
      err.response && setError(err.response.data.errors);
    }
    
  };

  return(
    <BorderedDiv color ="blue">
      <h1>{params.id? "Edit Fact" : "New Fact"}</h1>
      {/* {error && <p style={{color: "red"}} >{JSON.stringify(error)}</p>} */}
    <form onSubmit = {handleSubmit}>
      <p>text</p>
      {error && error.text && (
        <p style={{color: "red"}} >{JSON.stringify(error.text)}</p>
      )}
      {/* HTML validation, easiest/worst option, can't change message look and not secure at all (can just remove required from inspect element) */}
      <input 
      // required 
      value={text} 
      onChange={(e) => setText(e.target.value)} 
      />
      <p>stars</p>
      {error && error.stars && (
        <p style={{color: "red"}} >{JSON.stringify(error.stars)}</p>
      )}
      <input 
      // type = "number" 
      // min ={0} max = {5} 
      value={stars} 
      onChange={(e) => setStars(e.target.value)} />
      <button type = "submit" >{params.id ? "update" : "add"}</button>
    </form>
    </BorderedDiv>
  )
};

export default FactForm;