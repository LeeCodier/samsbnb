
import '../styles/Signup.css';

export const Signup = () => {
  return (
    <div className="container">

        <div className="details_below">
        Please enter details below:
        </div>
         
      <form method="post" action="#">
          <div className="input">

          <div className="form">
             <label for="first_name">First Name</label>
             <input type="text" placeholder="John" name="first_name" id="first_name"/>
            </div>

            <div className="form">
             <label for="first_last">Last Name</label>
             <input type="text" placeholder="Doe" name="last_name" id="first_name"/>
            </div>


             <div className="form">
             <label for="email_">Email</label>
             <input type="email" placeholder="Example@gmail.com" name="email" id="email"/>
             </div>

             <div className="form">
             <label for="phone_number">Phone Number</label>
             <input type="int" placeholder="123 456 7890" name="phone_number" id="phone_number"/>
             </div>

             <div className="form">
             <label for="password">Password</label>
             <input type="password" placeholder="Password"name="password" id="password"/>
           </div>
            
             <div className="form">
             <label for="re_password">Re-enter password</label>
             <input type="re_password" placeholder='Re-enter password' name="re_password" id="re_password"/>
             </div>
        
          </div>
          

           <div className="btn">
           <button className="sbtn" type="submit">Sign Up</button>
           <label className="alm">already a member? login</label>
           </div>



          </form>
        

      </div>
      


  );
};


