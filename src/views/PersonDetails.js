import React from 'react'
import { Link, useParams } from 'react-router-dom'

const PersonDetails = () => {
    const { id } = useParams()

    return (
        <div>
            <Link to="/person">Back</Link>
            <hr/>
            Person Details for -  {id}
        </div>
    )
}

export default PersonDetails