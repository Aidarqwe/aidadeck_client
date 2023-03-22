import React from 'react';
import {YMaps, Map, Placemark} from "@pbe/react-yandex-maps";
import "./Map.scss";
import location from "../../img/location-white.png";


function MyMap() {
	return (
		<div className="map-wrapper">
			<div className="map">
				<YMaps>
					<Map defaultState={{ center: [23.18516, 113.171393], zoom: 11 }}>
						<Placemark defaultGeometry={[23.18516, 113.171393]} />
					</Map>
				</YMaps>
				<div className="map-info">
					<p>
						<img src={location} alt="img" />佛山市南海区
					</p>
					<p>水口大道谭村公交站极兔快递1919仓库</p>
				</div>
			</div>
			<div className="map">
				<YMaps>
					<Map defaultState={{ center: [23.220363, 113.230936], zoom: 11 }}>
						<Placemark defaultGeometry={[23.220363, 113.230936]} />
					</Map>
				</YMaps>
				<div className="map-info">
					<p>
						<img src={location} alt="img" />广州市白云区石
					</p>
					<p>井镇、石门街、鸦岗西岐十一工业区A区之A3</p>
				</div>
			</div>
		</div>
	);
}

export default MyMap;