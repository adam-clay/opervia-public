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
            service providers. When you interact with a dealership that uses Opervia,
            you may receive SMS messages related to your service requests, parts
            inquiries, and appointment updates. By opting in to receive SMS messages,
            you agree to receive recurring automated service messages at the mobile
            number you provided. Consent is not a condition of purchase.
          </p>
        </section>

        <section className="sms-section">
          <h2>How to Opt In</h2>
          <p>
            You can opt in to receive SMS messages by checking the SMS consent checkbox
            on the dealership's service request form (powered by Opervia). You may also
            opt in by texting <strong>START</strong> to the dealership's dedicated phone
            number. You will receive a confirmation message with service details and
            opt-out instructions.
          </p>
        </section>

        <section className="sms-section">
          <h2>Message Types &amp; Frequency</h2>
          <p>
            Message frequency varies based on your activity. Messages include service
            status updates, parts availability responses, appointment reminders, and
            pickup confirmations. Messages are only sent in direct response to your
            service requests and related follow-ups. No marketing, promotional, or
            unsolicited messages are sent.
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
            text <strong>START</strong> to our dedicated number and we will start sending
            SMS messages to you again.
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
            We respect your privacy. Mobile opt-in data will not be shared with third
            parties for marketing purposes. Your information is collected and used in
            accordance with our Privacy Policy. We will only use your mobile number to
            send you the messages you've requested and for purposes outlined in our
            Privacy Policy.
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
