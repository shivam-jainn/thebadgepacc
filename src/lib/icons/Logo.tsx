import { IconSvgProps } from "@/types/IconSvgProps";


export const Logo: React.FC<IconSvgProps> = ({
	size = 36,
	width,
	height,
	...props
}) => (
<svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 8.75H1.25V6.25H3.75V5H5V1.25H6.25V0H13.75V1.25H15V5H16.25V6.25H18.75V8.75H20V23.75H18.75V25H1.25V23.75H0V8.75ZM7.5 2.5V5H12.5V2.5H7.5ZM17.5 16.25H2.5V17.5H5V20H6.25V17.5H17.5V16.25ZM11.25 12.5H12.5V10H11.25V8.75H8.75V10H7.5V12.5H8.75V13.75H11.25V12.5Z" fill="url(#paint0_linear_9_147)"/>
<defs>
<linearGradient id="paint0_linear_9_147" x1="10" y1="0" x2="20.1667" y2="32.0833" gradientUnits="userSpaceOnUse">
<stop stopColor="#6700FF"/>
<stop offset="1" stopColor="#09FFFF"/>
</linearGradient>
</defs>
</svg>

);
