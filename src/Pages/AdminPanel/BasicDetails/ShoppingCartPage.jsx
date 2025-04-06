import React from "react";
import NewsFeed from "../../../NewsFeed";
import WoodHeader from "../../../WoodHeader";
import HamburgerBar from "../../../Components/HamburgerBar";
import MyHeader from "../../../Components/MyHeader";
import ScrollToTopButton from "../../../Components/ScrollToTopButton";
import WrittenFooter from "../../../WrittenFooter";
import MyFooter from "../../../MyFooter";
import img1 from "../../../assets/img/containerring3.png";
import img2 from "../../../assets/img/containerring4.png";
import { GoTrash } from "react-icons/go";

const convertToPersianDigits = (num) => {
  return num.toLocaleString("fa-IR"); // Converts to Persian digits with thousand separators
};

function ShoppingCartPage() {
  return (
    <div>
      <NewsFeed />
      <hr />
      <WoodHeader />
      <hr />
      <MyHeader />
      <hr />
      <HamburgerBar />
      <hr />

      <div className="flex flex-col lg:flex-row mx-5 lg:mx-11 mt-9 gap-4">
        {/* Left Section (Cart Summary) */}
        <div className="w-full lg:w-[70%] p-4 rounded-lg">
          {/* Title */}
          <div className="flex gap-5 items-baseline mb-6 ">
            <p className="text-lg font-medium">سبد خرید شما</p>
            <p className="text-sm text-gray-600">1 مرسوله</p>
          </div>

          {/* Cart Item */}
          <div className="flex flex-col sm:flex-row gap-4 items-center p-4 border-b border-gray-200">
            {/* Image Container */}
            <div className="relative w-[120px] h-[120px]">
              <div className="imageBox">
                <div className="imageInn">
                  <img
                    className="FirstImage rounded-t-lg block"
                    src={img1}
                    alt="Main Image"
                  />
                </div>
                <div className="SecondImage hoverable-object rounded-t-lg block hoverImg">
                  <img className="" src={img2} alt="Second Image" />
                </div>
              </div>
            </div>

            {/* Product Name */}
            <p className="text-md font-medium text-center sm:text-left">
              حلقه رزگلد زیبا
            </p>
          </div>

          {/* Price & Delete Button */}
          <div className="flex justify-between items-center p-4">
            <p className="text-gray-600 text-lg">
              {convertToPersianDigits(2370000)} تومان
            </p>
            <button className="text-red-500 hover:text-red-700 p-2 rounded-full">
              <GoTrash size={28} />
            </button>
          </div>
        </div>

        {/* Right Section (Price Details) */}
        <div className="w-full lg:w-[25%] h-[200px] border border-gray-200 rounded-lg p-5 flex flex-col space-y-4">
          <div className="flex justify-between text-[14px]">
            <p className="text-gray-600">قیمت کالاها</p>
            <p className="text-gray-600 text-right">
              {convertToPersianDigits(2370000)} تومان
            </p>
          </div>
          <div className="flex justify-between text-[14px]">
            <p>جمع سبد خرید</p>
            <p className="text-right">
              {convertToPersianDigits(4370000)} تومان
            </p>
          </div>
          <div className="flex justify-between text-[14px]">
            <p className="text-green-600">سود شما از خرید</p>
            <p className="text-green-600 text-right">
              {convertToPersianDigits(2000000)} تومان
            </p>
          </div>

          {/* Confirmation Button */}
          <button className="bg-rose-500 hover:bg-rose-600 transition text-white text-center rounded-md py-2 w-full text-[15px] font-medium">
            تأیید و تکمیل سفارش
          </button>
        </div>
      </div>

      <ScrollToTopButton />
      <br />
      <WrittenFooter />
      <MyFooter />
    </div>
  );
}

export default ShoppingCartPage;
