import React, { useState } from 'react';
import Refresh from './assets/desktop/icon-refresh.svg';
import './quotes.css';

function Quotes() {
    const [quote, setQuote] = useState(
        'Limitations live only in our minds. But if we use our imaginations, our possibilites become limitless.'
    );
    const [author, setAuthor] = useState('Jamie Paolinetti');

    const fetchQuotes = async () => {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        setQuote(data.content);
        setAuthor(data.author);
    };

    return (
        <div className="quote-container">
            <section className="quote">
                <p>{quote}</p>
                <p className="author bold">{author}</p>
            </section>
            <div onClick={fetchQuotes}>
                <img className="refresh" src={Refresh} alt="" />
            </div>
        </div>)
}