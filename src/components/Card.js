import React from 'react';

const Card = ({ id, name, email }) => {
  return (
    <div className='tc bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='' src={`https://robohash.org/${id}?size=200x200`}/>
      <div>
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
