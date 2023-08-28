import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import phone from "../public/phone.png"
import email from "../public/email.png"
import loc from "../public/location.png"
const Contact = () => {
  return (
    <div className="bg-slate-50">
      <Navbar />
      <div>
        <div>
          <div className="w-[30%] bg-slate-400 flex flex-col items-center">
            <div className="w-[40%] flex flex-col justify-center items-center py-2">
              <Image src={loc} alt="loc" priority={true} className="w-[20%]" />
              <h1>2715 Ash Dr. San Jose</h1>
              <h2>South Dakota 83475</h2>
            </div>
            <hr />
            <div className="w-[40%] flex flex-col justify-center items-center py-2">
              <Image
                src={email}
                alt="email"
                priority={true}
                className="w-[20%]"
              />
              <h1>Proxy@gmail.com </h1>
              <h2>Help.proxy@gmail.com</h2>
            </div>
            <hr />
            <div className="w-[40%] flex flex-col justify-center items-center py-2">
              <Image
                src={phone}
                alt="phone"
                priority={true}
                className="w-[20%]"
              />
              <h1>(219) 555-0114 </h1>
              <h2>(164) 333-0487</h2>
            </div>
          </div>
          <div>
            <h1>Just Say Hello!</h1>
            <h3>
              Do you fancy saying hi to me or you want to get started with your
              project and you need my help? Feel free to contact me.
            </h3>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact