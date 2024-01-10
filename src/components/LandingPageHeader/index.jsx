import React from "react";
import { Button } from "components";

const LandingPageHeader = (props) => {
  return (
    <header className={props.className}>
      <div className="flex justify-end w-full">
        <div className="header-row my-px">
          <div className="absolute top-6 transform -translate-y-1/2 left-88">
            <div style={{ display: 'inline-block', position: 'absolute' }}>
              {/* <Button className="bg-gray-900 cursor-pointer font-manrope font-semibold py-2.5 rounded-[10px] text-base text-center text-white-A700 w-24">
                Sign in
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

LandingPageHeader.defaultProps = {};

export default LandingPageHeader;
