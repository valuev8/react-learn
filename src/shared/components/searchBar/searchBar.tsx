import React, { ChangeEvent, useEffect, useState } from 'react';
import Button from '../button/Button';
import styled from 'styled-components';
import { variables } from '@styles/variables.styles';
import { Link, useLocation } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { applySearch } from '../../../store/movies/action';

const StyledInput = styled.input`
  background: ${ variables.colorBackground };
  color: ${ variables.colorPrimary };
  border-radius: 3px;
  padding: 15px;
  height: 30px;
  border: 1px solid ${ variables.colorPrimary };
  box-shadow: 0 0 10px 0 ${ variables.colorPrimary };
  margin: 0 10px;
  width: 400px;
  transition: all .2s;
  
  &:focus::placeholder {
    opacity: 0;
  }
  
  &:hover, &:focus {
    outline: none;
    border: 1px solid ${ variables.colorPrimary };
    box-shadow: 0 0 20px 1px ${ variables.colorPrimary };
  }
  
  &::placeholder {
    color: ${ variables.colorPrimary };
    opacity: .7;
  }
`
const SearchBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const searchQueryValue = new URLSearchParams(location.search).get('title');
  const [searchValue, setValue] = useState<string>(searchQueryValue || '');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const onSearch = () => {
    dispatch(applySearch(searchValue));
  }

  // need to show initial search results
  useEffect(() => {
    onSearch();
  }, [])

  return (
    <React.Fragment>
      <StyledInput type='search'
                   placeholder='What do you want to watch?'
                   value={searchValue}
                   onChange={handleChange}/>
      <Link
        to={{
          pathname: "/movies",
          search: searchValue ? `?title=${searchValue}` : '',
        }}>
        <Button theme='solid' height='33' width='150' onClick={onSearch}> Search </Button>
      </Link>
    </React.Fragment>
  );
}

export default connect()(SearchBar);
