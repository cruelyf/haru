import PageLayout from "@/components/page-layout"

export const metadata = {
  title: "Privacy Policy | Haru",
  description: "Haru's privacy policy. Learn how we collect, use, and protect your data.",
}

export default function PrivacyPage() {
  return (
    <PageLayout
      title="Privacy Policy"
      description="Last updated: March 18, 2026"
    >
      <div className="space-y-8 max-w-3xl prose prose-sm">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">1. Introduction</h2>
          <p className="text-muted-foreground leading-relaxed">
            Haru ("we," "us," or "our") operates the Haru application and website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our service and the choices you have associated with that data.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">2. Information Collection and Use</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-lg mb-2">Personal Data</h3>
              <p className="text-muted-foreground leading-relaxed">
                While using our service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This may include, but is not limited to:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                <li>Email address</li>
                <li>First and last name</li>
                <li>Phone number</li>
                <li>Address, state, province, ZIP/postal code, city</li>
                <li>Cookies and usage data</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Usage Data</h3>
              <p className="text-muted-foreground leading-relaxed">
                We may also collect information about how you interact with our service ("Usage Data"). This may include information such as your computer's IP address, browser type, browser version, the pages you visit, the time and date of your visit, and other diagnostic data.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">3. Use of Data</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">Haru uses the collected data for various purposes:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>To provide and maintain our service</li>
            <li>To notify you about changes to our service</li>
            <li>To allow you to participate in interactive features of our service when you choose to do so</li>
            <li>To provide customer care and support</li>
            <li>To gather analysis or valuable information so that we can improve our service</li>
            <li>To monitor the usage of our service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">4. Security of Data</h2>
          <p className="text-muted-foreground leading-relaxed">
            The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">5. Changes to This Privacy Policy</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "effective date" at the top of this Privacy Policy.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">6. Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us at privacy@haru.app or through our contact form on the Contact page.
          </p>
        </section>
      </div>
    </PageLayout>
  )
}
