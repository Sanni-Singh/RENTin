import './HeaderComponent.css'
const HeaderComponent = ()=>{
    return(
        <div className="header-container">
            <h1 className="header-logo">RENTin</h1>
            <p className="header-title">Search properties to rent </p>
            <ol className="header-order">
                    <li className="header-list">About</li>
                    <li className="header-list">Contact</li>
                    <li className="header-list login">Login </li>
            </ol>
        </div>
    )
}
export default HeaderComponent;