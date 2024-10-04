import React from 'react';
import cn from 'classnames';

// BEGIN (write your solution here)
import { useState } from 'react';

const Collapse = ({ text, opened = true }) => {
  const [isOpen, setIsOpen] = useState(opened);

  const toggleCollapse = () => {
      setIsOpen(!isOpen);
  };

  return (
      <div>
          <p>
              <a
                  className="btn btn-primary"
                  href="#"
                  role="button"
                  aria-expanded={isOpen}
                  data-bs-toggle="collapse"
                  onClick={(e) => {
                      e.preventDefault();
                      toggleCollapse();
                  }}
              >
                  Link with href
              </a>
          </p>
          <div className={cn('collapse', { show: isOpen })}>
              <div className="card card-body">
                  {text}
              </div>
          </div>
      </div>
  );
};

export default Collapse;
// END
