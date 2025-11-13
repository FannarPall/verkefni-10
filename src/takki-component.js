import { useEffect, useState } from 'react';
import './takki.css';

function Takki({takkiId}) {
    
    // state-ið á takkanum
    const [isOn, setIsOn] = useState(() => {
        const value = localStorage.getItem(takkiId);
        return value === "true" ? true : false;
    });

    // function fyrir þegar ýtt er á takkann
    const toggleSwitch = () => {
        setIsOn(!isOn);
        console.log("switch state update-að i local storage");
    }

    // hlustar á og keyrir þegar það vera breytingr á sate-inu á takkanum
    useEffect(() => {
        localStorage.setItem(takkiId, isOn);
    }, [isOn, takkiId]);

    return(
        <button
            //setur classann eftir því hvað isOn er (true/false)
            className={isOn ? "toggle-button-on" : "toggle-button"}
            onClick={toggleSwitch}
        >
            ON/OFF
        </button>
    )
}


export default Takki;