import * as cropro from 'cropro';

class CropService{

  showCropArea(file){
    console.log(`showCropArea : ${file}`);
    console.log(file);

    /*
    if (this.imgRef.current !== null) {
      // create a CropArea
      const cropArea = new cropro.CropArea(this.imgRef.current);
      // attach an event handler to assign cropped image back to our image element
      cropArea.addRenderEventListener(dataUrl => {
        if (this.imgRef.current) {
          this.imgRef.current.src = dataUrl;
        }
      });
      // launch CROPRO
      cropArea.show();
    }
    */
  }

}

export default CropService;