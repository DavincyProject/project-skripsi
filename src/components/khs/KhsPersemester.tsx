"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import TableKhsSemester from "./TableKhsSemester";

const KhsPersemester = () => {
  const [selectedSemester, setSelectedSemester] = useState("");
  const [semesterData, setSemesterData] = useState(null); // Assume API or data source

  useEffect(() => {
    // if (selectedSemester) {
    //   // Fetch data based on selectedSemester using your API or data source
    //   setSemesterData();
    // }
  }, []);

  const handleSemesterChange = (event: any) => {
    setSelectedSemester(event.target.value);
  };

  return (
    <div>
      <div className="flex items-center gap-2">
        <Image
          src={"/jadwal/date.svg"}
          alt="date icon"
          width={25}
          height={25}
        />
        <span className="font-bold">Kartu Hasil Studi (KHS) Per Semester</span>
      </div>

      <div className="flex items-end gap-2 justify-end">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Silakan Pilih Semester</span>
          </div>
          <select
            className="select select-bordered"
            value={selectedSemester}
            onChange={handleSemesterChange}
          >
            <option value="" disabled selected>
              Pilih Semester
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </label>
        <button className="btn btn-ghost btn-blue" disabled={!selectedSemester}>
          {!selectedSemester ? "Pilih Terlebih Dahulu" : "Lihat KHS"}
        </button>
      </div>

      {/* Conditionally render the component based on semesterData availability */}
      {/* {semesterData && ( */}
      <div>
        {/* Replace with your component that renders KHS data based on semesterData */}
        <TableKhsSemester semesterData={semesterData} />
      </div>
      {/* )} */}
    </div>
  );
};

export default KhsPersemester;
