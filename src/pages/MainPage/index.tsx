import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
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

    const { data: testAPI } = useQuery('https://httpbin.org/get');

    useEffect(() => {
        console.log('testAPI : ', testAPI)
    }, [testAPI])

    return <Styled.Wrapper>Main</Styled.Wrapper>;
};

export default MainPage;
