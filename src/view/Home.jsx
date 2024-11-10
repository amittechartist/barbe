import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import QR from './qr.png';
import bgImage from './popup.jpg';
import powerIcon from './logo.png';
import svgexport from './svgexport-16.svg';


function DonationForm() {
    // State to control modal visibility
    const [modal, setModal] = useState(false);
    const [onsuccess, setonsuccess] = useState(false);

    // Open modal on page load
    useEffect(() => {
        setModal(true);
    }, []);

    // Toggle modal visibility
    const toggleModal = () => setModal(!modal);
    const handleSubmit = async (event) => {
        event.preventDefault();
        setonsuccess(true);
        return false;
        try {
            // Example of async operation, e.g., sending data to an API
            const formData = {
                name: event.target.name.value,
                email: event.target.email.value,
                phone: event.target.phone.value,
                whatsapp: event.target.whatsapp.value,
                address: event.target.address.value,
                upi: event.target.upi.value,
            };

            // Replace with your API call or async action
            const response = await fetch('https://your-api-url.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Handle success
                alert('Form submitted successfully!');
            } else {
                // Handle error
                alert('Failed to submit form.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred during form submission.');
        }
    };
    return (
        <div className="bg-container d-flex align-items-center justify-content-center vh-lg-100">
            {/* Modal with image and automatic close button */}
            <Modal isOpen={modal} toggle={toggleModal} centered size="lg">
                <ModalHeader toggle={toggleModal} />
                <ModalBody className="text-center">
                    <img src={bgImage} alt="Modal Display" className="img-fluid" />
                </ModalBody>
            </Modal>

            {/* Main Form Container */}
            <form onSubmit={handleSubmit}>
                <div className="card p-4 shadow-lg" style={{ maxWidth: '1000px', width: '100%' }}>
                    {onsuccess ? (<>
                        <div className='px-5 py-2 text-center' style={{ width: '600px' }}>
                            <img src={svgexport} alt="Success" className="img-fluid mb-4" height={'auto'} width={'300px'} />
                            <h2 className="mb-3 text-success">Thank You!</h2>
                            <p className="text-muted">We will contact you soon.</p>
                        </div>
                    </>) : (<>

                        <h3 className="text-center mb-4">Admission Form</h3>
                        <div className="row">
                            {/* Left side with form fields */}
                            <div className="col-lg-6">

                                <div className='row'>
                                    <div className="mb-3 col-12 col-lg-6">
                                        <label htmlFor="name" className="form-label">Name <span className='text-danger'><strong>*</strong></span></label>
                                        <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                                    </div>
                                    <div className="mb-3 col-12 col-lg-6">
                                        <label htmlFor="email" className="form-label">Email <span className='text-danger'><strong>*</strong></span></label>
                                        <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                                    </div>
                                    <div className="mb-3 col-12 col-lg-6">
                                        <label htmlFor="phone" className="form-label">Phone Number <span className='text-danger'><strong>*</strong></span></label>
                                        <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" />
                                    </div>
                                    <div className="mb-3 col-12 col-lg-6">
                                        <label htmlFor="whatsapp" className="form-label">WhatsApp Number <span className='text-danger'><strong>*</strong></span></label>
                                        <input type="tel" className="form-control" id="whatsapp" placeholder="Enter your WhatsApp number" />
                                    </div>
                                    <div className="mb-3 col-12">
                                        <label htmlFor="address" className="form-label">Full Address <span className='text-danger'><strong>*</strong></span></label>
                                        <textarea className="form-control" id="address" rows="3" placeholder="Enter your full address"></textarea>
                                    </div>
                                </div>

                            </div>
                            {/* Right side with QR code and UPI input */}
                            <div className="col-lg-6 d-flex flex-column align-items-center">
                                <h5>Support Us with a Donation of ₹100</h5>
                                <img src={QR} alt="QR Code" className="img-fluid my-3" style={{ maxWidth: '200px' }} />
                                <input type="text" className="form-control mb-3" placeholder="Enter UPI Number" />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary w-100 py-2">Submit</button>
                    </>)}
                    <div className="text-center mt-4">
                        <h6 className="text-muted text-dark">
                            Powered by <img src={powerIcon} alt="Power Icon" style={{ width: '40px', verticalAlign: 'middle' }} />
                        </h6>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default DonationForm;
