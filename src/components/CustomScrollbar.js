import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import '../styles/components/CustomScrollbar.scss';

export default function CustomScrollbar({ children }){
  return (
    <Scrollbars
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      renderThumbVertical={({ style, ...props }) => (
        <div
          className="vertical-scrollbar vertical-hexagon"
          style={style}
          {...props}
        />
      )}
    >
      {children}
    </Scrollbars>
  );
};