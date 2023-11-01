import React from 'react'
export default function About(props) {
  return (

    <div className="accordion my-3 mx-3" id="accordionExample" style={{color: props.Mode ==="light"?"black":"white"}}>
        <h1>About TextUtils:</h1>
      <div className="accordion-item" style={{backgroundColor: props.Mode ==="light"?"white":"#2C3E50",color: props.Mode ==="light"?"black":"white"}}>
        <h2 className="accordion-header" >
          <button style={{backgroundColor: props.Mode ==="light"?"white":"#2C3E50",color: props.Mode ==="light"?"black":"white"}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseTwo">
            Aim:
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <strong>Out aim is to make user's life easier by helping you edit your texts.</strong>  To empower users with a versatile and efficient text utility website that simplifies and enhances their text-related tasks, fostering productivity and creativity.
          </div>
        </div>
      </div>
      <div className="accordion-item" style={{backgroundColor: props.Mode ==="light"?"white":"#2C3E50",color: props.Mode ==="light"?"black":"white"}}>
        <h2 className="accordion-header" >
          <button style={{backgroundColor: props.Mode ==="light"?"white":"#2C3E50",color: props.Mode ==="light"?"black":"white"}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Contact Us:
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{backgroundColor: props.Mode ==="light"?"white":"#2C3E50",color: props.Mode ==="light"?"black":"white"}}>
          <div className="accordion-body">
            <ul>
                <li><strong>Email:</strong> thegodfatheryash@gmail.com</li>
                <li><strong>Phone no:</strong> 6367132341</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

