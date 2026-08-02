import Navbar from "./Navbar";
import Productcard from "./Productcard";
import { Cart } from "./Cartcontext";

function App() {
  return (
    <Cart>
      <Navbar />
      <Productcard />
    </Cart>
  );
}

export default App;