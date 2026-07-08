// ==========================================
// CONFIGURAÇÃO DO SITE MBWAY - WHITE LABEL
// ==========================================
// Edite apenas este arquivo para personalizar o site para cada cliente

const CONFIG = {
  // Informações do Negócio
  business: {
    name: 'Dandara Lash Designer',           // Ex: "Nails Designer"
    logoFile: 'logo.png',               // Nome do arquivo do logo (deve estar na mesma pasta)
  },

  // Número MBWay
  mbway: {
    phoneDisplay: '+351 966 737 018',        // Formato visual (com espaços)
    phoneValue: '966737018',            // Número real (sem espaços, será copiado)
  },

  // Cores e Estilo
  theme: {
  primaryColor: '#7E8E78',
  primaryColorHover: '#6B7966',
  backgroundColor: '#EEF1EB',
  cardBackground: '#FCFCFA',
  cardShadow: '0 8px 24px rgba(62, 78, 58, 0.12)',
},

  // Textos Customizáveis
  text: {
    pageTitle: 'Pagamento MBWay',       // Título da aba do navegador
    label: 'Número MBWay',              // Texto acima do número
    buttonText: 'Copiar e Abrir MB WAY', // Texto do botão
    successMessage: '✓ Copiado! A abrir MB WAY...', // Mensagem de sucesso
    errorMessage: 'Erro ao copiar. Seleciona o número manualmente.', // Mensagem de erro

    // Instruções
    step1: 'Clica no botão',
    step2: 'No MB WAY → cola o número',
  },
};
