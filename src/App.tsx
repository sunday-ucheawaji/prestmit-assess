import Button from "./components/Button";
import logo from "./images/Logo.png";
import dots from "./images/threeDots.png";
import graph from "./images/graph.png";
import pie from "./images/pie.svg";
import bar from "./images/bars.png";
import VaryLogo from "./components/VaryLogo";
import LogoVary from "./components/LogoVary";
import leftImage from "./images/leftImage.svg";
import middleImage from "./images/middleImage.svg";
import rightImage from "./images/rightImage.svg";
import Card from "./components/Card";
import AdvertCard from "./components/AdvertCard";
import advertCard from "./images/advertCard.svg";
import advertImage from "./images/advertImage.svg";
import check from "./images/check.svg";

function App() {
  return (
    <div className="w-full ">
      <div className="font-manrope  pt-[56px] px-[100px] w-full bg-[#0A2640]  ">
        <div className="bg-[#1C3D5B] arc-background"></div>
        <div className="w-full h-[42px] relative flex justify-between items-center">
          <img src={logo} alt="logo" />
          <ul className="flex justify-between items-center gap-3 text-[16px] text-white w-[30%] font-sans font-[600] leading-[28px] ">
            <li className="cursor-pointer">Product</li>
            <li className="cursor-pointer">Services</li>

            <li className="cursor-pointer">About</li>
            <li className="bg-white cursor-pointer text-[#0A2640] px-[30px] rounded-[24px] border-2 border-[#ffffff]">
              Log in
            </li>
          </ul>
        </div>
        <div className="w-full h-[423px] mt-[64px] relative  flex justify-between ">
          <div className=" h-full w-[45%]">
            <div className="my-[30px] h-[138px]">
              <p className="text-[#ffffff] text-[48px] font-[400] leading-[72px] ">
                Save time by building{" "}
              </p>
              <p className="text-[#ffffff] text-[48px] font-[400] leading-[72px] ">
                fast with Boldo Template
              </p>
              <p className="text-[14px] font-[400] leading-[28px] font-sans text-[#F1F1F1] ">
                Funding handshake buyer business-to-business metrics iPad
                partnership. First mover advantage innovator success deployment
                non-disclosure.
              </p>
              <div className="mt-[40px] flex gap-2 ">
                <Button
                  className="bg-[#69E6A6] border-2 border-[#69E6A6] rounded-[20px] px-10 py-2 leading-[28px] font-sans font-[700] text-[14px] "
                  title="Buy template"
                />
                <Button
                  className="border-2 border-[#fff] rounded-[20px] px-7 py-2 leading-[28px] font-sans font-[700] text-[#ffffff] text-[14px] "
                  title="Explore"
                />
              </div>
            </div>
          </div>
          <div className="h-full w-[40%]">
            <div className="top__image  w-[100%]"></div>
            <div className="flex justify-between h-full">
              <div className="w-full h-[200px] flex justify-between gap-[3rem] ">
                <div className="bg-[#364d62] rounded-[15px] w-[50%] h-[150px] p-2">
                  <img src={dots} className="mx-2" alt="" />
                  <img src={graph} className="mx-auto" alt="" />
                </div>

                <div className="bg-[#364d62] rounded-[15px] w-[50%] h-[150px] p-2">
                  <img src={dots} className="" alt="" />
                  <div className="flex justify-center items-center gap-4 my-4">
                    <img src={pie} className="" alt="" />
                    <img src={bar} className="" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[93px] flex justify-between items-center">
          <VaryLogo color={"#223B52"} />
          <LogoVary text="Presto" color="#ADB6Bf" />
          <VaryLogo color={"#FFFFFF"} />
          <LogoVary text="Presto" color="#ADB6Bf" />
          <VaryLogo color={"#FFFFFF"} />
          <LogoVary text="Presto" color="#ADB6Bf" />
        </div>
      </div>

      {/* next section */}
      <div className="bg-[#ffffff]  ">
        <div className="mt-[84px] w-[842px]  mx-auto flex flex-col justify-center items-center ">
          <div className="flex justify-center items-center py-2 text-[#777777]">
            Our Services
          </div>
          <div className="text-[38px] font-[400] text-[#000000] leading-[52px]">
            Handshake infographic mass market
          </div>
          <div className="text-[38px] font-[400] text-[#000000] leading-[52px]">
            {" "}
            crowdfunding iteration.
          </div>
        </div>
      </div>

      {/* Card Section */}
      <div className="flex  mx-auto my-10 justify-between w-[80%]">
        <Card
          icon={<img className="h-[354px]" src={leftImage} />}
          title="Cool feature title"
          text1="Learning curve network effects"
          text2="return on investment."
        />
        <Card
          icon={<img className="h-[354px]" src={middleImage} />}
          title="Cool feature title"
          text1="Learning curve network effects"
          text2="return on investment."
        />
        <Card
          icon={<img className="h-[354px]" src={rightImage} />}
          title="Cool feature title"
          text1="Learning curve network effects"
          text2="return on investment."
        />
      </div>

      {/* Advert Section 1 */}
      <div className="w-[80%]  flex justify-between mx-auto ">
        <AdvertCard
          image1={<img className="w-[495px]" src={advertImage} />}
          image2={
            <div className="bg-[#ffffff] rounded-[10px] p-5">
              <img src={advertCard} alt="" />
              <h1 className="text-[#0A2640] font-[700] my-1">30%</h1>
              <p className="text-[12px]">More income in June</p>
            </div>
          }
        />
        <div className=" w-[100%]  flex flex-col items-end">
          <div className="text-[#000000]  w-[400px] text-[30px] font-[400]  ">
            We connect our customers <br /> with the best, and help them <br />{" "}
            keep up-and stay open.
          </div>
          <div className="flex items-center w-[400px] gap-2 mt-4">
            <img
              src={check}
              className="bg-[#0A2640] rounded-[50%] p-1"
              alt=""
            />
            <span className="text-[18px]">
              We connect our customers with the best.
            </span>
          </div>
          <div className="flex items-center w-[400px] gap-2 mt-4">
            <img
              src={check}
              className="bg-[#0A2640] rounded-[50%] p-1"
              alt=""
            />
            <span className="text-[18px]">
              Advisor success customer launch party.
            </span>
          </div>
          <div className="flex items-center w-[400px] gap-2 mt-4">
            <img
              src={check}
              className="bg-[#0A2640] rounded-[50%] p-1"
              alt=""
            />
            <span className="text-[18px]">Business-to-consumer long tail.</span>
          </div>
          <div className="mt-[56px] w-[400px]">
            <Button
              className="bg-[#0A2640] text-[#ffffff] border-2 border-[#0A2640] rounded-[20px] px-10 py-2 leading-[28px] font-sans font-[700] text-[16px] "
              title="Start now"
            />
          </div>
        </div>
      </div>

      {/* Advert Section 2 */}

      <div className="w-[80%]  mt-[150px] flex justify-between mx-auto ">
        <div className=" w-[100%]  flex flex-col items-start">
          <div className="text-[#000000]  w-[400px] text-[30px] font-[400]  ">
            We connect our customers <br /> with the best, and help them <br />{" "}
            keep up-and stay open.
          </div>
          <div className="flex items-center w-[400px] gap-2 mt-4">
            <img
              src={check}
              className="bg-[#0A2640] rounded-[50%] p-1"
              alt=""
            />
            <span className="text-[18px]">
              We connect our customers with the best.
            </span>
          </div>
          <div className="flex items-center w-[400px] gap-2 mt-4">
            <img
              src={check}
              className="bg-[#0A2640] rounded-[50%] p-1"
              alt=""
            />
            <span className="text-[18px]">
              Advisor success customer launch party.
            </span>
          </div>
          <div className="flex items-center w-[400px] gap-2 mt-4">
            <img
              src={check}
              className="bg-[#0A2640] rounded-[50%] p-1"
              alt=""
            />
            <span className="text-[18px]">Business-to-consumer long tail.</span>
          </div>
          <div className="mt-[56px] w-[400px]">
            <Button
              className="bg-[#0A2640] text-[#ffffff] border-2 border-[#0A2640] rounded-[20px] px-10 py-2 leading-[28px] font-sans font-[700] text-[16px] "
              title="Start now"
            />
          </div>
        </div>
        <div className="w-[100%] flex just justify-end ">
          <AdvertCard
            image1={<img className="w-[495px]" src={advertImage} />}
            image2={
              <div className="bg-[#ffffff] rounded-[10px] p-5">
                <img src={advertCard} alt="" />
                <h1 className="text-[#0A2640] font-[700] my-1">30%</h1>
                <p className="text-[12px]">More income in June</p>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default App;
