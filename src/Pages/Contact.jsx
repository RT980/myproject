import location from "../assets/Contact/location.png";
import phone from "../assets/Contact/phone.png";
import service from "../assets/Contact/service.png";
import map from "../assets/Contact/map.png";

import logo from "../assets/Image/image.png"
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { AiFillTikTok } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <div>
      <div>
        <div className='ml-[110px]'>
          <div className='flex flex-col justify-center items-center mr-[110px] mt-[60px]'>
            <h1 className='text-[56px] text-teal-600 font-Parisienne'>
              Our Contact
            </h1>
            <h2 className='text-[24px] text-gray-500'>GET IN TOUCH</h2>
            <p className='text-[30px] font-bold'>
              <span className='text-orange-500'> Our Friendly Team </span>
              would love to hear from you
            </p>
          </div>
          <div className='mt-[60px] h-[300px] flex space-x-3'>
            <div className='h-[233px] w-[360px] shadow-2xl shadow-gray-500 rounded-[20px] space-y-10 pt-[30px] pl-[50px]'>
              <div className='flex text-[20px] gap-x-3 font-bold'>
                <img src={location} alt="" className="h-[32px] w-32px" />
                LOCATION
              </div>
              <h1 className="w-[250px] font-bold">
                New Baneshwor -41201, Kathmandu, Bagmati, Nepal
              </h1>
            </div>
            <div className="h-[233px] w-[360px] shadow-2xl shadow-gray-500 rounded-[20px] space-y-10 p-[40px]">
              <div className="flex text-[20px] gap-x-3 font-bold">
                <img src={phone} alt="" className="w-[32px] h-[32px]" />
                PHONE
              </div>
              <div>
                <h1 className="flex gap-15 justify-between text-teal-600  font-bold">
                  Mobile:
                  <span className="text-black">(+977) 980 5689789
                    <span className="flex justify-end">(+977) 9841 275897
                    </span>
                  </span>
                </h1>
                <h1 className="flex gap-15 justify-between text-teal-600  font-bold">
                  Tel:
                  <span className="text-black">01-4783972 </span>
                </h1>
              </div>
            </div>
            <div className="h-[233px] w-[360px] shadow-2xl shadow-gray-500 rounded-[20px] space-y-10 p-[40px]">
              <div className="flex text-[20px] gap-x-3 font-bold">
                <img src={service} alt="" className="w-[32px] h-[32px]" />
                SERVICE TIME
              </div>
              <div>
                <h1 className="flex gap-15 justify-between text-teal-600">MON-FRI:
                  <span className="text-black">8 am - 8 am</span>
                </h1>
                <h1 className="flex gap-15 justify-between text-teal-600 ">SAT-SUN
                  <span className="text-black">Closed</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex justify-between">
            <img src={map} alt="" className="w-[600px] h-[600px] pl-[100px]" />
            <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg ">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Contact <span className="text-orange-500">Us</span>
              </h2>
              <p className="text-gray-500 mb-4">
                If you have any queries, send us a message. Our friendly team would love to hear from you.
              </p>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400">
                  <option>What can we do for you</option>
                  <option>Support</option>
                  <option>Sales Inquiry</option>
                  <option>Feedback</option>
                </select>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <span className="p-3 bg-gray-200 border-r border-gray-300">+977</span>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full p-3 focus:outline-none"
                  />
                </div>
                <textarea
                  placeholder="Message"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                  rows="4"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-teal-700 text-white p-3 rounded-lg hover:bg-teal-800 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
      <div className='mt-[40px] h-[400px] bg-gray-100 p-[50px]'>
                    <div className='flex justify-between items-center w-[1128px] h-[200px]'>
                      <div className='w-[408px] h-[192px]'>
                        <img src={logo} alt="" className='w-[152px] h-[48px]' />
                        <p className='text-gray-500'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nisi iusto unde quis quibusdam impedit ex facilis doloremque quaerat laudantium.
                        </p>
                      </div>
                      <div className='w-[168px] h-[158px] flex flex-col items-center'>
                        <h1 className='text-[25px] text-teal-700 '>Momos</h1>
                        <h3>About Us</h3>
                        <h3>Our Menu</h3>
                        <h3>Our Services</h3>
                        <h3>Contact Us</h3>
                      </div>
                      <div className='w-[168px] h-[158px] flex flex-col items-center'>
                        <h1 className='text-[25px] text-teal-700'>Legals</h1>
                        <h3>Terms & Conditions</h3>
                        <h3>Privacy Policy</h3>
                        <h3>Supports</h3>
                      </div>
                      <div className='w-[168px] h-[158px] space-y-2'>
                      <h1 className='text-[25px] text-teal-700 '>Follow Us</h1>
                      <div className='flex gap-3'>
                      <FaFacebookSquare size={35} />
                      <FaLinkedin size={35}/>
                      <FaSquareTwitter size={35}/>
                      </div>
                      <div className="flex gap-3">
                      <IoLogoYoutube size={35}/>
                      <AiFillTikTok size={35}/>
                      <FaInstagram  size={35}/>
                      </div>
                    </div>
                    </div>
                  </div>
      </div>
    </div>
  )
}

export default Contact
