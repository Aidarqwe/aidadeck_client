import React from 'react';
import "./Section.scss";

function Section(props) {
	return (
		<section>
			{props.children}
		</section>
	);
}

export default Section;