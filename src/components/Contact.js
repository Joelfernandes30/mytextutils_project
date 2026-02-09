import React from 'react';

export default function Contact() {
    return (
        <div className="container my-5">
            <h1>Contact Us</h1>
            <div className="row">
                <div className="col-md-6">
                    <h3>Get in Touch</h3>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <h3>Contact Information</h3>
                    <p><strong>Email:</strong> info@example.com</p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                    <p><strong>Address:</strong> 123 Main St, City, State 12345</p>
                </div>
            </div>
        </div>
    );
}
