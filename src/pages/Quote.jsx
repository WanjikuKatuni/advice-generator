
import React, { useState } from "react";

export default function Quote() {
  // hover
  const [isHovered, setHovered] = useState(false);

  // api data
  const [quoteData, setQuoteData] = useState({ id: "198", quote: "Sing in the shower" });

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();

      const slip = data.slip;
      setQuoteData({ id: slip.id, quote: slip.advice });
    } catch (error) {
      console.error("Error fetching quote", error);
    }
  };

  return (
    <div className="quote bg-[#1F2632] h-screen grid place-items-center ">
      <div className="quote-body bg-[#323A49] h-[35vh] w-[80vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw] 2xl:w-[25vw] shadow-2xl mt-[-50px] rounded-3xl text-center relative">
        {/* title */}
        <div className="quote-title text-[#52FFA8] uppercase mt-14 mb-6 tracking-[0.25em]">
          ADVICE #{quoteData.id}
        </div>

        {/* quote */}
        <div className="quote-text text-white text-[18px] md:text-[24px] lg:text-[28px] xl:text-[28px] 2xl:text-[28px] px-4 sm:px-8 md:px-12 lg:px-12 xl:px-12 2xl:px-12 mt-6">
          "{quoteData.quote}"
        </div>

        {/* divider */}
        {window.innerWidth > 766 ? (

        <div className="divider-desk inline-flex items-center justify-center w-full mt-6">
          <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
              <g transform="translate(212)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>
        </div>
        ) : null}

    {window.innerWidth < 766 ? (

        <div className="divider-mobile inline-flex items-center justify-center w-full mt-6"> 
            <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
        </div>
    )
    :
    null}

        {/* dice icon */}
        <div
          className="dice-icon cursor-pointer h-12 w-12 sm:h-16 sm:w-16 rounded-full inline-flex absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 items-center justify-center bg-[#52FFA8]"
          style={{
            boxShadow: isHovered ? "0 0 15px 15px rgba(82, 255, 168, .3)" : "none",
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={fetchData}
        >
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
              fill="#202733"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
