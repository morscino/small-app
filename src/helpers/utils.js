import slug from 'slug';
/**
 * Utils class stores all utils functions
 */
export class Utils {
  // toSlug converts a string to a slug string
  static toSlug(value) {
    return slug(value);
  }
}