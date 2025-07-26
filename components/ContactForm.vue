<template>
  <div class="contact-form-wrapper">
          <!-- Header du formulaire -->
      <div class="form-header">
        <h2 class="form-title">
          {{ t('contact.form.subtitle') }}
        </h2>
        <p class="form-subtitle">{{ t('contact.form.header.subtitle') }}</p>
      </div>

    <!-- Message de statut -->
    <div v-if="statusMessage" :class="['status-message', statusType]">
      <div v-html="statusMessage"></div>
    </div>

    <form @submit.prevent="handleSubmit" class="modern-contact-form">
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">{{ t('contact.form.fields.name.label') }}</label>
          <input
            type="text"
            v-model="formData.name"
            :placeholder="t('contact.form.fields.name.placeholder')"
            :class="{ 'error': errors.name }"
            @input="clearError('name')"
            class="form-input"
          />
          <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label class="form-label">{{ t('contact.form.fields.email.label') }}</label>
          <input
            type="email"
            v-model="formData.email"
            :placeholder="`${t('contact.form.fields.email.placeholder.user')}@${t('contact.form.fields.email.placeholder.domain')}`"
            :class="{ 'error': errors.email }"
            @input="clearError('email')"
            class="form-input"
          />
          <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group phone-group">
          <label class="form-label">{{ t('contact.form.fields.phone.label') }}</label>
          <div class="phone-input-container">
            <div class="country-selector">
              <select 
                v-model="formData.countryCode"
                class="country-select"
                @change="clearError('phone')"
              >
                <option 
                  v-for="country in countries" 
                  :key="country.code + country.name"
                  :value="country.code"
                >
                  {{ country.flag }} {{ country.code }}
                </option>
              </select>
            </div>
            <input
              type="tel"
              v-model="formData.phone"
              :placeholder="t('contact.form.fields.phone.placeholder')"
              :class="{ 'error': errors.phone }"
              @input="clearError('phone')"
              class="form-input phone-input"
            />
          </div>
          <span v-if="errors.phone" class="error-message">{{ errors.phone }}</span>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label class="form-label">{{ t('contact.form.fields.subject.label') }}</label>
          <input
            type="text"
            v-model="formData.subject"
            :placeholder="t('contact.form.fields.subject.placeholder')"
            :class="{ 'error': errors.subject }"
            @input="clearError('subject')"
            class="form-input"
          />
          <span v-if="errors.subject" class="error-message">{{ errors.subject }}</span>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label class="form-label">{{ t('contact.form.fields.message.label') }}</label>
          <textarea
            v-model="formData.message"
            :placeholder="t('contact.form.fields.message.placeholder')"
            :class="{ 'error': errors.message }"
            @input="clearError('message')"
            class="form-textarea"
            rows="5"
          ></textarea>
          <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
        </div>
      </div>

      <!-- Case à cocher pour confirmation -->
      <div class="form-row">
        <div class="form-group">
          <div class="checkbox-wrapper">
            <label class="checkbox-label">
              <input
                type="checkbox"
                v-model="formData.contactInfoConfirmed"
                @change="clearError('contactInfoConfirmed')"
                class="checkbox-input"
              />
              <span class="checkbox-custom"></span>
              <span class="checkbox-text">
                {{ t('contact.form.checkbox.text') }}
              </span>
            </label>
            <span v-if="errors.contactInfoConfirmed" class="error-message">{{ errors.contactInfoConfirmed }}</span>
          </div>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <button 
            type="submit" 
            class="submit-button"
            :disabled="isSubmitting"
            @click="console.log('Bouton cliqué!')"
          >
            <span v-if="isSubmitting" class="button-content">
              <span class="loading-spinner"></span>
              {{ t('contact.form.button.submitting') }}
            </span>
            <span v-else class="button-content">
              {{ t('contact.form.button.submit') }}
              <svg class="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

