import React from 'react';
import ReactDOM from 'react-dom/client';
// @ts-ignore: Bỏ qua kiểm tra kiểu cho App.jsx vì nó là JavaScript thuần
import App from './App.jsx';  
import './index.css';  // Bạn có thể sử dụng file CSS cho global styles

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found.");
}
