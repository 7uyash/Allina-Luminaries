import React from 'react';
import { ContactForm } from './ContactForm';

export const Footer: React.FC = () => {
  const quickLinks = ['Home', 'About Us', 'Services', 'Projects', 'Careers', 'Contact'];
  const otherLinks = ['Blogs', 'Articles', 'Journals'];
  const contactInfo = [
    'New Industrial Town, Faridabad, Haryana (121221)',
    'example@allina.co.in',
    '+911234567890'
  ];

  return (
    <footer className="absolute w-[1440px] h-[802px] bg-[#E7DED7] left-0 top-[4552px] max-md:w-full max-md:h-auto max-md:px-5 max-md:py-10 max-md:left-0 max-md:top-[3400px] max-sm:px-0 max-sm:py-5 max-sm:top-[2900px]">
      <div className="w-[1354px] h-[752px] absolute left-[43px] top-[22px] max-md:w-[90%] max-md:h-auto max-md:mb-10 max-md:left-[5%] max-md:top-5">
        <div className="w-full h-full relative bg-[#06153A] rounded-[40px] max-md:h-auto max-md:px-5 max-md:py-10">
          <div className="w-[35px] h-[35px] absolute bg-white rounded-[50%] left-[57px] top-28" />
          
          <h2 className="text-white text-center text-[90px] font-normal leading-[95px] tracking-[8.1px] absolute w-[882px] h-[95px] left-[122px] top-[82px] max-md:text-5xl max-md:leading-[52px] max-md:w-full max-md:text-center max-md:left-0 max-md:top-10 max-sm:text-[32px] max-sm:leading-9 max-sm:tracking-[4px]">
            BELIEVE IN ALLINA
          </h2>
          
          <p className="w-[670px] text-white text-lg font-normal leading-[27px] absolute h-[81px] left-[57px] top-[205px] max-md:w-full max-md:text-center max-md:left-0 max-md:top-[140px] max-sm:text-base max-sm:leading-6">
            From smart streetlighting solutions to end-to-end EPC services,
            ALLINA is committed to delivering innovative, sustainable, and
            reliable infrastructure solutions. Together, we light the way to a
            brighter future.
          </p>
          
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/061504ddfb877f17b6bd8f4d15b106bd6ddeedbc?placeholderIfAbsent=true"
            alt="ALLINA CTA Logo"
            className="w-[321px] h-[300px] absolute left-[71px] top-[376px] max-md:w-[200px] max-md:h-[187px] max-md:-translate-x-2/4 max-md:left-2/4 max-md:top-[260px] max-sm:w-[150px] max-sm:h-[140px]"
          />
          
          <ContactForm />
          
          <div className="absolute w-[528px] h-[65px] left-[734px] top-[319px] max-md:w-full max-md:h-auto max-md:left-0 max-md:top-[440px]">
            <button
              type="submit"
              form="contact-form"
              className="text-white text-lg font-normal leading-[27px] absolute w-[270px] h-[59px] bg-[#06153A] px-[69px] py-4 rounded-md left-[5px] top-[3px] max-md:w-full max-md:mb-5 max-md:left-0 max-md:top-0 max-sm:text-base max-sm:px-5 max-sm:py-3 hover:bg-opacity-80 transition-all"
            >
              Register with Us
            </button>
            <div className="text-[#06153A] text-lg font-normal leading-[27px] absolute w-[528px] h-[65px] bg-[#E7DED7] pl-[377px] pr-[92px] py-[19px] rounded-md left-0 top-0 max-md:w-full max-md:px-5 max-md:py-[19px] max-md:left-0 max-md:top-20 max-sm:text-base max-sm:relative max-sm:w-auto max-sm:h-auto max-sm:px-5 max-sm:py-[15px] max-sm:left-0 max-sm:top-0">
              LOREM
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1376px] h-[514px] absolute left-[13px] top-[170px] max-md:w-full max-md:h-auto max-md:left-0 max-md:top-0">
        <div className="absolute left-0 top-0 max-md:relative max-md:text-center max-md:mb-10">
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg id=\"I410:1055;354:718\" layer-name=\"layer-MC0\" width=\"401\" height=\"401\" viewBox=\"0 0 401 401\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"footer-logo-svg\" style=\"width: 401px; height: 401px\"> <mask id=\"mask0_511_55\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"401\" height=\"401\"> <path d=\"M0 6.10352e-05H401V401H0V6.10352e-05Z\" fill=\"white\"></path> </mask> <g mask=\"url(#mask0_511_55)\"> <path d=\"M226.393 153.082H221.413V131.43H232.708L226.393 153.082ZM225.251 156.151C224.847 156.617 224.506 157.082 224.234 157.509L224.233 157.51C223.999 157.88 223.809 158.222 223.659 158.518H216.097C215.799 157.931 215.344 157.155 214.69 156.359L214.689 156.358C214.632 156.289 214.567 156.22 214.506 156.151H225.251ZM211.56 125.402C212.431 124.073 213.192 122.797 214.08 121.788L214.081 121.787C215.51 120.15 217.67 119.207 219.863 119.208H219.863H219.868C220.237 119.209 220.606 119.235 220.973 119.288C222.173 119.465 223.212 119.9 224.165 120.554C225.114 121.206 225.967 122.083 226.719 123.122C227.487 124.179 228.228 125.421 229.127 126.639C229.563 127.227 230.048 127.81 230.593 128.36H209.223C210.17 127.43 210.903 126.397 211.559 125.403L211.56 125.402ZM213.107 153.082L207.026 131.43H218.344V153.082H213.107ZM238.242 241.643H221.966L221.966 190.787L238.242 202.261V241.643ZM197.672 193.688V241.643H181.747L181.747 162.475L197.672 152.911L197.672 169.404L197.67 169.402V183.815V187.946V193.688H197.672ZM221.966 187.032L221.966 161.587H225.741L226.106 160.547C226.115 160.525 226.146 160.444 226.196 160.33C226.373 159.924 226.799 159.063 227.479 158.258L227.48 158.257C227.948 157.698 228.532 157.166 229.222 156.784C229.918 156.401 230.706 156.154 231.706 156.151L232.158 156.151V153.082H229.59L235.906 131.43H237.173C237.249 131.433 237.347 131.442 237.468 131.443C237.601 131.443 237.732 131.437 237.859 131.43H240.386V128.36H237.205C236.755 128.333 236.284 128.243 235.815 128.091C235.251 127.908 234.688 127.643 234.179 127.335C233.189 126.74 232.377 125.871 231.594 124.813C230.813 123.76 230.077 122.531 229.206 121.323C228.29 120.058 227.202 118.917 225.905 118.025C224.609 117.132 223.101 116.495 221.414 116.251C221.285 116.232 221.156 116.224 221.027 116.21V108.398H217.957V116.322C215.598 116.741 213.392 117.919 211.772 119.765C210.634 121.069 209.815 122.475 208.996 123.714L208.995 123.715C208.177 124.962 207.366 126.037 206.343 126.813C205.752 127.264 205.068 127.665 204.369 127.942C203.751 128.188 203.123 128.331 202.526 128.36H198.598V131.43H201.894C202.026 131.437 202.162 131.443 202.301 131.443C202.444 131.443 202.585 131.438 202.724 131.43H203.838L209.919 153.082H207.598V156.15L208.05 156.151C209.066 156.154 209.864 156.408 210.568 156.803C211.61 157.386 212.415 158.337 212.931 159.155L212.932 159.156C213.191 159.563 213.38 159.934 213.498 160.193C213.558 160.323 213.601 160.424 213.626 160.488L213.625 160.485L213.653 160.556L213.656 160.564L213.658 160.57L214.015 161.587H218.896L218.896 184.868L200.742 172.071V147.488L181.747 158.894V156.114V154.618V137.56H178.678V154.618V156.114V160.737L159.688 172.142V244.712H162.757V173.879L178.678 164.318V244.712H199.207H200.742V187.494H200.739V184.267H200.742V183.812V175.826L218.897 188.623L218.897 244.712H241.311V200.669L221.966 187.032Z\" fill=\"#06153A\"></path> </g> <mask id=\"mask1_511_55\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"401\" height=\"401\"> <path d=\"M0 6.10352e-05H401V401H0V6.10352e-05Z\" fill=\"white\"></path> </mask> <g mask=\"url(#mask1_511_55)\"> <path d=\"M124.525 271.874L122.406 266.014C121.903 264.599 121.494 263.206 121.11 261.95H121.041C120.676 263.221 120.316 264.629 119.862 265.989L117.807 271.874H124.525ZM117.024 275.193L114.797 281.937H110.131L118.357 258.683H124.137L132.608 281.937H127.726L125.332 275.193H117.024Z\" fill=\"#06153A\"></path> </g> <mask id=\"mask2_511_55\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"401\" height=\"401\"> <path d=\"M0 6.10352e-05H401V401H0V6.10352e-05Z\" fill=\"white\"></path> </mask> <g mask=\"url(#mask2_511_55)\"> <path d=\"M148.435 258.683H152.874V278.225H163.553V281.937H148.435V258.683Z\" fill=\"#06153A\"></path> </g> <mask id=\"mask3_511_55\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"401\" height=\"401\"> <path d=\"M0 6.10352e-05H401V401H0V6.10352e-05Z\" fill=\"white\"></path> </mask> <g mask=\"url(#mask3_511_55)\"> <path d=\"M179.383 258.683H183.823V278.225H194.502V281.937H179.383V258.683Z\" fill=\"#06153A\"></path> </g> <mask id=\"mask4_511_55\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"401\" height=\"401\"> <path d=\"M0 6.10352e-05H401V401H0V6.10352e-05Z\" fill=\"white\"></path> </mask> <g mask=\"url(#mask4_511_55)\"> <path d=\"M214.769 281.937H210.33V258.683H214.769V281.937Z\" fill=\"#06153A\"></path> </g> <mask id=\"mask5_511_55\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"401\" height=\"401\"> <path d=\"M0 6.10352e-05H401V401H0V6.10352e-05Z\" fill=\"white\"></path> </mask> <g mask=\"url(#mask5_511_55)\"> <path d=\"M232.308 281.937V258.683H237.645L244.359 268.682C246.125 271.403 247.544 273.997 248.733 276.617L248.821 276.587C248.481 273.464 248.447 270.665 248.447 267.312V258.683H252.596V281.937H247.863L241.082 271.597C239.39 268.906 237.675 266.063 236.374 263.365L236.251 263.395C236.423 266.527 236.457 269.522 236.457 273.011V281.937H232.308Z\" fill=\"#06153A\"></path> </g> <mask id=\"mask6_511_55\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"401\" height=\"401\"> <path d=\"M0 6.10352e-05H401V401H0V6.10352e-05Z\" fill=\"white\"></path> </mask> <g mask=\"url(#mask6_511_55)\"> <path d=\"M282.786 271.874L280.667 266.014C280.164 264.599 279.755 263.206 279.371 261.95H279.302C278.937 263.221 278.577 264.629 278.124 265.989L276.068 271.874H282.786ZM275.285 275.193L273.058 281.937H268.393L276.619 258.683H282.398L290.869 281.937H285.988L283.594 275.193H275.285Z\" fill=\"#06153A\"></path> </g> </svg>",
            }}
          />
        </div>

        <div className="absolute w-[949px] h-[466px] left-[427px] top-12 max-md:relative max-md:w-full max-md:h-auto max-md:left-0 max-md:top-0">
          <div className="inline-flex items-center gap-[145px] w-[862px] h-[50px] max-md:flex-col max-md:gap-5 max-md:w-full max-md:h-auto">
            <h3 className="gap-2.5 text-[#06153A] text-center text-[25px] font-normal tracking-[4px] p-2.5 max-sm:text-lg max-sm:tracking-[2px]">
              QUICK LINKS
            </h3>
            <h3 className="gap-2.5 text-[#06153A] text-center text-[25px] font-normal tracking-[4px] p-2.5 max-sm:text-lg max-sm:tracking-[2px]">
              OTHER LINKS
            </h3>
            <h3 className="gap-2.5 text-[#06153A] text-center text-[25px] font-normal tracking-[4px] p-2.5 max-sm:text-lg max-sm:tracking-[2px]">
              CONTACT
            </h3>
          </div>
          
          <div className="flex gap-[351px] absolute w-[939px] h-[242px] left-2.5 top-[81px] max-md:flex-col max-md:gap-10 max-md:relative max-md:w-full max-md:h-auto max-md:left-0 max-md:top-10">
            <nav className="flex flex-col items-start gap-4">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-[#06153A] text-xl font-normal leading-[27px] max-sm:text-base max-sm:leading-6 hover:opacity-80 transition-opacity"
                >
                  {link}
                </a>
              ))}
            </nav>
            
            <nav className="flex flex-col items-start gap-4">
              {otherLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-[#06153A] text-xl font-normal leading-[27px] max-sm:text-base max-sm:leading-6 hover:opacity-80 transition-opacity"
                >
                  {link}
                </a>
              ))}
            </nav>
            
            <address className="flex flex-col items-start gap-4 not-italic">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="text-[#06153A] text-xl font-normal leading-[27px] max-sm:text-base max-sm:leading-6"
                >
                  {info}
                </div>
              ))}
            </address>
          </div>
          
          <div className="w-[1332px] h-0 absolute bg-black left-3.5 top-[411px]" />
          <div className="text-[#06153A] text-xl font-normal leading-[27px] absolute w-[489px] h-[27px] left-[43px] top-[439px] max-sm:text-sm max-sm:text-center max-sm:w-full max-sm:left-0">
            @2025 | All Rights reserved | Allina Luminaries Pvt. Ltd.
          </div>
        </div>
      </div>
    </footer>
  );
};
