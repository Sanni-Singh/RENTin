import './ProperityCard.css'
const ProperityCard = ({name,location,beds,bathrooms,size,image,price})=>{
    return(
        <div className='properityCard-container'>
            <img src={image} alt="Properity-Image" className="properity-image" />
            <h3 className="property-name">{name}</h3>
            <p className="properity-locations">{location}</p>
            <p className="properity-prize">${price}</p>
            <p className="properity-items">{`${beds} Beds ${bathrooms} Bathrooms ${size}m^2`}</p>
        </div>
    )
}
export default ProperityCard;