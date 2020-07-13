import React from 'react';
import { withRouter } from 'react-router-dom';
import WithRouterSample from './WithRouterSample';

const data = {
    velopert:{
        name : '빵빵덕',
        description : '오리 개발자'
    },
    gildong:{
        name : '홍길동',
        description : '홍길동전 주인공'
    }
};

const Profile = ({ match }) => {
    const { username } = match.params;
    const profile = data[username];
    if(!profile){
        return <div>존재하지 않는 사용자 입니다.</div>
    }
    return (
        <div>
            <h3>{username}({profile.name})</h3>
            <p>{profile.description}</p>
            <WithRouterSample></WithRouterSample>
        </div>
    );
};

export default withRouter(Profile);