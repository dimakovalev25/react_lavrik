import {useEffect} from "react";

export default function (ref, fn){
    useEffect(()=> {

        function onClick() {
            console.log('clicked', ref, fn);
        }

        window.addEventListener('click', onClick);
        return() => {
            window.removeEventListener('click', onClick);
        };
    }, [])
}