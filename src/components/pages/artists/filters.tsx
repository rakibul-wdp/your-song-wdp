"use client";

import { FC } from "react";
import { FilterSection } from "./filter-section";

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
    <div className="flex flex-col items-center justify-center gap-4">
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
