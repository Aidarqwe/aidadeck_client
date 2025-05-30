import React from 'react';
import "./Main.scss";
import Header from "../../components/Header/Header";
import CounterUp from "../../components/CounterUp/CounterUp";
import Cards from "../../components/Cards/Cards";
import Goods from "../../components/Goods/Goods";
import Variants from "../../components/Variants/Variants";
import Section from "../../components/Section/Section";
import Reviews from "../../components/Reviews/Reviews";


function Main() {
	return (
		<div className="main">
			<Header/>
			<Section className="section main_section">
				<CounterUp/>
				<Variants/>
				<Cards/>
				<Reviews/>
				<Goods/>
			</Section>
		</div>
	);
}

export default Main;