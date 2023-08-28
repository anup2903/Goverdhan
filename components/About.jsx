import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import farmer1 from "../public/farmer1.jpg"
import farmer2 from "../public/farmer2.jpg"
import leaf from "../public/leaf.png"
import delivery from "../public/delivery.jpg"
import star from "../public/star.jpg"
import avatar from "../public/avatar.png"
const About = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <div className="flex justify-center items-center mx-auto w-[80%] mt-[3%] h-[60vh]">
          <div className="w-[50%]">
            <h1 className="text-6xl overflow-hidden my-3">
              100% Trusted Organic Food Store
            </h1>
            <h2 className="text-2xl">
              Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
              laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
              Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan.
              Donec a eros non massa vulputate ornare. Vivamus ornare commodo
              ante, at commodo felis congue vitae.
            </h2>
          </div>
          <div className="w-[50%]">
            <Image src={farmer1} alt="farmer" priority={true} className="" />
          </div>
        </div>
        <div className="flex justify-around mx-auto mt-[10%] ">
          <div className="w-[50%] flex items-center">
            <Image src={farmer2} alt="farmer" priority={true} />
          </div>
          <div className="w-[45%] p-4">
            <h1 className="text-6xl  overflow-hidden my-3">
              100% Trusted Organic Food Store
            </h1>
            <h2 className="text-2xl">
              Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
              Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a
              a mi. Nulla eu eros consequat tortor tincidunt feugiat.{" "}
            </h2>
            <div className="flex justify-around mt-10">
              <div className="flex flex-col justify-between gap-4">
                <div className="flex  items-center relative">
                  <div className="w-[10%]">
                    <Image src={leaf} alt="leaf" priority={true} />
                  </div>
                  <div>
                    <h2 className="text-xl ">100% Organic food</h2>
                    <h3 className="text-sm text-slate-400">
                      100% healthy & Fresh food.
                    </h3>
                  </div>
                </div>
                <div className="flex  items-center">
                  <div className="w-[10%] ">
                    <Image src={leaf} alt="leaf" priority={true} />
                  </div>
                  <div>
                    <h2 className="text-xl ">100% Organic food</h2>
                    <h3 className="text-sm text-slate-400">
                      100% healthy & Fresh food.
                    </h3>
                  </div>
                </div>
                <div className="flex  items-center">
                  <div className="w-[10%]">
                    <Image src={leaf} alt="leaf" priority={true} />
                  </div>
                  <div>
                    <h2 className="text-xl ">100% Organic food</h2>
                    <h3 className="text-sm text-slate-400">
                      100% healthy & Fresh food.
                    </h3>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between gap-4">
                <div className="flex  items-center relative">
                  <div className="w-[10%]">
                    <Image src={leaf} alt="leaf" priority={true} />
                  </div>
                  <div>
                    <h2 className="text-xl ">100% Organic food</h2>
                    <h3 className="text-sm text-slate-400">
                      100% healthy & Fresh food.
                    </h3>
                  </div>
                </div>
                <div className="flex  items-center">
                  <div className="w-[10%] ">
                    <Image src={leaf} alt="leaf" priority={true} />
                  </div>
                  <div>
                    <h2 className="text-xl ">100% Organic food</h2>
                    <h3 className="text-sm text-slate-400">
                      100% healthy & Fresh food.
                    </h3>
                  </div>
                </div>
                <div className="flex  items-center">
                  <div className="w-[10%]">
                    <Image src={leaf} alt="leaf" priority={true} />
                  </div>
                  <div>
                    <h2 className="text-xl ">100% Organic food</h2>
                    <h3 className="text-sm text-slate-400">
                      100% healthy & Fresh food.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mx-auto w-[80%] my-[10%]">
          <div className="w-[50%]">
            <h1 className="text-6xl overflow-hidden my-3">
              We Delivered, You Enjoy Your Order.
            </h1>
            <h2 className="text-2xl">
              Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,
              ultrices consectetur velit dapibus eu. Mauris sollicitudin
              dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor
              bibendum nunc eget elementum.
            </h2>
            <button className="rounded-xl p-2 bg-green-500 text-white">
              Shop Now
            </button>
          </div>
          <div className="w-[50%]">
            <Image src={delivery} alt="deliver" priority={true} className="" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-100">
          <h1 className="text-5xl mt-24">Our Awesome Team</h1>
          <h2 className="w-[40%] text-center my-6">
            Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
            Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a
            mi.
          </h2>
          <div className="sm:flex sm:justify-around sm:w-[85%] w-[100%] gap-5 mb-20">
            <div className="flex flex-col items-center rounded-lg shadow-md bg-white w-[25%]">
              <Image
                src={farmer2}
                alt="farmer"
                priority={true}
                className=" rounded-t-lg"
              />
              <h2 className="py-1 text-lg">Jenny Wilson</h2>
              <h3 className="text-sm mb-4">Ceo and founder</h3>
            </div>
            <div className="flex flex-col items-center rounded-lg shadow-md bg-white w-[25%]">
              <Image
                src={farmer2}
                alt="farmer"
                priority={true}
                className=" rounded-t-lg"
              />
              <h2 className="py-1 text-lg">Jenny Wilson</h2>
              <h3 className="text-sm mb-4">Ceo and founder</h3>
            </div>
            <div className="flex flex-col items-center rounded-lg shadow-md bg-white w-[25%]">
              <Image
                src={farmer2}
                alt="farmer"
                priority={true}
                className=" rounded-t-lg"
              />
              <h2 className="py-1 text-lg">Jenny Wilson</h2>
              <h3 className="text-sm mb-4">Ceo and founder</h3>
            </div>
            <div className="flex flex-col items-center rounded-lg shadow-md bg-white w-[25%]">
              <Image
                src={farmer2}
                alt="farmer"
                priority={true}
                className=" rounded-t-lg"
              />
              <h2 className="py-1 text-lg">Jenny Wilson</h2>
              <h3 className="text-sm mb-4">Ceo and founder</h3>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 flex justify-center items-center h-[60vh]">
          <div className='flex flex-col items-center'>
            <h1 className='text-5xl my-10'>Client Testimonial</h1>
            <div className='flex gap-10 justify-center flex-shrink'>
              <div className="w-[25%] p-5 bg-white">
                <p>
                  Pellentesque eu nibh eget mauris congue mattis mattis nec
                  tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                  cursus velit sodales. Donec sed neque eget
                </p>
                <div className="flex justify-around relative w-[100%] mt-[1%]">
                  <div className="flex items-center gap-2">
                    <Image
                      src={avatar}
                      alt="avatar"
                      priority={true}
                      className="w-[20%]"
                    />
                    <div>
                      <h2 className="font-bold">Robert Fox</h2>
                      <h3 className="text-sm">Customer</h3>
                    </div>
                  </div>

                  <div className="w-[80%] flex justify-around ">
                    <Image
                      src={star}
                      alt="star"
                      priority={true}
                      className="object-contain"
                    />
                    <Image
                      src={star}
                      alt="star"
                      priority={true}
                      className=" object-contain"
                    />
                    <Image
                      src={star}
                      alt="star"
                      priority={true}
                      className=" object-contain"
                    />
                    <Image
                      src={star}
                      alt="star"
                      priority={true}
                      className="  object-contain"
                    />
                    <Image
                      src={star}
                      alt="star"
                      priority={true}
                      className=" object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[25%] p-5 bg-white">
                <p>
                  Pellentesque eu nibh eget mauris congue mattis mattis nec
                  tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                  cursus velit sodales. Donec sed neque eget
                </p>
                <div className="flex justify-around relative w-[100%] mt-[1%]">
                  <div className="flex items-center gap-2">
                    <Image
                      src={avatar}
                      alt="avatar"
                      priority={true}
                      className="w-[20%]"
                    />
                    <div>
                      <h2 className="font-bold">Robert Fox</h2>
                      <h3 className="text-sm">Customer</h3>
                    </div>
                  </div>

                  <div className="w-[80%] flex justify-around ">
                    <Image
                      src={star}
                      alt="star"
                      priority={true}
                      className="object-contain"
                    />
                    <Image
                      src={star}
                      alt="star"
                      priority={true}
                      className=" object-contain"
                    />
                    <Image
                      src={star}
                      alt="star"
                      priority={true}
                      className=" object-contain"
                    />
                    <Image
                      src={star}
                      alt="star"
                      priority={true}
                      className="  object-contain"
                    />
                    <Image
                      src={star}
                      alt="star"
                      priority={true}
                      className=" object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[25%] p-5 bg-white">
                <p>
                  Pellentesque eu nibh eget mauris congue mattis mattis nec
                  tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                  cursus velit sodales. Donec sed neque eget
                </p>
                <div className="flex justify-around relative w-[100%] mt-[1%]">
                  <div className="flex items-center gap-2">
                    <Image
                      src={avatar}
                      alt="avatar"
                      priority={true}
                      className="w-[20%]"
                    />
                    <div>
                      <h2 className="font-bold">Robert Fox</h2>
                      <h3 className="text-sm">Customer</h3>
                    </div>
                  </div>

                  <div className="w-[80%] flex justify-around ">
                    <Image
                      src={star}
                      alt="star"
                      priority={true}
                      className="object-contain"
                    />
                    <Image
                      src={star}
                      alt="star"
                      priority={true}
                      className=" object-contain"
                    />
                    <Image
                      src={star}
                      alt="star"
                      priority={true}
                      className=" object-contain"
                    />
                    <Image
                      src={star}
                      alt="star"
                      priority={true}
                      className="  object-contain"
                    />
                    <Image
                      src={star}
                      alt="star"
                      priority={true}
                      className=" object-contain"
                    />
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About