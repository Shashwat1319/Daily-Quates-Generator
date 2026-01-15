import React from "react";

const TodayQuotes = () => {
  const quote = "Honesty is the best policy.";
  const author = "Shashwat Srivastava";
  return (
    <section className="mx-8 mt-4 drop-shadow-xl">
      <div className="bg-slate-100 text-slate-900  border-4 rounded-xl p-8 text-center">
        
        <h2 className="text-5xl font-bold mb-6">
          Quote of the Day
        </h2>

        <hr className="border-gray-400 mb-8" />

        <blockquote className="text-6xl italic text-blue-700 mb-8">
          “{quote}”
        </blockquote>

        <hr className="border-gray-400 mb-6" />

        <p className="text-3xl italic">
          — {author}
        </p>

      </div>
    </section>
  );
};

export default TodayQuotes;
