import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './CommentDetail';
import ApprovalCard from './ApprovalCard';
const getRandomNumber = () => {
  const val = Math.floor(Math.random() * 1000);
  return val;
};

const App = () => {
  const img = 'https://source.unsplash.com/random';

  return (
    <div className="ui container comments">
      <ApprovalCard>Are you sure you want to do this</ApprovalCard>
      <ApprovalCard>
        <Comment
          avatar={`${img}?sig=${getRandomNumber()}`}
          author="Sam"
          content="Nice blog post!"
          timeAgo="Today at 4:45PM"
        />
      </ApprovalCard>

      <ApprovalCard>
        <Comment
          avatar={`${img}?sig=${getRandomNumber()}`}
          author="Paul"
          content="I like the writing"
          timeAgo="Yesterday at 5:00PM"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
