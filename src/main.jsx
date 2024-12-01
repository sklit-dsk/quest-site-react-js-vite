import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./index.jsx";



// userAPI.auth.isValid()
//     .then(data => {
//         if (!data['is_valid']) {
//             cookies.accessToken.remove();
//         }
//     })
//     .catch(error => {
//         console.error(error);
//         cookies.accessToken.remove();
//     });

createRoot(document.getElementById('root')).render(<StrictMode><App/></StrictMode>);
