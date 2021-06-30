import React, { memo } from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import UploadService from './service/upload_service';
import DatabaseService from './service/database_service';
import ImageFileInput from './components/image_file_input/image_file_input';

const authService = new AuthService();
const uploadService = new UploadService();
const databaseService = new DatabaseService();
const FileInput = memo(props => (
  <ImageFileInput {...props} uploadService={uploadService}/>
));

ReactDOM.render(
  <React.StrictMode>
    <App FileInput={FileInput} authService={authService} databaseService={databaseService} />
  </React.StrictMode>,
  document.getElementById('root')
);
