import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha'

import '../../assets/css/form.css'

export default function FormSchedule(props) {

    let service_id = process.env.REACT_APP_SERVICE_ID;
    let template_id = process.env.REACT_APP_TEMPLATE;
    let public_key = process.env.REACT_APP_PUBLIC_KEY;

    const list = props.flavors;

    const sent = false;

    const [checked, setChecked] = useState([])

    const [send, setSend] = useState({
        first_name: '',
        last_name: '',
        email: '',
        date: '',
        time: '',
        venue: '',
        eventTyp: '',
        address: '',
        phone: '',
        flavors: checked,
    })

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(service_id, template_id, form.current, public_key)
          .then((result) => {
              console.log(result.text);
              sent = true;
          }, (error) => {
              console.log(error.text);
              sent = false;
          });
      };

    const changeHandler = (e) => {
        setSend({ [e.target.name]: e.target.value })
    }

    const changeArrayHandler = (e) => {
        var newList = checked
        if (e.target.checked) {
            newList.push(e.target.value)
        } else {
            newList.splice(checked.indexOf(e.target.value), 1)
        }

        newList.sort()
        setChecked(newList)
    }

    return (
        <div className="formdata">
            {sent ? <p id='sent'>Sent! We will review this data and get to you shortly!</p> : <p></p>}
            <form ref={form} onSubmit={sendEmail}>
                <section>
                    <input
                        type="text"
                        placeholder="First Name"
                        name="first_name"
                        value={send.first_name}
                        onChange={changeHandler}
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        name="last_name"
                        value={send.last_name}
                        onChange={changeHandler}
                    />
                </section>
                <section>
                    <input
                        type="text"
                        placeholder="E-Mail"
                        name="email"
                        value={send.email}
                        onChange={changeHandler}
                        required
                    />
                    <input 
                        type="tel"
                        placeholder="123-123-4567"
                        name="phone"
                        value={send.phone}
                        onChange={changeHandler}
                    />
                </section>
                <section>
                    <input
                        type="date"
                        placeholder="01/01/2023"
                        name="date"
                        value={send.date}
                        onChange={changeHandler}
                    />
                    <input
                        type="time"
                        placeholder="12:00 PM"
                        name="time"
                        value={send.time}
                        onChange={changeHandler}
                    />
                </section>
                <section style={{ width: 'fit-content' }}>
                    <input
                        type="radio"
                        id="in"
                        name="venue"
                        value="Indoor"
                        onChange={changeHandler}
                    />
                    <label for="in">Indoor</label>

                    <input
                        type="radio"
                        id="out"
                        name="venue"
                        value="Outdoor"
                        onChange={changeHandler}
                    />
                    <label for="out">Outdoor</label>
                </section>
                <section>
                    <select name='eventTyp'>
                        <option value="not" selected>Choose an option...</option>
                        <option value="party">Party</option>
                        <option value="bday">Birthday</option>
                        <option value="wedding">Wedding</option>
                        <option value="corporate">Corporate</option>
                    </select>
                </section>
                <section>
                    <input
                        type="text"
                        placeholder="Address"
                        name="address"
                        value={send.address}
                        onChange={changeHandler}
                    />
                </section>
                <section id='checks'>
                    {list.map((m) => 
                        <div className='check-input'>
                            <input
                            id='check-button'
                            type="checkbox"
                            name="flavors"
                            value={m.name}
                            onChange={changeArrayHandler} /><label for="flavor1">{m.name}</label>
                        </div>
                    )}
                </section>
                <span>
                    <ReCAPTCHA
                        sitekey="6LfqsdIiAAAAAMkT6RAT4D9KOQgnpmPRDi5CjAsq"
                        size="normal"
                    />
                </span>
                <button type="submit" name="done">
                    Schedule
                </button>
            </form>
        </div>
    )
}
