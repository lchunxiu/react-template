import styled from 'styled-components';

const Title = styled.h2`
    fontSize:1.5em;
    text-align:center;
    color: ${props=>{
        return props.color;
    }};
`;

export default Title;