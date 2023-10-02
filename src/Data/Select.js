import React, { useState, useEffect} from 'react';

const baseUrl = 'https://backend.getlinked.ai'


const Select = () => {
  const [selectedOption, setSelectedOption] = useState();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from your API endpoint using baseUrl
    fetch(`${baseUrl}/hackathon/categories-list`)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []); // I
   
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
            Select
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

export default Select;
