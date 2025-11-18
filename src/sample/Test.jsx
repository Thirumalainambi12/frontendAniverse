import React from 'react'
import Button from './Button';

function Test(props) {
  return (
    <div>
        {props.name}
        <Button click={props.alert}>Click</Button>
    </div>
  )
};

export default Test;


axios.get('http://localhost:4000/users', {
            params: {
              email: email,
              password: password,
            },
          });