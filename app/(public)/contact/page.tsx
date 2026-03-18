"use client"

import PageLayout from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // In a real app, you would send this data to a backend
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <PageLayout
      title="Get in Touch"
      description="We'd love to hear from you. Reach out with any questions, feedback, or partnership inquiries."
    >
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Contact Information</h2>

            <div className="flex gap-4">
              <div className="w-12 h-12 border-2 border-foreground flex items-center justify-center flex-shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="font-bold mb-1">Email</h3>
                <p className="text-muted-foreground">hello@haru.app</p>
                <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 border-2 border-foreground flex items-center justify-center flex-shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="font-bold mb-1">Phone</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
                <p className="text-sm text-muted-foreground">Mon-Fri, 9 AM - 6 PM EST</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 border-2 border-foreground flex items-center justify-center flex-shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-bold mb-1">Address</h3>
                <p className="text-muted-foreground">123 Growth Street</p>
                <p className="text-muted-foreground">San Francisco, CA 94102</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 pt-8 border-t-2 border-foreground">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  → About Haru
                </a>
              </li>
              <li>
                <a href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  → Read Our Blog
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  → Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  → Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="border-2 border-foreground p-8">
          <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

          {submitted ? (
            <div className="bg-primary/10 border-2 border-primary p-4 text-center">
              <p className="font-bold text-primary mb-2">Thank you for your message!</p>
              <p className="text-sm text-muted-foreground">We've received your inquiry and will get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-bold text-sm mb-2">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-2 border-foreground rounded-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-bold text-sm mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-2 border-foreground rounded-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block font-bold text-sm mb-2">
                  Subject
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="border-2 border-foreground rounded-none"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-bold text-sm mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="border-2 border-foreground rounded-none min-h-32"
                  placeholder="Your message..."
                />
              </div>

              <Button
                type="submit"
                className="w-full font-mono font-bold border-2 border-primary bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Send Message
              </Button>
            </form>
          )}
        </div>
      </div>
    </PageLayout>
  )
}
