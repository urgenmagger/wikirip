import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Friends from "./components/Friends/Friends";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Addburial from "./components/Addburial/Addburial";
import mainPage from "./components/mainPage/mainPage";
import BurialDetail from "./components/BurialDetail/BurialDetail";
import {BrowserRouter, Route} from "react-router-dom";
//let SomeComponentDialogs =  () => <Dialogs /> ;
const App = (props) => {
   
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/> 
				 
				<Navbar/>
                <div class='app-wrapper-content'>
                   {/* <Route path='/dialogs' component={Dialogs}/> 
                    <Route path='/profile' component={Profile}/> */
                   /* - тоже работает но рендер вроде шустрее */} 
                    <Route path='/dialogs' 
                        render={ () => <Dialogs state={props.state.dialogsPage } /> }/>
                    <Route path='/profile' 
                        render={ () => <Profile state={props.state.profilePage} /> }/>  
                    <Route path='/friends' 
                            render={ () => <Friends state={props.state.sidebar } /> }/>  
					<Route path='/login' component={Login}/>       
					<Route path='/registration' component={Registration}/>   
					<Route path='/addburial' component={Addburial}/>    
					<Route path='/burialdetail' component={BurialDetail}/>      
                    <Route exact path='/' component={mainPage}/>       
                </div>
            </div>
			
        </BrowserRouter>)
}

export default App;