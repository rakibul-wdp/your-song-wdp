"use client";

import { FC } from "react";
import { FilterSection } from "./filter-section";
import Image from "next/image";

interface IField {
  id: number;
  label: string;
}

const musicGenres: IField[] = [
  { id: 1, label: "All" },
  { id: 2, label: "Rock" },
  { id: 3, label: "R&B" },
  { id: 4, label: "Country" },
  { id: 5, label: "Salsa" },
  { id: 6, label: "Soca" },
  { id: 7, label: "Soul" },
];
const artistsGender: IField[] = [
  { id: 1, label: "All" },
  { id: 2, label: "Male" },
  { id: 3, label: "Female" },
];
const instruments: IField[] = [
  { id: 1, label: "All" },
  { id: 2, label: "Guitard" },
  { id: 3, label: "Drums" },
];

export const Filters: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 relative">
      <Image
        className="absolute inset-0 -top-[1.5%] md:top-[90%] left-[60%] md:left-[85%] z-0 pointer-events-none hidden md:block"
        src="./icons/bg-icon/artist-bg-2.svg"
        width={100}
        height={100}
        alt="home bg icon one"
      />
      <FilterSection
        title="Music genre"
        fields={musicGenres}
        fieldType="option"
      />
      <FilterSection
        title="Artist's gender"
        fields={artistsGender}
        fieldType="checkbox"
      />
      <FilterSection
        title="Instrument"
        fields={instruments}
        fieldType="checkbox"
      />
      <FilterSection
        title="Instrument"
        fields={instruments}
        fieldType="checkbox"
      />
    </div>
  );
};
