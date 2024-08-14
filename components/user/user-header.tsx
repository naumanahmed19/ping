// Avatar.tsx
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Assuming these are imported from somewhere
import UserNav from './user-nav';


const UserHeader = ({ user }) => (
  <>
    <div className='flex items-center my-10'>
    <Avatar>
      <AvatarImage src={user.profile.avatar} alt={user.name} />
      <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
    </Avatar>
    <div className='ml-3'>
      <h1 className='text-2xl font-semibold tracking-tight'>{user?.name}</h1>
      <p className='text-sm text-muted-foreground'>
        Joined {new Date(user?.created_at).toLocaleDateString()}
      </p>
   </div>
  </div>

  <UserNav user={user} />
  </>
);

export default UserHeader;


