import React from "react";
import s from "./common.module.scss"
const LoadMoreComponent = (props) =>{
    let pagesCount = Math.ceil(props.totalPages / props.pageSize)
    const buttonSelector = () =>{
        console.log(props.pages)
        if(props.pages === 'empty' || props.inizialized === false){
            return (<></>)
        }
        else if(pagesCount > props.currentPage){
            return <button className={s.load_more +" attractive-button"} onClick={()=>{props.changePage(props.currentPage+1)}}>Загрузить ещё</button>
        }
        else{
            return <button disabled className={s.all_loaded}>Загружены все записи</button>
        }
    }

    return(
            buttonSelector()

    )
}


export class LoadMore extends React.Component{
    state = {
        isFetching: false,
        currentPage: 1,
        pages: this.props.pages,
        initialized: false
    }
    changePage = (page) =>{
        this.setState({currentPage:page})

        this.props.pageChanger(page, this.props.pageSize)
        this.setState({isFetching:true})
        if(this.props.getCurrentPage){
            this.props.getCurrentPage(page)
        }



    }
    loaders = []
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps !== this.props){
            this.setState({pages: this.props.pages})
            this.setState({isFetching: false})
            this.setState({initialized: true})
        }
    }

    componentDidMount() {

        for(let i=0; i < this.props.pageSize; i++){
            this.loaders.push(this.props.loader)
        }
        this.setState({isFetching: true})
    }

    render (){
        return (<>
            {this.state.isFetching && this.state.pages !== 'empty' ? [this.loaders,this.props.pages] : this.props.pages}

            <LoadMoreComponent   currentPage={this.state.currentPage}
                                 pageSize={this.props.pageSize}
                                 totalPages={this.props.totalPages}
                                 changePage={this.changePage}
                                 pages={this.state.pages}
                                 inizialized={this.state.initialized}
            />
        </> )

    }

}


