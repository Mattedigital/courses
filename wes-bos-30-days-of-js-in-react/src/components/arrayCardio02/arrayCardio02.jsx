import React from 'react';
import ShortId from 'shortid';

const ArrayCardio02 = () => {
  const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 },
  ];
  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 },
  ];

  const isAdult = people.some(person => (new Date()).getFullYear() - person.year >= 19);
  const allAdults = people.every(person => (new Date()).getFullYear() - person.year >= 19);
  const findComment = comments.find(comment => comment.id === 823423);
  const index = comments.findIndex(comment => comment.id === 823423);
  // removing the comment with id 823423
  const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1),
  ];

  const printNewComments = newComments.map(comment => <li key={`${ShortId.generate()}`}>{comment.text} | {comment.id}</li>);

  return (
    <div className="container">
      <section className="arrayCardioSection">
        <h4>Are some of the people adults? {isAdult ? 'true' : 'false'}</h4>
        <h4>Are all of the people adults? {allAdults ? 'true' : 'false'}</h4>
        <h4>Find title of comment with ID 823423. {findComment.text}</h4>
        <h4>What&apos;s the index of comment with ID 823423. {index}</h4>
        <h4>Provide new comments list without comment with ID 823423.</h4>
        <ul>{printNewComments}</ul>
      </section>
    </div>
  );
};

export default ArrayCardio02;
