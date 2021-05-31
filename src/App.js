import "./App.css";
import { Routes, Route } from "react-router-dom";
import { DataProvider } from "./contexts/DataContext";
import { LikedProvider } from "./contexts/LikedContext";
import Nav from "./components/Nav";
import VideoList from "./components/VideoList";
import VideoPage from "./components/VideoPage";
import Liked from "./components/Liked";
import WatchLater from "./components/WatchLater";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
    return (
        <div className="App">
            <Nav />
            <DataProvider>
                <LikedProvider>
                    <Routes>
                        <Route path="/" element={<VideoList />} />
                        <Route path="/videos/:id" element={<VideoPage />} />
                        <Route path="/liked" element={<Liked />} />
                        <Route path="/later" element={<WatchLater />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                    </Routes>
                </LikedProvider>
            </DataProvider>
        </div>
    );
}

export default App;
