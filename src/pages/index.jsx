import { Route, Routes } from "react-router";
import { lazy } from 'react'

// Pages

// Users

import User from "./User";

import Services from "./Services";
import Contact from "./Contact";
import Home from "./Home";
import Products from "./Products";
import Quotes from "./Quotes"
import Todos from "./Todos"
import Carts from "./Carts"
import Posts from "./Posts"

// About pages
import About from "./About";
import Mission from "./about/Mission";
import Vision from "./about/Vision";
import Future from "./about/Future";

const Users = lazy(() => import("./Users"))

// Fallback Page
import P404 from "./P404";

export default function Pages() {
    return (
        <Routes>
            {/* users */}
            <Route path='users' element={<Users />} />
            <Route path="/users/:user_id" element={<User />} />


            <Route path='services' element={<Services />} />
            <Route path='contact' element={<Contact />} />
            <Route path='products' element={<Products />} />
            <Route path='quotes' element={<Quotes />} />
            <Route path='todos' element={<Todos />} />
            <Route path='carts' element={<Carts />} />
            <Route path='posts' element={<Posts />} />

            <Route path='about' element={<About />}>
                <Route path='mission' element={<Mission />} />
                <Route path='vision' element={<Vision />} />
                <Route path='future' element={<Future />} />
            </Route>


            <Route path='/' element={<Home />} />

            {/* Fallback Route = Route Not Found */}
            <Route path='*' element={<P404 />} />
        </Routes>
    )
}