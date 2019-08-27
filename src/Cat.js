import React, { useState, useEffect } from 'react';
import CatDescription from './CatDescription';
import './Cat.css';
import PropTypes from 'prop-types';

function Cat(props) {
  const [imgUrl, setImgUrl] = useState({ });
  const [click, setClick] = useState({clicks : 0});

  const loadImage = async() => {
    const res = await fetch("https://aws.random.cat/meow");
    const json =  await res.json();
    setImgUrl(json.file);
  };

  useEffect(() => {
    loadImage();
  }, []);
  
  const increaseCounter = (e) => {
    setClick({clicks: click.clicks + 1});
  };
  console.log(imgUrl);
  return (
    <div className="cat">
      <img className="catImg" src={imgUrl} alt="cat" width="300" height="300" onClick={increaseCounter}/>
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