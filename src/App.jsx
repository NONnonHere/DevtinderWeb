import {Navbar} from "./components/navbar";
import {BrowserRouter, Routes, Route} from "react-router";
import {Body} from "./components/body";
import {Login} from "./components/login";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/feed";
function App() {
  return( 
    <>
    <Provider store={appStore}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />} >
        <Route path="/feed" element={<Feed />} />
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

