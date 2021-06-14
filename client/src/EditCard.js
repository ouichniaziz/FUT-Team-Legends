import axios from 'axios';
import React, { useEffect , useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

function EditCard () {

    const params = useParams()
    const[title , settitle]=useState('')
    const[imageurl , setimageurl]=useState('')
    const[description , setdescription]=useState('')
    
    const history = useHistory()

    useEffect(()=>{

        axios.post('/api/card/getcarddata' , {cardId : params.cardid}).then(res=>{

            console.log(res.data[0])
            const carddata = res.data[0]
            settitle(carddata.title)
            setimageurl(carddata.imageUrl)
            setdescription(carddata.description)


        }).catch(err=>{
            console.log(err)
        })

    },[])

    function editmycard () {

        const updatedCard = {

            title: title,
            imageUrl: imageurl,
            description: description,
            cardId: params.cardid
        }

        axios.post('/api/card/updatecard', updatedCard).then(res=> {
            console.log(res);
            alert(res.data)
            history.push('/')
        }).catch(err=> {
            console.log(err);
        })

    }

    return (
        <div>
          
        <div className='row justify-content-center'>
            <h1  style={{color:'white'}} className='m-3'>Edit The Card</h1>
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

                 <button onClick={editmycard} className='btn btn-success float-left'>Edit Card</button>

            </div>

        </div>
        </div>
    )
}

export default EditCard;