'use client'

import React, { useState } from 'react'
import {
    AutoComplete,
    AutoCompleteCompleteEvent
} from 'primereact/autocomplete'

export default function Basic() {
    const [value, setValue] = useState<string>('')
    const [items, setItems] = useState<string[]>([])

    const search = (event: AutoCompleteCompleteEvent) => {
        setItems(
            [...(Array(10).keys() as any)].map(
                (item) => event.query + '-' + item
            )
        )
    }

    return (
        <>
            <AutoComplete
                value={value}
                suggestions={items}
                completeMethod={search}
                onChange={(e) => setValue(e.value)}
            />
        </>
    )
}

// EOF
