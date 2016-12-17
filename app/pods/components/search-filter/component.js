import Ember from 'ember';
import BaseFilter from '../base-filter/component';

export default BaseFilter.extend({
    tagName:       '',

    run () {
      const searchParam = this.get('filterValue');
      if (searchParam) {
          const filteredBlogs = this.get('filterService.filteredBlogs')
                                    .filter((blog) => {
                                      const blogName        = blog.get('name');
                                      const blogDescription = blog.get('description');

                                      const findByName = blogName && blogName
                                          .toUpperCase()
                                          .includes(searchParam
                                            .toUpperCase()
                                          );

                                      const findByDescription = blogDescription && blogDescription
                                          .toUpperCase()
                                          .includes(searchParam);

                                      return findByName || findByDescription;
                                    });
          this.get('filterService')
              .setBlogs(filteredBlogs);
        }
        // else {
        //   // this.get('filterService')
        //   //     .setBlogs(this.get('filterService.blogs'));
        // }
      }
  }
);
