import React from 'react';
import {Image, Button,Row, Col} from 'react-bootstrap'
import style from '../style/home.js'
import '../style/team.css';
import Logo from '../image/logo.png'
import alarmClock from '../image/home/alarmClock.png'
import checkIcon from '../image/home/checkIcon.jpg'
import lineChart from '../image/home/lineChart.png'
import plus from '../image/home/plus.png'
import screen from '../image/home/screen.png'
import stars from '../image/home/stars.png'
import people from '../image/home/people.png'
import save from '../image/home/save.png'
import ngoc from '../image/home/ngoc.jpg'
import long_ from '../image/home/long.jpg'
import pennina from '../image/home/p2e.jpg'
import {Link} from 'react-router-dom'
export default ()=>{
	return (
		<div>
			<div style={style.cover.common}>
				<Link to="/editprofile">
					<Button style={style.cover.button} bsStyle="success">
						TRACK YOUR TAX FOR FREE
					</Button>
				</Link>
			</div>
			<Row style={style.about.common}>
				<Col  xsHidden sm={3} xsOffset={1}>
					<Image src={Logo} responsive/>
				</Col>
				<Col xs={12} sm={7} smOffset={0}>
					<h2>About us</h2>
					<br/>
					<p style={style.about.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</Col>
			</Row>
			<div style={style.feature.common}>
				<Row style={{margin:'0 auto'}}>
					<h2 >Title about cool features</h2>
					<Col smOffset={2} sm={2} style={style.feature.col}>
						<Image src={checkIcon}  style={style.feature.image} />
						<h4>Calculation</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
					</Col>
					<Col sm={1} xsHidden style={style.feature.col}>
						<Image src={plus}  style={style.feature.image} />
					</Col>
					<Col sm={2} style={style.feature.col}>
						<Image src={alarmClock}  style={style.feature.image} />
						<h4>Notification</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
					</Col>
					<Col sm={1} xsHidden style={style.feature.col}>
						<Image src={plus}  style={style.feature.image} />
					</Col>
					<Col sm={2} style={style.feature.col}>
						<Image src={lineChart}  style={style.feature.image} />
						<h4>Visualization</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
					</Col>
				</Row>
				<Row>
					<Col xsOffset={3} xs={6}>
						<hr style={style.feature.hr}/>
					</Col>
				</Row>
				<Row>
					<Col xsOffset={3} xs={6} sm={4} smOffset={2}>
						<Image src={screen} responsive/>
					</Col>
					<Col xsOffset={3} xs={6} sm={4} smOffset={0}>
						<h3>Track your tax responsibly from any device!</h3>
						<Link to="editprofile">
							<Button bsStyle="success">Start now</Button>
						</Link>
					</Col>
				</Row>
			</div>
			<div>

			<Row id="rw">
			<br/>
			<h2>Meet The Team</h2>
			<br/>
				<Col xs={6} md={4}>
				  <div className="locm">
				    <div className="card">
				      <Image className="mag" src={ngoc}/>
				      <div className="contnr">
				        <h2>Ngoc Nguyen</h2>
								<br/>
								<p className="title">Designer/ Web Developer</p>
				        <p>Expertise: Figma, Html, Css, Javascript and React</p>
				        <p>Github: https://github.com/ngocnn1104</p>
				        <p><button className="button">Contact</button></p>
				      </div>
				    </div>
				  </div>
					</Col>

					<Col xs={6} md={4}>
				    <div className="locm">
				      <div className="card">
				        <Image className="mag" src={long_}/>
				        <div className="contnr">
				          <h2>Long </h2>
									<br/>
				          <p className="title">Web Developer Guru</p>
				          <p>Expertise: Html, Css, Javascript, React and all things Backend</p>
				          <p>Github: https://github.com/khoathanglong</p>
				          <p><button className="button">Contact</button></p>
				        </div>
				      </div>
				    </div>
						</Col>
					<Col xs={6} md={4}>
				  <div className="locm">
				    <div className="card">
				      <Image className="mag" src={pennina}/>
				      <div className="contnr">
				        <h2>Pennina Muiruri</h2>
								<br/>
				        <p className="title">Junior web Developer</p>
				        <p>Expertise: Html, Css, Javascript and some React</p>
				        <p>Github: https://github.com/PMuiruri</p>
				        <p><button className="button">Contact</button></p>
				      </div>
				    </div>
				  </div>
				</Col>
			</Row>
			</div>


			<Row style={style.review.common}>
				<h2>Reviews</h2>
				<br/>
				<Col xsOffset={3} xs={6} smOffset={1} sm={3} style={style.review.block}>
					<Image src={stars} style={style.review.image.stars} />
					<p>4.2</p>
					<p>Review Score</p>
				</Col>

				<Col xsOffset={3} xs={6} smOffset={1} sm={2} style={style.review.block}>
					<Image src={people} style={style.review.image}/>
					<p>10.000+</p>
					<p>User Reviews</p>
				</Col>

				<Col xsOffset={3} xs={6} smOffset={1} sm={2} style={style.review.block}>
					<Image src={save} style={style.review.image} />
					<p>$100.000</p>
					<p>Savings</p>
				</Col>
			</Row>
		</div>
	)
}
