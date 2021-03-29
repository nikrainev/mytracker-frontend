import React from "react";
import s from "./loadingschemes.module.scss";
export const CountersListLoader = () =>{
    return (
            <div className="container">
              <div className={s.counters_h1}>
                  <div className={s.h1 +" "+ s.elem} />
                  <div className={s.add_counter +" "+ s.elem} />
              </div>

              <div className={s.counters_table_head +" "+ s.elem} />
              <div className={s.list_ul +" "+ s.elem} />
              <div className={s.list_ul +" "+ s.elem} />
              <div className={s.list_ul +" "+ s.elem} />
              <div className={s.list_ul +" "+ s.elem} />
              <div className={s.page_buttons}>
                  <div className={s.page_button + " " + s.elem} />
                  <div className={s.page_button + " " + s.elem} />
                  <div className={s.page_button + " " + s.elem} />
              </div>
                <div className={s.margin_55px} />
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

export const CounterPageLoader = () =>{
    return(
        <div className="container">
            <div className={s.h1 +" "+ s.elem} />
            <div className={s.counterpage_row + " row"}>
                <div className={s.counter_left}>
                    <div className={s.counter_key_numbers}>
                        <div className={s.counter_key_number +" "+ s.elem}/>
                        <div className={s.counter_key_number +" "+ s.elem}/>
                    </div>
                    <div className={s.counter_desc +" "+ s.elem} />
                    <div className={s.counter_desc +" "+ s.elem} />
                    <div className={s.counter_desc +" "+ s.elem} />
                </div>
                <div className={s.code_block +" "+ s.elem} />
            </div>
            <div className={s.list_ul +" "+ s.elem} />
            <div className={s.list_ul +" "+ s.elem} />
            <div className={s.list_ul +" "+ s.elem} />
            <div className={s.list_ul +" "+ s.elem} />
            <div className={s.load_more_bottom + " " + s.elem} />
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

export const SummaryPageLoader = () =>{
    return(
            <div className="container">
                <div className={s.loading_scheme}>
                    <div className={s.h1 +" "+ s.elem} />
                    <div className={s.day_stat_row}>
                        <div className={s.day_stat + ' ' + s.elem} />
                        <div className={s.day_stat + ' ' + s.elem} />
                    </div>
                    <div className={s.graphic + ' ' + s.elem} />
                    <div className={s.list_ul +" "+ s.elem} />
                    <div className={s.list_ul +" "+ s.elem} />
                    <div className={s.list_ul +" "+ s.elem} />
                    <div className={s.list_ul +" "+ s.elem} />
                    <div className={s.list_ul +" "+ s.elem} />
                    <div className={s.load_more_bottom + " " + s.elem}></div>
                </div>


            </div>
    )
}

export const UserPageLoader = () =>{
    return (
            <div className="container">
                <div className={s.loading_scheme}>
                    <div className={s.h1 +" "+ s.elem} />
                    <div className={s.user_stat_row}>
                        <div className={s.user_main_block +" "+ s.elem} />
                        <div className={s.user_main_block +" "+ s.elem} />
                    </div>

                    <div className={s.user_h3 +" "+ s.elem} />
                    <div className={s.user_blocks_row}>
                        <div className={s.user_block +" "+ s.elem} />
                        <div className={s.user_block +" "+ s.elem} />
                        <div className={s.user_block +" "+ s.elem} />
                    </div>

                    <div className={s.user_h3 +" "+ s.elem} />
                    <div className={s.user_blocks_row}>
                        <div className={s.user_block +" "+ s.elem} />
                        <div className={s.user_block +" "+ s.elem} />
                        <div className={s.user_block +" "+ s.elem} />
                    </div>

                    <div className={s.user_h3 +" "+ s.elem} />
                    <div className={s.user_block_col_12 +" "+ s.elem} />

                </div>
            </div>
    )
}