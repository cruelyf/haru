import PageLayout from "@/components/page-layout"

export const metadata = {
  title: "Terms of Service | Haru",
  description: "Haru's terms of service. Read our conditions and policies.",
}

export default function TermsPage() {
  return (
    <PageLayout
      title="Terms of Service"
      description="Last updated: March 18, 2026"
    >
      <div className="space-y-8 max-w-3xl prose prose-sm">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground leading-relaxed">
            By accessing and using this service, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">2. Use License</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Permission is granted to temporarily download one copy of the materials (information or software) on Haru's service for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to decompile or reverse engineer any software contained on the service</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            <li>Attempt to gain unauthorized access to any portion of the service</li>
            <li>Interfere with any other user's use and enjoyment of the service</li>
            <li>Violate any applicable laws or regulations in connection with your access or use</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">3. Disclaimer</h2>
          <p className="text-muted-foreground leading-relaxed">
            The materials on Haru's service are provided on an 'as is' basis. Haru makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">4. Limitations</h2>
          <p className="text-muted-foreground leading-relaxed">
            In no event shall Haru or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Haru's service, even if Haru or an authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">5. Accuracy of Materials</h2>
          <p className="text-muted-foreground leading-relaxed">
            The materials appearing on Haru's service could include technical, typographical, or photographic errors. Haru does not warrant that any of the materials on its service are accurate, complete, or current. Haru may make changes to the materials contained on its service at any time without notice.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">6. Links</h2>
          <p className="text-muted-foreground leading-relaxed">
            Haru has not reviewed all of the sites linked to its service and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Haru of the site. Use of any such linked website is at the user's own risk.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">7. Modifications</h2>
          <p className="text-muted-foreground leading-relaxed">
            Haru may revise these terms of service for its service at any time without notice. By using this service, you are agreeing to be bound by the then current version of these terms of service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">8. Governing Law</h2>
          <p className="text-muted-foreground leading-relaxed">
            These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Haru operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">9. Contact Information</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have any questions about these Terms of Service, please contact us at legal@haru.app or through our contact form on the Contact page.
          </p>
        </section>
      </div>
    </PageLayout>
  )
}
