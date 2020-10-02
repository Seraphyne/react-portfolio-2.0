/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Contact.css';

export default function Contact(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [buttonText, setButtonText] = useState('Send');
  const [sent, setSentBool] = useState(false);


  function handleSubmit(e) {
    e.preventDefault();

    setButtonText('Sending...');

    let data = {
      name,
      email,
      subject,
      message
    };

    

//If I want to implement a email API later on
      fetch('', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        setSentBool(true);
        resetForm();
      })
      .catch(() => {
        console.log('Message not sent');
      });
  }

  function resetForm() {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setButtonText('Send');
  }

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="column">
          <h1><span>Get In Touch.</span></h1>
        </div>
        <div className="column">
          <h2>Contact</h2>
        </div>
      </div>
      <div className="row section-body">
        <div className="column">
          {/* form start */}
          {/* <form id="contactForm" name="contactForm" onSubmit={handleSubmit}> */}
          <form id="contactForm" name="contactForm" action="https://formspree.io/renata.f.dickinson@gmail.com" method="POST">
            <fieldset>
              <div>
                <label htmlFor="contactName">Name <span className="required">*</span></label>
                <input 
                type="text" 
                size={35} 
                id="contactName" 
                name="contactName"
                onChange={e => setName(e.target.value)} 
                required
                placeholder="Your Name" value={name} />
              </div>
              <div>
                <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                <input 
                type="email" 
                size={35} 
                id="contactEmail" 
                name="contactEmail"
                onChange={e => setEmail(e.target.value)} 
                required
                placeholder="your@email.com" 
                value={email} />
              </div>
              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input 
                type="text" 
                size={35} 
                id="contactSubject" 
                name="contactSubject"
                onChange={e => setSubject(e.target.value)}
                placeholder="Subject message" 
                value={subject} />
              </div>
              <div>
                <label htmlFor="contactMessage">Text <span className="required">*</span></label>
                <textarea cols={50} rows={15} id="contactMessage" name="contactMessage"
                  onChange={e => setMessage(e.target.value)}  required
                  placeholder="Your message here" value={message} />
              </div>
              <div>
                <button type="submit" className="submit">{buttonText}</button>
                <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span>
              </div>
            </fieldset>
          </form>
          {/* form end */}
        </div>
        {/* <div className="column">
          <h2>Contact Details</h2>
          <ul className="address">
            <li>Renata Dickinson</li>
            <li>Dallas-Fort Worth Metroplex, TX</li>
          </ul>
        </div> */}
      </div>
    </section>
  );
};
