import React from 'react';

const Description = props => {
    return (
        <div style={descriptionStyle}>
            <span>{props.children}</span>
        </div>
    )
}

const descriptionStyle = {
    color: '#646464',
    marginBottom: '20px'
}

export default Description