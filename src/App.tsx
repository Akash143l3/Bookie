import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Cart, Books,About } from "./component";
import WithNavbar from "./component/withNavbar";
import Signup from "./component/Signup";
import Signin from "./component/Signin";


function App() {
  return (
    <div className="flex flex-col text-neutral-950 min-h-full h-fit w-full">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <WithNavbar>
                <Home />
              </WithNavbar>
            }
          />
          <Route
            path="/Books"
            element={
              <WithNavbar>
                <Books />
              </WithNavbar>
            }
          />
          <Route
            path="/About"
            element={
              <WithNavbar>
                <About />
              </WithNavbar>
            }
          />
          
          <Route
            path="/cart"
            element={
              <WithNavbar>
                <Cart />
              </WithNavbar>
            }
          />
          <Route path="/Auth/Signup" element={<Signup />} />
          <Route path="/Auth/Signin" element={<Signin/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;