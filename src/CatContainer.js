import React from 'react';
import Cat from './Cat';
import _ from 'lodash';
import descriptions from './cat_texts.json';
import PropTypes from 'prop-types';
import './CatContainer.css';

function CatContainer(props) {
  const cats = _.times(props.size, (idx) => (<Cat description={descriptions[idx]} key={idx}/>));
  console.log(cats);
  return(
    <React.Fragment>
      <h3 className="headline">my testing cats:</h3>
      <div className="catContainer">
        {cats}
      </div>
    </React.Fragment>
  )
}
CatContainer.propTypes = {
  size: PropTypes.number.isRequired
};

export default CatContainer;