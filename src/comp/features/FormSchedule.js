import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

import '../../assets/css/form.css'

export default function FormSchedule(props) {

    const list = props.flavors;

    const [checked, setChecked] = useState([])

    const [send, setSend] = useState({
        first_name: '',
        last_name: '',
        email: '',
        date: '',
        venue: '',
        address: '',
        flavors: checked,
    })

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
            <form>
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
                    />
                </section>
                <section>
                    <input
                        type="date"
                        name="date"
                        value={send.date}
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
                    <input
                        type="text"
                        placeholder="Address"
                        name="address"
                        value={send.address}
                        onChange={changeHandler}
                    />
                </section>
                <section>
                    {list.map((m) => 
                        <><input
                            type="checkbox"
                            name="flavors"
                            value={m.name}
                            onChange={changeArrayHandler} /><label for="flavor1">{m.name}</label></>
                    )};
                </section>
                <span>
                    <ReCAPTCHA
                        sitekey="6LcpiuwUAAAAAPbrfWRoFaWwE8O-0kiQQkSUEamd"
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
