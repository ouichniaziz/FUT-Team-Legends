import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardItem from './CardItem';

function CardList () {

    const[cardsdata, setcardsdata] = useState([]);

    useEffect(() => {

        axios.get('/api/card/getcards').then(res => {
            console.log(res.data);
            setcardsdata(res.data)
        }).catch(err => {
            console.log(err);
        })
    }, []);

    const cardlist = cardsdata.map(card => {
        return (
            <div className="row justify-content-center">
                <CardItem card={card} />
            </div>
        )
    })

    return (
        <div>
            <a href="/addcard" className='btn btn-warning m-5'>Add Card</a>
            {cardlist}
        </div>
    )
}

export default CardList;