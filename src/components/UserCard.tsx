import React from 'react';
import { UserProfileType } from '../types/UserTypes';

interface UserProps {
  userProfile: UserProfileType | undefined;
  userId: string;
  setUserId: React.Dispatch<React.SetStateAction<string>>;
  getUserProfile: () => Promise<void>;
  isProfile: boolean;
}

function userCard({ userProfile, userId, setUserId, getUserProfile, isProfile }: UserProps) {
  return (
    <div>
      <div>
        <input
          autoFocus
          value={userId}
          placeholder="유저 아이디를 입력해주세요."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserId(e.target.value)}
          onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
              if (userId === '') {
                alert('아이디값을 입력해주세요!');
                return;
              }
              getUserProfile();
            }
          }}
          required
        />
      </div>
      {isProfile ? (
        <div>로딩 중...</div>
      ) : (
        userProfile && (
          <div>
            아이디값: {userProfile.id}
            <h1>이름: {userProfile.name}</h1>
            직장: {userProfile.company.name}
            <br />
            주소:{' '}
            {`${userProfile.address.city} ${userProfile.address.street} ${userProfile.address.suite} (${userProfile.address.zipcode})`}
          </div>
        )
      )}
    </div>
  );
}

export default userCard;
