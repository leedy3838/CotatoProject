import React, {useEffect} from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import LogoutBox from './LogoutBox';
import { useDispatch, useSelector } from 'react-redux';
import {logout} from '../../modules/user';


const MyPageFormBlock = styled.table`
    width: 50%;
    height: 200px;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.1);
`;

const LineBlock = styled.tr`
    width: 100%;
    padding: 0;
    margin: auto 0;
`;

const FullLine = styled.td`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    border-bottom: 2px solid #dcdcdc;
    padding: 0;
    margin: 0;
`;

const HalfLeftLine = styled.td`
    display: flex;
    justify-content: center;
    align-items: center;
    float: left;
    width: 50%;
    height: 100px;
    border-bottom: 2px solid #dcdcdc;
    border-right: 2px solid #dcdcdc;
    padding: 0;
    margin: 0;
`;

const HalfRightLine = styled.td`
    display: flex;
    justify-content: center;
    align-items: center;
    float: left;
    width: 49.5%;
    height: 100px;
    border-bottom: 2px solid #dcdcdc;
    padding: 0;
    margin: 0;
`;

const TextBox = styled.div`
    margin-left: 20px;
    font-size: 20px;
`;

const MyPageForm = ({ history }) => {
    return(
        <MyPageFormBlock>
            <LineBlock>
                <HalfLeftLine>

                </HalfLeftLine>
                <HalfRightLine>
                    <LogoutBox>
                    <LogoutButton />
                    </LogoutBox>
                </HalfRightLine>
            </LineBlock>
            <LineBlock>
                <HalfLeftLine>
                    <TextBox>
                        <Link to="/modify">
                            비밀번호 변경
                        </Link>
                    </TextBox>
                </HalfLeftLine>
                <HalfRightLine>
                    <TextBox>
                        <Link to="#">
                            내 게시글
                        </Link>
                    </TextBox>
                </HalfRightLine>
            </LineBlock>
            <LineBlock>
                <HalfLeftLine>
                    내 상점 : {localStorage.getItem("plus")}
                </HalfLeftLine>
                <HalfRightLine>
                    내 벌점 : {localStorage.getItem("minus")}
                </HalfRightLine>
            </LineBlock>
        </MyPageFormBlock>
    );
};


export default withRouter(MyPageForm);