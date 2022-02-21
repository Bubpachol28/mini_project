import React from 'react'
import { BiPencil } from "react-icons/bi";
import { BsSuitHeart } from "react-icons/bs";
const GetImages = ({id}) => {
  return (
    <>
      <div className="container">
        <div className="row">
          {id.map((datail) => (
            <>
              <div className="col-4"></div>
              <div className="col-4 my-2">
                <div className="card card-setting" key={datail.user.id}>
                  <div className="card-header remove-hr-card">
                    <a href={"/profile/"+datail.user.username} className="link-user">
                      <img src={datail.user.profile_image.small} className="img-profile"/>
                      <span className="text-username">{datail.user.first_name}</span>
                    </a>
                  </div>
                  <div className="card-body">
                    <img src={datail.urls.full} className="img-post"/>
                  </div>
                  <div className="card-footer">
                    <BsSuitHeart size={25} /><span className="mx-2"></span><BiPencil size={25} /><br/><label>{datail.user.total_likes} Likes</label>
                    <br/>
                    <a href={"/profile/"+datail.user.username} className="link-user">
                      <span className="fs16 fs-bold">{datail.user.first_name} </span>
                      <span className="fs16">{datail.user.bio}</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4"></div>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default GetImages