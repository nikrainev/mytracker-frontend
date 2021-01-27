import React from 'react';
import s from '../addcounter.module.scss';
import { Form, Field } from 'react-final-form'

const Addcounterblock = (props) =>{




    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

    const onSubmit = async (values, form)=> {
        await sleep(300);
        props.postCounter(values.counterName, values.counterDomen)
        setTimeout(form.reset, 1)
    };

    const required = value => (value ? undefined : "Required");






    return (
      <div className="row">
          <div className="col-6"><p>Добавьте ваш счётчик</p>

          </div>
          <div className="col-6">
               <div className={s.addcounter_form}>
                   <Form onSubmit={onSubmit} render={({ handleSubmit, form, submitting, pristine, values }) =>(
                           <form onSubmit={handleSubmit}>
                                <Field name="counterName" validate={required} >
                                    {({ input, meta }) => (
                                            <div>

                                                <input {...input} className='plain_input' type="text" placeholder="Название счётчика" />
                                                {meta.error && meta.touched && <span>{meta.error}</span>}

                                            </div>
                                    )}
                                </Field>
                                <Field name="counterDomen" validate={required} >
                                    {({ input, meta }) => (
                                            <div>

                                                <input {...input} className='plain_input' type="text" placeholder="Домен" />
                                                {meta.error && meta.touched && <span>{meta.error}</span>}

                                            </div>
                                    )}
                                </Field>
                               <button className='control_button'  type="submit" disabled={submitting}>Добавить счётчик</button>
                           </form>
                           
                   )}/>


                   {/* <input onChange={onNameInputChange} type="text" value={props.counterName} placeholder='Название счётчика' ref={name_input}/>
                  <input onChange={onDomenInputChange} type="text" value={props.counterDomen} placeholder='Домен сайта' ref={domen_input}/>
                  <button className='control_button' onClick={Addcounter}>Добавить счётчик</button> */}
              </div>

          </div>
      </div>
    );
}
export default Addcounterblock;