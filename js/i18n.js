(function () {
  'use strict';

  var LANG_KEY = 'deltaLanguage';

  var T = {
    en: {
      nav_home: 'Home',
      nav_services: 'Services',
      nav_insurance: 'Insurance',
      nav_about: 'About Us',
      nav_contact: 'Contact',
      nav_portal: 'Provider Portal',
      nav_switch: 'Switch View',
      nav_hiring: "We're Hiring",
      lang_en: 'English',
      lang_es: 'Español',
      spanish_callout: 'We speak Spanish — call today',
      spanish_callout_footer: 'We speak Spanish — call today',
      cookie_text: 'We use cookies to improve your experience. By continuing you agree to our <a href="privacy.html">Privacy Policy</a>.',
      cookie_accept: 'Accept',
      float_questions: 'Questions? Call Us',

      gate_tagline: 'California\'s Dedicated Medi-Cal & Specialized Institutional Pharmacy Hub.',
      gate_sub: 'Choose your portal experience below to access direct care coordination and statewide fulfillment.',
      gate_patient_title: 'I am a Patient or Family Member',
      gate_patient_sub: 'Free statewide home delivery on all covered medications, formulas, and supplies. Emergency local pickup available.',
      gate_pro_title: 'I am a Healthcare Professional',
      gate_pro_sub: 'Access Delta Connect to submit referrals, bypass administrative paperwork, and track clinical status.',
      gate_partner_title: 'I am a Referral Partner',
      gate_partner_sub: 'Centralized specialty infant formula allocation and rapid prior authorization processing for WIC, hospitals, and county health departments.',
      gate_enter: 'Enter →',
      gate_switch: 'Switch View',

      gate_badge_1: 'Medi-Cal Rx Authorized',
      gate_badge_2: 'L.A. Care Contracted Provider',
      gate_badge_3: 'HIPAA Compliant Architecture',
      gate_badge_4: 'Licensed California Institutional Pharmacy',
      gate_stat_1_num: '8,000 Sq. Ft.',
      gate_stat_1_desc: 'State-of-the-Art Fulfillment Facility',
      gate_stat_2_num: '100% Covered',
      gate_stat_2_desc: 'Zero Shipping or Delivery Costs to Patients',
      gate_stat_3_num: 'Statewide Reach',
      gate_stat_3_desc: 'Overnight Delivery to Any Corner of California',

      badge_medicare: 'Medicare Approved',
      badge_medical: 'Medi-Cal Approved',
      badge_hipaa: 'HIPAA Compliant',
      badge_license: 'Licensed California Pharmacy',
      badge_since: 'Serving California Since 1998',

      trust_insurance: 'We Handle Your Insurance',
      trust_delivery: 'Free Home Delivery Statewide',
      trust_medicare: 'Medicare & Medi-Cal Approved',
      trust_since: 'Serving California Since 1998',

      patient_hero_title: 'Your Health. Our Care. Delivered.',
      patient_bullet_1: 'Your doctor refers you',
      patient_bullet_2: 'We handle your insurance',
      patient_bullet_3: 'Supplies arrive at your door',
      patient_cta: 'Get Started Today',

      steps_title: 'Healthcare. Made Simple.',
      step1_title: 'Get a Referral',
      step1_text: 'Your doctor or specialist writes a referral for the products you need',
      step2_title: 'We Call You',
      step2_text: 'Our team calls you within 24 hours, verifies your insurance, and confirms your order — at no cost to you',
      step3_title: 'Delivered Free',
      step3_text: 'Your supplies arrive discreetly at your door, covered by your insurance',
      steps_cta: 'Have questions? Call us anytime — <a href="tel:8183092884">real people answer</a>',

      about_title: 'One of California\'s Most Trusted Healthcare Suppliers',
      about_p1: 'Delta Drugs has been helping families across California for over 25 years. We are a Medicare and Medi-Cal approved vendor accepting all major insurance plans.',
      about_p2: 'Serving Glendale, Los Angeles, Burbank, Pasadena, the San Fernando Valley, and communities throughout California.',

      services_title: 'What We Provide',
      svc_enteral: 'Enteral Nutrition',
      svc_enteral_desc: 'Tube feeding formulas and supplies, covered by insurance.',
      svc_formula: 'Infant Formula',
      svc_formula_desc: 'Medically necessary formula, accepted by WIC and major plans.',
      svc_rx: 'Rx Medications',
      svc_rx_desc: 'Full-service pharmacy — Medicare Part D and Medi-Cal accepted.',
      svc_pump: 'Electric Breast Pump',
      svc_pump_desc: 'Insurance-covered breast pumps for new mothers.',
      svc_incont: 'Incontinence Supplies',
      svc_incont_desc: 'Discreet home delivery of adult incontinence products.',
      svc_diabetic: 'Diabetic Supplies',
      svc_diabetic_desc: 'Glucose monitors, test strips, CGM, and insulin supplies.',
      learn_more: 'Learn More →',

      insurance_title: 'We Accept Your Insurance',
      insurance_text: 'We are a proud Medicare and Medi-Cal approved vendor accepting all major insurance plans — we handle the billing so you don\'t have to.',
      insurance_note: 'Don\'t see your plan? Call us — we work with most major California insurance plans.',
      insurance_btn: 'Verify My Insurance',

      testimonials_title: 'What Our Patients Say',
      testimonial_1: 'Delta Drugs made everything so easy. They handled my insurance, called me to confirm everything, and my supplies arrived within days. I couldn\'t believe how simple it was.',
      testimonial_1_author: 'Maria T., Glendale',
      testimonial_2: 'My doctor referred me and within 24 hours Delta Drugs had already called me and verified my Medicare coverage. The team is so kind and professional.',
      testimonial_2_author: 'Robert M., Burbank',
      testimonial_3: 'As a caregiver for my mother, having Delta Drugs handle her enteral nutrition supplies has been a lifesaver. They always follow up and make sure we have everything we need.',
      testimonial_3_author: 'Sandra L., Pasadena',

      contact_us: 'Contact Us',
      contact_hours: 'Mon–Fri 9am–6pm, Sat 9am–2pm',
      contact_location: 'Glendale, CA',

      footer_tagline: 'California Healthcare Products',
      footer_since: 'Proudly serving patients and healthcare professionals throughout California since 1998',
      footer_quick: 'Quick Links',
      footer_services: 'Our Services',
      footer_contact: 'Contact Info',
      footer_privacy: 'Privacy Policy',
      footer_hipaa: 'HIPAA Notice',
      footer_terms: 'Terms of Use',
      footer_copyright: 'Delta Drugs. All rights reserved.',

      pro_hero_title: 'Referrals. Authorized. Delivered. We Take the Medi-Cal Paperwork Off Your Desk.',
      pro_bullet_1: '<strong>Automated Prior Authorization Engine</strong> — Don\'t waste clinic payroll fighting strict state rejections. Upload the script and chart notes — our dedicated team handles the rest.',
      pro_bullet_2: '<strong>The Total Care Bundle</strong> — We seamlessly coordinate and package niche medications, complex enteral nutrition formulas, and DME incontinence supplies into a single, unified delivery.',
      pro_bullet_3: '<strong>100% California-Focused Logistics</strong> — Built for speed. Direct same-day delivery within our local radius and guaranteed overnight shipping to the most remote areas of the state.',
      pro_cta: 'Access Provider Portal',
      pro_fax: 'Fax a Referral — (866) 700-6401',
      pro_call: 'Or call intake: <strong>(818) 309-2884</strong>',

      pro_stat_years: 'Years Serving California',
      pro_stat_processing: 'Average Processing',
      pro_stat_billing: 'Insurance Billing Handled',
      pro_stat_team: 'Dedicated Intake Team',

      pro_refer_title: 'How to Refer',
      pro_refer_portal: 'Online Provider Portal',
      pro_refer_portal_desc: 'Submit referrals, upload documents, and track order status in real time — 24/7.',
      pro_refer_portal_btn: 'Access Portal',
      pro_refer_fax: 'Fax Your Referral',
      pro_refer_fax_desc: 'Fax your prescription and insurance info to our intake team.',
      pro_refer_call: 'Call Our Intake Team',
      pro_refer_call_desc: 'Speak directly with a specialist who will guide you through the process.',

      pro_products_title: 'Products We Supply',
      pro_why_title: 'Why Healthcare Professionals Choose Us',
      pro_why_1: 'We handle all insurance verification and prior authorizations — you focus on patients',
      pro_why_2: 'Dedicated intake specialists answer your calls — no phone trees',
      pro_why_3: 'Real-time order tracking through our Provider Portal',
      pro_why_4: 'On-staff nutrition specialists for complex enteral cases',
      pro_why_5: 'Most referrals processed and confirmed within 48 hours',
      pro_why_6: 'We follow up directly with your patients so you don\'t have to',
      pro_why_7: 'Medicare, Medi-Cal, and all major California insurance accepted',
      pro_why_8: 'Serving California healthcare professionals since 1998',

      pro_form_title: 'Quick Referral Form',
      pro_form_provider: 'Provider Full Name *',
      pro_form_npi: 'NPI Number',
      pro_form_practice: 'Practice or Hospital Name *',
      pro_form_phone: 'Phone Number *',
      pro_form_patient: 'Patient Full Name *',
      pro_form_dob: 'Date of Birth *',
      pro_form_product: 'Product or Service Needed *',
      pro_form_insurance: 'Patient Insurance Plan',
      pro_form_notes: 'Additional Notes',
      pro_form_submit: 'Send Referral →',
      pro_form_success: 'Thank you! Our intake team will contact you within 2 business hours.',
      pro_form_select: 'Select…',

      partner_hero_title: 'Streamlined Specialty Formula Allocation for California Agencies.',
      partner_bullet_1: '<strong>Direct WIC & Case Manager Pipeline</strong> — Fast, reliable processing built to help overstretched regional agencies support vulnerable families instantly.',
      partner_bullet_2: '<strong>Medi-Cal Rx Prior Authorization Experts</strong> — We eliminate the bureaucratic back-and-forth for highly specialized infant formulas and metabolic nutrition.',
      partner_bullet_3: '<strong>Overnight Doorstep Fulfillment</strong> — Heavy shipments are handled completely by us, arriving directly on the patient\'s porch anywhere in California at 100% zero cost to the family.',
      partner_wic_desc: 'WIC-approved supplier',
      partner_cta: 'Start a Partnership',
      partner_icon_wic: 'WIC Centers',
      partner_icon_hospital: 'Hospitals',
      partner_icon_county: 'County Health',
      partner_icon_clinic: 'Clinics',

      partner_who_title: 'Who We Work With',
      partner_process_title: 'Our Process',
      partner_products_title: 'Products We Supply',
      partner_form_title: 'Partnership Inquiry',
      partner_form_org: 'Organization Name *',
      partner_form_contact: 'Contact Name *',
      partner_form_title_field: 'Title',
      partner_form_phone: 'Phone *',
      partner_form_email: 'Email *',
      partner_form_type: 'Organization Type *',
      partner_form_volume: 'Monthly Referral Volume',
      partner_form_message: 'Message',
      partner_form_submit: 'Request Partnership Info →',
      partner_form_success: 'Thank you! Our partnership team will contact you shortly.'
    },
    es: {
      nav_home: 'Inicio',
      nav_services: 'Servicios',
      nav_insurance: 'Seguros',
      nav_about: 'Quiénes Somos',
      nav_contact: 'Contáctenos',
      nav_portal: 'Portal de Proveedores',
      nav_switch: 'Cambiar Vista',
      nav_hiring: '¡Estamos Contratando!',
      lang_en: 'English',
      lang_es: 'Español',
      spanish_callout: 'Hablamos español — llámenos hoy mismo 🇲🇽',
      spanish_callout_footer: 'Hablamos español — llámenos hoy mismo 🇲🇽',
      cookie_text: 'Usamos cookies para mejorar tu experiencia. Al continuar aceptas nuestra <a href="privacy.html">Política de Privacidad</a>.',
      cookie_accept: 'Aceptar',
      float_questions: '¿Preguntas? Llámanos',

      gate_tagline: 'Centro Dedicado de Farmacia Medi-Cal e Institucional Especializada de California.',
      gate_sub: 'Elige tu portal abajo para coordinar tu cuidado directo y recibir en todo el estado.',
      gate_patient_title: 'Soy Paciente o Familiar',
      gate_patient_sub: 'Entrega gratis a todo California en medicamentos, fórmulas y suministros cubiertos. Recogida local de emergencia disponible.',
      gate_pro_title: 'Soy Profesional de Salud',
      gate_pro_sub: 'Entra a Delta Connect para mandar referidos, saltarte el papeleo, y darle seguimiento clínico.',
      gate_partner_title: 'Soy Socio de Referidos',
      gate_partner_sub: 'Asignación centralizada de fórmula infantil especializada y autorizaciones previas rapidísimas para WIC, hospitales y departamentos de salud del condado.',
      gate_enter: 'Entrar →',
      gate_switch: 'Cambiar Vista',

      gate_badge_1: 'Autorizado por Medi-Cal Rx',
      gate_badge_2: 'Proveedor Contratado de L.A. Care',
      gate_badge_3: 'Arquitectura Cumplida con HIPAA',
      gate_badge_4: 'Farmacia Institucional Licenciada en California',
      gate_stat_1_num: '8,000 pies cuadrados',
      gate_stat_1_desc: 'Instalación de Cumplimiento de Última Generación',
      gate_stat_2_num: '100% Cubierto',
      gate_stat_2_desc: 'Sin Costos de Envío ni Entrega para el Paciente',
      gate_stat_3_num: 'Alcance Estatal',
      gate_stat_3_desc: 'Entrega Nocturna a Cualquier Rincón de California',

      badge_medicare: 'Aprobado por Medicare',
      badge_medical: 'Aprobado por Medi-Cal',
      badge_hipaa: 'Cumple con HIPAA',
      badge_license: 'Farmacia Licenciada en California',
      badge_since: 'Sirviendo California Desde 1998',

      trust_insurance: 'Manejamos Tu Seguro',
      trust_delivery: 'Entrega Gratis a Domicilio',
      trust_medicare: 'Aprobados por Medicare y Medi-Cal',
      trust_since: 'Sirviendo California Desde 1998',

      patient_hero_title: 'Tu Salud. Nuestro Cuidado. Entregado.',
      patient_bullet_1: 'Tu doctor te refiere',
      patient_bullet_2: 'Nosotros manejamos tu seguro',
      patient_bullet_3: 'Tus productos llegan a tu casa',
      patient_cta: 'Empieza Hoy',

      steps_title: '¿Cómo Funciona? Es Muy Fácil.',
      step1_title: 'Obtén un Referido',
      step1_text: 'Tu doctor o especialista escribe un referido para los productos que necesitas',
      step2_title: 'Te Llamamos Nosotros',
      step2_text: 'Nuestro equipo te llama dentro de 24 horas, verifica tu seguro y confirma tu pedido — sin costo para ti',
      step3_title: 'Entrega Gratis',
      step3_text: 'Tus productos llegan discretamente a tu puerta, cubiertos por tu seguro',
      steps_cta: '¿Tienes dudas? Llámanos cuando quieras — <a href="tel:8183092884">siempre contestamos en español</a>',

      about_title: 'Uno de los Proveedores de Salud Más Confiables de California',
      about_p1: 'Delta Drugs lleva más de 25 años ayudando a familias en toda California. Somos proveedores aprobados de Medicare y Medi-Cal y aceptamos todos los seguros principales.',
      about_p2: 'Sirviendo a Glendale, Los Ángeles, Burbank, Pasadena, el Valle de San Fernando y comunidades en toda California.',

      services_title: 'Lo Que Ofrecemos',
      svc_enteral: 'Nutrición Enteral',
      svc_enteral_desc: 'Fórmulas y suministros para alimentación por tubo, cubiertos por seguro.',
      svc_formula: 'Fórmula para Bebés',
      svc_formula_desc: 'Fórmula médicamente necesaria, aceptada por WIC y seguros principales.',
      svc_rx: 'Medicamentos con Receta',
      svc_rx_desc: 'Farmacia completa — aceptamos Medicare Part D y Medi-Cal.',
      svc_pump: 'Bomba de Leche Eléctrica',
      svc_pump_desc: 'Bombas de leche cubiertas por seguro para mamás nuevas.',
      svc_incont: 'Productos de Incontinencia',
      svc_incont_desc: 'Entrega discreta de productos de incontinencia para adultos.',
      svc_diabetic: 'Productos para Diabéticos',
      svc_diabetic_desc: 'Monitores de glucosa, tiras, CGM e insulina.',
      learn_more: 'Ver Más',

      insurance_title: 'Aceptamos Tu Seguro',
      insurance_text: 'Somos proveedores aprobados de Medicare y Medi-Cal y aceptamos todos los seguros principales — nosotros nos encargamos de todo el papeleo',
      insurance_note: '¿No ves tu seguro? Llámanos — trabajamos con la mayoría de los seguros de California',
      insurance_btn: 'Verificar Mi Seguro',

      testimonials_title: 'Lo Que Dicen Nuestros Pacientes',
      testimonial_1: 'Delta Drugs hizo todo facilísimo. Se encargaron de mi seguro, me llamaron para confirmar, y mis productos llegaron en días. No lo podía creer.',
      testimonial_1_author: 'María T., Glendale',
      testimonial_2: 'Mi doctor me refirió y en menos de 24 horas ya me habían llamado y verificado mi Medicare. El equipo es muy amable.',
      testimonial_2_author: 'Roberto M., Burbank',
      testimonial_3: 'Como cuidadora de mi mamá, tener a Delta Drugs manejando todo ha sido una bendición. Siempre están al pendiente.',
      testimonial_3_author: 'Sandra L., Pasadena',

      contact_us: 'Contáctenos',
      contact_hours: 'Lun–Vie 9am–6pm, Sáb 9am–2pm',
      contact_location: 'Glendale, CA',

      footer_tagline: 'Productos de Salud para California',
      footer_since: 'Sirviendo orgullosamente a pacientes y profesionales de salud en toda California desde 1998',
      footer_quick: 'Enlaces Rápidos',
      footer_services: 'Nuestros Servicios',
      footer_contact: 'Contáctenos',
      footer_privacy: 'Política de Privacidad',
      footer_hipaa: 'Aviso de Privacidad HIPAA',
      footer_terms: 'Términos de Uso',
      footer_copyright: 'Delta Drugs. Todos los derechos reservados.',

      pro_hero_title: 'Referidos. Autorizados. Entregados. Quitamos el Papeleo de Medi-Cal de Tu Escritorio.',
      pro_bullet_1: '<strong>Motor de Autorización Previa Automatizado</strong> — No tires el dinero de la clínica peleando con rechazos estrictos del estado. Sube la receta y las notas — nuestro equipo dedicado se encarga del resto.',
      pro_bullet_2: '<strong>Paquete de Cuidado Total</strong> — Coordinamos y empacamos sin complicaciones medicamentos especializados, fórmulas de nutrición enteral complejas, y suministros de incontinencia DME en una sola entrega unificada.',
      pro_bullet_3: '<strong>Logística 100% Enfocada en California</strong> — Hecho para la velocidad. Entrega el mismo día en nuestro radio local y envío garantizado al día siguiente hasta las zonas más remotas del estado.',
      pro_cta: 'Acceder al Portal',
      pro_fax: 'Enviar Referido por Fax — (866) 700-6401',
      pro_call: 'O llame a admisión: <strong>(818) 309-2884</strong>',

      pro_stat_years: 'Años Sirviendo California',
      pro_stat_processing: 'Procesamiento Promedio',
      pro_stat_billing: 'Facturación de Seguros',
      pro_stat_team: 'Equipo de Admisión Dedicado',

      pro_refer_title: 'Cómo Referir',
      pro_refer_portal: 'Portal de Proveedores en Línea',
      pro_refer_portal_desc: 'Envíe referidos, suba documentos y rastree pedidos en tiempo real — 24/7.',
      pro_refer_portal_btn: 'Acceder al Portal',
      pro_refer_fax: 'Enviar Referido por Fax',
      pro_refer_fax_desc: 'Envíe la receta e información del seguro a nuestro equipo de admisión.',
      pro_refer_call: 'Llame a Nuestro Equipo de Admisión',
      pro_refer_call_desc: 'Hable directamente con un especialista que le guiará en el proceso.',

      pro_products_title: 'Productos que Suministramos',
      pro_why_title: 'Por Qué Nos Eligen los Profesionales de Salud',
      pro_why_1: 'Manejamos verificación de seguro y autorizaciones previas — usted se enfoca en sus pacientes',
      pro_why_2: 'Especialistas de admisión contestan sus llamadas — sin menús automáticos',
      pro_why_3: 'Rastreo de pedidos en tiempo real a través del Portal de Proveedores',
      pro_why_4: 'Especialistas en nutrición para casos complejos de nutrición enteral',
      pro_why_5: 'La mayoría de referidos procesados y confirmados en 48 horas',
      pro_why_6: 'Damos seguimiento directo a sus pacientes para que usted no tenga que hacerlo',
      pro_why_7: 'Aceptamos Medicare, Medi-Cal y todos los seguros principales de California',
      pro_why_8: 'Sirviendo a profesionales de salud en California desde 1998',

      pro_form_title: 'Formulario Rápido de Referido',
      pro_form_provider: 'Nombre Completo del Proveedor *',
      pro_form_npi: 'Número NPI',
      pro_form_practice: 'Nombre de la Práctica u Hospital *',
      pro_form_phone: 'Número de Teléfono *',
      pro_form_patient: 'Nombre Completo del Paciente *',
      pro_form_dob: 'Fecha de Nacimiento *',
      pro_form_product: 'Producto o Servicio Necesario *',
      pro_form_insurance: 'Plan de Seguro del Paciente',
      pro_form_notes: 'Notas Adicionales',
      pro_form_submit: 'Enviar Referido →',
      pro_form_success: '¡Gracias! Nuestro equipo de admisión le contactará en 2 horas hábiles.',
      pro_form_select: 'Seleccionar…',

      partner_hero_title: 'Asignación Especializada de Fórmula Simplificada para Agencias de California.',
      partner_bullet_1: '<strong>Canal Directo WIC y Case Managers</strong> — Procesamiento rápido y confiable para ayudar a agencias regionales saturadas a apoyar familias vulnerables al instante.',
      partner_bullet_2: '<strong>Expertos en Autorizaciones Previas Medi-Cal Rx</strong> — Eliminamos el papeleo burocrático para fórmulas infantiles altamente especializadas y nutrición metabólica.',
      partner_bullet_3: '<strong>Entrega Nocturna a la Puerta</strong> — Nos encargamos completamente de los envíos pesados, llegando directo al portal de la familia en cualquier parte de California al 100% sin costo para ellos.',
      partner_wic_desc: 'Proveedor aprobado por WIC',
      partner_cta: 'Iniciar una Alianza',
      partner_icon_wic: 'Centros WIC',
      partner_icon_hospital: 'Hospitales',
      partner_icon_county: 'Salud del Condado',
      partner_icon_clinic: 'Clínicas',

      partner_who_title: 'Con Quién Trabajamos',
      partner_process_title: 'Nuestro Proceso',
      partner_products_title: 'Productos que Suministramos',
      partner_form_title: 'Consulta de Alianza',
      partner_form_org: 'Nombre de la Organización *',
      partner_form_contact: 'Nombre de Contacto *',
      partner_form_title_field: 'Título',
      partner_form_phone: 'Teléfono *',
      partner_form_email: 'Correo Electrónico *',
      partner_form_type: 'Tipo de Organización *',
      partner_form_volume: 'Volumen Mensual de Referidos',
      partner_form_message: 'Mensaje',
      partner_form_submit: 'Solicitar Información de Alianza →',
      partner_form_success: '¡Gracias! Nuestro equipo de alianzas le contactará pronto.'
    }
  };

  window.getLang = function () {
    return localStorage.getItem(LANG_KEY) || 'en';
  };

  function t(key) {
    var lang = getLang();
    return (T[lang] && T[lang][key]) || (T.en[key]) || key;
  }

  window.toggleLanguage = function (lang) {
    if (!lang) lang = getLang() === 'en' ? 'es' : 'en';
    localStorage.setItem(LANG_KEY, lang);
    applyLanguage(lang);
    updateLangButtons(lang);
  };

  window.applyLanguage = function (lang) {
    lang = lang || getLang();
    document.documentElement.lang = lang === 'es' ? 'es' : 'en';
    document.body.classList.toggle('lang-es', lang === 'es');

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = t(key);
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
    });

    document.querySelectorAll('.spanish-callout').forEach(function (el) {
      el.hidden = lang !== 'es';
    });

    document.querySelectorAll('[data-i18n-value]').forEach(function (el) {
      if (el.tagName === 'OPTION' && el.value === '') {
        el.textContent = t(el.getAttribute('data-i18n-value'));
      }
    });

    document.documentElement.classList.add('i18n-ready');
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: lang }));
  };

  function updateLangButtons(lang) {
    document.querySelectorAll('.top-bar__lang button[data-lang]').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
    });
  }

  function bindLangToggle() {
    document.querySelectorAll('.top-bar__lang button[data-lang]').forEach(function (btn) {
      if (btn.dataset.bound) return;
      btn.dataset.bound = 'true';
      btn.addEventListener('click', function () {
        toggleLanguage(btn.getAttribute('data-lang'));
      });
    });
  }

  function init() {
    bindLangToggle();
    applyLanguage(getLang());
    updateLangButtons(getLang());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  document.addEventListener('partials-loaded', function () {
    bindLangToggle();
    applyLanguage(getLang());
    updateLangButtons(getLang());
  });
})();
