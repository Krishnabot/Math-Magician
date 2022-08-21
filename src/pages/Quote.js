import React, { useState, useEffect } from 'react';
import styles from './Quote.module.css';

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
    <div className={styles.quotescontainer}>
      <div className={styles.quotesbox}>
        <div className={styles.quote}>{quote}</div>
        <div className={styles.author}>{author}</div>
        <button type="button" onClick={handleClick} className={styles.newquote}>
          New quote
        </button>
      </div>
    </div>
  );
}

export default Quote;
