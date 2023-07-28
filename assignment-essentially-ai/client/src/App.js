import UserInput from './components/UserInput';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import './css/App.css';
import { ConfigProvider } from 'antd';
import { useRef } from 'react';
function App() {
    const containerRef = useRef(null);

    return (
        <LocomotiveScrollProvider
            options={{
                smooth: true,
                lerp: 0.03,
            }}
            watch={[]}
            containerRef={containerRef}
        >
            <div data-scroll-container ref={containerRef}>
                <ConfigProvider
                    theme={{
                        token: {
                            fontFamily: 'Inter var',
                        },
                    }}
                >
                    <Navbar />
                    <div className="container">
                        <Header />
                        <UserInput />
                    </div>
                    <Footer />
                </ConfigProvider>
            </div>
        </LocomotiveScrollProvider>
    );
}

export default App;
