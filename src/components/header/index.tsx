import React from 'react';
import {
  Link
} from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <span style={{ margin: '0 15px' }}>
        <Link to="/">TODO List</Link>
      </span>
      <span style={{ margin: '0 15px' }}>
        <Link to="/home">Home</Link>
      </span>
    </div>
  );
}