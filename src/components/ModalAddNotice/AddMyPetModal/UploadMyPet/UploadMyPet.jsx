import { useState } from 'react';
import { ImgBoxMyPet, ImgMyPet } from './UploadMyPet.styled';

export const UploadImage = ({ image }) => {
  const [imagePreview, setImagePreview] = useState();

  const reader = new FileReader();
  reader.readAsDataURL(image);
  reader.onload = () => {
    setTimeout(() => {
      setImagePreview(reader.result);
    }, 1000);
  };

  return (
    <>
      <ImgBoxMyPet>
        <ImgMyPet src={imagePreview} />
      </ImgBoxMyPet>
    </>
  );
};