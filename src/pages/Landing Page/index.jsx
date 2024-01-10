import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, List, Text } from "components";
import LandingPageFooter from "components/LandingPageFooter";
import LandingPageHeader from "components/LandingPageHeader";


const LandingPage = () => {
  const navigate=useNavigate()
  return (
    <>
     <div className="bg-deep_orange-50 text-white-A700 px-11 py-5 fixed w-full">
    <div style={{color: 'black', fontSize: '60px', fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif', fontWeight: 'bold' }}>LLG.</div>
    </div>
      <div className="bg-red-200 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[100px] items-center justify-start mx-auto w-auto sm:w-full md:w-full ">
        <div className="flex flex-col items-start justify-start w-full">
          <LandingPageHeader className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
        </div>
        <div className="flex flex-col font-manrope items-start justify-start md:px-10 sm:px-5 px-[120px] w-full">
          <div className="flex md:flex-col flex-row gap-6 items-center justify-center max-w-[1200px] mx-auto w-full">
            <div className="bg-red-100 flex flex-1 flex-col h-[424px] md:h-auto items-start justify-center md:px-10 sm:px-5 px-[50px] py-[46px] rounded-[20px] w-full">
              <div className="flex flex-col gap-[50px] items-start justify-start w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="leading-[140.00%] max-w-[488px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px]"
                    size="txtManropeExtraBold36"
                  >
                    Simple & easy solutions for your legal needs
                  </Text>
                  <Text
                    className="leading-[180.00%] max-w-[488px] md:max-w-full text-gray-900 text-lg"
                    size="txtManropeRegular18"
                  >
                    Make your legal process more efficient
                    and more streamlined using LegalLawGuru.{" "}
                  </Text>
                </div>
                <Button className="bg-gray-900 cursor-pointer font-semibold min-w-[138px] py-[13px] rounded-[10px] text-base text-center text-white-A700"onClick={()=>{navigate('\getstarted')}} >
                  Get Started
                </Button>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="sm:gap-5 gap-6 grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                <div className="bg-deep_orange-50 flex flex-1 flex-col h-[200px] md:h-auto items-start justify-center sm:px-5 px-[30px] py-6 rounded-[20px] w-full">
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_refresh.svg"
                      alt="refresh"
                    />
                    <Text
                      className="leading-[135.00%] max-w-[222px] md:max-w-full sm:text-2xl md:text-[26px] text-[25px] text-gray-900 tracking-[-0.56px]"
                      size="txtManropeExtraBold28"
                    >
                      <>
                        Connect <br />
                        with top lawyers
                      </>
                    </Text>
                  </div>
                </div>
                <div className="bg-deep_orange-50 flex flex-1 flex-col h-[200px] md:h-auto items-start justify-center sm:px-5 px-[30px] py-6 rounded-[20px] w-full">
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <Img
                      className="h-[48px] w-[48px]"
                      src="https://img.icons8.com/color/48/chat--v1.png" 
                      alt="chat--v1"
                    />
                    <Text
                      className="leading-[135.00%] max-w-[222px] md:max-w-full sm:text-2xl md:text-[26px] text-[25px] text-gray-900 tracking-[-0.56px]"
                      size="txtManropeExtraBold28"
                    >
                      <>
                        Chat with your <br />
                        documents
                      </>
                    </Text>
                  </div>
                </div>
                <div className="bg-deep_orange-50 flex flex-1 flex-col h-[200px] md:h-auto items-start justify-center sm:px-5 px-[30px] py-6 rounded-[20px] w-full">
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <Img
                      className="h-[48px] w-[48px]"
                      src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-accurate-medical-ecommerce-flaticons-lineal-color-flat-icons.png"
                    />
                    <Text
                      className="leading-[135.00%] max-w-[222px] md:max-w-full sm:text-2xl md:text-[26px] text-[25px] text-gray-900 tracking-[-0.56px]"
                      size="txtManropeExtraBold28"
                    >
                      <>
                        Get accurate <br />
                        information
                      </>
                    </Text>
                  </div>
                </div>
                <div className="bg-deep_orange-50 flex flex-1 flex-col h-[200px] md:h-auto items-start justify-center sm:px-5 px-[30px] py-6 rounded-[20px] w-full">
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <Img
                      className="h-[48px] w-[48px]"
                      src="https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/external-save-time-data-backup-xnimrodx-blue-xnimrodx.png"
                    />
                    <Text
                      className="leading-[135.00%] max-w-[222px] md:max-w-full sm:text-2xl md:text-[26px] text-[25px] text-gray-900 tracking-[-0.56px]"
                      size="txtManropeExtraBold28"
                    >
                      <>
                        Save time for tasks<br />
                        that matter
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-manrope items-center justify-center md:px-10 sm:px-5 px-[120px] w-full">
          <div className="flex flex-col md:gap-10 gap-[60px] md:h-auto items-start justify-start max-w-[1200px] mx-auto w-full">
            <div className="flex flex-col gap-6 items-start justify-start w-full">
            </div>
          </div>
        </div>

        <div className="bg-orange-100 flex flex-col font-manrope items-center justify-center p-[120px] md:px-10 sm:px-5 w-full mt-100">
          <div className="flex flex-col md:gap-10 gap-[120px] items-center justify-start max-w-[1200px] mx-auto w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row gap-5 items-center justify-start w-full h-0">
                <Text
                  className="flex-1  sm:text-[32px] md:text-[34px] text-black-A700 tracking-[-0.72px] w-auto mb-10"
                  size="txtManropeExtraBold36WhiteA700"
                  style={{ fontSize: '40px' }}
                >
                  PRICING
                </Text>
                
              </div>

              <List
              className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
              orientation="horizontal"
            >
              {/* Box 1 */}
              <div className="bg-white-A700 flex flex-col items-center justify-center p-9 rounded-[10px] h-150">
                <Text
                  className="text-2xl text-gray-900 font-semibold mb-4"
                  size="txtManropeSemiBold24"
                  style={{ fontSize: '30px' }}
                >
                  BASIC
                </Text>
                <Text
  className="text-gray-700 text-lg"
  size="txtManropeRegular18Gray700"
  style={{ fontWeight: 'bold' }}
>
  5 GB STORAGE
</Text>
<div style={{ borderBottom: '1px solid #ccc', margin: '8px 0' }}></div>
<Text
  className="text-gray-700 text-lg"
  size="txtManropeRegular18Gray700"
  style={{ fontWeight: 'bold' }}
>
  10 Case Analysis per day
</Text>
<div style={{ borderBottom: '1px solid #ccc', margin: '8px 0' }}></div>
<Text
  className="text-gray-700 text-lg"
  size="txtManropeRegular18Gray700"
  style={{ fontWeight: 'bold' }}
>
  Endless Support
</Text>
<div style={{ borderBottom: '1px solid #ccc', margin: '8px 0' }}></div>
<Text
  className="text-gray-700 text-lg"
  size="txtManropeRegular18Gray700"
  style={{ fontWeight: 'bold' }}
>
  FREE
</Text>
<Button className="bg-gray-900 cursor-pointer font-semibold min-w-[138px] py-[13px] rounded-[10px] text-base text-center text-white-A700 mt-4">
                  Get Started
                </Button>

              </div>

              {/* Box 1 */}
              <div className="bg-white-A700 flex flex-col items-center justify-center p-9 rounded-[10px]">
                <Text
                  className="text-2xl text-gray-900 font-semibold mb-4"
                  size="txtManropeSemiBold24"
                  style={{ fontSize: '30px' }}
                >
                  PRO
                </Text>
                <Text
  className="text-gray-700 text-lg"
  size="txtManropeRegular18Gray700"
  style={{ fontWeight: 'bold' }}
>
  25 GB STORAGE
</Text>
<div style={{ borderBottom: '1px solid #ccc', margin: '8px 0' }}></div>
<Text
  className="text-gray-700 text-lg"
  size="txtManropeRegular18Gray700"
  style={{ fontWeight: 'bold' }}
>
  199 Case Analysis per day
</Text>
<div style={{ borderBottom: '1px solid #ccc', margin: '8px 0' }}></div>
<Text
  className="text-gray-700 text-lg"
  size="txtManropeRegular18Gray700"
  style={{ fontWeight: 'bold' }}
>
  Endless Support
</Text>
<div style={{ borderBottom: '1px solid #ccc', margin: '8px 0' }}></div>
<Text
  className="text-gray-700 text-lg"
  size="txtManropeRegular18Gray700"
  style={{ fontWeight: 'bold' }}
>
  $10 PER MONTH
</Text>
<Button className="bg-gray-900 cursor-pointer font-semibold min-w-[138px] py-[13px] rounded-[10px] text-base text-center text-white-A700 mt-4">
                  Get Started
                </Button>


              </div>


               {/* Box 1 */}
               <div className="bg-white-A700 flex flex-col items-center justify-center p-9 rounded-[10px]">
                <Text
                  className="text-2xl text-gray-900 font-semibold mb-4"
                  size="txtManropeSemiBold24"
                  style={{ fontSize: '30px' }}
                >
                  PREMIUM
                </Text>
                <Text
  className="text-gray-700 text-lg"
  size="txtManropeRegular18Gray700"
  style={{ fontWeight: 'bold' }}
>
  50 GB STORAGE
</Text>
<div style={{ borderBottom: '1px solid #ccc', margin: '8px 0' }}></div>
<Text
  className="text-gray-700 text-lg"
  size="txtManropeRegular18Gray700"
  style={{ fontWeight: 'bold' }}
>
  599 Case Analysis per day
</Text>
<div style={{ borderBottom: '1px solid #ccc', margin: '8px 0' }}></div>
<Text
  className="text-gray-700 text-lg"
  size="txtManropeRegular18Gray700"
  style={{ fontWeight: 'bold' }}
>
  Endless Support
</Text>
<div style={{ borderBottom: '1px solid #ccc', margin: '8px 0' }}></div>
<Text
  className="text-gray-700 text-lg"
  size="txtManropeRegular18Gray700"
  style={{ fontWeight: 'bold' }}
>
  $15 PER MONTH
</Text>

<Button className="bg-gray-900 cursor-pointer font-semibold min-w-[138px] py-[13px] rounded-[10px] text-base text-center text-white-A700 mt-4">
                  Get Started
                </Button>
              </div>

            </List>
              <List
                className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
                orientation="horizontal"
              >

              </List>
            </div>
          </div>
        </div>
        <LandingPageFooter className="bg-red-200 flex gap-2 items-center justify-center md:px-5 px-[120px] py-20 w-full" />
      </div>
    </>
  );
};

export default LandingPage;
