import { Route, Routes } from 'react-router-dom'
import './global.css'
import SignInForm from './_auth/forms/SignInForm'
import { Home } from './_root/pages'
import AuthLayout from './_auth/AuthLayout'
import SignUpForm from './_auth/forms/SigUpForm'


const App = () => {
    return (
        <main className='flex h-screen'>
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route path='/sign-in' element={<SignInForm />} />
                    <Route path='/sign-up' element={<SignUpForm />} />
                </Route>

                <Route>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </main>
    )
}

export default App