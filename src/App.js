import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Admin from "./pages/Admin";
import Badge from "./pages/Badge";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import BadgeDetails from "./pages/BadgeDetails";
import NotFound from "./pages/NotFound";

export default function App() {
  var cert_details = require('./dummy_data/json_data/Ventur_cert.json');
  var image = require('./dummy_data/assets/certified_collator.png');
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="admin" element={<Admin />} />
          <Route path="badge" element={<Badge/>} />
          <Route path="profile" element={<Profile/>} />
          <Route path="badge_details" element={<BadgeDetails cert_details={cert_details} is_admin={true} image={image}/>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
