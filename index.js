const Notification = (props) => {
  //  Write your code here.
  const {className,name,src} = props
  const containerClassName = {`notification-cont ${className}`}
  return(
      <div className = {containerClassName}>
          <img className = "icon" src = {src}/>
          <p className = "para">{name}</p>
      </div>
  )
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="container_head">Notifications</h1>
    <div className="notification-cont">
      <div className="blue_container">
       <Notification img src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" className = "icon"/>
       <Notification p className = "para" name= "Information Message"/>
      </div>

      <div className="green_container">
       <Notification img src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" className = "icon"/>
       <Notification p className = "para" name= "Success Message"/>
      </div>

      <div className="yellow_container">
        <Notification img src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" className = "icon"/>
       <Notification p className = "para" name= "Warning Message"/>
      </div>

      <div className="red_container">
        <Notification img src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" className = "icon"/>
       <Notification p className = "para" name= "Error Message"/>
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
