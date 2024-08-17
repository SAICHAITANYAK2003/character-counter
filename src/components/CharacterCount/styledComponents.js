import styled from 'styled-components'

export const CharacterCountContainer = styled.div`
    display:flex;
    flex-direction:row;
    height:100vh;

`

export const CharacterCounterContainer = styled.div`
  background-color: #ffc533;
  width:50%;
  padding:20px;
  height:100vh;

`

export const CharacterCounterHeader = styled.div`
 background-color:#ffbf1f;
 padding:20px;
 border-radius:20px;
`

export const HeaderContent = styled.h1`
  font-family:'Roboto';
  color:#272c47;
  font-size:30px;
`

export const CharacterEnterContainer = styled.div`
  background-color: #0f172a;
  width:50%;
  padding:20px;
  height:100vh;
`
export const EnterHeaderContent = styled.h1`
    font-family:'Roboto';
  color: #ffc533;
  font-size:30px;
  text-align:center;
`
export const FormContainer = styled.form`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  padding-top:40px;
  
  @media screen and (max-width:576px){
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:flex-start;
  

  }
  
`

export const CharacterInput = styled.input`
  height:40px;
  width:300px;
  outline:none;
  font-size:15px;

  @media screen and (max-width:576px){
    width:200px;
  }
`

export const AddButton = styled.button`
 height:42px;
 width:100px;
 background-color: #ffc533;
 border:none;
 border-radius:10px;
 outline:none;
 color:272c47;
 font-size:15px;
 
 margin-left:10px;
 cursor:pointer;

`

export const CharacterListContainer = styled.ul`
  padding:20px;
  height:70vh;
  overflow:scroll;
`

export const NoUserInputContainer = styled.div`
  display:flex;
  justify-content:flex-end;
  align-items:flex-end;

  height:60vh;
`

export const NoInputImage = styled.img`
  height:350px;
`
