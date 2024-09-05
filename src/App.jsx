import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/home' element={<ShopCategory banner={men_banner} category="Men"/>}/>
          <Route path='/women' element={<ShopCategory banner={women_banner} category="Women"/>}/>
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category="Kids"/>}/>
          
          <Route path='/product' element={<Product />}> 
            <Route path=':productID' element={<Product/>}/>
          </Route>

          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        
        </Routes>
        <Footer/>

      </BrowserRouter> 
    </>
  )
}

export default App
