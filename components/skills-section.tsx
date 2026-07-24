"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Brain,
  ChartColumn,
  Code2,
  Database,
  Network,
} from "lucide-react";

const skills = [
  { name: "React", category: "frontend" },
  { name: "Vue 3", category: "frontend" },
  { name: "JavaScript / TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Python", category: "data" },
  { name: "SQL / SQLite", category: "data" },
  { name: "FastAPI", category: "data" },
  { name: "数据分析与可视化", category: "data" },
  { name: "Prompt Engineering", category: "ai" },
  { name: "AI Agent", category: "ai" },
  { name: "PyTorch", category: "ai" },
  { name: "NLP", category: "ai" },
  { name: "知识图谱", category: "graph" },
  { name: "D3.js", category: "graph" },
];

const categoryColors: Record<string, string> = {
  frontend: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  data: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  ai: "bg-fuchsia-500/10 text-fuchsia-600 border-fuchsia-500/20",
  graph: "bg-amber-500/10 text-amber-600 border-amber-500/20",
};

const categoryIcons: Record<string, React.ReactNode> = {
  frontend: <Code2 className="w-3.5 h-3.5" />,
  data: <Database className="w-3.5 h-3.5" />,
  ai: <Bot className="w-3.5 h-3.5" />,
  graph: <Network className="w-3.5 h-3.5" />,
};

const categoryLabels: Record<string, string> = {
  frontend: "前端开发",
  data: "数据分析与后端处理",
  ai: "AI 应用与智能体",
  graph: "可视化与知识图谱",
};

const summaryCards = [
  {
    title: "前端开发",
    description: "能够完成从页面实现、交互设计到组件化开发的完整前端交付。",
    icon: Code2,
    className: "bg-blue-500/8 text-blue-700 border-blue-500/15",
  },
  {
    title: "数据分析处理",
    description: "具备数据采集、清洗、存储、分析与结果可视化的项目实践经验。",
    icon: ChartColumn,
    className: "bg-emerald-500/8 text-emerald-700 border-emerald-500/15",
  },
  {
    title: "AI 产品与智能体",
    description: "熟悉 Prompt Engineering、AI Agent、NLP 与模型能力落地集成。",
    icon: Brain,
    className: "bg-fuchsia-500/8 text-fuchsia-700 border-fuchsia-500/15",
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
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
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            覆盖前端开发、数据分析处理、AI 应用集成与知识图谱方向，能够将算法能力与产品体验结合起来完成项目落地。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          viewport={{ once: true }}
          className="grid gap-4 md:grid-cols-3 mb-10"
        >
          {summaryCards.map((card) => (
            <div
              key={card.title}
              className={`rounded-2xl border p-5 backdrop-blur-sm ${card.className}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-white/70 flex items-center justify-center">
                  <card.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {card.title}
                </h3>
              </div>
              <p className="text-sm leading-6 text-foreground/70">
                {card.description}
              </p>
            </div>
          ))}
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
              title={categoryLabels[skill.category]}
            >
              {categoryIcons[skill.category]}
              <span className="font-medium text-sm md:text-base">
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
