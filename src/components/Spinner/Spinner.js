import React, {useEffect, useRef} from 'react';
import "./Spinner.scss";

function Spinner({isCheckingAuth}) {
    const bodyRef = useRef(document.body);

    useEffect(() => {
        const body = bodyRef.current;
        if (isCheckingAuth) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "";
        }
        return () => {
            body.style.overflow = "";
        };
    }, [isCheckingAuth]);
    return (
        <div className="spinner-container">
            <div className="spinner"></div>
        </div>
    );
}

export default Spinner;