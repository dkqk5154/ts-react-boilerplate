import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';

const NavLink = styled(RouterNavLink)`
	&.active {
		background-color: var(--primary5);
		font-weight: bold;
	}
`;

export default NavLink;
