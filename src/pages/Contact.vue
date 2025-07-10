<template>
  <div class="min-h-screen bg-theme-surface p-8">
    <div class="container mx-auto max-w-2xl">
      <h1 class="text-4xl font-bold text-theme-primary mb-8">Contacto</h1>
      
      <div class="bg-theme-card p-8 rounded-lg shadow-lg border border-theme">
        <form @submit.prevent="submitForm" class="space-y-6">
          <div>
            <label for="name" class="block text-theme-primary font-semibold mb-2">Nombre</label>
            <input 
              type="text" 
              id="name" 
              v-model="form.name"
              class="w-full px-4 py-2 border border-theme rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-primary bg-theme-surface text-theme-primary"
              required
            >
          </div>
          
          <div>
            <label for="email" class="block text-theme-primary font-semibold mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email"
              class="w-full px-4 py-2 border border-theme rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-primary bg-theme-surface text-theme-primary"
              required
            >
          </div>
          
          <div>
            <label for="subject" class="block text-theme-primary font-semibold mb-2">Asunto</label>
            <input 
              type="text" 
              id="subject" 
              v-model="form.subject"
              class="w-full px-4 py-2 border border-theme rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-primary bg-theme-surface text-theme-primary"
              required
            >
          </div>
          
          <div>
            <label for="message" class="block text-theme-primary font-semibold mb-2">Mensaje</label>
            <textarea 
              id="message" 
              v-model="form.message"
              rows="5"
              class="w-full px-4 py-2 border border-theme rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-primary bg-theme-surface text-theme-primary resize-none"
              required
            ></textarea>
          </div>
          
          <button 
            type="submit"
            class="w-full bg-theme-primary text-theme-card font-semibold py-3 px-6 rounded-lg hover:bg-theme-secondary transition-colors"
          >
            Enviar Mensaje
          </button>
        </form>
        
        <div class="mt-8 pt-8 border-t border-theme">
          <h3 class="text-xl font-semibold text-theme-primary mb-4">Información de Contacto</h3>
          <div class="space-y-2 text-theme-secondary">
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