import React from "react";
import { Navbar } from "./Navbar.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Card } from "./Card.jsx";
import {Footer} from "./Footer.jsx"

//create your first component
const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <Jumbotron />
        <div className="card-group gap-3 my-3">
          <Card
            title="Card 1"
			srcImage="https://picsum.photos/id/17/500/325"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium lectus et mauris dapibus fringilla."
            labelButton="Go!"
          />
          <Card
            title="Card 2"
			srcImage="https://picsum.photos/id/37/500/325"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit, ante ac ultrices sollicitudin, arcu."
            labelButton="Click me!"
          />
          <Card
            title="Card 3"
			srcImage="https://picsum.photos/id/45/500/325"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius est quis eleifend malesuada. Nullam."
            labelButton="Get started"
          />
          <Card
            title="Card 4"
			srcImage="https://picsum.photos/id/200/500/325"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium lectus et mauris dapibus fringilla."
            labelButton="Try it free"
          />
        </div>
      </div>
	  <Footer />
    </React.Fragment>
  );
};

export default Home;
