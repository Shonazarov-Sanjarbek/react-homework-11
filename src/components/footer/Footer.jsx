import React from "react";
import Logo from "@/assets/Logo.png"; 
import appStore from "@/assets/app-store.png";
import googlePlay from "@/assets/google-play.png";
import paymentCard from "@/assets/payment-card.png";
import { MdOutlineLocationOn } from "react-icons/md";
import { SlEarphonesAlt } from "react-icons/sl";
import { BsSend } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";
import PropsFooter from "./PropsFooter";

const Footer = () => {


  return (
    <div className="bg-white text-black">
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-wrap gap-6 items-center justify-between">
        <div className="space-y-6">
          <div className="flex items-center flex-col w-1/2 space-x-4">
            <img src={Logo} alt="Logo" className="w-32" />
            <p className="text-black text-lg">
              Awesome grocery store website template
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <MdOutlineLocationOn className="text-black text-xl" />
              <p>
                <b className="text-black">Address:</b> 5171 W Campbell Ave
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <SlEarphonesAlt className="text-black text-xl" />
              <p>
                <b className="text-black">Call Us:</b> (+91) - 540-025-124553
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <BsSend className="text-black text-xl" />
              <p>
                <b className="text-black">Email:</b> sale@Nest.com
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <CiClock2 className="text-black text-xl" />
              <p>
                <b className="text-black">Hours:</b> 10:00 - 18:00, Mon - Sat
              </p>
            </div>
          </div>
        </div>
        <PropsFooter company={["About Us", "Delivery Information", "Privacy Policy", "Terms & Conditions", "Contact Us", "Support Center", "Careers"]} account={["Sign In", "View Cart", "My Wishlist", "Track My Order", "Help Ticket", "Shipping Details", "Compare Products"]} corporate={["Become a Vendor", "Affiliate Program", "Farm Business", "Farm Careers", "Our Suppliers", "Accessibility", "Promotions"]} popular={["Milk & Flavoured Milk", "Butter and Margarine", "Eggs Substitutes", "Marmalades", "Sour Cream and Dips", "Tea & Kombucha", "Cheese"]}/>
      </div>

      <div className="mt-12 flex flex-col md:flex-row justify-between items-center">
        {/* Install App */}
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <span className="text-black text-lg font-semibold">
            Install App
          </span>
          <p className="text-gray-400">From App Store or Google Play</p>
          <div className="flex gap-4 mt-4">
            <img src={appStore} alt="App Store" className="w-32" />
            <img src={googlePlay} alt="Google Play" className="w-32" />
          </div>
        </div>

        {/* Secured Payment Gateways */}
        <div className="flex flex-col items-center md:items-end">
          <p className="text-black text-lg font-semibold">
            Secured Payment Gateways
          </p>
          <img src={paymentCard} alt="Payment Gateways" className="w-40 mt-4" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer