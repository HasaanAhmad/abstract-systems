import React from 'react';
import insta from '../images/insta.png';
import twitter from '../images/twitter.png';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import gmail from '../images/gmail.png';

const UserCard = (props) => {
  return (
    <div className="bg-[#42433E] rounded-lg p-4 inline-block shadow-lg">
      <div className="flex flex-col items-center">
        <img
          src={props.img}
          alt="Profile"
          className="w-40 h-40 rounded-full border-10 border-yellow-500"
        />
        <h2 className="mt-4 text-xl font-bold font-barlow-condensed tracking-widest text-[#F0F0F0]">{props.name}</h2>
        <p className="text-lg text-gray-500 font-barlow-condensed">{props.title}</p>
        <p className="mt-4 w-60 text-center text-[#F0F0F0]">{props.desc}</p>
        <div className="flex items-center mt-6 bg-[#D9D9D9] rounded-lg p-2">
          <img src={gmail} alt="" className="w-6 h-6" />
          <span className="text-[#434343] px-5">{props.mail}</span>
        </div>
        <div className="flex justify-end mt-4 space-x-2">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="" className="w-6 h-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="" className="w-6 h-6" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="" className="w-6 h-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
