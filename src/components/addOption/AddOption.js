import React, { useState } from 'react'

const AddOption = ({
    props
}) => {

    const [option, setOption] = useState(false) 

    const handleAddOption = ()=>{
        setOption(!option)
        console.log("option", option)
    }

  return (
    <div>
         <button className="btn btn-primary w-100 h-100" onClick={()=> handleAddOption()}>
          +<span>Add Image File Here</span>
        </button>
    </div>
  )
}

export default AddOption 