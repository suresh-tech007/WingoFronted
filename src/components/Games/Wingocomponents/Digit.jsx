import React from 'react'

const Digit = ({value=""}) => {
    if(value===" "){
return;
    }
    return (
        <div className="w-[1.4rem] p-1 text-[1rem]  text-center bg-blue-950 ">
          {value}
        </div>
      );
}

export default Digit