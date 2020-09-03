import React from 'react';
import Logo from '../../../shared/components/logo/Logo';
import ModalLauncher from '../../../shared/components/modal/ModalLauncher';
import CreateEditMovieModal from '../../../components/modals/CreateEditMovieModal';
import SearchBar from '../../../shared/components/searchBar/searchBar';
import styled from 'styled-components';

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

const SearchBarHeader = () => (
  <React.Fragment>
    <StyledTopSection>
      <Logo />
      <ModalLauncher label='+ Add Movie' width='150' modalHeader='Create Movie'>
        <CreateEditMovieModal />
      </ModalLauncher>
    </StyledTopSection>
    <StyledBottomSection>
      <SearchBar/>
    </StyledBottomSection>
  </React.Fragment>
);

export default SearchBarHeader;
