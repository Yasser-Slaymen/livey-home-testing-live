import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";

import ReactGA4 from "react-ga4";
const MEASUREMENT_ID = "G-TP3YRT3D70"; // Replace with your actual ID
ReactGA4.initialize(MEASUREMENT_ID);
// function App() {}
 
function App() {
   // Track page views on component mount using useEffect
   useEffect(() => {
    ReactGA4.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
export default App;



// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//       </Routes>
//     </div>
//   );
// }
// export default App;
