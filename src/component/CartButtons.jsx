// import React from "react";
import PropTypes from "prop-types";
import { useCart } from "../context/cartcontext";

// مكون Btn
export function Btn({ removeFromCart, quantity, item, updateQuantity, fromcart }) {
  return (
    <div>
      <div className={`flex items-center ${fromcart ? "space-x-2" : "space-x-3"}`}>
        {/* زر تقليل الكمية */}
        <button
          className={`border rounded-md flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors ${
            fromcart ? "w-5 h-5" : "w-8 h-8"
          }`}
          onClick={() => {
            if (quantity === 1) {
              removeFromCart(item);
            } else {
              updateQuantity(item, -1);
            }
          }}
        >
          -
        </button>

        {/* عرض الكمية */}
        <span
          className={`bg-green-100 border text-sm font-medium rounded-full px-3 py-1 ${
            fromcart ? "w-5 h-5 px-1 mr-1" : ""
          }`}
        >
          {quantity || 1}
        </span>

        {/* زر زيادة الكمية */}
        <button
          className={`border rounded-md flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors ${
            fromcart ? "w-5 h-5" : "w-8 h-8"
          }`}
          onClick={() => updateQuantity(item, +1)}
        >
          +
        </button>

        {/* نص "in cart" */}
        <span className="text-xs text-gray-500 ml-1">in cart</span>

        {/* زر إزالة العنصر من السلة */}
        <button
          className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-md mx-3 hover:bg-red-600 transition-colors"
          onClick={() => removeFromCart(item)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

// إضافة PropTypes للتحقق من النوع
Btn.propTypes = {
  removeFromCart: PropTypes.func.isRequired,
  updateQuantity: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
  fromcart: PropTypes.bool,
};

// إضافة defaultProps
Btn.defaultProps = {
  fromcart: false,
};

// مكون CartButtons
const CartButtons = ({ item, fromcart }) => {
  const { inCart, quantity } = item;
  const { addToCart, removeFromCart, updateQuantity } = useCart();

  return (
    <div className="w-max absolute right-5 top-5">
      <div className="space-x-3">
        {!inCart ? (
          <button
            className="bg-zinc-400 border rounded-md px-2 py-1 text-sm text-white hover:bg-zinc-500 transition-colors"
            onClick={() => addToCart(item)}
          >
            +add to cart
          </button>
        ) : (
          <Btn
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
            item={item}
            quantity={quantity}
            fromcart={fromcart}
          />
        )}
      </div>
    </div>
  );
};

// إضافة PropTypes للتحقق من النوع
CartButtons.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    inCart: PropTypes.bool.isRequired,
    quantity: PropTypes.number,
  }).isRequired,
  fromcart: PropTypes.bool,
};

// إضافة defaultProps
CartButtons.defaultProps = {
  fromcart: false,
};

export default CartButtons;