import React from 'react'
import { FaBookmark } from "react-icons/fa";

const Card = (prop) => {
  // console.log(prop.tag_1)
  return (
    <div>
      <div className="card">
        <div className="top" style={{backgroundColor:prop.cardcolor}}>
          <div className="layer-1">
            <div className="date">
              <p>{prop.date}</p>
            </div>
            <div className="save">
              <FaBookmark />
            </div>
          </div>
          <p className="company">{prop.company}</p>
          <div className="title">
            <h2>{prop.role}</h2>
            <div className="logo">
              <img
                src={prop.logo}
                alt=""
                style={{ height: "28px" }}
              />
            </div>
          </div>
          <div className="tags">
            <div className="tag tag-1" style={{backgroundColor:prop.tagcolor}}>{prop.tag_1}</div>
            <div className="tag tag-2" style={{backgroundColor:prop.tagcolor}}>{prop.tag_2}</div>
          </div>
        </div>
        <div className="otherDetail">
          <div className="priceLoc">
            <div className="price">{prop.hour}/$</div>
            <div className="location">{prop.loc}</div>
          </div>
          <button className="detail">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Card