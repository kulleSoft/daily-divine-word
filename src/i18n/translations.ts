export type Language = 'pt' | 'en';

export const translations = {
  pt: {
    // Bottom Nav
    verses: 'Frases',
    favorites: 'Favoritos',
    settings: 'Configurações',

    // Verses Screen
    versesTitle: 'Frases Bíblicas',
    versesSubtitle: 'Palavra do dia para inspirar sua jornada',
    newVerse: 'Nova Frase',
    adPlaceholder: 'Espaço para Anúncio',

    // Verse Card
    saved: 'Salvo',
    save: 'Salvar',
    share: 'Compartilhar',
    shareTitle: 'Frase Bíblica',
    shareAppName: '📖 Frases Bíblicas',
    copied: 'Copiado!',
    copiedDesc: 'Versículo copiado para a área de transferência.',

    // Favorites Screen
    favoritesTitle: 'Favoritos',
    favoritesSubtitle: 'Suas frases salvas',
    noFavorites: 'Nenhum favorito ainda',
    noFavoritesHint: 'Toque no coração nas frases para salvá-las aqui',

    // Settings Screen
    settingsTitle: 'Configurações',
    settingsSubtitle: 'Personalize sua experiência',
    appearance: 'Aparência',
    darkMode: 'Modo Escuro',
    enabled: 'Ativado',
    disabled: 'Desativado',
    language: 'Idioma',
    languageLabel: 'Idioma do App',
    portuguese: 'Português',
    english: 'English',
    legal: 'Legal',
    termsOfUse: 'Termos de Uso',
    about: 'Sobre',
    appName: 'Frases Bíblicas',
    version: 'Versão 1.0.0',
    madeWith: 'Desenvolvido com ❤️ para compartilhar a Palavra de Deus.',

    // Terms Dialog
    termsTitle: 'Termos de Uso',
    termsSubtitle: 'Leia e aceite os termos para continuar',
    termsAppUsageTitle: 'Uso do Aplicativo',
    termsAppUsageDesc: 'Este aplicativo foi desenvolvido para compartilhar versículos e frases bíblicas inspiradoras. Todo o conteúdo é retirado da Bíblia Sagrada.',
    termsAdsTitle: 'Exibição de Anúncios',
    termsAdsDesc: 'Para manter o aplicativo gratuito e disponível para todos, exibimos anúncios durante o uso. Os anúncios são fornecidos por parceiros de publicidade e ajudam a custear o desenvolvimento e manutenção do app.',
    termsAcceptText: 'Ao aceitar estes termos, você concorda com a exibição de anúncios e com o uso do aplicativo conforme descrito acima. Seus dados de favoritos são armazenados apenas localmente no seu dispositivo.',
    termsAcceptButton: 'Aceitar e Continuar',
    termsCloseButton: 'Fechar',

    // Language Dialog
    chooseLanguage: 'Escolha o Idioma',
    chooseLanguageDesc: 'Selecione o idioma do aplicativo',
  },
  en: {
    // Bottom Nav
    verses: 'Verses',
    favorites: 'Favorites',
    settings: 'Settings',

    // Verses Screen
    versesTitle: 'Bible Verses',
    versesSubtitle: 'Daily word to inspire your journey',
    newVerse: 'New Verse',
    adPlaceholder: 'Ad Space',

    // Verse Card
    saved: 'Saved',
    save: 'Save',
    share: 'Share',
    shareTitle: 'Bible Verse',
    shareAppName: '📖 Bible Verses',
    copied: 'Copied!',
    copiedDesc: 'Verse copied to clipboard.',

    // Favorites Screen
    favoritesTitle: 'Favorites',
    favoritesSubtitle: 'Your saved verses',
    noFavorites: 'No favorites yet',
    noFavoritesHint: 'Tap the heart on verses to save them here',

    // Settings Screen
    settingsTitle: 'Settings',
    settingsSubtitle: 'Customize your experience',
    appearance: 'Appearance',
    darkMode: 'Dark Mode',
    enabled: 'Enabled',
    disabled: 'Disabled',
    language: 'Language',
    languageLabel: 'App Language',
    portuguese: 'Português',
    english: 'English',
    legal: 'Legal',
    termsOfUse: 'Terms of Use',
    about: 'About',
    appName: 'Bible Verses',
    version: 'Version 1.0.0',
    madeWith: 'Made with ❤️ to share the Word of God.',

    // Terms Dialog
    termsTitle: 'Terms of Use',
    termsSubtitle: 'Read and accept the terms to continue',
    termsAppUsageTitle: 'App Usage',
    termsAppUsageDesc: 'This app was developed to share inspiring Bible verses and phrases. All content is taken from the Holy Bible.',
    termsAdsTitle: 'Ad Display',
    termsAdsDesc: 'To keep the app free and available to everyone, we display ads during use. Ads are provided by advertising partners and help cover the development and maintenance costs.',
    termsAcceptText: 'By accepting these terms, you agree to the display of ads and the use of the app as described above. Your favorites data is stored locally on your device only.',
    termsAcceptButton: 'Accept and Continue',
    termsCloseButton: 'Close',

    // Language Dialog
    chooseLanguage: 'Choose Language',
    chooseLanguageDesc: 'Select the app language',
  },
} as const;

export type TranslationKey = keyof typeof translations.pt;
