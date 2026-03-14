"use client"

import { motion } from "framer-motion"
import { User } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-16 px-6"
    >
      <div className="mx-auto max-w-7xl w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance">
              你好，我是姚遥
            </h1>
            <p className="mt-4 text-lg sm:text-xl font-medium text-foreground/60">
              智能科学与技术背景 | 前端开发与 AI 应用探索者
            </p>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-foreground/70 max-w-xl mx-auto lg:mx-0 text-pretty">
              致力于通过数据洞察与交互技术，让复杂的 AI 模型变得触手可及。
            </p>
            
            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-background bg-foreground rounded-full transition-all hover:opacity-90 hover:scale-105"
              >
                查看项目
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-foreground border border-foreground/20 rounded-full transition-all hover:bg-foreground/5 hover:scale-105"
              >
                了解更多
              </a>
            </div>
          </motion.div>

          {/* Right Avatar */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-foreground/10 to-foreground/5 blur-2xl scale-110" />

              {/* Avatar container */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-xl shadow-foreground/10 border border-white/70 bg-foreground/5">
                <img
                  src="/images/yy.jpg"
                  alt="姚遥的个人头像"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
