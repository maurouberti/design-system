![Static Badge](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=%23ffffff)
![Static Badge](https://img.shields.io/badge/Tailwind.css-%2306B6D4?logo=tailwindcss&logoColor=%23ffffff)
![Static Badge](https://img.shields.io/badge/Storybook-FF4785?logo=storybook&logoColor=%23ffffff)

# Criando um Design System com TailwindCSS

[![Static Badge](https://img.shields.io/badge/GitHub.Curso1-%23181717?logo=github&logoColor=%23ffffff)](https://github.com/alura-cursos/alfabit-design-system/tree/main)
[![Static Badge](https://img.shields.io/badge/GitHub.Curso2-%23181717?logo=github&logoColor=%23ffffff)](https://github.com/alura-cursos/3172-alfabit-design-system/tree/main)
[![Static Badge](https://img.shields.io/badge/GitHub.Curso3-%23181717?logo=github&logoColor=%23ffffff)](https://github.com/alura-cursos/alfabit-ds/tree/main)
[![Static Badge](https://img.shields.io/badge/GitHub.Curso4-%23181717?logo=github&logoColor=%23ffffff)](https://github.com/alura-cursos/alfabit-ds-pkg)

# Iniciar

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000)

# Design-System

```bash
npm run storybook
```

[http://localhost:6006/](http://localhost:6006/)

## Publicar Design-System

```bash
npm run build-storybook -s public
```

# Enviar para chromatic

```bash
npx chromatic --project-token=chpt_0aa00000a0000aa
```

Para esconder o token coi criado o arquivo `run-chromatic.js`, portanto o novo comando:

```bash
npm run chromatic
```

> https://www.chromatic.com/

# Publicar NPM

Verificar se esta logado

```bash
npm whoami
```

Se precisar trocar de conta, faça logout e depois login com a conta correta

```bash
npm logout
npm login
```

Publlicar

```bash
npm publish --access public
```

https://npmjs.com


# VS Code

ESLint  
Tailwind CSS IntelliSense  
