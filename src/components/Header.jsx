import React from "react";
import { SlArrowDown } from "react-icons/sl";
import { SlQuestion } from "react-icons/sl";
import { LuSearch } from "react-icons/lu";


const Header = () => {
    return (
        <div className="header">
            <div className="left">
                <input placeholder="News" />
                <LuSearch className="input-icon" />
            </div>
            <div className="rigth">
                <div className="help">
                    <SlQuestion className="help-icon" />
                    <h3>Help</h3>
                </div>
                <div className="lang">
                    <h3>EN</h3>
                    <SlArrowDown className="lang-icon" />
                </div>
            </div>
        </div>
    )
}


export default Header;