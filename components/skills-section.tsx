"use client"

import { motion } from "framer-motion"
import { Code2, Database, Brain, Palette } from "lucide-react"

const skills = [
  { name: "React", category: "frontend" },
  { name: "Vue 3", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "D3.js", category: "visualization" },
  { name: "Python", category: "backend" },
  { name: "FastAPI", category: "backend" },
  { name: "PyTorch", category: "ai" },
  { name: "SQL", category: "backend" },
]

const categoryColors: Record<string, string> = {
  frontend: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  backend: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  ai: "bg-purple-500/10 text-purple-600 border-purple-500/20",
  visualization: "bg-amber-500/10 text-amber-600 border-amber-500/20",
}

const categoryIcons: Record<string, React.ReactNode> = {
  frontend: <Code2 className="w-3.5 h-3.5" />,
  backend: <Database className="w-3.5 h-3.5" />,
  ai: <Brain className="w-3.5 h-3.5" />,
  visualization: <Palette className="w-3.5 h-3.5" />,
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            技术栈
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            融合前端开发、数据可视化与人工智能的跨领域技术能力
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 md:gap-4"
        >
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`
                inline-flex items-center gap-2 px-4 py-2.5 rounded-full
                border backdrop-blur-sm
                transition-all duration-300 ease-out
                hover:scale-105 hover:shadow-md
                ${categoryColors[skill.category]}
              `}
            >
              {categoryIcons[skill.category]}
              <span className="font-medium text-sm md:text-base">{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
