import React, { useState } from 'react'
import axios from 'axios';
import Post from '../components/Posts';
const Search = () => {
    const [photo, setPhoto] = useState([]);
    const [clientId] = useState("MYq3E7dLL-MDJIPtc_bS2aDcJYkRTtwP2c-Um_PXDLw")
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
                    <p>By Bubpachol Suwanwisoot 624259018</p>

                    <form onSubmit={handleSubmit}>
          <div className="fix-input-text input-group text-center">
            <input
              onChange={(e) => setPhoto(e.target.value)}
              className="form-control"
              type="text"
              placeholder="พิมพ์ข้อความสำหรับการค้นหา"/>
            <div className="input-group-append">
              <button
                type="submit"
                className="btn btn-success px-5">
                ค้นหา
              </button>
            </div>
          </div>
        </form> 

                </div>
            </div>

            <Post id={result} />
        </>
    )
}

export default Search;