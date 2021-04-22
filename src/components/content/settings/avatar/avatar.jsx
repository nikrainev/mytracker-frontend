import React, {useState, useRef, useEffect} from 'react';
import profileIcon from '../../../../assets/icons/menu/profile.svg'
import LoadingIcon from '../../../../assets/icons/loading.svg'
import styled from "styled-components";

const AvatarBlock = styled.div`
        display: flex;
        justify-content: ${props => props.isRegForm ? "space-between" : "flex-start"};
        flex-direction: ${props => props.isRegForm ? "row" : "column"};
        align-items: center;
    `
const PhotoWr = styled.div`
        width: ${props => props.isRegForm  ? "70px" : "120px"};
        height: ${props => props.isRegForm  ? "70px" : "120px"};
        border: 2px solid #c1c1c1;
        background: #dcdcdc;
        display: flex;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
        margin-bottom: ${props => props.isRegForm ? "0px" : "10px"};
        overflow: hidden;
        position: relative;
    `

const EmptyIcon = styled.img`
        width: 50px;
    `
const AvatarImage = styled.img`
        width: 100%;
    `
const HiddenInput = styled.input`
        display: none;
    `

const AddButton = styled.button`
        color: #0499e0;
        display: block;
        background: transparent;
        cursor: pointer;
        border: none;
        outline: none;
        font: inherit;
        margin: ${props => props.isRegForm ? "0px" : "auto"};;
        
    `
const ValidationDanger = styled.p`
        color: red;
        font-size: 15px;
        
`
const FetchingBlock = styled.div`
    background: rgba(256,256,256, 0.7);
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
}

    &:after{
        content: url(${LoadingIcon});
        animation: fetching 2s infinite;
        display: block;
        width: 24px;
        height: 24px;
        
    }
    @keyframes fetching {
         from {transform: rotate(0deg)}
         to {transform: rotate(360deg)}
     }
`


const TextWr = styled.div`
  width: ${props => props.isRegForm ? "calc(100% - 100px)" : "auto"};
  text-align: ${props => props.isRegForm ? "left" : "center"};  
`


const Avatar = (props) =>{
    let [imagePreviewUrl, setImagePreviewUrl] = useState(null)
    let [validationDanger, setValidationDanger] = useState(null)
    let [isFetching, setIsFetching] = useState(false)
    let hiddenInput = useRef(0)



    let onClickHandler = () =>{
        hiddenInput.current.click()
    }

    useEffect(()=>{
        setImagePreviewUrl(null)
        setIsFetching(false)
    },[props.avatar])

    let handleImageChange = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        setValidationDanger('')
        if(file){
            reader.readAsDataURL(file);
        }
        else{
            return
        }

        reader.onloadend = () => {
            if(file.size > 5*1024*1024){
                setValidationDanger('Максимальный размер файла — 5мб')
            }
            else if(file.type !== 'image/jpeg' && file.type !=='image/png'){
                setValidationDanger('Можно загрузить только jpg или png')
            }
            else{
                props.updateAvatar(file)
                setImagePreviewUrl(reader.result)
                setIsFetching(true)
            }


        }
    }



    let photoSelector = () =>{
        if(imagePreviewUrl){
            return <AvatarImage  src={imagePreviewUrl} alt=""/>
        }
        else if(props.avatar === 'none'){
            return <EmptyIcon src={profileIcon} alt="Загрузите аватар"/>
        }
        else{
            return <AvatarImage  src={props.avatar} alt="Аватар"/>
        }
    }



    return(

            <AvatarBlock isRegForm={props.isRegForm}>
                <PhotoWr isRegForm={props.isRegForm}>
                    {photoSelector()}
                    {isFetching === true ? <FetchingBlock /> :''}
                </PhotoWr>
                <TextWr isRegForm={props.isRegForm}>
                    {validationDanger && <ValidationDanger>{validationDanger}</ValidationDanger>}
                    <AddButton isRegForm={props.isRegForm} onClick={()=>(onClickHandler())}>Добавить фото</AddButton>
                </TextWr>



                <form >
                    <HiddenInput  ref={hiddenInput}
                            accept="image/jpeg,image/png"
                            type="file"
                            onChange={(e) => handleImageChange(e)}
                    />

                </form>

            </AvatarBlock>
    )

}




export default Avatar;