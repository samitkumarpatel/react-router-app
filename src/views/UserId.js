import React from 'react'
import { useParams } from 'react-router-dom';

const UserId = () => {
    const { id } = useParams();
  return (
    <div>
        UserId {id}
    </div>
  )
}

export default UserId