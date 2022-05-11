import styled from 'styled-components';

const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	padding: 0;
	margin: 0;
`;

export const TransparentButton = styled(Button)`
	border: 0px;
	background-color: rgba(0, 0, 0, 0);
`;

export default Button;
