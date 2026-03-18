import Header from "@/components/landing/header"
import Footer from "@/components/landing/footer"

interface PageLayoutProps {
  children: React.ReactNode
  title: string
  description?: string
}

export default function PageLayout({ children, title, description }: PageLayoutProps) {
  return (
    <main className="overflow-hidden">
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{title}</h1>
          {description && (
            <p className="text-lg text-muted-foreground text-balance">{description}</p>
          )}
        </div>
        {children}
      </div>
      <Footer />
    </main>
  )
}
