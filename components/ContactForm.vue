<template>
  <div class="contact-form-wrapper">
    <!-- Message de statut -->
    <div v-if="statusMessage" :class="['status-message', statusType]">
      {{ statusMessage }}
    </div>

    <form @submit.prevent="handleSubmit" class="comment-one__form">
      <div class="row">
        <div class="col-xl-6">
          <div class="comment-form__input-box">
            <input
              type="text"
              v-model="formData.name"
              placeholder="Votre Nom"
              :class="{ 'error': errors.name }"
              @input="clearError('name')"
            />
            <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="comment-form__input-box">
            <input
              type="email"
              v-model="formData.email"
              placeholder="Votre Email"
              :class="{ 'error': errors.email }"
              @input="clearError('email')"
            />
            <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="comment-form__input-box">
            <input
              type="tel"
              v-model="formData.phone"
              placeholder="Téléphone (+243XXXXXXXXX)"
              :class="{ 'error': errors.phone }"
              @input="clearError('phone')"
            />
            <span v-if="errors.phone" class="error-message">{{ errors.phone }}</span>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="comment-form__input-box">
            <input
              type="text"
              v-model="formData.subject"
              placeholder="Sujet"
              :class="{ 'error': errors.subject }"
              @input="clearError('subject')"
            />
            <span v-if="errors.subject" class="error-message">{{ errors.subject }}</span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="comment-form__input-box">
            <textarea
              v-model="formData.message"
              placeholder="Votre Message"
              :class="{ 'error': errors.message }"
              @input="clearError('message')"
            ></textarea>
            <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
          </div>
          <button 
            type="submit" 
            class="thm-btn comment-form__btn"
            :disabled="isSubmitting"
            @click="console.log('Bouton cliqué!')"
          >
            <span v-if="isSubmitting">Envoi en cours...</span>
            <span v-else>Envoyer le message</span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const formData = ref<FormData>({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const errors = ref<Partial<FormData>>({})
const isSubmitting = ref(false)
const statusMessage = ref('')
const statusType = ref<'success' | 'error' | ''>('')

const validateForm = () => {
  const newErrors: Partial<FormData> = {}
  let isValid = true

  // Validation du nom
  if (!formData.value.name.trim()) {
    newErrors.name = 'Le nom est requis'
    isValid = false
  }

  // Validation de l'email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!formData.value.email.trim()) {
    newErrors.email = 'L\'email est requis'
    isValid = false
  } else if (!emailRegex.test(formData.value.email)) {
    newErrors.email = 'Format d\'email invalide'
    isValid = false
  }

  // Validation du téléphone
  const phoneRegex = /^\+243[0-9]{9}$/
  if (!formData.value.phone.trim()) {
    newErrors.phone = 'Le numéro de téléphone est requis'
    isValid = false
  } else if (!phoneRegex.test(formData.value.phone)) {
    newErrors.phone = 'Format de téléphone invalide (ex: +243XXXXXXXXX)'
    isValid = false
  }

  // Validation du sujet
  if (!formData.value.subject.trim()) {
    newErrors.subject = 'Le sujet est requis'
    isValid = false
  }

  // Validation du message
  if (!formData.value.message.trim()) {
    newErrors.message = 'Le message est requis'
    isValid = false
  }

  errors.value = newErrors
  return isValid
}

const clearError = (field: keyof FormData) => {
  if (field in errors.value) {
    errors.value = { ...errors.value, [field]: '' }
  }
}

const showStatusMessage = (message: string, type: 'success' | 'error') => {
  statusMessage.value = message
  statusType.value = type
  setTimeout(() => {
    statusMessage.value = ''
  }, 5000)
}

const handleSubmit = async () => {
  console.log('=== DÉBUT HANDLE SUBMIT ===')
  console.log('Formulaire soumis avec les données:', formData.value)
  
  clearError('name')
  clearError('email')
  clearError('phone')
  clearError('subject')
  clearError('message')

  if (!validateForm()) {
    console.log('❌ Validation échouée')
    showStatusMessage('Veuillez corriger les erreurs dans le formulaire', 'error')
    return
  }
  console.log('✅ Validation réussie')

  isSubmitting.value = true
  statusMessage.value = 'Envoi en cours...'
  statusType.value = ''

  try {
    console.log('🔄 Appel de l\'API /api/contact-simple...')
    // Test avec l'API contact simple
    const response = await $fetch('/api/contact-simple', {
      method: 'POST',
      body: {
        name: formData.value.name,
        email: formData.value.email,
        phone: formData.value.phone,
        subject: formData.value.subject,
        message: formData.value.message
      }
    })
    console.log('✅ Réponse de l\'API:', response)

    showStatusMessage('Votre message a été envoyé avec succès !', 'success')
    formData.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
  } catch (error: any) {
    console.log('❌ ERREUR DANS LE COMPOSANT:', error)
    console.error('Erreur lors de l\'envoi du message:', error)
    
    // Message d'erreur plus spécifique selon le type d'erreur
    let errorMessage = 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.'
    
    if (error?.data?.message) {
      errorMessage = error.data.message
    } else if (error?.message && error.message.includes('Missing credentials')) {
      errorMessage = 'Configuration email non disponible. Veuillez nous contacter directement par téléphone ou email.'
    } else if (error?.message && error.message.includes('Greeting never received')) {
      errorMessage = 'Problème de connexion au serveur email. Veuillez vérifier votre connexion internet et réessayer.'
    } else if (error?.message && error.message.includes('SMTP')) {
      errorMessage = 'Erreur de configuration email. Veuillez nous contacter directement.'
    }
    
    showStatusMessage(errorMessage, 'error')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact-form-wrapper {
  position: relative;
}

.status-message {
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 4px;
  text-align: center;
}

.status-message.success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.status-message.error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.error-message {
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: block;
}

input.error,
textarea.error {
  border-color: #dc3545;
}

.comment-form__btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.comment-form__input-box {
  position: relative;
  margin-bottom: 20px;
}

.comment-form__input-box input,
.comment-form__input-box textarea {
  width: 100%;
  height: 60px;
  background-color: #f5f5f5;
  border: 1px solid #e9e9e9;
  padding: 0 30px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.comment-form__input-box textarea {
  height: 180px;
  padding-top: 20px;
  padding-bottom: 20px;
}

.comment-form__input-box input:focus,
.comment-form__input-box textarea:focus {
  border-color: var(--conult-base);
  outline: none;
}

.comment-form__btn {
  padding: 15px 40px;
  background-color: var(--conult-base);
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.comment-form__btn:hover:not(:disabled) {
  background-color: var(--conult-black);
}
</style> 