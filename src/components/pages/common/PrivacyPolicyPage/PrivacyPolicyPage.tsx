import MyContainer from '@/components/ui/MyContainer/MyContainer';
import { ChevronRight } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Main Content */}
      <MyContainer>
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          {/* Policy Header */}
          <div className="px-6 py-8 border-b border-gray-200 bg-gradient-to-r from-primary to-blue-400">
            <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
            <p className="mt-2 text-teal-100">Last updated: May 17, 2025</p>
          </div>

          {/* Table of Contents */}
          <div className="px-6 py-6 bg-gray-50 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">
              Table of Contents
            </h2>
            <nav className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                { id: 'introduction', label: 'Introduction' },
                {
                  id: 'information-collection',
                  label: 'Information We Collect',
                },
                {
                  id: 'use-of-information',
                  label: 'How We Use Your Information',
                },
                { id: 'data-storage', label: 'Data Storage and Security' },
                { id: 'payment-processing', label: 'Payment Processing' },
                { id: 'hosted-data', label: 'Your Data on Our Servers' },
                { id: 'cookies', label: 'Cookies and Tracking' },
                { id: 'user-rights', label: 'Your Rights' },
                { id: 'policy-changes', label: 'Changes to This Policy' },
                { id: 'contact', label: 'Contact Us' },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-gray-100 text-gray-700 hover:text-gray-900"
                >
                  <ChevronRight className="h-4 w-4 mr-2 text-teal-500" />
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Policy Content */}
          <div className="px-6 py-8 prose prose-teal max-w-none">
            <section id="introduction" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-700">
                Welcome to CloudStack (we, our, or us). We are committed to
                protecting your privacy and the security of your personal
                information. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our
                website, use our services, or purchase our VPS, GPU, or
                dedicated server hosting solutions.
              </p>
              <p className="text-gray-700 mt-4">
                Please read this Privacy Policy carefully. By accessing or using
                our services, you acknowledge that you have read, understood,
                and agree to be bound by all the terms outlined in this Privacy
                Policy. If you do not agree with our policies and practices,
                please do not use our services.
              </p>
            </section>

            <section id="information-collection" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Information We Collect
              </h2>
              <p className="text-gray-700">
                We collect several types of information from and about users of
                our services, including:
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Personal Information
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  Contact information (name, email address, phone number, postal
                  address)
                </li>
                <li>Account credentials (username, password)</li>
                <li>
                  Billing information (billing address, payment method details)
                </li>
                <li>Business information (company name, job title)</li>
                <li>Identity verification information as required by law</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Technical Information
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>IP address and location data</li>
                <li>Device and browser information</li>
                <li>Usage data (pages visited, features used, time spent)</li>
                <li>Server logs and performance data</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Service Usage Information
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Server configuration and specifications</li>
                <li>Bandwidth and resource usage</li>
                <li>Service interaction history</li>
                <li>Customer support communications</li>
              </ul>
            </section>

            <section id="use-of-information" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-700">
                We use the information we collect for various purposes,
                including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
                <li>Providing, maintaining, and improving our services</li>
                <li>Processing transactions and managing your account</li>
                <li>
                  Monitoring server performance and ensuring service reliability
                </li>
                <li>
                  Communicating with you about your account, services, and
                  updates
                </li>
                <li>
                  Sending technical notices, security alerts, and support
                  messages
                </li>
                <li>
                  Responding to your inquiries and providing customer support
                </li>
                <li>
                  Preventing fraud, unauthorized access, and other prohibited
                  activities
                </li>
                <li>
                  Complying with legal obligations and enforcing our terms of
                  service
                </li>
                <li>
                  Analyzing usage patterns to improve user experience and
                  service offerings
                </li>
              </ul>
            </section>

            <section id="data-storage" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Data Storage and Security
              </h2>
              <p className="text-gray-700">
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, accidental loss, alteration, or destruction. Our
                security measures include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Regular security assessments and penetration testing</li>
                <li>Access controls and authentication requirements</li>
                <li>Physical security measures at our data centers</li>
                <li>Regular backups and disaster recovery procedures</li>
              </ul>
              <p className="text-gray-700 mt-4">
                While we strive to use commercially acceptable means to protect
                your personal information, no method of transmission over the
                Internet or electronic storage is 100% secure. We cannot
                guarantee absolute security of your data.
              </p>
            </section>

            <section id="payment-processing" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Payment Processing
              </h2>
              <p className="text-gray-700">
                We use Stripe as our payment processing partner to handle all
                payment transactions. When you make a purchase, your payment
                information is collected directly by Stripe and is subject to
                their privacy policy and terms of service.
              </p>
              <p className="text-gray-700 mt-4">
                We do not store your full credit card details on our servers.
                Stripe provides us with limited information about your payment
                method (such as the last four digits of your card, expiration
                date, and card type) for account management and customer service
                purposes.
              </p>
              <p className="text-gray-700 mt-4">
                For more information about how Stripe processes your payment
                data, please refer to{' '}
                <a
                  href="https://stripe.com/privacy"
                  className="text-teal-600 hover:text-teal-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Stripe&apos;s Privacy Policy
                </a>
                .
              </p>
            </section>

            <section id="hosted-data" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Your Data on Our Servers
              </h2>
              <p className="text-gray-700">
                As a hosting provider, we may have access to the data you store
                on our servers. We respect the privacy and confidentiality of
                your hosted data and will not access, use, or disclose it except
                in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
                <li>To provide technical support at your request</li>
                <li>To address security incidents or technical issues</li>
                <li>
                  To comply with legal obligations or governmental requests
                </li>
                <li>To enforce our terms of service</li>
                <li>With your explicit consent</li>
              </ul>
              <p className="text-gray-700 mt-4">
                You retain all rights and ownership to the data you store on our
                servers. We recommend implementing appropriate security measures
                for your applications and data, such as encryption and access
                controls.
              </p>
            </section>

            <section id="cookies" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Cookies and Tracking
              </h2>
              <p className="text-gray-700">
                We use cookies and similar tracking technologies to collect
                information about your browsing activities on our website.
                Cookies are small text files stored on your device that help us
                improve your experience, analyze site usage, and assist in our
                marketing efforts.
              </p>
              <p className="text-gray-700 mt-4">
                We use the following types of cookies:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
                <li>
                  <strong>Essential cookies:</strong> Required for the operation
                  of our website and services
                </li>
                <li>
                  <strong>Analytical/performance cookies:</strong> Allow us to
                  recognize and count visitors and analyze how users navigate
                  our website
                </li>
                <li>
                  <strong>Functionality cookies:</strong> Enable us to
                  personalize content and remember your preferences
                </li>
                <li>
                  <strong>Targeting cookies:</strong> Record your visit to our
                  website, the pages you visit, and the links you follow to
                  deliver relevant advertisements
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                You can control cookies through your browser settings. However,
                disabling certain cookies may limit your ability to use some
                features of our services.
              </p>
            </section>

            <section id="user-rights" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Your Rights
              </h2>
              <p className="text-gray-700">
                Depending on your location, you may have certain rights
                regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
                <li>
                  The right to access and receive a copy of your personal
                  information
                </li>
                <li>
                  The right to correct inaccurate or incomplete information
                </li>
                <li>
                  The right to delete your personal information in certain
                  circumstances
                </li>
                <li>
                  The right to restrict or object to processing of your personal
                  information
                </li>
                <li>The right to data portability</li>
                <li>
                  The right to withdraw consent where processing is based on
                  consent
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                To exercise these rights, please contact us using the
                information provided in the `Contact Us` section. We will
                respond to your request within the timeframe required by
                applicable law.
              </p>
            </section>

            <section id="policy-changes" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Changes to This Policy
              </h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or for other operational, legal, or
                regulatory reasons. We will notify you of any material changes
                by posting the updated Privacy Policy on this page and updating
                the `Last updated` date.
              </p>
              <p className="text-gray-700 mt-4">
                We encourage you to review this Privacy Policy periodically to
                stay informed about how we are protecting your information. Your
                continued use of our services after any changes to this Privacy
                Policy constitutes your acceptance of the revised policy.
              </p>
            </section>

            <section id="contact" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. Contact Us
              </h2>
              <p className="text-gray-700">
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mt-4">
                <p className="text-gray-900 font-medium">Data Vault</p>
                <p className="text-gray-700 mt-2">
                  Email: privacy@cloudstack.com
                </p>
                <p className="text-gray-700">Phone: +1 (555) 123-4567</p>
                <p className="text-gray-700">
                  Address: 123 Tech Plaza, Suite 400, San Francisco, CA 94103,
                  USA
                </p>
              </div>
              <p className="text-gray-700 mt-6">
                We will make every effort to respond to your inquiry promptly
                and address your concerns thoroughly.
              </p>
            </section>
          </div>
        </div>
      </MyContainer>
    </div>
  );
}
