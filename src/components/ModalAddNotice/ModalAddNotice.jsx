import { useState } from 'react';
import { ModalAddNoticeAddMyPetFirstStep } from './ModalAddNoticeAddMyPetFirstStep';
import { ModalAddNoticeAddMySecondStep } from './ModalAddNoticeAddMyPetSecondStep';
import { ModalAddNoticeFistStep } from './ModalAddNoticeFirstStep';
import { ModalAddNoticeSecondStep } from './ModalAddNoticeSecondStep';
// import { useDispatch } from "react-redux";

export const ModalAddNotice = ({ onClose }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(4);
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
          onClose={onClose}
        />
      )}
      {activeStepIndex === 3 && (
        <ModalAddNoticeAddMyPetFirstStep
          setStepIndex={setActiveStepIndex}
          formData={formData}
          onClose={onClose}
        />
      )}
      {activeStepIndex === 4 && (
        <ModalAddNoticeAddMySecondStep
          setStepIndex={setActiveStepIndex}
          formData={formData}
          onClose={onClose}
        />
      )}
    </div>
  );
};
