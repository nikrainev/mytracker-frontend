import React from 'react';
import s from '../addcounter.module.scss';


const Addcounterblock = (props) =>{
    let name_input = React.createRef();
    let domen_input = React.createRef();

    let Addcounter = () =>{
       if(props.counterName !=='' && props.counterDomen !==''){
           props.addCounter();
       }
    };

    let onNameInputChange = () =>{
        props.reloadInput(name_input.current.value,'counterNameInput')
    }
    let onDomenInputChange = () =>{
        props.reloadInput(domen_input.current.value,'counterDomenInput')
    }



    return (
      <div className="row">
          <div className="col-6"><p>Добавьте ваш счётчик</p></div>
          <div className="col-6">
              <div className={s.addcounter_form}>
                  <input onChange={onNameInputChange} type="text" value={props.counterName} placeholder='Название счётчика' ref={name_input}/>
                  <input onChange={onDomenInputChange} type="text" value={props.counterDomen} placeholder='Домен сайта' ref={domen_input}/>
                  <button className='control_button' onClick={Addcounter}>Добавить счётчик</button>
              </div>

          </div>
      </div>
    );
}
export default Addcounterblock;