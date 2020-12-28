import React, { useState } from 'react';


export const SerachForm = ({handleSearch}) => {

    const [byName, setByName] = useState("");

    const onSubmit = e => {
        e.preventDefault();
            handleSearch(byName);
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="byname"></label>
                    <input
                        type="search"
                        id="byname"
                        placeholder="Enter a name..."
                        value={byName}
                        onChange={e => setByName(e.target.value)}
                    />        
                    <button className="btn">Search By Name</button>
                </div>
        
            </form>
        </>
    )
}
