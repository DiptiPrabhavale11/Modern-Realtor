import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../css/CARForm.css';
import jsPDF from 'jspdf';

const CARForm = () => {
    const [selectedField, setSelectedField] = useState('Offer Date');
    const [formData, setFormData] = useState({});

    const handleFocus = (field) => {
        setSelectedField(field);
    };
    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const generatePDF = () => {
        const doc = new jsPDF();
        let yPos = 10;

        for (const [key, value] of Object.entries(formData)) {
            doc.text(`${key}: ${value}`, 10, yPos);
            yPos += 10;
        }

        doc.save('form_data.pdf');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        generatePDF();
    };

    const explanations = {
        'Offer Date': 'The offer date is the date when you submit your offer to purchase the property. It is an important date as it marks the beginning of the negotiation process with the seller.',
        'Close Date': 'The closing date is the day on which the ownership of the property is transferred from the seller to the buyer. It is the final step in the home buying process, where all the necessary paperwork is signed, and funds are exchanged.',
        'First Name': 'Enter your first name.',
        'Last Name': 'Enter your last name.',
        'Seller Address': "The seller's address is the address of the property you are interested in purchasing. It is important to provide the correct and complete address to ensure that your offer is associated with the right property.",
        'Property State': 'Enter the state where the property is located.',
        'Property ZipCode': 'Enter the zip code of the property.',
        'Purchase Price': "The purchase price is the amount you are offering to pay for the property. It is one of the most important factors in your home offer, as it directly impacts the seller's decision to accept or reject your offer.",
        'Financing': 'Specify how the home will be financed.',
        'Residency': 'Specify the type of residency for you.',
    };

    return (
        <Container>
            <Row className="mt-5 py-4">
                <h2 style={{ textAlign: 'center', color: 'rgb(84, 92, 129)' }}>Let's put together a home offer!</h2>
            </Row>
            <Row>
                <Form className="form-container" onSubmit={handleSubmit}>
                    <Row className="mt-1">
                        <Col className="left-panel" xs={12} md={8}>

                            <Form.Group controlId="formOfferDate" className='mb-5'>
                                <Form.Label>When is your offer date?</Form.Label>
                                <Form.Control
                                    type="date"
                                    onFocus={() => handleFocus('Offer Date')}
                                    onChange={(e) => handleChange('Offer Date', e.target.value)}
                                />
                            </Form.Group>

                        </Col>
                        <Col className="right-panel" xs={12} md={4}>
                            {selectedField === 'Offer Date' && <div className="form-container p-3 border scrollable">
                                <h5>Offer Date</h5>
                                <p>{explanations[selectedField]}</p>
                            </div>}
                            {/* {!selectedField && <p>Select a field to see the instructions.</p>} */}
                        </Col>
                    </Row>

                    <Row className="mt-1">
                        <Col className="left-panel" xs={12} md={8}>

                            <Form.Group controlId="formCloseDate" className='mb-5'>
                                <Form.Label>When do you want to close on the property?</Form.Label>
                                <Form.Control
                                    type="date"
                                    onFocus={() => handleFocus('Close Date')}
                                    onChange={(e) => handleChange('Close Date', e.target.value)}
                                />
                            </Form.Group>

                        </Col>
                        <Col className="right-panel mt-1" xs={12} md={4}>
                            {selectedField === 'Close Date' && <div className="form-container p-3 border scrollable">
                                <h5>Close Date</h5>
                                <p>{explanations[selectedField]}</p>
                            </div>}
                        </Col>
                    </Row>

                    <Row className="mt-1">
                        <Col className="left-panel" xs={12} md={8}>

                            <Form.Group controlId="formFirstName" className='mb-5'>
                                <Form.Label>What is your first name?</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your first name"
                                    onFocus={() => handleFocus('First Name')}
                                    onChange={(e) => handleChange('First Name', e.target.value)}
                                />
                            </Form.Group>

                        </Col>
                        <Col className="right-panel mt-1" xs={12} md={4}>
                            {selectedField === 'First Name' && <div className="form-container p-3 border scrollable">
                                <h5>First Name</h5>
                                <p>{explanations[selectedField]}</p>
                            </div>}
                        </Col>
                    </Row>

                    <Row className="mt-1">
                        <Col className="left-panel" xs={12} md={8}>

                            <Form.Group controlId="Last Name" className='mb-5'>
                                <Form.Label>What is your last name?</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your last name"
                                    onFocus={() => handleFocus('Last Name')}
                                    onChange={(e) => handleChange('Last Name', e.target.value)}
                                />
                            </Form.Group>

                        </Col>
                        <Col className="right-panel mt-1" xs={12} md={4}>
                            {selectedField === 'Last Name' && <div className="form-container p-3 border scrollable">
                                <h5>Last Name</h5>
                                <p>{explanations[selectedField]}</p>
                            </div>}
                        </Col>
                    </Row>

                    <Row className="mt-1">
                        <Col className="left-panel" xs={12} md={8}>

                            <Form.Group controlId="formPropertyAddress" className='mb-5'>
                                <Form.Label>What is the address of the property you are making an offer on?</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter property address"
                                    onFocus={() => handleFocus('Seller Address')}
                                    onChange={(e) => handleChange('Seller Address', e.target.value)}
                                />
                            </Form.Group>

                        </Col>
                        <Col className="right-panel mt-1" xs={12} md={4}>
                            {selectedField === 'Seller Address' && <div className="form-container p-3 border scrollable">
                                <h5>Seller Address</h5>
                                <p>{explanations[selectedField]}</p>
                            </div>}
                        </Col>
                    </Row>

                    <Row className="mt-1">
                        <Col className="left-panel" xs={12} md={8}>

                            <Form.Group controlId="formPropertyState" className='mb-5'>
                                <Form.Label>What is the selling property's state?</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter property state"
                                    onFocus={() => handleFocus('Property State')}
                                    onChange={(e) => handleChange('Property State', e.target.value)}
                                />
                            </Form.Group>

                        </Col>
                        <Col className="right-panel mt-1" xs={12} md={4}>
                            {selectedField === 'Property State' && <div className="form-container p-3 border scrollable">
                                <h5>Property State</h5>
                                <p>{explanations[selectedField]}</p>
                            </div>}
                        </Col>
                    </Row>

                    <Row className="mt-1">
                        <Col className="left-panel" xs={12} md={8}>

                            <Form.Group controlId="formPropertyZipCode" className='mb-5'>
                                <Form.Label>What is the selling property's Zip Code?</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Zip Code"
                                    onFocus={() => handleFocus('Property ZipCode')}
                                    onChange={(e) => handleChange('Property ZipCode', e.target.value)}
                                />
                            </Form.Group>

                        </Col>
                        <Col className="right-panel mt-1" xs={12} md={4}>
                            {selectedField === 'Property ZipCode' && <div className="form-container p-3 border scrollable">
                                <h5>Property ZipCode</h5>
                                <p>{explanations[selectedField]}</p>
                            </div>}
                        </Col>
                    </Row>

                    <Row className="mt-1">
                        <Col className="left-panel" xs={12} md={8}>

                            <Form.Group controlId="formPurchasePrice" className='mb-5'>
                                <Form.Label>What is the purchase price for this property?</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter purchase price"
                                    onFocus={() => handleFocus('Purchase Price')}
                                    onChange={(e) => handleChange('Purchase Price', e.target.value)}
                                />
                            </Form.Group>

                        </Col>
                        <Col className="right-panel mt-1" xs={12} md={4}>
                            {selectedField === 'Purchase Price' && <div className="form-container p-3 border scrollable">
                                <h5>Purchase Price</h5>
                                <p>{explanations[selectedField]}</p>
                            </div>}
                        </Col>
                    </Row>

                    <Row className="mt-1">
                        <Col className="left-panel" xs={12} md={8}>

                            <Form.Group controlId="formFinancing" className='mb-5'>
                                <Form.Label>How will this home be financed?</Form.Label>
                                <Form.Control
                                    as="select"
                                    onFocus={() => handleFocus('Financing')}
                                    onChange={(e) => handleChange('Financing', e.target.value)}
                                >
                                    <option>Select financing option</option>
                                    <option>Cash</option>
                                    <option>Mortgage</option>
                                    <option>Other</option>
                                </Form.Control>
                            </Form.Group>

                        </Col>
                        <Col className="right-panel mt-1" xs={12} md={4}>
                            {selectedField === 'Financing' && <div className="form-container p-3 border scrollable">
                                <h5>Financing</h5>
                                <p>{explanations[selectedField]}</p>
                            </div>}
                        </Col>
                    </Row>

                    <Row className="mt-1">
                        <Col className="left-panel" xs={12} md={8}>

                            <Form.Group controlId="formResidency" className='mb-5'>
                                <Form.Label>What kind of residency is this for you?</Form.Label>
                                <Form.Control
                                    as="select"
                                    onFocus={() => handleFocus('Residency')}
                                    onChange={(e) => handleChange('Residency', e.target.value)}
                                >
                                    <option>Select residency option</option>
                                    <option>Primary</option>
                                    <option>Secondary</option>
                                    <option>Investment</option>
                                    <option>Vacation</option>
                                </Form.Control>
                            </Form.Group>

                        </Col>
                        <Col className="right-panel mt-1" xs={12} md={4}>
                            {selectedField === 'Residency' && <div className="form-container p-3 border scrollable">
                                <h5>Residency</h5>
                                <p>{explanations[selectedField]}</p>
                            </div>}
                        </Col>
                        <Row style={{ textAlign: 'center' }}>
                            <Button style={{
                                marginBottom: '5px',
                                width: '100px',
                                border: 'rgb(84, 92, 129)',
                                backgroundColor: 'rgb(84, 92, 129)',
                                color: 'rgb(255, 255, 255)'
                            }} type="submit">
                                Submit
                            </Button>
                            <Button 
                            onClick={generatePDF}
                            style={{
                                marginLeft: '15px',
                                marginBottom: '5px',
                                width: '100px',
                                border: 'rgb(84, 92, 129)',
                                backgroundColor: 'rgb(84, 92, 129)',
                                color: 'rgb(255, 255, 255)'
                            }}>
                                Download
                            </Button>
                        </Row>
                    </Row>
                </Form>
            </Row>
        </Container >
    );
};

export default CARForm;
