import styled from "styled-components";

const NewsWrap = styled.div`
width: 100vw;
display: flex;
align-items: center;
flex-direction: column;
border: 1px solid black
`

const NewsCardWrap = styled.div`
width: 90vw;
&:not(:last-child) {
    margin-bottom: 10px;
}
`

export {NewsWrap, NewsCardWrap} 