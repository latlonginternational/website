import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  console.log('=== API CONTACT SIMPLE APPELÉE ===')
  
  try {
    const body = await readBody(event)
    const { name, email, phone, subject, message } = body
    console.log('Données reçues:', { name, email, phone, subject, message: message.substring(0, 50) + '...' })

    // Validation des données
    if (!name || !email || !phone || !subject || !message) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Tous les champs sont requis'
      })
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Format d\'email invalide'
      })
    }

               // Validation du téléphone (plus flexible pour les standards internationaux)
           const phoneRegex = /^\+[0-9]{1,4}\s[0-9\s\-\(\)\.]{6,15}$/
           if (!phoneRegex.test(phone)) {
             throw createError({
               statusCode: 400,
               statusMessage: 'Format de téléphone invalide (ex: +243 123456789)'
             })
           }

    // Vérifier la configuration SMTP
    console.log('=== CONFIGURATION SMTP ===')
    console.log('SMTP_HOST:', process.env.SMTP_HOST || 'NON DÉFINI')
    console.log('SMTP_PORT:', process.env.SMTP_PORT || 'NON DÉFINI')
    console.log('SMTP_USER:', process.env.SMTP_USER || 'NON DÉFINI')
    console.log('SMTP_PASS:', process.env.SMTP_PASS ? `***${process.env.SMTP_PASS.substring(0, 3)}***` : 'NON DÉFINI')
    
    // Vérifier si toutes les variables sont définies
    if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Configuration SMTP incomplète'
      })
    }

    // Créer le transporteur SMTP
    console.log('=== CRÉATION TRANSPORTEUR SMTP ===')
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587, // Port STARTTLS pour Titan.email
      secure: false, // STARTTLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      },
      tls: {
        rejectUnauthorized: false
      },
      connectionTimeout: 60000,
      greetingTimeout: 30000,
      socketTimeout: 60000,
      debug: true,
      logger: true
    })

    // Vérifier la connexion SMTP
    console.log('=== VÉRIFICATION CONNEXION SMTP ===')
    try {
      await transporter.verify()
      console.log('✅ Connexion SMTP réussie')
    } catch (verifyError: any) {
      console.log('❌ Échec de la connexion SMTP:', verifyError.message)
      console.log('Détails de l\'erreur:', verifyError)
      throw createError({
        statusCode: 500,
        statusMessage: 'Erreur de connexion SMTP: ' + verifyError.message
      })
    }

    // Envoyer l'email
          console.log('=== ENVOI EMAIL ===')
      console.log('De:', process.env.SMTP_USER)
      console.log('À:', ['info@latlongcongo.com', 'vincent@wito-inc.com'])
      console.log('Sujet:', `Message de contact: ${subject}`)
    
    await transporter.sendMail({
      from: `"Latlong International" <latlong@wito-inc.com>`,
      to: ['info@latlongcongo.com', 'vincent@wito-inc.com'],
      replyTo: email, // Permet de répondre directement à l'expéditeur
      subject: `Message de contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #00AEEF; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">Nouveau message de contact</h1>
            <p style="margin: 5px 0 0 0; font-size: 14px;">Latlong International</p>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div style="margin-bottom: 20px;">
              <h3 style="color: #00AEEF; margin-bottom: 10px; border-bottom: 2px solid #00AEEF; padding-bottom: 5px;">Informations du contact</h3>
              <p style="margin: 8px 0;"><strong style="color: #333;">Nom:</strong> <span style="color: #666;">${name}</span></p>
              <p style="margin: 8px 0;"><strong style="color: #333;">Email:</strong> <span style="color: #666;">${email}</span></p>
              <p style="margin: 8px 0;"><strong style="color: #333;">Téléphone:</strong> <span style="color: #666;">${phone}</span></p>
              <p style="margin: 8px 0;"><strong style="color: #333;">Sujet:</strong> <span style="color: #666;">${subject}</span></p>
            </div>
            
            <div>
              <h3 style="color: #00AEEF; margin-bottom: 10px; border-bottom: 2px solid #00AEEF; padding-bottom: 5px;">Message</h3>
              <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #00AEEF;">
                <p style="margin: 0; line-height: 1.6; color: #333; white-space: pre-line;">${message}</p>
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
              <p style="color: #666; font-size: 12px; margin: 0;">
                Ce message a été envoyé depuis le formulaire de contact de Latlong International<br>
                <a href="https://latlong.witoxr.app/" style="color: #00AEEF; text-decoration: none;">https://latlong.witoxr.app/</a>
              </p>
            </div>
          </div>
        </div>
      `
    })
    
    console.log('✅ Email envoyé avec succès!')
    
    return {
      success: true,
      message: 'Message envoyé avec succès !'
    }
    
  } catch (error: any) {
    console.log('❌ ERREUR DANS L\'API:', error)
    console.log('Type d\'erreur:', error.constructor.name)
    console.log('Message d\'erreur:', error.message)
    console.log('Code d\'erreur:', error.code)
    
    // Gestion des erreurs spécifiques
    if (error?.message && error.message.includes('Missing credentials')) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Configuration email non disponible. Veuillez nous contacter directement.'
      })
    } else if (error?.message && error.message.includes('Greeting never received')) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Problème de connexion au serveur email. Veuillez réessayer plus tard.'
      })
    } else if (error?.message && error.message.includes('SMTP')) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Erreur de configuration email. Veuillez nous contacter directement.'
      })
    }

    // Erreur générique
    throw createError({
      statusCode: 500,
      statusMessage: 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.'
    })
  }
}) 