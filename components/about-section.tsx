"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, Users, Calendar } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            关于我
          </h2>
          <p className="mt-3 text-foreground/60">
            教育背景与校园经历
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-foreground/5 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">教育背景</h3>
              </div>
              
              <div className="relative pl-6 border-l-2 border-blue-500/20">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-background" />
                
                <div className="pb-1">
                  <div className="flex items-center gap-2 text-sm text-foreground/50 mb-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>2022 - 2026</span>
                  </div>
                  <h4 className="font-medium text-foreground">
                    中国石油大学（华东）
                  </h4>
                  <p className="text-foreground/70 text-sm mt-1">
                    智能科学与技术专业
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-500" />
                    <span className="text-sm text-foreground/60">
                      GPA 排名前 <span className="font-medium text-foreground">25%</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-foreground/5 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">校园经历</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">
                      校融媒体编辑部成员
                    </h4>
                    <p className="text-foreground/60 text-sm mt-1">
                      参与校园新闻采编与多媒体内容制作
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">
                      校园文化节宣传技术支持
                    </h4>
                    <p className="text-foreground/60 text-sm mt-1">
                      主导活动的视觉设计与技术方案落地
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
