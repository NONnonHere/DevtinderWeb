
import {Navbar} from "./navbar";
import {BrowserRouter, Routes, Route} from "react-router";
import {Body} from "./body";
import {Login} from "./login";
import {Provider} from "react-redux";
function App() {
  return( 
    <>
    <Provider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />} >
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<div>signup</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
    
    </>
  );

}

export default App;