import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SingUp from "./pages/SingUp"
import AppLayout from "./ui/AppLayout"
import Profile from "./pages/Profile"
import Notification from "./pages/Notification"

function App() {

  return (
    <>
      <Routes>
        <Route path="/singup" element={<SingUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="profile/:username" element={<Profile />} />
          <Route path="notification" element={<Notification />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
