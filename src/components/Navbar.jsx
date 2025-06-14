import React from 'react'

const Navbar = () => {
  return (
    <div class="container text-center " style={{padding:'5px'}}>
  <div class="row">
    <div class="col m-3 ">
    <img src="/images/brand_logo.png" alt="Logo" />
    </div>
    <div class="col m-3 ">
        <ul class="nav justify-content-center ">
      <li class="nav-item">
        <a class="nav-link active link-secondary" href="#">Menu</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active link-secondary" href="#">Location</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active link-secondary" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active link-secondary" href="#">Contact</a>
      </li>
    </ul>
       </div>
            <div class="col m-3 text-center">
            <button type="button" className="btn btn-danger">Login</button>
          </div>
          </div>

</div>
  )
}

export default Navbar