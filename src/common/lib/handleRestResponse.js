export default (response) => {
  if (response.ok) {
    return response.json()
  }
  throw response
}
