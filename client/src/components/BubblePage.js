import React, { useState, useEffect } from "react";
// import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth"

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = () => {
    axiosWithAuth() 
      .get('/api/colors')
      .then(result => {
        console.log(result)
        setColorList(result.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div id='bubbleList'>
    	<h1>The Bubbles Page</h1>
     	<ColorList colors={colorList}  fetchData={fetchData} />
     	<Bubbles colors={colorList} />
    </div>
  );
};

export default BubblePage;
