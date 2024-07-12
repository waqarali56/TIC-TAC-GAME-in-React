import logo from './logo.svg';
import './App.css';
import Box from './Components/Box';
import React, { useEffect, useState }  from "react";


function App() {

  const [buttons, setButtons] = useState(["", "", "", "", "","", "", "", ""]);
  const [turn,setTurn]=useState(true);
  
   const [player,setPlayer]=useState('Player 1');
   const [winner,SetWinner]=useState('');



useEffect(()=>{

  if(declearWinner())
    {
      SetWinner(`Congratulations ${player} For Victory`);
    }
},[buttons])

useEffect(()=>{

  if(turn)
  {
    setPlayer('player 1');
  }
  else
  {
    setPlayer('player 0');
  }

},[turn])



   function declearWinner()
   {
    
    
       if(buttons[0] && buttons[0]===buttons[1] && buttons[0]===buttons[2])
       {
     
        return true;
       }
       else if(buttons[3] &&  buttons[3]===buttons[4] && buttons[3]===buttons[5])
       {
       
        return true;
       }
       else if(buttons[6] && buttons[6]===buttons[7] && buttons[6]===buttons[8])
        {
        
         return true;
        }

        else if(buttons[0] && buttons[0]===buttons[3] && buttons[0]===buttons[6])
          {
          
           return true;
          }
          else if(buttons[1] && buttons[1]===buttons[4] && buttons[1]===buttons[7])
          {
          
           return true;
          }
          else if(buttons[2] && buttons[2]===buttons[5] && buttons[2]===buttons[8])
           {
           
            return true;
           }
           else if(buttons[0] && buttons[0]===buttons[4] && buttons[0]===buttons[8])
            {
            
             return true;
            }
            else if(buttons[2] && buttons[2]===buttons[4] && buttons[2]===buttons[6])
              {
             
               return true;
              }

                else
                {
                  return false;
                }


   }

  function writeInBox(index) {

    if(buttons[index] || declearWinner())
      {
       
        return ;
        
      }

    
   

    const newButtons = [...buttons]; 

    
    if(turn)
      {
        newButtons[index]='1';
        setButtons(newButtons);
            setTurn(false);
                  
       
        
      }
      else
      {
        newButtons[index]='0';
        setButtons(newButtons);
        
        setTurn(true);
        
      }


      

    

      
     
  }


  return (
  <>
  
    <div className="container">
     <Box player={player} winner={winner} writeInBox={writeInBox} buttons={buttons}/>
    </div>
  </>
  );
}

export default App;
