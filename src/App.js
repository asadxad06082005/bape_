import React from "react";
import "./index.css"
import NavbarCom from "./components/NavbarCom/NavbarCom";
import {Routes, Route} from 'react-router-dom'
import Card from "./pages/Card/Card";
import Products from "./pages/Products/products";
import FileInfo from "./fileInfo";
import ContatctsCom from "./components/Contacts/ContatctsCom";
import Caraousel from "./pages/Caraousel/caraousel";
import News from "./pages/News/news";
import Bathing from "./pages/Bathing/bathing";
import Sitemap from "./pages/Sitemap/sitemap";
import Policy from "./pages/Policy/policy";
import Faq from "./pages/Faq/Faq";
import Profile from "./pages/Profile/profile";
import Accessibility from "./pages/Accessibility/accessibility";
import Newslatter from "./pages/Newslatter/newslatter";
import Header from "./pages/Header/head";
import Look from "./pages/Look/look";
import Sign from "./pages/sign/sign";
import Signup from "./pages/signup/signup";
import Shop from "./pages/Shop/shop";

function App() {
    return (
        <>
            <NavbarCom/>
            <Routes>
                <Route path="/" element={<Header/>}/>
                <Route path="/head" element={<Header/>}/>
                <Route  path="/products" element={<Products/>}/>
                <Route  path="/card" element={<Card/>}/>
                <Route path="/:id" element={<FileInfo/>}/>
                <Route path="/caraousel" element={<Caraousel/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/bathing" element={<Bathing/>}/>
                <Route path="/sitemap" element={<Sitemap/>}/>
                <Route path="/policy" element={<Policy/>}/>
                <Route path="/Faq" element={<Faq/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/accessibility" element={<Accessibility/>}/>
                <Route path="/newslatter" element={<Newslatter/>}/>
                <Route path="/look" element={<Look/>}/>
                <Route path="/sign" element={<Sign/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/shop" element={<Shop/>}/>
            </Routes>
            <ContatctsCom/>
        </>
    );
}

export default App;

