import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, // ignore character `?` in front of query string
  });
  const showDetail = query.detail === 'true'; // result of query parsing is string

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
      {showDetail && <p>detail value is true</p>}
    </div>
  );
};

export default About;
