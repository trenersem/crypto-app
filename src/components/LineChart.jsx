import React from 'react'
import { Col, Row, Typography } from 'antd';
import { Line } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	} from 'chart.js';
import moment from 'moment';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	);

const {Title} = Typography;

const LineChart = ({coinHistory, currentPrice, coinName}) => {
	const coinPrice = [];
	const coinTimestamp = [];

	for(let i = 0; i < coinHistory?.data?.history?.length; i += 1 ) {
		coinPrice.push(coinHistory.data.history[i].price)
		coinTimestamp.push(moment.unix(coinHistory?.data?.history[i].timestamp).format('MM D, YYYY, HH:mm'));
	}

	const data = {
		labels: coinTimestamp.reverse(),
		datasets: [
			{
				label: 'Price in USD',
				data: coinPrice.reverse(),
				fill: false,
				backgroundColor: '#0071bd',
				borderColor: '#0071bd',
			},
		],
	};

	const options = {
		scales: {
			// yAxes: [
			y: {
					ticks: {
						beginAtZero: true
					},
				},
			// ],
		},
	};


	return (
		<>
			<Row className='chart-header'>
				<Title level={2} className='chart-title'>{coinName} Price Chart </Title>
				<Col className='price-container'>
					<Title level={5} className='price-change' >Change: <span style={{color: `${coinHistory?.data?.change > 0 ? 'green' : 'red'}`}}>{coinHistory?.data?.change}%</span></Title>
					<Title level={5} className='current-price'>Current {coinName} Price: $ {currentPrice}</Title>
				</Col>
			</Row>
			<Line data={data} options={options}/>
		</>
	)
}

export default LineChart