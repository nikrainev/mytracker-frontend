import React from 'react';
import s from '../addcounter.module.scss';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../../common/formControls";
import {required} from "../../../../../utils/validation";

const AddCounterForm = (props) =>{
    return (
            <form onSubmit={props.handleSubmit}>
                {props.error ? <span className={s.form_danger}>{props.error}</span> : ''}
                <div className={props.isFetching === true ? s.loading_bar + " " + s.active : s.loading_bar}></div>
                <Field name="counterName" type="text"  component={Input} placeholder="Название счётчика" validate={required}/>
                <Field name="counterDomen" type="text"  component={Input} placeholder="Домен" validate={required}/>
                <button className='control_button' disabled={props.submitting || props.error}  type="submit" >Отправить</button>
            </form>
    )
}

const AddCounterReduxForm = reduxForm({form: 'addcounter-form'})(AddCounterForm)




const Addcounterblock = (props) =>{
    const onSubmit = (values) =>{
        props.postCounter(values.counterName, values.counterDomen)
    }

    return (
      <div className="row">
          <div className="col-6"><p>Добавьте ваш счётчик</p>

          </div>
          <div className="col-6">
               <div className={s.addcounter_form}>
                  <AddCounterReduxForm onSubmit={onSubmit}/>
              </div>

          </div>
      </div>
    );
}
export default Addcounterblock;