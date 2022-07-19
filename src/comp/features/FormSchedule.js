import React from 'react'

import '../../assets/css/form.css'

export default function FormSchedule() {
  return (
    <div className='formdata'>
        <form>
                <section>
                    <input type="text" placeholder="First Name"/>
                    <input type="text" placeholder="Last Name"/>
                </section>
                <section>
                    <input type="text" placeholder="E-Mail"/>
                </section>
                <section>
                    <input type="date"/>
                </section>
                <section>
                    <input type="radio" id="in" name="venue" value="Indoor"/>
                    <label for="in">Indoor</label>

                    <input type="radio" id="out" name="venue" value="Outdoor"/>
                    <label for="out">Outdoor</label>
                </section>
                <section>
                    <input type="text" placeholder="Address"/>
                </section>
            <button type="submit" name='done'>Schedule</button>
        </form>
    </div>
  )
}
