import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa'; // You need to install react-icons

const AccordionMenu = ({ previousEvents }) => {
    const [openItemId, setOpenItemId] = useState(null);

    const toggleItem = (id) => {
        setOpenItemId(openItemId === id ? null : id);
    };

    const hasExtraData = (event) => {
        return event.description || event.image1;
    };

    return (
        <div>
            {previousEvents.map(event => (
                <div key={event.id} className="accordion-item" style={{ opacity: openItemId === event.id ? 1 : 0.6 }}>
                    <div className="accordion-title" onClick={() => hasExtraData(event.previousEvents) && toggleItem(event.id)}>
                        {event.title}
                        {hasExtraData(event.previousEvents) && (openItemId === event.id ? <FaMinus /> : <FaPlus />)}
                    </div>
                    {openItemId === event.id && (
                        <div className="accordion-content">
                            {event.previousEvents.description && <p>{event.previousEvents.description}</p>}
                            {event.previousEvents.image1 && (
                                <img src={event.previousEvents.image1.mediaItemUrl} alt={event.previousEvents.image1.altText} />
                            )}
                            {/* Add more fields if necessary */}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default AccordionMenu;
