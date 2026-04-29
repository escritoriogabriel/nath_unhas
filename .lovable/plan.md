## Site Nail Designer — HTML estático para GitHub Pages

Criar um único arquivo `index.html` (com CSS e JS embutidos) na raiz do projeto, pronto para publicar no GitHub Pages. Estilo boutique moderno, minimalista e aconchegante usando a paleta `#687FE5`, `#EBD6FB` e `#FDF4F5`.

### Estrutura da página (one-page)

1. **Header fixo** com logo/nome da profissional + menu âncora (Sobre, Serviços, Galeria, Depoimentos, FAQ, Contato).
2. **Hero** — título elegante, subtítulo curto, dois botões (WhatsApp + Instagram), foto de destaque.
3. **Sobre** — foto da profissional + bio fictícia curta (formação, anos de experiência, filosofia de atendimento).
4. **Serviços e preços** — grid de cards (ex.: Manicure clássica, Pedicure spa, Esmaltação em gel, Alongamento em fibra, Nail art, Combo mão+pé) com preço e duração.
5. **Galeria** — grid responsivo com 8–9 fotos do Unsplash (nail art, manicure, mãos cuidadas) com hover sutil.
6. **Depoimentos** — 3 cards de clientes fictícias com nome, avaliação em estrelas e comentário.
7. **FAQ** — 4 perguntas em accordion (`<details>`/`<summary>`) sobre duração, durabilidade, agendamento e formas de pagamento.
8. **Localização e horários** — endereço fictício, horários de atendimento e mapa embed simples (iframe do OpenStreetMap, sem chave de API).
9. **CTA final + Footer** — botão grande de WhatsApp, ícones sociais, créditos.

### Identidade visual

- **Paleta**: fundo `#FDF4F5` (rosé claro), acentos `#EBD6FB` (lavanda) em cards/badges, `#687FE5` (azul-violeta) para CTAs, links e detalhes; texto em cinza-grafite suave.
- **Tipografia (Google Fonts)**: `Cormorant Garamond` (serif) para títulos, `Inter` (sans) para corpo — combinação boutique moderna.
- **Detalhes**: cantos arredondados generosos, sombras suaves, espaçamento amplo, divisores delicados, micro-animações em hover.

### Botões de contato

- WhatsApp: link `https://wa.me/5500000000000?text=...` (placeholder, fácil de trocar).
- Instagram: link `https://instagram.com/nail.studio` (placeholder).
- Botão flutuante de WhatsApp no canto inferior direito, visível em todas as seções.

### Responsividade

Mobile-first com breakpoints simples; menu vira hambúrguer abaixo de 768px (toggle em CSS puro com `<input type="checkbox">` ou pequeno script).

### Detalhes técnicos

- Arquivo único `index.html` na raiz, sem build, sem dependências npm — só HTML + CSS + JS mínimo embutido.
- Imagens via URLs do Unsplash (sem download local).
- Ícones via SVG inline (WhatsApp, Instagram, estrelas) — sem CDN de ícones.
- Acessibilidade: `alt` em imagens, contraste verificado, `aria-label` nos botões de ícone.
- SEO básico: `<title>`, meta description, Open Graph.
- Adicionar `.nojekyll` na raiz para o GitHub Pages servir os assets sem processamento.

### Publicação

Após criar os arquivos, faço o commit no repositório conectado. Para ativar o GitHub Pages você só precisa ir em **Settings → Pages → Source: main / root** no repositório.
