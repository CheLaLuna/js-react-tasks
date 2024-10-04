import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
const Alert = ({ text, type }) => {
    const alertClass = cn('alert', `alert-${type}`);

    return (
        <div className={alertClass} role="alert">
            {text}
        </div>
    );
};

export default Alert;
// END
