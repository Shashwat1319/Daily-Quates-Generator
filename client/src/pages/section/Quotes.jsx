import React from "react";




const Quotes = () => {

    const quotes = [
  {
    id: 1,
    text: "Honesty is the best policy.",
    author: "Benjamin Franklin",
  },
  {
    id: 2,
    text: "Discipline is choosing between what you want now and what you want most.",
    author: "Abraham Lincoln",
  },
  {
    id: 3,
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    id: 4,
    text: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    id: 5,
    text: "If you are not willing to risk the usual, you will have to settle for the ordinary.",
    author: "Jim Rohn",
  },
  {
    id: 6,
    text: "First learn then remove l",
    author:"Aman Singh"
  }
];


  return (
    <section className="mx-8 mt-6 grid gap-6 md:grid-cols-2">
      {quotes.map((quote) => (
        <div
          key={quote.id}
          className="bg-slate-100 border rounded-xl p-6 shadow"
        >
          <p className="text-2xl italic mb-4">
            “{quote.text}”
          </p>
          <p className="text-right text-lg font-semibold">
            — {quote.author}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Quotes;
