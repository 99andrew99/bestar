import styled from "styled-components";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import { useContext, useState } from "react";
import { GlobalStyle } from "./GlobalStyles";

// import { AuthContext } from "./context/AuthContext";

const TopContainer = styled.div``;

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // const { isLoggedIn } = useContext(AuthContext);

    return (
        <>
            <GlobalStyle />
            <TopContainer>
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                isLoggedIn ? (
                                    <Navigate to="/home" />
                                ) : (
                                    <Navigate to="/signin" />
                                )
                            }
                        />

                        <Route path={"/signin"} element={<SignIn />} />
                        <Route path="/home" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </TopContainer>
        </>
    );
}

export default App;
