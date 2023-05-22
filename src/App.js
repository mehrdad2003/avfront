import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AirportContextProvider from "./AirportContext";
import ScrollManagement from "./components/ScrollManagement";
import AirportPage from "./pages/AirportPage/AirportPage";
import ContactsPage from "./pages/ContactsPage";

import SelectAirportPage from "./pages/SelectAirportPage/SelectAirportPage";


function App() {
  return (
    <AirportContextProvider>
    
      <ScrollManagement>
        <Router>
          <Route path="/" exact component={SelectAirportPage} />
          <Route path="/airport/:icao" exact component={AirportPage} />
          <Route path="/contacts" component={ContactsPage} />
        
        
        </Router>
      </ScrollManagement>
    </AirportContextProvider>
  );
}

export default App;
