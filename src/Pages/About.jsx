import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { AiFillTikTok } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

import girl from "../assets/About/girl.png"
import first from "../assets/About/first.png"
import second from "../assets/About/second.png"
import momo from "../assets/About/momo.png"
import test from "../assets/About/test.png"
import frymomo from "../assets/About/fry.png"
import cmomo from "../assets/About/cmomo.png"
import momos from "../assets/About/momos.png"
import female from "../assets/About/female.png"
import rectangle from "../assets/About/rectangle.png"
import quote from "../assets/About/quote.png"   
import head from "../assets/About/head.png"
import chef1 from "../assets/About/chef1.png"
import chef2 from "../assets/About/chef2.png"
import logo from "../assets/Image/image.png"


function About() {
  return (
    <div>
      <div className='bg-white h-[600px] ml-[110px] mt-[20px] flex justify-between'>
        <div className='mt-[100px]'>
          <h1 className='text-teal-700 text-[50px] font-Parisienne mb-[30px]'>
          About Us
          </h1>
          <h2 className='text-gray-500 tracking-[2px]'>
            WE PRIDE OURSELF ON
          </h2>
          <p className='flex flex-col text-orange-600 font-bold text-[25px] mt-[10px]'>
            Our authentic momo recipes 
            <span className='text-black'>passed down through
              <span className='flex flex-col'>
                genration
              </span>
            </span>
          </p>
        </div>
        <div className='mr-[100px]'>
          <img src={girl} alt=""  className='h-[450px]'/>
        </div>
      </div>
      <div className='h-[650px]'>
        <img src={first} alt="" className='h-[640px] absolute -z-50 brightness-35 blur-[1px]' />
        <div className='ml-[110px] text-white pt-[350px]'>
        <h1 className='text-[40px] font-bold'>
        Process behind the making </h1>
        <p>See how we make momos that you like from only the best ingredients</p>
        <button className='flex justify-center items-center gap-4 w-[231px] h-[64px] bg-teal-600 rounded-[100px] text-[16px] mt-[50px] hover:bg-teal-800'>
          watch the video
        </button>
      </div>
      </div>
      <div className='mt-[100px]'>
        <div className='ml-[110px] flex gap-[120px] h-[500px]'>
          <div className='w-[456px] h-270px'>
            <h1 className='text-[39px] font-bold'> Our momos are 
              <span className='text-orange-500'> made with Love
              </span>
            </h1>
            <p className='text-gray-500 mt-[20px]'>
            Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt. Viverra aliquet sollicitudin eget dapibus. Vestibulum velit viverra gravida consectetur sed facilisis ut morbi.
            </p>
          </div>
          <div className='flex'>
            <img src={momo} alt="" className='w-[264px] h-[191px] absolute right-[420px] mt-[250px] z-10' />
            <img src={second} alt=""  className='w-[450px] h-[350px] absolute right-[100px]'/>
          </div>
        </div>
        <div className='flex ml-[110px] gap-[120px] h-[500px] mt-[60px]'>
          <div className='flex'>
            <img src={frymomo} alt=""  className='w-[264px] h-[191px] mt-[250px] absolute left-[400px] z-10'/>
            <img src={test} alt="" className='w-[450px] h-[350px] absolte left-[100px]' />
          </div>
          <div className='w-[456px] h-[270px] flex flex-col'>
            <h1 className='text-[39px] font-bold'>
              Taste the difference with 
              <span className='text-orange-500'> our handcrafted momos </span>
            </h1>
            <p className='text-gray-500 mt-[20px]'>
            Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt. Viverra aliquet sollicitudin eget dapibus. Vestibulum velit viverra gravida consectetur sed facilisis ut morbi.
            </p>
          </div>
        </div>
        <div className='ml-[110px] flex gap-[120px] h-[500px] mt-[50px]'>
          <div className='w-[456px] h-270px'>
            <h1 className='text-[39px] font-bold'>
            Our momos are the perfect 
            <span className='text-orange-500'>   blend of tradition and innovation </span>
            </h1>
            <p className='text-gray-500 mt-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, odio magni, suscipit maxime accusamus quas repellat nemo pariatur velit saepe rem commodi nulla nostrum, ea exercitationem eum fugit totam eligendi.</p>
          </div>
          <div className='flex'>
            <img src={cmomo} alt=""  className='w-[264px] h-[191px] absolute right-[420px] mt-[250px] z-10'/>
            <img src={momos} alt=""  className='w-[450px] h-[350px] absolute right-[100px]'/>
          </div>
        </div>
      </div>
      <div className='h-[600px]'>
      <img src= {female} alt="" className='h-[500px] absolute right-0' />
        <img src={rectangle} alt="" className='h-[500px] w-full absolute -z-50 blur-[3px] brightness-35' />
        <div className='flex flex-col absolute w-[550px] ml-[110px]'>
        <div className='absoulete text-white w-[550px] ml-[110px] mt-[100px]'>
          <img src={quote} alt="" className='h-[40px] ' />
          <p className='mt-[20px]'>Momo is not just about sustenance, it's about bringing people together and creating memories. At our restaurant, we strive to create a warm and inviting atmosphere where our guests can enjoy delicious momo, great company, and unforgettable experiences</p>
          <h1 className='flex flex-col font-bold text-[30px] mt-[30px]'>
          Marcus Schleifer 
          <span>CEO</span>
          </h1>
        </div>
      </div>
      </div>
      <div>
        <div className='flex flex-col items-center'>
          <h1 className='text-[49px] font-bold'> Meet The 
            <span className='text-orange-500'> Team </span>
          </h1>
          <p className='text-[25px] text-teal-600'>Our talented team members who delivers only the best results</p>
        </div>
        <div className='flex flex-row gap-50 mt-[20px] ml-[150] justify-center items-center'>
          <div className='flex'>
            <img src={head} alt="" className='h-[450] w-[300px] rounded-[4px] absolute -z-50 brightness-50' />
            <h1 className='pt-[400px] ml-[20px] text-[20px] font-bold text-white'>Head Chef</h1>
          </div>
          <div>
            <img src={chef1} alt="" className='h-[450] w-[300px] rounded-[4px] absolute -z-50 brightness-50' />
            <h1 className='pt-[400px] ml-[20px] text-[20px] font-bold text-white'>Assistant Chef</h1>
          </div>
          <div>
            <img src={chef2} alt="" className='h-[450] w-[300px] rounded-[4px] absolute -z-50 brightness-50 ' />
            <h1 className='pt-[400px] ml-[20px] text-[20px] font-bold text-white'>Assistant Chef</h1>
          </div>
        </div>
      </div>
      <div className='mt-[40px] h-[400px] bg-gray-100 p-[50px]'>
        <div className='flex justify-between items-center w-[1128px] h-[200px]'>
          <div className='w-[408px] h-[192px]'>
            <img src={logo} alt="" className='w-[152px] h-[48px]' />
            <p className='text-gray-500'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nisi iusto unde quis quibusdam impedit ex facilis doloremque quaerat laudantium.
            </p>
          </div>
          <div className='w-[168px] h-[158px] flex flex-col item-center'>
            <h1 className='text-[25px] text-teal-700'>Momos</h1>
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

export default About
