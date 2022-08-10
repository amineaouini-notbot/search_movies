import React, {useState} from 'react';

const Search = ()=>{
    const [name, onTyping]= useState('');
    const onSearch = ()=>console.log(name)
    return (
        <div>
            <div id='movies_form'>
                
                <h5 >Movies Search:</h5>
                <input type='text' id='search_input' onClick={(e)=>onTyping(e.target.value)}></input>
                <button onClick={onSearch}>Search</button>
            </div>
        </div>
    )
}

export default Search;