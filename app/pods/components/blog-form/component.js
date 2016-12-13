import imageCropper from 'ember-cli-image-cropper/components/image-cropper';
import Ember from 'ember';

export default imageCropper.extend({
  store: Ember.inject.service(),
  blog: undefined,
  uploadedFile: undefined,

  cropperContainer: '.cropper-container > img',
  aspectRatio: 1,
  minCropBoxWidth: 100,
  minCropBoxHeight: 100,
  modal: true,
  highlight: false,
  movable: false,
  zoomable: false,
  dragMode: 'move',
  viewMode: 1,

  blogTypeList: Ember.computed(function () {
    return this.get('store').findAll('blog-type');
  }),

  init() {
    this._super(...arguments);
    const blog = this.get('item') || this.get('store').createRecord('blog', {
        user: this.get('authService.currentUser'),
      });
    this.set('blog', blog);
  },

  willDestroyElement() {
    this.get('blog').rollbackAttributes();
  },

  getCroppedImage() {
    const container = this.$(this.get('cropperContainer'));
    return container.cropper('getCroppedCanvas').toDataURL();
  },

  actions: {
    loadImage(event) {
      const fileReader = new FileReader();
      const container = this.$(this.get('cropperContainer'));
      const image = event.target.files[0];
      if (image) {
        fileReader.readAsDataURL(image);
        this.set('uploadedFile', true);
      }
      fileReader.onloadend = () => {
        container.cropper('replace', fileReader.result);
      };
    },

    chooseBlogType(type){
      const selectedType = this.set('type', type);
      this.get('blog').set('blogType', selectedType);
    },

    save() {
      //TODO: move 'container' to if block
      //!
      if(this.get('uploadedFile')){
        const container = this.$(this.get('cropperContainer'));
        const croppedImage = container.cropper('getCroppedCanvas').toDataURL();
        this.set('blog.cover', croppedImage);
      }
      this.sendAction('action', this.get('blog'));
    }
  }

});
