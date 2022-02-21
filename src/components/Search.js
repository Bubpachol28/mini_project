import React, { useState } from 'react'
import axios from 'axios';
import Post from '../components/Posts';

const Search = () => {
    const [photo, setPhoto] = useState([]);
    const [clientId] = useState("TxVCrZv0HB8cC4-nFj0v3DgRDhKl6JfEEcS5TfV4vGM")
    const [result, setResult] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault();
        const url = "https://api.unsplash.com/search/photos?page=1&query=" + photo + "&client_id=" + clientId;
        axios.get(url)
            .then((response) => {
                setResult(response.data.results);
            })
    }

    return (
        <>
            <div className="container">
                <div className='card-body'>
                    <h1>Unsplash API</h1>
                    <br></br>
                    <p>Image Search.</p>
                    <form onSubmit={handleSubmit}>
          <div className="fix-input-text input-group text-center">
            <input
              onChange={(e) => setPhoto(e.target.value)}
              className="form-control"
              type="text"
              placeholder="พิมพ์ข้อความสำหรับการค้นหา"/> 
              </div>
              <br></br>
            <div className="input-group-append">
              <button
                type="submit"
                className="btn btn-warning px-5">
                ค้นหา
              </button>
            </div>
         
        </form> 

                </div>
            </div>
          

            <Post id={result} />
        </>
    )
}

export default Search;