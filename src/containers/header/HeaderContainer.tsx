import React from 'react';
import Logo from '../../shared/components/logo/Logo';
import styled from 'styled-components';
import { variables } from '@styles/variables.styles';
import SearchBar from '../../shared/components/searchBar/searchBar';
import ModalLauncher from '../../shared/components/modal/ModalLauncher';
import CreateEditMovieModal from '../../components/modals/CreateEditMovieModal';

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
        <ModalLauncher label='+ Add Movie' width='150' modalHeader='Create Movie'>
          <CreateEditMovieModal />
        </ModalLauncher>
      </StyledTopSection>
      <StyledBottomSection>
        <SearchBar/>
      </StyledBottomSection>
    </StyledHeaderWrapper>
  </React.Fragment>
);

export default HeaderContainer;
