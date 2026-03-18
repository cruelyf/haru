import PageLayout from "@/components/page-layout"

export const metadata = {
  title: "About Haru | Habit Tracker for Sustainable Growth",
  description: "Learn about Haru's mission to help people build better habits and achieve sustainable personal growth.",
}

export default function AboutPage() {
  return (
    <PageLayout
      title="About Haru"
      description="Our mission is to empower individuals to build lasting habits and achieve sustainable personal growth."
    >
      <div className="space-y-12">
        {/* Mission Section */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Haru was born from a simple observation: most habit-tracking apps are complicated, overwhelming, and ultimately fail to deliver lasting results. We believed there had to be a better way—one that combines the power of behavioral science with elegant simplicity.
          </p>
        </section>

        {/* Vision Section */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">Our Vision</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We envision a world where personal growth is accessible to everyone. Whether you want to exercise more, read daily, meditate, or develop any other habit, Haru provides the tools and insights you need to succeed. Spring into growth, one habit at a time.
          </p>
        </section>

        {/* Values Section */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-foreground p-6">
              <h3 className="font-bold text-lg mb-2">Simplicity</h3>
              <p className="text-muted-foreground">
                We believe the best tools are the simplest ones. Haru strips away complexity to focus on what matters: building habits that stick.
              </p>
            </div>
            <div className="border-2 border-foreground p-6">
              <h3 className="font-bold text-lg mb-2">Evidence-Based</h3>
              <p className="text-muted-foreground">
                Our features are grounded in behavioral science and proven habit-formation principles to maximize your success rate.
              </p>
            </div>
            <div className="border-2 border-foreground p-6">
              <h3 className="font-bold text-lg mb-2">User-Centric</h3>
              <p className="text-muted-foreground">
                We listen to our community and continuously improve Haru based on real user needs and feedback.
              </p>
            </div>
            <div className="border-2 border-foreground p-6">
              <h3 className="font-bold text-lg mb-2">Privacy First</h3>
              <p className="text-muted-foreground">
                Your data is yours. We never sell or misuse your information—privacy is a fundamental right.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">Meet the Team</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Haru was created by a small team of designers, developers, and habit enthusiasts who are passionate about helping others achieve their goals. We're constantly learning, growing, and improving Haru to serve you better.
          </p>
        </section>
      </div>
    </PageLayout>
  )
}
