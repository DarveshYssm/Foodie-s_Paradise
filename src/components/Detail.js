import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  let { id } = useParams();
  return (
    <div>
      <h1>Detail Page</h1>
      <p>Details for item with ID: {id}</p>
    </div>
  );
}

export default Detail;
