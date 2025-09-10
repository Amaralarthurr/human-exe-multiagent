import MultiAgentOutput from "@/components/multiagent-output"

export default function OutputPage() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold font-mono">Resultado Final - Human.exe</h1>
          <p className="text-muted-foreground">Site gerado pelo sistema multiagente</p>
        </div>

        <MultiAgentOutput />
      </div>
    </div>
  )
}
