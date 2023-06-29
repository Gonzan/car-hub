'use client'
import Image from "next/image";
import { SearchManufacturerProps } from "@/types"
import { Combobox, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import { manufacturers } from "@/constants";

const SearchManufacturer = ({manufacturer, setManufacturer}:SearchManufacturerProps) => {
  const [query,setQuery] = useState('')

  const filteredManufacturers = query === '' ? manufacturers :
    manufacturers.filter((item => item.toLocaleLowerCase()
      .trim()
      .includes(query.toLocaleLowerCase().trim())
  ))
  
  return(
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="car logo"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer:string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options>
            {filteredManufacturers.map((item, index) => {
              return (
              <Combobox.Option
                key={index}
                value={item}
                className={({ active }) =>
                      `relative search-manufacturer__option ${
                        active ? "bg-primary-blue text-white" : "text-gray-900"
                      }`
                    }
                >
                {item}
              </Combobox.Option>
              )
            })}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer
