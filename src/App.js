import React from "react";
import Header from "./Components/Header/Header";
import Services from "./Components/Services/Services";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Body from "./Components/Body/Body";
import Portfolio from "./Components/Portfolio/Portfolio";
import Enquiry from "./Components/Enquiry/Enquiry";
import Careers from "./Components/Careers/Careers";
import hireDev from "./Components/Hire/Hire";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/What-we-do" component={Services} />
        <Route path="/enquiry" component={Enquiry} />
        <Route path="/hire-developer" component={hireDev} />
        <Route path="/who-we-are" component={About} />
      </Switch>
    </Router>
  );
}

function Home() {
  return (
    <>
      <Header />
      <Body />
      <Portfolio />
      <Careers />
      <Footer />
    </>
  );
}
export default App;
