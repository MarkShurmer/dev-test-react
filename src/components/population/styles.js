import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 1rem;
`;

const ChildLhs = styled.div`
    width: 20%;
    height: 10%;
    margin: 1rem;
`;

const ChildRhs = styled.div`
    width: 70%;
    height: 10%;
    margin: 1rem;
`;

const StyledSelect = styled.select`
    min-width: 60%;
`;

const StyledLabel = styled.label`
  font-size: ${props => props.theme.fontSize.normal};
  font-family: ${props => props.theme.baseFontFamily};
  font-weight: ${props => props.theme.headerFontWeight};
  line-height: ${props => props.theme.fontSize.normal};
  color: ${props => props.theme.color.baseFont};
  margin: ${props => props.theme.marginHalf};
`;

const StyledError = styled.div`
    font-size: ${props => props.theme.fontSize.normal};
    font-family: ${props => props.theme.baseFontFamily};
    font-weight: ${props => props.theme.headerFontWeight};
    line-height: ${props => props.theme.fontSize.normal};
    border-radius: 0.3rem;
    border-width: 1px;
    background: red;
    color: white;
    padding: 1rem;
`;

export {
  StyledLabel, Container, ChildLhs, ChildRhs, StyledSelect, StyledError,
};
