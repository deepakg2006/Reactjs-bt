// import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function App() {

  const buyNow = () => {
    alert("Your Order is placed, Thank You.");
  };

  const products = [
    {
      name: "Samsung",
      model: "S23",
      price: 35000,
      id:1,
      img: "https://www.shutterstock.com/image-vector/minsk-belarus-january-17-2024-260nw-2413783853.jpg"
    },
    {
      name: "iPhone",
      model: "14 Pro Max",
      price: 65000,
      id:2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVmL_HijT71U7zIyWNXbI-ahDQaN2rrDuv_nrdHkMVs6C_3FdSS2kHia6Q&s=10"
    },
    {
      name: "Nothing",
      model: "4a Pro",
      price: 40000,
      id:3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUE3OpOWWoFMDeJc0HgTlZMXzuk87lFlLzH9_dGxQ1-hSBy7JX4TG2GLQ&s=10"
    },
    {
      name: "OnePlus",
      model: "12R",
      price: 42000,
      id:4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTETLg9nuM9DwoPIFKCtfTSaKN7H5f2zOftYcXzhEQfCQ&s"
    },
    {
      name: "Realme",
      model: "GT 6",
      price: 32000,
      id:5,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMYq974NVqeeLsnzmk4knkE0e1MYHca1KzEMiQyOgDuQ&s=10"
    },
    {
      name: "Vivo",
      model: "T5X",
      price: 31000,
      id:6,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UJHV5zXTWAUGvXVYBzjHlBYS26VFNLQ3qZTwbkFwHg&s"
    },
    {
      name: "Oppo",
      model: "Reno 12",
      price: 29000,
      id:7,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbaj3fMX95M-CPBtAPuFGxdCTUKi2p7uh1b3AugyCOWA&s"
    },
    {
      name: "Google",
      model: "Pixel 8",
      price: 70000,
      id:8,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAoO7uzW75L5P5Sa5qUS_Q76l531narmfjXnWKP5VYdg&s=10"
    },
    {
      name: "Motorola",
      model: "Edge 50",
      price: 36000,
      id:9,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzkWMca7alVCsDaJJh81bL02652R5n4BPuGiNXCnXaIQ&s=10"
    },
    {
      name: "Xiaomi",
      model: "14",
      price: 52000,
      id:10,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTErlUaNwUb9_2kQZdebSVeWQP5aFZjBGBWO6vdW8415A&s=10"
    }
  ];      

  return (
    <div>

      

      <h1 className="title">Mobile Store</h1>

  <div className="mobile">
  {products.map((item) => (
    <Link
      key={item.id}
      to={`/product/${item.id}`}
     
    >
      <div className="card">
        <img src={item.img} alt={item.name} />

        <h2>{item.name}</h2>

        <p>
          <strong>Model:</strong> {item.model}
        </p>

        <h3>Rs. {item.price}/-</h3>

        <button
          onClick={(e) => {
            e.preventDefault();
            buyNow();
          }}
        >
          Buy Now
        </button>
      </div>
    </Link>
  ))}
</div>

    </div>

    
  );
}

export default App;