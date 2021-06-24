class UploadService{
  async upload(file){
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "ychjyq0j");

    const result = await fetch('https://api.cloudinary.com/v1_1/dcllrgq1x/image/upload', {
                      method: 'POST',
                      body: formData
                    });

    return await result.json();

  }
}

export default UploadService;