import React, {PropTypes} from 'react';
import NavLink from '../NavBar/NavLink/NavLink'
import classNames from 'classnames'

require('./Icon.scss');

const Icon = ({src, alt, className, children }) => {

    let img = (src) ?
        <img src={src} alt={alt} className={classNames(className)} />
        : undefined;

    let fontIcon = <i className={classNames(className)} aria-hidden="true"></i>;

    console.log('the className:', className);

    return (typeof(className) === 'object') ? fontIcon : img;

};

Icon.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    children: PropTypes.node
};

export default Icon;