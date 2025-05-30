import React from 'react';
import "./Service.scss";
import Section from "../../components/Section/Section";
import Cards from "../../components/Cards/Cards";
import Transport from "../../components/Transport/Transport";
import Goods from "../../components/Goods/Goods";

function Service() {
	return (
		<Section>
			<div className="service">
				<Cards/>
				<Transport/>
				<Goods/>
			</div>
		</Section>
	);
}

export default Service;