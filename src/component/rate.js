import React from 'react';
import { BsStar,BsStarFill } from "react-icons/bs";


const Rate = ({ rating, setRatingSearch }) => {
  const handleSearch =(e,i)=>{
    e.preventDefault();
    setRatingSearch(i)
  }
    const stars = (x) => {
      let starsArray = [];
      for (let i = 1; i <= 5; i++) {
        if (i <= x) {
          starsArray.push(
            <span key={i} onClick={(e)=>handleSearch(e,i)}>
              <BsStarFill/>
            </span>
          );
        } else {
          starsArray.push(
            <span key={i} onClick={(e) => handleSearch(e,i)}>
              <BsStar/>
            </span>
          );
        }
      }return starsArray;
    };
    
    
    return(<div>{stars(rating)}</div>)}

    Rate.defaultProps = {
        setRatingSearch: () => {},
        rating: 1,
      };

export default Rate
