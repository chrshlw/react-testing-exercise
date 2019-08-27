import React, { useState, useEffect } from 'react';
import CatDescription from './CatDescription';
import './Cat.css';
import PropTypes from 'prop-types';

function Cat(props) {
  const [data, setData] = useState({ });
  const [click, setClick] = useState({clicks : 0});

  useEffect(() => {
    async function fetchData(){
      const res = await fetch("https://aws.random.cat/meow");
      setData(await res.json());
    } 
    fetchData();
  }, []);

  const increaseCounter = (e) => {
    setClick({clicks: click.clicks + 1});
  };
  console.log(data);
  return (
    <div className="cat">
      <img className="catImg" src={data.file} alt="cat" width="300" height="300" onClick={increaseCounter}/>
      <br/>
      <CatDescription description={props.description} clicks={click.clicks}/>
    </div>
  )
}

Cat.propTypes = {
  description: PropTypes.string
};

Cat.defaultProps = {
  description: 'Stranger Cat'
};

export default Cat;