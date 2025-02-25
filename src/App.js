
import './App.css';
import { Fragment } from 'react';
import { ProductList } from './components/ProductList';
import { ProductCard } from './components/ProductCard';


function App() {
  const produce = [
    {
      imageSrc: "images/iphone.png",
      title: "iPhone 15 Pro",
      specification: [
        "A17 Pro chip with 6-core GPU",
        "3x or 5x Telephoto camera",
        "Up to 29 hours video playback",
      ],
      stockCount: 10,
      price: 999,
    },
    {
      imageSrc: "images/airpods.png",
      title: "AirPods Pro 2",
      specification: [
        "Noise Cancellation",
        "Dust, sweat, and water resistant",
        "Up to 6 hours of listening",
      ],
      stockCount: 0,
      price: 249,
    },
    {
      imageSrc: "images/apple-watch.png",
      title: "Apple Watch 9",
      specification: [
        "45mm or 41mm case size",
        "Always-On Retina display",
        "Up to 18 hours normal use",
      ],
      stockCount: 6,
      price: 399,
    },
  ];
  function handlePurchase(product) {
    alert(`You clicked on ${product.title} which cost $${product.price}`);
  }

  return (
    <div className="App">
      <ProductList>
        {/* <ProductCard product={produce[0]} onPurchase={handlePurchase} />
        <ProductCard product={produce[1]} onPurchase={handlePurchase} />
        <ProductCard product={produce[2]} onPurchase={handlePurchase} /> */}
        {produce.map((produce) => <ProductCard key={produce.title} product={produce} onPurchase={handlePurchase} />)}
      </ProductList>

      <h2>Product which cost up to $500</h2>
      {/* <ul> */}
      {produce.filter(({ price }) => price < 500).map(({ title, price }) =>
        <Fragment key={title}>
          <hr style={{ borderColor: 'slategrey' }} />
          <p>
            {title} cost {price}
          </p>
        </Fragment>
      )}
      {/* </ul> */}
    </div>
  );
}

export default App;
