 
import React, {useState,useEffect} from "react";
import {Link,withRouter} from "react-router-dom"
import Hamburger from "./Hamburger";



const Header = ({history}) => {
  //state for menu
  const [state,setState] = useState({
    initial:false,
    clicked: null,
    menuName: "Menu"
  });

   

  //state for disabled button
  const [disabled,setDisabled] = useState(false);


  //use effect for page url changes


  useEffect(()=>{
  //listen for page chagnes

    history.listen(()=>{
      setState({clicked:false, menuName: "menu"})
    })
  })




  
  



  const handleMenu = () =>{
    disableMenu();
    if(state.initial === false){
      setState({
        initial:null,
        clicked: true,
        menuName: "Close"
        
      });


    }else if(state.clicked === true){
        setState({
          clicked:!state.clicked,
          menuName:"Menu"
        });
      
      }else if(state.clicked === false){
        setState({
          clicked:!state.clicked,
          menuName:"Close"
        });
       
 
      }
  }




  //determine if the menu button should be disabled for animation fluidity purpose (wait few sec before you can animate again)

  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(()=>{
      setDisabled(false)
    }, 1200)
  }


  return (
  <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div  className="logo">
              <Link   to="/">SENSIDESIGN.</Link>
            </div>
            <div  className="menu">
              <button   style={{fontSize:"1.2rem"}} disabled={disabled} onClick={handleMenu}>Menu</button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state ={state}/>
  </header>
  );
};

export default  withRouter(Header);
