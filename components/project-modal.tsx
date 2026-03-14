"use client"

import { LucideIcon, Target, User, TrendingUp, ImageIcon } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export interface ProjectDetail {
  id: string
  title: string
  description: string
  icon: LucideIcon
  tags: string[]
  coverBg: string
  showcaseImage?: string
  details: {
    background: string
    role: string
    outcome: string
  }
}

interface ProjectModalProps {
  project: ProjectDetail | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
  if (!project) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="sm:max-w-2xl max-h-[85vh] overflow-y-auto p-0 gap-0 backdrop-blur-xl bg-white/95"
        showCloseButton={true}
      >
        {/* Header with gradient background */}
        <div className={`relative h-32 bg-gradient-to-br ${project.coverBg} flex items-center justify-center`}>
          <project.icon className="w-12 h-12 text-white/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        <div className="p-6">
          <DialogHeader className="mb-6">
            <DialogTitle className="text-xl md:text-2xl font-bold text-foreground">
              {project.title}
            </DialogTitle>
            <DialogDescription className="sr-only">
              {project.details.background}
            </DialogDescription>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full
                    bg-neutral-100 text-neutral-700 border border-neutral-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </DialogHeader>

          {/* Three-section layout */}
          <div className="grid gap-4 md:grid-cols-3">
            {/* Background */}
            <div className="flex gap-4 p-4 rounded-xl bg-neutral-50 border border-neutral-100">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-violet-100 flex items-center justify-center">
                <Target className="w-5 h-5 text-violet-600" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-foreground mb-1">问题背景</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.details.background}
                </p>
              </div>
            </div>

            {/* Role */}
            <div className="flex gap-4 p-4 rounded-xl bg-neutral-50 border border-neutral-100">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <User className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-foreground mb-1">我的角色</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.details.role}
                </p>
              </div>
            </div>

            {/* Outcome */}
            <div className="flex gap-4 p-4 rounded-xl bg-neutral-50 border border-neutral-100">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-foreground mb-1">成果数据</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.details.outcome}
                </p>
              </div>
            </div>
          </div>

          {/* Showcase Container */}
          <div className="mt-6">
            <h4 className="text-sm font-semibold text-foreground mb-3">成果展示</h4>
            {project.showcaseImage ? (
              <div className="w-full rounded-2xl overflow-hidden border border-neutral-200 bg-white">
                <img
                  src={project.showcaseImage}
                  alt={`${project.title} 成果截图`}
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </div>
            ) : (
              <div className="w-full h-48 rounded-2xl bg-neutral-100 border-2 border-dashed border-neutral-300
                flex items-center justify-center">
                <div className="text-center">
                  <ImageIcon className="w-10 h-10 text-neutral-400 mx-auto mb-2" />
                  <p className="text-sm text-neutral-500">成果截图预览</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