interface FormData {
  name: string
  email: string
  countryCode: string
  phone: string
  subject: string
  message: string
  contactInfoConfirmed: boolean
}

const formData = ref<FormData>({
  name: '',
  email: '',
  countryCode: '+243',
  phone: '',
  subject: '',
  message: '',
  contactInfoConfirmed: false
})

const errors = ref<Record<string, string>>({})
const isSubmitting = ref(false)
const statusMessage = ref('')
const statusType = ref<'success' | 'error' | ''>('')

// Liste des pays avec leurs codes téléphoniques (RDC en premier)
const countries = [
  { code: '+243', name: 'RDC', flag: '🇨🇩' },
  { code: '+33', name: 'France', flag: '🇫🇷' },
  { code: '+32', name: 'Belgique', flag: '🇧🇪' },
  { code: '+41', name: 'Suisse', flag: '🇨🇭' },
  { code: '+1', name: 'Canada', flag: '🇨🇦' },
  { code: '+1', name: 'États-Unis', flag: '🇺🇸' },
  { code: '+44', name: 'Royaume-Uni', flag: '🇬🇧' },
  { code: '+49', name: 'Allemagne', flag: '🇩🇪' },
  { code: '+39', name: 'Italie', flag: '🇮🇹' },
  { code: '+34', name: 'Espagne', flag: '🇪🇸' },
  { code: '+31', name: 'Pays-Bas', flag: '🇳🇱' },
  { code: '+46', name: 'Suède', flag: '🇸🇪' },
  { code: '+47', name: 'Norvège', flag: '🇳🇴' },
  { code: '+45', name: 'Danemark', flag: '🇩🇰' },
  { code: '+358', name: 'Finlande', flag: '🇫🇮' },
  { code: '+48', name: 'Pologne', flag: '🇵🇱' },
  { code: '+420', name: 'République tchèque', flag: '🇨🇿' },
  { code: '+36', name: 'Hongrie', flag: '🇭🇺' },
  { code: '+43', name: 'Autriche', flag: '🇦🇹' },
  { code: '+351', name: 'Portugal', flag: '🇵🇹' },
  { code: '+30', name: 'Grèce', flag: '🇬🇷' },
  { code: '+90', name: 'Turquie', flag: '🇹🇷' },
  { code: '+7', name: 'Russie', flag: '🇷🇺' },
  { code: '+86', name: 'Chine', flag: '🇨🇳' },
  { code: '+81', name: 'Japon', flag: '🇯🇵' },
  { code: '+82', name: 'Corée du Sud', flag: '🇰🇷' },
  { code: '+91', name: 'Inde', flag: '🇮🇳' },
  { code: '+61', name: 'Australie', flag: '🇦🇺' },
  { code: '+64', name: 'Nouvelle-Zélande', flag: '🇳🇿' },
  { code: '+27', name: 'Afrique du Sud', flag: '🇿🇦' },
  { code: '+234', name: 'Nigeria', flag: '🇳🇬' },
  { code: '+254', name: 'Kenya', flag: '🇰🇪' },
  { code: '+20', name: 'Égypte', flag: '🇪🇬' },
  { code: '+212', name: 'Maroc', flag: '🇲🇦' },
  { code: '+216', name: 'Tunisie', flag: '🇹🇳' },
  { code: '+213', name: 'Algérie', flag: '🇩🇿' },
  { code: '+225', name: 'Côte d\'Ivoire', flag: '🇨🇮' },
  { code: '+221', name: 'Sénégal', flag: '🇸🇳' },
  { code: '+237', name: 'Cameroun', flag: '🇨🇲' },
  { code: '+236', name: 'République centrafricaine', flag: '🇨🇫' },
  { code: '+235', name: 'Tchad', flag: '🇹🇩' },
  { code: '+242', name: 'Congo', flag: '🇨🇬' },
  { code: '+241', name: 'Gabon', flag: '🇬🇦' },
  { code: '+240', name: 'Guinée équatoriale', flag: '🇬🇶' },
  { code: '+239', name: 'São Tomé-et-Principe', flag: '🇸🇹' },
  { code: '+238', name: 'Cap-Vert', flag: '🇨🇻' },
  { code: '+245', name: 'Guinée-Bissau', flag: '🇬🇼' },
  { code: '+246', name: 'Guinée', flag: '🇬🇳' },
  { code: '+247', name: 'Sierra Leone', flag: '🇸🇱' },
  { code: '+248', name: 'Seychelles', flag: '🇸🇨' },
  { code: '+249', name: 'Soudan', flag: '🇸🇩' },
  { code: '+250', name: 'Rwanda', flag: '🇷🇼' },
  { code: '+251', name: 'Éthiopie', flag: '🇪🇹' },
  { code: '+252', name: 'Somalie', flag: '🇸🇴' },
  { code: '+253', name: 'Djibouti', flag: '🇩🇯' },
  { code: '+255', name: 'Tanzanie', flag: '🇹🇿' },
  { code: '+256', name: 'Ouganda', flag: '🇺🇬' },
  { code: '+257', name: 'Burundi', flag: '🇧🇮' },
  { code: '+258', name: 'Mozambique', flag: '🇲🇿' },
  { code: '+260', name: 'Zambie', flag: '🇿🇲' },
  { code: '+261', name: 'Madagascar', flag: '🇲🇬' },
  { code: '+262', name: 'Réunion', flag: '🇷🇪' },
  { code: '+263', name: 'Zimbabwe', flag: '🇿🇼' },
  { code: '+264', name: 'Namibie', flag: '🇳🇦' },
  { code: '+265', name: 'Malawi', flag: '🇲🇼' },
  { code: '+266', name: 'Lesotho', flag: '🇱🇸' },
  { code: '+267', name: 'Botswana', flag: '🇧🇼' },
  { code: '+268', name: 'Eswatini', flag: '🇸🇿' },
  { code: '+269', name: 'Comores', flag: '🇰🇲' },
  { code: '+290', name: 'Sainte-Hélène', flag: '🇸🇭' },
  { code: '+291', name: 'Érythrée', flag: '🇪🇷' },
  { code: '+297', name: 'Aruba', flag: '🇦🇼' },
  { code: '+298', name: 'Îles Féroé', flag: '🇫🇴' },
  { code: '+299', name: 'Groenland', flag: '🇬🇱' },
  { code: '+350', name: 'Gibraltar', flag: '🇬🇮' },
  { code: '+351', name: 'Portugal', flag: '🇵🇹' },
  { code: '+352', name: 'Luxembourg', flag: '🇱🇺' },
  { code: '+353', name: 'Irlande', flag: '🇮🇪' },
  { code: '+354', name: 'Islande', flag: '🇮🇸' },
  { code: '+355', name: 'Albanie', flag: '🇦🇱' },
  { code: '+356', name: 'Malte', flag: '🇲🇹' },
  { code: '+357', name: 'Chypre', flag: '🇨🇾' },
  { code: '+358', name: 'Finlande', flag: '🇫🇮' },
  { code: '+359', name: 'Bulgarie', flag: '🇧🇬' },
  { code: '+370', name: 'Lituanie', flag: '🇱🇹' },
  { code: '+371', name: 'Lettonie', flag: '🇱🇻' },
  { code: '+372', name: 'Estonie', flag: '🇪🇪' },
  { code: '+373', name: 'Moldavie', flag: '🇲🇩' },
  { code: '+374', name: 'Arménie', flag: '🇦🇲' },
  { code: '+375', name: 'Biélorussie', flag: '🇧🇾' },
  { code: '+376', name: 'Andorre', flag: '🇦🇩' },
  { code: '+377', name: 'Monaco', flag: '🇲🇨' },
  { code: '+378', name: 'Saint-Marin', flag: '🇸🇲' },
  { code: '+379', name: 'Vatican', flag: '🇻🇦' },
  { code: '+380', name: 'Ukraine', flag: '🇺🇦' },
  { code: '+381', name: 'Serbie', flag: '🇷🇸' },
  { code: '+382', name: 'Monténégro', flag: '🇲🇪' },
  { code: '+383', name: 'Kosovo', flag: '🇽🇰' },
  { code: '+385', name: 'Croatie', flag: '🇭🇷' },
  { code: '+386', name: 'Slovénie', flag: '🇸🇮' },
  { code: '+387', name: 'Bosnie-Herzégovine', flag: '🇧🇦' },
  { code: '+389', name: 'Macédoine du Nord', flag: '🇲🇰' },
  { code: '+420', name: 'République tchèque', flag: '🇨🇿' },
  { code: '+421', name: 'Slovaquie', flag: '🇸🇰' },
  { code: '+423', name: 'Liechtenstein', flag: '🇱🇮' },
  { code: '+500', name: 'Îles Malouines', flag: '🇫🇰' },
  { code: '+501', name: 'Belize', flag: '🇧🇿' },
  { code: '+502', name: 'Guatemala', flag: '🇬🇹' },
  { code: '+503', name: 'El Salvador', flag: '🇸🇻' },
  { code: '+504', name: 'Honduras', flag: '🇭🇳' },
  { code: '+505', name: 'Nicaragua', flag: '🇳🇮' },
  { code: '+506', name: 'Costa Rica', flag: '🇨🇷' },
  { code: '+507', name: 'Panama', flag: '🇵🇦' },
  { code: '+508', name: 'Saint-Pierre-et-Miquelon', flag: '🇵🇲' },
  { code: '+509', name: 'Haïti', flag: '🇭🇹' },
  { code: '+590', name: 'Guadeloupe', flag: '🇬🇵' },
  { code: '+591', name: 'Bolivie', flag: '🇧🇴' },
  { code: '+592', name: 'Guyana', flag: '🇬🇾' },
  { code: '+593', name: 'Équateur', flag: '🇪🇨' },
  { code: '+594', name: 'Guyane française', flag: '🇬🇫' },
  { code: '+595', name: 'Paraguay', flag: '🇵🇾' },
  { code: '+596', name: 'Martinique', flag: '🇲🇶' },
  { code: '+597', name: 'Suriname', flag: '🇸🇷' },
  { code: '+598', name: 'Uruguay', flag: '🇺🇾' },
  { code: '+599', name: 'Antilles néerlandaises', flag: '🇧🇶' },
  { code: '+670', name: 'Timor oriental', flag: '🇹🇱' },
  { code: '+672', name: 'Territoire antarctique australien', flag: '🇦🇶' },
  { code: '+673', name: 'Brunei', flag: '🇧🇳' },
  { code: '+674', name: 'Nauru', flag: '🇳🇷' },
  { code: '+675', name: 'Papouasie-Nouvelle-Guinée', flag: '🇵🇬' },
  { code: '+676', name: 'Tonga', flag: '🇹🇴' },
  { code: '+677', name: 'Îles Salomon', flag: '🇸🇧' },
  { code: '+678', name: 'Vanuatu', flag: '🇻🇺' },
  { code: '+679', name: 'Fidji', flag: '🇫🇯' },
  { code: '+680', name: 'Palaos', flag: '🇵🇼' },
  { code: '+681', name: 'Wallis-et-Futuna', flag: '🇼🇫' },
  { code: '+682', name: 'Îles Cook', flag: '🇨🇰' },
  { code: '+683', name: 'Niue', flag: '🇳🇺' },
  { code: '+685', name: 'Samoa', flag: '🇼🇸' },
  { code: '+686', name: 'Kiribati', flag: '🇰🇮' },
  { code: '+687', name: 'Nouvelle-Calédonie', flag: '🇳🇨' },
  { code: '+688', name: 'Tuvalu', flag: '🇹🇻' },
  { code: '+689', name: 'Polynésie française', flag: '🇵🇫' },
  { code: '+690', name: 'Tokelau', flag: '🇹🇰' },
  { code: '+691', name: 'Micronésie', flag: '🇫🇲' },
  { code: '+692', name: 'Îles Marshall', flag: '🇲🇭' },
  { code: '+850', name: 'Corée du Nord', flag: '🇰🇵' },
  { code: '+852', name: 'Hong Kong', flag: '🇭🇰' },
  { code: '+853', name: 'Macao', flag: '🇲🇴' },
  { code: '+855', name: 'Cambodge', flag: '🇰🇭' },
  { code: '+856', name: 'Laos', flag: '🇱🇦' },
  { code: '+880', name: 'Bangladesh', flag: '🇧🇩' },
  { code: '+886', name: 'Taïwan', flag: '🇹🇼' },
  { code: '+960', name: 'Maldives', flag: '🇲🇻' },
  { code: '+961', name: 'Liban', flag: '🇱🇧' },
  { code: '+962', name: 'Jordanie', flag: '🇯🇴' },
  { code: '+963', name: 'Syrie', flag: '🇸🇾' },
  { code: '+964', name: 'Irak', flag: '🇮🇶' },
  { code: '+965', name: 'Koweït', flag: '🇰🇼' },
  { code: '+966', name: 'Arabie saoudite', flag: '🇸🇦' },
  { code: '+967', name: 'Yémen', flag: '🇾🇪' },
  { code: '+968', name: 'Oman', flag: '🇴🇲' },
  { code: '+970', name: 'Palestine', flag: '🇵🇸' },
  { code: '+971', name: 'Émirats arabes unis', flag: '🇦🇪' },
  { code: '+972', name: 'Israël', flag: '🇮🇱' },
  { code: '+973', name: 'Bahreïn', flag: '🇧🇭' },
  { code: '+974', name: 'Qatar', flag: '🇶🇦' },
  { code: '+975', name: 'Bhoutan', flag: '🇧🇹' },
  { code: '+976', name: 'Mongolie', flag: '🇲🇳' },
  { code: '+977', name: 'Népal', flag: '🇳🇵' },
  { code: '+992', name: 'Tadjikistan', flag: '🇹🇯' },
  { code: '+993', name: 'Turkménistan', flag: '🇹🇲' },
  { code: '+994', name: 'Azerbaïdjan', flag: '🇦🇿' },
  { code: '+995', name: 'Géorgie', flag: '🇬🇪' },
  { code: '+996', name: 'Kirghizistan', flag: '🇰🇬' },
  { code: '+998', name: 'Ouzbékistan', flag: '🇺🇿' },
  { code: '+971', name: 'Émirats arabes unis', flag: '🇦🇪' },
  { code: '+972', name: 'Israël', flag: '🇮🇱' },
  { code: '+973', name: 'Bahreïn', flag: '🇧🇭' },
  { code: '+974', name: 'Qatar', flag: '🇶🇦' },
  { code: '+975', name: 'Bhoutan', flag: '🇧🇹' },
  { code: '+976', name: 'Mongolie', flag: '🇲🇳' },
  { code: '+977', name: 'Népal', flag: '🇳🇵' },
  { code: '+992', name: 'Tadjikistan', flag: '🇹🇯' },
  { code: '+993', name: 'Turkménistan', flag: '🇹🇲' },
  { code: '+994', name: 'Azerbaïdjan', flag: '🇦🇿' },
  { code: '+995', name: 'Géorgie', flag: '🇬🇪' },
  { code: '+996', name: 'Kirghizistan', flag: '🇰🇬' },
  { code: '+998', name: 'Ouzbékistan', flag: '🇺🇿' }
].sort((a, b) => {
  // RDC toujours en premier
  if (a.code === '+243') return -1
  if (b.code === '+243') return 1
  // Puis tri alphabétique pour les autres
  return a.name.localeCompare(b.name)
})

