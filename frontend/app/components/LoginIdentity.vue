<script setup>
const callback = (response) => {
  // This callback will be triggered when the user selects or login to
  // his Google account from the popup
  console.log("Handle the response", response)
  fetchData(response.credential)
}
const fetchData = (accessToken)  =>   {
    const response =  fetch("http://localhost:8000/rest-auth/google/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ access_token: accessToken}),
    });
}
</script>

<template>
  <GoogleLogin :callback="callback"/>
</template>