import React from 'react';
import s from './addaudience.module.scss';

const Addaudienceblock = (props) =>{
    let clicked  = (event) =>{
        props.deleteCounter(event.target.getAttribute('counterid'))

    }

    let countersOptionsElements = props.countersSelect.map(counter => <option value={counter.counterId}>{counter.counterName}</option> )

    let countersElements = props.counters.filter(counter => counter.counterName != undefined);
        countersElements = countersElements.map(counter => <div  className={s.audience_badge}>
        <svg counterid={counter.counterId} onClick={clicked} height="20px"  version="1.1"
              viewBox="0 0 128 128" width="20px"  xmlns="http://www.w3.org/2000/svg" ><path counterid={counter.counterId} d="M81.646,64l22.248-22.249c3.48-3.48,3.474-9.131-0.019-12.623l-5.006-5.005
                                     c-3.489-3.49-9.142-3.499-12.622-0.019L64,46.354L41.753,24.106c-3.484-3.483-9.133-3.472-12.624,0.018l-5.005,5.005
                                     c-3.491,3.492-3.501,9.14-0.018,12.623L46.354,64L24.108,86.246c-3.483,3.484-3.472,9.133,0.018,12.623l5.005,5.006
                                     c3.492,3.492,9.14,3.502,12.623,0.018L64,81.647l22.247,22.246c3.48,3.481,9.131,3.475,12.622-0.019l5.006-5.006
                                     c3.489-3.489,3.498-9.142,0.019-12.622L81.646,64z" fill="white"/></svg><p>{counter.counterName}</p></div>)
    let name_input = React.createRef();
    let description_input = React.createRef();
    let counters_select = React.createRef();
    let updateNameInput = () =>{
        props.reloadInput(name_input.current.value,'audienceNameInput')

    }
    let updateDescriptionInput = () =>{
        props.reloadInput(description_input.current.value,'audienceDescriptionInput')

    }

    let updateCountersSelect = () =>{
        let counterId = counters_select.current.options[counters_select.current.selectedIndex].value;
        props.reloadSelect(counterId)

    }
    let addCounter = () =>{
        if (props.selectedCounter.counterId == undefined){

        }
        else{
            props.addCounter()
            console.log(props.selectedCounter)
        }


    }
    let addAudience = () =>{
        if(props.nameInput !='' && props.descriptionName !='' && props.counters.length > 1){
            props.addAudience()
        }

    }


    return (
            <div className="row">
                <div className="col-6"><p>Добавьте вашу аудиторию:</p></div>
                <div className="col-6">
                    <div className={s.add_form}>
                        <input type="text" onChange={updateNameInput} value={props.nameInput} ref={name_input} placeholder='Имя счётчика' className='plain_input'/>
                        <textarea name="" onChange={updateDescriptionInput} value={props.descriptionName} ref={description_input} className="plain_textarea" cols="30" rows="10" placeholder='Краткое описание счётчика' />
                        <label htmlFor="">Выберите счётчики:</label>
                        <div className={s.audience_badges}>
                            <div className={s.audience_selector}>
                                <select name="" id="" onClick={updateCountersSelect} ref={counters_select}>
                                    {countersOptionsElements.reverse()}
                                </select>
                                <button onClick={addCounter}>Добавить</button>
                            </div>
                            {countersElements}
                        </div>
                        <button onClick={addAudience} className="control_button">Добавить аудиторию</button>

                    </div>
                </div>
            </div>

    );
}
export default Addaudienceblock;