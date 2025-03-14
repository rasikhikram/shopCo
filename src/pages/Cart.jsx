import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./Context";

const Cart = () => {
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();

    // Calculate totals
    const subtotal = cart.reduce(
        (acc, item) => acc + parseFloat(item.product.productPrice.replace("RS. ", "")) * item.quantity, 
        0
    );
    const discount = subtotal * 0.1; // 10% discount
    const deliveryFee = cart.length > 0 ? 200 : 0; // Apply only if cart has items
    const total = subtotal - discount + deliveryFee;

    return (
        <div className="max-w-[1450px] mx-auto p-4 md:p-6">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-center md:text-left">
                YOUR CART
            </h1>

            {/* Responsive Layout */}
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Cart Items */}
                <div className="lg:w-2/3 w-full">
                    {cart.length === 0 ? (
                        <p className="text-2xl text-gray-500 text-center md:text-left">Your cart is empty.</p>
                    ) : (
                        <div className="space-y-6">
                            {cart.map((item, index) => (
                                <div 
                                    key={index} 
                                    className="border-b border-gray-200 pb-4 flex flex-col sm:flex-row items-center sm:items-start gap-4"
                                >
                                    <img 
                                        src={item.product.image} 
                                        alt={item.product.productName} 
                                        className="h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] object-cover rounded-lg shadow-md"
                                    />
                                    <div className="w-full text-center sm:text-left flex flex-col items-center sm:items-start">
                                        <h2 className="text-xl md:text-2xl font-bold">{item.product.productName}</h2>
                                        <p className="text-base md:text-lg text-gray-600">Size: {item.selectedSize}</p>
                                        <p className="text-base md:text-lg text-gray-600">Color: {item.selectedColor}</p>

                                        <div className="flex items-center bg-gray-200 rounded-full px-4 py-2 w-max mt-2">
                                            <span className="text-lg font-semibold">Qty:</span>
                                            <span className="px-3 text-lg font-bold">{item.quantity}</span>
                                        </div>

                                        <span className="text-xl md:text-2xl font-extrabold block mt-2">
                                            {item.product.productPrice}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Order Summary */}
                {cart.length > 0 && (
                    <div className="lg:w-1/3 w-full p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
                        <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-center md:text-left">
                            ORDER SUMMARY
                        </h2>
                        <div className="space-y-4 text-lg">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>RS. {subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-red-500">
                                <span>Discount (-10%)</span>
                                <span>-RS. {discount.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Delivery Fee</span>
                                <span>RS. {deliveryFee.toFixed(2)}</span>
                            </div>
                            <hr className="my-2" />
                            <div className="flex justify-between font-bold text-xl">
                                <span>TOTAL</span>
                                <span>RS. {total.toFixed(2)}</span>
                            </div>
                        </div>
                        <button
                            className="w-full bg-black text-white py-3 mt-6 rounded-full hover:bg-gray-800 transition duration-300 font-bold text-lg"
                            onClick={() => navigate("/delivery")}
                        >
                            PLACE ORDER →
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
