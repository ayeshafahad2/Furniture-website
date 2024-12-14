"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const CheckOut = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const countries = ['United States', 'Canada', 'Pakistan', 'India', 'Australia'];
  const provinces = ['Province 1', 'Province 2', 'Province 3', 'Province 4'];

  return (
    <>
      <div>
        <div className="relative">
          <Image
            src="/blog.png"
            alt="Hero Image"
            width={1400}
            height={400}
            className="object-cover w-full h-[300px] sm:h-[400px]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
            <Image
              src="/logo.png"
              alt="Logo"
              width={80}
              height={80}
              className="object-contain cursor-pointer sm:w-[100px] sm:h-[100px]"
            />
            <h1 className="mt-4 text-2xl sm:text-4xl font-bold text-gray-800">
              Checkout
            </h1>
            <p className="mt-2 text-sm sm:text-lg text-gray-600">
              Home &gt; Checkout
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-12 mt-16">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
            {/* Left Side: Billing Form */}
            <div className="w-full lg:w-[60%]">
              <h1 className="text-[36px] font-semibold mb-5">Billing details</h1>
              <div className="flex flex-wrap items-center justify-start gap-6">
                <div className="w-full sm:w-auto">
                  <label>
                    First Name
                    <br />
                    <input
                      type="text"
                      className="w-full sm:w-[211px] h-[75px] border border-black rounded-md mt-2"
                    />
                  </label>
                </div>
                <div className="w-full sm:w-auto">
                  <label>
                    Last Name
                    <br />
                    <input
                      type="text"
                      className="w-full sm:w-[211px] h-[75px] border border-black rounded-md mt-2"
                    />
                  </label>
                </div>
              </div>
              <br />
              Company Name (Optional)
              <br />
              <br />
              <input
                type="text"
                className="w-full lg:w-[453px] h-[75px] border border-black rounded-md"
              />
              <br />
              <br />
              Country / Region
              <br />
              <br />
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full lg:w-[453px] h-[75px] border border-black rounded-md pl-4"
              >
                <option value="">Select your country/region</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              <br />
              <br />
              Street address
              <br />
              <br />
              <input
                type="text"
                className="w-full lg:w-[453px] h-[75px] border border-black rounded-md"
              />
              <br />
              <br />
              Town / City
              <br />
              <br />
              <input
                type="text"
                className="w-full lg:w-[453px] h-[75px] border border-black rounded-md"
              />
              <br />
              <br />
              Province
              <br />
              <br />
              <select
                value={selectedProvince}
                onChange={(e) => setSelectedProvince(e.target.value)}
                className="w-full lg:w-[453px] h-[75px] border border-black rounded-md pl-4"
              >
                <option value="">Select your province</option>
                {provinces.map((province) => (
                  <option key={province} value={province}>
                    {province}
                  </option>
                ))}
              </select>
              <br />
              <br />
              ZIP code
              <br />
              <br />
              <input
                type="text"
                className="w-full lg:w-[453px] h-[75px] border border-black rounded-md"
              />
              <br />
              <br />
              Phone
              <br />
              <br />
              <input
                type="text"
                className="w-full lg:w-[453px] h-[75px] border border-black rounded-md"
              />
              <br />
              <br />
              Email address
              <br />
              <br />
              <input
                type="text"
                className="w-full lg:w-[453px] h-[75px] border border-black rounded-md"
              />
              <br />
              <br />
              Additional information
              <br />
              <br />
              <input
                placeholder="Additional information"
                type="text"
                className="w-full lg:w-[453px] h-[75px] border border-black rounded-md text-[#9F9F9F] pl-4"
              />
            </div>

            {/* Right Side: Order Summary */}
            <div className="w-full lg:w-[35%]">
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-3">
                  <h2 className="text-[24px] font-semibold">Product</h2>
                  <p className="text-[#9F9F9F]">
                    Asgaard sofa <span className="text-black">X 1</span>
                  </p>
                  <span className="font-semibold">Subtotal</span>
                  <span className="font-semibold">Total</span>
                </div>
                <div className="flex flex-col gap-3 text-right">
                  <h2 className="text-[24px] font-semibold">Subtotal</h2>
                  <span>Rs. 250,000.00</span>
                  <span>Rs. 250,000.00</span>
                  <span className="text-[#B88E2F] text-[24px] font-semibold">
                    Rs. 250,000.00
                  </span>
                </div>
              </div>
              <div className="border-b border-[#D9D9D9] w-full mt-6"></div>
              <div className="mt-8">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    id="directBankTransfer"
                    name="paymentMethod"
                    value="directBankTransfer"
                    checked={paymentMethod === 'directBankTransfer'}
                    onChange={() => setPaymentMethod('directBankTransfer')}
                  />
                  <h1 className="text-[20px] font-semibold">Direct Bank Transfer</h1>
                </div>
                <p className="text-[#9F9F9F] mt-2">
                  Make your payment directly into our bank account. Please use your
                  Order ID as the payment reference. Your order will not be shipped
                  until the funds have cleared in our account.
                </p>
                <div className="flex items-center gap-3 mt-6">
                  <input
                    type="radio"
                    id="cashOnDelivery"
                    name="paymentMethod"
                    value="cashOnDelivery"
                    checked={paymentMethod === 'cashOnDelivery'}
                    onChange={() => setPaymentMethod('cashOnDelivery')}
                  />
                  <h1 className="text-[18px] font-semibold text-[#9F9F9F]">
                    Cash On Delivery
                  </h1>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <input
                    type="radio"
                    id="bankTransfer"
                    name="paymentMethod"
                    value="bankTransfer"
                    checked={paymentMethod === 'bankTransfer'}
                    onChange={() => setPaymentMethod('bankTransfer')}
                  />
                  <h1 className="text-[18px] font-semibold text-[#9F9F9F]">
                    Bank Transfer
                  </h1>
                </div>
              </div>
              <div className="mt-6 text-sm text-gray-600">
                <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
              </div>
              <div className="mt-10">
                <button className="w-full lg:w-[318px] h-[64px] border border-black rounded-2xl hover:bg-selfcolors-darkBrown">
                  Place order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
