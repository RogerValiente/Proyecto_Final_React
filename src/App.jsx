import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarComponent from "./components/NavBar/index";
import ItemListContainer from "./containers/ItemListContainer/index";
import ItemDetailContainer from "./containers/ItemDetailContainer/index";
import Cart from "./components/Cart/Index";
import Store from "./Store/Store";
import Error404 from "./components/Error404.jsx/index";
import Footer from "./components/Footer/index";

function App() {
  return (
    <Store>
      <Router>
        <NavbarComponent />
        <Switch>
          <Route path="/producto/:categoria/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/producto/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/carrito">
            <Cart />
          </Route>
          <Route exact path="/catalog/:categoria">
            <ItemListContainer />
          </Route>
          <Route exact path="/catalog">
            <ItemListContainer />
          </Route>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route path="*">
            <Error404 />
            {/* VER BIEN QUE ME SALTE CUANDO ES UNA RUTA INCORRECTA  */}
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Store>
  );
}

export default App;
