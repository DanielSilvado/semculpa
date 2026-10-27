# Planilha de leads (Google Apps Script)

Grava cada cadastro da página numa planilha do Google: data/hora, nome, WhatsApp, UTMs do anúncio e página.

## Instalação (uns 5 minutos)

1. Crie uma planilha nova no Google Sheets (ex.: "Leads · O Mapa do Posicionamento").
2. No menu, abra **Extensões → Apps Script**.
3. Apague o conteúdo do arquivo `Código.gs` e cole todo o conteúdo de [`Code.gs`](./Code.gs). Salve.
4. Clique em **Implantar → Nova implantação**.
   - Tipo: **App da Web**
   - Executar como: **Eu**
   - Quem pode acessar: **Qualquer pessoa**
5. Autorize o acesso quando o Google pedir (é a sua própria conta gravando na sua planilha).
6. Copie a **URL do app da Web** (termina em `/exec`).
7. No projeto, em `src/content.ts`, cole a URL em `links.leadWebhook`:

   ```ts
   leadWebhook: 'https://script.google.com/macros/s/.../exec' as string | null,
   ```

8. Rode `npm run build` e publique de novo.

A aba **Leads** é criada sozinha no primeiro cadastro.

## Testar

Abra a página, preencha um nome de teste e um WhatsApp válido, e confira se a linha apareceu na planilha.

## Se alterar o script depois

Em **Implantar → Gerenciar implantações**, edite a implantação existente e escolha **Nova versão**. Assim a URL continua a mesma.
