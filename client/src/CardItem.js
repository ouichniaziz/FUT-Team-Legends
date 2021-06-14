import React, { useEffect } from 'react';
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';


function CardItem ({card}) {

    const history = useHistory()

    function deletecard (cardId) {
        axios.post('api/card/deletecard', {cardId:cardId}).then(res=> {
            alert(res.data)
            history.go(0)
        }).catch(err=> {
            console.log(err);
        })
    }
    return (
        <div className="col-md-5 shadow p-3 mb-5 bg-white rounded">
            <h1 className='p-1'>{card.title}</h1>
            <img src={card.imageUrl} className='img-fluid p-1'/>
            <p className='p-1'>{card.description}</p>
            <Link to={`/editcard/${card.cardId}`}><li className="btn btn-outline-primary">Update</li></Link>
            <button className="btn btn-outline-danger" onClick={() => {deletecard(card.cardId)}}>Delete</button>
        </div>
    )
}

export default CardItem;