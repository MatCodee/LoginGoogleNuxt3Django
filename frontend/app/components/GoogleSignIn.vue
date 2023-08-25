<script setup lang="ts">
import { GoogleSignInButton, type CredentialResponse, } from "vue3-google-signin";

// handle success event
const handleLoginSuccess = (response: CredentialResponse) => {
  const { credential } = response;
  console.log("Access Token", credential);
  fetchData(credential);
};

// handle an error event
const handleLoginError = () => {
  console.error("Login failed");
};

function fetchData(accessToken: any) {
    const headers = {
        //'Content-Type': 'application/json',
        'Content-Type': 'application/json'
        //'Authorization': 'Bearer ' + token
    }
    const options = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({access_token: accessToken}),
    }
    const response = fetch('http://localhost:8000/rest-auth/google/',options);
    console.log(response);
    console.log("enviado la solicitud al backend")
    //message.value = data.title;
}
</script>

<template>
  <GoogleSignInButton
    @success="handleLoginSuccess"
    @error="handleLoginError"
  ></GoogleSignInButton>
</template>