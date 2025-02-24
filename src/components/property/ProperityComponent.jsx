import './ProperityComponent.css'
import HeaderComponent from '../Header/HeaderComponent'
import { useRef, useState } from 'react'
import {Data} from '../../Data'
import ProperityCard from '../ProperityCard/ProperityCard'
import FooterComponent from '../Footer/FooterComponent'
const ProperityComponent = ()=>{
    const [propertyList ,setProperityList] = useState(Data)
    const [present , setPresent] = useState(true);
    const [favList ,setFavList] = useState([]);
    const textRef = useRef('');
    const cityRef = useRef('');
    const PriceRef = useRef('');
    const typeRef = useRef('');


    const filterFn = (val,filerdetails)=>{
        let newData;
        
        if(filerdetails === "name"){
            let text = val.toLowerCase();
             newData = Data.filter((ele)=> ele[filerdetails].toLowerCase().includes(text));
        }
        else if(filerdetails === 'city'){
            if(val === 'all'){
                setProperityList(Data)
                return;
            }
            newData = Data.filter((ele)=> ele.location === val);
            console.log(newData);
            
        }
        else if(filerdetails === "price"){
            
            if(val === "price"){
                setProperityList(Data)
                return;
            }
            if(val === '0'){
                newData = Data.filter((ele)=> ele.price < 500);
            }
            else if(val === '1'){
                newData = Data.filter((ele)=> ele.price >= 500 && ele.price <= 1500)
            }
            else if(val === '2'){
                newData = Data.filter((ele)=> ele.price >= 1500 && ele.price <= 3000)
            }
            else if(val === '3'){
                newData = Data.filter((ele)=> ele.price >= 3000 && ele.price <= 5000)
            }
            else{
                newData = Data.filter((ele)=> ele.price >= 5000)
            }
            
        }
        else if(filerdetails ==="type"){
            if(val ==="type"){
                setProperityList(Data)
                return;
            }
            newData = Data.filter((ele)=> ele.type === val);
        }
        setProperityList(newData)
    }
    
    return(
        <div className="property-container">
            <HeaderComponent/>
            
            <div className="filter-box">
                <div className="city">
                    <label htmlFor="">Enter City</label>
                    <select onChange={()=> filterFn(cityRef.current.value , "city")} ref={cityRef} name="" id="">
                        <option value="all">All</option>
                        {Data.map((ele)=><option key={ele.id} value={ele.location}>{ele.location}</option>)}
                    </select>
                </div>
                <div className="date">
                    <label htmlFor="">Date</label>
                    <input className='input-field' type="date" name="" id="" />
                </div>
                <div className="price">
                    <label htmlFor="">Price</label>
                    <select onChange={()=> filterFn(PriceRef.current.value , "price")} ref={PriceRef} name="" id="">
                    <option value="price">All Prices</option>
                    <option value={0}>$0-$500</option>
                    <option value={1}>$500-$1,500</option>
                    <option value={2}>$1,500-$3,000</option>
                    <option value={3}>$3,000-$5,000</option>
                    <option value={4}>$5,000+</option>
                </select>
                </div>
                <div className="type">
                    <label htmlFor="">Properity type</label>
                    <select onChange={()=> filterFn(typeRef.current.value,"type")} ref={typeRef} name="" id="">
                        <option value="type">All</option>
                        {Data.map((ele)=> <option key={ele.id} value={ele.type}>{ele.type}</option>)}
                    </select>
                </div>
                <div className="search-field">
                    <input ref={textRef} onChange={()=>filterFn(textRef.current.value , "name")} className='input-text-search' type="text" placeholder='Enter Properity name' />
                    
                </div>
            </div>
            <div className="page">
                <p className="all" onClick={()=> setPresent(true)} style={{backgroundColor: present ? "blue" : "white" , color:present?"white" :"black"}}>All Properity</p>
                <p className="like" onClick={()=> setPresent(false)} style={{backgroundColor: !present ? "blue" : "white" , color:!present?"white" :"black"}}>Like Properity</p>
            </div>

            <div className="properity">
                {present && propertyList.map((ele)=><ProperityCard key={ele.id} {...ele} favList={favList} setFavList={setFavList}/>)}
                {present && !favList && <h1>Fav Properity list is Empty</h1>}
                {!present && favList.map((ele)=><ProperityCard key={ele.id} {...ele} favList={favList} setFavList={setFavList}/> )}
            </div>

            <FooterComponent/>
        </div>
    )
}
export default ProperityComponent;