import {useEffect} from "react";

export default function (ref, fn) {

    useEffect(() => {
        function onClick(e) {
            // console.log(ref.current.contains(e.target));

            if(!ref.current.contains(e.target)){
                fn(e)
            }
        }

        window.addEventListener('click', onClick);

        return () => {
            window.removeEventListener('click', onClick);
        };

    },[ref, fn]);
}















// import {useEffect} from "react";
//
// export default function (ref, fn){
//     useEffect(()=> {
//         function onClick(e) {
//             console.log(ref.current.contains(e.target));
//         }
//
//         window.addEventListener('click', onClick);
//
//         return() => {
//             window.removeEventListener('click', onClick);
//         };
//     }, [ref, fn])
// }