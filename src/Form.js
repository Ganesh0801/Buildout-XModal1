import React,{useState} from 'react';
import "./Form.css"
import Detail from './Detail';

const Form = () => {
    const [renderForm, setRenderForm] = useState(null);

    const handleShow = () => {
      setRenderForm(!renderForm);
    };

  return (
    <div>
    <div className="App" onClick={()=>{
      handleShow()
    }}>
      <h2>User Details Modal</h2>
      <button onClick={handleShow} className="Btn">
        Open Form
      </button>
      </div>
      <div>
      {renderForm ? <Detail /> : null}
        </div>
      </div>   
  )
}

export default Form




