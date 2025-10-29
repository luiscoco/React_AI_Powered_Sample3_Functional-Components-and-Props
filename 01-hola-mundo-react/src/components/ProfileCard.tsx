import React from 'react';
import './ProfileCard.css';

export interface ProfileCardProps {
  userName: string;
  imageUrl: string;
  description: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ userName, imageUrl, description }) => {
  return (
    <div className="profile-card">
      <img src={imageUrl} alt={userName} />
      <h1>{userName}</h1>
      <p>{description}</p>
    </div>
  );
};

export default ProfileCard;

