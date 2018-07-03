import React, { Component } from 'react';
import{ Layout,Header, Navigation, Drawer, Content, Grid,Cell } from 'react-mdl';
import './App.css';
import Main from './components/Main';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return(
      <div className="demo-big-content">
      <Layout>
          <Header title={ <Link style={{textDecoration:'none', color:'white'}} to="/"> Smart Attendence System</Link>} scroll>
              <Navigation>
                  <Link to="/dashboard">Dashboard</Link>
                  <Link to="/login">Log in</Link>
                  <Link to="/signup">Sign up</Link>

              </Navigation>
          </Header>
          <Drawer title={ <Link style={{textDecoration:'none', color:'grey' ,fontSize:'16px',fontFamily: 'Arvo'}} to="/"> Smart Attendence System</Link>}>
              <Navigation>
                  <Link style={{fontFamily:'Arvo'}} to="/dashboard">Dashboard</Link>
                  <Link  style={{fontFamily:'Arvo'}} to="/login">Log in</Link>
                  <Link style={{fontFamily:'Arvo'}}  to="/signup">Sign Up</Link>

              </Navigation>
          </Drawer>
          <Content >
              <div className="page-content" />
              <Main />
            </Content>

      </Layout>

</div>
    );
  }
}

export default App;
