import React from "react";
import s from "./common.module.scss";
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

export const FriendsPageLoader = () =>{
    return(
            <div className={s.loading_scheme}>
               <div className={s.text_line + " " + s.elem} />
                <div className={s.h2 + " "+ s.elem} />
                <div className={s.list}>
                    <div className={s.big_ul+" "+ s.elem} />
                    <div className={s.big_ul+" "+ s.elem} />
                    <div className={s.big_ul+" "+ s.elem} />
                </div>
                <div className={s.h2 + " "+ s.elem} />
                <div className={s.list}>
                    <div className={s.big_ul+" "+ s.elem} />
                    <div className={s.big_ul+" "+ s.elem} />
                    <div className={s.big_ul+" "+ s.elem} />

                    <div className={s.page_buttons}>
                        <div className={s.page_button + " " + s.elem} />
                        <div className={s.page_button + " " + s.elem} />
                        <div className={s.page_button + " " + s.elem} />
                    </div>
                </div>

            </div>
    )
}