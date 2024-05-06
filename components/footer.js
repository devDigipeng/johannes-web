import Image from "next/image";
import Link from "next/link";

const socials = [
 
  {
    icon: "/TwitterX.svg",
    alt: "Twitter",
    link: "https://x.com/",
  },
  {
    icon: "/Instagram.svg",
    alt: "Instagram",
    link: "https://www.instagram.com/",
  },
  {
    icon: "/Facebook.svg",
    alt: "Facebook",
    link: "https://www.facebook.com/",
  },
  
];

const Footer = () => {
  const footerStyle = {
    backgroundImage:
      "linear-gradient(270deg, rgba(0, 30, 71, 0) 0%, #001E47 53.65%, rgba(0, 30, 71, 0) 100%)",
    // height: "50px"
  };

  return (
    <footer className=" text-[#222222B2] px-3 py-8 lg:px-[50px] font-[JetBrains Mono]">
      <div className="h-[1px] mb-11" style={footerStyle}></div>
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 my-24 ">

       
        <Link href="/" className="flex items-start w-fit col-span-2 md:col-span-1">
          <Image
            className="relative w-[100%]"
            src="/logo.png"
            alt="Johannes"
            width={200}
            height={20}
            priority
          />
        </Link>

        {/* Second column */}
        <div className="">
          {/* <h4 className="mb-4 text-[15px]">EUROPE</h4>
          <div className="space-y-2">
            <p className="text-[15px]">London, United Kingdom.</p>
            <p className="text-[15px]">+44 7596 058 821</p>
          </div> */}
        </div>

        {/* Third column */}
        <div>
          <h4 className="mb-4 text-2xl font-medium">Benin Nigeria</h4>
          <div className="space-y-2">
            <p className="text-[15px]">83 Airport Road</p>
            <p className="text-[15px]">+234 9037 346 697</p>
            {/* <p className="text-[15px]">RC 1573794</p> */}
          </div>
        </div>

        {/* Fourth column */}
        <div>
          {/* <h4 className="mb-4 text-[15px]">NORTH AMERICA</h4>
          <div className="space-y-2">
            <p className="text-[15px]">Wyoming, USA.</p>
            <p className="text-[15px]">+1 337 445 4095</p>
          </div> */}
        </div>

        {/* Fifth column */}
        <div>
          <h4 className="mb-4 text-2xl font-medium">CONNECT</h4>
          <div className="space-y-2">
            <p className="text-[15px]">info@johannes.ng</p>
            <div className="flex justify-start space-x-4">
              {socials.map((item, index) => (
                <Link href={item.link} target="_blank" key={index}>
                  <Image
                    src={item.icon}
                    alt={item.alt}
                    width={20}
                    height={20}
                    priority
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
