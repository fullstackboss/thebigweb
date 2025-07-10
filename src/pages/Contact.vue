<template>
  <div class="min-h-screen p-8" style="background: var(--color-background);">
    <div class="container mx-auto max-w-2xl">
      <h1 style="color: var(--color-primary); font-size: 2.25rem; font-weight: bold; margin-bottom: 2rem;">Contacto</h1>
      <div style="background: var(--color-card); padding: 2rem; border-radius: 0.5rem; box-shadow: 0 2px 8px var(--color-shadow); border: 1px solid var(--color-border);">
        <form @submit.prevent="submitForm" style="display: flex; flex-direction: column; gap: 1.5rem;">
          <div>
            <label for="name" style="color: var(--color-primary); font-weight: 600; margin-bottom: 0.5rem; display: block;">Nombre</label>
            <input 
              type="text" 
              id="name" 
              v-model="form.name"
              style="width: 100%; padding: 0.5rem 1rem; border: 1px solid var(--color-border); border-radius: 0.5rem; background: var(--color-surface); color: var(--color-primary); outline: none;"
              required
            >
          </div>
          <div>
            <label for="email" style="color: var(--color-primary); font-weight: 600; margin-bottom: 0.5rem; display: block;">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email"
              style="width: 100%; padding: 0.5rem 1rem; border: 1px solid var(--color-border); border-radius: 0.5rem; background: var(--color-surface); color: var(--color-primary); outline: none;"
              required
            >
          </div>
          <div>
            <label for="subject" style="color: var(--color-primary); font-weight: 600; margin-bottom: 0.5rem; display: block;">Asunto</label>
            <input 
              type="text" 
              id="subject" 
              v-model="form.subject"
              style="width: 100%; padding: 0.5rem 1rem; border: 1px solid var(--color-border); border-radius: 0.5rem; background: var(--color-surface); color: var(--color-primary); outline: none;"
              required
            >
          </div>
          <div>
            <label for="message" style="color: var(--color-primary); font-weight: 600; margin-bottom: 0.5rem; display: block;">Mensaje</label>
            <textarea 
              id="message" 
              v-model="form.message"
              rows="5"
              style="width: 100%; padding: 0.5rem 1rem; border: 1px solid var(--color-border); border-radius: 0.5rem; background: var(--color-surface); color: var(--color-primary); outline: none; resize: none;"
              required
            ></textarea>
          </div>
          <button 
            type="submit"
            style="width: 100%; background: var(--color-primary); color: var(--color-card); font-weight: 600; padding: 0.75rem 1.5rem; border-radius: 0.5rem; transition: background 0.2s; border: none;"
            @mouseover="event.target.style.background = 'var(--color-secondary)'"
            @mouseleave="event.target.style.background = 'var(--color-primary)'"
          >
            Enviar Mensaje
          </button>
        </form>
        <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--color-border);">
          <h3 style="color: var(--color-primary); font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;">Información de Contacto</h3>
          <div style="color: var(--color-secondary);">
            <p>📧 Email: contacto@thebigweb.com</p>
            <p>📱 Teléfono: +1 (555) 123-4567</p>
            <p>📍 Dirección: Calle Principal 123, Ciudad</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitForm = () => {
  // Aquí iría la lógica para enviar el formulario
  console.log('Formulario enviado:', form.value)
  alert('¡Mensaje enviado con éxito!')
  
  // Limpiar formulario
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}
</script> 