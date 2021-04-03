import React, {useEffect} from 'react';
import s from './signup.module.scss';
import {Route, Redirect} from "react-router-dom";
import {BackGround} from "../../common/background";

import RegistrationContainer from "./registration/registrationContainer";
import ConfirmEmailContainer from "./confirmEmail/confirmEmailContainer";
import AdditionalInfoContainer from "./additionalInfo/additionalInfoContainer";
import Success from "./success/success";









const SignUpBlock = (props) => {

    let redirectCallBack = () =>{
        switch (props.regStage){
            case '':{
                return <Redirect to='/signup'/>
            }
            case 'confirm email':{
                return <Redirect to='/signup/confirm_email' />
            }
            case 'additional_information':{
                return <Redirect to='/signup/additional_info' />
            }
            case 'registered':{
                return <Redirect to='/signup/success' />
            }
            default:{
                return <Redirect to='/signup'/>
            }
        }
    }




    return  (
            <>
            <BackGround />
                <div className="fullpage_container">
                    <div className={s.signup_block}>
                        <Route exact path='/signup' render={()=><RegistrationContainer />}/>
                        <Route exact path='/signup/confirm_email/' render={()=><ConfirmEmailContainer />}/>
                        <Route path='/signup/additional_info' render={()=><AdditionalInfoContainer />} />
                        <Route path='/signup/success' render={()=><Success />} />
                        {redirectCallBack()}

                    </div>
                </div>
                </>



    );
}
export default SignUpBlock;

