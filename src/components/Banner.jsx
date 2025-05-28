import logo from "../assets/logo.png"
import {logo as logoClass } from "./Banner.module.css"
const Banner = () => {
    return (
        <header className="row mb-4">
            <div className="col-5">
                <img src={logo} alt="shirt-design" className={logoClass } />
            </div>
            <div className="col-7 mt-5">
                Providing houses all over the world!
            </div>
        </header>
    );
}
export default Banner;