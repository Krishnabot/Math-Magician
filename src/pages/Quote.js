import React, { useState, useEffect } from 'react';

function Quote() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const getQuotes = () => {
    const fetchQuote = 'https://moldovean.github.io/apps/quote/json/quotes.json';
    fetch(fetchQuote)
      .then((res) => res.json())
      .then((data) => {
        const quote = data.quotes;
        const randomQuote = data.quotes[Math.floor(Math.random() * quote.length)];

        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      });
  };
  useEffect(() => {
    getQuotes();
  }, []);

  const handleClick = () => {
    getQuotes();
  };

  return (
    <div className="quotes-container">
      <div id="quotes-box">
        <div id="text">{quote}</div>
        <div id="author">
          {' '}
          {author}
        </div>
        <button type="button" onClick={handleClick} id="new-quote">
          New quote
        </button>
      </div>
    </div>
  );
}

export default Quote;
