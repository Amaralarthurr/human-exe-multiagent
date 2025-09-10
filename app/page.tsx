"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Brain, Palette, Code, Monitor, Play, Pause, RotateCcw } from "lucide-react"

interface Agent {
  id: string
  name: string
  role: string
  status: "idle" | "working" | "completed" | "error"
  progress: number
  lastAction: string
  icon: React.ReactNode
}

interface SystemLog {
  timestamp: string
  agent: string
  message: string
  type: "info" | "success" | "warning" | "error"
}

export default function HumanExeMultiAgent() {
  const [agents, setAgents] = useState<Agent[]>([
    {
      id: "researcher",
      name: "Pesquisador",
      role: "Busca referências visuais e conceituais sobre Human.exe",
      status: "idle",
      progress: 0,
      lastAction: "Aguardando inicialização...",
      icon: <Search className="w-5 h-5" />,
    },
    {
      id: "curator",
      name: "Curador",
      role: "Seleciona e organiza o conteúdo mais relevante",
      status: "idle",
      progress: 0,
      lastAction: "Aguardando dados do pesquisador...",
      icon: <Brain className="w-5 h-5" />,
    },
    {
      id: "designer",
      name: "Designer",
      role: "Sugere layouts, paleta de cores e identidade visual",
      status: "idle",
      progress: 0,
      lastAction: "Aguardando curadoria...",
      icon: <Palette className="w-5 h-5" />,
    },
    {
      id: "webdev",
      name: "Desenvolvedor Web",
      role: "Escreve o código HTML estrutural",
      status: "idle",
      progress: 0,
      lastAction: "Aguardando especificações de design...",
      icon: <Code className="w-5 h-5" />,
    },
    {
      id: "uxdev",
      name: "UX Designer Web",
      role: "Escreve o código CSS e implementa interações",
      status: "idle",
      progress: 0,
      lastAction: "Aguardando estrutura HTML...",
      icon: <Monitor className="w-5 h-5" />,
    },
  ])

  const [systemLogs, setSystemLogs] = useState<SystemLog[]>([
    {
      timestamp: new Date().toLocaleTimeString(),
      agent: "SYSTEM",
      message: "Sistema multiagente Human.exe inicializado",
      type: "info",
    },
  ])

  const [isRunning, setIsRunning] = useState(false)
  const [currentPhase, setCurrentPhase] = useState("Inicialização")
  const [overallProgress, setOverallProgress] = useState(0)

  const addLog = (agent: string, message: string, type: SystemLog["type"] = "info") => {
    const newLog: SystemLog = {
      timestamp: new Date().toLocaleTimeString(),
      agent,
      message,
      type,
    }
    setSystemLogs((prev) => [newLog, ...prev].slice(0, 50))
  }

  const updateAgent = (id: string, updates: Partial<Agent>) => {
    setAgents((prev) => prev.map((agent) => (agent.id === id ? { ...agent, ...updates } : agent)))
  }

  const simulateAgentWork = async () => {
    setIsRunning(true)

    // Fase 1: Pesquisador
    setCurrentPhase("Pesquisa de Referências")
    updateAgent("researcher", { status: "working", lastAction: "Buscando referências sobre Human.exe..." })
    addLog("PESQUISADOR", "Iniciando busca por referências visuais e conceituais", "info")

    for (let i = 0; i <= 100; i += 10) {
      await new Promise((resolve) => setTimeout(resolve, 200))
      updateAgent("researcher", { progress: i })
      if (i === 30) addLog("PESQUISADOR", "Encontradas 15 referências sobre cyberpunk e humanidade", "success")
      if (i === 60) addLog("PESQUISADOR", "Coletando narrativas sobre existência humana", "info")
      if (i === 90) addLog("PESQUISADOR", "Análise de tendências visuais concluída", "success")
    }

    updateAgent("researcher", { status: "completed", lastAction: "Pesquisa concluída - 47 referências coletadas" })

    // Fase 2: Curador
    setCurrentPhase("Curadoria de Conteúdo")
    updateAgent("curator", { status: "working", lastAction: "Analisando relevância das referências..." })
    addLog("CURADOR", "Iniciando curadoria do conteúdo coletado", "info")

    for (let i = 0; i <= 100; i += 15) {
      await new Promise((resolve) => setTimeout(resolve, 150))
      updateAgent("curator", { progress: i })
      if (i === 45) addLog("CURADOR", "Selecionadas 12 referências principais", "success")
      if (i === 75) addLog("CURADOR", "Organizando narrativa sobre valor humano", "info")
    }

    updateAgent("curator", { status: "completed", lastAction: "Curadoria finalizada - Conteúdo organizado" })

    // Fase 3: Designer
    setCurrentPhase("Design Visual")
    updateAgent("designer", { status: "working", lastAction: "Criando identidade visual cyberpunk..." })
    addLog("DESIGNER", "Desenvolvendo paleta de cores e tipografia", "info")

    for (let i = 0; i <= 100; i += 12) {
      await new Promise((resolve) => setTimeout(resolve, 180))
      updateAgent("designer", { progress: i })
      if (i === 36) addLog("DESIGNER", "Paleta cyberpunk definida: preto, verde neon, cinza", "success")
      if (i === 72) addLog("DESIGNER", "Layout responsivo com efeitos glitch criado", "success")
    }

    updateAgent("designer", { status: "completed", lastAction: "Design system completo criado" })

    // Fase 4: Desenvolvedor Web
    setCurrentPhase("Desenvolvimento HTML")
    updateAgent("webdev", { status: "working", lastAction: "Estruturando HTML semântico..." })
    addLog("WEBDEV", "Iniciando desenvolvimento da estrutura HTML", "info")

    for (let i = 0; i <= 100; i += 20) {
      await new Promise((resolve) => setTimeout(resolve, 120))
      updateAgent("webdev", { progress: i })
      if (i === 40) addLog("WEBDEV", "Estrutura principal criada com seções narrativas", "success")
      if (i === 80) addLog("WEBDEV", "Elementos interativos implementados", "success")
    }

    updateAgent("webdev", { status: "completed", lastAction: "Estrutura HTML finalizada" })

    // Fase 5: UX Designer Web
    setCurrentPhase("Implementação CSS/UX")
    updateAgent("uxdev", { status: "working", lastAction: "Aplicando estilos cyberpunk..." })
    addLog("UXDEV", "Implementando CSS e animações", "info")

    for (let i = 0; i <= 100; i += 25) {
      await new Promise((resolve) => setTimeout(resolve, 100))
      updateAgent("uxdev", { progress: i })
      if (i === 25) addLog("UXDEV", "Efeitos neon e glitch implementados", "success")
      if (i === 50) addLog("UXDEV", "Animações de transição configuradas", "success")
      if (i === 75) addLog("UXDEV", "Responsividade otimizada", "success")
    }

    updateAgent("uxdev", { status: "completed", lastAction: "Site Human.exe finalizado!" })
    addLog("SYSTEM", "Projeto Human.exe concluído com sucesso!", "success")

    setCurrentPhase("Concluído")
    setOverallProgress(100)
    setIsRunning(false)
  }

  const resetSystem = () => {
    setAgents((prev) =>
      prev.map((agent) => ({
        ...agent,
        status: "idle" as const,
        progress: 0,
        lastAction:
          agent.id === "researcher"
            ? "Aguardando inicialização..."
            : agent.id === "curator"
              ? "Aguardando dados do pesquisador..."
              : agent.id === "designer"
                ? "Aguardando curadoria..."
                : agent.id === "webdev"
                  ? "Aguardando especificações de design..."
                  : "Aguardando estrutura HTML...",
      })),
    )
    setSystemLogs([
      {
        timestamp: new Date().toLocaleTimeString(),
        agent: "SYSTEM",
        message: "Sistema reinicializado",
        type: "info",
      },
    ])
    setCurrentPhase("Inicialização")
    setOverallProgress(0)
    setIsRunning(false)
  }

  useEffect(() => {
    const completedAgents = agents.filter((agent) => agent.status === "completed").length
    setOverallProgress((completedAgents / agents.length) * 100)
  }, [agents])

  const getStatusColor = (status: Agent["status"]) => {
    switch (status) {
      case "idle":
        return "bg-muted text-muted-foreground"
      case "working":
        return "bg-accent neon-glow text-accent-foreground"
      case "completed":
        return "bg-primary text-primary-foreground"
      case "error":
        return "bg-destructive text-destructive-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const getLogTypeColor = (type: SystemLog["type"]) => {
    switch (type) {
      case "info":
        return "text-muted-foreground"
      case "success":
        return "text-primary"
      case "warning":
        return "text-accent"
      case "error":
        return "text-destructive"
      default:
        return "text-muted-foreground"
    }
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold font-mono tracking-wider">
            <span className="typing-effect terminal-cursor">HUMAN.EXE</span>
          </h1>
          <p className="text-xl text-muted-foreground">Sistema Multiagente para Criação de Narrativa Digital</p>
          <div className="flex items-center justify-center gap-4">
            <Badge variant="outline" className="text-primary border-primary">
              {currentPhase}
            </Badge>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Progresso Geral:</span>
              <Progress value={overallProgress} className="w-32" />
              <span className="text-sm font-mono">{Math.round(overallProgress)}%</span>
            </div>
          </div>
        </div>

        {/* Control Panel */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              Painel de Controle
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Button onClick={simulateAgentWork} disabled={isRunning} className="neon-glow">
                {isRunning ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                {isRunning ? "Executando..." : "Iniciar Sistema"}
              </Button>
              <Button variant="outline" onClick={resetSystem} disabled={isRunning}>
                <RotateCcw className="w-4 h-4 mr-2" />
                Reiniciar
              </Button>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="agents" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="agents">Agentes</TabsTrigger>
            <TabsTrigger value="logs">Logs do Sistema</TabsTrigger>
          </TabsList>

          <TabsContent value="agents" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {agents.map((agent) => (
                <Card key={agent.id} className="border-primary/20 hover:border-primary/40 transition-colors">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {agent.icon}
                        <CardTitle className="text-lg">{agent.name}</CardTitle>
                      </div>
                      <Badge className={`${getStatusColor(agent.status)} text-xs`}>
                        {agent.status === "idle"
                          ? "Inativo"
                          : agent.status === "working"
                            ? "Trabalhando"
                            : agent.status === "completed"
                              ? "Concluído"
                              : "Erro"}
                      </Badge>
                    </div>
                    <CardDescription className="text-sm">{agent.role}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progresso</span>
                        <span className="font-mono">{agent.progress}%</span>
                      </div>
                      <Progress value={agent.progress} className="h-2" />
                    </div>
                    <p className="text-sm text-muted-foreground font-mono">{agent.lastAction}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="logs">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Logs do Sistema</CardTitle>
                <CardDescription>Acompanhe em tempo real as ações dos agentes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-96 overflow-y-auto font-mono text-sm">
                  {systemLogs.map((log, index) => (
                    <div key={index} className="flex gap-3 p-2 rounded border border-border/50">
                      <span className="text-muted-foreground shrink-0">[{log.timestamp}]</span>
                      <span className="text-primary shrink-0 min-w-[100px]">{log.agent}:</span>
                      <span className={getLogTypeColor(log.type)}>{log.message}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground font-mono">
          <p>Sistema desenvolvido para demonstrar a colaboração entre agentes IA</p>
          <p className="text-primary">A humanidade ainda merece existir.</p>
        </div>
      </div>
    </div>
  )
}
