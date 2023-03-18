'use client'

import React, { useState } from 'react'
import {
    AutoComplete,
    AutoCompleteChangeEvent,
    AutoCompleteCompleteEvent
} from 'primereact/autocomplete'

export default function Dropdown() {
    const [value, setValue] = useState<string>('')
    const [items, setItems] = useState<string[]>([])

    const search = (event: AutoCompleteCompleteEvent) => {
        let _items = [...(Array(10).keys() as any)]
        setItems(
            event.query
                ? [...(Array(10).keys() as any)].map(
                      (item) => event.query + '-' + item
                  )
                : _items
        )
    }

    return (
        <AutoComplete
            value={value}
            suggestions={items}
            completeMethod={search}
            onChange={(e: AutoCompleteChangeEvent) => setValue(e.value)}
            dropdown
        />
    )
}

// EOF
