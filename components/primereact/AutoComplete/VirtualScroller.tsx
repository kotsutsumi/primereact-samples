'use client'

import React, { useState } from 'react'
import { AutoComplete } from 'primereact/autocomplete'

export default function VirtualScroller() {
    const [selectedItem, setSelectedItem] = useState(null)
    const [filteredItems, setFilteredItems] = useState(undefined)
    const items = Array.from({ length: 100000 }).map((_, i) => ({
        label: `Item #${i}`,
        value: i
    }))

    const searchItems = (event: { query: any }) => {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo purposes we filter at client side
        let query = event.query
        let _filteredItems = []

        for (let i = 0; i < items.length; i++) {
            let item = items[i]
            if (item.label.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                _filteredItems.push(item)
            }
        }

        setFilteredItems(_filteredItems as any)
    }

    return (
        <AutoComplete
            value={selectedItem}
            suggestions={filteredItems}
            completeMethod={searchItems}
            virtualScrollerOptions={{ itemSize: 38 }}
            field="label"
            dropdown
            onChange={(e) => setSelectedItem(e.value)}
        />
    )
}

// EOF
