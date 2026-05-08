import MyServicesPageComponent from '@/components/pages/user/MyServicesPageComponent/MyServicesPageComponent';
import WithAuth from '@/role-wrappers/WithAuth';
import React from 'react';

const MyServicesPage = () => {
  return (
    <WithAuth>
      <MyServicesPageComponent />
    </WithAuth>
  );
};

export default MyServicesPage;
