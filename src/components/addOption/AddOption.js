import React, { useState } from 'react'

const AddOption = ({
    props
}) => {

    const [option, setOption] = useState(0) 

    const handleAddOption = ()=>{
        setOption(option++)
        console.log("option", option)
    }

  return (
    <div className='addOptionContainer container'>
         <button className="btn btn-primary w-100 h-100 customButton" onClick={()=> handleAddOption()}>
          +<span className="spanTag">Add Image File Here</span>
        </button>
    </div>
  )
}

export default AddOption 