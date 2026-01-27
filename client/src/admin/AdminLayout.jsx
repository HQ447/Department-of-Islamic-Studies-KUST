import React from 'react'
import { Outlet } from 'react-router'
import AdminSidebar from './AdminSidebar'

function AdminLayout() {
    return (
        <div>
            <AdminSidebar />
            <Outlet />
        </div>
    )
}

export default AdminLayout