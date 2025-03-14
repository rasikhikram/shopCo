import { db } from '../components/firebase/firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import React, {useState} from 'react';

const Delivery = () => {

    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        city: "",
        address: "",
        apt: "",
        postalCode: ""
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.fullName || !formData.phoneNumber || !formData.city || !formData.address || !formData.postalCode) {
            alert("Please fill all the required fields");
            return;
        }

        try {
            await addDoc(collection(db, "deliveryDetails"), formData);
            alert ("Delivery details saved successfully");

            setFormData({
                fullName: "",
                phoneNumber: "",
                city: "",
                address: "",
                apt: "",
                postalCode: ""

            });
        } catch (error) {
            console.error("Error Saving Data", error )
            alert("Something went wrong!");
        }
    };

  return (
    <div className="max-w-[1450px] mx-auto flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl sm:text-5xl font-superbold text-center">DELIVERY DETAILS</h1>
      
      <form 
        onSubmit={handleSubmit}
        className="mt-10 flex flex-col items-center w-full max-w-md sm:max-w-lg lg:max-w-xl">
        {/* Full Name */}
        <label className="block text-gray-700 text-lg sm:text-xl font-bold mb-2 w-full">
          FULL NAME:
        </label>
        <input
          className="py-3 px-4 border rounded-full w-full text-gray-700 outline-none"
          type="text"
          name='fullName'
          placeholder="YOUR FULL NAME"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        {/* Phone Number */}
        <label className="block text-gray-700 text-lg sm:text-xl font-bold mt-4 mb-2 w-full">
          PHONE NUMBER:
        </label>
        <div className="flex items-center border border-gray-300 rounded-full px-4 py-3 w-full">
          <span className="text-gray-700 font-bold">PK +92</span>
          <input
            type="text"
            name='phoneNumber'
            className="flex-1 outline-none px-2 text-gray-800 bg-transparent"
            placeholder="349 0230123"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        {/* Province, City */}
        <label className="block text-gray-700 text-lg sm:text-xl font-bold mt-4 mb-2 w-full">
          PROVINCE, CITY:
        </label>
        <select 
            name='city'
            value={formData.city}
            onChange={handleChange}
            className="border py-3 px-4 rounded-full w-full text-gray-700 outline-none"
            required
        >
          <option value="">Select your city</option>
          <option value="Karachi">KARACHI</option>
          <option value="Lahore">LAHORE</option>
          <option value="Islamabad">ISLAMABAD</option>
          <option value="Quetta">QUETTA</option>
        </select>

        {/* Address */}
        <label className="block text-gray-700 text-lg sm:text-xl font-bold mt-4 mb-2 w-full">
          ADDRESS:
        </label>
        <input
          className="py-3 px-4 border rounded-full w-full text-gray-700 outline-none"
          value={formData.address}
          onChange={handleChange}
          required
          type="text"
          name='address'
          placeholder="HOUSE NO. BUILDING, STREET"
        />
        <input
          className="py-3 px-4 border rounded-full w-full text-gray-700 outline-none mt-2"
          type="text"
          name='apt'
          value={formData.apt}
          onChange={handleChange}
          placeholder="APT, UNIT (OPTIONAL)"
        />

        {/* Postal Code */}
        <label className="block text-gray-700 text-lg sm:text-xl font-bold mt-4 mb-2 w-full">
          POSTAL CODE:
        </label>
        <input
          className="py-3 px-4 border rounded-full w-full text-gray-700 outline-none"
          type="text"
          name='postalCode'
          value={formData.postalCode}
          onChange={handleChange}
          placeholder="5 DIGIT CODE"
        />

        {/* Continue Button */}
        <button type='submit' className="w-full bg-black text-white text-lg sm:text-xl py-3 mt-6 rounded-full hover:bg-gray-800 transition duration-300 font-bold">
          CONTINUE TO PAYMENT
        </button>
      </form>
    </div>
  );
};

export default Delivery;
