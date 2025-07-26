import nodemailer from 'nodemailer'

export default defineEventHandler(async () => {
  console.log('=== TEST CONFIGURATION SMTP ===')
  
  try {
    // Afficher la configuration (sans le mot de passe complet)
    console.log('SMTP_HOST:', process.env.SMTP_HOST || 'NON DÉFINI')
    console.log('SMTP_PORT:', process.env.SMTP_PORT || 'NON DÉFINI')
    console.log('SMTP_USER:', process.env.SMTP_USER || 'NON DÉFINI')
    console.log('SMTP_PASS:', process.env.SMTP_PASS ? `***${process.env.SMTP_PASS.substring(0, 3)}***` : 'NON DÉFINI')
    
    // Vérifier si toutes les variables sont définies
    if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return {
        success: false,
        message: 'Variables d\'environnement SMTP manquantes',
        config: {
          host: process.env.SMTP_HOST || 'NON DÉFINI',
          port: process.env.SMTP_PORT || 'NON DÉFINI',
          user: process.env.SMTP_USER || 'NON DÉFINI',
          pass: process.env.SMTP_PASS ? 'DÉFINI' : 'NON DÉFINI'
        }
      }
    }

    // Créer le transporteur SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    // Tester la connexion
    console.log('Test de connexion SMTP...')
    await transporter.verify()
    
    return {
      success: true,
      message: 'Configuration SMTP valide et connexion réussie',
      config: {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        user: process.env.SMTP_USER,
        pass: 'DÉFINI'
      }
    }
    
  } catch (error: any) {
    console.log('❌ ERREUR SMTP:', error.message)
    return {
      success: false,
      message: 'Erreur de connexion SMTP: ' + error.message,
      error: error.message,
      config: {
        host: process.env.SMTP_HOST || 'NON DÉFINI',
        port: process.env.SMTP_PORT || 'NON DÉFINI',
        user: process.env.SMTP_USER || 'NON DÉFINI',
        pass: process.env.SMTP_PASS ? 'DÉFINI' : 'NON DÉFINI'
      }
    }
  }
}) 