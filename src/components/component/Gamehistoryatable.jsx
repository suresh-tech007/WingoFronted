import React from 'react'

const Gamehistoryatable = ({row=null,index=null}) => {
   
  let color = [];
  if(row.selectedNumber==0  ){
    color.push("red","purple")
   
  }
  else if( row.selectedNumber ===(1||3||7||9)){
    color.push("green")
   

  }
  else if( row.selectedNumber===5){
    color.push("purple","green")
     

  }else if(row.selectedNumber ===(2||4||6||8)){
    color.push("green")
     
  }
   
  return (
    <tr key={index} className="bg-[#2b3270]">
    <td className="py-2 px-4   border-gray-300">{row.Game_id}</td>
    <td className="py-2 px-4   border-gray-300">{row.selectedNumber}</td>
    <td className="py-2 px-4   border-gray-300">{row.selectedNumber > 4 ? "Big" : "Small"}</td>
    <td className="py-2 px-4   border-gray-300">
      <div className="flex space-x-1 justify-center">
        {/* {row.selectedNumber==0 && () } */}
        {color.map((color, i) => (
        
          <span
            key={i}
            className={`inline-block w-2 h-2 rounded-full ${color == 'red' ? 'bg-red-500' : color == 'green' ? 'bg-green-500' :color == 'purple'? 'bg-purple-500' : ""} mx-1`}
          >
              
          </span>
        ))}
      </div>
    </td>
  </tr>
  )
}

export default Gamehistoryatable;