import React from 'react'

function Button({click, children}) {
  return (
    <div>
      <button onClick={click}>{children}</button>
    </div>
  )
};

export default Button;
