import React from 'react'

export interface UserProps {
  firstName: string;
  header: string; 
  subHeader: string; 
}

interface BaseHeaderProps {
  appName: string;
  user: UserProps;
  children: React.ReactNode;
}

const BaseHeader: React.FC<BaseHeaderProps> = (props) => {
  const { appName, user, children } = props;
  return (
    <>
      <h1>{appName}</h1>
      <div>{user.firstName}</div>
      <div>{user.header}</div>
      <div>{user.subHeader}</div>
      {children}
    </>
  )
}

export default BaseHeader;