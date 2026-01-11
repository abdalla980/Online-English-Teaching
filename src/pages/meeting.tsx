import { useState } from 'react'
import { Link } from 'wouter'
import './meeting.css'

const Meeting = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [location, setLocation] = useState('')

    const generateWhatsAppMessage = () => {
        let message = 'Hello! I want to book a free session.\n\n'
        
        if (name) {
            message += `Name: ${name}\n`
        }
        if (email) {
            message += `Email: ${email}\n`
        }
        if (location) {
            message += `Location: ${location}\n`
        }
        
        message += '\nWhat time are you available?'
        
        return encodeURIComponent(message)
    }

    const whatsappUrl = `https://wa.me/971528750021?text=${generateWhatsAppMessage()}`

    return (
        <div className="meeting-page">
            <div className="meeting-container">
                <Link href="/" className="back-button">
                    ← Back to Home
                </Link>
                <div className="meeting-card">
                    <h1 className="meeting-title">Book a Free Meeting</h1>
                    <p className="meeting-subtitle">
                        Fill in your details below and we'll contact you via WhatsApp to schedule your free trial lesson.
                    </p>
                    
                    <form className="meeting-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">
                                Full Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="form-input"
                                placeholder="Enter your full name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" className="form-label">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="form-input"
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="location" className="form-label">
                                Where do you live? *
                            </label>
                            <input
                                type="text"
                                id="location"
                                className="form-input"
                                placeholder="Enter your city/country"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                required
                            />
                        </div>

                        <a 
                            href={whatsappUrl}
                            className="btn-primary meeting-submit-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Book a free session
                        </a>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Meeting;
