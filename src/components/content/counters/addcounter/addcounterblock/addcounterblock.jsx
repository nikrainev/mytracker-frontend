import React from 'react';
import s from '../addcounter.module.scss';
import {Field, reduxForm} from "redux-form";
import handleSubmit from "redux-form/lib/handleSubmit";


const AddCounterForm = (props) =>{
    const onSubmit = async (values, form)=> {
        props.postCounter(values.counterName, values.counterDomen)

        setTimeout(form.reset, 1)
    };

    const required = value => (value ? undefined : "Обязательно");
    return (
            <form onSubmit={handleSubmit}>
                <Field name="counterName" validate={required} component="input">
                    {({ input, meta }) => (
                            <div>
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                                <input {...input} className='plain_input' type="text" placeholder="Название счётчика" />


                            </div>
                    )}
                </Field>
                <Field name="counterDomen" validate={required} component="input">
                    {({ input, meta }) => (
                            <div>
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                                <input {...input} className='plain_input' type="text" placeholder="Домен" />


                            </div>
                    )}
                </Field>
                <button className='control_button'  type="submit" >Добавить счётчик</button>
            </form>
    )
}


const AddCounterReduxForm = reduxForm({form: 'add-counter'})(AddCounterForm)





const Addcounterblock = (props) =>{


    return (
      <div className="row">
          <div className="col-6"><p>Добавьте ваш счётчик</p>

          </div>
          <div className="col-6">
               <div className={s.addcounter_form}>
                  <AddCounterReduxForm />




              </div>

          </div>
      </div>
    );
}
export default Addcounterblock;