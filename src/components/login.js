import React, {Component} from 'react';
import { Grid,Cell,Textfield, Button} from 'react-mdl';


 class Login extends Component{
   constructor(props) {
    super(props);
    this.state={
      username: ' ',
      paasword: ' '
    }
    this.handleSignup=this.handleSignup.bind(this);
    }
    handleSignup(){
      console.log(this.state)
  }
   render() {
     return(
       <div className="login-box">
<Grid>
<Cell col={12}>
<h1>Log In</h1>
</Cell>
<Cell col={12}>
  <Textfield
    onChange={(e)=>this.setState({username: e.target.value})}
    label="Username..."
    floatingLabel

/>
<br/>
  <Textfield
      onChange={(e)=>this.setState({password: e.target.value})}
      label="Password..."
      floatingLabel
  />
<br/>
  <Button raised colored onClick={this.handleSignup}>Login</Button>

</Cell>
</Grid>
       </div>
     )
   }
 }
 export default Login;
