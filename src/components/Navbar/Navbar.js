import React, { useState } from "react";
import Link from "../../Routing/Link";

const Navbar = ({activeItem, darkMode, toggleTheme, NavbarFields}) => {

    const numToWords = ['zero','one','two','three','four','five','six','seven','eight','nine'];

    const niceHREF = (rawHREF) => {
        if(rawHREF.startsWith('@')) {
            if(rawHREF === '@Theme') {
                return '';
            }
            return rawHREF.substring(1);
        } else {
            return rawHREF;
        }
    }

    const niceContent = (rawContent) => {
        if(rawContent.startsWith('@')) {
            if(rawContent === "@Home") {
                return "🛖Home";
            } else if (rawContent === "@Theme") {
                return (
                            <button onClick={toggleTheme} className={`ui ${!darkMode ? 'black' : 'white'} icon button`}>
                                <i className={`${darkMode ? 'moon' : 'sun'} icon`}/>
                            </button>
                    );
            }
        } else {
            return (rawContent === "Get-in-Touch") ? "Get in Touch" : rawContent;
        }
    }

    return(
        <div>
            <div className={`ui top fixed ${darkMode ? 'inverted' : ''} ${numToWords[NavbarFields.length]} item massive borderless menu`}>
            {NavbarFields.map((field, i) => {return(
                <Link 
                    key={i} 
                    className={`teal ${darkMode ? 'inverted' : ''} ${(activeItem === field) ? 'active' : ''} item`}
                    href={niceHREF(field)}
                >{niceContent(field)}</Link>
            );})}
            </div>
        </div>
    )
}

export default Navbar;