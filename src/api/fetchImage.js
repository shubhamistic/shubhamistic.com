export const fetchImage = async (url) => {
  // Fetch the image from the API
  const response = await fetch(url);

  if (response.ok) {
    return await response.blob()
  }

  return null;
}