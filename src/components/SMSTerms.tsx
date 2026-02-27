import './SMSTerms.scss';

const SMSTerms = () => {
  return (
    <div className="sms-terms">
      <div className="sms-terms-container">
        <h1>SMS Terms & Compliance</h1>

        <section className="sms-section">
          <h2>SMS Program Overview</h2>
          <p>
            Opervia powers SMS communications on behalf of equipment dealerships and
            service providers. Opervia operates two distinct SMS messaging services,
            each with its own opt-in process. By opting in to either service,
            you agree to receive recurring automated messages at the mobile
            number you provided. Consent is not a condition of purchase.
          </p>
        </section>

        <section className="sms-section">
          <h2>1. Parts Lookup SMS Service</h2>
          <p>
            The Parts Lookup SMS service allows customers to check real-time part
            availability by texting a part number to a dedicated phone number. This
            is a separate service from the Service Request Notifications described
            below.
          </p>
          <h3>How to Opt In</h3>
          <p>
            When signing up for Parts Lookup through a dealership's online form
            (powered by Opervia), you will see an SMS consent checkbox. By checking
            this box, you expressly consent to receive recurring automated SMS
            messages related to parts availability, stock checks, and pickup
            notifications. The checkbox discloses the brand name, message purpose,
            message frequency, data rates, STOP/HELP instructions, and links to
            these <a href="/sms-terms">SMS Terms</a> and
            our <a href="/privacy-policy">Privacy Policy</a>.
          </p>
          <div className="opt-in-screenshot">
            <img
              src="/images/opervia_parts_lookup_sms_screenshot.png"
              alt="Screenshot of the SMS consent checkbox on the Opervia Parts Lookup sign-up form, showing brand name, message purpose, frequency disclosure, data rates notice, STOP/HELP instructions, and links to SMS Terms and Privacy Policy"
            />
            <p className="screenshot-caption">
              SMS consent checkbox as displayed on the Parts Lookup sign-up form
            </p>
          </div>
          <p>
            <strong>Confirmation message:</strong> Upon opting in, you will receive an
            automated confirmation message that includes the brand name (Opervia Parts
            Lookup), a description of the service, message frequency disclosure, message
            and data rates notice, and opt-out instructions (reply STOP to unsubscribe).
          </p>
          <h3>Message Types &amp; Frequency</h3>
          <p>
            Messages include part availability responses, stock confirmations, and
            pickup notifications. Messages are only sent in direct response to your
            inquiries. Message frequency varies based on your activity. No marketing,
            promotional, or unsolicited messages are sent.
          </p>
        </section>

        <section className="sms-section">
          <h2>2. Service Request Notifications</h2>
          <p>
            The Service Request Notifications service sends SMS updates related to
            your equipment service requests, including status updates, appointment
            reminders, and service completion alerts. This is a separate service
            from the Parts Lookup SMS service described above.
          </p>
          <h3>How to Opt In</h3>
          <p>
            When submitting a service request through a dealership's online form
            (powered by Opervia), you will see an SMS consent checkbox. By checking
            this box, you expressly consent to receive recurring automated SMS
            messages related to your service request. The checkbox discloses the
            brand name, message purpose, message frequency, data rates, STOP/HELP
            instructions, and links to these <a href="/sms-terms">SMS Terms</a> and
            our <a href="/privacy-policy">Privacy Policy</a>.
          </p>
          <div className="opt-in-screenshot">
            <img
              src="/images/opervia_sms_screenshot.png"
              alt="Screenshot of the SMS consent checkbox on the dealership service request form, showing brand name, message purpose, frequency disclosure, data rates notice, STOP/HELP instructions, and links to SMS Terms and Privacy Policy"
            />
            <p className="screenshot-caption">
              SMS consent checkbox as displayed on the dealership service request form
            </p>
          </div>
          <p>
            <strong>Confirmation message:</strong> Upon opting in, you will receive an
            automated confirmation message that includes the brand name, a description
            of the service, message frequency disclosure, message and data rates notice,
            and opt-out instructions (reply STOP to unsubscribe).
          </p>
          <h3>Message Types &amp; Frequency</h3>
          <p>
            Messages include service status updates, appointment reminders, and service
            completion alerts. Messages are only sent in direct response to your service
            requests and related follow-ups. Message frequency varies based on your
            activity. No marketing, promotional, or unsolicited messages are sent.
          </p>
        </section>

        <section className="sms-section">
          <h2>HELP Instructions</h2>
          <p>
            For help or more information about our SMS program, text <strong>HELP</strong> to
            any message you receive from us. You can also contact us at:
          </p>
          <p>
            Email: <a href="mailto:support@opervia.com">support@opervia.com</a>
          </p>
        </section>

        <section className="sms-section">
          <h2>STOP Instructions (Opt-Out)</h2>
          <p>
            You can cancel the SMS service at any time by texting <strong>STOP</strong> to
            any message you receive from us. After you send the message "STOP", we will
            send you an SMS message to confirm that you have been unsubscribed. After this,
            you will no longer receive SMS messages from us. If you want to join again,
            use the web form on your dealership's site to re-subscribe.
          </p>
        </section>

        <section className="sms-section">
          <h2>Message & Data Rates</h2>
          <p>
            Message and data rates may apply for any messages sent to you from us and to
            us from you. You are responsible for any charges from your mobile carrier. If
            you have any questions about your text plan or data plan, contact your wireless
            provider.
          </p>
        </section>

        <section className="sms-section">
          <h2>Supported Carriers</h2>
          <p>
            Our SMS program is supported by all major U.S. carriers, including AT&T,
            T-Mobile, Verizon, Sprint, and others. For a complete list of supported
            carriers, please contact us.
          </p>
        </section>

        <section className="sms-section">
          <h2>Privacy & Data Sharing</h2>
          <p>
            We respect your privacy. We do not sell, rent, or share your SMS opt-in data
            or consent with any third parties for their marketing or promotional purposes.
            Your information is collected and used in accordance with our Privacy Policy.
            We will only use your mobile number to send you the messages you've requested
            and for purposes outlined in our Privacy Policy.
          </p>
          <p>
            <a href="/privacy-policy" className="policy-link">View our Privacy Policy</a>
          </p>
        </section>

        <section className="sms-section">
          <h2>Terms & Conditions</h2>
          <p>
            By participating in our SMS program, you agree to our complete Terms of Service.
            These terms govern your use of all Opervia services, including SMS communications.
          </p>
          <p>
            <a href="/terms-of-service" className="policy-link">View our Terms of Service</a>
          </p>
        </section>

        <section className="sms-section sms-compliance-summary">
          <h2>Quick Reference - SMS Compliance</h2>
          <div className="compliance-grid">
            <div className="compliance-item">
              <h3>HELP</h3>
              <p>Text HELP for assistance</p>
            </div>
            <div className="compliance-item">
              <h3>STOP</h3>
              <p>Text STOP to opt-out</p>
            </div>
            <div className="compliance-item">
              <h3>Frequency</h3>
              <p>Message frequency varies</p>
            </div>
            <div className="compliance-item">
              <h3>Rates</h3>
              <p>Msg & data rates may apply</p>
            </div>
          </div>
        </section>

        <section className="sms-section">
          <h2>Questions?</h2>
          <p>
            If you have any questions about our SMS program, please don't hesitate to
            contact us:
          </p>
          <p>
            Email: <a href="mailto:support@opervia.com">support@opervia.com</a>
          </p>
        </section>

        <div className="back-link">
          <a href="/">← Back to Home</a>
        </div>
      </div>
    </div>
  );
};

export default SMSTerms;
