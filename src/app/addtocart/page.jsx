"use client";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/slice/addtocartSlice";
import Image from "next/image";
import Link from "next/link";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Subtotal হিসাব করা
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // 🟢 Checkout Handler
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    alert("✅ Your order has been successfully placed!");


    dispatch(clearCart());

    window.location.reload();
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {/* 🛒 Product List */}
          <div className="md:col-span-2 bg-white p-4 rounded-lg shadow">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b text-gray-700">
                  <th className="py-2">Product</th>
                  <th>Unit Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-gray-50">
                    {/* Product */}
                    <td className="py-3 flex items-center space-x-3">
                      <Image
                        height={48}
                        width={48}
                        src={item.img1}
                        alt={item.name}
                        className="w-12 h-12 rounded-md"
                      />
                      <span>{item.name}</span>
                    </td>

                    {/* Price */}
                    <td>${item.price}</td>

                    {/* Quantity Control */}
                    <td className="py-2">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => dispatch(decreaseQuantity(item.id))}
                          className="bg-gray-200 text-gray-700 px-2 rounded hover:bg-gray-300"
                        >
                          -
                        </button>
                        <span className="px-2">{item.quantity}</span>
                        <button
                          onClick={() => dispatch(increaseQuantity(item.id))}
                          className="bg-gray-200 text-gray-700 px-2 rounded hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                    </td>

                    {/* Subtotal */}
                    <td className="font-semibold text-[#25AD7A]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>

                    {/* Remove */}
                    <td>
                      <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="text-red-500 hover:text-red-700"
                        title="Remove item"
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Buttons */}
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => dispatch(clearCart())}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded"
              >
                Clear Cart
              </button>
              <Link
                href="/products"
                className="bg-[#25AD7A] hover:bg-green-600 text-white px-4 py-2 rounded"
              >
                ← Continue Shopping
              </Link>
            </div>
          </div>

          {/* 🧾 Summary */}
          <div className="bg-white p-4 rounded-lg shadow h-fit">
            <h2 className="text-lg font-semibold mb-3">Summary</h2>

            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span className="font-medium text-[#25AD7A]">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <hr className="my-2" />

            <div className="flex justify-between font-semibold text-lg mb-4">
              <span>Total</span>
              <span className="text-green-600">${subtotal.toFixed(2)}</span>
            </div>

            {/* ✅ Checkout Button */}
            <button
              onClick={handleCheckout}
              className="w-full bg-[#25AD7A] hover:bg-green-600 text-white py-2 rounded transition-all"
            >
              Proceed To Checkout →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
