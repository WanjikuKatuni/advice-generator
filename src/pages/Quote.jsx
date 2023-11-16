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
    <div className="quote bg-[#1F2632] h-[100vh] grid place-items-center ">
      <div className="quote-body bg-[#323A49] h-[40vh] w-[35vw] shadow-2xl mt-[-50px] rounded-3xl text-center relative">
        {/* title */}
        <div className="quote-title text-[#52FFA8] uppercase mt-14 mb-6 tracking-[0.25em]">
          ADVICE #{quoteData.id}
        </div>

        {/* quote */}
        <div className="quote-text text-white text-[28px] px-8 mt-9">
          "{quoteData.quote}"
        </div>

        {/* divider */}
        <div className="divider inline-flex items-center justify-center w-full mt-14">
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

        {/* dice icon */}
        <div
          className="dice-icon cursor-pointer h-16 w-16 rounded-full inline-flex absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 items-center justify-center bg-[#52FFA8]"
          style={{
            boxShadow: isHovered
              ? "0 0 15px 15px rgba(82, 255, 168, .3)"
              : "none",
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
