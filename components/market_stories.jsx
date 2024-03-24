import React from 'react';

const MarketStories = () => {
  // Dummy data for market stories
  const marketStories = [
    {
      id: 1,
      imageUrl: 'https://media.glassdoor.com/l/41931/national-stock-exchange-of-india-office.jpg',
      title: 'Market Story 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      imageUrl: 'https://www.financialexpress.com/wp-content/uploads/2023/08/BSE-PTI-2.jpg?w=1024',
      title: 'Market Story 2',
      content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    },
  ];

  return (
    <div className="w-full ml-72 mt-5 p-4">
      <h1 className="text-goindiaRed text-3xl text-uppercase font-sans font-bold mb-4">MARKET STORIES</h1>
      <div className="w-1/2">
        <div className="w-full">
          {marketStories.map(story => (
            <div key={story.id} className="mb-4 bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4">
                <img src={story.imageUrl} alt={story.title} className="w-full h-auto mb-2" />
                <h2 className="text-gray-900 font-bold mb-2">{story.title}</h2>
                <p className="text-gray-800">{story.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketStories;