"use client";

import Form from "next/form";

export default function ContactsForm() {
  return (
    <Form
      className="grid grid-cols-2 gap-8 uppercase text-sm font-bold tracking-wider z-10 relative"
      action={() => {}}
    >
      <div>
        <label htmlFor="fullName" className="form-label">
          Your full name
        </label>
        <input
          name="fullName"
          type="text"
          id="fullName"
          className="form-input"
          maxLength={100}
        />
      </div>
      <div>
        <label htmlFor="email" className="form-label">
          Your email address
        </label>
        <input
          name="email"
          type="email"
          id="email"
          className="form-input"
          maxLength={50}
        />
      </div>
      <div className="col-span-2">
        <label htmlFor="subject" className="form-label">
          Your subject
        </label>
        <input
          name="subject"
          type="text"
          id="subject"
          className="form-input"
          maxLength={200}
        />
      </div>
      <div className="col-span-2">
        <label htmlFor="message" className="form-label">
          Your message
        </label>
        <textarea
          name="message"
          id="message"
          className="form-input h-[140px] py-5 resize-none"
          rows={10}
          maxLength={400}
        />
      </div>

      <button type="submit" className="btn col-start-2 justify-self-end">
        Send Message
      </button>
    </Form>
  );
}
