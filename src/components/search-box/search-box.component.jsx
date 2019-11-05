import React from 'react';
import './search-box.styles.css';


{/* Using search value here we updating searchField state */}

export const SearchBox= ({placeholder,handleChange}) =>(
     <input className='search' type='search' 
     placeholder={placeholder}
     onChange={handleChange} />
);