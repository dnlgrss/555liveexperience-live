import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa'; // You need to install react-icons

const AccordionMenu = ({ previousWorks }) => {
    const [openItemId, setOpenItemId] = useState(null);

    const toggleItem = (id) => {
        setOpenItemId(openItemId === id ? null : id);
    };

    const hasExtraData = (event) => {
        return event.description || event.image1;
    };

    return (
        <div>
            {previousWorks.map(event => (
                <div key={event.id} className="accordion-item" style={{ opacity: openItemId === event.id ? 1 : 0.6 }}>
                    <div className="accordion-title" onClick={() => hasExtraData(event.previousWorks) && toggleItem(event.id)}>
                        {event.previousWorks.title}
                        {hasExtraData(event.previousWorks) && (openItemId === event.id ? <FaMinus /> : <FaPlus />)}
                    </div>
                    {openItemId === event.id && (
                        <div className="accordion-content">
                            {event.previousWorks.description && <p>{event.previousWorks.description}</p>}
                            {event.previousWorks.image1 && (
                                <img src={event.previousWorks.image1.mediaItemUrl} alt={event.previousWorks.image1.altText} />
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
