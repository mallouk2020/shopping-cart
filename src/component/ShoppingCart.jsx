import { useEffect, useState } from "react";
import { useCart } from "../context/cartcontext";
import Cartitems from "./cartitems";

function ShoppingCart() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const { allItems } = useCart();

  useEffect(() => {
    // التحقق من أن allItems معرفة وليست فارغة
    if (!Array.isArray(allItems)) {
      console.error("allItems is not defined or not an array");
      return;
    }

    // تحديث العناصر الموجودة في السلة
    const inCartItems = allItems.filter((item) => item.inCart);
    setCartItems(inCartItems);

    // حساب السعر الإجمالي
    const price = inCartItems.reduce((accumulator, item) => {
      return accumulator + (item.price * (item.quantity || 1));
    }, 0);

    // تقريب السعر الإجمالي إلى منزلتين عشريتين
    const roundedPrice = parseFloat(price.toFixed(2));
    setTotalPrice(roundedPrice);

    console.log("Updated cart items:", inCartItems);
  }, [allItems]);

  return (
    <>
      {cartItems.length > 0 && (
        <div
          className={`fixed right-0 top-0 z-30 h-screen bg-white/50 backdrop-blur-md border-l-4 rounded-tl-lg transition-all duration-300 ${
            isOpen ? "w-[300px]" : "w-[0px]"
          }`}
        >
          {/* Header */}
          <div className="relative w-full h-16 bg-white border rounded-lg grid place-items-center">
            <h1 className="text-xl text-gray-600">Shopping Cart</h1>

            {/* زر إغلاق السلة */}
            <button
              className={`absolute right-3 z-20 w-9 h-9 bg-yellow-400 border-2 rounded-full grid place-items-center hover:bg-yellow-500 ${
                !isOpen && "hidden"
              }`}
              onClick={() => setIsOpen(false)}
            >
              <img
                width={20}
                src="https://cdn-icons-png.flaticon.com/128/1828/1828744.png"
                alt="close"
              />
            </button>

            {/* زر فتح السلة */}
            <div>
              <button
                className={`absolute -left-14 top-3 z-20 w-9 h-9 bg-yellow-400 border-2 rounded-full grid place-items-center hover:bg-yellow-500 ${
                  isOpen && "hidden"
                }`}
                onClick={() => setIsOpen(true)}
              >
                <img
                  width={20}
                  src="https://cdn-icons-png.flaticon.com/128/5337/5337564.png"
                  alt="open"
                />
              </button>
              <span
                className={`absolute -left-9 bottom-9 z-30 w-5 h-5 bg-pink-700 text-sm rounded-full text-white grid place-items-center ${
                  isOpen && "hidden"
                }`}
              >
                {cartItems.length > 9 ? "9+" : cartItems.length}
              </span>
            </div>
          </div>

          {/* قائمة العناصر في السلة */}
          <div className="h-screen flex flex-col gap-y-3 overflow-y-scroll px-5 pb-24 pt-20">
            {cartItems.map((item) => (
              <Cartitems key={item.id} item={item} fromcart={true} />
            ))}
          </div>

          {/* إجمالي السعر وزر الشراء */}
          <div className="absolute bottom-0 left-0 w-full h-20 bg-white border rounded-lg grid place-items-center">
            <h1 className="text-xl text-gray-700">Total Price: ${totalPrice}</h1>
            <button className="w-auto h-7 text-white bg-blue-400 border rounded-lg px-3 hover:bg-blue-500">
              Buy Now
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ShoppingCart;