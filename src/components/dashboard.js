import React, {Component} from 'react';
import{ Layout,Header, Navigation, Drawer, Content, Footer,FooterSection,FooterLinkList } from 'react-mdl';
import {Link} from 'react-router-dom';
import Settings from './setting';
import Dialogue from './dialouge';



 class Dashboard extends Component{
   render(){
     return(
       <div style={{height: '600px', position: 'relative'}}>
           <Layout style={{background: 'url(http://www.newsrondonia.com.br/imagensNoticias/image/Callcenter_Campaign.jpg) center / cover'}}>
               <Header transparent title="Dashboard" style={{color: 'black'}}>
                 <Navigation>
                     <Link to="/" style={{color:'black'}}>Back</Link>
                     <Link style={{color:'black'}} to = "/setting" >Settings </Link>

                     <Dialogue />
                 </Navigation>
               </Header>
             </Layout>

        </div>





     )
   }
 }
 export default Dashboard;
