import PageLayout from "@/components/page-layout"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Haru Blog | Habit Building Tips & Stories",
  description: "Read articles on habit building, personal growth, and habit tracking best practices.",
}

const blogPosts = [
  {
    id: 1,
    title: "The 21-Day Myth: What Science Really Says About Building Habits",
    excerpt: "Many believe it takes 21 days to form a habit. Here's what research actually shows and how you can use this knowledge.",
    date: "March 15, 2026",
    readTime: "5 min read",
    category: "Science",
  },
  {
    id: 2,
    title: "Why Your Habit Tracker Fails (And How to Fix It)",
    excerpt: "Most people abandon their habit trackers within weeks. We analyzed thousands of users to find the common patterns.",
    date: "March 10, 2026",
    readTime: "7 min read",
    category: "Tips",
  },
  {
    id: 3,
    title: "Stack Your Habits for Maximum Impact",
    excerpt: "Habit stacking is one of the most powerful techniques for building new behaviors. Learn how to use it effectively.",
    date: "March 5, 2026",
    readTime: "6 min read",
    category: "Strategy",
  },
  {
    id: 4,
    title: "From Zero to Morning Runner: A 90-Day Habit Journey",
    excerpt: "A real user story of how Haru helped transform a couch-dwelling lifestyle into an active, energized routine.",
    date: "February 28, 2026",
    readTime: "8 min read",
    category: "Stories",
  },
  {
    id: 5,
    title: "The Psychology Behind Consistency",
    excerpt: "Understand the psychological principles that make some people consistent habit builders and how you can develop these traits.",
    date: "February 20, 2026",
    readTime: "9 min read",
    category: "Psychology",
  },
  {
    id: 6,
    title: "Breaking Bad Habits: A Framework That Works",
    excerpt: "Breaking habits is harder than building new ones. Here's a scientifically-backed framework to help you succeed.",
    date: "February 12, 2026",
    readTime: "7 min read",
    category: "Strategy",
  },
]

export default function BlogPage() {
  return (
    <PageLayout
      title="Haru Blog"
      description="Insights, tips, and stories about building better habits and achieving sustainable growth."
    >
      <div className="space-y-8">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="border-2 border-foreground p-6 hover:bg-muted transition-colors cursor-pointer group"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-bold">
                {post.category}
              </span>
              <span className="text-sm text-muted-foreground whitespace-nowrap">{post.readTime}</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{post.date}</span>
              <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                Read More <ArrowRight size={16} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </PageLayout>
  )
}
