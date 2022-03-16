import { useState, useEffect } from "react";

const Route = ({path, children}) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        }
        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        }
    }, [])

    return (
        (currentPath === path) ? children : null
    );
}

export default Route;

// Quelle: Stephen Grider - Modern React with Redux (Lektion 13) Link: https://www.udemy.com/course/react-redux/