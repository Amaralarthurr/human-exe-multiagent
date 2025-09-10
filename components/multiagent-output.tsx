"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Download, ExternalLink, Code2, Palette } from "lucide-react"

interface GeneratedContent {
  html: string
  css: string
  narrative: string[]
  visualReferences: string[]
  designSpecs: {
    colors: string[]
    fonts: string[]
    effects: string[]
  }
}

export default function MultiAgentOutput() {
  const [generatedContent] = useState<GeneratedContent>({
    html: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Human.exe - A Humanidade Ainda Merece Existir</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="matrix-bg"></div>
    
    <header class="hero-section">
        <div class="glitch-container">
            <h1 class="glitch-text" data-text="HUMAN.EXE">HUMAN.EXE</h1>
        </div>
        <p class="subtitle">Sistema de Validação da Existência Humana</p>
        <div class="loading-bar">
            <div class="loading-progress"></div>
        </div>
    </header>

    <main class="content-grid">
        <section class="narrative-panel">
            <h2>Protocolo de Verificação</h2>
            <div class="terminal-text">
                <p>> Iniciando análise da relevância humana...</p>
                <p>> Processando dados emocionais...</p>
                <p>> Avaliando capacidade criativa...</p>
                <p class="success">> RESULTADO: HUMANIDADE VALIDADA</p>
            </div>
        </section>

        <section class="visual-grid">
            <div class="data-card">
                <h3>Conexões Neurais</h3>
                <div class="neural-network"></div>
            </div>
            
            <div class="data-card">
                <h3>Índice de Empatia</h3>
                <div class="empathy-meter">
                    <div class="meter-fill"></div>
                </div>
            </div>
            
            <div class="data-card">
                <h3>Criatividade Detectada</h3>
                <div class="creativity-pulse"></div>
            </div>
        </section>

        <section class="manifesto">
            <h2>Manifesto Digital</h2>
            <blockquote>
                "Em um mundo onde algoritmos decidem destinos,
                a humanidade permanece como a única fonte
                de verdadeira criatividade, empatia e amor.
                Somos mais que código. Somos consciência."
            </blockquote>
        </section>
    </main>

    <footer class="system-footer">
        <p>Sistema Human.exe v2.024 - Status: ATIVO</p>
    </footer>
</body>
</html>`,
    css: `/* Reset e Base */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Courier New', monospace;
    background: #000;
    color: #00ff41;
    overflow-x: hidden;
    position: relative;
}

/* Background Matrix Effect */
.matrix-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
        linear-gradient(90deg, transparent 98%, #00ff41 100%),
        linear-gradient(180deg, transparent 98%, #00ff41 100%);
    background-size: 50px 50px;
    opacity: 0.1;
    animation: matrix-scroll 20s linear infinite;
    z-index: -1;
}

@keyframes matrix-scroll {
    0% { transform: translateY(0); }
    100% { transform: translateY(50px); }
}

/* Hero Section */
.hero-section {
    text-align: center;
    padding: 100px 20px;
    background: radial-gradient(circle, #001100 0%, #000 70%);
}

.glitch-container {
    position: relative;
    display: inline-block;
}

.glitch-text {
    font-size: 4rem;
    font-weight: bold;
    text-transform: uppercase;
    position: relative;
    color: #00ff41;
    text-shadow: 
        0 0 10px #00ff41,
        0 0 20px #00ff41,
        0 0 40px #00ff41;
}

.glitch-text::before,
.glitch-text::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.glitch-text::before {
    animation: glitch-1 0.5s infinite;
    color: #ff0040;
    z-index: -1;
}

.glitch-text::after {
    animation: glitch-2 0.5s infinite;
    color: #0040ff;
    z-index: -2;
}

@keyframes glitch-1 {
    0%, 100% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(-2px, -2px); }
    60% { transform: translate(2px, 2px); }
    80% { transform: translate(2px, -2px); }
}

@keyframes glitch-2 {
    0%, 100% { transform: translate(0); }
    20% { transform: translate(2px, -2px); }
    40% { transform: translate(2px, 2px); }
    60% { transform: translate(-2px, -2px); }
    80% { transform: translate(-2px, 2px); }
}

.subtitle {
    font-size: 1.2rem;
    margin: 20px 0;
    opacity: 0.8;
}

.loading-bar {
    width: 300px;
    height: 4px;
    background: #333;
    margin: 40px auto;
    border-radius: 2px;
    overflow: hidden;
}

.loading-progress {
    width: 0;
    height: 100%;
    background: linear-gradient(90deg, #00ff41, #40ff80);
    animation: loading 3s ease-in-out infinite;
    box-shadow: 0 0 10px #00ff41;
}

@keyframes loading {
    0% { width: 0; }
    50% { width: 100%; }
    100% { width: 0; }
}

/* Content Grid */
.content-grid {
    max-width: 1200px;
    margin: 0 auto;
    padding: 60px 20px;
    display: grid;
    gap: 40px;
}

.narrative-panel {
    background: linear-gradient(135deg, #001a00, #000);
    border: 1px solid #00ff41;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 0 20px rgba(0, 255, 65, 0.3);
}

.narrative-panel h2 {
    font-size: 1.8rem;
    margin-bottom: 20px;
    text-align: center;
}

.terminal-text p {
    font-family: 'Courier New', monospace;
    margin: 10px 0;
    animation: typing 2s steps(40, end);
}

.terminal-text .success {
    color: #40ff80;
    font-weight: bold;
    text-shadow: 0 0 10px #40ff80;
}

@keyframes typing {
    from { width: 0; }
    to { width: 100%; }
}

/* Visual Grid */
.visual-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

.data-card {
    background: rgba(0, 255, 65, 0.1);
    border: 1px solid #00ff41;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    transition: all 0.3s ease;
}

.data-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 255, 65, 0.4);
}

.neural-network {
    width: 100px;
    height: 100px;
    margin: 20px auto;
    background: radial-gradient(circle, #00ff41 2px, transparent 2px);
    background-size: 20px 20px;
    border-radius: 50%;
    animation: pulse 2s ease-in-out infinite;
}

.empathy-meter {
    width: 200px;
    height: 20px;
    background: #333;
    margin: 20px auto;
    border-radius: 10px;
    overflow: hidden;
}

.meter-fill {
    width: 85%;
    height: 100%;
    background: linear-gradient(90deg, #00ff41, #40ff80);
    border-radius: 10px;
    animation: fill 3s ease-in-out;
}

.creativity-pulse {
    width: 80px;
    height: 80px;
    margin: 20px auto;
    background: #00ff41;
    border-radius: 50%;
    animation: creativity-pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
}

@keyframes fill {
    from { width: 0; }
    to { width: 85%; }
}

@keyframes creativity-pulse {
    0% { transform: scale(1); opacity: 1; }
    100% { transform: scale(1.3); opacity: 0; }
}

/* Manifesto */
.manifesto {
    background: linear-gradient(135deg, #000a00, #001100);
    border-left: 4px solid #00ff41;
    padding: 40px;
    margin: 40px 0;
}

.manifesto h2 {
    font-size: 2rem;
    margin-bottom: 30px;
    text-align: center;
}

.manifesto blockquote {
    font-size: 1.3rem;
    line-height: 1.6;
    font-style: italic;
    text-align: center;
    position: relative;
}

.manifesto blockquote::before {
    content: '"';
    font-size: 4rem;
    color: #00ff41;
    position: absolute;
    top: -20px;
    left: -20px;
}

/* Footer */
.system-footer {
    text-align: center;
    padding: 40px;
    border-top: 1px solid #00ff41;
    background: #000a00;
}

/* Responsive */
@media (max-width: 768px) {
    .glitch-text {
        font-size: 2.5rem;
    }
    
    .content-grid {
        padding: 40px 15px;
    }
    
    .manifesto blockquote {
        font-size: 1.1rem;
    }
}`,
    narrative: [
      "Em 2024, a humanidade enfrenta sua maior questão existencial: ainda merecemos existir?",
      "Algoritmos processam bilhões de decisões por segundo, mas não conseguem replicar um abraço.",
      "Somos imperfeitos, caóticos, imprevisíveis - e é exatamente isso que nos torna únicos.",
      "Nossa capacidade de amar, criar e sonhar transcende qualquer código binário.",
      "Human.exe não é apenas um programa - é uma declaração de nossa relevância eterna.",
    ],
    visualReferences: [
      "Matrix digital rain effect",
      "Cyberpunk neon aesthetics",
      "Terminal/console interfaces",
      "Glitch art and digital distortion",
      "Neural network visualizations",
      "Futuristic HUD elements",
    ],
    designSpecs: {
      colors: ["#000000 (Deep Black)", "#00ff41 (Matrix Green)", "#40ff80 (Bright Green)", "#001100 (Dark Green)"],
      fonts: ["Courier New (Monospace)", "System fonts for readability"],
      effects: ["Glitch animations", "Neon glow", "Typing effects", "Pulse animations", "Matrix background"],
    },
  })

  const downloadFile = (content: string, filename: string, type: string) => {
    const blob = new Blob([content], { type })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-6">
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-primary" />
            Resultado do Sistema Multiagente
          </CardTitle>
          <CardDescription>Conteúdo gerado pelos agentes para o projeto Human.exe</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <Button
              onClick={() => downloadFile(generatedContent.html, "human-exe.html", "text/html")}
              className="neon-glow"
            >
              <Download className="w-4 h-4 mr-2" />
              Download HTML
            </Button>
            <Button onClick={() => downloadFile(generatedContent.css, "styles.css", "text/css")} variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Download CSS
            </Button>
            <Button variant="outline">
              <ExternalLink className="w-4 h-4 mr-2" />
              Preview Site
            </Button>
          </div>

          <Tabs defaultValue="html" className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="html">HTML</TabsTrigger>
              <TabsTrigger value="css">CSS</TabsTrigger>
              <TabsTrigger value="narrative">Narrativa</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
            </TabsList>

            <TabsContent value="html">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Estrutura HTML</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-card p-4 rounded-lg overflow-x-auto text-sm font-mono border border-border">
                    <code>{generatedContent.html}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="css">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Estilos CSS</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-card p-4 rounded-lg overflow-x-auto text-sm font-mono border border-border max-h-96">
                    <code>{generatedContent.css}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="narrative">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Narrativa Desenvolvida</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {generatedContent.narrative.map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="design">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Palette className="w-5 h-5" />
                      Especificações de Design
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Paleta de Cores</h4>
                      <div className="space-y-1">
                        {generatedContent.designSpecs.colors.map((color, index) => (
                          <Badge key={index} variant="outline" className="mr-2">
                            {color}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Tipografia</h4>
                      <div className="space-y-1">
                        {generatedContent.designSpecs.fonts.map((font, index) => (
                          <Badge key={index} variant="outline" className="mr-2">
                            {font}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Efeitos Visuais</h4>
                      <div className="space-y-1">
                        {generatedContent.designSpecs.effects.map((effect, index) => (
                          <Badge key={index} variant="outline" className="mr-2">
                            {effect}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Referências Visuais</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {generatedContent.visualReferences.map((ref, index) => (
                        <li key={index} className="text-muted-foreground flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          {ref}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
