import React, { useState, useEffect } from 'react';

// const baseUrl = '{{baseUrl}}/hackathon/categories-list'; 

const SelectOption = () => {
  const [selectedOption, setSelectedOption] = useState();
  const [categories, setCategories] = useState([]);

  const baseUrl = 'https://backend.getlinked.ai'

  useEffect(() => {
    // Fetch categories from your API endpoint
    fetch(`${baseUrl}/hackathon/categories-list`)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, [baseUrl]); 

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div>
        <select
          className="selection"
          value={selectedOption}
          onChange={handleOptionChange}
        >

          <option className="" value="">
            Select your category
          </option>
          {categories.map((category) => (
            <option className="" value={category.id} key={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SelectOption;
