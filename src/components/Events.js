import React from 'react';
import Sidebar from './Sidebar'

export default function Events() {
    return (
            <div
        style={{
          display: 'flex',
          height: '100vh',
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundImage: 'linear-gradient(147deg, #000000 0%, #130F40 74%)',
          padding: '2%'
        }}
      >
        <Sidebar />
        </div>
    )
}
