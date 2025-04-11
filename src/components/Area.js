import React,  { useState }  from 'react'

export default function Area(props) {
    const [count, setCount] = useState('ram');
    useState('ram');
  return (
<>
   <h1> Your text  {count}</h1> 
<div className="mb-3">
  
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
</div>

<button className="button">Convert to upper case</button>

</>
  )
}
