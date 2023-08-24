import { Outlet } from "react-router-dom";
import React from "react";
import Himage from '../assets/Himg.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image"; // Import the Image component from react-bootstrap
import Package from '../assets/package1.jpg';
import Pcimg from '../assets/pcimg.jpg';
import Conform from '../assets/confime.jpg';
import Ship from '../assets/shipping.jpg';

function Home_com() {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="text-center" style={{ width: "100%" }}>
                            <h1 style={{ color: '#5a3901' }}>You Move On, While We Move Out</h1><br />
                            <p style={{ fontSize: '21px' }}>Trucklah Online Truck Booking platform with <br /> affordable rental services together with great <br /> discount offers and transparent pricings.</p><br />

                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <button type="button" id="start_btn" className="btn btn-primary mx-3 mx-sm-4 mx-md-5">Get Started!</button>
                            <FontAwesomeIcon icon={faPlay} id="Icon" className="mx-3 mx-sm-4 mx-md-5" />
                        </div>

                    </div><br/>
                    <div className="col-md-6">
                        <Image src={Himage} alt='Logo' fluid /> {/* Use the Image component for responsive images */}
                    </div>
                </div>
            </div>
            <div className="container" style={{ display: "flex", justifyContent: "center" }}>

                <div className="nav">
                    <h3>PACK</h3>
                    <h3>SHIFT</h3>
                    <h3>DELIVERY</h3>
                </div>
            </div>

            <div className="container mt-4" id="h_card" style={{ boxShadow: '0 0 10px 1px black',borderRadius:"5px", maxWidth: '1100px', width: '100%', margin: '0 auto' }}>
                <div className="row " id="h_card">
                    <div className="col-md-3"><br/>
                        <Card style={{maxHeight: "400px", border: 'none' }}>
                            <Card.Img variant="top" src={Package} alt="img 1" style={{ width: "60px", height: "60px",top:"1" }} /><br /><br />
                            <Card.Body style={{height: "200px" }}>
                                <Card.Title><span id="cd"> 01. </span> Give Us A Details</Card.Title><br />
                                <Card.Text>
                                    Choose vehicle type,<br /> addresses and date to<br /> receive instant quotation
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-3"><br/>
                        <Card style={{maxHeight: "400px", border: 'none'  }}>
                            <Card.Img variant="top" src={Pcimg} alt="img 2" style={{ width: "60px", height: "60px" }} /><br /><br />
                            <Card.Body style={{height: "200px" }}>
                                <Card.Title><span id="cd"> 02. </span> Provide An Quote</Card.Title><br />
                                <Card.Text>
                                    Book manpower, shrink<br /> wrapping or assembly<br /> service.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-3"><br/>
                        <Card style={{maxHeight: "400px", border: 'none'  }}>
                            <Card.Img variant="top" src={Conform} alt="img3" style={{ width: "60px", height: "60px" }} /><br /><br />
                            <Card.Body style={{height: "200px" }}>
                                <Card.Title><span id="cd"> 03. </span> Confirm Your Date</Card.Title><br />
                                <Card.Text>
                                    Trucklah will match your<br /> booking with a reputable<br /> driver.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-3"><br/>
                        <Card style={{maxHeight: "400px", border: 'none'  }}>
                            <Card.Img variant="top" src={Ship} alt="img4" style={{ width: "60px", height: "60px" }} /><br /><br />
                            <Card.Body style={{height: "200px" }}>
                                <Card.Title><span id="cd"> 04. </span> Move Easy & Stess Free</Card.Title><br />
                                <Card.Text>
                                    Pay cash to the driver or pay<br /> online using credit card or<br /> online banking.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                </div>
            </div>

            <Outlet />
        </>
    );
}

export default Home_com;