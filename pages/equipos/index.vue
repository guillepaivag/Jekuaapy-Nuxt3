<template>
    <div>
        <Navbar2></Navbar2>
        
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
