import MyContainer from '@/components/ui/MyContainer/MyContainer';
import { ChevronRight } from 'lucide-react';
import React from 'react';

const TermsPageComponent = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <MyContainer>
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          {/* Terms Header */}
          <div className="px-6 py-8 border-b border-gray-200 bg-gradient-to-r from-primary to-blue-400">
            <h1 className="text-3xl font-bold text-white">
              Terms and Conditions
            </h1>
            <p className="mt-2 text-teal-100">Last updated: May 17, 2025</p>
          </div>

          {/* Table of Contents */}
          <div className="px-6 py-6 bg-gray-50 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">
              Table of Contents
            </h2>
            <nav className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                { id: 'acceptance', label: 'Acceptance of Terms' },
                { id: 'services', label: 'Services Description' },
                { id: 'accounts', label: 'Account Registration' },
                { id: 'payment', label: 'Payment Terms' },
                { id: 'sla', label: 'Service Level Agreement' },
                { id: 'acceptable-use', label: 'Acceptable Use' },
                { id: 'data-ownership', label: 'Data Ownership' },
                {
                  id: 'intellectual-property',
                  label: 'Intellectual Property',
                },
                {
                  id: 'limitation-liability',
                  label: 'Limitation of Liability',
                },
                { id: 'termination', label: 'Termination' },
                { id: 'governing-law', label: 'Governing Law' },
                { id: 'changes', label: 'Changes to Terms' },
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

          {/* Terms Content */}
          <div className="px-6 py-8 prose prose-teal max-w-none">
            <section id="acceptance" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700">
                Welcome to Data Vault. These Terms and Conditions (Terms) govern
                your access to and use of Data Vault&apos;s website, services,
                and products, including our VPS, GPU, and dedicated server
                hosting solutions (collectively, the Services).
              </p>
              <p className="text-gray-700 mt-4">
                By accessing or using our Services, you agree to be bound by
                these Terms. If you do not agree to all the terms and conditions
                of this agreement, you may not access or use our Services. If
                you are using our Services on behalf of an organization, you are
                agreeing to these Terms for that organization and confirming
                that you have the authority to bind that organization to these
                Terms.
              </p>
              <p className="text-gray-700 mt-4">
                Please read these Terms carefully before using our Services. If
                you have any questions, please contact us using the information
                provided at the end of these Terms.
              </p>
            </section>

            <section id="services" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Services Description
              </h2>
              <p className="text-gray-700">
                Data Vault provides cloud infrastructure services, including but
                not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
                <li>
                  Virtual Private Servers (VPS) for web hosting and application
                  deployment
                </li>
                <li>
                  GPU servers for machine learning, rendering, and computational
                  workloads
                </li>
                <li>Dedicated servers for high-performance computing needs</li>
                <li>Storage solutions for data backup and content delivery</li>
                <li>
                  Network infrastructure for secure and reliable connectivity
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                Service specifications, pricing, and availability are detailed
                on our website and may be updated from time to time. We reserve
                the right to modify, suspend, or discontinue any part of our
                Services at any time with or without notice.
              </p>
              <p className="text-gray-700 mt-4">
                While we strive to ensure high availability and performance, all
                Services are provided on an as is and as available basis without
                warranties of any kind, either express or implied, except as
                otherwise specified in writing.
              </p>
            </section>

            <section id="accounts" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Account Registration
              </h2>
              <p className="text-gray-700">
                To access and use our Services, you must register for a Data
                Vault account. When you register, you agree to provide accurate,
                current, and complete information about yourself and maintain
                and promptly update this information.
              </p>
              <p className="text-gray-700 mt-4">You are responsible for:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
                <li>
                  Maintaining the confidentiality of your account credentials
                </li>
                <li>All activities that occur under your account</li>
                <li>
                  Notifying us immediately of any unauthorized use of your
                  account
                </li>
                <li>
                  Ensuring that you exit from your account at the end of each
                  session
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                We reserve the right to refuse service, terminate accounts,
                remove or edit content, or cancel orders at our sole discretion
                if we believe your account is being used for fraudulent or
                illegal activities, or in violation of these Terms.
              </p>
            </section>

            <section id="payment" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Payment Terms
              </h2>
              <p className="text-gray-700">
                By subscribing to our Services, you agree to pay all fees
                associated with the Services you select. Fees are non-refundable
                except as required by law or as explicitly stated in these
                Terms.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                4.1 Billing
              </h3>
              <p className="text-gray-700">
                We use Stripe as our payment processor to bill you through a
                payment account linked to your account. Billing cycles are set
                on a monthly or annual basis, depending on the subscription plan
                you select. Usage-based Services may be billed in arrears based
                on your actual usage.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                4.2 Automatic Renewal
              </h3>
              <p className="text-gray-700">
                Subscriptions automatically renew at the end of each billing
                period unless you cancel your subscription before the renewal
                date. By subscribing, you authorize us to charge your payment
                method for the subscription fee at the then-current rate plus
                any applicable taxes.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                4.3 Late Payments
              </h3>
              <p className="text-gray-700">
                If payment cannot be charged to your payment method for any
                reason, we reserve the right to suspend or terminate your access
                to the Services. You are responsible for all applicable taxes,
                and we will charge tax when required to do so.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                4.4 Price Changes
              </h3>
              <p className="text-gray-700">
                We may change our prices at any time. If we increase
                subscription fees, we will provide notice at least 30 days
                before the change takes effect. Your continued use of the
                Services after the price change becomes effective constitutes
                your agreement to pay the changed amount.
              </p>
            </section>

            <section id="sla" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Service Level Agreement
              </h2>
              <p className="text-gray-700">
                Data Vault strives to maintain high availability of our
                Services. Our Service Level Agreement (SLA) details our
                commitments regarding service availability, performance, and
                support response times.
              </p>
              <p className="text-gray-700 mt-4">
                We guarantee a monthly uptime percentage as specified in our SLA
                for each service tier. If we fail to meet these guarantees, you
                may be eligible for service credits as outlined in the SLA.
              </p>
              <p className="text-gray-700 mt-4">
                The SLA does not apply to performance issues:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
                <li>Caused by factors outside our reasonable control</li>
                <li>
                  That resulted from your equipment or third-party equipment
                </li>
                <li>
                  That resulted from actions or inactions of you or your users
                </li>
                <li>During scheduled maintenance windows</li>
                <li>
                  Arising from our suspension or termination of your right to
                  use the Services in accordance with these Terms
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                For complete details, please refer to our full SLA documentation
                available on our website.
              </p>
            </section>

            <section id="acceptable-use" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Acceptable Use
              </h2>
              <p className="text-gray-700">
                You agree to use our Services only for lawful purposes and in
                accordance with these Terms. You agree not to use our Services:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
                <li>
                  In any way that violates any applicable federal, state, local,
                  or international law or regulation
                </li>
                <li>
                  To transmit, or procure the sending of, any advertising or
                  promotional material, including any junk mail, chain letter,
                  spam, or any other similar solicitation
                </li>
                <li>
                  To impersonate or attempt to impersonate Data Vault, a Data
                  Vault employee, another user, or any other person or entity
                </li>
                <li>
                  To engage in any other conduct that restricts or inhibits
                  anyone&apos;s use or enjoyment of the Services
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                Additionally, you agree not to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
                <li>
                  Use the Services in any manner that could disable, overburden,
                  damage, or impair the site or interfere with any other
                  party&apos;s use of the Services
                </li>
                <li>
                  Use any robot, spider, or other automatic device, process, or
                  means to access the Services for any purpose
                </li>
                <li>
                  Use the Services to host, store, or transmit content that is
                  illegal, harmful, threatening, abusive, harassing, tortious,
                  defamatory, vulgar, obscene, libelous, or otherwise
                  objectionable
                </li>
                <li>
                  Use the Services to host, store, or transmit material that
                  infringes or violates someone else&apos;s intellectual
                  property rights
                </li>
                <li>
                  Use the Services to distribute malware, viruses, or other
                  malicious code
                </li>
                <li>
                  Attempt to gain unauthorized access to, interfere with,
                  damage, or disrupt any parts of the Services
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                Violation of these acceptable use policies may result in
                termination or suspension of your access to the Services.
              </p>
            </section>

            <section id="data-ownership" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Data Ownership
              </h2>
              <p className="text-gray-700">
                You retain all rights and ownership of your data stored on our
                servers. We do not claim ownership of any of your data or
                content that you upload, transmit, or store using our Services.
              </p>
              <p className="text-gray-700 mt-4">
                By using our Services, you grant us a limited license to host,
                store, and display your data solely for the purpose of providing
                the Services to you. This license does not grant us the right to
                sell, rent, transfer, distribute, or otherwise disclose your
                data except as required by law or as expressly permitted in
                writing by you.
              </p>
              <p className="text-gray-700 mt-4">You are responsible for:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
                <li>
                  The accuracy, quality, integrity, legality, reliability, and
                  appropriateness of all your data
                </li>
                <li>
                  Maintaining appropriate security, protection, and backup of
                  your data
                </li>
                <li>
                  Complying with all applicable laws regarding the collection,
                  use, and storage of data, including data that identifies or
                  can be used to identify an individual
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                Upon termination of your account, we may retain your data for a
                commercially reasonable time for backup, archival, or audit
                purposes. Any retained data is subject to the confidentiality
                provisions of these Terms.
              </p>
            </section>

            <section id="intellectual-property" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Intellectual Property
              </h2>
              <p className="text-gray-700">
                The Services and their entire contents, features, and
                functionality (including but not limited to all information,
                software, text, displays, images, video, and audio, and the
                design, selection, and arrangement thereof) are owned by Data
                Vault, its licensors, or other providers of such material and
                are protected by United States and international copyright,
                trademark, patent, trade secret, and other intellectual property
                or proprietary rights laws.
              </p>
              <p className="text-gray-700 mt-4">
                These Terms permit you to use the Services for your personal or
                business purposes only. You must not reproduce, distribute,
                modify, create derivative works of, publicly display, publicly
                perform, republish, download, store, or transmit any of the
                material on our Services, except as follows:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
                <li>
                  Your computer may temporarily store copies of such materials
                  in RAM incidental to your accessing and viewing those
                  materials
                </li>
                <li>
                  You may store files that are automatically cached by your Web
                  browser for display enhancement purposes
                </li>
                <li>
                  You may print or download one copy of a reasonable number of
                  pages of the website for your own personal, non-commercial use
                  and not for further reproduction, publication, or distribution
                </li>
              </ul>
              <p className="text-gray-700 mt-4">You must not:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
                <li>Modify copies of any materials from the Services</li>
                <li>
                  Delete or alter any copyright, trademark, or other proprietary
                  rights notices from copies of materials from the Services
                </li>
                <li>
                  Access or use for any commercial purposes any part of the
                  Services or any services or materials available through the
                  Services
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                If you print, copy, modify, download, or otherwise use or
                provide any other person with access to any part of the Services
                in breach of the Terms, your right to use the Services will stop
                immediately and you must, at our option, return or destroy any
                copies of the materials you have made.
              </p>
            </section>

            <section id="limitation-liability" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Limitation of Liability
              </h2>
              <p className="text-gray-700">
                To the fullest extent permitted by applicable law, in no event
                will Data Vault, its affiliates, or their licensors, service
                providers, employees, agents, officers, or directors be liable
                for damages of any kind, under any legal theory, arising out of
                or in connection with your use, or inability to use, the
                Services, including any direct, indirect, special, incidental,
                consequential, or punitive damages, including but not limited
                to, personal injury, pain and suffering, emotional distress,
                loss of revenue, loss of profits, loss of business or
                anticipated savings, loss of use, loss of goodwill, loss of
                data, and whether caused by tort (including negligence), breach
                of contract, or otherwise, even if foreseeable.
              </p>
              <p className="text-gray-700 mt-4">
                The foregoing does not affect any liability which cannot be
                excluded or limited under applicable law.
              </p>
              <p className="text-gray-700 mt-4">
                In no event shall our total liability to you for all claims
                arising from or relating to these Terms or your use of the
                Services exceed the amount paid by you to Data Vault during the
                twelve (12) months immediately preceding the event giving rise
                to the claim.
              </p>
            </section>

            <section id="termination" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. Termination
              </h2>
              <p className="text-gray-700">
                We may terminate or suspend your account and access to the
                Services immediately, without prior notice or liability, for any
                reason whatsoever, including without limitation if you breach
                these Terms.
              </p>
              <p className="text-gray-700 mt-4">
                Upon termination, your right to use the Services will
                immediately cease. If you wish to terminate your account, you
                may simply discontinue using the Services or contact us to
                request account deletion.
              </p>
              <p className="text-gray-700 mt-4">
                All provisions of the Terms which by their nature should survive
                termination shall survive termination, including, without
                limitation, ownership provisions, warranty disclaimers,
                indemnity, and limitations of liability.
              </p>
              <p className="text-gray-700 mt-4">
                We are not obligated to maintain or provide you with copies of
                your data after termination. We may delete your data in the
                normal course of operation when it is no longer needed, subject
                to our data retention policies and applicable law.
              </p>
            </section>

            <section id="governing-law" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                11. Governing Law
              </h2>
              <p className="text-gray-700">
                These Terms and your use of the Services shall be governed by
                and construed in accordance with the laws of the State of
                California, without giving effect to any choice or conflict of
                law provision or rule.
              </p>
              <p className="text-gray-700 mt-4">
                Any legal suit, action, or proceeding arising out of, or related
                to, these Terms or the Services shall be instituted exclusively
                in the federal courts of the United States or the courts of the
                State of California, in each case located in the City of San
                Francisco. You waive any and all objections to the exercise of
                jurisdiction over you by such courts and to venue in such
                courts.
              </p>
              <p className="text-gray-700 mt-4">
                Any dispute, controversy, or claim arising out of or relating to
                these Terms, including the validity, invalidity, breach, or
                termination thereof, shall be settled by arbitration in
                accordance with the rules of the American Arbitration
                Association then in effect, by a panel of three arbitrators.
              </p>
            </section>

            <section id="changes" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                12. Changes to Terms
              </h2>
              <p className="text-gray-700">
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. If a revision is material, we
                will provide at least 30 days&apos; notice prior to any new
                terms taking effect. What constitutes a material change will be
                determined at our sole discretion.
              </p>
              <p className="text-gray-700 mt-4">
                By continuing to access or use our Services after any revisions
                become effective, you agree to be bound by the revised terms. If
                you do not agree to the new terms, you are no longer authorized
                to use the Services.
              </p>
              <p className="text-gray-700 mt-4">
                We encourage you to review these Terms periodically for any
                changes. The most current version will always be posted on our
                website with the effective date.
              </p>
            </section>

            <section id="contact" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                13. Contact Us
              </h2>
              <p className="text-gray-700">
                If you have any questions about these Terms, please contact us
                at:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mt-4">
                <p className="text-gray-900 font-medium">Data Vault, Inc.</p>
                <p className="text-gray-700 mt-2">Email: legal@datavault.com</p>
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
};

export default TermsPageComponent;
