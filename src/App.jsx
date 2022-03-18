
import { Link, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='flex justify-center p-6 w-screen h-screen bg-gray-200 overflow-y-auto'>
      <div className='max-w-md'>
        <div className='flex items-center justify-center mb-4 text-xs text-gray-600 font-semibold uppercase tracking-wide'>
          {/* <link rel="stylesheet" href="www.youtube.com"  className='mx-2 px-4 py-2 rounded-x1 hover:bg-gray-100 transition-all ease-in-out'/> */}
          <Link to='/home' className='mx-2 px-4 py-2 rounded-x1 hover:bg-gray-100 transition-all ease-in-out'>
            Home
          </Link>
          <Link to='/about' className='mx-2 px-4 py-2 rounded-x1 hover:bg-gray-100 transition-all ease-in-out'>
            About
          </Link>
        </div>
      </div>
      <Routes>
        <Route path='/home' element=''></Route>
      </Routes>
    </div>
  );
}

export default App;
