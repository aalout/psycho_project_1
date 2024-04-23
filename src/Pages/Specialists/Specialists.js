import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css'

const Specialists = () => {
    const [specialistsData, setSpecialistsData] = useState([]);

    useEffect(() => {
        const fetchSpecialistsData = async () => {
            try {
                const response = await axios.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vRMIe9Cx1g9QmlpcGokDNNLpNovTcmAGH3exFQ-RIUZW1KdlGOlcSlnnxQk5b9qa5jiGELQe4HiEzNL/pubhtml');
                const htmlData = response.data;
                const parser = new DOMParser();
                const parsedHtml = parser.parseFromString(htmlData, 'text/html');
                const tableRows = parsedHtml.querySelectorAll('tr');

                const data = [];
                tableRows.forEach((row, index) => {
                    if (index > 1) {
                        const rowData = {
                            id: index, // Add a unique id for each specialist
                            image: row.cells[1].innerText,
                            name: row.cells[2].innerText,
                            description: row.cells[3].innerText,
                            tg: row.cells[4].innerText,
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
        const interval = setInterval(fetchSpecialistsData, 30000000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="specialists-container">
            {specialistsData.map((specialist) => (
                <div key={specialist.id} className="specialist-card">
                    <div className="specialist-image-container">
                        <img src={specialist.image} alt={specialist.name} />
                    </div>
                    <div className="specialist-info-container">
                        <p className='specialist-name'>{specialist.name}</p>
                        <p className='specialist-description'>{specialist.description.length > 1000 ? specialist.description.substr(0, 1000) + '...' : specialist.description}</p>
                        <button onClick={() => window.location.href = specialist.tg} className="tg-group-schedule-button">
                            <p className='modal_button-txt'>Написать специалисту</p>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Specialists;