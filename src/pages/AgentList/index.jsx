/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Button, Img, SelectBox, Text } from "components";
import { useNavigate } from 'react-router-dom';
import { db } from "firebase.js"

const dropdownPractice = [
  { label: "Banking Law", value: "Banking" },
  { label: "Civil Law", value: "Civil" },
  { label: "Corporate Law", value: "Corporate" },
  { label: "Criminal Law", value: "Criminal" },
  { label: "Family Law", value: "Family" },
  { label: "International Law", value: "International" },
];

const dropdownCity = [
  { label: "Bangalore", value: "Bangalore" },
  { label: "Chennai", value: "Chennai" },
  { label: "Delhi", value: "Delhi" },
];


const AgentListPage = () => {

  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedPracticeArea, setSelectedPracticeArea] = useState(null);
  const [filtered, setFiltered] = useState([]);
  const [searchCounter, setSearchCounter] = useState(0);

  const agentCollection = db.collection('users');

  const filteredAgents = async () => {
    const snapshot = await agentCollection.get();
    const agents = snapshot.docs.map(doc => doc.data());

    const filtered = agents.filter((agent) => {
      const cityMatch = !selectedCity || agent.city.trim().toLowerCase() === selectedCity.trim().toLowerCase();
      const practiceMatch = !selectedPracticeArea || agent.practiceArea.split(',').every((area) => area.trim().toLowerCase().includes(selectedPracticeArea.trim().toLowerCase()));
      return cityMatch && practiceMatch;
    });
    return filtered;
  };

  const handleSearch = () => {
    setSearchCounter(searchCounter + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      const filteredData = await filteredAgents();
      setFiltered(filteredData);
    };

    fetchData();
  }, [searchCounter]);

  const history =useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    history('/register')
  };
  
  return (
    <>
      <div className="bg-gray-51 flex flex-col gap-10 items-center justify-start min-h-screen w-full">
        <div className="w-full">
          <div className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
             <div className="flex flex-col gap-[1px]">
            <Text className="text-orange-A700 text-xl" size="txtMarkoOneRegular20">lawfind</Text>
            <Text size="txtManropeSemiBold18Gray900">by LegalLawGuru</Text>
          </div>
          </div>
          <div className="flex flex-row gap-10 h-[42px] md:h-auto sm:hidden items-center justify-start w-[250px]">
          <Button onClick={handleSubmit}
          className="bg-gray-900 cursor-pointer font-manrope font-semibold py-2.5 rounded-[10px] text-base text-center text-white-A700 w-full">
            Register as Lawyer
          </Button>
        </div>
          </div>
        </div>
        {searchCounter === 0 && (
          <div className="flex flex-row gap-4 justify-center w-[500px]">
          <Text
            className="leading-[180.00%] max-w-[610px] md:max-w-full text-gray-700 text-xl"
            size="txtManropeRegular20">
          Lawfind is an online platform that facilitates seamless connections between clients and legal professionals. 
          The platform is designed to simplify the process of finding and approaching lawyers for legal assistance.
          </Text>
        </div>
        )}
        <div className="flex flex-col font-manrope gap-6 items-center justify-center px-[120px] w-full">
          <div className="flex md:flex-col flex-row gap-2 items-center justify-center w-full">
            <SelectBox
              className="bg-white-A700 border border-bluegray-100 border-solid md:flex-1 font-bold pl-5 pr-4 py-[17px] rounded-[10px] text-gray-600 text-left text-lg w-[17%] md:w-full"
              placeholderClassName="text-gray-600"
              indicator={<Img className="h-6 w-6" src="images/img_arrowdown_gray_600_24x24.svg"/>}
              isMulti={false}
              name="dropdownCity"
              options={dropdownCity}
              isSearchable={true}
              placeholder="City"
              onChange={(selectedOption) => setSelectedCity(selectedOption)}
              value={selectedCity}
            />
            <SelectBox
              className="bg-white-A700 border border-bluegray-100 border-solid md:flex-1 font-bold pl-5 pr-4 py-[17px] rounded-[10px] text-gray-600 text-left text-lg w-[17%] md:w-full"
              placeholderClassName="text-gray-600"
              indicator={<Img className="h-6 w-6" src="images/img_arrowdown_gray_600_24x24.svg"/>}
              isMulti={false}
              name="dropdownPractice"
              options={dropdownPractice}
              isSearchable={true}
              placeholder="Practice Area"
              onChange={(selectedOption) => setSelectedPracticeArea(selectedOption)}
              value={selectedPracticeArea}
            />
            <Button
              className="bg-gray-900 cursor-pointer flex items-center justify-center min-w-[128px] pl-5 pr-4 py-[17px] rounded-[10px]"
              rightIcon={<Img className="h-5 mt-px mb-[3px] ml-2.5" src="images/img_search_white_a700.svg"/>}
              onClick={handleSearch}
            >
              <div className="font-bold text-left text-lg text-white-A700">Search</div>
            </Button>
          </div>
        
          <div className="flex flex-col px-[120px] w-full">
            {searchCounter > 0 && filtered.length > 0 && (filtered.map((agent, index) => (
                <div key={index} className="flex bg-white-A700 mb-2 border border-bluegray-100 border-solid rounded-[10px] text-gray-750 text-xl px-[25px] py-[5px] tracking-[-0.40px] w-full">
                  <div className="flex items-center justify-center">
                    <Img className="h-[150px] md:h-auto rounded-full py-[5px] mr-4" src={agent.img} />
                    <div className="flex-grow flex-col items-center justify-center w-60">
                      <Text size="txtManropeSemiBold20Gray900">{agent.name}</Text>
                      <Text size="txtManropeSemiBold18Gray900">{agent.qual}</Text>
                      <Text size="txtManropeSemiBold18Gray900">Experience: {agent.exp}</Text>
                    </div>
                    <div className="flex-grow flex-col ml-12 items-center justify-center w-50">
                      <Text size="txtManropeSemiBold20Gray900">Practice Area and Specializations</Text>
                      <Text size="txtManropeSemiBold18Gray900">{agent.practiceArea}</Text>
                    </div>
                    <div className="flex-grow flex-col ml-12 items-center justify-center w-80">
                      <Text size="txtManropeSemiBold20Gray900">Address and Contact</Text>
                      <Text size="txtManropeSemiBold18Gray900">{agent.city}</Text>
                      <Text size="txtManropeSemiBold18Gray900">e-mail: {agent.email}</Text>
                      <Text size="txtManropeSemiBold18Gray900">Phone: {agent.phone}</Text>
                    </div>
                  </div>
                </div>
              )))}        
          </div>
        </div>

        {searchCounter === 0 && (
        <div className="flex flex-row gap-4 justify-between w-[1200px] bg-gray-51 ">
            <div className="flex flex-1 flex-col gap-5 items-start justify-start w-3/4">
                <div className="bg-white-A700 flex flex-col items-start justify-start p-5 sm:px-5 rounded-[16px] w-3/4" style={{ height: '300px' }}>
                  <div className="flex flex-col items-center justify-center w-full">
                    <Img className="h-[100px] md:h-auto rounded-full py-[5px] mr-4" src="images/img_rectangle5623.png"/>
                  </div>
                    <div className="flex flex-col gap-[30px] items-center justify-end w-full">
                        <Text
                          className="leading-[180.00%] max-w-[610px] md:max-w-full text-gray-700 text-lg"
                          size="txtManropeRegular20"
                       >
                        "Expert lawyers Signed up on our platform offer specialized legal services,
                        ensuring tailored solutions"
                        </Text>
                        <Text
                        size="txtManropeSemiBold18Gray900"
                        >
                          - Name1
                        </Text>
                  </div>
                </div>  
              </div>
              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-3/4">
                <div className="bg-white-A700 flex flex-col items-start justify-start p-5 sm:px-5 rounded-[16px] w-3/4" style={{ height: '300px' }}>
                  <div className="flex flex-col items-center justify-center w-full">
                    <Img className="h-[100px] md:h-auto rounded-full py-[5px] mr-4" src="images/img_rectangle5623.png"/>
                  </div>
                    <div className="flex flex-col gap-[30px] items-center justify-end w-full">
                        <Text
                          className="leading-[180.00%] max-w-[610px] md:max-w-full text-gray-700 text-lg"
                          size="txtManropeRegular20"
                       >
                        "Expert lawyers Signed up on our platform offer specialized legal services,
                        ensuring tailored solutions"
                        </Text>
                        <Text
                        size="txtManropeSemiBold18Gray900"
                        >
                          - Name2
                        </Text>
                  </div>
                </div>  
              </div>
              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-3/4">
                <div className="bg-white-A700 flex flex-col items-start justify-start p-5 sm:px-5 rounded-[16px] w-3/4" style={{ height: '300px' }}>
                  <div className="flex flex-col items-center justify-center w-full">
                    <Img className="h-[100px] md:h-auto rounded-full py-[5px] mr-4" src="images/img_rectangle5623.png"/>
                  </div>
                    <div className="flex flex-col gap-[30px] items-center justify-end w-full">
                        <Text
                          className="leading-[180.00%] max-w-[610px] md:max-w-full text-gray-700 text-lg"
                          size="txtManropeRegular20"
                       >
                        "Expert lawyers Signed up on our platform offer specialized legal services,
                        ensuring tailored solutions"
                        </Text>
                        <Text
                        size="txtManropeSemiBold18Gray900"
                        >
                          - Name3
                        </Text>
                  </div>
                </div>  
              </div>
        </div>
        )}
        <p className="mb-4"></p>
      </div>
    </>
  );
};

export default AgentListPage;
