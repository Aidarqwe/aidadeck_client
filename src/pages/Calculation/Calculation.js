import React from 'react';
import "./Calculation.scss";
import Section from "../../components/Section/Section";
import Calculator from "../../components/Calculator/Calculator";

function Calculation() {
	return (
		<Section>
			<div className="calculator">
				<h1>Расчет стоимости</h1>
				<Calculator/>
			</div>
		</Section>
	);
}

export default Calculation;