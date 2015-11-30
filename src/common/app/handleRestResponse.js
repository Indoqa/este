export default (response) => {
  console.log("handle response: " + response.json());
  if (response.ok){
    return response.json()
  }
  throw response
}
