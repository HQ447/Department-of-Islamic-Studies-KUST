import React from 'react';
import { Outlet } from 'react-router';
import AdminSidebar from './AdminSidebar';

function AdminLayout() {
    return (
        <div className="min-h-screen bg-gray-50">
            <AdminSidebar />
            <main className="lg:ml-64">
                <Outlet />
            </main>
        </div>
    );
}

export default AdminLayout;