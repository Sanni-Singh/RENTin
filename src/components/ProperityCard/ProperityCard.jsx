import { useState } from 'react';
import './ProperityCard.css'
import { FaHeart } from "react-icons/fa";
const ProperityCard = ({name,id,location,beds,bathrooms,size,image,price ,favList,setFavList})=>{
    const [flag,setFlag] = useState(false);

    const SavingTheFav = ()=>{
        let val = !flag;
        setFlag(val);
        if(val){
            let newArray = [...favList];
            let item = newArray.find((ele)=> ele.name === name);
            if(item) return;
        }
        if(val){
            let dataObj = {
                name,
                location,
                beds,
                bathrooms,
                size,
                image,
                price,
                id
            }
            setFavList([...favList,dataObj]);
        }
        else {
            let newArray = [...favList];
            let item = newArray.filter((ele)=> ele.name !== name);
            setFavList(item)
        }
    }
    return(
        <div className='properityCard-container'>
            <img src={image} alt="Properity-Image" className="properity-image" />
            <div className='name-heart'>
                <h3 className="property-name">{name}</h3>
                <FaHeart onClick={SavingTheFav} className='heart' style={{color:flag?"red":"black"}}/>
            </div>
            <p className="properity-locations">{location}</p>
            <p className="properity-prize">${price}</p>
            <p className="properity-items">{`${beds} Beds ${bathrooms} Bathrooms ${size}m^2`}</p>
        </div>
    )
}
export default ProperityCard;