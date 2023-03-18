'use client'

import React, { useEffect, useState } from 'react'
import {
    AutoComplete,
    AutoCompleteChangeEvent,
    AutoCompleteCompleteEvent
} from 'primereact/autocomplete'
import { CountryService } from '../service/CountryService'

interface Country {
    name: string
    code: string
}

export default function Template() {
    const [countries, setCountries] = useState<Country[]>([])
    const [selectedCountry, setSelectedCountry] = useState<Country>()
    const [filteredCountries, setFilteredCountries] = useState<Country[]>()

    const search = (event: AutoCompleteCompleteEvent) => {
        // Timeout to emulate a network connection
        setTimeout(() => {
            let _filteredCountries

            if (!event.query.trim().length) {
                _filteredCountries = [...countries]
            } else {
                _filteredCountries = countries.filter((country) => {
                    return country.name
                        .toLowerCase()
                        .startsWith(event.query.toLowerCase())
                })
            }

            setFilteredCountries(_filteredCountries)
        }, 250)
    }

    const itemTemplate = (item: Country) => {
        return (
            <div className="flex align-items-center">
                <img
                    alt={item.name}
                    src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
                    className={`flag flag-${item.code.toLowerCase()} mr-2`}
                    style={{ width: '18px' }}
                />
                <div>{item.name}</div>
            </div>
        )
    }

    useEffect(() => {
        CountryService.getCountries().then((data) => setCountries(data))
    }, [])

    return (
        <AutoComplete
            field="name"
            value={selectedCountry}
            suggestions={filteredCountries}
            completeMethod={search}
            onChange={(e: AutoCompleteChangeEvent) =>
                setSelectedCountry(e.value)
            }
            itemTemplate={itemTemplate}
        />
    )
}

// EOF
