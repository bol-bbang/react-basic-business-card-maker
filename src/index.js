import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import UploadService from './service/upload_service';
import ImageFileInput from './components/image_file_input/image_file_input';

const authService = new AuthService();
const uploadService = new UploadService();
const FileInput = props => (
  <ImageFileInput {...props} uploadService={uploadService}/>
)

ReactDOM.render(
  <React.StrictMode>
    <App FileInput={FileInput} authService={authService} />
  </React.StrictMode>,
  document.getElementById('root')
);
