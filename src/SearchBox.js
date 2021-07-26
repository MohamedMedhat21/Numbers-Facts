import React from 'react';

const Searchbox = ({ searchChange, solve }) => {
    return (
        <div className='pa2'>
            <div>
                <input
                    type='search'
                    placeholder='enter a number'
                    className='pa3 ba b--red'
                    onChange={searchChange} />
            </div>
            <div>
                <button onClick={solve} className='link black dim ph4 pv2 mb2 dib white bg-hot-pink br4 bn mt3' style={{outline:0}}>Submit</button>
            </div>
        </div>
    );
}

export default Searchbox;