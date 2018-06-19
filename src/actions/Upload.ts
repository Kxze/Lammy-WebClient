export const setUploadType = (uploadType: string): any => ({
  type: "SET_UPLOAD_TYPE",
  uploadType,
})

export const setMetaData = (field: string, data: string): any => ({
  type: `SET_${field.toUpperCase()}_NAME`,
  data,
})
