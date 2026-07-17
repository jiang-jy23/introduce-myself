"use client";

import { useState } from "react";

import { motion } from "framer-motion";
import {
  Award,
  Calendar,
  GraduationCap,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type AboutModalType = "education" | "campus" | null;

export function AboutSection() {
  const [activeModal, setActiveModal] = useState<AboutModalType>(null);

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
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <button
              type="button"
              onClick={() => setActiveModal("education")}
              className="w-full text-left bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-foreground/5 shadow-sm transition-colors hover:bg-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
            >
              <div className="flex items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    教育背景
                  </h3>
                </div>
                <span className="text-xs font-medium text-blue-600/90">
                  点击查看详情
                </span>
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
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <button
              type="button"
              onClick={() => setActiveModal("campus")}
              className="w-full text-left bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-foreground/5 shadow-sm transition-colors hover:bg-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50"
            >
              <div className="flex items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    校园经历
                  </h3>
                </div>
                <span className="text-xs font-medium text-emerald-600/90">
                  点击查看详情
                </span>
              </div>

              <div className="space-y-3 text-sm text-foreground/75">
                <div className="flex items-center gap-2 text-foreground/60">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>学生会宣传中心主编 | 2022.09 - 2023.10</span>
                </div>
              </div>
            </button>
          </motion.div>
        </div>

        <Dialog
          open={activeModal !== null}
          onOpenChange={(open) => setActiveModal(open ? activeModal : null)}
        >
          <DialogContent className="sm:max-w-3xl max-h-[80vh] overflow-y-auto bg-white/95 backdrop-blur-xl">
            <DialogHeader className="mb-4">
              <DialogTitle className="text-xl font-bold text-foreground">
                {activeModal === "education" ? "教育背景详情" : "校园经历详情"}
              </DialogTitle>
            </DialogHeader>

            {activeModal === "education" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="flex flex-col gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-100">
                  <h4 className="text-sm font-semibold text-foreground">
                    证书资质
                  </h4>
                  <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
                    <span className="px-3 py-1.5 rounded-full bg-blue-50 text-blue-700">
                      CET-4
                    </span>
                    <span className="px-3 py-1.5 rounded-full bg-blue-50 text-blue-700">
                      CET-6
                    </span>
                    <span className="px-3 py-1.5 rounded-full bg-blue-50 text-blue-700">
                      普通话二乙
                    </span>
                    <span className="px-3 py-1.5 rounded-full bg-blue-50 text-blue-700">
                      高中数学教师资格
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-100">
                  <h4 className="text-sm font-semibold text-foreground">
                    核心课程
                  </h4>
                  <div className="space-y-2 text-sm text-foreground/80">
                    <div className="flex items-center justify-between">
                      <span>Python 数据分析</span>
                      <span className="font-semibold text-blue-600">88</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>可视化导论</span>
                      <span className="font-semibold text-blue-600">90</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>数据库原理</span>
                      <span className="font-semibold text-blue-600">83</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>大数据处理技术</span>
                      <span className="font-semibold text-blue-600">85</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>计算机视觉</span>
                      <span className="font-semibold text-blue-600">94</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-100">
                  <h4 className="text-sm font-semibold text-foreground">
                    学业表现
                  </h4>
                  <p className="text-sm text-foreground/75 leading-relaxed">
                    GPA <span className="font-semibold text-foreground">3.0</span>，
                    专业排名前 <span className="font-semibold text-foreground">25%</span>。
                    具备较扎实的数学基础、算法理解能力和工程实践意识。
                  </p>
                </div>
              </div>
            )}

            {activeModal === "campus" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="flex gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-100">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center">
                      <Target className="w-4 h-4 text-violet-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-foreground mb-1">
                      工作背景
                    </h4>
                    <p className="text-sm text-foreground/75 leading-relaxed">
                      校园活动宣传往往停留在单次发布层面，缺少系统化内容策划与多渠道传播，影响活动触达与参与效果。
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-100">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Users className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-foreground mb-1">
                      我的角色
                    </h4>
                    <p className="text-sm text-foreground/75 leading-relaxed">
                      担任学生会宣传中心主编，负责活动传播策略、图文内容策划、短视频脚本设计与渠道协同，推进从创意到发布的完整流程。
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-100">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-emerald-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-foreground mb-1">
                      成果总结
                    </h4>
                    <p className="text-sm text-foreground/75 leading-relaxed">
                      累计撰写推文 30 余篇、短视频脚本 10 余条，推动多平台内容分发与互动玩法落地，提升了活动曝光与参与反馈。
                    </p>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
