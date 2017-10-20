import React from 'react';

function Person({ firstname, age, working }) {
  return (
    <div>
      <p>Je me présente, je m'appel {firstname}</p>
      <p>J'ai {age} ans.</p>
      <p>et je travaille actuellement sur {working}</p>
    </div>
  );
}

export default Person;
