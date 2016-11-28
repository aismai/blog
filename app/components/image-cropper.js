import imageCropper from 'ember-cli-image-cropper/components/image-cropper';
import Ember from 'ember';

export default imageCropper.extend({
    blog: undefined,
  // cropperOptions: {
    cropperContainer: '.cropper-container > img',
    // previewClass: '.img-preview',
    // croppedAvatar: null,
    aspectRatio: 1,
    minCropBoxWidth: 100,
    minCropBoxHeight: 100,
    modal: true,
    highlight: false,
    movable: false,
    zoomable: false,
    dragMode: 'move',
    viewMode: 1,
  // },

  init(){
    this._super(...arguments);
    const blogItem = this.get('item');
    this.set('blog', blogItem);
  },

  actions: {
    loadImage(event) {
      const fileReader = new FileReader();
      const container = this.$(this.get('cropperContainer'));
      const image = event.target.files[0];
      if (image) {
        fileReader.readAsDataURL(image);
      }
      fileReader.onloadend = () => {
        container.cropper('replace', fileReader.result);
      };
    },

    getCroppedAvatar() {
      const container = this.$(this.get('cropperContainer'));
      let croppedImage = container.cropper('getCroppedCanvas');
      console.log(croppedImage.toDataURL());
      this.set('blog.cover', croppedImage.toDataURL());
    }
  }
});