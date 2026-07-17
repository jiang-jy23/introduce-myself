"use client";

import { ImageIcon, LucideIcon, Target, TrendingUp, User } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export interface ProjectDetail {
  id: string;
  period?: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  coverBg: string;
  showcaseImage?: string;
  galleryImages?: string[];
  details: {
    background: string;
    role: string;
    outcome: string;
  };
}

interface ProjectModalProps {
  project: ProjectDetail | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectModal({
  project,
  open,
  onOpenChange,
}: ProjectModalProps) {
  if (!project) return null;

  const galleryImages =
    project.galleryImages && project.galleryImages.length > 0
      ? project.galleryImages
      : project.showcaseImage
        ? [project.showcaseImage]
        : [];

  const detailItems = [
    {
      title: "项目背景",
      value: project.details.background,
      icon: Target,
      iconClassName: "bg-violet-100 text-violet-600",
    },
    {
      title: "我的职责",
      value: project.details.role,
      icon: User,
      iconClassName: "bg-blue-100 text-blue-600",
    },
    {
      title: "成果总结",
      value: project.details.outcome,
      icon: TrendingUp,
      iconClassName: "bg-emerald-100 text-emerald-600",
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-5xl max-h-[88vh] overflow-y-auto p-0 gap-0 backdrop-blur-xl bg-white/95"
        showCloseButton={true}
      >
        <div className={`relative bg-gradient-to-br ${project.coverBg}`}>
          {project.showcaseImage ? (
            <div className="relative h-[240px] sm:h-[320px] overflow-hidden">
              <img
                src={project.showcaseImage}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover blur-md scale-105 opacity-25"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5" />
              <img
                src={project.showcaseImage}
                alt={`${project.title} 成果展示图`}
                className="relative z-10 w-full h-full object-contain p-4 sm:p-6"
              />
            </div>
          ) : (
            <div className="h-32 flex items-center justify-center">
              <project.icon className="w-12 h-12 text-white/40" />
            </div>
          )}
        </div>

        <div className="p-6">
          <DialogHeader className="mb-6">
            {project.period && (
              <p className="text-sm font-medium text-foreground/50 mb-2">
                {project.period}
              </p>
            )}
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
                  className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </DialogHeader>

          <div className="grid gap-4 lg:grid-cols-3">
            {detailItems.map((item) => (
              <div
                key={item.title}
                className="h-full rounded-2xl bg-neutral-50 border border-neutral-100 p-5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center ${item.iconClassName}`}
                  >
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-semibold text-foreground">
                    {item.title}
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground leading-7">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h4 className="text-sm font-semibold text-foreground mb-3">
              成果展示
            </h4>
            {galleryImages.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2">
                {galleryImages.map((image, index) => (
                  <div
                    key={`${project.id}-gallery-${index}`}
                    className="rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm"
                  >
                    <img
                      src={image}
                      alt={`${project.title} 成果截图 ${index + 1}`}
                      className="w-full h-[220px] md:h-[260px] object-contain bg-white"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="w-full h-48 rounded-2xl bg-neutral-100 border-2 border-dashed border-neutral-300 flex items-center justify-center">
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
  );
}