const validateForm = () => {
  const newErrors: Record<string, string> = {}
  let isValid = true

  // Validation du nom
  if (!formData.value.name.trim()) {
    newErrors.name = t('contact.form.validation.name.required')
    isValid = false
  }

  // Validation de l'email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!formData.value.email.trim()) {
    newErrors.email = t('contact.form.validation.email.required')
    isValid = false
  } else if (!emailRegex.test(formData.value.email)) {
    newErrors.email = t('contact.form.validation.email.invalid')
    isValid = false
  }

  // Validation du téléphone
  const phoneRegex = /^[0-9\s\-\(\)\.]{6,15}$/
  if (!formData.value.phone.trim()) {
    newErrors.phone = t('contact.form.validation.phone.required')
    isValid = false
  } else if (!phoneRegex.test(formData.value.phone)) {
    newErrors.phone = t('contact.form.validation.phone.invalid')
    isValid = false
  }

  // Validation du sujet
  if (!formData.value.subject.trim()) {
    newErrors.subject = t('contact.form.validation.subject.required')
    isValid = false
  }

  // Validation du message
  if (!formData.value.message.trim()) {
    newErrors.message = t('contact.form.validation.message.required')
    isValid = false
  }

  // Validation de la confirmation des informations de contact
  if (!formData.value.contactInfoConfirmed) {
    newErrors.contactInfoConfirmed = t('contact.form.validation.checkbox.required')
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
  // Les messages ne disparaissent plus automatiquement
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
    showStatusMessage(t('contact.form.messages.error.validation'), 'error')
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
        phone: formData.value.countryCode + ' ' + formData.value.phone,
        subject: formData.value.subject,
        message: formData.value.message
      }
    })
    console.log('✅ Réponse de l\'API:', response)

    showStatusMessage(`${t('contact.form.messages.success.title')} <strong>${t('contact.form.messages.success.email.user')}@${t('contact.form.messages.success.email.domain')}</strong> !<br><br>${t('contact.form.messages.success.subtitle')}`, 'success')
    formData.value = {
      name: '',
      email: '',
      countryCode: '+243',
      phone: '',
      subject: '',
      message: '',
      contactInfoConfirmed: false
    }
  } catch (error: any) {
    console.log('❌ ERREUR DANS LE COMPOSANT:', error)
    console.error('Erreur lors de l\'envoi du message:', error)
    
    // Message d'erreur plus spécifique selon le type d'erreur
    let errorMessage = t('contact.form.messages.error.general')
    
    if (error?.data?.message) {
      errorMessage = error.data.message
    } else if (error?.message && error.message.includes('Missing credentials')) {
      errorMessage = t('contact.form.messages.error.missingCredentials')
    } else if (error?.message && error.message.includes('Greeting never received')) {
      errorMessage = t('contact.form.messages.error.greetingNeverReceived')
    } else if (error?.message && error.message.includes('SMTP')) {
      errorMessage = t('contact.form.messages.error.smtp')
    }
    
    showStatusMessage(errorMessage, 'error')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
/* Header du formulaire */
.form-header {
  text-align: left;
  margin-bottom: 40px;
}

.form-title {
  font-size: 32px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 8px 0;
  background: linear-gradient(135deg, #00AEEF 0%, #0066cc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.form-subtitle {
  font-size: 16px;
  color: #666;
  margin: 0;
  line-height: 1.5;
}

/* Formulaire moderne */
.modern-contact-form {
  width: 100%;
}

.form-row {
  margin-bottom: 24px;
}

.form-group {
  width: 100%;
}

.form-label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 16px 20px;
  border: 2px solid #e1e5e9;
  font-size: 16px;
  background: #f8f9fa;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #00AEEF;
  background: #ffffff;
  box-shadow: 0 0 0 4px rgba(0, 174, 239, 0.1);
}

.form-input.error,
.form-textarea.error {
  border-color: #dc3545;
  background: #fff5f5;
}

.form-textarea {
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
}

/* Groupe téléphone */
.phone-group {
  position: relative;
}

.phone-input-container {
  display: flex;
  gap: 12px;
  align-items: stretch;
}

.country-selector {
  flex-shrink: 0;
  min-width: 120px;
}

.country-select {
  width: 100%;
  padding: 16px 12px;
  border: 2px solid #e1e5e9;
  font-size: 16px;
  background: #f8f9fa;
  cursor: pointer;
  transition: all 0.3s ease;
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 12px center;
  background-repeat: no-repeat;
  background-size: 16px;
  padding-right: 40px;
}

.country-select:focus {
  outline: none;
  border-color: #00AEEF;
  background-color: #ffffff;
  box-shadow: 0 0 0 4px rgba(0, 174, 239, 0.1);
}

.phone-input {
  flex: 1;
  min-width: 0;
}

/* Messages d'erreur */
.error-message {
  color: #dc3545;
  font-size: 14px;
  margin-top: 8px;
  display: block;
  font-weight: 500;
}

/* Case à cocher moderne */
.checkbox-wrapper {
  margin-top: 8px;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  padding: 16px;
  background: #f8f9fa;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.checkbox-label:hover {
  background: #e9ecef;
  border-color: #00AEEF;
}

.checkbox-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkbox-custom {
  position: relative;
  height: 24px;
  width: 24px;
  background-color: #ffffff;
  border: 2px solid #d1d5db;
  margin-right: 16px;
  margin-top: 2px;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.checkbox-label:hover .checkbox-custom {
  border-color: #00AEEF;
  background-color: #f0f8ff;
}

.checkbox-input:checked ~ .checkbox-custom {
  background-color: #00AEEF;
  border-color: #00AEEF;
}

.checkbox-input:checked ~ .checkbox-custom:after {
  content: '';
  position: absolute;
  left: 8px;
  top: 4px;
  width: 6px;
  height: 12px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkbox-text {
  flex: 1;
  padding-top: 2px;
}

.checkbox-text strong {
  color: #00AEEF;
  font-weight: 700;
}

/* Bouton de soumission */
.submit-button {
  width: 100%;
  padding: 18px 32px;
  background: linear-gradient(135deg, #00AEEF 0%, #0066cc 100%);
  color: #ffffff;
  border: none;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 174, 239, 0.3);
  position: relative;
  overflow: hidden;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 174, 239, 0.4);
}

.submit-button:active:not(:disabled) {
  transform: translateY(0);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.button-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.arrow-icon {
  transition: transform 0.3s ease;
}

.submit-button:hover .arrow-icon {
  transform: translateX(4px);
}

/* Spinner de chargement */
.loading-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid #ffffff;
  border-top: 2px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Messages de statut */
.status-message {
  padding: 20px;
  margin-bottom: 24px;
  text-align: center;
  font-weight: 500;
  line-height: 1.6;
}

.status-message.success {
  background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
  color: #155724;
  border: 2px solid #28a745;
  box-shadow: 0 4px 20px rgba(40, 167, 69, 0.2);
}

.status-message.success strong {
  color: #0f5132;
  font-weight: 700;
}

.status-message.error {
  background: linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%);
  color: #721c24;
  border: 2px solid #dc3545;
  box-shadow: 0 4px 20px rgba(220, 53, 69, 0.2);
}

/* Responsive */
@media (max-width: 768px) {
  
  .form-title {
    font-size: 28px;
  }
  
  .phone-input-container {
    flex-direction: column;
    gap: 12px;
  }
  
  .country-selector {
    min-width: auto;
  }
  
  .submit-button {
    padding: 16px 24px;
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  
  
  .form-title {
    font-size: 24px;
  }
  
  .form-subtitle {
    font-size: 14px;
  }
  
  .form-input,
  .form-textarea,
  .country-select {
    padding: 14px 16px;
    font-size: 16px;
  }
}
</style> 