import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css'

const BlurBackground = ({ modalVisible }) => {
  return (
    <div className={`blur-background ${modalVisible ? 'visible' : ''}`}></div>
  );
};

const Lessons = () => {
    const [scheduleData, setScheduleData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalData, setModalData] = useState({});

    useEffect(() => {
        const fetchScheduleData = async () => {
            try {
                const response = await axios.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vSt-G8ZaTokNNZrj7GZ8VuWTV9W2NcrH_RlFOe8riQafyE-vrG3JNnwu_DvwdacBpspj8mtfUKawEs_/pubhtml');
                const htmlData = response.data;
                const parser = new DOMParser();
                const parsedHtml = parser.parseFromString(htmlData, 'text/html');
                const tableRows = parsedHtml.querySelectorAll('tr');

                const data = [];
                tableRows.forEach((row, index) => {
                    if (index > 1) {
                        const rowData = {
                            image: row.cells[1].innerText,
                            price: row.cells[4].innerText,
                            date: row.cells[2].innerText,
                            description: row.cells[3].innerText,
                            lesson_name: row.cells[5].innerText,
                            specialist_name: row.cells[6].innerText,
                            image_modal: row.cells[7].innerText,
                            tg_chat: row.cells[8].innerText,
                        };
                        data.push(rowData);
                }
                });

                setScheduleData(data);
            } catch (error) {
                console.error('Error fetching schedule data:', error);
            }
        };

        fetchScheduleData();
        const interval = setInterval(fetchScheduleData, 30000000);

        return () => clearInterval(interval);
    }, []);

    const handleShowModal = (item) => {
        setModalData(item);
        setModalVisible(true);
    }

    const handleHideModal = () => {
        setModalVisible(false);
    }

    const handleClickOutside = (event) => {
        if (!event.target.closest('.modal') && modalVisible) {
          setModalVisible(false);
        }
    };

    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [modalVisible]);

    return (
        <div className='schelude_con'>
          <p className='schelude_heading'>Расписание групп</p>
          {scheduleData.map((item, index) => (
            <div onClick={() => handleShowModal(item)} className='schelude_item' key={index}>
                <img className='schelude_lesson_img' src={item.image} alt="smth" />
              <p className='schelude_lesson_name'>{item.lesson_name}</p>
              <p className='schelude_lesson_date'>{item.date}</p>
              <button className='schelude_button' onClick={() => handleShowModal(item)}>+</button>
            </div>
          ))}
          {modalVisible && (
            <>
            <BlurBackground modalVisible={modalVisible} />
            <Modal modalVisible={modalVisible} setModalVisible={handleHideModal} modalData={modalData} />
            </>
          )}
        </div>
      );
};

const Modal = ({ modalVisible, setModalVisible, modalData }) => {
    return (
      <div className={`modal ${modalVisible ? 'visible' : ''}`}>
        <div className='modal_specialist_name_con'><p className="modal_majestic-heading-name">{modalData.specialist_name}</p></div>
        <div className="modal_psychotherapy-platform-layout">
        <img className="modal_image-container-1" src={modalData.image_modal} alt="smth" />
        <div className="modal_psychotherapy-info-block">
            <div className="modal_psychotherapy-platform-welcome">
            <span className='modal_close' onClick={setModalVisible}>×</span>
            <p className="modal_majestic-heading-1">{modalData.lesson_name}</p>
            <p className="modal_psychotherapy-text-style">{modalData.description.split('\n')[0]}</p>
            <p className="modal_majestic-heading-2">{modalData.price}</p>
            </div>
            <div className="modal_group-schedule-button-container">
            <button onClick={() => window.location.href = modalData.tg_chat} className="modal_group-schedule-button">
              <p className='modal_button-txt'>Написать специалисту</p>
            </button>
				</div>
            </div>
        </div>
      </div>
    );
  };

export default Lessons;