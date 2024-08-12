import React from 'react'

const Gamehistoryatable = ({row=null,index=null}) => {
  return (
    <tr key={index} className="bg-[#2b3270]">
    <td className="py-2 px-4   border-gray-300">{row.period}</td>
    <td className="py-2 px-4   border-gray-300">{row.number}</td>
    <td className="py-2 px-4   border-gray-300">{row.bigSmall}</td>
    <td className="py-2 px-4   border-gray-300">
      <div className="flex space-x-1 justify-center">
        {row.color.map((color, i) => (
          <span
            key={i}
            className={`inline-block w-2 h-2 rounded-full ${color === 'red' ? 'bg-red-500' : color === 'green' ? 'bg-green-500' : 'bg-purple-500'} mx-1`}
          ></span>
        ))}
      </div>
    </td>
  </tr>
  )
}

export default Gamehistoryatable;