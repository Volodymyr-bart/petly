import { useState } from 'react';
import { Img, ImgBox } from './UploadImage.styled';

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
      <ImgBox>
        <Img src={imagePreview} />
      </ImgBox>
    </>
  );
};