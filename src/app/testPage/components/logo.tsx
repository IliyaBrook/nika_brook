import React from "react";
import Image from 'next/image'

export default function Logo() {
	return (
		<>
			<a
				className="site-logo"
				href="https://prettyyende.com/"
			>
				<Image
					src="/logoHorizontal.svg"
					alt="Volume"
					width={235}
					height={35}
				/>
			</a>
		</>
	);
}
