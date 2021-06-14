import React, { useState } from 'react';
import uniqid from 'uniqid';
import axios from 'axios';

function AddCard () {

    const[title , settitle]=useState('')
    const[imageurl , setimageurl]=useState('')
    const[description , setdescription]=useState('')

    const addCard = () => {
        var card = {
            title: title,
            imageUrl: imageurl,
            description: description,
            cardId: uniqid()
        }
        console.log(card);

        axios.post('/api/card/addnewcard',card).then(res=>{
            alert('Congrats' , 'Your Post Added Successfully' , 'success')
        }).then(err=>{
            console.log(err)
        })
    }

    return (
        <div className='row justify-content-center'>

        <div className='col-md-6'>
            <h1 className='m-3'>Add New Card</h1>
            <div>
                 <a href="/" className='btn btn-primary'>See Card</a> 
                 <input type="text" placeholder='Name' className='form-control' 
                 value={title} onChange={(e)=>{settitle(e.target.value)}}
                 />
                 <input type="text" placeholder='imageURL' className='form-control'
                 value={imageurl} onChange={(e)=>{setimageurl(e.target.value)}}
                 />
                 <textarea cols="30" rows="10" placeholder='Description' className='form-control'
                 value={description} onChange={(e)=>{setdescription(e.target.value)}}
                 />

                 <button onClick={addCard} className='btn btn-success float-left'>Add Card</button>

            </div>

        </div>
        
    </div>
    )
}

export default AddCard;