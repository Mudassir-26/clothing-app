import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from './components/Card'
import SignUpForm from "./components/signup"


function App() {


  return (
    <>
      <Navbar />
      <div className="cards">
        <Card title="card 1" description="card 1 disc" />
        <Card title="card 2" description="card 2 disc" />
        <Card title="card 3" description="card 3 disc" />
        <Card title="card 4" description="card 4 disc" />
      </div>
      <div>
        <SignUpForm />
      </div>

      <Footer />
    </>
  )
}

export default App
