import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Favourite Places</h1>
      </header>

      <Place
        title="A caravan, in the rain"
        placeName="Kippford"
        country="Scotland"
        description="I love the noise of the rain on the roof of a caravan, or the canvas of a tent.  At least when it is not coming in."
        imageURL="https://images.unsplash.com/photo-1606225277729-7f3bdbc6f8b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1963&q=80"
        mapURL="https://goo.gl/maps/ikgdfRTx4m81LF598"
      />

      <Place
        title="The best bit of Hampstead Heath"
        placeName="Golders Hill Park"
        country="London"
        description="A very pretty park with rolling hills (and deer), on London's northern line."
        imageURL="https://images.unsplash.com/photo-1591752509219-b097a7b5697c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1934&q=80"
        mapURL="https://goo.gl/maps/Skf5hCTruz4WFAAm9"
      />

      <Place
        title="White and blue"
        placeName="Vilankulos"
        country="Mozambique"
        description="Surreal white sand, blue-green water, empty blue skies, and quiet."
        imageURL="https://media-cdn.tripadvisor.com/media/vr-splice-j/00/c5/dd/13.jpg"
        mapURL="https://goo.gl/maps/jfTejuobgNeWSbq98"
      />
      <footer className="App-footer">
        <h1>Footer stuff here</h1>
      </footer>
    </div>
  );
}
function Place(props: {
  title: string;
  placeName: string;
  country: string;
  description: string;
  mapURL: string;
  imageURL: string;
}) {
  return (
    <div className="place">
      <img src={props.imageURL} className="main-image" alt={props.title} />
      <h2>{props.title}</h2>
      <h3>
        {props.placeName}, {props.country} (<a href={props.mapURL}>map link</a>)
      </h3>
      <p className="description">{props.description}</p>
    </div>
  );
}

export default App;
