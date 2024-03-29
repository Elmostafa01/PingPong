import React, { useState, ChangeEvent } from 'react';
import toast, { Toaster } from 'react-hot-toast';


interface ChangingProfilHolderProps {
  onImageUpload: (file: File) => void;
  onNameChange: (newName: string) => void;
}

const ChangingProfilHolder: React.FC<ChangingProfilHolderProps> = (props) => {
  const [btnShowUp, setBtnShowUp] = useState(false);
  

  const AppearBtn = () => {
    setBtnShowUp(!btnShowUp);
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      props.onImageUpload(files[0]);
    }
  };


  const handleNameReset = () => {
    const newName = prompt('Enter a new name:');
    if (newName) {
      const trimmedNewName = newName.trim();
      if (trimmedNewName.length >= 4 && trimmedNewName.length <= 10) {
        props.onNameChange(trimmedNewName);
      } else {
        toast.error('Name should be more than 4 and less than 10 characters.', {
          position: 'top-center',
          duration: 3000,
          style: {
            zIndex: '900',
            background: '#390000',
            color: '#fff',
            boxShadow: '0 0 2px rgba(0, 0, 0, 0.1)',
            fontFamily: "'Poppins', sans-serif",
            fontSize: '0.9rem'
          },
        });
      }
    }
  };

  return (
    <div className="profil-btn">
      <Toaster />
      <div
        className="btn"
        onClick={() => {
          AppearBtn();
        }}>
        <svg
          className="dots"
          width="17"
          height="4"
          viewBox="0 0 17 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.89 2C3.89 2.52 3.7 2.96 3.32 3.32C2.96 3.7 2.52 3.89 2 3.89C1.48 3.89 1.03 3.7 0.65 3.32C0.29 2.96 0.11 2.52 0.11 2C0.11 1.48 0.29 1.03 0.65 0.65C1.03 0.27 1.48 0.0799999 2 0.0799999C2.52 0.0799999 2.96 0.27 3.32 0.65C3.7 1.03 3.89 1.48 3.89 2ZM10.3959 2C10.3959 2.52 10.2059 2.96 9.82586 3.32C9.46586 3.7 9.02586 3.89 8.50586 3.89C7.98586 3.89 7.53586 3.7 7.15586 3.32C6.79586 2.96 6.61586 2.52 6.61586 2C6.61586 1.48 6.79586 1.03 7.15586 0.65C7.53586 0.27 7.98586 0.0799999 8.50586 0.0799999C9.02586 0.0799999 9.46586 0.27 9.82586 0.65C10.2059 1.03 10.3959 1.48 10.3959 2ZM16.9017 2C16.9017 2.52 16.7117 2.96 16.3317 3.32C15.9717 3.7 15.5317 3.89 15.0117 3.89C14.4917 3.89 14.0417 3.7 13.6617 3.32C13.3017 2.96 13.1217 2.52 13.1217 2C13.1217 1.48 13.3017 1.03 13.6617 0.65C14.0417 0.27 14.4917 0.0799999 15.0117 0.0799999C15.5317 0.0799999 15.9717 0.27 16.3317 0.65C16.7117 1.03 16.9017 1.48 16.9017 2Z"
            fill="#1657FF"
          />
        </svg>
      </div>
      <div className={btnShowUp === false ? 'dropProfil' : 'dropProfil active'}>
        <div className="change-avatar">
          <button className="change-avatar-btn">
            <svg
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.75 11.25V13.5H16V15H13.75V17.25H12.25V15H10V13.5H12.25V11.25H13.75ZM13.756 2.25C14.167 2.25 14.5 2.58375 14.5 2.99475V10.0065C14.0182 9.83632 13.5109 9.74958 13 9.75V3.75H1L1.00075 14.25L7.96975 7.28025C8.09872 7.15086 8.27051 7.07305 8.45283 7.06145C8.63515 7.04984 8.81542 7.10525 8.95975 7.21725L9.0295 7.281L11.689 9.9435C11.1075 10.1207 10.5679 10.4138 10.1027 10.8052C9.63755 11.1966 9.25646 11.6781 8.98244 12.2208C8.70841 12.7635 8.54712 13.356 8.50829 13.9627C8.46946 14.5693 8.55389 15.1776 8.7565 15.7507L0.244 15.75C0.0466101 15.7498 -0.142627 15.6712 -0.282133 15.5316C-0.421638 15.392 -0.5 15.2026 -0.5 15.0052V2.99475C-0.498627 2.79778 -0.419825 2.60926 -0.280615 2.46991C-0.141406 2.33056 0.0470352 2.25157 0.244 2.25H13.756ZM4 5.25C4.39782 5.25 4.77936 5.40804 5.06066 5.68934C5.34196 5.97064 5.5 6.35218 5.5 6.75C5.5 7.14782 5.34196 7.52936 5.06066 7.81066C4.77936 8.09196 4.39782 8.25 4 8.25C3.60218 8.25 3.22064 8.09196 2.93934 7.81066C2.65804 7.52936 2.5 7.14782 2.5 6.75C2.5 6.35218 2.65804 5.97064 2.93934 5.68934C3.22064 5.40804 3.60218 5.25 4 5.25Z"
                fill="#1657FF"
              />
            </svg>
            <span>Change Avatar</span>
            <input type="file" onChange={handleImageChange} />
          </button>
        </div>
        <div className="change-name">
          <button className="change-name-btn" onClick={handleNameReset}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 5C12.9481 2.78023 10.6527 1.25 8 1.25C4.27208 1.25 1.25 4.27208 1.25 8C1.25 11.7279 4.27208 14.75 8 14.75C11.7279 14.75 14.75 11.7279 14.75 8M14.75 1.25V5.75H10.25"
                stroke="#1657FF"
              />
            </svg>
            <span>Reset Name</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangingProfilHolder;
