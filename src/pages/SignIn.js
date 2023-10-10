import styled from "styled-components";
import { Link } from "react-router-dom";

const TopContainer = styled.div`
    width: 650px;
    height: 800px;
    /* border: 1px solid black; */

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

// 로고 + 비스타에 오신것을 환영합니다
const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-weight: 700;

    img {
        width: 150px;
        height: 50px;
    }

    p {
        font-size: 30px;
        margin: 0;
        margin-top: 10px;
        letter-spacing: -1px;
    }
`;

const SimpleSnsLogin = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        color: #737373;
        letter-spacing: -1px;
        font-weight: 600;
    }
`;

const SNSLogos = styled.div`
    width: 350px;
    display: flex;
    justify-content: space-around;
    img {
        width: 40px;
        height: 40px;
        cursor: pointer;
    }
`;

const Login = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;

    p {
        color: #737373;
        letter-spacing: -1px;
        font-weight: 600;
    }
`;

const Id = styled.div`
    width: 350px;
    display: flex;
    flex-direction: column;
    p {
        color: black;
        font-weight: 600;
        letter-spacing: -1px;
        margin-bottom: 6px;
        margin-top: 0px;
    }
`;
const IdInput = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 3px;
    border: 1px solid gray;
    text-indent: 10px;
`;

const Pw = styled.div`
    width: 350px;
    display: flex;
    flex-direction: column;
    p {
        color: black;
        font-weight: 600;
        letter-spacing: -1px;
        margin-bottom: 6px;
        margin-top: 16px;
    }
`;
const PwInput = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 3px;
    border: 1px solid gray;
    text-indent: 10px;
`;

const LoginBtn = styled.div`
    width: 350px;
    height: 50px;
    background-color: #3b74e3;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
    color: white;
    font-weight: 600;
    letter-spacing: -1px;
    cursor: pointer;

    &:hover {
        background-color: rgba(59, 116, 227, 0.9);
    }
`;

const FindId = styled.p`
    color: rgb(59, 116, 227) !important;
    text-decoration: underline;
    font-weight: 600;
    letter-spacing: -1px;
    cursor: pointer;
`;

const SignUp = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        color: black;
        font: 600;
        letter-spacing: -1px;
    }
`;
const SignUpBtn = styled.p`
    color: rgb(59, 116, 227) !important;
    text-decoration: underline;
    font-weight: 600;
    letter-spacing: -1px;
    cursor: pointer;
    margin-left: 5px;
`;

function SignIn() {
    return (
        <TopContainer>
            <TitleContainer>
                <Link to="/home">
                    <img
                        src="img/bestarLogo.png"
                        style={{ cursor: "pointer" }}
                    />
                </Link>

                <p>비스타에 오신것을 환영합니다.</p>
            </TitleContainer>

            <SimpleSnsLogin>
                <p>간편 SNS 로그인</p>
                <SNSLogos>
                    <img src="img/kakaoLogo.png" />
                    <img src="img/googleLogo.png" />
                    <img src="img/naverLogo.png" />
                    <img src="img/appleLogo.png" />
                    <img src="img/facebookLogo.png" />
                </SNSLogos>
            </SimpleSnsLogin>

            <Login>
                <p>계정으로 로그인</p>
                <Id>
                    <p>아이디</p>
                    <IdInput></IdInput>
                </Id>
                <Pw>
                    <p>비밀번호</p>
                    <PwInput></PwInput>
                </Pw>

                <LoginBtn>로그인</LoginBtn>

                <FindId>계정찾기</FindId>

                <SignUp>
                    <p>아직 비스타의 회원이 아니신가요?</p>
                    <SignUpBtn>
                        <Link to="/signup">회원가입</Link>
                    </SignUpBtn>
                </SignUp>
            </Login>
        </TopContainer>
    );
}

export default SignIn;
