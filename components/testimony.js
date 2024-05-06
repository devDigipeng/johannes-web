import Image from "next/image";
import { RiDoubleQuotesL } from "react-icons/ri";


export default function Testimony() {

    const testimony = [
        {
            name: "John Doe",
            testimony: "I love every taste of it and it got delivered to me on time ",
            image: ""
    },
    {
        name: "Jane Doe",
        testimony: "I love every taste of it and it got delivered to me on time ",
        image: ""
},
{
    name: "Palmer Rhode",
    testimony: "I love every taste of it and it got delivered to me on time ",
    image: ""
},
{
    name: "Janet Tode",
    testimony: "I love every taste of it and it got delivered to me on time ",
    image: ""
},
{
    name: "Dan Limma",
    testimony: "I love every taste of it and it got delivered to me on time ",
    image: ""
},
    ]

    const star = 4
  return (
    <div className="container mx-auto my-8 bg-[#F2F2F2] rounded-lg p-12">
      <div className="text-center">
        <h1 className="text-3xl font-medium mb-8">What our Customer Says</h1>
      </div>
<div className="flex gap-8 justify-between flex-col md:flex-row">

      <div className="border rounded-md p-6 space-y-4 bg-white">
      <RiDoubleQuotesL className=" text-[#999999]" size={50}/>
      <p>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget </p>
      <div >
        <div className="flex justify-between">
            <div className="flex gap-4">

            <Image  src="/test1.png" width={50} height={50} className="rounded-full"/>
            <div>
                <h2 className="text-2md font-medium">Robert Fox</h2>
                <p className="text-[12px] text-[#999999]">Customer</p>
            </div>
            </div>
            <div className="flex">

            {[...Array(star)].map((_, index) => (
                <Image key={index} src="/star.svg" width={10} height={10} className="" />
            ))}
            </div>

        </div>
      </div>
      </div>
      <div className="border rounded-md p-6 space-y-4 bg-white">
      <RiDoubleQuotesL className="text-[#999999]" size={50}/>
      <p>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget </p>
      <div >
        <div className="flex justify-between">
            <div className="flex gap-4">

            <Image  src="/test1.png" width={50} height={50} className="rounded-full"/>
            <div>
                <h2 className="text-2md font-medium">Robert Fox</h2>
                <p className="text-[12px] text-[#999999]">Customer</p>
            </div>
            </div>
            <div className="flex">

            {[...Array(star)].map((_, index) => (
                <Image key={index} src="/star.svg" width={10} height={10} className="" />
            ))}
            </div>

        </div>
      </div>
      </div>
      <div className="border rounded-md p-6 space-y-4 bg-white ">
      <RiDoubleQuotesL className="text-[#999999]" size={50}/>
      <p>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget </p>
      <div >
        <div className="flex justify-between">
            <div className="flex gap-4">

            <Image  src="/test1.png" width={50} height={50} className="rounded-full"/>
            <div>
                <h2 className="text-2md font-medium">Robert Fox</h2>
                <p className="text-[12px] text-[#999999]">Customer</p>
            </div>
            </div>
            <div className="flex">

            {[...Array(star)].map((_, index) => (
                <Image key={index} src="/star.svg" width={10} height={10} className="" />
            ))}
            </div>

        </div>
      </div>
      </div>
      
</div>

    </div>
  );
}
