import React, { useState } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({ articles }) {
    const [articlesDetails, setArticles] = useState(articles);

    const upVotedHandler = () => {
        const ar = [...articlesDetails];
        const sortData = ar.sort((a,b)=> b.upvotes - a.upvotes);
        setArticles(sortData);
    }

    const recentHandler = () => {
        const ar = [...articlesDetails];
        const sortData = ar.sort((a,b)=> new Date(b.date) - new Date(a.date));
        setArticles(sortData);
    }


    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small"
                    onClick={upVotedHandler}>Most Upvoted</button>
                <button data-testid="most-recent-link" className="small"
                    onClick={recentHandler}>Most Recent</button>
            </div>
            <Articles articles={articlesDetails} />
        </div>
    );

}

export default App;
