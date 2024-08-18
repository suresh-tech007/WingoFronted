import React from 'react';

const Gamehistoryatable = ({ row = null, index = null }) => {
  let color = [];

  if (row.selectedNumber === 0) {
    color.push('red', 'purple');
  } else if ([1, 3, 7, 9].includes(row.selectedNumber)) {
    color.push('green');
  } else if (row.selectedNumber === 5) {
    color.push('purple', 'green');
  } else if ([2, 4, 6, 8].includes(row.selectedNumber)) {
    color.push('green');
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
          {color.map((color, i) => (
            <span
              key={i} // Unique key for each color dot
              className={`inline-block w-2 h-2 rounded-full ${
                color === 'red'
                  ? 'bg-red-500'
                  : color === 'green'
                  ? 'bg-green-500'
                  : color === 'purple'
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
