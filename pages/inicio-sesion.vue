<template>
    <Navbar2></Navbar2>
    <!-- component -->
    <section class="flex flex-col md:flex-row h-screen items-center">

        <div class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
            <img src="https://source.unsplash.com/random" alt="" class="w-full h-full object-cover">
        </div>

        <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
      flex items-center justify-center">

            <div class="w-full h-100">


                <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">Inicia sesión en tu cuenta</h1>

                <AlertaError v-if="errorInicio" class="mt-3" :mensaje="'El correo o contraseña son incorrectos'">
                </AlertaError>

                <form class="mt-6" action="#" method="POST">
                    <div>
                        <label class="block text-gray-700">Correo</label>
                        <input type="email" name="" id="inicio-correo" placeholder="Ingresa tu correo" v-model="email"
                            class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-indigo-700 focus:bg-white focus:outline-none"
                            autofocus autocomplete required>
                    </div>

                    <div class="mt-4">
                        <label class="block text-gray-700">Contraseña</label>
                        <input type="password" v-model="password" name="" id="inicio-pass"
                            placeholder="Ingresa tu Contraseña" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-indigo-700
              focus:bg-white focus:outline-none" required>
                    </div>

                    <div class="text-right mt-2">
                        <a href="#"
                            class="text-sm font-semibold text-gray-700 hover:text-indigo-700 focus:text-indigo-700">Olvidaste
                            tu contraseña?</a>
                    </div>

                </form>
                <button class="w-full block fondo-lila fondo-lila-medio-hover text-white font-semibold rounded-lg items-center justify-end
            px-4 py-3 mt-6" @click="login" :disabled="cargando">
                    <div v-if="cargando">
                        <CargandoBoton></CargandoBoton>
                    </div>
                    <div v-else>
                        Iniciar sesión
                    </div>
                </button>

                <hr class="my-6 border-gray-300 w-full">

                <button type="button"
                    class="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                    <div class="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="w-6 h-6"
                            viewBox="0 0 48 48">
                            <defs>
                                <path id="a"
                                    d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
                            </defs>
                            <clipPath id="b">
                                <use xlink:href="#a" overflow="visible" />
                            </clipPath>
                            <path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                            <path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
                            <path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
                            <path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
                        </svg>
                        <span class="ml-4">
                            Inicia sesión con Google</span>
                    </div>
                </button>

                <p class="mt-8">No tienes una cuenta? <NuxtLink :to="'/registro'"
                        class="text-indigo-500 hover:text-indigo-700 font-semibold">Crea una cuenta</NuxtLink>
                </p>


            </div>
        </div>

    </section>
</template>

<script setup>
const path = ref('')

const email = ref('')
const password = ref('')

const errorInicio = ref(false)
const cargando = ref(false)


const login = async () => {
    try {
        cargando.value = true
        errorInicio.value = false
        console.log("aaaaaaa", email.value, password.value)
        const user = await signInUser(email.value, password.value)
        const router = useRouter();
        cargando.value = false
        if (user)
            router.push({ path: "/equipos" })
        else {
            errorInicio.value = true
        }
    } catch (error) {
        cargando.value = false
        errorInicio.value = true
        console.log("err", error)
    }

}

</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap');

.fondo {
    min-height: 100vh;
    background: rgb(104, 59, 206);
    background: linear-gradient(111deg, rgba(104, 59, 206, 1) 30%, rgba(255, 29, 137, 1) 100%);
}

.carta {
    font-family: 'Montserrat', sans-serif;
    outline: none;
}

.carta1 {
    background: #ff80deff;
}

.carta2 {
    background: #d010a0ff;
}

.boton {
    background: #530b41fe;
}</style>

