import { ApiError } from "../utils/api-error";

const allowedImageTypes = new Set(["image/jpeg", "image/png", "image/webp"]);
const maxImageSizeBytes = 5 * 1024 * 1024;

export const validateImageUploadMetadata = (file?: { mimetype: string; size: number }) => {
  if (!file) {
    throw new ApiError(400, "FILE_REQUIRED", "uploads.fileRequired");
  }
  if (!allowedImageTypes.has(file.mimetype)) {
    throw new ApiError(400, "INVALID_FILE_TYPE", "uploads.invalidType");
  }
  if (file.size > maxImageSizeBytes) {
    throw new ApiError(400, "FILE_TOO_LARGE", "uploads.fileTooLarge");
  }
  return true;
};
