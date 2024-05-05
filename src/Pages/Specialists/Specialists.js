import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css'
import SpecialistCard from "./SpecialistCard"

const API_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRMIe9Cx1g9QmlpcGokDNNLpNovTcmAGH3exFQ-RIUZW1KdlGOlcSlnnxQk5b9qa5jiGELQe4HiEzNL/pubhtml';
const INTERVAL_TIME = 30000;

const Specialists = () => {
  const [specialistsData, setSpecialistsData] = useState([]);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    const fetchSpecialistsData = async () => {
      try {
        const response = await axios.get(API_URL);
        const htmlData = response.data;
        const parser = new DOMParser();
        const parsedHtml = parser.parseFromString(htmlData, 'text/html');
        const tableRows = parsedHtml.querySelectorAll('tr');

        const data = [];
        tableRows.forEach((row, index) => {
          if (index > 1) {
            const rowData = {
              id: index,
              image: row.cells[1].textContent,
              name: row.cells[2].textContent,
              description: row.cells[3].textContent,
              tg: row.cells[4].textContent,
            };
            data.push(rowData);
          }
        });

        setSpecialistsData(data);
      } catch (error) {
        console.error('Error fetching schedule data:', error);
      }
    };

    fetchSpecialistsData();
    const interval = setInterval(fetchSpecialistsData, INTERVAL_TIME);

    return () => clearInterval(interval);
  }, []);

  const handleExpand = (id) => {
    setExpanded((prevExpanded) => ({...prevExpanded, [id]:!prevExpanded[id] }));
  };

  return (
    <div className="specialists-container">
      {specialistsData.map((specialist) => (
        <SpecialistCard
          key={specialist.id}
          specialist={specialist}
          expanded={expanded[specialist.id]}
          onExpand={() => handleExpand(specialist.id)}
        />
      ))}
    </div>
  );
};

export default Specialists;