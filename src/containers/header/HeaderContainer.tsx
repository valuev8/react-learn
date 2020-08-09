import React from 'react';
import Logo from '../../components/logo/Logo';
import styled from 'styled-components';
import Button from '../../components/button/Button';
import { variables } from '@styles/variables.styles';
import SearchBar from '../../components/searchBar/searchBar';

const StyledHeaderWrapper = styled.div`
  padding: 20px;
  min-height: 45vh;
  position: relative;
  background: url('../../assets/img/header-bg.jpeg') 50% 75% no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${variables.colorPrimary};
  box-shadow: 0 -5px 20px 1px ${variables.colorPrimary};
  
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: ${variables.colorBackground};
    opacity: 0.7;
    z-index: 0;
  }
`

const StyledTopSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 1;
`

const StyledBottomSection = styled(StyledTopSection)`
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`
const HeaderContainer = () => (
  <React.Fragment>
    <StyledHeaderWrapper>
      <StyledTopSection>
        <Logo />
        <Button width='150'> + Add Movie</Button>
      </StyledTopSection>
      <StyledBottomSection>
        <SearchBar/>
      </StyledBottomSection>
    </StyledHeaderWrapper>
  </React.Fragment>
);

export default HeaderContainer;
