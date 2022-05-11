import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	min-width: ${(props) => props.theme.screen.mobile}px;
	max-width: ${(props) => props.theme.screen.desktop}px;
	font-size: var(--font-size5);
	margin: 0 auto;
`;

export default Container;
