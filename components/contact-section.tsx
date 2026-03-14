"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "邮箱",
      value: "yaoyao7465@163.com",
      href: "mailto:yaoyao7465@163.com",
    },
    {
      icon: Phone,
      label: "手机",
      value: "178 6076 0900",
      href: "tel:17860760900",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            联系我
          </h2>
          <p className="mt-3 text-foreground/60">
            期待与您的交流与合作
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-foreground/5 shadow-sm"
        >
          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Send className="w-4 h-4" />
                联系方式
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-foreground/5 flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
                      <item.icon className="w-5 h-5 text-foreground/70" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/50">{item.label}</p>
                      <p className="font-medium text-foreground group-hover:text-foreground/80 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">
                社交平台
              </h3>
              
              <div className="flex gap-3">
                {socialLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300 group"
                    aria-label={item.label}
                  >
                    <item.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
              
              <p className="text-sm text-foreground/50">
                欢迎通过以上方式与我取得联系，我会尽快回复您的消息。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
