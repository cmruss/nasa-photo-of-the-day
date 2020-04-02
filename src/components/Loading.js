import React from 'react';
import ReactLoading from 'react-loading';

const Loading = () => {
    return (
        <div className='loading-wrapper'>
            <ReactLoading
                className='loading-component'
                type='spin'
                color='#2BAD60'
                style={{   
                    minHeight: '100%',
                    minWidth: '100%',
                    objectFit: 'cover', 
                    position: 'absolute',
                    right: 0,
                }}
            />
        </div>
    )
}
export default Loading;