import React from 'react';
import styled from 'styled-components';

const Styled = {
	Wrapper: styled.div`
		display: flex;
		height: 100%;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	`,
};

const MainPage = (): JSX.Element => {
	return <Styled.Wrapper>Main</Styled.Wrapper>;
};

export default MainPage;
