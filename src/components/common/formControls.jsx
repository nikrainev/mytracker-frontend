import React from "react";
export const Input = ({
                                input,
                                label,
                                type,
                                meta
                            }) =>{
    return (
            <div>
                <div>
                    <input {...input} placeholder={label} type={type} />
                    {meta.touched && meta.error && <span>"error"</span> }
                </div>
            </div>
    )

}

