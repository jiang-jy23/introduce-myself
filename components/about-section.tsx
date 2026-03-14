"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { GraduationCap, Award, Users, Calendar, ChevronDown } from "lucide-react"

export function AboutSection() {
  const [showEducation, setShowEducation] = useState(false)
  const [showCampus, setShowCampus] = useState(false)

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
            <button
              type="button"
              onClick={() => setShowEducation((prev) => !prev)}
              className="w-full text-left bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-foreground/5 shadow-sm transition-colors hover:bg-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">教育背景</h3>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-foreground/40 transition-transform ${
                    showEducation ? "rotate-180" : ""
                  }`}
                />
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

                {showEducation && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-5 space-y-4 text-sm text-foreground/75"
                  >
                    <div>
                      <p className="font-medium text-foreground mb-2">证书</p>
                      <div className="grid grid-cols-2 gap-2">
                        <span className="rounded-lg bg-blue-50 px-3 py-1.5 text-xs sm:text-sm text-blue-700">
                          CET-4
                        </span>
                        <span className="rounded-lg bg-blue-50 px-3 py-1.5 text-xs sm:text-sm text-blue-700">
                          CET-6
                        </span>
                        <span className="rounded-lg bg-blue-50 px-3 py-1.5 text-xs sm:text-sm text-blue-700">
                          普通话二乙
                        </span>
                        <span className="rounded-lg bg-blue-50 px-3 py-1.5 text-xs sm:text-sm text-blue-700">
                          高中数学教资
                        </span>
                      </div>
                    </div>

                    <div>
                      <p className="font-medium text-foreground mb-2">主修课程与成绩</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2">
                          <span className="text-xs sm:text-sm text-foreground/80">
                            Python 数据分析
                          </span>
                          <span className="text-xs sm:text-sm font-semibold text-blue-600">
                            88
                          </span>
                        </div>
                        <div className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2">
                          <span className="text-xs sm:text-sm text-foreground/80">
                            可视化导论
                          </span>
                          <span className="text-xs sm:text-sm font-semibold text-blue-600">
                            90
                          </span>
                        </div>
                        <div className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2">
                          <span className="text-xs sm:text-sm text-foreground/80">
                            数据库原理
                          </span>
                          <span className="text-xs sm:text-sm font-semibold text-blue-600">
                            83
                          </span>
                        </div>
                        <div className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2">
                          <span className="text-xs sm:text-sm text-foreground/80">
                            大数据处理技术
                          </span>
                          <span className="text-xs sm:text-sm font-semibold text-blue-600">
                            85
                          </span>
                        </div>
                        <div className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2 sm:col-span-2">
                          <span className="text-xs sm:text-sm text-foreground/80">
                            计算机视觉
                          </span>
                          <span className="text-xs sm:text-sm font-semibold text-blue-600">
                            94
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </button>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <button
              type="button"
              onClick={() => setShowCampus((prev) => !prev)}
              className="w-full text-left bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-foreground/5 shadow-sm transition-colors hover:bg-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50"
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">校园经历</h3>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-foreground/40 transition-transform ${
                    showCampus ? "rotate-180" : ""
                  }`}
                />
              </div>

              <div className="space-y-3 text-sm text-foreground/75">
                <div className="flex items-center gap-2 text-foreground/60">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>学生会宣传中心主编 · 2022.9 - 2023.10</span>
                </div>

                {showCampus && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-3 space-y-3"
                  >
                    <p className="font-medium text-foreground">核心工作</p>
                    <div className="space-y-2">
                      <p className="leading-relaxed">
                        系统性梳理“校园文化节”“思美节”两大活动核心信息，制定差异化内容策略。
                      </p>
                      <p className="leading-relaxed">
                        独立撰写活动宣传文案及推文稿件 30+ 篇，设计短视频脚本 10+ 条。
                      </p>
                      <p className="leading-relaxed">
                        维系并拓展校园及周边高校宣传渠道，保持活动曝光与参与热度。
                      </p>
                      <p className="leading-relaxed">
                        策划“转发集赞”“话题挑战”等互动玩法，并监测渠道数据，及时调整传播节奏。
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
