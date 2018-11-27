import React from 'react';

const User = (props) => (
  <div>
    <h2>Hello, I'm {props.name}!</h2>
    <p>I'm {props.age} years old.</p>
    <style jsx>{`
      div {
        border: 1px solid #eee;
        box-shadow: 0 2px 3px #ccc;
        padding: 20px;
        text-align: center;
      }
    `}</style>
  </div>
)

export default User;