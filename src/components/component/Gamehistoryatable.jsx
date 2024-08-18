import React from 'react';

const Gamehistoryatable = ({ row = null }) => {
  let colors = [];

  const generateUniqueId = () => {
    return Math.random().toString(36).substr(2, 9); // Generates a random string as a unique ID
  };

  const pushColorWithId = (colorName) => {
    colors.push({ id: generateUniqueId(), color: colorName });
  };

  if (row.selectedNumber === 0) {
    pushColorWithId('red');
    pushColorWithId('purple');
  } else if ([1, 3, 7, 9].includes(row.selectedNumber)) {
    pushColorWithId('green');
  } else if (row.selectedNumber === 5) {
    pushColorWithId('purple');
    pushColorWithId('green');
  } else if ([2, 4, 6, 8].includes(row.selectedNumber)) {
    pushColorWithId('green');
  }

  return (
    <tr className="bg-[#2b3270]">
      <td className="py-2 px-4 border-gray-300">{row.Game_id}</td>
      <td className="py-2 px-4 border-gray-300">{row.selectedNumber}</td>
      <td className="py-2 px-4 border-gray-300">
        {row.selectedNumber > 4 ? 'Big' : 'Small'}
      </td>
      <td className="py-2 px-4 border-gray-300">
        <div className="flex space-x-1 justify-center">
          {colors.map((colorObj) => (
            <span
              key={colorObj.color} 
              className={`inline-block w-2 h-2 rounded-full ${
                colorObj.color === 'red'
                  ? 'bg-red-500'
                  : colorObj.color === 'green'
                  ? 'bg-green-500'
                  : colorObj.color === 'purple'
                  ? 'bg-purple-500'
                  : ''
              } mx-1`}
            ></span>
          ))}
        </div>
      </td>
    </tr>
  );
};

export default Gamehistoryatable;
