import React, { useCallback, useState } from 'react';
import User from '../api/User';
import { UserCard } from '../components';
import { UserProfileResponse, UserProfileType } from '../types/UserTypes';

function UserProfile() {
  const [userProfile, setUserProfile] = useState<UserProfileType>();

  const [userId, setUserId] = useState<string>('1');

  const [isProfile, setIsProfile] = useState<boolean>(false);

  const getUserProfile = useCallback(async () => {
    setIsProfile(true);
    await User.getUserProfile(userId)
      .then((res: UserProfileResponse) => {
        setUserProfile(res);
        console.log(res);
      })
      .catch((err: Error) => {
        alert('없는 아이디값이에요!');
      });
    setIsProfile(false);
  }, [userId]);

  return (
    <div>
      <UserCard
        userProfile={userProfile}
        userId={userId}
        setUserId={setUserId}
        getUserProfile={getUserProfile}
        isProfile={isProfile}
      />
    </div>
  );
}

export default UserProfile;
