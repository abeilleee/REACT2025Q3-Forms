import { IMG_MAX_SIZE_BYTES, VALID_EXTENSIONS } from './constants';

export const isValidType = (files: unknown) => {
  if (!(files instanceof FileList)) {
    return false;
  }

  return Array.from(files).every((file) =>
    VALID_EXTENSIONS.includes(file.type)
  );
};

export const isValidSize = (files: unknown) => {
  if (!(files instanceof FileList)) {
    return false;
  }

  return Array.from(files).every((file) => file.size <= IMG_MAX_SIZE_BYTES);
};
