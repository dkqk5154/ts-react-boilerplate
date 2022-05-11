import styled from 'styled-components';

export interface ColumnProps {
	width: number;
}

const Column = styled.div<ColumnProps>`
	display: flex;
	align-items: center;
	width: ${({ width }) => width}%;
`;

export default Column;
