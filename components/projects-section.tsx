"use client";

import { useState } from "react";

import { motion } from "framer-motion";
import { ImageIcon, BarChart3, CloudRain, Layout } from "lucide-react";
import { ProjectModal, type ProjectDetail } from "@/components/project-modal";

import aiImageSystem from "@/assets/c__Users_15438_AppData_Roaming_Cursor_User_workspaceStorage_0cf4e4a1f6693903157252858b9e2cf9_images_image-37af0b91-20ce-4fdf-9820-9520ef164798.png";
import d3DecisionTree from "@/assets/c__Users_15438_AppData_Roaming_Cursor_User_workspaceStorage_0cf4e4a1f6693903157252858b9e2cf9_images_image-fcfd8db1-950e-4c5d-8c4e-11b2d3de97db.png";
import weatherForecast from "@/assets/c__Users_15438_AppData_Roaming_Cursor_User_workspaceStorage_0cf4e4a1f6693903157252858b9e2cf9_images______2026-03-12_210433-0729db16-9a89-4b82-a735-1259ae2b467d.png";
import vueTaskManager from "@/assets/c__Users_15438_AppData_Roaming_Cursor_User_workspaceStorage_0cf4e4a1f6693903157252858b9e2cf9_images_VUE______-298bed6d-7cd2-494d-a6b0-2600d91fe073.png";

const projects: ProjectDetail[] = [
  {
    id: "ai-image",
    title: "多功能图像变换系统",
    description: "基于双轨扩散模型与语义分割技术，实现图像修复与风格迁移",
    icon: ImageIcon,
    tags: ["AI 产品", "深度学习"],
    coverBg: "from-violet-400 to-purple-600",
    showcaseImage: aiImageSystem,
    details: {
      background:
        "针对本地部署深度学习模型门槛高、Web端交互体验碎片的痛点，构建集修复与生成于一体的集成系统 。",
      role: "负责前端开发与背景置换模型构建。使用 Python FastAPI 搭建异步接口，通过 Redis 缓存模型参数减少重复加载耗时，并使用 MySQL 存储用户配置与生成 URL 。",
      outcome:
        "成功集成基于 StrDiffusion 的双轨扩散模型（结构+纹理并行），实现了图像修复、风格迁移、背景置换与 豆包AI 文生图的流畅闭环交互 。",
    },
  },
  {
    id: "d3-visualization",
    title: "D3.js 决策树模型可视化",
    description:
      "利用 D3.js 绘制交互式决策路径，集成大模型 API 提供自然语言解释",
    icon: BarChart3,
    tags: ["数据可视化", "交互设计"],
    coverBg: "from-amber-400 to-orange-500",
    showcaseImage: d3DecisionTree,
    details: {
      background:
        "机器学习模型“黑盒化”导致其逻辑难以被理解，需要直观的可视化工具展示决策路径 。",
      role: "负责全栈开发。使用 scikit-learn 训练模型，通过 joblib/JSON 进行特征序列化，并在 Observable 平台构建 D3.js 交互框架 。",
      outcome:
        "实现了“特征输入→路径高亮→解释生成”的完整链路，通过节点渐变动画与文心一言 API 的自然语言集成，显著增强了模型可解释性 。",
    },
  },
  {
    id: "weather-prediction",
    title: "气象时序数据预报系统",
    description: "基于 LSTM 模型处理 50万级气象数据，实现降水概率预测",
    icon: CloudRain,
    tags: ["大数据", "算法集成"],
    coverBg: "from-sky-400 to-blue-600",
    showcaseImage: weatherForecast,
    details: {
      background:
        "针对海量气象数据中的异常值干扰和长期依赖关系预测难点，提升天气预报的稳健性 。",
      role: "负责算法实现与数据清洗。利用 Z-score 法过滤极端数据，构建滑动窗口生成输入序列，并使用 PyTorch 搭建引入注意力机制的 3 层 LSTM 网络 。",
      outcome:
        "处理 50万+ 条原始气象记录，数据准确率从 82% 提升至 96%，将 7 天降水预测准确率提升至 88% 。",
    },
  },
  {
    id: "vue-task-manager",
    title: "基于 Vue 的任务管理系统",
    description:
      "基于 Vue 3 与 Pinia 构建的企业级任务协作平台，支持拖拽排序与实时同步",
    icon: Layout,
    tags: ["B 端系统", "前端开发"],
    coverBg: "from-emerald-400 to-teal-600",
    showcaseImage: vueTaskManager,
    details: {
      background:
        "B 端系统在处理大规模任务数据时常出现状态同步延迟与交互卡顿 。",
      role: "前端架构设计。基于 Vue 3 组合式 API 和 Pinia 实现响应式数据管理 。",
      outcome:
        "实现了分页统计功能，确保了 1000+ 任务数据的高效渲染与流畅交互 。",
    },
  },
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(
    null
  );
  const [modalOpen, setModalOpen] = useState(false);

  const handleProjectClick = (project: ProjectDetail) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-white/50">
      <div className="container mx-auto px-6 md:px-8 max-w-5xl">
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
          <p className="text-muted-foreground max-w-lg mx-auto">
            探索 AI 与前端技术的融合实践
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => handleProjectClick(project)}
              className="group relative rounded-2xl bg-white border border-neutral-200/80 
                overflow-hidden cursor-pointer
                transition-all duration-300 ease-out
                hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Cover */}
              <div
                className={`relative h-40 bg-gradient-to-br ${project.coverBg} 
                overflow-hidden`}
              >
                {project.showcaseImage && (
                  <img
                    src={project.showcaseImage}
                    alt={`${project.title} 封面图`}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <project.icon className="w-16 h-16 text-white/40 drop-shadow-lg" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-foreground mb-2 leading-snug">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-full
                        bg-neutral-100 text-neutral-600 border border-neutral-200"
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
