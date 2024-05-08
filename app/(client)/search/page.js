'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

const SearchResults = () => {
    const router = useRouter();
    const { query } = router.query;


    return (
        <div>
            <h1>Search Results for "{query}"</h1>
        </div>
    );
};

export default SearchResults;
