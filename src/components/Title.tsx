import React from 'react';

const titleStyles: React.CSSProperties = {
    color: 'rgb(107, 255, 15)',
    textAlign: 'center',
    fontSize: '3rem',
};

const Title: React.FC = () => {
    return (
        <h1 className='press-start-2p' style={titleStyles}>Hello</h1>
    );
};

export default Title;