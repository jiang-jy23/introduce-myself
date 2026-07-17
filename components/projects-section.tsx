"use client";

import { useState } from "react";

import { motion } from "framer-motion";
import {
  BarChart3,
  Brain,
  CloudRain,
  FileText,
  ImageIcon,
  Layout,
} from "lucide-react";

import { ProjectModal, type ProjectDetail } from "@/components/project-modal";

const projects: ProjectDetail[] = [
  {
    id: "ai-image-system",
    period: "2025.06",
    title: "基于深度学习的图像变换系统",
    description:
      "集图像修复、风格迁移与生成式 AI 接口调用于一体，展示模型部署、接口联调与前端交互实现能力。",
    icon: ImageIcon,
    tags: ["Stable Diffusion", "FastAPI", "生成式 AI"],
    coverBg: "from-violet-400 to-fuchsia-600",
    showcaseImage: "/images/project1.png",
    details: {
      background:
        "围绕图像修复、风格迁移与文生图需求，设计一个可本地部署、可在线交互的图像处理系统，降低模型体验门槛并验证生成式 AI 工程化落地流程。",
      role: "负责系统设计与实现，完成 Stable Diffusion 本地部署，并使用 FastAPI 封装微服务接口；联调豆包文生图 API，验证后端模型服务稳定性，同时测试前端图片上传、对比滑块、结果下载等核心交互。",
      outcome:
        "后端模型接口与第三方文生图接口调用成功率达到 95% 以上，前后端流程可稳定跑通，完成兼容性与性能问题排查，形成从模型部署到页面交互的完整作品演示。",
    },
  },
  {
    id: "enterprise-document-system",
    period: "2026.03 - 2026.06",
    title: "企业文档智能分类系统设计与实现",
    description:
      "面向企业文档管理场景，支持多格式解析、OCR 识别、语义分类、向量检索与结果可视化。",
    icon: FileText,
    tags: ["FastAPI", "PaddleOCR", "Faiss"],
    coverBg: "from-sky-500 to-cyan-600",
    details: {
      background:
        "针对企业场景中 DOCX、PDF、XLSX 与图片文档种类多、检索效率低、人工分类成本高的问题，设计一套支持智能解析、分类与搜索的一体化文档管理系统。",
      role: "独立完成系统设计、后端实现与测试验证。基于 FastAPI、SQLAlchemy 与 MySQL/SQLite 构建异步服务，结合 MinIO 进行文件与元数据分离存储，并集成 PaddleOCR、Sentence-BERT、Faiss 与 ChatGLM 完成抽取、分类和检索流程。",
      outcome:
        "系统可稳定处理多格式企业文档，在千级文档规模下完成 OCR、语义分类与相似检索实验，并通过性能测试与可视化结果验证准确性和响应效率。",
    },
  },
  {
    id: "nlp-text-platform",
    period: "2025.03 - 2025.05",
    title: "多功能 NLP 文本处理系统",
    description:
      "集中文分词、命名实体识别、文本分类、文本聚类与情感分析于一体的交互式 NLP Web 系统。",
    icon: Brain,
    tags: ["HanLP", "BERT", "Flask"],
    coverBg: "from-emerald-400 to-teal-600",
    details: {
      background:
        "面向中文文本分析教学与实验场景，希望将分词、实体识别、分类、聚类与情感分析等常见任务整合进统一 Web 界面，降低模型实验与结果对比成本。",
      role: "负责全流程开发。后端基于 Flask 提供服务接口，使用 Python 完成文本输入或文件上传、正则清洗、BERT 词向量提取、模型推理与结果封装；前端使用 JavaScript 实现文件拖拽上传、模块切换和结果动态渲染。",
      outcome:
        "系统支持分词列表、实体表格、分类结果与聚类可视化图表展示，完整打通 HanLP、BERT、KMeans 与 TSNE 等模块，形成可交互的中文 NLP 实验平台。",
    },
  },
  {
    id: "decision-tree-visualization",
    period: "2024.12",
    title: "决策树模型可视化",
    description:
      "使用 D3.js 将决策路径以交互式图表呈现，并结合大模型接口生成节点级自然语言解释。",
    icon: BarChart3,
    tags: ["D3.js", "文心一言 API", "交互可视化"],
    coverBg: "from-amber-400 to-orange-500",
    showcaseImage: "/images/project2.png",
    details: {
      background:
        "针对传统模型决策逻辑不直观的问题，希望通过可视化方式展示“特征到分类结果”的路径，并探索将规则结构与大模型问答能力结合起来。",
      role: "负责前端可视化开发与交互实现，使用 D3.js 构建决策树展示，基于 HTML5、CSS 与 JavaScript 实现拖拽、悬停高亮等交互，并调用文心一言 API 为节点生成自然语言解释。",
      outcome:
        "将决策树从静态结构转为可探索的交互式视图，能直观展示决策路径与节点依据，同时形成结合知识图谱思路与生成式 AI 的智能问答雏形。",
    },
  },
  {
    id: "weather-prediction",
    title: "气象时序数据预测系统",
    description:
      "基于 LSTM 的气象预测实验系统，完成时序数据清洗、建模、训练与效果评估。",
    icon: CloudRain,
    tags: ["PyTorch", "LSTM", "时间序列"],
    coverBg: "from-blue-400 to-indigo-600",
    showcaseImage: "/images/project3.png",
    details: {
      background:
        "针对气象数据中异常值干扰和长期依赖建模困难的问题，尝试使用深度学习方法提升降水等指标的时序预测稳定性。",
      role: "负责数据处理与模型实现，完成异常值清洗、滑动窗口样本构造与 PyTorch 模型训练流程，围绕 LSTM 架构进行实验与效果对比。",
      outcome:
        "形成一套完整的气象时序预测实验流程，能够支持多轮训练、指标评估与结果分析，用于展示时间序列建模与深度学习应用能力。",
    },
  },
  {
    id: "vue-task-manager",
    title: "基于 Vue 的任务管理系统",
    description:
      "基于 Vue 3 与 Pinia 的任务协作界面，支持任务管理、状态切换和高效前端交互。",
    icon: Layout,
    tags: ["Vue 3", "Pinia", "前端工程"],
    coverBg: "from-neutral-500 to-slate-700",
    showcaseImage: "/images/project4.png",
    details: {
      background:
        "围绕多任务管理与协作场景，设计一个结构清晰、交互顺畅的前端系统，用于展示组件化开发与状态管理能力。",
      role: "负责前端架构设计与页面实现，基于 Vue 3 组合式 API 与 Pinia 搭建状态管理逻辑，完成任务列表、状态切换、交互反馈与界面组织。",
      outcome:
        "项目验证了 Vue 技术栈下的组件拆分、状态同步与界面交互能力，可作为前端工程实践与业务界面设计的展示型作品。",
    },
  },
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(
    null,
  );
  const [modalOpen, setModalOpen] = useState(false);

  const handleProjectClick = (project: ProjectDetail) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-white/50">
      <div className="container mx-auto max-w-6xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            精选项目
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            主要展示生成式
            AI、智能文档处理、NLP、数据可视化与前端工程方向的代表性作品。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              onClick={() => handleProjectClick(project)}
              className="group relative rounded-2xl bg-white border border-neutral-200/80 overflow-hidden cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl"
            >
              <div
                className={`relative h-56 bg-gradient-to-br ${project.coverBg} overflow-hidden rounded-t-2xl`}
              >
                {project.showcaseImage && (
                  <>
                    <img
                      src={project.showcaseImage}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover opacity-15 scale-110 blur-sm"
                    />
                    <img
                      src={project.showcaseImage}
                      alt={`${project.title} 封面图`}
                      className="relative z-10 w-full h-full object-contain p-3 transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    />
                  </>
                )}
                {!project.showcaseImage && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className="w-16 h-16 text-white/40 drop-shadow-lg" />
                  </div>
                )}
              </div>

              <div className="p-5">
                {project.period && (
                  <p className="text-xs font-medium tracking-wide text-foreground/45 mb-2">
                    {project.period}
                  </p>
                )}
                <h3 className="text-lg font-semibold text-foreground mb-2 leading-snug">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-full bg-neutral-100 text-neutral-600 border border-neutral-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <ProjectModal
          project={selectedProject}
          open={modalOpen}
          onOpenChange={setModalOpen}
        />
      </div>
    </section>
  );
}
