import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const Styled = {
	Wrapper: styled.div`
		display: flex;
		align-items: center;
		justify-content: center;
		height: 80vh;
	`,
	Spinner: styled(animated.div)<{ size: string }>`
		margin: 0 auto;
		width: ${(props) => props.size};
		height: ${(props) => props.size};
		border: 0.35rem solid #ffffff;
		border-radius: 50%;
		border-top-color: #3082f2;
	`,
};

interface SpinnerInterface {
	size?: string;
	isLoading?: boolean;
	children?: React.ReactNode;
}

const Spinner = ({
	size = '100%',
	isLoading = true,
	children,
}: SpinnerInterface): JSX.Element => {
	const spinnerSpin = useSpring({
		loop: true,
		from: { rotateZ: 0 },
		to: { rotateZ: 360 },
		config: { duration: 450 },

		// speed: 1000,
	});
	return isLoading ? (
		<Styled.Wrapper>
			<Styled.Spinner style={spinnerSpin} size={size} />
		</Styled.Wrapper>
	) : (
		<>{children}</>
	);
};

export default Spinner;
