import React from "react";

const Link = ({className, href, children}) => {

    const fullHREF = ((window.location.pathname === href) ? '' : `http://${window.location.host}/${href}`)

    const onClick = (event) => {
        if(event.metaKey || event.ctrlKey){
            return;
        }

        event.preventDefault();
        window.history.pushState({},'',fullHREF)

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return (
        <a onClick={onClick} className={className} href={href}>{children}</a>
    );
}

export default Link;

// Quelle: Stephen Grider - Modern React with Redux (Lektion 13) Link: https://www.udemy.com/course/react-redux/