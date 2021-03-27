import React from "react";
import s from "./common.module.scss"
import {Button} from "./formControls";
import styled from "styled-components"

const LoadMoreButton = styled(Button)`
margin: auto;
margin-bottom: 15px;
max-width: 210px;
padding: 11px 30px 12px 30px;
`


const LoadMoreComponent = (props) =>{
    let pagesCount = Math.ceil(props.totalPages / props.pageSize)
    const buttonSelector = () =>{
        if(props.pages === 'empty' || props.inizialized === false || props.pages.length < props.pageSize){
            return (<></>)
        }
        else if(pagesCount > props.currentPage){
            return <LoadMoreButton onClick={()=>{props.changePage(props.currentPage+1)}}>Загрузить ещё</LoadMoreButton>
        }
        else{
            return <LoadMoreButton disabled >Загружены все записи</LoadMoreButton>
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
        if(this.props.pages.length === 0){
            this.setState({isFetching: true})
        }
        else{
            this.setState({initialized: true})
        }
    }
    pagesSelector = () =>{
        if(this.state.isFetching && this.state.pages !== 'empty'){
            return [this.props.pages, this.loaders]
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


