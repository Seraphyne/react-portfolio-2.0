import React from 'react';

export default function Portfolio(props) {

  function handleClick() {
    props.handleClick(props.projectId);
  }

  return (
    <li>
      <button onClick={handleClick}><img className="thumbnail" src={props.image} alt="" /></button>
      <p className="mini-title">{props.title}</p>
      <p className="mini-sub">{props.subTitle}</p>
    </li>
  );
}