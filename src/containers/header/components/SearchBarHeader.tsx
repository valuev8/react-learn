import React, {FC} from 'react';
import Logo from '../../../shared/components/logo/Logo';
import CreateEditMovieModal from '../../../components/modals/CreateEditMovieModal';
import SearchBar from '../../../shared/components/searchBar/searchBar';
import styled from 'styled-components';
import {Movie} from '../../../shared/models/movie.type';

const StyledTopSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 1;
`;

const StyledBottomSection = styled(StyledTopSection)`
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;
type SearchBarHeaderProps = {
  onConfirm: (movie: Partial<Movie>) => void;
}

const SearchBarHeader: FC<SearchBarHeaderProps> = ({onConfirm}) => (
  <React.Fragment>
    <StyledTopSection>
      <Logo />
      <CreateEditMovieModal type='create' onConfirm={ onConfirm } />
    </StyledTopSection>
    <StyledBottomSection>
      <SearchBar/>
    </StyledBottomSection>
  </React.Fragment>
);

export default SearchBarHeader;
