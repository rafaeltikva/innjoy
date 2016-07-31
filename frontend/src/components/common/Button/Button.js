import React, {PropTypes} from 'react'

require('./Button.scss');

const Button = ({children, href, className}) => {
    console.log('rendering Button');

    return (
        <button className={className}>
            {children}
        </button>

    );
};

Button.propTypes = {
    children: PropTypes.node,
    href: PropTypes.string,
    className: PropTypes.string
};

export default Button;