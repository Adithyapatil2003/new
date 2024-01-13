/* eslint-disable no-unused-vars */
import React from "react";
import ContentToImport from './form.jsx';
import { useNavigate } from 'react-router-dom';
import {Img, Line, Text, Button } from "components";

const ContactPagePage = () => {

  const history =useNavigate();
  const handleBack = (event) => {
    event.preventDefault();
    history('/list')
  };

  return (
    <>
      <div className="bg-gray-51 flex flex-col sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">

          <div className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex flex-col gap-[1px]">
                <Text className="text-orange-A700 text-xl" size="txtMarkoOneRegular20">lawfind</Text>
                <Text size="txtManropeSemiBold18Gray900">by LegalLawGuru</Text>
              </div>
            </div>
            <div className="flex flex-row gap-10 h-[42px] md:h-auto sm:hidden items-center justify-start w-[150px]">
              <Button onClick={handleBack}
              className="bg-gray-900 cursor-pointer font-manrope font-semibold py-2.5 rounded-[10px] text-base text-center text-white-A700 w-full">
                back
              </Button>
            </div>
          </div>

          <div className="flex flex-col font-manrope items-center justify-start md:px-10 sm:px-5 px-[120px] w-full">
            <div className="flex flex-col gap-11 items-center justify-start max-w-[1200px] mx-auto w-full">
              <div className="flex flex-col gap-4 items-center justify-start w-full">
                <Text
                  className="sm:text-[40px] md:text-[46px] text-[54px] text-center text-gray-900 tracking-[-1.08px] w-full"
                  size="txtManropeExtraBold54"
                >
                  Welcome Esquire!
                </Text>
                <Text
                  className="leading-[180.00%] max-w-[1200px] md:max-w-full text-center text-gray-600 text-lg"
                  size="txtManropeRegular1Gray600"
                >
                  LawFind revolutionizes legal practice by providing lawyers a seamless platform to connect with clients. 
                  Lawyers showcase expertise and profiles, streamlining client acquisition. 
                  The user-friendly interface prioritizes transparency, simplifying the process for lawyers to expand their clientele and efficiently engage with those seeking legal services.
                </Text>
              </div>
              <div className="bg-white-A700 border border-bluegray-100 border-solid flex md:flex-col flex-row gap-[50px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[10px] w-full">
                <div className="flex flex-1 flex-col gap-10 items-start justify-start w-full">
                  <div className="flex flex-col gap-6 items-start justify-start w-full">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px] w-full"
                      size="txtManropeExtraBold28"
                    >
                      Add Details For Display
                    </Text>
                    <ContentToImport />
                  </div>
                </div>
                <Line className="bg-bluegray-100 h-[720px] md:h-px md:w-full w-px" />
                <div className="flex flex-1 flex-col gap-10 items-start justify-center w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-col gap-1 items-start justify-start w-full">
                    <Text
                    className="text-orange-A700 text-xl w-auto"
                    size="txtMarkoOneRegular20"
                  >
                    LawFind
                  </Text>
                  <Text size="txtManropeSemiBold18Gray900">by LegalLawGuru</Text>
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <div className="flex flex-row gap-3 items-center justify-start w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_call.svg"
                          alt="call_One"
                        />
                        <Text
                          className="flex-1 text-gray-600 text-lg w-auto"
                          size="txtManropeSemiBold18Gray600"
                        >
                          (+91) 98452 36784
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3 items-center justify-start w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_mail_gray_600_24x24.svg"
                          alt="mail_One"
                        />
                        <a
                        href="mailto:contactus@legallawguru.com"
                        className="flex-1 text-gray-600 text-lg w-auto"
                        size="txtManropeSemiBold18Gray600"
                        >
                          contactus@legallawguru.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-full">  
                  <Text
                      className="text-gray-900 text-xl tracking-[-0.40px] mb-2"
                      size="txtManropeSemiBold20Gray900"
                    >
                      Social and other links
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-start justify-start w-full">
                    <Img
                        className="h-[30px] w-[30px]"
                        src="images/img_linkedin_gray_600.svg"
                        alt="linkedin"
                      />
                       <a
                        href="https://www.linkedin.com/company/legallawguru-llg/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-500 ml-2"
                      >
                        LegalLawGuru
                      </a>
                    <div className="flex flex-row gap-4 items-start justify-start w-full">
                      <img
                        className="h-[30px] w-[30px]"
                        src="https://img.icons8.com/pastel-glyph/64/webpages--v2.png"
                        alt="webpages--v2"
                      />
                      <a
                        href="https://legallawguru.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black-500 ml-2"
                      >
                        LegalLawGuru
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="mb-4"></p>
      </div>
    </>
  );
};

export default ContactPagePage;
