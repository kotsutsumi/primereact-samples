import AutoCompleteBasic from '@/components/primereact/AutoComplete/Basic'
import AutoCompleteDropdown from '@/components/primereact/AutoComplete/Dropdown'
import AutoCompleteObjects from '@/components/primereact/AutoComplete/Objects'
import AutoCompleteTemplate from '@/components/primereact/AutoComplete/Template'
import AutoCompleteGroup from '@/components/primereact/AutoComplete/Group'
import AutoCompleteForceSelection from '@/components/primereact/AutoComplete/ForceSelection'
import AutoCompleteVirtualScroller from '@/components/primereact/AutoComplete/VirtualScroller'
import AutoCompleteMultiple from '@/components/primereact/AutoComplete/Multiple'
import AutoCompleteFloatLabel from '@/components/primereact/AutoComplete/FloatLabel'
import AutoCompleteInvalid from '@/components/primereact/AutoComplete/Invalid'
import AutoCompleteDisabled from '@/components/primereact/AutoComplete/Disabled'

export default function PrimeReact() {
    return (
        <div>
            <h2>AutoComplete</h2>
            <div>
                <h3>Basic</h3>
                <div>
                    <AutoCompleteBasic />
                </div>
            </div>
            <div>
                <h3>Dropdown</h3>
                <div>
                    <AutoCompleteDropdown />
                </div>
            </div>
            <div>
                <h3>Objects</h3>
                <div>
                    <AutoCompleteObjects />
                </div>
            </div>
            <div>
                <h3>Template</h3>
                <div>
                    <AutoCompleteTemplate />
                </div>
            </div>
            <div>
                <h3>Group</h3>
                <div>
                    <AutoCompleteGroup />
                </div>
            </div>
            <div>
                <h3>ForceSelection</h3>
                <div>
                    <AutoCompleteForceSelection />
                </div>
            </div>
            <div>
                <h3>VirtualScroller</h3>
                <div>
                    <AutoCompleteVirtualScroller />
                </div>
            </div>
            <div>
                <h3>Multiple</h3>
                <div>
                    <AutoCompleteMultiple />
                </div>
            </div>
            <div>
                <h3>FloatLabel</h3>
                <div>
                    <AutoCompleteFloatLabel />
                </div>
            </div>
            <div>
                <h3>Invalid</h3>
                <div>
                    <AutoCompleteInvalid />
                </div>
            </div>
            <div>
                <h3>Disabled</h3>
                <div>
                    <AutoCompleteDisabled />
                </div>
            </div>
        </div>
    )
}

// EOF
