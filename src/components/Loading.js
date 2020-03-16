import React from 'react';
import ReactLoading from 'react-loading';

const Loading = () => {
    return (
        <div className='loading-wrapper'>
            <ReactLoading
                className='loading-component'
                type='spinningBubbles'
                color='#FFFFF'
                height='4rem'
                width='4rem'
            />
        </div>
    )
}
export default Loading;