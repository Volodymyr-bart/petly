import { useState } from "react";
import { ModalAddNoticeFistStep } from "./ModalAddNoticeFirstStep";
import { ModalAddNoticeSecondStep } from "./ModalAddNoticeSecondStep";
// import { useDispatch } from "react-redux";

export const ModalAddNotice = ({ onClose }) => {
    
    const [activeStepIndex, setActiveStepIndex] = useState(0);
    const [formData, setFormData] = useState({});

    return (
        <div>
            {activeStepIndex === 0 && (
                <ModalAddNoticeFistStep
                    onClose={onClose}
                    setStepIndex={setActiveStepIndex}
                    formData={formData}
                    setFormData={setFormData}
                />
            )}
            {activeStepIndex === 1 && (
                <ModalAddNoticeSecondStep
                    setStepIndex={setActiveStepIndex}
                    formData={formData}
                    // addNotice={addNotice}  post to DB
                    onClose={onClose}
                />
            )}
        </div>
    )
}