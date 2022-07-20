import React from 'react'
import FormSchedule from '../comp/features/FormSchedule'

export default function Contact() {
    return (
        <div>
            <h1>Contact Us!</h1>
            <p>
                If you love cotton candy, then why dont you invite us over to
                make it special for you?
            </p>

            <FormSchedule />

            <iframe
                title="Calendar"
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&showTitle=0&showPrint=0&src=NmI4YzNkZ3JxdjNtcTVucjhqc2FvZDVlbWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%237986CB"
                width="800"
                height="600"
                frameborder="0"
                scrolling="no"
            ></iframe>
        </div>
    )
}
