export default function SignUp(){
    return(
        <>
        <div>
            <h2>SIGN UP FORM</h2>
        </div>
        <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" placeholder="name@example.com"/>
      </div>
      <div class="mb-3">
        <label for="fname" class="form-label">First Name</label>
        <input type="text" class="form-control" id="fname" placeholder=""/>
      </div>
      <div class="mb-3">
        <label for="lname" class="form-label">Last Name</label>
        <input type="text" class="form-control" id="lname" placeholder=""/>
      </div>
      <div class="mb-3">
        <label for="pasword" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" placeholder="cd"/>
      </div>
    
        </>
    )
}