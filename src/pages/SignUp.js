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

const Sign = styled.div`
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
`;

const Email = styled.div`
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
const EmailInput = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 3px;
    border: 1px solid gray;
`;

const NickName = styled.div`
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
const NickNameInput = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 3px;
    border: 1px solid gray;
`;

const SignUpBtn = styled.div`
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

const Signin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        color: black;
        font-weight: 600;
        letter-spacing: -1px;
    }
`;

const SignInBtn = styled.p`
    color: rgb(59, 116, 227) !important;
    text-decoration: underline;
    font-weight: 600;
    letter-spacing: -1px;
    cursor: pointer;
    margin-left: 5px;
`;

function SignUp() {
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
                <p>간편 SNS 회원가입</p>
                <SNSLogos>
                    <img src="img/kakaoLogo.png" />
                    <img src="img/googleLogo.png" />
                    <img src="img/naverLogo.png" />
                    <img src="img/appleLogo.png" />
                    <img src="img/facebookLogo.png" />
                </SNSLogos>
            </SimpleSnsLogin>

            <Sign>
                <p>회원가입에 필요한 정보를 입력하세요.</p>
                <Id>
                    <p>아이디</p>
                    <IdInput placeholder="4자 이상 16자 이하"></IdInput>
                </Id>
                <Pw>
                    <p>비밀번호</p>
                    <PwInput placeholder="6자 이상"></PwInput>
                </Pw>
                <Email>
                    <p>이메일</p>
                    <EmailInput placeholder="bestar@bestar.kr"></EmailInput>
                </Email>
                <NickName>
                    <p>닉네임</p>
                    <NickNameInput placeholder="2자 이상 16자 이하로 작성해주세요"></NickNameInput>
                </NickName>

                <SignUpBtn>회원가입</SignUpBtn>
            </Sign>

            <Signin>
                <p>이미 회원이신가요?</p>
                <SignInBtn>
                    <Link to="/signin">로그인</Link>
                </SignInBtn>
            </Signin>
        </TopContainer>
    );
}

export default SignUp;
