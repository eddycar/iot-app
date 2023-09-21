import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import AdminLayout from "./layouts/Admin/Admin.jsx"

function App() {
  
  return (
    <>
       <BrowserRouter>
    <Routes>
      {/* <Route path="/auth/*" element={<AuthLayout />} /> */}
      <Route path="/admin/*" element={<AdminLayout />} />
      {/* <Route path="/rtl/*" element={<RTLLayout />} /> */}
      <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
