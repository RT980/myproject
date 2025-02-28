import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { AiFillTikTok } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import logo from "../assets/Image/image.png"
import man from "../assets/Services/man.png"
import background from "../assets/Services/background.png"
import party from "../assets/Services/party.png"
import qr from "../assets/Services/qr.png"
import first from "../assets/Services/first.png"
import chef from "../assets/Services/chef.png"
function Service() {
  return (
    <div>
      <div className='bg-white h-[600px] ml-[110px] mt-[20px] flex justify-between'>
        <div className='mt-[100px]'>
          <h1 className='text-teal-700 text-[50px] font-Parisienne mb-[30px] '>Our Services</h1>
          <h2 className='text-gray-500 tracking-[2px]'>KNOWING OUR CUSTOMERS NEEDS </h2>
          <p className='flex flex-col text-orange-600 font-bold text-[25px] mt-[10px]'>We're more than just momos.
            <span className='text-black'> We're a full-service dining experience. </span>
          </p>
        </div>
        <div className='mr-[100px]'>
          <img src={man} alt="" className='h-[450px]' />
        </div>
      </div>
      <div className='h-[650px]'>
        <img src={background} alt="" className='h-[640px] absolute -z-50 brightness-35 blur-[1px]' />
        <div className='ml-[110px] text-white pt-[350px]'>
          <h1 className='text-[40px] font-bold'>Dine With Us</h1>
          <p>Enjoy our momos in the comfort of your own home with our delivery services</p>
          <button className='flex justify-center items-center gap-4 w-[231px] h-[64px] bg-teal-600 rounded-[100px] text-[16] mt-[50px] hover:bg-teal-800'> Watch the Video</button>
        </div>
      </div>
      <div className='ml-[110px] flex gap-[]120px h-[500px] mt-[80px]' >
        <div className='w-[450px] h-[56px]'>
          <img src={party} alt="" className='w-[56] h-[56]' />
          <h1 className='text-[31px] font-bold mt-[20px]'>Private Party</h1>
          <p className='mt-[20px] text-gray-500'>Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt.</p>
          <div className='flex items-center justify-center mt-[30px] gap-6 w-[456px] h-[152px] shadow-2xl'>
            <h1 className='flex flex-col test-[25px] text-teal-600'>Scan the QR code
              <span className='text-[14px] text-gray-600'>You can also check about the service</span>
            </h1>
            <img src={qr} alt="" className='w-[120px] h-[120px]' />
          </div>
        </div>
        <div>
          <img src={first} alt="" className='w-[500px] h-[450px] absolute right-[100px] rounded-[16px]' />
        </div>
      </div>
      <div className='ml-[110px] gap-[120px] h-[500px] flex mt-[60px]'>
        <img src={first} alt="" className='w-[500px] h-[450px] mt-[10px] rounded-[16px]' />
        <div className='w-[456px] h-[270px] flex flex-col'>
          <img src={chef} alt="" className='w-[56px] h-[56px] mt-[20px]' />
          <h1 className='text-[39px] font-bold'>Categring</h1>
          <p className='mt-[20px] text-gray-600'>Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt.</p>
          <div className='flex justify-center items-center mt-[30px] gap-6 w-[456px] h-[152px] shadow-2xl rounded-2xl p-5'>
            <h1 className='flex flex-col text-[25px] text-teal-600'>Scan the QR code
              <span className='text-[14px] text-gray-600'>You can also check about the service</span>
            </h1>
            <img src={qr} alt="" className='w-[120px] h-[120px]' />
          </div>
        </div>
      </div>
      <div className='h-[300px] w-[1070px] bg-gray-100 flex flex-col justify-center items-center mt-[20px] ml-[110px] rounded-[24px]'>
        <h1 className='text-[31px] font-bold'>Got any Queries?</h1>
        <p className='text-[16px] text-gray-500 mt-[10px]'>If you have any queries, send us a message. Our Friendly team would love to hear from you</p>
        <button className='h-[60px] w-[220px] rounded-[100px] bg-teal-700 text-white text-[16px] mt-[40px] hover:bg-teal-900'>Get In Touch</button>
      </div>
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
  )
}

export default Service
