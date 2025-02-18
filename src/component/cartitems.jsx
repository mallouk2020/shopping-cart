import React from "react";
import PropTypes from "prop-types";
import CartButtons from "./CartButtons";

const Cartitems = ({ item, fromcart }) => {
  const { name, price, imageUrl, id } = item;

  // تسجيل القيم لفحصها
  console.log("Cartitems Props:", fromcart );

  return (
    <div key={id} className="group relative flex flex-col gap-y-2 border border-zinc-200 rounded-md bg-white p-24">
      <img
        src={imageUrl}
        alt="img"
        width={300}
        height={300}
        className="group-hover:-translate-y-2 transition-all duration-500"
      />
      <div className="absolute bottom-5 left-5">
        <h1 className="text-gray-900 text-sm">{name}</h1>
        <span className="text-pink-500 text-sm">${price}</span>
      </div>
      {/* تمرير fromcart إلى CartButtons */}
      <CartButtons item={item} fromcart={fromcart} />
    </div>
  );
};

// إضافة PropTypes
Cartitems.propTypes = {
  fromcart: PropTypes.bool,
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

// إضافة defaultProps
Cartitems.defaultProps = {
  fromcart: false,
};

export default React.memo(Cartitems);