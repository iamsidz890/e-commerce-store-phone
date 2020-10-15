import styled from 'styled-components';



export const ButtonContainer = styled.button`
text-transform: capitalize;
color: ${props=>props.cart? "var(--mainYellow)": "var(--lightBlue)"};
font-size: 1.4rem;
background:transparent;
border:0.05rem solid var(--lightBlue);
border-color:${props=>props.cart? "var(--mainYellow)" : "var(--lightBlue)"};
border-radius: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all ease-in-out;
&:hover{
    background: ${prop=>prop.cart?"var(--mainYellow)":"var(--lightBlue)"};
    color: var(--mainBlue);
}
&:focus{
    outline:none;
}
`;
