import React from "react";

const PaginationComponent = (props) =>{
    let pagesCount = Math.ceil(props.totalPages / props.pageSize)
    let pages =[]
    for(let i=1; i<=pagesCount; i++){
        pages.push(i)
    }
    let pagesButtonsElements = pages.map(page => <span className={props.currentPage === page && "current-page"}
                                                       onClick={() => {props.changePage(page)}}>{page}</span>)
    return(
            <div className="pages-buttons">{pagesButtonsElements}</div>
    )
}


export class Pagination extends React.Component{
    state = {
        isFetching: false,
        currentPage: 1
    }
    changePage = (page) =>{
        this.setState({currentPage:page})
        this.props.pageChanger(page)
        this.setState({isFetching:true})
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps !== this.props){
            this.setState({isFetching: false})
        }
    }
    

    render (){
        return (<>
            {this.state.isFetching ? this.props.loader : this.props.pages}

                <PaginationComponent currentPage={this.state.currentPage}
                                     pageSize={this.props.pageSize}
                                     totalPages={this.props.totalPages}
                                     changePage={this.changePage}
                />
               </> )

    }

}


