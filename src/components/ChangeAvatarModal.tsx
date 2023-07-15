import React, { useState, ChangeEvent } from 'react';

interface ChangeAvatarModalProps {
  onClose: () => void;
  onImageUpload: (image: File) => void;
}

const ChangeAvatarModal: React.FC<ChangeAvatarModalProps> = ({ onClose, onImageUpload }) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setSelectedImage(file || null);
  };

  const handleImageUpload = () => {
    if (selectedImage) {
      onImageUpload(selectedImage);
      setSelectedImage(null);
      onClose();
    }
  };

  const handleCancel = () => {
    setSelectedImage(null);
    onClose();
  };

  return (
    <div className="change-avatar-modal">
      <div className="modal-content">
        <h2>Change Avatar</h2>
        <div className="image-upload">
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <div className="buttons">
          <button onClick={handleImageUpload}>Upload</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ChangeAvatarModal;
