import React from 'react';
import { Img, Text } from 'components';

const LandingPageFooter = (props) => {
  return (
    <footer className={`bg-red-300 ${props.className} `}>
      <div className="flex flex-col md:gap-10 gap-[120px] items-start justify-start w-full mb-100">
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
          <div className="flex flex-col gap-[43px] items-start justify-start w-[341px] mt-[-50px]">
            <div className="flex flex-row gap-[11px] md:h-auto items-center justify-start w-[341px]">
            <Text
  className="text-blue-400 text-xl w-auto text-[50px] mb-40"
  size="txtMarkoOneRegular30"
  style={{
    fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
    fontWeight: 'bold',
    fontSize: '80px',
  }}
>
  LLG.
</Text>
            </div>
            <div className="flex flex-col gap-7 h-[120px] md:h-auto items-start justify-start w-full">
              <Text className="leading-[160.00%] text-base text-gray-900 mt-[-140px]" size="txtManropeSemiBold16" style={{ fontSize: '25px',fontWeight:'bolder' }}>
                <>
                  CONTACT US<br />
                  Let's get in touch
                </>
              </Text>
              <div className="flex items-center mb-0 gap-2">
                <img width="30" height="30" src="https://img.icons8.com/office/16/marker.png" alt="marker" />
                <Text className="leading-[160.00%] text-base text-gray-900 ml-2" size="txtManropeSemiBold16 "style={{
    fontWeight:'normal',
  }}>
                  Bengaluru, India
                </Text>
              </div>
              <div className="flex items-center mb-0 gap-2">
                <img width="30" height="30" src="https://img.icons8.com/fluency/48/phone.png" alt="phone" />
                <Text className="text-base text-gray-900 ml-2" size="txtManropeSemiBold16"style={{
    fontWeight:'bolder',
  }}>
                  Phone : +91 9845904748
                </Text>
              </div>
              <div className="flex items-center mb-0 gap-2">
                <img width="30" height="30" src="https://img.icons8.com/color/48/new-post.png" alt="new-post"/>
                <Text className="text-base text-gray-900 ml-2" size="txtManropeSemiBold16" style={{
    fontWeight:'bolder',
  }}>
                  Email: contactus@legallawguru.com
                </Text>
              </div>
              <div className="flex items-center gap-2">
                <a href="https://www.linkedin.com/company/legallawguru-llg/"><img width="34" height="34" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin"/></a>
                <Text className="text-base text-gray-900 ml-2" size="txtManropeSemiBold16"style={{
    fontWeight:'bolder',
  }}>
                  LegalLawGuru( LLG.)
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

LandingPageFooter.defaultProps = {};

export default LandingPageFooter;
