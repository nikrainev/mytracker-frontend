import React from "react";
import s from "./pagination.module.scss"




const PaginationComponent = (props) =>{
    let pagesCount = Math.ceil(props.totalPages / props.pageSize)
    let pages =[]
    for(let i=1; i<=pagesCount; i++){
        pages.push(i)
    }
    let pagesButtonsElements = pages.map(page => <button key={page} className={props.currentPage === page ? s.page_button + " " + s.current_page : s.page_button}
             onClick={() => {props.currentPage !== page && props.changePage(page)}}>{page}</button>)
    let buttonsSelector = () =>{
        if (props.pages === 'empty' || pagesCount === 1){
            return (<></>)
        }
        else{
            return   <nav className={s.pages_buttons}>{pagesButtonsElements}</nav>
        }
    }
    return(
            buttonsSelector()
    )
}

const Loader = (props) =>{
    return(
            props.elem
    )
}

export class Pagination extends React.Component{
    state = {
        isFetching: false,
        currentPage: 1,
        pages: this.props.pages
    }
    changePage = (page) =>{
        this.setState({currentPage:page})

        this.props.pageChanger(page)
        this.setState({isFetching:true})
        if(this.props.getCurrentPage){
            this.props.getCurrentPage(page)
        }



    }
    loaders = []
    componentDidUpdate(prevProps, prevState, snapshot) {

        if(prevProps !== this.props){
            this.setState({pages: this.props.pages})
            if(this.props.getCurrentPage === undefined){
                this.setState({isFetching: false})
            }
        else{

                if(this.state.pages !== prevState.pages){

                    this.setState({isFetching: false})
                }

            }


        }
    }

    componentDidMount() {

        for(let i=0; i < this.props.pageSize; i++){

            this.loaders.push(<Loader elem={this.props.loader} key={i} />)
        }

        if(this.props.pages.length === 0){
            this.setState({isFetching: true})
        }
        else{
            this.setState({initialized: true})
        }
    }

    pagesSelector = () =>{
        if(this.state.isFetching){
            return this.loaders
        }
        else{
            if(this.state.pages === 'empty'){
                return this.props.emptyBlock
            }
            else{
                return this.props.pages
            }

        }

    }

    render (){
        return (<>
            {this.pagesSelector()}

                <PaginationComponent currentPage={this.state.currentPage}
                                     pageSize={this.props.pageSize}
                                     totalPages={this.props.totalPages}
                                     changePage={this.changePage}
                                     pages={this.state.pages}
                />
               </> )

    }

}


