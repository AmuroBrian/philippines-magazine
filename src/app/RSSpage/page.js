'use client';

import React, { useEffect, useState } from 'react';
import RssFeed from '../components/RssFeed';

export default function Page() {
  // State for storing the fetched RSS feed items
  const [feedItems, setFeedItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Technology');

  // Fetch the RSS feed from the server directly
  useEffect(() => {
    const fetchFeed = async (category) => {
      const feedUrl = category === 'Technology'
        ? 'https://data.gmanetwork.com/gno/rss/scitech/technology/feed.xml'
        : 'https://data.gmanetwork.com/gno/rss/sports/basketball/feed.xml';
        
      const res = await fetch(feedUrl);
      const xml = await res.text();

      // Parse the XML to extract RSS feed items
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xml, 'application/xml');
      const items = Array.from(xmlDoc.getElementsByTagName('item')).map((item) => ({
        title: item.getElementsByTagName('title')[0]?.textContent,
        description: item.getElementsByTagName('description')[0]?.textContent,
        link: item.getElementsByTagName('link')[0]?.textContent,
      }));

      setFeedItems(items);
    };

    fetchFeed(selectedCategory);  // Fetch the feed based on the selected category
  }, [selectedCategory]); // The effect runs whenever selectedCategory changes

  return (
    <div>
      {/* Category Buttons */}
      <div className="mb-4">
        <button 
          onClick={() => setSelectedCategory('Technology')}
          className={`px-4 py-2 mr-2 rounded ${selectedCategory === 'Technology' ? 'bg-blue-500 text-black' : 'bg-gray-200'}`}
        >
          Technology
        </button>
        <button
          onClick={() => setSelectedCategory('Sports')}
          className={`px-4 py-2 rounded ${selectedCategory === 'Sports' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Sports
        </button>
      </div>

      {/* Feed Component */}
      <RssFeed feedItems={feedItems} />
    </div>
  );
}
