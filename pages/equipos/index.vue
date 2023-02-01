<template>
    <div>
        <NuxtLink @click="cerrarSesion"
            class="">
            Cerrar Sesión
        </NuxtLink>
    </div>
</template>

<script>
export default {

    data() {
        return {
        }
    },
    methods: {
        async cerrarSesion() {
            const user = await signOutUser()
            const router = useRouter();
            router.push({ path: "/inicio-sesion" })
        }
    }
}
</script>
