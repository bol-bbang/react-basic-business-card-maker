class UploadService{
  async upload(file){
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET_NAME);

    const result = await fetch(process.env.REACT_APP_UPLOAD_URL, {
                      method: 'POST',
                      body: formData
                    });

    return await result.json();

  }
}

export default UploadService;