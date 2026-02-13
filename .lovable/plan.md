

## Plano: Alinhar Bottom Navigation + Dialogo de Idioma

### O que sera feito

**1. Alinhar o Bottom Navigation**
- Centralizar melhor os itens da barra inferior com espa&#231;amento igual
- Garantir que os &#237;cones e textos fiquem perfeitamente alinhados verticalmente
- Adicionar padding inferior para dispositivos com "safe area" (notch)

**2. Criar Dialogo de Selecao de Idioma**
- Novo dialogo que aparece na primeira abertura do app (antes dos Termos de Uso)
- Duas opcoes com bandeiras: Portugues (BR) e English (US)
- Salvar a escolha no `localStorage` para nao perguntar novamente
- Criar um hook `useLanguage` para gerenciar o idioma selecionado

**3. Fluxo de primeira abertura atualizado**
- 1o: Dialogo de idioma
- 2o: Dialogo de Termos de Uso (ja no idioma escolhido)
- 3o: App principal

### Detalhes tecnicos

**Arquivos novos:**
- `src/hooks/useLanguage.ts` - Hook para gerenciar idioma com localStorage
- `src/components/LanguageDialog.tsx` - Dialogo de selecao de idioma
- `src/i18n/translations.ts` - Arquivo com todas as traducoes (PT e EN)

**Arquivos modificados:**
- `src/components/BottomNav.tsx` - Ajustar alinhamento (gap, padding, justify-center)
- `src/pages/Index.tsx` - Adicionar fluxo do dialogo de idioma antes dos termos
- `src/components/TermsDialog.tsx` - Usar traducoes
- `src/components/screens/VersesScreen.tsx` - Usar traducoes
- `src/components/screens/FavoritesScreen.tsx` - Usar traducoes
- `src/components/screens/SettingsScreen.tsx` - Usar traducoes + opcao de trocar idioma
- `src/data/verses.ts` - Adicionar versiculos em ingles

**Estrutura de traducoes (`translations.ts`):**
```text
translations = {
  pt: { verses: "Frases", favorites: "Favoritos", settings: "Configuracoes", ... },
  en: { verses: "Verses", favorites: "Favorites", settings: "Settings", ... }
}
```

**Opcao de trocar idioma nas Configuracoes:**
- Adicionar uma secao "Idioma" na tela de configuracoes para que o usuario possa trocar a qualquer momento

