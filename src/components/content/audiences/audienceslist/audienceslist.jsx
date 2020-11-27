import React from 'react';
import s from './audienceslist.module.scss';
import Shortaudience from "./shortaudience/shortaudience";
const Audienceslist = (props) =>{

    let shortAudienceElements = props.audiences.map(audience => <Shortaudience name={audience.name}
                                                                                  description={audience.description}
                                                                                  countersNames={audience.counters}
                                                                                  totalUsers={audience.totalusers}
                                                                                  usersnow={audience.usersnow}
                                                                                  status={audience.status}
    />)
    return (

                <div className="container">
                    Ваши аудитории:
                    <div className={s.audiencelist}>
                        {shortAudienceElements}
                    </div>
                </div>


    );
}
export default Audienceslist;