import React, { useState } from 'react';
import { Button, Img, Input, CheckBox } from "components";
import {  useNavigate } from 'react-router-dom';
import { WriteUsers, uploadImage } from "firebase.js"

function YourComponent() {
  const [error, setError] = useState('');
  const [fullName, setFullName] = useState('');
  const [address, setaddress] = useState('');
  const [emailAddress, setemailAddress] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [qualification,setqualification] = useState('');
  const [fieldOfExpertise,setfieldofExpertise] = useState('');
  const [yearsOfExperience,setyearsOfExperience] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const history =useNavigate();
  

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
      alert('Please select a JPG or PNG image.');
    }
  };

  const handleNameChange = (event) => {
    setFullName(event.target.value);
  };
  const handleaddresschange = (event) =>{
    setaddress(event.target.value);
  }
  const handleemailchange = (event) =>{
    setemailAddress(event.target.value)
  }
  const handlephoneNumberChange = (event) => {
    const inputValue = event.target.value;
    setphoneNumber(event.target.value);
    const phoneRegex = /^\d{10}$/; 
    if (!phoneRegex.test(inputValue)) {
      setError('Please enter a valid 10-digit phone number');
    } else {
      setError('');
    }
  };
  const handlequalificationchange = (event) => {
    setqualification(event.target.value)
  }
  const handlefieldOfExpertisechange = (event) => {
    setfieldofExpertise(event.target.value)
  }
  const handleyearsOfExperiencechange = (event) => {
    setyearsOfExperience(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const imageUrl = selectedFile ? await uploadImage(selectedFile) : null;
    try {
      await WriteUsers('users', {
        name: fullName,
        city: address,
        email: emailAddress,
        phone: phoneNumber,
        qual: qualification,
        practiceArea: fieldOfExpertise,
        exp: yearsOfExperience,
        img: imageUrl
      });

      console.log('Document written');
    alert('form submitted succesfully')
    history('/list')
    } catch (error) {
        console.error('Error adding document: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-3 items-start justify-start w-full">
        <Input
          name="textfieldlarge"
          placeholder="Full Name"
          className="font-semibold p-0 placeholder:text-gray-600 sm:pr-5 text-gray-600 text-left text-lg w-full"
          wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pl-4 pr-[250px] py-[17px] rounded-[10px] w-full"
          type="text"
          required
          value={fullName}
          onChange= {handleNameChange}
          prefix={
            <Img
              className="mt-auto mb-px h-6 mr-3.5"
              src="images/img_user.svg"
              alt="user"
            />
          }
        />
         <Input
          name="textfieldlarge_One"
          placeholder="City"
          className="font-semibold p-0 placeholder:text-gray-600 sm:pr-5 text-gray-600 text-left text-lg w-full"
          wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pl-4 pr-[250px] py-[17px] rounded-[10px] w-full"
          type="text"
          required
          value={address}
          onChange = {handleaddresschange}
          prefix={
            <Img
            className="mt-auto mb-px h-6 mr-3.5"
            src="images/img_location.svg"
            alt="location"
            />
          }
        />
        <Input
          name="textfieldlarge_One"
          placeholder="Email Address"
          className="font-semibold p-0 placeholder:text-gray-600 sm:pr-5 text-gray-600 text-left text-lg w-full"
          wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pl-4 pr-[35px] py-[17px] rounded-[10px] w-full"
          type="email"
          required
          value={emailAddress}
          onChange={handleemailchange}
          prefix={
            <Img
            className="mt-auto mb-px h-6 mr-3.5"
            src="images/img_mail_gray_600_24x24.svg"
            alt="mail"
            />
          }
        />
        <Input
          name="textfieldlarge_Two"
          placeholder="Phone Number"
          className="font-semibold p-0 placeholder:text-gray-600 sm:pr-5 text-gray-600 text-left text-lg w-full"
          wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pl-4 pr-[35px] py-[17px] rounded-[10px] w-full"
          type="tel"
          required
          value={phoneNumber}
          onChange={handlephoneNumberChange}
          prefix={
            <Img
                className="mt-auto mb-px h-6 mr-3.5"
                src="images/img_call.svg"
                alt="call"
            />
          }
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Input
          name="textfieldlarge_Two"
          placeholder="Qualification"
          className="font-semibold p-0 placeholder:text-gray-600 sm:pr-5 text-gray-600 text-left text-lg w-full"
          wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pl-4 pr-[35px] py-[17px] rounded-[10px] w-full"
          type="text"
          required
          onChange={handlequalificationchange}
          value={qualification}
          prefix={
            <Img
                src="https://img.icons8.com/ios/50/graduation-cap.png" 
                alt="graduation-cap"
                className="mt-auto mb-px h-6 mr-3.5"
            />
          }
        />
        <Input
          name="textfieldlarge_Two"
          placeholder="Practice Area and Specialization"
          className="font-semibold p-0 placeholder:text-gray-600 sm:pr-5 text-gray-600 text-left text-lg w-full"
          wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pl-4 pr-[35px] py-[17px] rounded-[10px] w-full"
          type="text"
          required
          onChange={handlefieldOfExpertisechange}
          value={fieldOfExpertise}
          prefix={
            <Img
            src="https://img.icons8.com/ios/50/courthouse.png" 
            alt="courthouse"
            className="mt-auto mb-px h-6 mr-3.5"
            />
          }
        />
        <Input
          name="textfieldlarge_Two"
          placeholder="Experience in Years"
          className="font-semibold p-0 placeholder:text-gray-600 sm:pr-5 text-gray-600 text-left text-lg w-full"
          wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pl-4 pr-[35px] py-[17px] rounded-[10px] w-full"
          type="number"
          required
          value={yearsOfExperience}
          onChange={handleyearsOfExperiencechange}
          prefix={
            <Img
            src="https://img.icons8.com/ios/50/knowledge-sharing.png" 
            alt="knowledge-sharing"
            className="mt-auto mb-px h-6 mr-3.5"
            />
          }
        />
        <label className="bg-white-A700 border border-bluegray-100 border-solid flex pl-4 pr-[35px] py-[17px] rounded-[10px] w-full relative">
        <input
          type="file"
          className="hidden"
          onChange={handleFileChange}
          accept="image/jpeg, image/png"
        />
        <Img
          src="https://img.icons8.com/material-rounded/24/attach.png"
          alt="attach"
          className="h-6 mr-3.5 cursor-pointer"
        />
        <span className="font-semibold p-0 placeholder:text-gray-600 sm:pr-5 text-gray-600 text-left text-lg w-full">
          {selectedFile ? selectedFile.name : 'Attach Image (JPG/PNG)'}
        </span>
      </label>
      {selectedFile && (
        <span className="text-gray-600 text-left text-lg">
          Attached file: {selectedFile.name}
        </span>
      )}
        <CheckBox
              className="font-bold sm:pr-5 text-gray-900 text-left text-lg"
              inputClassName="border-2 border-gray-900 border-solid h-[18px] mr-[5px] rounded w-[18px]"
              required
              name="checkbox"
              id="checkbox"
              label="I confirm all the provided information is accurate."
        ></CheckBox>
        <Button type="submit"
          className="bg-gray-900 cursor-pointer font-semibold py-[17px] rounded-[10px] text-base text-center text-white-A700 w-full">
          Submit
        </Button>
      </div>
    </form>
  );
}

export default YourComponent;