import * as React from 'react';
import { Footer } from './Footer';
import "./layout.css";

export const Layout: React.SFC = (props) => {
  return (
    <div className="app">
      <div className="header">
        hi
      </div>
      <div className="content">
        {props.children}
      </div>
      <Footer />
    </div>
  );
}
