import { FC } from 'react'
import { CityInput } from './city-input'
import { DateInput } from './date-input'
import { IDInput } from './id-input'

export const SearchInputField: FC = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-[10px] xl:gap-[30px]">
      <CityInput />
      <DateInput />
      <IDInput label="Guests" tooltip="(Above 12 Years)" details="Adult" icon="/icons/guest.svg" />
      <IDInput
        label="Guests"
        tooltip="(Below 12 Years)"
        details="Children"
        icon="/icons/guest.svg"
      />
      <IDInput label="Number of Rooms" tooltip="" details="Room" icon="/icons/room.svg" />
    </div>
  )
}
