# O Mapa do Posicionamento · Aula gratuita

Páginas da aula gratuita **O Mapa do Posicionamento** (03/11, às 20h), preparação para a **Imersão Posicione-se Sem Culpa** (11/11), com Milena Grisólia.

Stack: React + TypeScript + Vite + Tailwind CSS v4. Gera um site estático com estas páginas:

| No ar | Pasta do build | Página |
| --- | --- | --- |
| `aula-mapa-do-posicionamento.vercel.app` | `/aula/` | **Captura de leads** da aula gratuita. É a página dos anúncios. |
| `imersao-sem-culpa.vercel.app` | `/venda/` | **Página de venda** da imersão. |
| — | `/pos-live/` | Página longa na identidade clara, sem uso no momento. |

## Publicação (Vercel)

São dois projetos na Vercel ligados ao mesmo repositório, um para cada endereço. Nenhuma página fica na raiz do build: o `vercel.json` olha o endereço acessado e entrega a página certa em `/`. Ele também manda `/venda` do endereço da captura para o da venda (e `/aula` da venda para a captura), para ninguém cair na página errada. Se algum endereço mudar, troque os nomes no `vercel.json`.

## Comandos

```bash
npm install      # instala dependências
npm run dev      # ambiente local: http://localhost:5173/aula/ e /venda/
npm run build    # gera o site estático em dist/
npm run preview  # pré-visualiza o build
```

## Como editar o conteúdo

Todos os textos, a data da aula, o link do grupo e os depoimentos ficam em **`src/content.ts`**.

- `*palavra*` → itálico em destaque (dourado na captura, verde na pós-live)
- `**trecho**` → negrito
- `{dia}` / `{Dia}` → "hoje", "amanhã" ou "terça, 03/11", calculado no horário de Brasília

### O que configurar antes de publicar

| Chave em `src/content.ts` | O que é |
| --- | --- |
| `links.leadWebhook` | URL do Apps Script da planilha de leads (instruções em [`apps-script/README.md`](apps-script/README.md)). Enquanto for `null`, a pessoa vai direto para o grupo sem salvar o cadastro. |
| `tracking.metaPixelId` | ID do Meta Pixel. Com ele, a página registra `PageView` e `Lead` (no envio do cadastro). |
| `links.whatsappGroup` | Grupo do WhatsApp para onde a pessoa vai depois do cadastro. |

Em `aula/index.html` e `venda/index.html`, troque o `og:image` pela URL absoluta do domínio final, para a imagem aparecer quando o link for compartilhado no WhatsApp.

## Imagens

Ficam em `public/images/` (WebP otimizado). Os originais estão em `assets/`.
