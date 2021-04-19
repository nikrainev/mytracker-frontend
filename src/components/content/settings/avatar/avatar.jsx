import React, {useState, useRef} from 'react';
import profileIcon from '../../../../assets/icons/menu/profile.svg'
import styled from "styled-components";

const Avatar = (props) =>{
    let [file, setFile] = useState(null)
    let [imagePreviewUrl, setImagePreviewUrl] = useState(null)
    let hiddenInput = useRef(0)

    const AvatarBlock = styled.div`
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: center;
    `
    const PhotoWr = styled.div`
        width: 120px;
        height: 120px;
        border: 2px solid #c1c1c1;
        background: #dcdcdc;
        display: flex;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        overflow: hidden;
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

    `

    let onClickHandler = () =>{
        hiddenInput.current.click()
    }



    let handleImageChange = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.readAsDataURL(file);
        reader.onloadend = () => {
            props.updateAvatar(file)
            setFile(file)
            setImagePreviewUrl(reader.result)
        }
    }

    let photoSelector = () =>{
        if(imagePreviewUrl){
            return <AvatarImage  src={imagePreviewUrl} alt=""/>
        }
        else if(props.avatar === 'none'){
            return <EmptyIcon src={profileIcon} alt=""/>
        }
        else{
            return <AvatarImage  src={props.avatar} alt=""/>
        }
    }



    return(

            <AvatarBlock>
                <PhotoWr>
                    {photoSelector()}
                </PhotoWr>
                <AddButton onClick={()=>(onClickHandler())}>Добавить фото</AddButton>

                <form >
                    <HiddenInput  ref={hiddenInput}
                            type="file"
                            onChange={(e) => handleImageChange(e)}
                    />

                </form>

            </AvatarBlock>
    )

}




export default Avatar;