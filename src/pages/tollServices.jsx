import React from 'react';
import { MainLayout } from '../components/layouts/MainLayout';
import UnderDevelopment from './underDevelopment';

export default function TollServicePage({ isSidebarVisible, toggleSidebar }) {
  return (
    <MainLayout  isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar}>
      <UnderDevelopment />
    </MainLayout>
  );
}