import React from 'react';
import { withRouter } from 'react-router-dom';
import WithRouterSample from './WithRouterSample';

const data = {
  phinyata: {
    name: 'fondue',
    description: 'Lorem Ipsum Dolar Sit Amet',
  },
  vlvldpearl: {
    name: 'kinew',
    description: 'Lorem Ipsum Dolar Sit Amet',
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];

  if (!profile) {
    return <div>[ERROR] User does not exist</div>;
  } else {
    return (
      <div>
        <h3>
          {username}({profile.name})
        </h3>
        <p>{profile.description}</p>
        <WithRouterSample />
      </div>
    );
  }
};

export default withRouter(Profile);
