import React from "react";
import ReactDOM from "react-dom/client";

{
  /** 
     Header
      - logo
      - Nav Items(Right Side)
      - Cart
     body
      - Search Bar
      - RestrauntList
        - Image
        - Name
        - Star Ratings
        - Cuisines
     footer
     - links
     - copyRight
  */
}

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// config driven UI

const restrauntList = [
  {
    type: "restaurants",
    cards: [
      {
        id:1,
        name: "Burger King",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/5ade7aab-4263-4ea8-b04c-299e523d1ad8_129211.jpg",
        cusines: ["Burger", "American"],
        rating: "5.2",
      },
      {
        id:2,
        name: "KFC",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/69e69c55-d2bb-4207-8310-131fc693f78a_26724.JPG",
        cusines: ["Spicy", "American"],
        rating: "5.4",
      },
      {
        id:3,
        name: "Subway",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/fb30ceca-7684-4007-8300-b6c128c06d13_20055.JPG",
        cusines: ["Salads", "Snacks", "Deserts"],
        rating: "5.4",
      },
    ],
  },
];

const RestrauntCard = ({ name, cusines, rating, image}) => {
  return (
    <div className="card">
      <img alt="burger-king" src={image} />
      <h2>{name}</h2>
      <h3>{cusines.join(", ")}</h3>
      <h4>{rating} stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restraunt-list">
      {restrauntList[0].cards.map((restaurants) => (
        <RestrauntCard key={restaurants.id} {...restaurants} />
      ))}
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); //passing a react component inside the root
