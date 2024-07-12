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

   turn ? setPlayer('player 1'):setPlayer('player 0');
  
},[turn])



   function declearWinner()
   {
  
    const lines=[[0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6]];

                for (let line = 0; line < lines.length; line++) {

                    if(buttons[lines[line][0]] && buttons[lines[line][0]]===buttons[lines[line][1]] && buttons[lines[line][0]]===buttons[lines[line][2]])
                      {
                      return true;
                      }
                    }
         return false;
    
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
