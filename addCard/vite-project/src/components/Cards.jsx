

const Cards = ({ cart }) => {
  return (
    <div className="cart-container">

      <h2>Cart Items</h2>

      {cart.length === 0 ? (
        <p>No Items Added</p>
      ) : (
        cart.map((item) => (
          <div className="cart-card" key={item.id}>
            <img
              src={item.img}
              alt={item.name}
              width="150"
            />

            <h3>{item.name}</h3>

            <p>₹{item.price}</p>
          </div>
        ))
      )}

    </div>
  );
};

export default Cards;