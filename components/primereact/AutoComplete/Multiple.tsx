'use client'

import React, { useEffect, useState } from 'react'
import { AutoComplete } from 'primereact/autocomplete'
import { CountryService } from '../service/CountryService'

export default function Multiple() {
    const [countries, setCountries] = useState([])
    const [selectedCountries, setSelectedCountries] = useState(undefined)
    const [filteredCountries, setFilteredCountries] = useState(undefined)

    const search = (event: {
        query: {
            trim: () => { (): any; new (): any; length: any }
            toLowerCase: () => any
        }
    }) => {
        // Timeout to emulate a network connection
        setTimeout(() => {
            let _filteredCountries

            if (!event.query.trim().length) {
                _filteredCountries = [...countries]
            } else {
                _filteredCountries = countries.filter((country: any) => {
                    return country.name
                        .toLowerCase()
                        .startsWith(event.query.toLowerCase())
                })
            }

            setFilteredCountries(_filteredCountries as any)
        }, 250)
    }

    useEffect(() => {
        CountryService.getCountries().then((data) => setCountries(data as any))
    }, [])

    return (
        <AutoComplete
            field="name"
            multiple
            value={selectedCountries}
            suggestions={filteredCountries}
            completeMethod={search as any}
            onChange={(e) => setSelectedCountries(e.value)}
        />
    )
}

// EOF
