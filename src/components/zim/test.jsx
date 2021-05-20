/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
// import ReactDOM from 'react-dom';

const ZimFrame = () => {            
  const didMountRef = React.useRef(false);
  const message = 'React + ZIM';
  const rectWidth = 200;
  let stage;
  let rect;
  const drawRect = () => {
      rect.center(); // centers and adds to ZIM stage (when no container parameter)
      stage.update();  
  };
  const addWidth = () => {
      // widthOnly is the ZIM property 
      // setting width would proportionally set the height 
      rect.widthOnly += 10;
      rect.center(); // optional
      stage.update();   
  };
  const subWidth = () => {
      rect.widthOnly -= 10;
      rect.center();
      stage.update();    
  };    

  // const frame = new window.Frame("root", 300, 200, window.red);

  React.useEffect(()=> {

      if (didMountRef.current) {
          // don't rerender
      } else {
          const frame = new window.Frame("root", 300, 200, window.green);
          frame.on("ready", () => {
              
              stage = frame.stage;   

              rect = new window.Rectangle(rectWidth, 150, window.purple);  // this gets added by the React code              

              stage.update(); // if there was something to update - which there is not in this simple example
          });
          
          didMountRef.current = true;
      }
     
  });
  
  return (
      <div>
          <div>{message}</div>
          <button onClick={e => drawRect()}>Add Rect</button>
          <button onClick={e => subWidth()}>-</button>
          <button onClick={e => addWidth()}>+</button>
      </div>
  );
}


export const wrapper = () => {
  return (
      <React.Fragment>
          <ZimFrame/>
      </React.Fragment>
  );
}
// ReactDOM.render(wrapper(), document.getElementById('root'));
// export default wrapper();

