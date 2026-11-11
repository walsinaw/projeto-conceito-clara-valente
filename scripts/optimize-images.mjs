// Converte as fotos e logos originais (pasta img-originais/) em arquivos otimizados (pasta public/img/).
// Uso: coloque os arquivos em img-originais/ e rode `npm run images`.
//   hero.(jpg|png)          foto do topo
//   sobre.(jpg|png)         foto da seção Sobre mim
//   logo-nome.png           logo completo (PNG transparente)
//   logo-simbolo.png        monograma (PNG transparente)
// Se uma foto ainda não existir, gera uma imagem provisória (placeholder) no lugar.
// Não coloque arquivos brutos em public/: tudo que está lá vai para o ar junto com o site.
import sharp from 'sharp'
import { existsSync, mkdirSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const SRC = 'img-originais'
const OUT = join('public', 'img')
mkdirSync(OUT, { recursive: true })

const CORES = { claro: '#EEEBE2', escuro: '#26352A', musgo: '#3B5240', marrom: '#6E4B34' }

// nome do arquivo (sem extensão) → larguras geradas, proporção e recorte opcional.
// `recorte` (opcional) tira partes da foto original antes de redimensionar, ex.:
//   hero: { widths: [480, 800], aspect: 5 / 4, recorte: { left: 0, top: 0, width: 340, height: 425 } },
const FOTOS = {
  hero: { widths: [480, 800], aspect: 5 / 4 },
  sobre: { widths: [480, 800], aspect: 6 / 5 },
}

function findOriginal(name) {
  if (!existsSync(SRC)) return null
  const file = readdirSync(SRC).find((f) => new RegExp(`^${name}\\.(jpe?g|png|webp)$`, 'i').test(f))
  return file ? join(SRC, file) : null
}

function placeholder(width, height, label) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
    <rect width="100%" height="100%" fill="#DDE4D3"/>
    <text x="50%" y="50%" fill="#3B5240" font-family="sans-serif" font-size="${Math.round(width / 16)}"
      text-anchor="middle" dominant-baseline="middle">${label}</text></svg>`
  return sharp(Buffer.from(svg))
}

async function carregarFoto(original, recorte) {
  const buffer = await sharp(original).rotate().toBuffer()
  return recorte ? sharp(buffer).extract(recorte) : sharp(buffer)
}

// ---- fotos ----
for (const [name, { widths, aspect, recorte }] of Object.entries(FOTOS)) {
  const original = findOriginal(name)
  for (const w of widths) {
    const h = Math.round(w * aspect)
    const img = original
      ? (await carregarFoto(original, recorte)).resize(w, h, { fit: 'cover', position: 'top' })
      : placeholder(w, h, `foto ${name} (provisória)`)
    await img.webp({ quality: 82 }).toFile(join(OUT, `${name}-${w}.webp`))
  }
  if (original) {
    const largura = recorte ? recorte.width : (await sharp(original).metadata()).width
    const ideal = widths.at(-1)
    const aviso = largura < ideal ? ` (atenção: só ${largura}px de largura, o ideal é ${ideal}px ou mais)` : ''
    console.log(`✓ ${name}: convertida de ${original}${aviso}`)
  } else {
    console.log(`! ${name}: original não encontrada, gerei placeholder`)
  }
}

// ---- logos: recolore o PNG transparente numa cor só, mantendo a transparência ----
async function recolorir(arquivo, cor, altura) {
  const recortado = await sharp(arquivo).ensureAlpha().trim({ threshold: 1 }).toBuffer()
  const { data, info } = await sharp(recortado).resize({ height: altura }).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
  const alpha = await sharp(data, { raw: info }).extractChannel(3).raw().toBuffer()
  return sharp({ create: { width: info.width, height: info.height, channels: 3, background: cor } }).joinChannel(alpha, {
    raw: { width: info.width, height: info.height, channels: 1 },
  })
}

for (const nome of ['logo-nome', 'logo-simbolo']) {
  const original = join(SRC, `${nome}.png`)
  if (!existsSync(original)) {
    console.log(`! ${nome}.png não encontrado`)
    continue
  }
  for (const [variante, cor] of [['claro', CORES.claro], ['escuro', CORES.escuro]]) {
    await (await recolorir(original, cor, 160)).png({ compressionLevel: 9 }).toFile(join(OUT, `${nome}-${variante}.png`))
  }
  console.log(`✓ ${nome}: versões clara e escura geradas`)
}

// ---- favicon e ícone do celular: monograma claro sobre círculo verde-musgo ----
const simbolo = join(SRC, 'logo-simbolo.png')
if (existsSync(simbolo)) {
  for (const [arquivo, tamanho] of [['favicon.png', 64], ['apple-touch-icon.png', 180]]) {
    const marca = await (await recolorir(simbolo, CORES.claro, Math.round(tamanho * 0.5))).png().toBuffer()
    const fundo = `<svg xmlns="http://www.w3.org/2000/svg" width="${tamanho}" height="${tamanho}"><circle cx="50%" cy="50%" r="50%" fill="${CORES.musgo}"/></svg>`
    await sharp(Buffer.from(fundo)).composite([{ input: marca, gravity: 'center' }]).png().toFile(join('public', arquivo))
  }
  console.log('✓ favicon.png e apple-touch-icon.png gerados')
}

// ---- imagem de compartilhamento (WhatsApp, Instagram, Facebook): 1200x630 em JPG ----
const heroOriginal = findOriginal('hero')
const ogFoto = heroOriginal
  ? await (await carregarFoto(heroOriginal, FOTOS.hero.recorte)).resize(480, 630, { fit: 'cover', position: 'top' }).toBuffer()
  : await placeholder(480, 630, 'foto').png().toBuffer()
const camadas = []
const logoNome = join(SRC, 'logo-nome.png')
if (existsSync(logoNome)) {
  camadas.push({ input: await (await recolorir(logoNome, CORES.escuro, 170)).png().toBuffer(), left: 72, top: 170 })
}
const ogTexto = `<svg xmlns="http://www.w3.org/2000/svg" width="720" height="630">
  <text x="74" y="430" font-family="Arial, Helvetica, sans-serif" font-size="30" fill="${CORES.musgo}">Site conceito para nutricionista</text>
  <text x="74" y="474" font-family="Arial, Helvetica, sans-serif" font-size="25" fill="${CORES.marrom}">Projeto da WAW Studio, wawstudio.com.br</text>
</svg>`
camadas.push({ input: Buffer.from(ogTexto), left: 0, top: 0 }, { input: ogFoto, left: 720, top: 0 })
await sharp({ create: { width: 1200, height: 630, channels: 3, background: CORES.claro } })
  .composite(camadas)
  .jpeg({ quality: 84 })
  .toFile(join(OUT, 'og-image.jpg'))
console.log('✓ og-image.jpg gerada')
