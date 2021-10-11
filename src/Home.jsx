import { useState } from 'react';
import './App.css';





function Home() {
    const [txt,settxt]=useState("");
    const [Items,setitems]=useState(['Bananas']);
    
    const gettodo = (event) => {
        settxt(event.target.value);
      };
    const listOfItems=()=>{
      if(txt!=="")
      {
        setitems((olditems)=>{
            return [...olditems,txt];
            
        });
        
      }
      const inp=document.getElementById('inp');
      inp.value="";
      settxt("");
      
        
        
    };
    const deleteItems=(id)=>{
        //console.log(id);

        return setitems((olditems)=>{
            return olditems.filter((Items,index)=>{
                return index!==id;
            });
        });
    }
    const UpItems=(j)=>{
      if(j!==0)
      {
      setitems(array => {
        let data = [...array];
        let temp = data[j-1];
        data[j-1] = data[j];
        data[j] = temp;
        console.log(data);
        return data ;
    });
    }
        
    }
    const DownItems=(j)=>{
      if(j!==Items.length-1)
      {
      setitems(array => {
        let data = [...array];
        let temp = data[j];
        data[j] = data[j+1];
        data[j+1] = temp;
        // console.log(data);
        return data ;
    });
    }
        
    }

  return (
    <div id="home">
      <h1>Todo List</h1>
      <br></br>
      <div id="txtarea">
      <input type="text" name="inp" id="inp" placeholder="Add Todo_s" onChange={gettodo}/>

      <button id="add" onClick={listOfItems}><i className="fas fa-plus"></i></button>
      <ol>
          {
              Items.map((item,idx)=>{
                  return <div className="line"><button  onClick={()=>{
                    deleteItems(idx)
                  }}><i className="fas fa-trash-alt"></i></button><li key={idx}>{item}</li>
                  <button 
                  onClick={()=>{
                    UpItems(idx)
                  }}><i className="fas fa-angle-double-up"></i></button>
                  <button 
                  onClick={()=>{
                    DownItems(idx)
                  }}><i className="fas fa-angle-double-down"></i></button>
                  </div>;
              })
          }
      </ol>
     
      </div>
    </div>
  );
}

export default Home;
