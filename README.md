# Clara Valente, Nutricionista (projeto conceito)

Site conceito da WAW Studio para o portfólio. Marca, textos, depoimentos e e-books são fictícios.
Os botões de WhatsApp e o Instagram levam para a WAW.

Feito a partir do mesmo código do site da Jéssica Sousa (que continua intacto em `CLIENTES/PROPOSTAS/jessica-sousa-nutri`).

## Rodar no computador

```bash
npm install
npm run dev
```

Abre em http://localhost:5173. Para testar a versão final: `npm run build` e depois `npm run preview`.

## Editar

- **Textos, contatos, depoimentos, e-books, endereço:** tudo em `src/content.ts`.
- **Fotos e logos:** ficam em `img-originais/` (`hero.jpg`, `sobre.jpg`, `logo-nome.png`, `logo-simbolo.png`). Depois de trocar, rode `npm run images`.
- **Créditos das fotos:** `img-originais/CREDITOS.txt` (Unsplash, Alexander Mass).
- **SEO e prévia de compartilhamento:** `index.html`.
- **Selo "Projeto conceito por WAW Studio":** `src/components/Selo.tsx` (texto e link em `selo`, no `content.ts`).

## Publicar na Vercel

1. Suba a pasta para um repositório no GitHub.
2. Na Vercel: **Add New → Project**, escolha o repositório e clique em **Deploy**.
3. Depois de ter o endereço final, troque `SEU-DOMINIO.com.br` no `index.html`.
