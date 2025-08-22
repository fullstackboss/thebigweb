<template>
  <!-- INICIO -->
  <div class="container pt-4">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
      <!-- Columna de texto (7/12) - Segunda en móvil -->
      <div class="col-span-12 lg:col-span-7 p-4">
        <div class="flex items-center justify-left lg:justify-start mb-2">
          <span class="inline-block mr-4" style="width: 40px; height: 1px; background: var(--color-primary);"></span>
          <div class="tit-pretitulo m-0">
            Consultame por tus dudas x
          </div>
        </div>
        <div class="tit-grande">
          Contactame z
        </div>
        <div class="my-0 tit-mensaje mx-auto lg:mx-0">
          Rápido y transparente, el camino hacia la creación de un sitio.
        </div>
        <div class="mt-6 mb-6 md:mb-0 flex flex-col sm:flex-row justify-between gap-4">
          <!--  <div class="flex flex-col justify-center md:w-auto">
            <Button text="Contáctame" url="#" backgroundColor="var(--color-antineutro)"
              backgroundColorHover="var(--color-mediooscuro)" textColor="var(--color-neutro)"
              textColorHover="var(--color-claro)" rounded="full" minWidth="fit-content" icon="arrow-up-circle" />
          </div> -->
          <div class="flex flex-col sm:flex-row justify-center gap-4 md:w-auto">
            <Button text="Facebook" url="#" backgroundColor="var(--color-background)"
              backgroundColorHover="var(--color-oscuro)" textColor="var(--color-antineutro)" textColorHover="white"
              rounded="full" border="1px solid var(--color-mediooscuro)" minWidth="fit-content"
              icon="ArrowUpRightIcon" />
            <Button text="LinkedIn" url="#" backgroundColor="var(--color-background)"
              backgroundColorHover="var(--color-oscuro)" textColor="var(--color-antineutro)" textColorHover="white"
              rounded="full" border="1px solid var(--color-mediooscuro)" minWidth="fit-content"
              icon="ArrowUpRightIcon" />
          </div>
        </div>
      </div>

    </div>
  </div>


  <div class="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
    <div class="col-span-12 lg:col-span-6">
      <!-- PRIMER FORMULARIO -->
      <div class="relative flex flex-col rounded-xl bg-transparent">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          @submit.prevent="handleSubmit"
          class="mt-8 mb-2 w-full p-4"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />
          <div class="mb-1 flex flex-col gap-6">
            <div class="w-full">
              <label class="block mb-2 text-sm text-slate-600">
                Nombre
              </label>
              <input
                name="nombre"
                type="text"
                v-model="nombre"
                class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-full px-5 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Nombre"
                required
              />
              <p v-if="errors.nombre" class="text-red-500 text-xs mt-0 animate-fade-in">{{ errors.nombre }}</p>
            </div>
            <div class="w-full">
              <label class="block mb-2 text-sm text-slate-600">
                Email
              </label>
              <input
                name="email"
                type="email"
                v-model="email"
                class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-full px-5 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Email"
                required
              />
              <p v-if="errors.email" class="text-red-500 text-xs mt-0 animate-fade-in">{{ errors.email }}</p>
            </div>
            <div class="w-full">
              <label class="block mb-2 text-sm text-slate-600">
                Teléfono
              </label>
              <input
                name="telefono"
                type="text"
                v-model="telefono"
                class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-full px-5 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Teléfono"
              />
              <p v-if="errors.telefono" class="text-red-500 text-xs mt-0 animate-fade-in">{{ errors.telefono }}</p>
            </div>
            <div class="w-full ">
              <label class="block mb-2 text-sm text-slate-600">
                ¿Cómo puedo ayudarte?
              </label>
              <textarea
                name="mensaje"
                rows="4"
                v-model="mensaje"
                class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-xl px-5 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="¿Cómo puedo ayudarte?"
                required
              ></textarea>
              <p v-if="errors.mensaje" class="text-red-500 text-xs mt-0 animate-fade-in">{{ errors.mensaje }}</p>
            </div>
          </div>
          <button
            class="mt-4 rounded-full bg-slate-800 py-4 px-8 border border-transparent text-center text-base text-white transition-all  focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 disabled:pointer-events-none disabled:opacity-50  w-full md:w-[50%] mx-auto flex items-center justify-center gap-2"
            type="submit"
            :disabled="loading"
          >
            <svg v-if="loading" class="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
            <span>{{ loading ? 'Enviando...' : 'Enviar Mensaje' }}</span>
          </button>
          <p v-if="success" class="text-green-600 text-center mt-4 animate-fade-in">¡Mensaje enviado correctamente!</p>
          <p v-if="generalError" class="text-red-600 text-center mt-4 animate-fade-in">{{ generalError }}</p>
        </form>
      </div>

    </div>
    <div class="col-span-12 lg:col-span-6 flex justify-center">
      <img src="../assets/images/contact-demo.jpg" alt="" class="w-2/3">
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue'
import Button from '../components/Button.vue'

const nombre = ref('')
const email = ref('')
const telefono = ref('')
const mensaje = ref('')

const errors = ref({})
const success = ref(false)
const loading = ref(false)
const generalError = ref('')

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}
function validateTelefono(value) {
  if (!value) return true
  return /^\d{7,}$/.test(value)
}

async function handleSubmit() {
  errors.value = {}
  success.value = false
  generalError.value = ''

  if (!nombre.value.trim()) {
    errors.value.nombre = 'El nombre es obligatorio.'
  }
  if (!email.value.trim()) {
    errors.value.email = 'El email es obligatorio.'
  } else if (!validateEmail(email.value)) {
    errors.value.email = 'El email no es válido.'
  }
  if (telefono.value && !validateTelefono(telefono.value)) {
    errors.value.telefono = 'El teléfono debe ser numérico y tener al menos 7 dígitos.'
  }
  if (!mensaje.value.trim()) {
    errors.value.mensaje = 'El mensaje es obligatorio.'
  }

  if (Object.keys(errors.value).length > 0) return

  loading.value = true
  try {
    // Enviar el formulario a Netlify
    const form = document.createElement('form')
    form.action = ''
    form.method = 'POST'
    form.setAttribute('data-netlify', 'true')
    form.style.display = 'none'
    const fields = [
      { name: 'form-name', value: 'contact' },
      { name: 'nombre', value: nombre.value },
      { name: 'email', value: email.value },
      { name: 'telefono', value: telefono.value },
      { name: 'mensaje', value: mensaje.value },
    ]
    fields.forEach(({ name, value }) => {
      const input = document.createElement('input')
      input.name = name
      input.value = value
      form.appendChild(input)
    })
    document.body.appendChild(form)
    form.submit()
    document.body.removeChild(form)
    success.value = true
    nombre.value = ''
    email.value = ''
    telefono.value = ''
    mensaje.value = ''
  } catch (e) {
    generalError.value = 'Ocurrió un error al enviar el mensaje. Intenta nuevamente.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animate-fade-in {
  animation: fade-in 0.4s;
}
</style>