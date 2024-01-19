export const blackPrimary = '#161513';
export const blackSecondary = '#1C1C22';

export const whitePrimary = '#F0F2F5';
export const whiteSecondary = '#FFFFFF';

export const gradientFirst = '#B16CEA';
export const gradientSecond = '#FF5E69';
export const gradientThird = '#FF8A56';
export const gradientFourth = '#FFA84B';

export const gradientTextStyle = {
	backgroundImage: `linear-gradient(to right,  
    ${gradientFirst}, ${gradientSecond}, ${gradientThird}, ${gradientFourth})`,
	backgroundClip: 'text',
	WebkitBackgroundClip: 'text',
	color: 'transparent',
	textFillColor: 'transparent',
};

export const gradientBackgroundStyle = {
	background: `linear-gradient(to right,  
    ${gradientFirst}, ${gradientSecond}, ${gradientThird}, ${gradientFourth})`,
};

export const buttonRemoveStyle = {
	background: 'none',
	color: 'inherit',
	border: 'none',
	padding: '0',
	font: 'inherit',
	cursor: 'pointer',
	outline: 'inherit',
};

export const titleFontSize = {
	xs: 32,
	sm: 40,
	md: 56,
	lg: 64,
	xl: 64,
};

export const defaultFontSize = {
	xs: 15,
	sm: 15,
	md: 15,
	lg: 15,
	xl: 15,
};

export const buttonFontSize = {
	xs: 12,
	sm: 13,
	md: 15,
	lg: 15,
	xl: 15,
};

export const profilePictureSize = {
	xs: 175,
	sm: 200,
	md: 225,
	lg: 225,
	xl: 225,
};
