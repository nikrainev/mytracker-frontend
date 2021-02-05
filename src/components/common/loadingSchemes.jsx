import React from "react";
import s from "../profile/login/login.module.scss";
export const CountersListLoading = () =>{
    return (

           <div className={s.loading_scheme}>
              <div className={s.add_button +" "+ s.elem} />
              <div className={s.counters_table_head +" "+ s.elem} />
              <div className={s.list_ul +" "+ s.elem} />
              <div className={s.list_ul +" "+ s.elem} />
              <div className={s.list_ul +" "+ s.elem} />
              <div className={s.list_ul +" "+ s.elem} />
              <div className={s.list_ul +" "+ s.elem} />
              <div className={s.page_buttons}>
                  <div className={s.page_button + " " + s.elem} />
                  <div className={s.page_button + " " + s.elem} />
                  <div className={s.page_button + " " + s.elem} />
              </div>
           </div>

    )

}