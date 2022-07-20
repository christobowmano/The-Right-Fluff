import React, { useState } from 'react'

export default function Options() {
    const [flavors, setFlavor] = useState([
        'Strawberry',
        'Root Beer',
        'Marshmellow',
        'Blueberry',
    ])

    return <div>Options</div>
}
