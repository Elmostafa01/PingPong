import { useState } from 'react';

interface Invitation {
  image: string;
  name: string;
  level: number;
  validation: string;
  decline: string;
}

const useInvitations = (initialInvitations: Invitation[]) => {
  const [invitations, setInvitations] = useState<Invitation[]>(initialInvitations);

  const handleValidationClick = (index: number) => {
    setInvitations(prevInvitations => {
      const updatedInvitations = [...prevInvitations];
      updatedInvitations.splice(index, 1);
      return updatedInvitations;
    });
  };

  return {
    invitations,
    handleValidationClick
  };
};

export default useInvitations;
