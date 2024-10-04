import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
import { useState } from 'react';
const BtnGroup = () => {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    return (
        <div className="btn-group" role="group">
            <button
                type="button"
                className={cn('btn', 'btn-secondary', 'left', { active: activeButton === 'left' })}
                onClick={() => handleButtonClick('left')}
            >
                Left
            </button>
            <button
                type="button"
                className={cn('btn', 'btn-secondary', 'right', { active: activeButton === 'right' })}
                onClick={() => handleButtonClick('right')}
            >
                Right
            </button>
        </div>
    );
};

export default BtnGroup;
// END
