import PageLayout from "@/components/page-layout"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Careers at Haru | Join Our Team",
  description: "Join the Haru team and help millions build better habits. View open positions and our culture.",
}

const openPositions = [
  {
    id: 1,
    title: "Full Stack Engineer",
    department: "Engineering",
    location: "Remote",
    description: "We're looking for an experienced full stack engineer to help build the next generation of Haru.",
  },
  {
    id: 2,
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    description: "Join our design team to create intuitive experiences that help millions build better habits.",
  },
  {
    id: 3,
    title: "Growth Marketing Lead",
    department: "Marketing",
    location: "Flexible",
    description: "Lead our growth initiatives and help bring Haru to habit builders around the world.",
  },
  {
    id: 4,
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote",
    description: "Build relationships with our users and ensure they achieve their habit goals with Haru.",
  },
]

export default function CareersPage() {
  return (
    <PageLayout
      title="Careers at Haru"
      description="We're building the future of habit tracking. Join a team passionate about helping people grow."
    >
      <div className="space-y-16">
        {/* Why Join Section */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">Why Join Haru?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-foreground p-6">
              <h3 className="font-bold text-lg mb-2">Make an Impact</h3>
              <p className="text-muted-foreground">
                Help millions of people build better habits and achieve their personal goals. Your work directly improves lives.
              </p>
            </div>
            <div className="border-2 border-foreground p-6">
              <h3 className="font-bold text-lg mb-2">Great Team</h3>
              <p className="text-muted-foreground">
                Work with talented, passionate people who are committed to building something meaningful together.
              </p>
            </div>
            <div className="border-2 border-foreground p-6">
              <h3 className="font-bold text-lg mb-2">Growth Opportunities</h3>
              <p className="text-muted-foreground">
                We invest in our team's development with continuous learning, mentorship, and career growth opportunities.
              </p>
            </div>
            <div className="border-2 border-foreground p-6">
              <h3 className="font-bold text-lg mb-2">Flexibility</h3>
              <p className="text-muted-foreground">
                Most positions are remote. We believe in trust-based work and work-life balance.
              </p>
            </div>
            <div className="border-2 border-foreground p-6">
              <h3 className="font-bold text-lg mb-2">Competitive Benefits</h3>
              <p className="text-muted-foreground">
                We offer competitive salaries, comprehensive health coverage, and equity options for all team members.
              </p>
            </div>
            <div className="border-2 border-foreground p-6">
              <h3 className="font-bold text-lg mb-2">Mission-Driven</h3>
              <p className="text-muted-foreground">
                Join a company with a clear purpose: making habit building simple and accessible for everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">Open Positions</h2>
          {openPositions.length > 0 ? (
            <div className="space-y-4">
              {openPositions.map((position) => (
                <div key={position.id} className="border-2 border-foreground p-6 hover:bg-muted transition-colors group">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {position.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {position.department} • {position.location}
                      </p>
                    </div>
                    <Button className="w-full md:w-auto font-mono font-bold border-2 border-primary bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                      Apply Now
                    </Button>
                  </div>
                  <p className="text-muted-foreground">{position.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="border-2 border-foreground p-6 text-center">
              <p className="text-muted-foreground mb-4">No open positions at the moment, but we're always interested in great talent.</p>
              <Button
                variant="outline"
                className="font-mono font-bold border-2 border-foreground hover:bg-muted"
              >
                Send Us Your Resume
              </Button>
            </div>
          )}
        </section>

        {/* Culture Section */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">Our Culture</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Haru, we believe in building a culture where everyone can do their best work. We're transparent, collaborative, and always learning. We celebrate wins together, learn from failures, and continuously iterate to improve both our product and our team experience.
          </p>
        </section>

        {/* CTA Section */}
        <section className="border-2 border-foreground p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Interested in Working at Haru?</h3>
          <p className="text-muted-foreground mb-6">
            Even if there's no open position that matches your skills right now, we'd love to hear from you. Drop us a line!
          </p>
          <Button className="font-mono font-bold border-2 border-primary bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            Get in Touch
          </Button>
        </section>
      </div>
    </PageLayout>
  )
}
