<template>
    <button @click="login">Iniciar sesión con Google</button>
</template>

<script>
import { useAuth } from '@sidebase/nuxt-auth';

export default {
    setup() {
        const { login } = useAuth();
        return {
            login,
        }
    }
}
</script>