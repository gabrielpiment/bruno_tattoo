# Bruno Tattoo Studio

Estúdio de tatuagem premium - Site oficial com Nuxt 4 e Tailwind CSS v4.

## 🚀 Tecnologias

- **Nuxt 4** - Framework Vue moderno com SSR/SSG
- **Tailwind CSS v4** - Utility-first CSS framework
- **TypeScript** - Type safety
- **Vite** - Build tool nativo

## 📁 Estrutura do Projeto

```
bruno_tatto/
├── app/                          # Código-fonte da aplicação
│   ├── assets/
│   │   └── css/main.css          # Estilos globais (Tailwind)
│   ├── components/               # Componentes Vue reutilizáveis
│   ├── composables/              # Composables (lógica reutilizável)
│   ├── layouts/
│   │   └── default.vue           # Layout padrão
│   ├── pages/
│   │   └── index.vue             # Página inicial
│   ├── middleware/               # Middleware de rotas
│   ├── plugins/                  # Plugins Vue
│   ├── utils/                    # Funções utilitárias
│   ├── app.vue                   # Componente raiz
│   └── app.config.ts             # Config pública da app
├── public/                       # Arquivos estáticos (favicon, imagens)
├── server/                       # API e server middleware (Nitro)
│   └── api/
├── shared/                       # Código compartilhado (app + server)
├── nuxt.config.ts                # Configuração Nuxt
├── tsconfig.json                 # Config TypeScript
└── package.json
```

## 💻 Desenvolvimento

### Instalar dependências

```bash
npm install
```

### Iniciar servidor de desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no browser.

### Build para produção

```bash
npm run build
```

### Gerar site estático

```bash
npm run generate
```

### Preview de build

```bash
npm run preview
```

## 🎨 Tailwind CSS

O projeto usa **Tailwind CSS v4** com a integração nativa Vite:

- **Arquivo de entrada:** `app/assets/css/main.css`
- **Importação:** `@import "tailwindcss"`
- **Config:** Customizações podem ser feitas diretamente no arquivo CSS com `@theme`

### Customizar tema

Para estender o tema (cores, fontes, etc), edite `app/assets/css/main.css`:

```css
@import "tailwindcss";

@theme {
  --color-gold: #c9a84c;
  --color-ink: #1a1a1a;
  --font-display: "Playfair Display", serif;
}
```

## 🔧 Configuração

- **Compatibility Date:** 2025-11-01
- **DevTools:** Habilitado (Shift + Alt + D no browser)
- **Auto-import:** Componentes, composables e utils são auto-importados

## 📝 Notas

- Nuxt 4 usa a pasta `app/` como source root
- Componentes em `app/components/` são auto-importados
- Rotas são criadas automaticamente baseadas em `app/pages/`
- Middlewares são auto-registrados

## 📄 Licença

ISC
