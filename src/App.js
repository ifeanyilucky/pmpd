import React from "react";
import Header from "./Components/Header/Header";
import Services from "./Components/Services/Services";
import Hire from "./Components/Hire/Hire";
import { Switch, Route, Link, HashRouter } from "react-router-dom";
import Body from "./Components/Body/Body";
import Portfolio from "./Components/Portfolio/Portfolio";
import Enquiry from "./Components/Enquiry/Enquiry";
// import Careers from "./Components/Careers/Careers";
import hireDev from "./Components/Hire/Hire";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Pwu from "./Components/pwu/Pwu";
import { Container } from "reactstrap";
import WhatWeDo from "./Components/WhatWeDo";
import Cac from "./Components/Cac/Cac";
function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/What-we-do" component={Services} />
        <Route path=":quote/enquiry" component={Enquiry} />
        <Route path="/hire-developer" component={hireDev} />
        <Route path="/who-we-are" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/enquiry" component={Enquiry} />

        <Route
          path="/"
          render={() => (
            <div>
              <Container>
                <div className="row">
                  <div className="col-8 mx-auto text-center align-middle">
                    <img
                      src="https://res.cloudinary.com/codack/image/upload/v1600161915/undraw_page_not_found_su7k_lpsss6.svg"
                      className="w-100"
                      alt="404"
                    />
                    <h1 className="secHead1">This is a wrong Area</h1>
                    <em className="Plink">
                      <Link to="/"> Gtf back Home</Link>
                    </em>
                  </div>
                </div>
              </Container>
            </div>
          )}
        />
      </Switch>
    </HashRouter>
  );
}

function Home() {
  return (
    <>
      <Header />
      <WhatWeDo />
      <Body />
      {/* <Careers /> */}

      <Pwu />
      <Hire />
      <Cac />
      <Footer />
    </>
  );
}
export default App;
