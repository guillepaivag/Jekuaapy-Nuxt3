<template>
    <div class="carta">

        <label for="" class="">
            Iniciar Sesión
        </label>
        <form method="#" action="#" class="mt-10">

            <div>
                <input type="email" placeholder="Correo electronico" v-model="email" class="carta">
            </div>

            <div class="mt-7">
                <input type="password" placeholder="Contraseña" v-model="password" class="carta">
            </div>

            <div class="">

                <div class="">
                    <a class="" href="#">
                        ¿Olvidó su contraseña?
                    </a>
                </div>
            </div>
        </form>
        <div class="mt-7">
            <button @click="login" class="boton">
                Iniciar Sesión
            </button>
        </div>
        <div class="mt-7">
            <div class="flex justify-center items-center">
                <label class="mr-2">¿Eres nuevo?</label>
                <NuxtLink to="registro">
                    Crea una cuenta
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
const path = ref('')

const email = ref('')
const password = ref('')

const errorInicio = ref(false)


const login = async () => {
    try {
        const user = await signInUser(email.value, password.value)
        const router = useRouter();
        if (user)
            router.push({ path: "/equipos" })
        else {
            errorInicio.value = true
        }
    } catch (error) {
        console.log("err", error)
    }

}

</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap');

.carta {
    font-family: 'Montserrat', sans-serif;
    outline: none;
}
</style>

